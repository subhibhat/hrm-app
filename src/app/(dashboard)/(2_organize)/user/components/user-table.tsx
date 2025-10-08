'use client';
import { useMemo, useState, useEffect } from 'react';

interface Department {
  id: string;
  name: string;
}

interface User {
  id: string;          
  role: 'ผู้ดูแลระบบ' | 'ผู้บริหาร' | 'อาจารย์' | string;
  name: string;
  email: string;
  department?: Department | null;
  status: 'ใช้งานอยู่' | 'รอการยืนยัน' | 'ระงับการใช้งาน' | string;
  avatarUrl?: string;
}

type SortKey = 'name' | 'id' | 'role' | 'department' | 'status';
type SortDir = 'asc' | 'desc';

export default function UserTable() {
  const users: User[] = [
    {
      id: '68001',
      role: 'ผู้ดูแลระบบ',
      name: 'ณัฏพล ศรีใสย',
      email: 'nattapong@gmail.com',
      department: null,
      status: 'ใช้งานอยู่',
      avatarUrl: undefined,
    },
    {
      id: '68002',
      role: 'อาจารย์',
      name: 'นภัสวรรณ วรรณโก\n',
      email: 'napaswan@gmail.com',
      department: { id: 'd1', name: 'ภาควิชาภาษาอังกฤษ' },
      status: 'ใช้งานอยู่',
    },
    {
      id: '68003',
      role: 'อาจารย์',
      name: 'สมชาย พฤกษ์เกษม',
      email: 'somchai@puniversity.edu',
      department: { id: 'd2', name: 'ภาควิชาวิศวกรรมเคมี' },
      status: 'รอการยืนยัน',
    },
    {
      id: '68004',
      role: 'ผู้ดูแลระบบ',
      name: 'กนกวรรณ ลายพนา',
      email: 'kanokwan@gmail.com',
      department: null,
      status: 'ระงับการใช้งาน',
    },
    {
      id: '68005',
      role: 'อาจารย์',
      name: 'อาทูรย์ เสงี่ยมงาม',
      email: 'art.ee@sci.com',
      department: { id: 'd3', name: 'สาขาวิชาวิทยาศาสตร์ และการพัฒนาเทคโน' },
      status: 'ใช้งานอยู่',
    },
    {
      id: '68006',
      role: 'ผู้บริหาร',
      name: 'จุฑาทิพย์ กิตติวัฒน์',
      email: 'jutthiphon.kg@gmail.com',
      department: { id: 'd4', name: 'ภาควิชาวิศวกรรมเคมี' },
      status: 'ใช้งานอยู่',
    },
    {
      id: '68007',
      role: 'อาจารย์',
      name: 'สุพัตรา ดุกไร',
      email: 'supatra@gmail.com',
      department: { id: 'd5', name: 'สาขาวิชาวิทยาศาสตร์ และการพัฒนาเทคโน' },
      status: 'ระงับการใช้งาน',
    },
    {
      id: '68008',
      role: 'ผู้ดูแลระบบ',
      name: 'วิชาญ แสงบุญใจ',
      email: 'wicharn@gmail.com',
      department: { id: 'd6', name: 'ภาควิชาคอมพิวเตอร์' },
      status: 'ใช้งานอยู่',
    },
    {
      id: '68009',
      role: 'อาจารย์',
      name: 'ประชัญ จงรักษ์',
      email: 'prachaya.d@gmail.com',
      department: { id: 'd7', name: 'ภาควิชาภาษาอังกฤษ' },
      status: 'ใช้งานอยู่',
    },
    {
      id: '68010',
      role: 'อาจารย์',
      name: 'กิตติพัฒน์ ชนะมิ์',
      email: 'kittiphat@gmail.com',
      department: { id: 'd8', name: 'ภาควิชาวิศวกรรมอุตสาหการ' },
      status: 'ใช้งานอยู่',
    },
  ];

 
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [roleFilter, setRoleFilter] = useState<string>('');
  const [deptFilter, setDeptFilter] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('');

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search.trim().toLowerCase()), 250);
    return () => clearTimeout(t);
  }, [search]);

  const roleOptions = useMemo(
    () => Array.from(new Set(users.map(u => u.role))).sort(),
    [users]
  );
  const deptOptions = useMemo(
    () => Array.from(new Set(users.map(u => u.department?.name || '–'))).sort(),
    [users]
  );
  const statusOptions = useMemo(
    () => Array.from(new Set(users.map(u => u.status))),
    [users]
  );


  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortDir, setSortDir] = useState<SortDir>('asc');

  const toggleSort = (key: SortKey) => {
    setSortKey(prev => (prev === key ? prev : key));
    setSortDir(prev => (sortKey === key ? (prev === 'asc' ? 'desc' : 'asc') : 'asc'));
  };


  const roleBadge = (role: string) => {
    // สีพาสเทล + ตัวหนาแบบในภาพ
    const map: Record<string, string> = {
      'ผู้ดูแลระบบ': 'bg-[#EDE2FF] text-[#7B42FF] border-[#E3D6FF]',
      'ผู้บริหาร': 'bg-[#FFE9E0] text-[#E66A37] border-[#FFD7C5]',
      'อาจารย์': 'bg-[#E5E9FF] text-[#4F5DFF] border-[#D7DCFF]',
    };
    const cls = map[role] || 'bg-[var(--background)] text-[var(--text-primary)] border-[var(--border)]';
    return (
      <span className={`inline-flex items-center px-2.5 h-6 text-xs font-semibold rounded-full border ${cls}`}>
        {role}
      </span>
    );
  };

  const statusDot = (status: string) => {
    const dot =
      status === 'ใช้งานอยู่'
        ? 'bg-[#32D74B]'
        : status === 'รอการยืนยัน'
        ? 'bg-[#F7C948]'
        : 'bg-[#FF3B30]';
    return (
      <span className="inline-flex items-center gap-2">
        <span className={`inline-block w-2.5 h-2.5 rounded-full ${dot}`} />
        <span className="text-sm">{status}</span>
      </span>
    );
  };

  const includeBySearch = (u: User) => {
    if (!debouncedSearch) return true;
    const hay = [
      u.name,
      u.email,
      u.id,
      u.role,
      u.department?.name ?? '',
      u.status,
    ]
      .join(' ')
      .toLowerCase();
    return hay.includes(debouncedSearch);
  };


  const filtered = useMemo(
    () =>
      users
        .filter(includeBySearch)
        .filter(u => (roleFilter ? u.role === roleFilter : true))
        .filter(u => (deptFilter ? (u.department?.name ?? '–') === deptFilter : true))
        .filter(u => (statusFilter ? u.status === statusFilter : true)),
    [users, debouncedSearch, roleFilter, deptFilter, statusFilter]
  );

  const sorted = useMemo(() => {
    const arr = [...filtered];
    arr.sort((a, b) => {
      const dir = sortDir === 'asc' ? 1 : -1;
      const valA =
        sortKey === 'department'
          ? (a.department?.name ?? '–')
          : (a as any)[sortKey];
      const valB =
        sortKey === 'department'
          ? (b.department?.name ?? '–')
          : (b as any)[sortKey];
      return String(valA).localeCompare(String(valB), 'th') * dir;
    });
    return arr;
  }, [filtered, sortKey, sortDir]);

  const resetFilters = () => {
    setSearch('');
    setRoleFilter('');
    setDeptFilter('');
    setStatusFilter('');
  };

  const HeaderCell = ({
    label,
    k,
    width,
  }: {
    label: string;
    k: SortKey;
    width?: string;
  }) => {
    const active = sortKey === k;
    return (
      <th className={`${width ?? ''} pb-3 font-medium`}>
        <button
          onClick={() => toggleSort(k)}
          className="group flex items-center gap-1.5 text-xs uppercase text-[var(--text-secondary)]"
        >
          <span>{label}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className={`transition-transform ${active && sortDir === 'desc' ? 'rotate-180' : ''} opacity-60 group-hover:opacity-100`}
          >
            <path
              d="M8 4l4 5H4l4-5Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </th>
    );
  };

  return (
    <div className="w-full">
      <div className="flex py-0 justify-between items-start mb-3">
        <div className="flex gap-2">
          <label className="flex flex-col items-start gap-2">
            <div className="flex w-[280px] h-[38px] px-3.5 items-center gap-2.5 rounded-lg border border-[var(--border)] bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.5253 13.4087C11.1658 14.5409 9.42211 15.1053 7.65702 14.9846C5.89192 14.8639 4.2413 14.0674 3.04849 12.7608C1.85567 11.4541 1.2125 9.73794 1.25276 7.96918C1.29301 6.20043 2.0136 4.51528 3.26462 3.26425C4.51564 2.01323 6.20079 1.29265 7.96955 1.25239C9.73831 1.21214 11.4545 1.85531 12.7611 3.04812C14.0678 4.24093 14.8643 5.89156 14.985 7.65665C15.1056 9.42174 14.5412 11.1654 13.4091 12.525L17.3178 16.4325C17.4352 16.5498 17.5011 16.709 17.5011 16.875C17.5011 17.0409 17.4352 17.2001 17.3178 17.3175C17.2005 17.4348 17.0413 17.5008 16.8753 17.5008C16.7094 17.5008 16.5502 17.4348 16.4328 17.3175L12.5253 13.4087ZM13.7503 8.12497C13.7503 7.38629 13.6048 6.65483 13.3222 5.97238C13.0395 5.28992 12.6251 4.66983 12.1028 4.1475C11.5805 3.62517 10.9604 3.21083 10.2779 2.92815C9.59548 2.64547 8.86402 2.49997 8.12534 2.49997C7.38665 2.49997 6.6552 2.64547 5.97274 2.92815C5.29029 3.21083 4.67019 3.62517 4.14786 4.1475C3.62553 4.66983 3.2112 5.28992 2.92852 5.97238C2.64583 6.65483 2.50034 7.38629 2.50034 8.12497C2.50034 9.61682 3.09297 11.0476 4.14786 12.1024C5.20276 13.1573 6.6335 13.75 8.12534 13.75C9.61718 13.75 11.0479 13.1573 12.1028 12.1024C13.1577 11.0476 13.7503 9.61682 13.7503 8.12497Z" fill="#0E121A"/>
              </svg>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="ค้นหาชื่อ, อีเมล, หรือรหัสบุคลากร"
                className="text-sm w-full h-full py-3.5 focus:outline-none"
              />
            </div>
          </label>

          <div className="relative">
            <button
              onClick={() => setShowFilters(v => !v)}
              className="flex h-[38px] px-3.5 items-center gap-2.5 rounded-lg border border-[var(--border)]"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11.025 12.15a.675.675 0 1 1 0 1.35H6.975a.675.675 0 1 1 0-1.35h4.05ZM12.825 8.325a.675.675 0 1 1 0 1.35H5.175a.675.675 0 1 1 0-1.35h7.65ZM14.625 4.5a.675.675 0 1 1 0 1.35H3.375a.675.675 0 1 1 0-1.35h11.25Z" fill="#0E121A"/></svg>
              <span className="text-sm font-medium">ตัวกรอง</span>
            </button>
            {showFilters && (
              <div className="absolute z-10 mt-2 w-[600px] rounded-xl border border-[var(--border)] bg-white p-3 shadow">
                <div className="grid grid-cols-3 gap-3">
                  <label className="flex flex-col gap-1 text-sm">
                    <span className="text-[var(--text-secondary)]">บทบาท</span>
                    <select value={roleFilter} onChange={e => setRoleFilter(e.target.value)}
                            className="h-[38px] rounded-lg border border-[var(--border)] px-3 bg-white focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      {roleOptions.map(r => (<option key={r} value={r}>{r}</option>))}
                    </select>
                  </label>
                  <label className="flex flex-col gap-1 text-sm">
                    <span className="text-[var(--text-secondary)]">หน่วยงาน/ภาควิชา</span>
                    <select value={deptFilter} onChange={e => setDeptFilter(e.target.value)}
                            className="h-[38px] rounded-lg border border-[var(--border)] px-3 bg-white focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      {deptOptions.map(d => (<option key={d} value={d}>{d}</option>))}
                    </select>
                  </label>
                  <label className="flex flex-col gap-1 text-sm">
                    <span className="text-[var(--text-secondary)]">สถานะ</span>
                    <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}
                            className="h-[38px] rounded-lg border border-[var(--border)] px-3 bg-white focus:outline-none">
                      <option value="">ทั้งหมด</option>
                      {statusOptions.map(s => (<option key={s} value={s}>{s}</option>))}
                    </select>
                  </label>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-xs text-[var(--text-secondary)]">พบ {sorted.length} รายการ</span>
                  <div className="flex gap-2">
                    <button onClick={resetFilters} className="h-[34px] px-3 rounded-lg border border-[var(--border)]">
                      ล้างตัวกรอง
                    </button>
                    <button onClick={() => setShowFilters(false)} className="h-[34px] px-3 rounded-lg bg-[var(--primary)] text-white">
                      ใช้ตัวกรอง
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex h-[38px] px-3.5 items-center gap-2.5 rounded-lg border border-[var(--border)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M13.9504 15.3C14.0629 15.2998 14.1713 15.3417 14.2544 15.4174C14.3375 15.4932 14.3893 15.5973 14.3994 15.7093C14.4096 15.8213 14.3774 15.933 14.3093 16.0225C14.2412 16.112 14.1421 16.1727 14.0314 16.1928L13.9504 16.2H4.05044C3.93799 16.2002 3.82953 16.1583 3.74643 16.0825C3.66333 16.0067 3.61161 15.9026 3.60145 15.7906C3.59129 15.6786 3.62343 15.5669 3.69154 15.4774C3.75964 15.3879 3.85879 15.3272 3.96944 15.3072L4.05044 15.3H13.9504ZM9.00044 1.80176C9.10576 1.80172 9.20776 1.83863 9.28867 1.90606C9.36958 1.97348 9.42428 2.06715 9.44324 2.17076L9.45044 2.25176L9.44684 12.8664L12.7273 9.58316C12.8017 9.50848 12.8999 9.46225 13.0048 9.45255C13.1097 9.44285 13.2148 9.47028 13.3015 9.53006L13.3645 9.58226C13.4391 9.65672 13.4851 9.75497 13.4947 9.8599C13.5042 9.96483 13.4766 10.0698 13.4167 10.1565L13.3645 10.2195L9.32174 14.2695C9.25895 14.332 9.17912 14.3745 9.09224 14.3919L8.99684 14.4009C8.92812 14.4007 8.86034 14.3848 8.79872 14.3544C8.7371 14.3239 8.68326 14.2798 8.64134 14.2254L4.63004 10.2195C4.55 10.1402 4.50258 10.0339 4.49713 9.92141C4.49168 9.80893 4.5286 9.69849 4.60061 9.61191C4.67261 9.52532 4.77446 9.46888 4.88605 9.45373C4.99764 9.43857 5.11085 9.46581 5.20334 9.53006L5.26634 9.58226L8.54684 12.8592L8.55044 2.25176C8.55044 2.13241 8.59785 2.01795 8.68224 1.93356C8.76663 1.84917 8.88109 1.80176 9.00044 1.80176Z" fill="#0E121A"/>
            </svg>
            <span className="text-sm">ส่งออกเป็น CSV</span>
          </button>
          <button className="flex h-[38px] px-3.5 items-center gap-2.5 rounded-lg border border-[var(--border)] bg-[#0163ff] text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 0C6.13261 0 6.25979 0.0526785 6.35355 0.146447C6.44732 0.240215 6.5 0.367392 6.5 0.5V5.5H11.5C11.6326 5.5 11.7598 5.55268 11.8536 5.64645C11.9473 5.74021 12 5.86739 12 6C12 6.13261 11.9473 6.25979 11.8536 6.35355C11.7598 6.44732 11.6326 6.5 11.5 6.5H6.5V11.5C6.5 11.6326 6.44732 11.7598 6.35355 11.8536C6.25979 11.9473 6.13261 12 6 12C5.86739 12 5.74021 11.9473 5.64645 11.8536C5.55268 11.7598 5.5 11.6326 5.5 11.5V6.5H0.5C0.367392 6.5 0.240215 6.44732 0.146447 6.35355C0.0526785 6.25979 0 6.13261 0 6C0 5.86739 0.0526785 5.74021 0.146447 5.64645C0.240215 5.55268 0.367392 5.5 0.5 5.5H5.5V0.5C5.5 0.367392 5.55268 0.240215 5.64645 0.146447C5.74021 0.0526785 5.86739 0 6 0Z" fill="white"/>
            </svg>
            <span className="text-sm">เพิ่มผู้ใช้งาน</span>
          </button>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl border border-[var(--border)]">
        <table className="w-full">
          <thead className="bg-[var(--background)]">
            <tr className="text-[var(--text-secondary)] text-xs uppercase border-b border-[var(--border)]">
              <th className="w-[48px] px-3 py-3">
                <input type="checkbox" className="accent-[var(--primary)] w-4 h-4" />
              </th>
              <HeaderCell label="ผู้ใช้" k="name" width="w-[340px]" />
              <HeaderCell label="รหัสบุคลากร" k="id" width="w-[140px]" />
              <HeaderCell label="บทบาท" k="role" width="w-[160px]" />
              <HeaderCell label="หน่วยงาน/ภาควิชา" k="department" width="w-[320px]" />
              <HeaderCell label="สถานะ" k="status" width="w-[160px]" />
              <th className="w-[56px]"></th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((u) => (
              <tr key={u.id} className="border-b border-[var(--border)]">
                <td className="px-3">
                  <input type="checkbox" className="accent-[var(--primary)] w-4 h-4" />
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    {u.avatarUrl ? (
                      <img src={u.avatarUrl} alt={u.name} className="w-9 h-9 rounded-full object-cover" />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-[var(--background)]" />
                    )}
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-[var(--text-primary)]">{u.name}</span>
                      <span className="text-xs text-[var(--text-secondary)]">{u.email}</span>
                    </div>
                  </div>
                </td>
                <td className="py-3">
                  <span className="text-sm text-[var(--text-primary)]">{u.id}</span>
                </td>
                <td className="py-3">
                  {roleBadge(u.role)}
                </td>
                <td className="py-3">
                  <span className="text-sm text-[var(--text-primary)]">{u.department?.name ?? '–'}</span>
                </td>
                <td className="py-3">
                  {statusDot(u.status)}
                </td>
                <td className="py-3 pr-3 text-right">
                  <button className="inline-flex w-8 h-8 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--input-default)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M7.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm6 0A1.5 1.5 0 1 1 12 10.5 1.5 1.5 0 0 1 13.5 12ZM21 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#969696"/>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
            {sorted.length === 0 && (
              <tr>
                <td colSpan={7} className="py-8 text-center text-sm text-[var(--text-secondary)]">
                  ไม่พบข้อมูลที่ตรงกับตัวกรอง
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
