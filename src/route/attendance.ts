import { methodNotAllowed, notImplemented } from '@hapi/boom';
import * as compose from 'koa-compose';
import * as Router from 'koa-router';

import * as Ctrl from '../components/attendance/ctrl';

const router = new Router({
  prefix: '/api/v1/attendance',
});

/**
 * @api {get} /attendance/ Get All attendance
 * @apiName GetAttendance
 * @apiGroup Attendance
 *
 *
 * @apiSuccess {String} Attendance List of Attendance .
 */
router.get('/', Ctrl.get);

/**
 * @api {post} /attendance/ Create a new attendance
 * @apiName PostAttendance
 * @apiGroup Attendance
 *
 *
 * @apiSuccess {String} Attendance Attendance .
 */
router.post('/', Ctrl.post);

/**
 * @api {put} /attendance/ Update a attendance
 * @apiName UpdateAttendance
 * @apiGroup Attendance
 *
 *
 * @apiSuccess {String} Attendance List of Attendance .
 */
router.put('/', Ctrl.put);

/**
 * @api {delete} /attendance/ Deletes a attendance
 * @apiName DeleteAttendance
 * @apiGroup Attendance
 *
 *
 * @apiSuccess {String} Attendance Deletes a Attendance.
 */
router.delete('/', Ctrl.del);

const routes = router.routes();
const allowedMethods = router.allowedMethods({
  methodNotAllowed: () => methodNotAllowed(),
  notImplemented: () => notImplemented(),
  throw: true,
});

export default () => compose([
  routes,
  allowedMethods,
]);
