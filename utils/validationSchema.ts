import { object, string } from "zod";

export const registerSchema = object({
  name: string()
    .nonempty("Name is required")
    .min(4, "Name must be more than 3 characters")
    .max(32, "Name must be less than 32 characters"),
  email: string()
    .nonempty("Email is required")
    .email({ message: "Email is invalid" }),
  phone: string()
    .nonempty("Phone number is required")
    .regex(/^\+380\d{9}$/, "Phone number must be in the format +380XXXXXXXXX"),
  position: string(),
  photo: string(),
});
