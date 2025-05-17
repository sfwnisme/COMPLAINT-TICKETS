export type TStatus = "open" | "in-progress" | "resolved" | "closed"
export type TPriority = "low" | "medium" | "high" | "critical"
export interface ITag {
  _id: string,
  name: string
  color: string
}
export interface IDepartment {
  _id: string,
  title: string,
  createdAt: string,
  updatedAt: string,
}
export interface ITicket {
  _id: string,
  title: string,
  description?: string,
  status: TStatus,
  priority: TPriority,
  createdBy: { _id: string, name: string },
  tags: ITag[],
  department: { _id: string, title: string }
  createdAt?: string,
  updatedAt?: string
}

export interface IComment {
  _id: string,
  content: string,
  author: { _id: string, name: string },
  ticket: { _id: string, title: string },
  isSolution: boolean,
  createdAt: string,
  updatedAt: string,
}