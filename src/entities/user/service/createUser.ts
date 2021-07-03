import { ServiceResponseInterface } from "../../../models/serviceResponse.interface";
import User, { UserInterface } from "../models/user"
import mongoose, { startSession } from 'mongoose';
import createContactDetails from "../../contact_details/services/createContactDetails";
import ContactDetails, { ContactDetailsInterface } from "../../contact_details/models/contact_details";
import hashPassword from "../utils/hashPassword";
import configuration from "../../../config";
import City from "../../city/models/city";
import State from "../../state/models/state";
import Country from "../../country/models/country";
export interface createUserResponse extends ServiceResponseInterface {
    result?: UserInterface
}
export default async (newUser: UserInterface): Promise<createUserResponse> => {
    newUser.password = await hashPassword(newUser.password, configuration.passwordHashRound);
    let session = await mongoose.connection.startSession();
    session.startTransaction()
    try {

        let city = await City.findOneAndUpdate(
            { name: newUser.contact_details.city }, {},
            { upsert:true, session, new: true }
        )
        let state = await State.findOneAndUpdate(
            { name: newUser.contact_details.state }, {},
            { upsert: true, session, new: true }
        );
        let country = await Country.findOneAndUpdate(
            { name: newUser.contact_details.country },{},
            { upsert: true, session, new: true }
        );
        let contactDetails = new ContactDetails({ ...newUser.contact_details });
        contactDetails.city = city._id
        contactDetails.state = state._id
        contactDetails.country = country._id
        let contactDetailsCreationResponse = await contactDetails.save({ session });
        let user = new User(newUser);
        user.contact_details = contactDetailsCreationResponse._id;
        let userCreationResponse = await user.save({ session });
        await session.commitTransaction();
        session.endSession();
        return { result: userCreationResponse, message: "success" }
    } catch (e) {
        await session.abortTransaction();
        session.endSession();
        return { error: e }
    }

}