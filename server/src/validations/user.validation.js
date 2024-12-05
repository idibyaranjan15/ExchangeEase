import zod from "zod";
export const signupSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstname: zod.string(),
  lastname: zod.string(),
});
export const signinSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});
