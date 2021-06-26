import { ServiceResponseInterface } from "../../../models/service_response";
import User, { UserInterface } from "../models/user"
import mongoose from 'mongoose';
import createContactDetails from "../../contact_details/services/createContactDetails";
import { ContactDetailsInterface } from "../../contact_details/models/contact_details";
export default async (newUser: UserInterface): Promise<ServiceResponseInterface> => {
    let session = await mongoose.startSession();
    session.startTransaction()
    let contactDetailsCreationResponse: ServiceResponseInterface = await createContactDetails(newUser.contact_details);
    if (contactDetailsCreationResponse.error) {
        let error: Error = <Error>contactDetailsCreationResponse.error;
        session.abortTransaction();
        return { error: error };
    }
    let contactDetail: ContactDetailsInterface = <ContactDetailsInterface>contactDetailsCreationResponse.result;
    newUser.contact_details = contactDetail._id;
    let user = new User(newUser);
    try {
        let response = await user.save();
        session.commitTransaction();
        session.endSession();
        return { result: response, message: "success" }
    } catch (e) {
        session.abortTransaction();
        session.endSession();
        return { error: e }
    }

}