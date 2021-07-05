import { ServiceResponseInterface } from "../../../models/serviceResponse.interface";
import User, { UserInterface } from "../models/user"
import mongoose, { startSession } from 'mongoose';
import hashPassword from "../utils/hashPassword";
import configuration from "../../../config";
import City from "../../city/models/city";
import State from "../../state/models/state";
import Country from "../../country/models/country";
import amqplibInstance, { amqplibQueues, userActions } from "../../../util/amqpConnect";
export interface createUserResponse extends ServiceResponseInterface {
    result?: UserInterface
}
export default async (newUser: UserInterface): Promise<createUserResponse> => {
    newUser.password = await hashPassword(newUser.password, configuration.passwordHashRound);
    let session = await mongoose.connection.startSession();
    session.startTransaction()
    try {

        let city = await City.findOneAndUpdate(
            { name: newUser.city }, {},
            { upsert: true, session, new: true }
        )
        let state = await State.findOneAndUpdate(
            { name: newUser.state }, {},
            { upsert: true, session, new: true }
        );
        let country = await Country.findOneAndUpdate(
            { name: newUser.country }, {},
            { upsert: true, session, new: true }
        );
        let user = new User(newUser);
        user.city = city._id
        user.state = state._id
        user.country = country._id
        let userCreationResponse = await user.save({ session });
        await session.commitTransaction();
        session.endSession();
        amqplibInstance.channel.sendToQueue(
            amqplibQueues.USER,
            Buffer.from(JSON.stringify({ type: userActions.USER_CREATION, payload: newUser }))
        )
        return { result: userCreationResponse, message: "success" }
    } catch (e) {
        await session.abortTransaction();
        session.endSession();
        return { error: e }
    }

}