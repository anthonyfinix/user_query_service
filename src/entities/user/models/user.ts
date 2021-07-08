import config from '../../../config';
import { Document, Model, model, Schema } from 'mongoose';
import { IGeneric } from '../../../util/model/generic';
import path from 'path';


export interface UserInterface extends IGeneric, Document {
    id?: string,
    first_name: string,
    middle_name: string,
    last_name: string,
    username: string,
    password: string,
    primary_number: number,
    secondary_number: number,
    email: string,
    city: string,
    state: string,
    country: string,
    address: string,
    isVerified: boolean,
    role: String,
    user_profile: string
};

const schema: Schema = new Schema({
    first_name: { type: String, required: true },
    middle_name: { type: String },
    last_name: { type: String, required: true },
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
    user_profile: { type: String, required: true, default: path.join(__dirname, '../../../../public/default_user_profile.jpg') }
})

const User: Model<UserInterface> = model('User', schema);
export default User;