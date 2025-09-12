'use client';

import { useState } from "react";
import ConfirmForm from "./components/confirm-form";
import SuccessDialog from "./components/success-dialog";

export default function Page() {
	const [loading, setLoading] = useState(false)

	return (
		<SuccessDialog />
	)
}