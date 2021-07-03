import { Document, Model, model, Schema } from 'mongoose';
export interface StateInterface extends Document {
    name: String,
}
export const schema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
})
const State: Model<StateInterface> = model('State', schema);
export default State;