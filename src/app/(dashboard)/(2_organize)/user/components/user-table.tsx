interface Department {
	id: string;
	name: string;
}

interface User {
	id: string;
	role: string;
	name: string;
	email: string;
	department: Department;
	status: string;
}

export default function UserTable() {
	const users: User[] = [
		{
			id: 'TU-001',
			role: 'Lecturer',
			name: 'Nattapong Srisai',
			email: 'nattapong@gmail.com',
			department: { id: '12345', name: 'Research and innovation' },
			status: 'active'
		},
		{
			id: 'TU-002',
			role: 'Executive',
			name: 'Sompon Chaiyaporn',
			email: 'sompong.chaiyaporn@email.com',
			department: { id: '12345', name: 'Curriculum development' },
			status: 'active'
		},
		{
			id: 'TU-003',
			role: 'Admin',
			name: 'Anong Thongchai',
			email: 'anong.thongchai@email.com',
			department: { id: '12345', name: 'IT Support' },
			status: 'Inactive'
		},
		{
			id: 'TU-004',
			role: 'Lecturer',
			name: 'Pimchanok Srisai',
			email: 'pimchanok.srisai@email.com ',
			department: { id: '12345', name: 'Data analysis' },
			status: 'Active'
		},
		{
			id: 'TU-005',
			role: 'Executive',
			name: 'Kritsada Phongthavorn',
			email: 'kritsada.phongthavorn@email.com ',
			department: { id: '12345', name: 'Project management' },
			status: 'Active'
		},
	];

	return (
		<table className=" w-full border-0 ">
			<thead>
				<tr className=" text-[var(--text-secondary)] text-xs not-italic font-medium leading-normal uppercase border-b-[1px] border-solid border-[var(--border)] ">
					<th className=" w-[330px] pb-3 items-center gap-3.5 font-medium ">
						<label className=" flex items-center gap-2.5 flex-[1_0_0] text-[var(--text-secondary)] ">
							<input className=" hidden peer " type="checkbox" />
							<div className=" w-[18px] h-[18px] aspect-square flex items-center justify-center appearance-none rounded-md border-[1px] border-solid border-[var(--border)] peer-checked:bg-[var(--primary)] peer-checked:border-[var(--primary)] ">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
									<path d="M3.3335 8.00002L6.66683 11.3334L13.3335 4.66669" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<span>ชื่อผู้ใช้</span>
						</label>
					</th>
					<th className=" w-[194px] pb-3 items-center gap-3.5 font-medium "><div className=" flex ">รหัสบุคลากร</div></th>
					<th className=" w-[193px] pb-3 items-center gap-3.5 font-medium "><div className=" flex ">บทบาท</div></th>
					<th className=" w-[330px] pb-3 items-center gap-3.5 font-medium "><div className=" flex ">หน่วยงาน/ภาควิชา</div></th>
					<th className=" w-[125px] pb-3 items-center gap-3.5 font-medium "><div className=" flex ">สถานะ</div></th>
				</tr>
			</thead>
			<tbody>
				{
					users.map((user, index) => (
						<tr className=" border-b-[1px] border-solid border-[var(--border)] " key={user.id}>
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
										<div className=" w-[38px] h-[38px] aspect-square rounded-full bg-[var(--background)] "></div>
										<div className=" flex flex-col justify-center items-start gap-0.5 ">
											<p className=" text-[var(--text-primary)] text-sm not-italic font-medium leading-normal ">{user.name}</p>
											<p className=" text-[var(--text-secondary)] text-xs not-italic font-normal leading-normal ">{user.email}</p>
										</div>
									</div>
								</div>
							</td>
							<td>
								<div className=" flex h-[66px] py-3.5 px-0 items-center gap-3.5 ">
									<p className=" text-[var(--text-primary)] text-sm not-italic font-normal leading-normal ">{user.id}</p>
								</div>
							</td>
							<td>
								<div className=" flex h-[66px] py-3.5 px-0 items-center gap-3.5 ">
									<p className=" text-[var(--text-primary)] text-sm not-italic font-normal leading-normal ">{user.role}</p>
								</div>
							</td>
							<td>
								<div className=" flex h-[66px] py-3.5 px-0 items-center gap-3.5 ">
									<p className=" text-[var(--text-primary)] text-sm not-italic font-normal leading-normal ">{user.department.name}</p>
								</div>
							</td>
							<td>
								<div className=" flex h-[66px] py-3.5 px-0 items-center gap-3.5 ">
									<p className=" text-[var(--text-primary)] text-sm not-italic font-normal leading-normal capitalize ">{user.status}</p>
								</div>
							</td>
						</tr>
					))
				}
			</tbody>
		</table>
	)
}