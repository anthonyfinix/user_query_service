import bcrypt from 'bcrypt';

export default async (password:string, salt:number):Promise<string> => {
    return await bcrypt.hash(password, salt);
}