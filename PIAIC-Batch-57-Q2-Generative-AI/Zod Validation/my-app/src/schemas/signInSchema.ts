 import {z} from 'zod'

 export const signInSchema = z.object({
    identifier: z.string(),             /*Identifier is the username/email, this term is used in production*/
    password: z.string(),
 })