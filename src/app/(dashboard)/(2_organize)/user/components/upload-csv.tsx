import React from 'react'

interface Department {
	id: string;
	name: string;
}

interface User {
	id: string;
	role: string;
	fname: string;
    lname: string;
	email: string;
	department: Department;
	status: string;
}

export default function uploadcsv() {
    	const users: User[] = [
		{
			id: 'TU-001',
			role: 'Lecturer',
			fname: 'Nattapong Srisai',
            lname: 'Nattapong Srisai',
			email: 'nattapong@gmail.com',
			department: { id: '12345', name: 'Research and innovation' },
			status: 'ใช้งาน'
		},
		{
			id: 'TU-002',
			role: 'Executive',
			fname: 'Nattapong Srisai',
            lname: 'Nattapong Srisai',
			email: 'sompong.chaiyaporn@email.com',
			department: { id: '12345', name: 'Curriculum development' },
			status: 'ใช้งาน'
		},
		{
			id: 'TU-003',
			role: 'Admin',
			fname: 'Nattapong Srisai',
            lname: 'Nattapong Srisai',
			email: 'anong.thongchai@email.com',
			department: { id: '12345', name: 'IT Support' },
			status: 'ไม่ใช้งาน'
		},
		{
			id: 'TU-004',
			role: 'Lecturer',
			fname: 'Nattapong Srisai',
            lname: 'Nattapong Srisai',
			email: 'pimchanok.srisai@email.com ',
			department: { id: '12345', name: 'Data analysis' },
			status: 'ใช้งาน'
		},
		{
			id: 'TU-005',
			role: 'Executive',
			fname: 'Nattapong Srisai',
            lname: 'Nattapong Srisai',
			email: 'kritsada.phongthavorn@email.com ',
			department: { id: '12345', name: 'Project management' },
			status: 'ใช้งาน'
		},
	];
  return (
    <div className='w-[1140px] border border-[var(--border)]'>
        <div className='flex  justify-between'>
            <div>อัปโหลดไฟล์ CSV</div>
            <div>อัปโหลดไฟล์</div>
        </div>
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
                        <th className=" w-[194px] pb-3 items-center gap-3.5 font-medium "><div className=" flex ">นามสกุล</div></th>
                        <th className=" w-[194px] pb-3 items-center gap-3.5 font-medium "><div className=" flex ">รหัสบุคลากร</div></th>
						<th className=" w-[194px] pb-3 items-center gap-3.5 font-medium "><div className=" flex ">อีเมล</div></th>
						<th className=" w-[193px] pb-3 items-center gap-3.5 font-medium "><div className=" flex ">ตำแหน่ง</div></th>
						<th className=" w-[330px] pb-3 items-center gap-3.5 font-medium "><div className=" flex ">คำนำหน้า</div></th>
                        <th className=" w-[330px] pb-3 items-center gap-3.5 font-medium "><div className=" flex "> </div></th>
						<th>&nbsp;</th>
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
												<p className=" text-[var(--text-primary)] text-sm not-italic font-medium leading-normal ">{user.fname}</p>
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
								<td>
									<div className=" flex w-[67px] p-3.5 justify-end items-center gap-2.5 self-stretch ">
										<button className=" flex w-[34px] h-[34px] justify-center items-center gap-[10.556px] shrink-0 aspect-square rounded-[6.333px] border border-solid border-[var(--border)] bg-[var(--input-default)] ">
											<div className=" flex w-6 h-6 aspect-square ">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<path d="M7.5 12C7.5 12.3978 7.34196 12.7794 7.06066 13.0607C6.77936 13.342 6.39782 13.5 6 13.5C5.60218 13.5 5.22064 13.342 4.93934 13.0607C4.65804 12.7794 4.5 12.3978 4.5 12C4.5 11.6022 4.65804 11.2206 4.93934 10.9393C5.22064 10.658 5.60218 10.5 6 10.5C6.39782 10.5 6.77936 10.658 7.06066 10.9393C7.34196 11.2206 7.5 11.6022 7.5 12ZM13.5 12C13.5 12.3978 13.342 12.7794 13.0607 13.0607C12.7794 13.342 12.3978 13.5 12 13.5C11.6022 13.5 11.2206 13.342 10.9393 13.0607C10.658 12.7794 10.5 12.3978 10.5 12C10.5 11.6022 10.658 11.2206 10.9393 10.9393C11.2206 10.658 11.6022 10.5 12 10.5C12.3978 10.5 12.7794 10.658 13.0607 10.9393C13.342 11.2206 13.5 11.6022 13.5 12ZM18 13.5C18.3978 13.5 18.7794 13.342 19.0607 13.0607C19.342 12.7794 19.5 12.3978 19.5 12C19.5 11.6022 19.342 11.2206 19.0607 10.9393C18.7794 10.658 18.3978 10.5 18 10.5C17.6022 10.5 17.2206 10.658 16.9393 10.9393C16.658 11.2206 16.5 11.6022 16.5 12C16.5 12.3978 16.658 12.7794 16.9393 13.0607C17.2206 13.342 17.6022 13.5 18 13.5Z" fill="#969696" />
												</svg>
											</div>
										</button>
									</div>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
    </div>
  )
}
