import { ToastPosition, Bounce } from 'react-toastify';

export const getDefaultToastConfig = () => ({
	position: 'top-right' as ToastPosition,
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: false,
	draggable: true,
	progress: undefined,
	theme: 'light',
	transition: Bounce,
});

export const getCustomToastConfig = (overrides = {}) => {
	const defaultConfig = getDefaultToastConfig();
	return { ...defaultConfig, ...overrides };
};