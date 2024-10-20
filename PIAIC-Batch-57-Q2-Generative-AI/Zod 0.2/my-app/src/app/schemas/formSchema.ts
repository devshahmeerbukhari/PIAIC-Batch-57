import { z } from 'zod';

// Define the schema
export const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  age: z.number().min(18, { message: "You must be at least 18" }),
});

// Infer the TypeScript type from the schema
export type FormSchemaType = z.infer<typeof formSchema>;