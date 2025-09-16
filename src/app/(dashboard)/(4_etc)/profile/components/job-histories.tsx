interface histories_edu {
	id: string;
	department_position_name: string;
	department: string;
	statr: string;
	end: string;
}

export default function JobHistories() {
	const histories_edus: histories_edu[] = [
		{
			id: 'ED-001',
			department_position_name: 'ผู้อำนวยการสำนักวิชาสหเวช',
			department: 'สำนักวิชาสหเวชศาสตร์',
			statr: 'ส.ค. 2564 ',
			end: 'ปัจจุบัน',
		},
		{
			id: 'ED-002',
			department_position_name: 'ผู้อำนวยการสำนักวิชาสหเวช',
			department: 'ภาควิชากายภาพบำบัด',
			statr: 'ส.ค. 2561',
			end: 'ก.ค. 2564',
		},
		{
			id: 'ED-003',
			department_position_name: 'ผู้ช่วยอธิการบดี',
			department: 'มหาวิทยาลัยธรรมศาสตร์',
			statr: 'ส.ค. 2559',
			end: ' ก.ค. 2561',
		},
	]

	return (
		<div className=" flex w-full p-5 flex-col items-start gap-[30px] rounded-lg border-[1px] border-solid border-[var(--border)] bg-white ">
			<div className=" flex flex-col items-start self-stretch ">
				<div className=" flex w-full pb-4 justify-between items-center self-stretch border-b border-solid border-[var(--border)] ">
					<div className=" flex justify-center items-center gap-2.5 ">
						<div className=" text-[var(--text-secondary)] text-lg not-italic font-semibold leading-[110%] ">
							ประวัติการทำงาน
						</div>
					</div>
					<button className=" flex h-[38px] pl-2.5 pr-3.5 py-0 justify-center items-center gap-2.5 rounded-lg border border-solid border-[var(--border)] ">
						<div className=" h-4 w-4 ">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M8 2C8.13261 2 8.25979 2.05268 8.35355 2.14645C8.44732 2.24021 8.5 2.36739 8.5 2.5V7.5H13.5C13.6326 7.5 13.7598 7.55268 13.8536 7.64645C13.9473 7.74021 14 7.86739 14 8C14 8.13261 13.9473 8.25979 13.8536 8.35355C13.7598 8.44732 13.6326 8.5 13.5 8.5H8.5V13.5C8.5 13.6326 8.44732 13.7598 8.35355 13.8536C8.25979 13.9473 8.13261 14 8 14C7.86739 14 7.74021 13.9473 7.64645 13.8536C7.55268 13.7598 7.5 13.6326 7.5 13.5V8.5H2.5C2.36739 8.5 2.24021 8.44732 2.14645 8.35355C2.05268 8.25979 2 8.13261 2 8C2 7.86739 2.05268 7.74021 2.14645 7.64645C2.24021 7.55268 2.36739 7.5 2.5 7.5H7.5V2.5C7.5 2.36739 7.55268 2.24021 7.64645 2.14645C7.74021 2.05268 7.86739 2 8 2Z" fill="#1F1F1F" />
							</svg>
						</div>
						<div className=" text-center text-sm not-italic font-medium leading-[110%] ">เพิ่มประวัติการทำงาน</div>
					</button>
				</div>
				<div>

				</div>
				<div className="flex flex-col relative w-full">
					{histories_edus.map((edu, index) => (
						<div key={edu.id} className="flex relative ">
							<div className="flex flex-col items-center h-full pt-5">
								<div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path d="M11.5625 1.25C12.77 1.25 13.75 2.23 13.75 3.4375V5H15.625C16.4538 5 17.2487 5.32924 17.8347 5.91529C18.4208 6.50134 18.75 7.2962 18.75 8.125V14.375C18.75 15.2038 18.4208 15.9987 17.8347 16.5847C17.2487 17.1708 16.4538 17.5 15.625 17.5H4.375C3.5462 17.5 2.75134 17.1708 2.16529 16.5847C1.57924 15.9987 1.25 15.2038 1.25 14.375V8.125C1.25 7.2962 1.57924 6.50134 2.16529 5.91529C2.75134 5.32924 3.5462 5 4.375 5H6.25V3.4375C6.25 2.23 7.23 1.25 8.4375 1.25H11.5625ZM17.5 11.87C16.9597 12.2775 16.3017 12.4986 15.625 12.5H11.25V13.125C11.25 13.2908 11.1842 13.4497 11.0669 13.5669C10.9497 13.6842 10.7908 13.75 10.625 13.75H9.375C9.20924 13.75 9.05027 13.6842 8.93306 13.5669C8.81585 13.4497 8.75 13.2908 8.75 13.125V12.5H4.375C3.69827 12.4986 3.0403 12.2775 2.5 11.87V14.375C2.5 14.8723 2.69754 15.3492 3.04917 15.7008C3.40081 16.0525 3.87772 16.25 4.375 16.25H15.625C16.1223 16.25 16.5992 16.0525 16.9508 15.7008C17.3025 15.3492 17.5 14.8723 17.5 14.375V11.87ZM4.375 6.25C3.87772 6.25 3.40081 6.44754 3.04917 6.79917C2.69754 7.15081 2.5 7.62772 2.5 8.125V9.375C2.5 9.87228 2.69754 10.3492 3.04917 10.7008C3.40081 11.0525 3.87772 11.25 4.375 11.25H8.75V10.625C8.75 10.4592 8.81585 10.3003 8.93306 10.1831C9.05027 10.0658 9.20924 10 9.375 10H10.625C10.7908 10 10.9497 10.0658 11.0669 10.1831C11.1842 10.3003 11.25 10.4592 11.25 10.625V11.25H15.625C16.1223 11.25 16.5992 11.0525 16.9508 10.7008C17.3025 10.3492 17.5 9.87228 17.5 9.375V8.125C17.5 7.62772 17.3025 7.15081 16.9508 6.79917C16.5992 6.44754 16.1223 6.25 15.625 6.25H4.375ZM8.4375 2.5C8.18886 2.5 7.9504 2.59877 7.77459 2.77459C7.59877 2.9504 7.5 3.18886 7.5 3.4375V5H12.5V3.4375C12.5 3.18886 12.4012 2.9504 12.2254 2.77459C12.0496 2.59877 11.8111 2.5 11.5625 2.5H8.4375Z" fill="#3D61FB" />
									</svg>
								</div>
								{index !== histories_edus.length && (
									<div className="w-px flex-1 bg-[var(--border)]" />
								)}
							</div>
							<div className="ml-4 flex-1 flex-col ">
								<div className="flex justify-between py-5">
									<div className="flex flex-col gap-1.5 ">
										<div className="text-sm text-gray-500">
											{edu.statr} – {edu.end}
										</div>
										<div className="text-base font-medium">
											{edu.department_position_name}
										</div>
										<div className="flex gap-2 flex-wrap mt-1">
											<div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
												{edu.department}
											</div>
										</div>
									</div>
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
											<path d="M9.375 15C9.375 15.4973 9.17746 15.9742 8.82582 16.3258C8.47419 16.6775 7.99728 16.875 7.5 16.875C7.00272 16.875 6.52581 16.6775 6.17417 16.3258C5.82254 15.9742 5.625 15.4973 5.625 15C5.625 14.5027 5.82254 14.0258 6.17417 13.6742C6.52581 13.3225 7.00272 13.125 7.5 13.125C7.99728 13.125 8.47419 13.3225 8.82582 13.6742C9.17746 14.0258 9.375 14.5027 9.375 15ZM16.875 15C16.875 15.4973 16.6775 15.9742 16.3258 16.3258C15.9742 16.6775 15.4973 16.875 15 16.875C14.5027 16.875 14.0258 16.6775 13.6742 16.3258C13.3225 15.9742 13.125 15.4973 13.125 15C13.125 14.5027 13.3225 14.0258 13.6742 13.6742C14.0258 13.3225 14.5027 13.125 15 13.125C15.4973 13.125 15.9742 13.3225 16.3258 13.6742C16.6775 14.0258 16.875 14.5027 16.875 15ZM22.5 16.875C22.9973 16.875 23.4742 16.6775 23.8258 16.3258C24.1775 15.9742 24.375 15.4973 24.375 15C24.375 14.5027 24.1775 14.0258 23.8258 13.6742C23.4742 13.3225 22.9973 13.125 22.5 13.125C22.0027 13.125 21.5258 13.3225 21.1742 13.6742C20.8225 14.0258 20.625 14.5027 20.625 15C20.625 15.4973 20.8225 15.9742 21.1742 16.3258C21.5258 16.6775 22.0027 16.875 22.5 16.875Z" fill="#1F1F1F" />
										</svg>
									</div>
								</div>
								<div className="flex flex-col justify-end">
									<div className=" flex justify-end items-end self-stretch border-b border-solid border-[var(--border)] " />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}