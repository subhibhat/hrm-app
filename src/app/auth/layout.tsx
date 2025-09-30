export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className=" flex max-w-[1440px] h-lvh items-start bg-white ">
			<div className=" flex w-[625px] py-[90px] px-[60px] flex-col justify-end items-start gap-[130px] shrink-0 self-stretch bg-[#4E67D5] ">
				<div className=" flex flex-col items-center gap-4 self-stretch ">
					<h1 className=" text-white text-center text-[34px] not-italic font-medium leading-[110%] tracking-[-0.68px] ">จัดการภาระงานง่ายขึ้น</h1>
					<p className=" text-white text-center text-[16px] not-italic font-normal leading-[140%] ">ระบบ HRM ที่ออกแบบมาเพื่อมหาวิทยาลัย<br />จัดการข้อมูลบุคลากรและภาระงานอย่างครบวงจร</p>
					<div className=" flex items-start gap-3 ">
						<div className=" w-2 h-2 aspect-square rounded-full bg-white "></div>
						<div className=" w-2 h-2 aspect-square rounded-full bg-[rgba(255,255,255,0.50)] "></div>
						<div className=" w-2 h-2 aspect-square rounded-full bg-[rgba(255,255,255,0.50)] "></div>
					</div>
				</div>
			</div>
			<div className=" flex w-[815px] pt-[170px] px-[40px] pb-[30px] justify-center ">
				{children}
			</div>
		</div>
		// <div className=" flex w-full h-screen bg-[#4E67D5] ">
		// 	<div className=" flex w-[60%] lg:w-[50%] h-screen text-white ">
		// 		<div className=" flex flex-col w-[846px] items-start gap-[130px] p-[60px] flex[1_0_0] self-stretch ">
		// 			<h1 className=" text-white text-center text-[38px] not-italic font-bold leading-[110%] ">AHSTULIS</h1>
		// 			<div className=" flex flex-col items-center gap-2.5 self-stretch ">
		// 				<div className=" flex flex-col items-start gap-2.5 ">
		// 					<h1 className=" text-white text-center text-2xl not-italic font-semibold leading-[110%] ">แพลตฟอร์มจัดการบุคลากรและภาระงานสำหรับมหาวิทยาลัย</h1>
		// 					<p className=" text-white not-italic font-normal leading-[160%] ">ระบบนี้ช่วยให้อาจารย์ ผู้บริหาร และเจ้าหน้าที่ สามารถบันทึกภาระงาน ตรวจสอบ Job Description และเข้าถึงรายงานได้อย่างสะดวก รวดเร็ว และโปร่งใส</p>
		// 					<div className=" flex items-start gap-1 ">
		// 						<div className=" w-4 h-1.5 rounded-[1000px] bg-white "></div>
		// 						<div className=" w-1.5 h-1.5 rounded-full bg-[rgba(255,255,255,0.50)] "></div>
		// 						<div className=" w-1.5 h-1.5 rounded-full bg-[rgba(255,255,255,0.50)] "></div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<div className=" flex w-[40%] lg:w-[50%] h-screen bg-white justify-center ">
		// 		<div className=" flex flex-col md:py-[15px] items-center ">{children}</div>
		// 	</div>
		// </div>
		// <div className=" flex w-full h-screen justify-center items-center ">
		// 	<div className=" flex h-full justify-center items-center ">
		// 		<div className=" flex ">
		// 			<div className=" flex w-[446px] p-[30px] flex-col items-start gap-[38px] shrink-0 border-[1px] border-solid border-[var(--border)] rounded-2xl ">
		// 				{/* {children} */}
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
}
