import { ClientSession, connection, FilterQuery, QueryOptions } from "mongoose";
import { ServiceResponseInterface } from "../../../models/serviceResponse.interface";
import ContactDetails, { ContactDetailsInterface } from "../models/contact_details";

export default async (filter: FilterQuery<ContactDetailsInterface>, newContactDetails: ContactDetailsInterface, options?: QueryOptions): Promise<ServiceResponseInterface> => {
    if (!options) options = {};
    try {
        let response = await ContactDetails.findOneAndUpdate(filter, newContactDetails, options)
        if (!response) return { error: new Error("there was an error updating contact details"), message: "unsuccessful" }
        return { result: response, message: "success" }
    } catch (e) {
        return { error: <Error>e, message: "unsuccessful" }
    }
}