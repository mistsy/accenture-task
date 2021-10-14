(() => {
	class Provider {
		/**
		 * Gets the weather for a given city
		 */
		static getWeather(city) {
			return Promise.resolve(`The weather of ${city} is Cloudy`);
		}
		/**
		 * Gets the currency for a given city
		 */
		static getLocalCurrency(city) {
			return Promise.resolve(`The local currency of ${city} is GBP`);
		}
		/**
		 * Given Longtitude and latitude, this function returns a city
		 */
		static findCity(long, lat) {
			return Promise.resolve(`London`);
		}
	}

	// 1
	const city = Provider.findCity(51.5074, 0.1278);

	city.then((cityRes) => {
		console.log(cityRes);
	});

	// 2
	city
		.then((cityRes) => Provider.getWeather(cityRes))
		.then((weatherRes) => console.log(weatherRes));

	// 3
	city
		.then((cityRes) => {
			return Promise.all([
				Provider.getWeather(cityRes),
				Provider.getLocalCurrency(cityRes),
			]);
		})
		.then((res) => console.log(res[0] + ', ' + res[1]));
})();
