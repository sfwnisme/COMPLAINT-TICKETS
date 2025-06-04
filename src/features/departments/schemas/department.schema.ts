import { z } from "zod";

export const updateDepartmentSchema = z.object({
  title: z.string().min(5, 'department name must be at least 3 characters')
})

export type UpdateDepartmentSchemaType = z.infer<typeof updateDepartmentSchema>