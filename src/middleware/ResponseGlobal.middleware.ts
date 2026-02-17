export interface ReturnValues {
    success: boolean,
    data: string,
    message: string,
    error: string,
    status: number
}
export type GlobalResponse = Partial<ReturnValues>; 