import { markAttendance } from '../../src/components/attendance/service';
jest.mock('../../src/components/attendance/repository')
import { saveAttendance } from '../../src/components/attendance/repository';

describe('Mark attendance', () => {
  it('should throw error if user is inactive', async () => {
    const payload = {
      userId:  123456,
      checkIn: '02:00'
    }

    await expect(markAttendance(payload)).rejects.toThrowError('user inactive');
  })
  it('lets user check-in ', async () => {
    const payload = {
      userId: 1,
      checkIn: '09:00'
    }

    const responsePayload = {
      userId: 1,
      checkIn: '09:00',
      isLate: false,
      isHalfDay: false,
    }

    await expect(markAttendance(payload)).resolves.toEqual(responsePayload)
  });

  it('should be marked as late when check-in time is greater than 10:00 AM', async () => {
    const payload = {
      userId: 1,
      checkIn: '10:01'
    }

    const response = {
      userId: 1,
      checkIn: '10:01',
      isLate: true,
      isHalfDay: false,
    }

    await expect(markAttendance(payload)).resolves.toEqual(response)
  });

  it('should be marked as half day when check-in time is greater than 12:00 PM', async () => {
    const payload = {
      userId: 1,
      checkIn: '12:01'
    }

    const response = {
      userId: 1,
      checkIn: '12:01',
      isLate: true,
      isHalfDay: true,
    }

    await expect(markAttendance(payload)).resolves.toEqual(response)
  });
});
