/**
 * Gets the processing page
 * @param {array} data
 */
'use strict';

async function getProcessingPage(data) {
	for (let i = 0; i < data.length; i++) {
		const state = data[i].state;
		const errorCode = data[i].errorCode;

		switch (state) {
			case 'processing':
				await new Promise((r) => setTimeout(r, 2000));
				break;
			case 'error':
				switch (errorCode) {
					case 'NO_STOCK':
						return {
							title: 'Error page',
							message: 'No stock has been found',
						};
					case 'INCORRECT_DETAILS':
						return {
							title: 'Error page',
							message: 'Incorrect details have been entered',
						};
					default:
						return { title: 'Error page', message: null };
				}
			case 'success':
				return { title: 'Order complete', message: null };
			default:
				return { title: 'Error page', message: null };
		}
	}
}
