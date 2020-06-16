export interface AttendanceRequestPayload {
  userId: number;
  checkIn: string;
}

export interface AttendanceSuccessResponse {
  userId: number;
  checkIn: string;
  isLate: boolean;
  isHalfDay: boolean;
}
