import { toast, ToastOptions } from 'react-toastify';
import ErrorMessageIcon from 'assets/images/icons/error-message-icon.svg';
import ErrorMessageCloseIcon from 'assets/images/icons/error-message-close-icon.svg';

const optionsError = {
  type: toast.TYPE.ERROR,
  autoClose: 5000,
  position: toast.POSITION.TOP_CENTER,
  className: 'custom-toast',
  icon: <ErrorMessageIcon />,
  closeButton: <ErrorMessageCloseIcon style={{ margin: 'auto' }} />,
} as ToastOptions;

const optionsSuccess = {
  type: toast.TYPE.SUCCESS,
  autoClose: 5000,
  position: toast.POSITION.TOP_RIGHT,
  className: 'custom-toast',
} as ToastOptions;

function _toastError(error: any, duration?: number) {
  const options = duration ? { ...optionsError, autoClose: duration } : optionsError;
  return toast(error, options);
}

function _toastSuccess(success: any, duration?: number) {
  const options = duration ? { ...optionsSuccess, autoClose: duration } : optionsSuccess;

  if (typeof success === 'string') {
    return toast(success, options);
  }

  if (success.request) {
    return toast('Network error', options);
  }
  return toast(success.message, options);
}

class Toast {
  toast: any = null;

  toastSuccess = (message: any) => {
    if (!toast.isActive(this.toast)) {
      this.toast = _toastSuccess(message);
    }
  };

  toastError = (message: any) => {
    if (!toast.isActive(this.toast)) {
      this.toast = _toastError(message);
    }
  };
}

const toastSuccessInstance = new Toast();
const toastErrorInstance = new Toast();

const { toastSuccess } = toastSuccessInstance;
const { toastError } = toastErrorInstance;

export { toastSuccess, toastError };
