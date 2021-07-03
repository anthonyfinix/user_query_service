import { Document, Model, model, Schema } from 'mongoose';
export interface CityInterface extends Document {
    name: String,
}
export const schema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
})
const City: Model<CityInterface> = model('City', schema);
export default City;