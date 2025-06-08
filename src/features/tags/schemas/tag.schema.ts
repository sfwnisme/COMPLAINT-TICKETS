import { z } from "zod";

export const updateTagSchema = z.object({
  name: z.string().min(5, 'tag name must be at least 3 characters')
})
export const createTagSchema = z.object({
  name: z.string().min(5, 'tag name must be at least 3 characters')
})

export type UpdateTagSchemaType = z.infer<typeof updateTagSchema>
export type CreateTagSchemaType = z.infer<typeof createTagSchema>