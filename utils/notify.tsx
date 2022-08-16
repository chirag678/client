import { Id, toast, TypeOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (message: string, type: TypeOptions) => {
  toast(message, {
    position: "bottom-right",
    theme: 'dark',
    type: type,
  });
}

export const notifyPromise = (message: string) => {
  const id = toast.loading("Please wait...", {
    position: "bottom-right",
    theme: 'dark',
  });
  return id;
}

export const notifyResolve = (id: Id, message: string, type: TypeOptions) => {
  toast.update(id, {
    render: message,
    type: type,
    position: "bottom-right",
    theme: 'dark',
    isLoading: false,
    autoClose: 2000,
    closeButton: true,
  });
}

export default notify;