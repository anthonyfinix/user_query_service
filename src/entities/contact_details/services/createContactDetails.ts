import ContactDetails, { ContactDetailsInterface } from '../models/contact_details';
import { SaveOptions } from 'mongoose';
import { ServiceResponseInterface } from '../../../models/serviceResponse.interface';
export default async (newContactDetails: ContactDetailsInterface, options?: SaveOptions): Promise<ServiceResponseInterface> => {
    console.log(newContactDetails)
    if (!options) options = {};
    let contactDetails = new ContactDetails(newContactDetails);
    try {
        let response = await contactDetails.save(options)
        return { result: response, message: "success" }
    } catch (e) {
        return { error: e }
    }
}