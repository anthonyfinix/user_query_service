import {FilterQuery, QueryOptions } from "mongoose";
import { ServiceResponseInterface } from "../../../models/serviceResponse.interface";
import State, { StateInterface } from "../models/state";

export default async (filter: FilterQuery<StateInterface>, newState: StateInterface, options?: QueryOptions): Promise<ServiceResponseInterface> => {
    if (!options) options = {};
    try {
        let response = await State.findOneAndUpdate(filter, newState, options)
        if (!response) return { error: new Error("there was an error updating contact details"), message: "unsuccessful" }
        return { result: response, message: "success" }
    } catch (e) {
        return { error: <Error>e, message: "unsuccessful" }
    }
}