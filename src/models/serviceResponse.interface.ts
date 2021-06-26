export interface ServiceResponseInterface {
    result?: Array<unknown> | Object,
    message?: string,
    details?: Array<unknown>,
    error?: Error
}