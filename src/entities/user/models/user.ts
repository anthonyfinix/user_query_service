import config from '../../../config';
import { Document, Model, model, Schema } from 'mongoose';
import { IGeneric } from '../../../util/model/generic';

export interface UserNameInterface {
    first: string, middle: string, last: string
}

export interface UserInterface extends IGeneric, Document {
    id?: string,
    name: UserNameInterface,
    username: string,
    password: string,
    primary_number:number,
    secondary_number:number,
    email:string,
    city:string,
    state:string,
    country:string,
    address:string,
    isVerified: boolean,
    role: String,
};

const schema: Schema = new Schema({
    name: {
        type: {
            first: { type: String, required: true },
            middle: { type: String, required: false },
            last: { type: String, required: true }
        },
        required: true,
        unique: true
    },
    primary_number: { type: String, required: true, unique: true },
    secondary_number: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, ref: "City", required: true },
    state: { type: String, ref: "State", required: true },
    country: { type: String, ref: "Country", required: true },
    role: { type: String, required: true, default: config.default_user_role },
})
const User: Model<UserInterface> = model('User', schema);
export default User;