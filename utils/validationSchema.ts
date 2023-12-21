import { object, string, any } from "zod";

const MAX_FILE_SIZE = 5242880;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg"];

export const registerSchema = object({
  name: string()
    .nonempty("Name is required")
    .min(4, "Name must be more than 3 characters")
    .max(32, "Name must be less than 32 characters"),
  email: string()
    .nonempty("Email is required")
    .regex(
      /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
      "Email must be valid!"
    ),
  phone: string()
    .nonempty("Phone number is required")
    .regex(
      /^[\+]{0,1}380([0-9]{9})$/,
      "Phone number must be in the format +380XXXXXXXXX"
    ),
  position_id: string(),
  photo: any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg files are accepted."
    ),
});
