import React from 'react'
import { connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/Login'
import Main from './screens/Main'

const Stack = createNativeStackNavigator()

const Router = () => {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='Login'
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name='Main' component={Main} />
					<Stack.Screen name='Login' component={Login} />
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}

export default Router
