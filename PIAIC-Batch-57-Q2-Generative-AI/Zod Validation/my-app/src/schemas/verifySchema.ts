 import {z} from 'zod'

 export const verifySchema = z.object({
    //code: z.string().length(6, {message:"Verifivation code must be of 6 digits"})
    code: z.string().length(6, "Verifivation code must be of 6 digits")
 })
