export interface Entry {
  // TODO transform ID types to number? or specific type
  id: string;
  title: string;
  body: string;
  created_at: Date;
  authorId: number;
  categoryId: number;
  tags: number;
  cheers: number;
}