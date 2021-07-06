import '../styles/globals.css';
import { Provider } from 'react-redux'
import React from 'react';
import type { AppProps} from 'next/app'
import { useStore } from '../Redux/store'

export default function App({ Component, pageProps }: AppProps): unknown {

	const store = useStore(pageProps.initialReduxState);

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}