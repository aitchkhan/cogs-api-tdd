import { getAttendance } from '../../src/components/attendance/service';

describe('Get All User Service', () => {
  test('get users service should return a user list ', () => {
    const users = [
      'ava',
      'boyd',
      'raylan',
      'winona',
    ];
    expect(getAttendance()).toEqual(users);
  });
});
