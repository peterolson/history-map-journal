export const yearState = (() => {
	const minYear = -2000;
	const maxYear = new Date().getFullYear();

	let startYear = $state(1200);
	let endYear = $state(1800);

	return {
		get start() {
			return startYear;
		},
		set start(value) {
			startYear = value;
		},
		get end() {
			return endYear;
		},
		set end(value) {
			endYear = value;
		},
		get min() {
			return minYear;
		},
		get max() {
			return maxYear;
		}
	};
})();
