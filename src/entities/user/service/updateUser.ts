import { connection, FilterQuery, UpdateQuery, QueryOptions, ClientSession } from "mongoose";
import { ServiceResponseInterface } from "../../../models/serviceResponse.interface";
import { ContactDetailsInterface } from "../../contact_details/models/contact_details";
import updateContactDetails from "../../contact_details/services/updateContactDetails";
import User, { UserInterface } from "../models/user";

export default async (filter: UserInterface, userNewDetails: UserInterface, options?: QueryOptions): Promise<ServiceResponseInterface> => {
    if (!options) options = {};
    // create session
    let session: ClientSession;
    if (!options.session) {
        session = await connection.startSession();
        session.startTransaction();
    } else {
        session = <ClientSession>options.session;
    }
    // get user contact details id
    let currentUserDetails = await User.findOne(<FilterQuery<UserInterface>><unknown>filter);
    if (!currentUserDetails) {
        await session.abortTransaction()
        session.endSession()
        return { error: new Error('could not get the user details'), message: "unsuccessful" }
    }
    let contactDetailsUpdateResponse = await updateContactDetails({ _id: currentUserDetails.contact_details }, userNewDetails.contact_details)
    if (contactDetailsUpdateResponse.error) {
        await session.abortTransaction()
        session.endSession()
        return { error: contactDetailsUpdateResponse.error, message: "unsuccessful" }
    }
    // handle user details
    userNewDetails.contact_details = currentUserDetails.contact_details;
    try {
        let newUser = await User.findOneAndUpdate(<FilterQuery<ContactDetailsInterface>><unknown>filter, <UpdateQuery<ContactDetailsInterface>><unknown>userNewDetails, { session })
        if (!newUser) {
            await session.abortTransaction()
            session.endSession()
            return { error: new Error("error while updating user details"), message: "unsuccessful" }
        }
        if (!options.session) {
            await session.commitTransaction()
            session.endSession()
        }
        return { result: newUser, message: "successful" }
    } catch (e) {
        await session.abortTransaction()
        session.endSession()
        return { error: new Error("error updating user details"), message: "unsuccessful" }
    }

}