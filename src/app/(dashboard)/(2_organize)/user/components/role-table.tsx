interface Department {
	id: string;
	name: string;
}

interface KeyResponsibility {
	name: string;
}

interface Role {
	id: string;
	name: string;
	department: Department;
	key_responsibility: KeyResponsibility[];
	user: string;
}

export default function RoleTable() {
	const roles: Role[] = [
		{
			id: 'JD-001',
			name: 'ผู้แลระบบ',
			department: { id: '12345', name: 'Physical Therapy' },
			key_responsibility: [{ name: 'Teaching' }, { name: 'Research' }, { name: 'Clinic' }],
			user: 'ใช้งาน'
		},
		{
			id: 'JD-002',
			name: 'อาจารย์',
			department: { id: '12345', name: 'Physical Therapy' },
			key_responsibility: [{ name: 'Clinical training supervision' }],
			user: 'ใช้งาน'
		},
		{
			id: 'JD-003',
			name: 'ผู้บริหาร',
			department: { id: '12345', name: 'Physical Therapy' },
			key_responsibility: [{ name: 'Laboratory' }],
			user: 'ใช้งาน'
		},
		{
			id: 'JD-004',
			name: 'พนักงานทั่วไป',
			department: { id: '12345', name: 'Physical Therapy' },
			key_responsibility: [{ name: 'Laboratory' }],
			user: 'ใช้งาน'
		},
		{
			id: 'JD-005',
			name: 'พนักงานฝ่ายบุคคล',
			department: { id: '12345', name: 'Physical Therapy' },
			key_responsibility: [{ name: 'Laboratory' }],
			user: 'ใช้งาน'
		}
	];

	return (
		<>
			<div className=" flex py-0 justify-between items-start self-stretch ">
				<label className=" flex flex-col items-start gap-2 self-stretch ">
					<div className=" flex w-[256px] h-[38px] py-0 px-3.5 items-center gap-2.5 rounded-lg border border-solid border-[var(--border)] bg-white ">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
							<path d="M12.5253 13.4087C11.1658 14.5409 9.42211 15.1053 7.65702 14.9846C5.89192 14.8639 4.2413 14.0674 3.04849 12.7608C1.85567 11.4541 1.2125 9.73794 1.25276 7.96918C1.29301 6.20043 2.0136 4.51528 3.26462 3.26425C4.51564 2.01323 6.20079 1.29265 7.96955 1.25239C9.73831 1.21214 11.4545 1.85531 12.7611 3.04812C14.0678 4.24093 14.8643 5.89156 14.985 7.65665C15.1056 9.42174 14.5412 11.1654 13.4091 12.525L17.3178 16.4325C17.4352 16.5498 17.5011 16.709 17.5011 16.875C17.5011 17.0409 17.4352 17.2001 17.3178 17.3175C17.2005 17.4348 17.0413 17.5008 16.8753 17.5008C16.7094 17.5008 16.5502 17.4348 16.4328 17.3175L12.5253 13.4087ZM13.7503 8.12497C13.7503 7.38629 13.6048 6.65483 13.3222 5.97238C13.0395 5.28992 12.6251 4.66983 12.1028 4.1475C11.5805 3.62517 10.9604 3.21083 10.2779 2.92815C9.59548 2.64547 8.86402 2.49997 8.12534 2.49997C7.38665 2.49997 6.6552 2.64547 5.97274 2.92815C5.29029 3.21083 4.67019 3.62517 4.14786 4.1475C3.62553 4.66983 3.2112 5.28992 2.92852 5.97238C2.64583 6.65483 2.50034 7.38629 2.50034 8.12497C2.50034 9.61682 3.09297 11.0476 4.14786 12.1024C5.20276 13.1573 6.6335 13.75 8.12534 13.75C9.61718 13.75 11.0479 13.1573 12.1028 12.1024C13.1577 11.0476 13.7503 9.61682 13.7503 8.12497Z" fill="#1F1F1F" />
						</svg>
						<input type="text" placeholder="ค้นหาชื่อ, อีเมล, หรือรหัสบุคลากร" className=" text-sm flex w-full h-full px-0 py-3.5 items-center gap-2.5 self-stretch focus:outline-none " />
					</div>
				</label>
				<button className=" flex h-[38px] pl-2.5 pr-3.5 py-0 justify-center items-center gap-2.5 rounded-lg border border-solid border-[var(--border)] ">
					<div className=" h-4 w-4 ">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M8 2C8.13261 2 8.25979 2.05268 8.35355 2.14645C8.44732 2.24021 8.5 2.36739 8.5 2.5V7.5H13.5C13.6326 7.5 13.7598 7.55268 13.8536 7.64645C13.9473 7.74021 14 7.86739 14 8C14 8.13261 13.9473 8.25979 13.8536 8.35355C13.7598 8.44732 13.6326 8.5 13.5 8.5H8.5V13.5C8.5 13.6326 8.44732 13.7598 8.35355 13.8536C8.25979 13.9473 8.13261 14 8 14C7.86739 14 7.74021 13.9473 7.64645 13.8536C7.55268 13.7598 7.5 13.6326 7.5 13.5V8.5H2.5C2.36739 8.5 2.24021 8.44732 2.14645 8.35355C2.05268 8.25979 2 8.13261 2 8C2 7.86739 2.05268 7.74021 2.14645 7.64645C2.24021 7.55268 2.36739 7.5 2.5 7.5H7.5V2.5C7.5 2.36739 7.55268 2.24021 7.64645 2.14645C7.74021 2.05268 7.86739 2 8 2Z" fill="#1F1F1F" />
						</svg>
					</div>
					<div className=" text-center text-sm not-italic font-medium leading-[110%] ">เพิ่มบทบาท</div>
				</button>
			</div>
			<table className=" w-full border-0 ">
				<thead>
					<tr className=" text-[var(--text-secondary)] text-xs not-italic font-medium leading-normal uppercase border-b-[1px] border-solid border-[var(--border)] ">
						<th className=" w-[363px] pb-3 items-center gap-3.5 font-medium ">
							<label className=" flex items-center gap-2.5 flex-[1_0_0] text-[var(--text-secondary)] ">
								<input className=" hidden peer " type="checkbox" />
								<div className=" w-[18px] h-[18px] aspect-square flex items-center justify-center appearance-none rounded-md border-[1px] border-solid border-[var(--border)] peer-checked:bg-[var(--primary)] peer-checked:border-[var(--primary)] ">
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
										<path d="M3.3335 8.00002L6.66683 11.3334L13.3335 4.66669" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
								<span>ชื่อตำแหน่งงาน</span>
							</label>
						</th>
						<th className=" pb-3 items-center gap-3.5 font-medium "><div className=" flex ">ภาควิชา / หน่วยงาน</div></th>
						<th className=" pb-3 items-center gap-3.5 font-medium "><div className=" flex ">ความรับผิดชอบหลัก</div></th>
						<th className=" w-[125px] pb-3 items-center gap-3.5 font-medium "><div className=" flex ">สถานะ</div></th>
					</tr>
				</thead>
				<tbody>
					{
						roles.map((role, index) => (
							<tr className=" border-b-[1px] border-solid border-[var(--border)] " key={role.id}>
								<td>
									<div className=" flex h-[66px] py-3.5 items-center gap-3.5 ">
										<label className=" flex items-center gap-2.5 text-[var(--text-secondary)] ">
											<input className=" hidden peer " type="checkbox" />
											<div className=" w-[18px] h-[18px] aspect-square flex items-center justify-center appearance-none rounded-md border-[1px] border-solid border-[var(--border)] peer-checked:bg-[var(--primary)] peer-checked:border-[var(--primary)] ">
												<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
													<path d="M3.3335 8.00002L6.66683 11.3334L13.3335 4.66669" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</div>
										</label>
										<div className=" flex items-center gap-2.5 ">
											<div className=" flex flex-col justify-center items-start gap-0.5 ">
												<p className=" text-[var(--text-primary)] text-sm not-italic font-medium leading-normal ">{role.name}</p>
											</div>
										</div>
									</div>
								</td>
								<td>
									<div className=" flex h-[66px] py-3.5 px-0 items-center gap-3.5 ">
										<p className=" text-[var(--text-primary)] text-sm not-italic font-normal leading-normal ">{role.department.name}</p>
									</div>
								</td>
								<td>
									<div className=" flex h-[66px] py-3.5 px-0 items-center gap-3.5 ">
										<p className=" text-[var(--text-primary)] text-sm not-italic font-normal leading-normal ">{role.key_responsibility.map(responsibility => responsibility.name).join(", ")}</p>
									</div>
								</td>
								<td>
									<div className=" flex h-[66px] py-3.5 px-0 items-center gap-3.5 ">
										<p className=" text-[var(--text-primary)] text-sm not-italic font-normal leading-normal capitalize ">{role.user}</p>
									</div>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</>
	)
}