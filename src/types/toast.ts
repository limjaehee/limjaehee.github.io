export type ToastStatus = 'default' | 'error' | 'success'
export type ToastDuration = number
export type ToastText = string

export interface ToastMessage {
  duration?: string
  text: string
  type: ToastStatus
  id: number
}
