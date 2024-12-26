import { useEffect, useState } from 'react';

const useWindowWidth: React.FC = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		// Set event listener for window size changes
		window.addEventListener('resize', handleResize);

		// Clean up event listeners when a component is no longer used
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return windowWidth;
}

export default useWindowWidth;