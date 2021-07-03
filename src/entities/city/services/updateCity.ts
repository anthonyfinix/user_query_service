import { FilterQuery, QueryOptions } from "mongoose";
import { ServiceResponseInterface } from "../../../models/serviceResponse.interface";
import City, { CityInterface } from "../models/city";

export default async (filter: FilterQuery<CityInterface>, newCity: CityInterface, options?: QueryOptions): Promise<ServiceResponseInterface> => {
    if (!options) options = {};
    try {
        let response = await City.findOneAndUpdate(filter, newCity, options)
        if (!response) return { error: new Error("there was an error updating contact details"), message: "unsuccessful" }
        return { result: response, message: "success" }
    } catch (e) {
        return { error: <Error>e, message: "unsuccessful" }
    }
}