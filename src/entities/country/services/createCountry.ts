import Country, { CountryInterface } from '../models/country';
import { SaveOptions } from 'mongoose';
import { ServiceResponseInterface } from '../../../models/serviceResponse.interface';
export default async (newCountry: CountryInterface, options?: SaveOptions): Promise<ServiceResponseInterface> => {
    if (!options) options = {};
    let country = new Country(newCountry);
    try {
        let response = await country.save(options)
        return { result: response, message: "success" }
    } catch (e) {
        return { error: e }
    }
}