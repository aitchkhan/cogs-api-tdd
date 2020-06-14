import { getRepository } from 'typeorm';

import { Attendance } from './entity';

export const save = async (payload: Attendance) => {
  const repo = getRepository(Attendance);
  return repo.save(payload);
};

export const findAll = async () => {
  const repo = getRepository(Attendance);
  return repo.find();
};
