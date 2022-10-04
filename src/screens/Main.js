import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Button, Text } from 'react-native-paper'
import QRCode from 'react-native-qrcode-svg'

const Main = ({ navigation }) => {
	const [value, setValue] = React.useState('')
	return (
		<View style={styles.mainContainer}>
			<View style={styles.infoView}>
				<Text style={styles.infoText}>Giriş Yapmak İÇin QR Kodu Okutunuz.</Text>
			</View>
			<QRCode value='https://fintechyazilim.com/' size={200} />

			<TouchableOpacity
				style={styles.buttonContainer}
				mode='contained'
				onPress={() => navigation.navigate('Login')}
			>
				<Text style={styles.buttonText}>ÇIKIŞ</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'black',
		height: '100%',
		width: '100%',
	},
	infoView: {
		marginBottom: 20,
		backgroundColor: '#ef004c',
		padding: 8,
		borderRadius: 5,
	},
	infoText: {
		fontSize: 15,
		color: 'white',
		fontWeight: 'bold',
	},
	buttonContainer: {
		backgroundColor: '#ef004c',
		borderRadius: 10,
		marginVertical: 10,
		padding: 10,
		alignSelf: 'center',
		width: '40%',
	},
	buttonText: { alignSelf: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 },
})
export default Main
