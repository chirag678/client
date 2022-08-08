import { toast, TypeOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (message: string, type: TypeOptions) => {
  toast(message, {
    className: 'bg-red-100',
    position: "bottom-right",
    theme: 'dark',
    type: type,
  });
}

export default notify;