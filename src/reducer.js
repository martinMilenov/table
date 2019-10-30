import { combineReducers } from "redux";
import XHR from 'xhr-promise';
import createForm from "./pages/Create/reducer";
import list from "./pages/List/reducer";
import newCity from './pages/AddCity/reducer';

import { fromJS } from 'immutable';

import { apiBasePath, ERROR, FINISHED } from './constants';

export const requestSendingMiddleware = store => next => action => {
    // Check if the action which has been sent wants to go to the backend.
	if (action.request) {
		// Send an action with a request state of sent.
		action.state = 'sent';
		next(action);

		// Get the body.
		const body = Object.assign({}, action.body);

		// Setup headers from defaults.
		const headers = Object.assign(
			{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
			},
			// restApiConfig.DefaultHeaders
		);

		// Check if attaching an auth cookie.
		// if (restApiConfig.authenCookie) {
		// 	// Get the authentification cookie if it exists.
		// 	const authentificationCookie = Cookie.get(
		// 		restApiConfig.authenCookie
		// 	);
		// 	if (authentificationCookie) {
		// 		// Add it to the headers.
		// 		headers[restApiConfig.authenCookie] = authentificationCookie;
		// 	}
		// }

		// Prepare the request and send it.
		const request = new XHR();
		const requestBody = {
			method: action.requestType || action.requestMethod || action.method || 'POST',
			url:
				action.specificURL ||
				[
                    'http://localhost:9999',
					action.rawRequest ? null : apiBasePath,
					action.request
				]
					.filter(e => e)
					.join('/'),
			headers,
			data: JSON.stringify(
                action.params
			),
			withCredentials: false
		};

		const endBody = Object.assign(
			{},
			// restApiConfig.defaultOptions,
			requestBody
		);

		const requestPromise = request.send(endBody);
		// Return the request promise.
		return requestPromise
			.then(response => {
				if (response && response.responseText) {
					// Check for an error key.
					if (response.responseText.error) {
						const { code } = response.responseText.error;
						const endOfReq = action.request.split('/').reverse()[0];

						// Throw an error in that case.
						action.state = ERROR;
						action.response = fromJS(response.responseText.error);
					} else {
						// Set the response and leave.
						action.state = FINISHED;
						action.response = fromJS(response.responseText);
					}
				} else {
					// If for some reason the response is empty pass an empty object.
					action.state = FINISHED;
					action.response = fromJS({});
				}

				next(action);
				return action;
			})
			.catch(error => {
				action.state = ERROR;
				// Check if response is empty, and generate an empty map.
				if (!action.response) {
					if (error.hasOwnProperty('status') && error.status === 0) {
						// Check for no connection error.
						action.response = fromJS({
							message: 'No connection.'
						});
					} else if (error.reason) {
						// If the error has a reason, set it under the message.
						action.response = fromJS({
							message: error.reason
						});
					} else {
						// Else set the whole error object to the response.
						action.response = fromJS({
							error
						});
					}
				}

				next(action);
				return action;
			});
	}

	// Normal actions should return promises as well.
	return new Promise(resolve => {
		next(action);
		resolve();
	});
};

export default combineReducers({ createForm, list, newCity });