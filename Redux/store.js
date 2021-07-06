import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
const GET_POST = 'ADD-POST';
const ADD_POST = 'GET-POST';

let store;

const initialState = {
	posts: [],
	newPosts: {},
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const postsReducer = (state = initialState, action) => {
	switch (action.type) {

		case GET_POST: {
			return {
				...state,
				posts: [...action.newPosts, ].reverse(),
			}
		}

		case ADD_POST: {
			return {
				...state,
				newPosts: action.newPosts,
			}
		}

		default:
			return state;
	}
}

function initStore(preloadedState = initialState) {
	return createStore(
		postsReducer,
		preloadedState,
		composeWithDevTools(applyMiddleware(thunk))
	)
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const initializeStore = (preloadedState) => {
	let _store = store ?? initStore(preloadedState)

	// After navigating to a page with an initial Redux state, merge that state
	// with the current state in the store, and create a new store
	if (preloadedState && store) {
		_store = initStore({
		...store.getState(),
		...preloadedState,
		})
		// Reset the current store
		store = undefined
	}

// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store
// Create the store once in the client
	if (!store) store = _store

	return _store
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useStore(initialState) {
	const store = useMemo(() => initializeStore(initialState), [initialState])
	return store
}