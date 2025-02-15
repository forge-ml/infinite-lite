import { z } from 'zod'; 

const PersonSchema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.number().min(0, "Age must be a positive number"),
  gender: z.enum(["Male", "Female", "Non-binary", "Other"], {
    required_error: "Gender is required",
  }),
  occupation: z.string().optional(),
  personalityTraits: z.array(z.string()).optional(),
});

 export default PersonSchema;

export const config = {"path":"person","public":true,"cache":"Common","name":"person","description":"epope"};