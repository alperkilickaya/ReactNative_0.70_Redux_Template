import React from 'react'
import LottieView from 'lottie-react-native'

const Animation = ({ fileName, speed, backgroundColor = 'black' }) => {
	return (
		<LottieView
			source={fileName ? fileName : require('../assets/loading.json')}
			autoPlay
			style={{ backgroundColor: backgroundColor }}
			speed={speed ? speed : 1}
		/>
	)
}

export default Animation
