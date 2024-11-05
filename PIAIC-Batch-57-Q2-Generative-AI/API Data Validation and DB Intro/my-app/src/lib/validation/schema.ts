import { z } from "zod"



export const LoginSchema = z.object({
    email: z
    .string({message: "Email Should be of String"})
    .email({message: "Inavlid Email"}),
    password: z
    .string()
    .min(6, {message: "Password must be of atleast 6 character(s)"})
})