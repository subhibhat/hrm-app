'use client';

import { useState } from "react";
import LoginForm from "./components/login-form";
import VerifyForm from "./components/verify-form";

export default function Page() {
	const [loading, setLoading] = useState(false)
	const [showMfa, setShowMfa] = useState(false)

	const handleLoginSubmit = async () => {
		setShowMfa(true)
		console.log('Login submitted', loading)
		console.log('Show MFA', showMfa)
	}

	const handleVerifySubmit = async () => {
		setLoading(true)
	}

	return (
		showMfa ? <VerifyForm onSubmit={handleVerifySubmit} setShowMfa={setShowMfa} /> : <LoginForm onSubmit={handleLoginSubmit} />
	)
}