import State, { StateInterface } from '../models/state';
import { SaveOptions } from 'mongoose';
import { ServiceResponseInterface } from '../../../models/serviceResponse.interface';
export default async (newState: StateInterface, options?: SaveOptions): Promise<ServiceResponseInterface> => {
    if (!options) options = {};
    let state = new State(newState);
    try {
        let response = await state.save(options)
        return { result: response, message: "success" }
    } catch (e) {
        return { error: e }
    }
}