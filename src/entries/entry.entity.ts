import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Entry {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column()
  authorId: string;

  @Column()
  categoryId: string;

  @Column()
  created_at: Date;

  @Column()
  cheers: number;
}
