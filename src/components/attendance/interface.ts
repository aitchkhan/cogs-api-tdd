export interface  AttendanceRequestPayload {
    userId: number,
    checkIn: string,
}

export interface AttendanceSuccessResponse {
    success: boolean;
}