import '../../Styles/toast.style.css';
import { useState } from 'react';
export const Toast = () => {
  const [toasts, setToasts] = useState([]);

  const HandleSuccess = (message, type) => {
    const id = new Date().getTime();
    setToasts([...toasts, { id, message, type }]);
  };

  const handleToasClose = (id) => {
    const filterArr = toasts.filter((item) => item.id !== id);
    setToasts(filterArr);
  };

  return (
    <div className='toast-container'>
      <div className='hello'>
        {toasts.map((toast) => {
          return (
            <div className='text-toast-container'>
              <div
                key={toast.id}
                className={`toast text-toast-container ${toast.type}`}>
                {toast.message}{' '}
                <span onClick={() => handleToasClose(toast.id)}>X</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className='btn-toast'>
        <button onClick={() => HandleSuccess('success', 'success')}>
          Success
        </button>
        <button onClick={() => HandleSuccess('warning', 'warning')}>
          warrning
        </button>
        <button onClick={() => HandleSuccess('info', 'info')}>info</button>
        <button onClick={() => HandleSuccess('error', 'error')}>errror</button>
      </div>
    </div>
  );
};
