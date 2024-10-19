 import {z} from 'zod'

 export const userNameValidation = z
    .string()
    .min(2, "Username must be atleast of two character")
    .max(20, "Username must be no more than 20 chracter")
    .regex(/^[a-zA-Z0-9_]+$/, "User must not contain special character");



export const signUpSchema = z.object({
    username: userNameValidation,
    email: z.string().email({message:"Invalid Email Address"}),
    password: z.string().min(6, {message:"Password must be atleast 6 character"})
})