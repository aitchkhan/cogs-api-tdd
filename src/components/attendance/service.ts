import { Attendance } from './entity';
import { findAll, save, getActiveUser, saveAttendance } from './repository';
import { AttendanceRequestPayload, AttendanceSuccessResponse } from './interface';
import { badRequest } from '@hapi/boom';

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

export const markAttendance = async (payload: AttendanceRequestPayload): Promise<AttendanceSuccessResponse | Error> => {
  const user = getActiveUser(payload.userId)
  
  if (!user) throw new Error('user inactive');
  await saveAttendance(payload)
  return {success:true};
  

} 
