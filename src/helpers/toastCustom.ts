import { toast } from "react-toastify";

export const toastDefault = ( msg: string ) => toast(msg, {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
})

export const toastInfo = ( msg: string ) => toast.info(msg, {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
})

export const toastSuccess = ( msg: string ) => toast.success(msg, {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
})

export const toastWarning = ( msg: string ) => toast.warning(msg, {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
})

export const toastError = ( msg: string ) => toast.error(msg, {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
})
