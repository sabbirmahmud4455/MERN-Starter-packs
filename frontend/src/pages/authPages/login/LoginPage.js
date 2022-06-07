import React, { useEffect, useState } from "react"
import AuthBox from "../../../shared/components/AuthBox";
import { validateLoginForm } from "../../../shared/utils/validators";
import LoginPageFooter from "./LoginPageFooter";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";
import { connect } from 'react-redux'
import { getActions } from "../../../store/actions/authActions";
import { useNavigate } from 'react-router-dom';


const LoginPage = ({login}) => {
	const navigate = useNavigate();
	const [mail, setMail] = useState('')
	const [password, setPassword] = useState('')
	const [isFormValid, setIsFormValid] = useState(false)
 
	useEffect(()=> {
		setIsFormValid(validateLoginForm(mail, password))

	}, [mail, password, setIsFormValid])

	const handleLogin = () => {

		const userDetails = {
			mail,
			password
		}

		login(userDetails, navigate)
	}

	return (
		<>
			<AuthBox>
				<LoginPageHeader/>
				<LoginPageInputs
				mail={mail}
				setMail={setMail}
				password={password}
				setPassword={setPassword}
				/>
				<LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
			</AuthBox>
		</>
	)
}

const mapActionsToProps = (dispatch) => {
	return {
		...getActions(dispatch)
	}
}

export default connect(null, mapActionsToProps)(LoginPage);