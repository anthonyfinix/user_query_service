import { ClientSession, connection, FilterQuery, QueryOptions } from "mongoose";
import { ServiceResponseInterface } from "../../../models/serviceResponse.interface";
import Country, { CountryInterface } from "../models/country";

export default async (filter: FilterQuery<CountryInterface>, newCountry: CountryInterface, options?: QueryOptions): Promise<ServiceResponseInterface> => {
    if (!options) options = {};
    try {
        let response = await Country.findOneAndUpdate(filter, newCountry, options)
        if (!response) return { error: new Error("there was an error updating contact details"), message: "unsuccessful" }
        return { result: response, message: "success" }
    } catch (e) {
        return { error: <Error>e, message: "unsuccessful" }
    }
}