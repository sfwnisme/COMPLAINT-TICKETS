import { z } from "zod";

export const createCommentSchema = z.object({
  content: z.string().min(3, 'name should be at least 3 characters').max(3000, 'name should be maximum 3000 characters '),
})