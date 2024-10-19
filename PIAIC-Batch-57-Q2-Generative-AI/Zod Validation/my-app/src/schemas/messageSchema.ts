import {z} from 'zod'

export const messagesSchema = z.object({
   content: z
   .string()
   .min(10, {message:"Content must be atleast of 10 Character"})
   .max(300, {message: "COntent must be no longer than 300 characters"})
})