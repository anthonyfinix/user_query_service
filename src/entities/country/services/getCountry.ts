import { FilterQuery, QueryOptions } from "mongoose";
import { ServiceResponseInterface } from "../../../models/serviceResponse.interface";
import Country, { CountryInterface } from "../models/country";

interface IGetCountry extends ServiceResponseInterface {
    result?: Array<CountryInterface>
}


// getCountry
export default async (country: CountryInterface, options?: QueryOptions): Promise<IGetCountry> => {
    if (!options) options = {}
    try {
        let response = await Country.find(<FilterQuery<CountryInterface>><unknown>country, false, options)
        if (response) return { message: "success", result: <Array<CountryInterface>><unknown>response }
        return { message: "unsuccessful", error: new Error("there was an error fetching contact details") }
    } catch (e) {
        return { error: e, message: "unsuccessful" }
    }
}