import * as z from "zod";

export const SignupValidation = z.object({
  username: z.string().min(2, { message: "Çok kısa" }),
  name: z.string().min(2, { message: "Çok kısa" }),
  email: z.string().email(),
  password: z.string().min(8, { message: "Şifreniz en az 8 karakter olmalı" }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Şifreniz en az 8 karakter olmalı" }),
});

export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
});
