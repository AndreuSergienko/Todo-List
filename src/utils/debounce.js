export const debounce = (callback, ms) => {
	let timer;
	return (evt) => {
		clearTimeout(timer);

		timer = setTimeout(() => {
			callback(evt);
		}, ms);
	};
};
