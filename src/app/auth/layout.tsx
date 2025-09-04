export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className=" flex w-full h-screen top-4 justify-center items-center ">
			{children}
		</div>
	);
}
