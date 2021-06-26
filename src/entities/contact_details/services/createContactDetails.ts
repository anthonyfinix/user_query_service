import ContactDetails, { ContactDetailsInterface } from '../models/contact_details';
import { ServiceResponseInterface } from '../../../models/service_response';
export default async (newContactDetails: ContactDetailsInterface): Promise<ServiceResponseInterface> => {
    let contactDetails = new ContactDetails(newContactDetails);
    try {
        let response = await contactDetails.save()
        return { result: response, message: "success" }
    } catch (e) {
        return { error: e }
    }
}