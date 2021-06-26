import { ServiceResponseInterface } from "../../../models/serviceResponse.interface";
import User, { UserInterface } from "../models/user"
import mongoose, { startSession } from 'mongoose';
import createContactDetails from "../../contact_details/services/createContactDetails";
import { ContactDetailsInterface } from "../../contact_details/models/contact_details";
import hashPassword from "../utils/hashPassword";
import configuration from "../../../config";
export default async (newUser: UserInterface): Promise<ServiceResponseInterface> => {
    newUser.password = await hashPassword(newUser.password,configuration.passwordHashRound);
    let user = new User(newUser);
    let session = await mongoose.startSession();
    session.startTransaction();
    let contactDetailsCreationResponse = await createContactDetails(newUser.contact_details);
    if (contactDetailsCreationResponse.error) {
        await session.abortTransaction();
        session.endSession();
        return { error: contactDetailsCreationResponse.error };
    }
    let contactDetail = <ContactDetailsInterface>contactDetailsCreationResponse.result;
    user.contact_details = contactDetail._id;
    try {
        let response = await user.save();
        await session.commitTransaction();
        session.endSession();
        return { result: response, message: "success" }
    } catch (e) {
        await session.abortTransaction();
        session.endSession();
        return { error: e }
    }

}