//entity is typeorm specific

import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Blood {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  createdAt: Date;

  @Column()
  usedAt: Date;

  @Column()
  bloodtype: string;
}
