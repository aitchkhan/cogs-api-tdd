import { Attendance } from './entity';
import { findAll, save, getActiveUser, saveAttendance } from './repository';
import { AttendanceRequestPayload, AttendanceSuccessResponse } from './interface';
import { badRequest } from '@hapi/boom';

export const getAttendance = () => {
  return findAll();
};

export const createAttendance = (payload: any) => {
  const attendance = new Attendance();

  attendance.userId = payload.userId;
  attendance.checkIn = payload.checkIn;
  attendance.isLate = payload.isLate;
  attendance.isHalfDay = payload.isHalfDay;
  return save(attendance);
};

function isUserLate(checkIn: string): boolean {
  const checkInThreshold = '10:00';
  return checkIn > checkInThreshold;
}

function isHalfDay(checkIn: string) {
  const halfDayThreshold = '12:00';
  return checkIn > halfDayThreshold;
}

export const markAttendance = async (
  payload: AttendanceRequestPayload,
): Promise<AttendanceSuccessResponse | Error> => {
  const user = getActiveUser(payload.userId);

  if (!user) throw new Error('user inactive');

  const isLate = isUserLate(payload.checkIn);
  const halfDay = isHalfDay(payload.checkIn);

  const response = {
    isLate,
    isHalfDay: halfDay,
    ...payload,
  };
  await saveAttendance(response);
  return response;
};
