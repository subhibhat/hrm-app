export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className=" flex w-full h-screen top-4 justify-center items-center ">
			<div className=" flex h-full justify-center items-center ">
				<div className=" flex ">
					<div className=" flex w-[427px] p-[30px] flex-col items-start gap-[38px] shrink-0 border-[1px] border-solid border-[var(--border)] rounded-2xl ">
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}
