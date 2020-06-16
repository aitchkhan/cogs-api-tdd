import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Attendance {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    length: 400,
  })
  public userId: number;

  @Column()
  public isLate: boolean;

  @Column()
  public isHalfDay: boolean;

  @Column()
  public checkIn: string;
}
