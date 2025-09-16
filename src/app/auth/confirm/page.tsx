'use client';

import { useEffect, useState } from "react";
import ConfirmForm from "./components/confirm-form";
import SuccessDialog from "./components/success-dialog";

export default function Page() {
	const [loading, setLoading] = useState<boolean>(false)
	const [confirm, setConfirm] = useState<boolean>(false)

	return (
		confirm ? <SuccessDialog /> : <ConfirmForm setConfirm={setConfirm} />
	)
}