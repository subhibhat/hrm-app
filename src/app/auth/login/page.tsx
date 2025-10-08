'use client';

import React, { useState } from "react";
import LoginForm from "./components/login-form";
import VerifyForm from "./components/verify-form";
import { useRouter } from "next/navigation";
import { login, verify } from "@/services/auth";
import { LoginData } from "@/interfaces/auth";

export default function Page() {
	const [loading, setLoading] = useState<boolean>(false)
	const [showMfa, setShowMfa] = useState<boolean>(false)
	const [mfaData, setMfaData] = useState<LoginData>({
		email: '',
		is_mfa: true,
		mfa_is_email: true,
		mfa_is_sms: false,
		mfa_is_totp: true,
		mfa_method: 'email',
		token: '',
	})

	const router = useRouter()

	const handleLoginSubmit = async (username: string, password: string) => {
		try {
			setLoading(true)

			const data = await login(username, password)

			setShowMfa(true)
			setMfaData(data)
		} catch (error) {
			console.error('Login failed:', error)
		} finally {
			setLoading(false)
		}
	}

	const handleVerifySubmit = async (otp: string) => {
		try {
			setLoading(true)

			const data = await verify(mfaData.email, otp, mfaData.token)

			handleLoginSuccess(data.access_token, data.refresh_token)
		} catch (error) {
			console.error('Verify failed:', error)
		} finally {
			setLoading(false)
		}
	}

	const handleLoginSuccess = async (accessToken: string, refreshToken: string) => {
		await localStorage.setItem('ac_token', accessToken)
		await localStorage.setItem('rf_token', refreshToken)
		await localStorage.setItem('is_login', 'true')

		router.replace('/dashboard')
	}

	return (
		showMfa ? <VerifyForm onSubmit={handleVerifySubmit} setShowMfa={setShowMfa} loading={loading} /> : <LoginForm onSubmit={handleLoginSubmit} loading={loading} />
	)
}