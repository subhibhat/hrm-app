'use client';
import { useEffect, useMemo, useState } from 'react';

type Status = 'ใช้งานอยู่' | 'ปิดใช้งาน';
interface Head {
  name: string;
  email?: string;
  avatarUrl?: string;
}
interface DepartmentRow {
  id: string;
  name: string;     
  head?: Head | null; 
  userCount: number; 
  status: Status;
}

type SortKey = 'name' | 'head' | 'userCount' | 'status';
type SortDir = 'asc' | 'desc';

export default function DepartmentTable() {
  const rows: DepartmentRow[] = [
    { id: 'd1', name: 'ภาควิชาเวชศาสตร์',     head: { name: 'นภัสนันท์ วรรณโกน' }, userCount: 5,  status: 'ใช้งานอยู่' },
    { id: 'd2', name: 'ภาควิชาภาษาอังกฤษ',   head: { name: 'สมชาย พฤกษ์เกษม'   }, userCount: 95, status: 'ใช้งานอยู่' },
    { id: 'd3', name: 'ภาควิชาวิศวกรรมเคมี', head: { name: 'อาทูรย์ เสงี่ยมงาม' }, userCount: 20, status: 'ใช้งานอยู่' },
    { id: 'd4', name: 'สาขาวิชาวิทยาศาสตร์ และการพัฒนาเทคโน', head: { name: 'กนกวรรณ ลายพนา' }, userCount: 20, status: 'ใช้งานอยู่' },
    { id: 'd5', name: 'สาขาวิชาวิทยาศาสตร์ และการพัฒนาเทคโน', head: { name: 'กนกวรรณ ลายพนา' }, userCount: 20, status: 'ใช้งานอยู่' },
  ];

  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilter, setStatusFilter] = useState<'' | Status>('');
  const [minUser, setMinUser] = useState<number | ''>('');
  const [maxUser, setMaxUser] = useState<number | ''>('');

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search.trim().toLowerCase()), 250);
    return () => clearTimeout(t);
  }, [search]);

 
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortDir, setSortDir] = useState<SortDir>('asc');
  const toggleSort = (key: SortKey) => {
    setSortKey(prev => (prev === key ? prev : key));
    setSortDir(prev => (sortKey === key ? (prev === 'asc' ? 'desc' : 'asc') : 'asc'));
  };

 
  const filtered = useMemo(() => {
    return rows
      .filter(r => {
        if (!debouncedSearch) return true;
        const hay = [r.name, r.head?.name ?? '', r.status, String(r.userCount)].join(' ').toLowerCase();
        return hay.includes(debouncedSearch);
      })
      .filter(r => (statusFilter ? r.status === statusFilter : true))
      .filter(r => (minUser !== '' ? r.userCount >= minUser : true))
      .filter(r => (maxUser !== '' ? r.userCount <= maxUser : true));
  }, [rows, debouncedSearch, statusFilter, minUser, maxUser]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    arr.sort((a, b) => {
      const dir = sortDir === 'asc' ? 1 : -1;
      let va: string | number, vb: string | number;
      if (sortKey === 'head') {
        va = a.head?.name ?? '–';
        vb = b.head?.name ?? '–';
        return String(va).localeCompare(String(vb), 'th') * dir;
      }
      if (sortKey === 'userCount') {
        return ((a.userCount as number) - (b.userCount as number)) * dir;
      }
      if (sortKey === 'name' || sortKey === 'status') {
        va = (a as any)[sortKey];
        vb = (b as any)[sortKey];
        return String(va).localeCompare(String(vb), 'th') * dir;
      }
      return 0;
    });
    return arr;
  }, [filtered, sortKey, sortDir]);

  const resetFilters = () => {
    setSearch('');
    setStatusFilter('');
    setMinUser('');
    setMaxUser('');
  };

  
  const StatusCell = ({ status }: { status: Status }) => (
    <span className="inline-flex items-center gap-2">
      <span className={`inline-block w-2.5 h-2.5 rounded-full ${status === 'ใช้งานอยู่' ? 'bg-[#32D74B]' : 'bg-[#FF3B30]'}`} />
      <span className="text-sm">{status}</span>
    </span>
  );

  const HeaderCell = ({ label, k, width }: { label: string; k: SortKey; width?: string }) => {
    const active = sortKey === k;
    return (
      <th className={`${width ?? ''} py-2.5`}>
        <button
          onClick={() => toggleSort(k)}
          className="group flex items-center gap-1.5 text-xs uppercase text-[var(--text-secondary)]"
        >
          <span>{label}</span>
          <svg width="16" height="16" viewBox="0 0 16 16" className={`transition-transform ${active && sortDir === 'desc' ? 'rotate-180' : ''} opacity-60 group-hover:opacity-100`}>
            <path d="M8 4l4 5H4l4-5Z" fill="currentColor" />
          </svg>
        </button>
      </th>
    );
  };

  return (
    <div className="w-full">
      {/* Top controls */}
      <div className="mb-3 flex items-start justify-between">
        <div className="flex gap-2">
          {/* Search */}
          <label className="flex items-center gap-2 w-[280px] h-[38px] px-3.5 rounded-lg border border-[var(--border)] bg-white">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M12.5253 13.4087C11.1658 14.5409 9.42211 15.1053 7.65702 14.9846C5.89192 14.8639 4.2413 14.0674 3.04849 12.7608C1.85567 11.4541 1.2125 9.73794 1.25276 7.96918C1.29301 6.20043 2.0136 4.51528 3.26462 3.26425C4.51564 2.01323 6.20079 1.29265 7.96955 1.25239C9.73831 1.21214 11.4545 1.85531 12.7611 3.04812C14.0678 4.24093 14.8643 5.89156 14.985 7.65665C15.1056 9.42174 14.5412 11.1654 13.4091 12.525L17.3178 16.4325C17.4352 16.5498 17.5011 16.709 17.5011 16.875C17.5011 17.0409 17.4352 17.2001 17.3178 17.3175C17.2005 17.4348 17.0413 17.5008 16.8753 17.5008C16.7094 17.5008 16.5502 17.4348 16.4328 17.3175L12.5253 13.4087Z" fill="#1F1F1F"/>
            </svg>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="ค้นหาภาควิชา"
              className="text-sm w-full h-full focus:outline-none"
            />
          </label>

          {/* Filters */}
          <div className="relative">
            <button
              onClick={() => setShowFilters(v => !v)}
              className="flex h-[38px] items-center gap-2.5 px-3.5 rounded-lg border border-[var(--border)]"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11.025 12.15a.675.675 0 1 1 0 1.35H6.975a.675.675 0 1 1 0-1.35h4.05ZM12.825 8.325a.675.675 0 1 1 0 1.35H5.175a.675.675 0 1 1 0-1.35h7.65ZM14.625 4.5a.675.675 0 1 1 0 1.35H3.375a.675.675 0 1 1 0-1.35h11.25Z" fill="#0E121A"/></svg>
              <span className="text-sm font-medium">ตัวกรอง</span>
            </button>

            {showFilters && (
              <div className="absolute z-10 mt-2 w-[520px] rounded-xl border border-[var(--border)] bg-white p-3 shadow">
                <div className="grid grid-cols-3 gap-3">
                  <label className="flex flex-col gap-1 text-sm">
                    <span className="text-[var(--text-secondary)]">สถานะ</span>
                    <select
                      value={statusFilter}
                      onChange={e => setStatusFilter(e.target.value as Status | '')}
                      className="h-[38px] rounded-lg border border-[var(--border)] px-3 bg-white focus:outline-none"
                    >
                      <option value="">ทั้งหมด</option>
                      <option value="ใช้งานอยู่">ใช้งานอยู่</option>
                      <option value="ปิดใช้งาน">ปิดใช้งาน</option>
                    </select>
                  </label>

                  <label className="flex flex-col gap-1 text-sm">
                    <span className="text-[var(--text-secondary)]">จำนวนผู้ใช้ (ต่ำสุด)</span>
                    <input
                      type="number"
                      min={0}
                      value={minUser}
                      onChange={e => setMinUser(e.target.value === '' ? '' : Number(e.target.value))}
                      className="h-[38px] rounded-lg border border-[var(--border)] px-3 bg-white focus:outline-none"
                    />
                  </label>

                  <label className="flex flex-col gap-1 text-sm">
                    <span className="text-[var(--text-secondary)]">จำนวนผู้ใช้ (สูงสุด)</span>
                    <input
                      type="number"
                      min={0}
                      value={maxUser}
                      onChange={e => setMaxUser(e.target.value === '' ? '' : Number(e.target.value))}
                      className="h-[38px] rounded-lg border border-[var(--border)] px-3 bg-white focus:outline-none"
                    />
                  </label>
                </div>

                <div className="mt-3 flex items-center justify-between">
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
          <button className="flex h-[38px] items-center gap-2.5 px-3.5 rounded-lg border border-[var(--border)]">
            {/* ไอคอนดาวน์โหลดเรียบ ๆ */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2.25a.75.75 0 0 1 .75.75v5.19l1.72-1.72a.75.75 0 1 1 1.06 1.06L8.53 11.55a.75.75 0 0 1-1.06 0L4.47 7.53a.75.75 0 1 1 1.06-1.06L7.25 8.2V3a.75.75 0 0 1 .75-.75Z" fill="currentColor"/><path d="M3 12.5A1.5 1.5 0 0 0 4.5 14h7A1.5 1.5 0 0 0 13 12.5V11a.75.75 0 0 0-1.5 0v1.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V11A.75.75 0 0 0 3 11v1.5Z" fill="currentColor"/></svg>
            <span className="text-sm">ส่งออกเป็น CSV</span>
          </button>
          <button className="flex h-[38px] items-center gap-2.5 px-3.5 rounded-lg border border-[var(--border)] bg-[#0163ff] text-white">
            <span className="text-sm">+ เพิ่มภาควิชา</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-[var(--border)]">
        <table className="w-full">
          <thead className="bg-[var(--background)]">
            <tr className="text-[var(--text-secondary)] text-xs uppercase border-b border-[var(--border)]">
              <th className="w-[48px] px-3 py-2.5">
                <input type="checkbox" className="accent-[var(--primary)] w-4 h-4" />
              </th>
              <HeaderCell label="ชื่อภาควิชา"       k="name"      width="w-[320px]" />
              <HeaderCell label="หัวหน้าภาควิชา"   k="head"      width="w-[300px]" />
              <HeaderCell label="จำนวนผู้ใช้"       k="userCount" width="w-[140px]" />
              <HeaderCell label="สถานะ"            k="status"    width="w-[160px]" />
              <th className="w-[56px]"></th>
            </tr>
          </thead>

          <tbody>
            {sorted.map((r) => (
              <tr key={r.id} className="border-b border-[var(--border)]">
                <td className="px-3 py-2.5">
                  <input type="checkbox" className="accent-[var(--primary)] w-4 h-4" />
                </td>

                <td className="py-2.5">
                  <span className="text-sm text-[var(--text-primary)]">{r.name}</span>
                </td>

                <td className="py-2.5">
                  <div className="flex items-center gap-3">
                    {r.head?.avatarUrl ? (
                      <img src={r.head.avatarUrl} alt={r.head.name} className="w-8 h-8 rounded-full object-cover" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-[var(--background)]" />
                    )}
                    <span className="text-sm text-[var(--text-primary)]">{r.head?.name ?? '–'}</span>
                  </div>
                </td>

                <td className="py-2.5">
                  <div className="inline-flex items-center gap-2 text-sm">
                    {/* ไอคอนรูปคน */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z" fill="#8C8C8C" />
                    </svg>
                    {r.userCount}
                  </div>
                </td>

                <td className="py-2.5">
                  <StatusCell status={r.status} />
                </td>

                <td className="py-2.5 pr-3 text-right">
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
                <td colSpan={6} className="py-8 text-center text-sm text-[var(--text-secondary)]">
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
