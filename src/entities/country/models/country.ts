import { Document, Model, model, Schema } from 'mongoose';
export interface CountryInterface extends Document {
    name: String,
}
export const schema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
})
const Country: Model<CountryInterface> = model('Country', schema);
export default Country;