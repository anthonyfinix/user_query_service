import User from '../models/user';
import { UserInterface } from '../models/user';
import { ServiceResponseInterface } from '../models/service_response';
import { FilterQuery } from 'mongoose';
export interface IGetUserParameters extends UserInterface { }
export default async ({ name, username, password, contact_details, isVerified, role }: IGetUserParameters): Promise<ServiceResponseInterface> => {
    let query: FilterQuery<UserInterface> = {};
    query.name = name;
    try {
        let users = await User.find(query);
        return { message: "success", result: users }
    } catch (e) {
        return { error:e };
    }
}