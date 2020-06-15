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
    const result = await markAttendance(payload)
    // await expect(markAttendance(payload)).resolves.toEqual({success: true})
  });
});
