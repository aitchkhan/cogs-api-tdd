import { getRepository } from 'typeorm';

import { Attendance } from './entity';
import { AttendanceRequestPayload, AttendanceSuccessResponse } from './interface';

export const save = async (payload: Attendance) => {
  const repo = getRepository(Attendance);
  return repo.save(payload);
};

export const findAll = async () => {
  const repo = getRepository(Attendance);
  return repo.find();
};

export const getActiveUser = async (_: number): Promise<{ id: number }> => {
  return { id: 1 };
};

export const saveAttendance = async (
  payload: AttendanceRequestPayload,
): Promise<AttendanceSuccessResponse> => {
  return payload;
};
