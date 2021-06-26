import express from 'express';
import configuration from '../config';
export interface urlEncodedParamInterface {
    extended?: boolean
}
export default ({ extended }: urlEncodedParamInterface) => {
    if (!extended) extended = configuration.express.default_url_encoding_extended;
    return express.urlencoded({ extended })
}