import mongoose, { Connection, ConnectOptions } from 'mongoose';
export interface mongooseOptionInterface {
    mongoURI: string,
    options?: ConnectOptions
}
export default async ({ mongoURI, options }: mongooseOptionInterface): Promise<any | { error: Error | string } | typeof mongoose> => {
    if (!mongoURI) return { error: "no url provided" }
    if (!options) options = {};
    try {
        return { connection: await mongoose.connect(mongoURI, options) }
    } catch (e) {
        return { error: e }
    }
}