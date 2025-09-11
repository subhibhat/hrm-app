export default function JobHistories() {
	return (
		<div className=" flex items-start gap-5 self-stretch ">
			<div className=" flex w-full pb-4 justify-between items-center self-stretch border-b border-solid border-[var(--border)] ">
				<div className=" flex pt-3 justify-center items-center gap-2.5 ">
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
		</div>
	)
}