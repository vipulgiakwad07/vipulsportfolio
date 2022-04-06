
import React from 'react'

const Progress_bar = ({bgcolor,progress,height,color}) => {
	
	const Parentdiv = {
		height: '2%',
		width: '100%',
		backgroundColor: 'gray',
		borderRadius: 40,
		margin: 1,
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	    borderRadius:40,
		textAlign: 'left'
	}
	
	const progresstext = {
		padding: 10,
		color: 'black',
		fontWeight: 700,
		
	}
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
		<span style={progresstext}>{`${progress}%`}</span>
	</div>
	</div>
	)
}

export default Progress_bar;
