import { Attendance } from './entity';
import { findAll, save } from './repository';

export const getAttendance = () => {
  return findAll();
};

export const createAttendance = (payload: any) => {
  const attendance = new Attendance();

  attendance.name = payload.name;
  attendance.isPublished = payload.isPublished;
  attendance.copiesSold = payload.copiesSold;
  return save(attendance);
};
