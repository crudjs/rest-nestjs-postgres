import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Author {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;
}
