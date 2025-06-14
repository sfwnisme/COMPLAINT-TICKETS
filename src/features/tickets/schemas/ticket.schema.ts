import { z } from "zod";
import { TICKET_PRIORITY, TICKET_STATUS } from "../../../constraints/constraints";

export const createCommentSchema = z.object({
  content: z.string().min(3, 'name should be at least 3 characters').max(3000, 'name should be maximum 3000 characters '),
})

export const createTicketSchema = z.object({
  title: z.string().min(15, 'ticket title must be 15 characters at least').max(120, 'ticket title must be 120 characters maximum'),
  description: z.string().min(15, 'ticket title must be 15 characters at least'),
  priority: z.enum(TICKET_PRIORITY),
  assignedTo: z.string().optional(),
  tags: z.string().array().optional()
})
export type CreateTicketType = z.infer<typeof createTicketSchema>

export const updateTicketSchema = z.object({
  status: z.enum(TICKET_STATUS).optional(),
  assignedTo: z.string().optional(),
  tags: z.string().array().optional()
})
export type UpdateTicketType = z.infer<typeof updateTicketSchema>