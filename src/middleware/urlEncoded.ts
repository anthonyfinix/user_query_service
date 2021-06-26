import express from 'express';
export interface urlEncodedParamInterface {
    extended?: boolean
}
export default ({ extended }: urlEncodedParamInterface) => {
    if (!extended) extended = true;
    return express.urlencoded({ extended })
}