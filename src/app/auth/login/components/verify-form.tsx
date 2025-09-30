import React from "react";

type VerifyForm = {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
	setShowMfa: React.Dispatch<React.SetStateAction<boolean>>
}

export default function VerifyForm({ onSubmit, setShowMfa }: VerifyForm) {
	return (
		<form onSubmit={onSubmit} className=" flex w-[427px] p-[30px] flex-col items-start gap-[38px] self-stretch ">
			<div className=" flex flex-col items-start gap-3 self-stretch ">
				<h1 className=" text-[var(--text-primary)] text-center text-[26px] font-medium not-italic ">ยืนยันตัวตน</h1>
				<h2 className=" text-[var(--text-secondary)] ">เราได้ส่งรหัส 6 หลักไปที่อีเมล example@mail.com กรุณากรอกรหัสภายใน 60 นาที</h2>
			</div>
			<div className=" flex w-full flex-col items-start gap-5 self-stretch ">
				<label className=" flex flex-col items-start gap-2 self-stretch ">
					<div className=" flex justify-between items-center self-stretch">
						<span className=" font-medium leading-[110%]">เลือกวิธียืนยันตัวตน</span>
						<div className=" flex justify-center items-center gap-1 ">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
								<path d="M2.5 8.0475V14.25C2.5 14.913 2.76339 15.5489 3.23223 16.0178C3.70107 16.4866 4.33696 16.75 5 16.75H15C15.663 16.75 16.2989 16.4866 16.7678 16.0178C17.2366 15.5489 17.5 14.913 17.5 14.25V6.75C17.5 6.08696 17.2366 5.45107 16.7678 4.98223C16.2989 4.51339 15.663 4.25 15 4.25H5C4.33696 4.25 3.70107 4.51339 3.23223 4.98223C2.76339 5.45107 2.5 6.08696 2.5 6.75V8.0475ZM5 5.5H15C15.3315 5.5 15.6495 5.6317 15.8839 5.86612C16.1183 6.10054 16.25 6.41848 16.25 6.75V7.675L10 11.04L3.75 7.675V6.75C3.75 6.41848 3.8817 6.10054 4.11612 5.86612C4.35054 5.6317 4.66848 5.5 5 5.5ZM3.75 9.095L9.70375 12.3C9.7948 12.349 9.89659 12.3747 10 12.3747C10.1034 12.3747 10.2052 12.349 10.2963 12.3L16.25 9.095V14.25C16.25 14.5815 16.1183 14.8995 15.8839 15.1339C15.6495 15.3683 15.3315 15.5 15 15.5H5C4.66848 15.5 4.35054 15.3683 4.11612 15.1339C3.8817 14.8995 3.75 14.5815 3.75 14.25V9.095Z" fill="#3D61FB" />
							</svg>
							<span className=" text-[var(--primary)] ">ส่งรหัส</span>
						</div>
					</div>
					<div className=" flex h-[44px] py-0 px-3.5 items-center gap-2.5 self-stretch rounded-lg border-[1px] border-solid border-[var(--border)] ">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
							<path d="M11.5625 9.06253C11.5625 9.70378 11.1763 10.2538 10.625 10.495V11.88C10.625 12.0458 10.5592 12.2048 10.4419 12.322C10.3247 12.4392 10.1658 12.505 10 12.505C9.83424 12.505 9.67527 12.4392 9.55806 12.322C9.44085 12.2048 9.375 12.0458 9.375 11.88V10.495C9.11683 10.3824 8.89392 10.202 8.72987 9.97301C8.56581 9.74403 8.4667 9.47496 8.44303 9.19427C8.41936 8.91359 8.472 8.63172 8.5954 8.3785C8.71879 8.12528 8.90835 7.91013 9.144 7.75581C9.37965 7.60149 9.65264 7.51375 9.93407 7.50186C10.2155 7.48998 10.4949 7.55439 10.7427 7.68829C10.9906 7.82219 11.1976 8.02059 11.3419 8.26251C11.4862 8.50442 11.5624 8.78084 11.5625 9.06253ZM8.92875 2.55253C8.25784 2.99929 7.53714 3.36635 6.78125 3.64628C5.69834 4.05285 4.56081 4.29552 3.40625 4.36628L3.19375 4.37503H3.13125C3.04865 4.3742 2.9667 4.38976 2.89015 4.4208C2.8136 4.45184 2.74396 4.49774 2.68526 4.55586C2.62656 4.61398 2.57997 4.68316 2.54817 4.7594C2.51637 4.83564 2.5 4.91742 2.5 5.00003V8.44378C2.50005 10.0734 2.9249 11.6749 3.73266 13.0903C4.54042 14.5057 5.70317 15.6861 7.10625 16.515L9.68375 18.0388C9.78009 18.0957 9.88995 18.1258 10.0019 18.1258C10.1138 18.1258 10.2237 18.0957 10.32 18.0388L12.895 16.5163C14.2978 15.6872 15.4604 14.5067 16.2679 13.0914C17.0754 11.676 17.5001 10.0746 17.5 8.44503V5.00003C17.5 4.9171 17.4835 4.835 17.4515 4.75852C17.4195 4.68203 17.3725 4.61268 17.3134 4.55451C17.2543 4.49634 17.1842 4.45052 17.1072 4.4197C17.0303 4.38889 16.9479 4.3737 16.865 4.37503H16.8025C16.7558 4.37503 16.6858 4.37253 16.5925 4.36753C15.4426 4.30047 14.3098 4.05722 13.2337 3.64628C12.4767 3.36091 11.7539 2.99196 11.0787 2.54628C10.906 2.43132 10.7392 2.30783 10.5788 2.17628C10.531 2.13717 10.4847 2.09631 10.44 2.05378C10.322 1.93781 10.1629 1.87336 9.99746 1.87453C9.83204 1.8757 9.67382 1.94241 9.5575 2.06003L9.42125 2.18128C9.31875 2.26878 9.155 2.39753 8.92875 2.55253ZM3.75 8.44378V5.59628C3.92667 5.58378 4.1325 5.56211 4.3675 5.53128C5.11375 5.43253 6.1325 5.23128 7.22625 4.81378C8.07337 4.49911 8.8809 4.08674 9.6325 3.58503C9.77583 3.48753 9.9 3.39794 10.005 3.31628C10.1117 3.39711 10.2367 3.48628 10.38 3.58378C10.91 3.94003 11.7025 4.39628 12.7825 4.81253C13.8949 5.23892 15.0625 5.5041 16.25 5.60003V8.44628C16.25 9.85855 15.8819 11.2464 15.182 12.4731C14.4821 13.6997 13.4746 14.7228 12.2587 15.4413L10.0013 16.775L7.7425 15.44C6.52644 14.7217 5.51864 13.6987 4.81851 12.472C4.11838 11.2454 3.7501 9.85617 3.75 8.44378Z" fill="#969696" />
						</svg>
						<div className=" w-full text-[var(--text-secondary)] ">อีเมล (example@mail.com)</div>
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
							<path d="M3.53928 6.35175C3.59153 6.29936 3.6536 6.2578 3.72194 6.22945C3.79028 6.20109 3.86354 6.18649 3.93753 6.18649C4.01152 6.18649 4.08478 6.20109 4.15312 6.22945C4.22146 6.2578 4.28353 6.29936 4.33578 6.35175L9.00003 11.0171L13.6643 6.35175C13.7699 6.24613 13.9132 6.18679 14.0625 6.18679C14.2119 6.18679 14.3552 6.24613 14.4608 6.35175C14.5664 6.45737 14.6257 6.60063 14.6257 6.75C14.6257 6.89937 14.5664 7.04263 14.4608 7.14825L9.39828 12.2107C9.34603 12.2631 9.28395 12.3047 9.21562 12.333C9.14728 12.3614 9.07402 12.376 9.00003 12.376C8.92604 12.376 8.85278 12.3614 8.78444 12.333C8.7161 12.3047 8.65403 12.2631 8.60178 12.2107L3.53928 7.14825C3.4869 7.096 3.44533 7.03392 3.41698 6.96559C3.38862 6.89725 3.37402 6.82399 3.37402 6.75C3.37402 6.67601 3.38862 6.60275 3.41698 6.53441C3.44533 6.46607 3.4869 6.404 3.53928 6.35175Z" fill="#969696" />
						</svg>
					</div>
				</label>
			</div>
			<div className=" flex w-full justify-around gap-2.5 self-stretch">
				<input className=" flex w-full h-[44px] p-[10px] items-start gap-2.5 flex-[1_0_0] rounded-lg border-[1px] border-solid border-[var(--border)] bg-[var(--input-default)] outline-none text-center " autoComplete="off" maxLength={1} />
				<input className=" flex w-full h-[44px] p-[10px] items-start gap-2.5 flex-[1_0_0] rounded-lg border-[1px] border-solid border-[var(--border)] bg-[var(--input-default)] outline-none text-center " autoComplete="off" maxLength={1} />
				<input className=" flex w-full h-[44px] p-[10px] items-start gap-2.5 flex-[1_0_0] rounded-lg border-[1px] border-solid border-[var(--border)] bg-[var(--input-default)] outline-none text-center " autoComplete="off" maxLength={1} />
				<input className=" flex w-full h-[44px] p-[10px] items-start gap-2.5 flex-[1_0_0] rounded-lg border-[1px] border-solid border-[var(--border)] bg-[var(--input-default)] outline-none text-center " autoComplete="off" maxLength={1} />
				<input className=" flex w-full h-[44px] p-[10px] items-start gap-2.5 flex-[1_0_0] rounded-lg border-[1px] border-solid border-[var(--border)] bg-[var(--input-default)] outline-none text-center " autoComplete="off" maxLength={1} />
				<input className=" flex w-full h-[44px] p-[10px] items-start gap-2.5 flex-[1_0_0] rounded-lg border-[1px] border-solid border-[var(--border)] bg-[var(--input-default)] outline-none text-center " autoComplete="off" maxLength={1} />
			</div>
			<div className=" flex w-full flex-col gap-5 self-stretch">
				<button className=" flex w-full h-[44px] justify-center items-center gap-2.5 self-stretch rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] " type="submit">ยืนยัน</button>
				<div className=" flex justify-center self-stretch ">
					<div className=" flex gap-2.5 cursor-pointer " onClick={() => setShowMfa(false)}>
						<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
							<path d="M17.3751 4.25C17.5409 4.25 17.6999 4.31585 17.8171 4.43306C17.9343 4.55027 18.0001 4.70924 18.0001 4.875C18.0001 5.77784 17.8223 6.67183 17.4768 7.50595C17.1313 8.34006 16.6249 9.09796 15.9865 9.73636C14.6972 11.0257 12.9485 11.75 11.1251 11.75H5.13389L8.44264 15.0575C8.56 15.1749 8.62593 15.334 8.62593 15.5C8.62593 15.666 8.56 15.8251 8.44264 15.9425C8.32528 16.0599 8.16611 16.1258 8.00014 16.1258C7.83417 16.1258 7.675 16.0599 7.55764 15.9425L3.18264 11.5675C3.12444 11.5094 3.07826 11.4405 3.04675 11.3645C3.01524 11.2886 2.99902 11.2072 2.99902 11.125C2.99902 11.0428 3.01524 10.9614 3.04675 10.8855C3.07826 10.8095 3.12444 10.7406 3.18264 10.6825L7.55764 6.3075C7.675 6.19014 7.83417 6.12421 8.00014 6.12421C8.16611 6.12421 8.32528 6.19014 8.44264 6.3075C8.56 6.42486 8.62593 6.58403 8.62593 6.75C8.62593 6.91597 8.56 7.07514 8.44264 7.1925L5.13389 10.5H11.1251C12.617 10.5 14.0477 9.90737 15.1026 8.85248C16.1575 7.79758 16.7501 6.36684 16.7501 4.875C16.7501 4.70924 16.816 4.55027 16.9332 4.43306C17.0504 4.31585 17.2094 4.25 17.3751 4.25Z" fill="#969696" />
						</svg>
						<div className=" text-[var(--text-secondary)] font-medium leading-normal not-italic ">กลับไปหน้าเข้าสู่ระบบ</div>
					</div>
				</div>
			</div>
		</form>
	)
}