import { FilterQuery, QueryOptions } from "mongoose";
import { ServiceResponseInterface } from "../../../models/serviceResponse.interface";
import City, { CityInterface } from "../models/city";

interface IGetCity extends ServiceResponseInterface {
    result?: Array<CityInterface>
}

// getCity
export default async (contact_details: CityInterface, options?: QueryOptions): Promise<IGetCity> => {
    if (!options) options = {}
    try {
        let cityResponse = await City.find(<FilterQuery<CityInterface>><unknown>contact_details, false, options)
        if (cityResponse) return { message: "success", result: <Array<CityInterface>><unknown>cityResponse }
        return { message: "unsuccessful", error: new Error("there was an error fetching contact details") }
    } catch (e) {
        return { error: e, message: "unsuccessful" }
    }
}