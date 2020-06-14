import { Context } from 'koa';
import { createAttendance, getAttendance  } from './service';

export const get = async (ctx: Context) => {
  ctx.body = { attendance: await getAttendance(), time: Date.now() };
};

export const post = async (ctx: Context) => {
  const payload = { ...ctx.request.body };
  ctx.body = { attendance: await createAttendance(payload) };
};

export const put = (ctx: Context) => {
  ctx.body = '[PUT] attendance';
};

export const del = (ctx: Context) => {
  ctx.body = '[DEL] attendance';
};
