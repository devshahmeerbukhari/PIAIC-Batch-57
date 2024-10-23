import { strict } from 'assert'
import {z} from 'zod'

const userSchema = z.object({
    username: z
        .string()
        .min(5, {message: "Username must be of atleast 5 characters"})
        .max(12, {message: "Username could not exceed 12 characters"}),
    email: z
        .string()
        .email({message: "Invalid Email!"})
})

export default userSchema;