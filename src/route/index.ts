import * as compose from 'koa-compose';
import * as Router from 'koa-router';
// Import all routes
import attendance from './attendance';

export default () => compose([
  attendance(),
]);
