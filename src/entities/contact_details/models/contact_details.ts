import { Document, Model, model, Schema } from 'mongoose';
export interface ContactDetailsInterface extends Document {
    primary_number: Number,
    secondary_number: Number,
    email: string,
    address: string
    city: string,
    state: string,
    pincode: string,
    coordinates?: string
}
export const schema: Schema = new Schema({
    primary_number: { type: Number, required: true, unique: true },
    secondary_number: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pincode: { type: Number, required: true },
    coordinates: { type: Number }
})
const ContactDetails: Model<ContactDetailsInterface> = model('ContactDetail', schema);
export default ContactDetails;