import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Alert, Pressable, Text, Modal, TouchableOpacity } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import Animation from '../components/Animation'

const Login = ({ navigation }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(true)
	const [animation, setAnimation] = useState(false)
	const [modalVisible, setModalVisible] = useState(false)

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			setUsername('')
			setPassword('')
			setAnimation(false)
		})
		return unsubscribe
	}, [navigation])

	const loginHandler = () => {
		if (username === '1' && password === '1') {
			setAnimation(true)
			setTimeout(() => {
				setAnimation(false)
				navigation.navigate('Main')
			}, 5000)
		} else {
			setModalVisible(true)
		}
	}

	const showPasswordHandler = () => {
		setShowPassword(!showPassword)
	}

	return (
		<>
			{animation ? (
				<Animation />
			) : (
				<>
					<View style={styles.mainContainer}>
						<View style={{ width: '80%' }}>
							<TextInput
								label='Kullanıcı Adı'
								value={username}
								onChangeText={(text) => setUsername(text)}
								selectionColor={'#ef004c'}
							/>
							<TextInput
								style={styles.textInput}
								label='Şifre'
								value={password}
								onChangeText={(text) => setPassword(text)}
								secureTextEntry={showPassword}
								selectionColor={'#ef004c'}
								right={<TextInput.Icon icon='eye' onPress={showPasswordHandler} />}
							/>
							<TouchableOpacity style={styles.buttonContainer} mode='contained' onPress={loginHandler}>
								<Text style={styles.buttonText}>GİRİŞ</Text>
							</TouchableOpacity>
						</View>
					</View>
				</>
			)}

			{modalVisible && (
				<Modal
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
						Alert.alert('Modal has been closed.')
						setModalVisible(!modalVisible)
					}}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={styles.modalText}>Kullanıcı Bilgileri Hatalı!</Text>
							<Pressable
								style={[styles.button, styles.buttonClose]}
								onPress={() => setModalVisible(!modalVisible)}
							>
								<Text style={styles.textStyle}>KAPAT</Text>
							</Pressable>
						</View>
					</View>
				</Modal>
			)}
		</>
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
	textInput: {
		marginTop: 10,
	},
	buttonContainer: {
		backgroundColor: '#ef004c',
		borderRadius: 10,
		marginVertical: 10,
		padding: 10,
		alignSelf: 'center',
		width: '80%',
	},
	buttonText: { alignSelf: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 },
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'black',
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 10,
		padding: 10,
		elevation: 2,
	},
	buttonClose: {
		backgroundColor: '#ef004c',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		color: 'black',
		marginBottom: 15,
		textAlign: 'center',
		fontWeight: 'bold',
	},
})

export default Login
