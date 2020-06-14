import { Column, Entity, PrimaryGeneratedColumn  } from 'typeorm';

@Entity()
export class Attendance {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    length: 400,
  })
  public name: string;

  @Column()
  public isPublished: boolean;

  @Column('double')
  public copiesSold: number;
}
