import { object, string } from "zod";

const registerSchema = object({
  name: string()
    .nonempty("Name is required")
    .max(32, "Name must be less than 32 characters"),
  email: string().nonempty("Email is required").email("Email is invalid"),
  phone: string()
    .nonempty("Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});
