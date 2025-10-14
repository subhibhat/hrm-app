'use client';
import { useMemo, useState, useEffect } from 'react';
import InviteUser from './invite-user';
import { useDisclosure } from '@heroui/react';

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
    const [currentTab, setCurrentTab] = useState('users');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const toggleSort = (key: SortKey) => {
    setSortKey(prev => (prev === key ? prev : key));
    setSortDir(prev => (sortKey === key ? (prev === 'asc' ? 'desc' : 'asc') : 'asc'));
  };


  const roleBadge = (role: string) => {
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

        </button>
      </th>
    );
  };

  const handleInviteOpenChange = (open: boolean) => {
  if (open) onOpen();
 
};

  return (
    <div className="w-full">
      <div className="flex py-0 justify-between items-start mb-3">
        <div className="flex gap-2">
          <label className="flex flex-col items-start gap-2">
            <div className="flex w-[280px] h-[38px] px-3.5 items-center gap-2.5 rounded-lg border border-[var(--border)] bg-white">
         
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
  
            <span className="text-sm">ส่งออกเป็น CSV</span>
          </button>
            <button type="button"className="flex h-[38px] px-3.5 items-center gap-2.5 rounded-lg border border-[var(--border)] bg-[#0163ff] text-white"
              onClick={onOpen}>
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
      <InviteUser isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
