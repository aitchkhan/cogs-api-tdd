import { AttendanceRequestPayload, AttendanceSuccessResponse } from "../interface"

const users = [
    {id: 1, fullName: 'Abdullah Waqas', isActive: true},
    {id: 2, fullName: 'Saud', isActive: false},
]


export const getActiveUser = (id: number) => {
    return users.find(u => u.id === id && u.isActive === true)
}

export const saveAttendance = async (payload: AttendanceRequestPayload): Promise<AttendanceSuccessResponse> => {
    console.log(payload)
    return {success: true}
}