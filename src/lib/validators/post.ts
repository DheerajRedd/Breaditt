import { z } from "zod";

export const PostValidator = z.object({
  title: z
    .string()
    .min(3, { message: "Title  should be at least 3 characters long." })
    .max(128, { message: "Title cannot exceed 128 characters." }),
  subredditId: z.string(),
  content: z.any(),
});
export type PostCreationRequest = z.infer<typeof PostValidator>;
