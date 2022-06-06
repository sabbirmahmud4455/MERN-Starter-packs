import { Typography } from '@mui/material';
import React from 'react';

const LoginPageHeader = () => {
	return (
		<>
			<Typography variant='h5' sx={{ color: 'white' }}>Welcome Back </Typography>
			<Typography sx={{ color: '#b0bbbe' }}>We are happy that you are with us! </Typography>
		</>
	)
}

export default LoginPageHeader;