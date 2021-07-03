import City, { CityInterface } from '../models/city';
import { SaveOptions } from 'mongoose';
import { ServiceResponseInterface } from '../../../models/serviceResponse.interface';
export default async (newCity: CityInterface, options?: SaveOptions): Promise<ServiceResponseInterface> => {
    if (!options) options = {};
    let city = new City(newCity);
    try {
        let response = await city.save(options)
        return { result: response, message: "success" }
    } catch (e) {
        return { error: e }
    }
}