export interface IResponseParameters {
    message?: string,
    result: [] | Object,
    details: [] | object,
    error: string
}
export class Response {
    private declare result: Object | [];
    private declare message: string;
    private declare details: Object | [];
    constructor({ message, result, details }: IResponseParameters) {
        this.message = this.getMessage(message);
        this.details = this.getDetails(details);
        this.result = this.getResult(result);
    }
    protected getMessage(message?: string): string {
        if (message) return message;
        return "success";
    }
    protected getResult(result: [] | object): object | [] {
        if (result) return result;
        return []
    }
    protected getDetails(details: [] | object): object | [] {
        if (details) return details;
        return []
    }
    public getObjectResponse(): object {
        return {
            result: this.result,
            message: this.message,
            details: this.details,
        }
    }
}