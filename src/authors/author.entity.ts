import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Author {
  @PrimaryColumn()
  id: string;

  @Column()
  display_name: string;

  @Column()
  email: string;
}
