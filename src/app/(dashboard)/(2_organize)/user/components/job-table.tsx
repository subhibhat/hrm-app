interface Department {
	id: string;
	name: string;
}

interface KeyResponsibility {
	name: string;
}

interface Job {
	id: string;
	name: string;
	department: Department;
	key_responsibility: KeyResponsibility[];
	user: string;
}

export default function JobTable() {
	const jobs: Job[] = [
		{
			id: 'JD-001',
			name: 'Lecturer – Physical Therapy',
			department: { id: '12345', name: 'Physical Therapy' },
			key_responsibility: [{ name: 'Teaching' }, { name: 'Research' }, { name: 'Clinic' }],
			user: 'active'
		},
		{
			id: 'JD-002',
			name: 'Clinical Instructor – OT',
			department: { id: '12345', name: 'Physical Therapy' },
			key_responsibility: [{ name: 'Clinical training supervision' }],
			user: 'active'
		},
		{
			id: 'JD-003',
			name: 'Lab Technician – Medical Tech',
			department: { id: '12345', name: 'Physical Therapy' },
			key_responsibility: [{ name: 'Laboratory' }],
			user: 'active'
		}
	];

	return (
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
							<span>Job Description</span>
						</label>
					</th>
					<th className=" pb-3 items-center gap-3.5 font-medium "><div className=" flex ">Department</div></th>
					<th className=" pb-3 items-center gap-3.5 font-medium "><div className=" flex ">KEY RESP.</div></th>
					<th className=" w-[125px] pb-3 items-center gap-3.5 font-medium "><div className=" flex ">Status</div></th>
				</tr>
			</thead>
			<tbody>
				{
					jobs.map((job, index) => (
						<tr className=" border-b-[1px] border-solid border-[var(--border)] " key={job.id}>
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
											<p className=" text-[var(--text-primary)] text-sm not-italic font-medium leading-normal ">{job.name}</p>
										</div>
									</div>
								</div>
							</td>
							<td>
								<div className=" flex h-[66px] py-3.5 px-0 items-center gap-3.5 ">
									<p className=" text-[var(--text-primary)] text-sm not-italic font-normal leading-normal ">{job.department.name}</p>
								</div>
							</td>
							<td>
								<div className=" flex h-[66px] py-3.5 px-0 items-center gap-3.5 ">
									<p className=" text-[var(--text-primary)] text-sm not-italic font-normal leading-normal ">{job.key_responsibility.map(responsibility => responsibility.name).join(", ")}</p>
								</div>
							</td>
							<td>
								<div className=" flex h-[66px] py-3.5 px-0 items-center gap-3.5 ">
									<p className=" text-[var(--text-primary)] text-sm not-italic font-normal leading-normal capitalize ">{job.user}</p>
								</div>
							</td>
						</tr>
					))
				}
			</tbody>
		</table>
	)
}