import { FilterQuery, QueryOptions } from "mongoose";
import { ServiceResponseInterface } from "../../../models/serviceResponse.interface";
import State, { StateInterface } from "../models/state";

interface IGetState extends ServiceResponseInterface {
    result?: Array<StateInterface>
}


// getState
export default async (state: StateInterface, options?: QueryOptions): Promise<IGetState> => {
    if (!options) options = {}
    try {
        let response = await State.find(<FilterQuery<StateInterface>><unknown>state, false, options)
        if (response) return { message: "success", result: <Array<StateInterface>><unknown>response }
        return { message: "unsuccessful", error: new Error("there was an error fetching contact details") }
    } catch (e) {
        return { error: e, message: "unsuccessful" }
    }
}