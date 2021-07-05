import { connection, FilterQuery, UpdateQuery, QueryOptions, ClientSession } from "mongoose";
import { ServiceResponseInterface } from "../../../models/serviceResponse.interface";
import City from "../../city/models/city";
import Country from "../../country/models/country";
import State from "../../state/models/state";
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
    try {
        let user = await User.findOne(<FilterQuery<UserInterface>><unknown>filter, { session });
        if (!user) return { error: new Error("no user found"), message: "unsuccessful" }
        let city = await City.findOneAndUpdate(
            { name: userNewDetails.city }, {},
            { upsert: true, session, new: true }
        );
        user.city = city._id;
        let state = await State.findOneAndUpdate(
            { name: userNewDetails.state }, {},
            { upsert: true, session, new: true }
        );
        user.state = state._id;
        let country = await Country.findOneAndUpdate(
            { name: userNewDetails.country }, {},
            { upsert: true, session, new: true }
        );
        user.state = country._id;
        user.save({ session });
        return { message: "success", result: user }
    } catch (e) {
        session.abortTransaction();
        session.endSession();
        return { error: e }
    }


}