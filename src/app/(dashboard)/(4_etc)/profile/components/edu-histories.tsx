interface histories_edu {
	id: string;
	Education_Level: string;
	Major: string;
	department: string;
	Institution: string;
	statr:string;
	end:string;
}

export default function EduHistories() {
 	const  histories_edus : histories_edu[] = [
		{
			id: 'ED-001',
			Education_Level: 'ปริญญาโท',
			Major:  'เทคนิคการแพทย์',
			department:  'คณะสหเวชศาสตร์',
			Institution: 'มหาวิทยาลัยมหิดล',
			statr:'2019',
			end:'2021',
		},
				{
			id: 'ED-00/',
			Education_Level: 'ปริญญาตรี',
			Major:  'กายภาพบำบัด',
			department:  'คณะสหเวชศาสตร์',
			Institution: 'จุฬาลงกรณ์มหาวิทยาลัย',
			statr:'2015',
			end:'2019',
		},
	]

	return (
		<div className=" flex flex-col items-start  self-stretch ">
			<div className=" flex w-full pb-4 justify-between items-center self-stretch border-b border-solid border-[var(--border)] ">
				<div className=" flex pt-3 justify-center items-center gap-2.5 ">
					<div className=" text-[var(--text-secondary)] text-lg not-italic font-semibold leading-[110%] ">
						ประวัติการศึกษา
					</div>
				</div>
				<button className=" flex h-[38px] pl-2.5 pr-3.5 py-0 justify-center items-center gap-2.5 rounded-lg border border-solid border-[var(--border)] ">
					<div className=" h-4 w-4 ">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M8 2C8.13261 2 8.25979 2.05268 8.35355 2.14645C8.44732 2.24021 8.5 2.36739 8.5 2.5V7.5H13.5C13.6326 7.5 13.7598 7.55268 13.8536 7.64645C13.9473 7.74021 14 7.86739 14 8C14 8.13261 13.9473 8.25979 13.8536 8.35355C13.7598 8.44732 13.6326 8.5 13.5 8.5H8.5V13.5C8.5 13.6326 8.44732 13.7598 8.35355 13.8536C8.25979 13.9473 8.13261 14 8 14C7.86739 14 7.74021 13.9473 7.64645 13.8536C7.55268 13.7598 7.5 13.6326 7.5 13.5V8.5H2.5C2.36739 8.5 2.24021 8.44732 2.14645 8.35355C2.05268 8.25979 2 8.13261 2 8C2 7.86739 2.05268 7.74021 2.14645 7.64645C2.24021 7.55268 2.36739 7.5 2.5 7.5H7.5V2.5C7.5 2.36739 7.55268 2.24021 7.64645 2.14645C7.74021 2.05268 7.86739 2 8 2Z" fill="#1F1F1F" />
						</svg>
					</div>
					<div className=" text-center text-sm not-italic font-medium leading-[110%] ">เพิ่มประวัติการศึกษา</div>
				</button>
			</div>
			<div className="flex flex-col relative w-full">
				{histories_edus.map((edu, index) => (
				<div key={edu.id} className="flex relative ">
					<div className="flex flex-col items-center h-full pt-5">
						<div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M14.051 3.67048C13.4409 3.27164 12.7279 3.05923 11.999 3.05923C11.2701 3.05923 10.5571 3.27164 9.94701 3.67048L1.83801 8.96998C1.72266 9.0453 1.63028 9.15093 1.57101 9.27529C1.51174 9.39966 1.48787 9.53794 1.50201 9.67498L1.49901 9.74998V15.75C1.49901 15.9489 1.57803 16.1397 1.71868 16.2803C1.85933 16.421 2.0501 16.5 2.24901 16.5C2.44792 16.5 2.63869 16.421 2.77934 16.2803C2.91999 16.1397 2.99901 15.9489 2.99901 15.75V11.013L4.49901 12.0285V17.5485C4.499 17.7272 4.56283 17.9001 4.67901 18.036L4.68201 18.0405L4.69101 18.051L4.72101 18.084L4.82301 18.195C4.91151 18.288 5.03901 18.417 5.20401 18.57C5.53401 18.8745 6.01851 19.2765 6.64251 19.68C7.88751 20.484 9.71601 21.3 11.999 21.3C14.282 21.3 16.109 20.484 17.3555 19.68C17.9795 19.2765 18.464 18.8745 18.794 18.57C18.9611 18.4142 19.1222 18.252 19.277 18.084L19.307 18.051L19.316 18.0405L19.319 18.0375L19.3205 18.0345C19.4355 17.8992 19.4987 17.7275 19.499 17.55V12.027L22.169 10.2195C22.2767 10.1558 22.3646 10.0635 22.4229 9.95276C22.4812 9.84204 22.5075 9.7173 22.499 9.59248C22.498 9.46867 22.4664 9.34703 22.407 9.23841C22.3476 9.12979 22.2622 9.03757 22.1585 8.96998L14.051 3.67048ZM17.999 13.044V17.253C17.939 17.313 17.8645 17.3845 17.7755 17.4675C17.3928 17.8195 16.9802 18.1377 16.5425 18.4185C15.4625 19.1145 13.916 19.7985 11.999 19.7985C10.082 19.7985 8.53401 19.1145 7.45551 18.4185C6.93095 18.0815 6.44283 17.6909 5.99901 17.253V13.044L9.89751 15.6825C10.5179 16.1023 11.2499 16.3266 11.999 16.3266C12.7481 16.3266 13.4801 16.1023 14.1005 15.6825L17.999 13.044ZM10.7675 4.92598C11.1336 4.68655 11.5616 4.55904 11.999 4.55904C12.4365 4.55904 12.8644 4.68655 13.2305 4.92598L20.3945 9.59998L13.2605 14.4405C12.8881 14.6926 12.4487 14.8274 11.999 14.8274C11.5493 14.8274 11.1099 14.6926 10.7375 14.4405L3.60201 9.61048L10.7675 4.92598Z" fill="#3D61FB"/>
							</svg>
						</div>
						{index !== histories_edus.length  && (
						    <div className="w-px flex-1 bg-[var(--border)]"/>
						)}
					</div>
					<div className="ml-4 flex-1 flex-col ">
						<div className="flex justify-between py-5">
							<div className="flex flex-col gap-1.5 ">
								<div className="text-sm text-gray-500">
									{edu.statr} – {edu.end}
								</div>
								<div className="text-base font-medium">
									{edu.Education_Level} – {edu.Major}
								</div>
								<div className="flex gap-2 flex-wrap mt-1">
									<span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
										{edu.Institution}
									</span>
									<span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
										{edu.department}
									</span>
								</div>
							</div>
							<div>
								<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
									<path d="M9.375 15C9.375 15.4973 9.17746 15.9742 8.82582 16.3258C8.47419 16.6775 7.99728 16.875 7.5 16.875C7.00272 16.875 6.52581 16.6775 6.17417 16.3258C5.82254 15.9742 5.625 15.4973 5.625 15C5.625 14.5027 5.82254 14.0258 6.17417 13.6742C6.52581 13.3225 7.00272 13.125 7.5 13.125C7.99728 13.125 8.47419 13.3225 8.82582 13.6742C9.17746 14.0258 9.375 14.5027 9.375 15ZM16.875 15C16.875 15.4973 16.6775 15.9742 16.3258 16.3258C15.9742 16.6775 15.4973 16.875 15 16.875C14.5027 16.875 14.0258 16.6775 13.6742 16.3258C13.3225 15.9742 13.125 15.4973 13.125 15C13.125 14.5027 13.3225 14.0258 13.6742 13.6742C14.0258 13.3225 14.5027 13.125 15 13.125C15.4973 13.125 15.9742 13.3225 16.3258 13.6742C16.6775 14.0258 16.875 14.5027 16.875 15ZM22.5 16.875C22.9973 16.875 23.4742 16.6775 23.8258 16.3258C24.1775 15.9742 24.375 15.4973 24.375 15C24.375 14.5027 24.1775 14.0258 23.8258 13.6742C23.4742 13.3225 22.9973 13.125 22.5 13.125C22.0027 13.125 21.5258 13.3225 21.1742 13.6742C20.8225 14.0258 20.625 14.5027 20.625 15C20.625 15.4973 20.8225 15.9742 21.1742 16.3258C21.5258 16.6775 22.0027 16.875 22.5 16.875Z" fill="#1F1F1F"/>
								</svg>
							</div>
						</div>
						<div className="flex flex-col justify-end">
							<div className=" flex justify-end items-end self-stretch border-b border-solid border-[var(--border)] "/>
						</div>
					</div>
				</div>
				))}
			</div>
		</div>
	)
}