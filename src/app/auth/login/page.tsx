'use client';

import React, { useState } from "react";
import LoginForm from "./components/login-form";
import VerifyForm from "./components/verify-form";
import { useRouter } from "next/navigation";

export default function Page() {
	const [loading, setLoading] = useState<boolean>(false)
	const [showMfa, setShowMfa] = useState<boolean>(false)

	const router = useRouter()

	const handleLoginSubmit = async () => {
		setShowMfa(true)
	}

	const handleVerifySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)
		router.replace('/dashboard')
	}

	return (
		showMfa ? <VerifyForm onSubmit={handleVerifySubmit} setShowMfa={setShowMfa} /> : <LoginForm onSubmit={handleLoginSubmit} />
	)
}