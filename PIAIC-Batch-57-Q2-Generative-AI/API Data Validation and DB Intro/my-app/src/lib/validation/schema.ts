import { z } from "zod"



export const LoginSchema = z.object({
    email: z
    .string({message: "Email Should be of String"})
    .email({message: "Inavlid Email"}),
    password: z
    .string()
    .min(6, {message: "Password must be of atleast 6 character(s)"})
})


export const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    role: z
      .string({
        required_error: "Please select an role for user",
      })
      .min(1),
  });