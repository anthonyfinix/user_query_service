import { FilterQuery, QueryOptions } from "mongoose";
import { ServiceResponseInterface } from "../../../models/serviceResponse.interface";
import ContactDetails, { ContactDetailsInterface } from "../models/contact_details";

interface IGetContactDetails extends ServiceResponseInterface {
    result?: Array<ContactDetailsInterface>
}


// getContactDetails
export default async (contact_details: ContactDetailsInterface, options?: QueryOptions): Promise<IGetContactDetails> => {
    if (!options) options = {}
    try {
        let contactDetailsResponse = await ContactDetails.find(<FilterQuery<ContactDetailsInterface>><unknown>contact_details, false, options)
        if (contactDetailsResponse) return { message: "success", result: <Array<ContactDetailsInterface>><unknown>contactDetailsResponse }
        return { message: "unsuccessful", error: new Error("there was an error fetching contact details") }
    } catch (e) {
        return { error: e, message: "unsuccessful" }
    }
}