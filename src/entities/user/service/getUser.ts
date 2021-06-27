import User from '../models/user';
import { UserInterface } from '../models/user';
import { ServiceResponseInterface } from '../../../models/serviceResponse.interface';
import { FilterQuery, QueryOptions } from 'mongoose';
export interface IGetUserParameters extends UserInterface { }
export interface IGetUserResponse extends ServiceResponseInterface {
    result?: [UserInterface]
}
export default async (filter: IGetUserParameters, options?: QueryOptions): Promise<ServiceResponseInterface> => {
    let query: FilterQuery<UserInterface> = <FilterQuery<UserInterface>><unknown>filter;
    try {
        let searchQuery = User.find(query)
        searchQuery.populate('contact_details')
        let users = await searchQuery.exec();
        return { message: "success", result: users }
    } catch (e) {
        return { error: <Error>e };
    }
}