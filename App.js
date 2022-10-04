import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from './src/redux/store'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { StatusBar, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Router from './src/Router'
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const theme = {
	...DefaultTheme,
	roundness: 2,
	version: 3,
	colors: {
		...DefaultTheme.colors,
		primary: '#3498db',
		secondary: '#f1c40f',
		tertiary: '#a1b2c3',
	},
}

const App = () => {
	const isDarkMode = useColorScheme() === 'dark'
	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	}
	return (
		<Provider store={store}>
			<PaperProvider theme={theme}>
				<PersistGate persistor={persistor}>
					<StatusBar
						barStyle={isDarkMode ? 'light-content' : 'dark-content'}
						backgroundColor={backgroundStyle.backgroundColor}
					/>
					<Router />
				</PersistGate>
			</PaperProvider>
		</Provider>
	)
}

export default App
