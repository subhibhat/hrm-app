'use client';
import { useMemo, useState } from 'react';

type Status = 'ใช้งานอยู่' | 'ปิดใช้งาน';

interface RoleRow {
  id: string;
  roleName: string;          // ชื่อบทบาท
  color: string;             // hex สี (ช่องสี่เหลี่ยม)
  userCount: number;         // จำนวนผู้ใช้
  unusedLicenses: number;    // จำนวนสิทธิ์ที่ใช้ได้
  status: Status;
}

type SortKey = 'roleName' | 'color' | 'userCount' | 'unusedLicenses' | 'status';
type SortDir = 'asc' | 'desc';

export default function RoleTable() {
  // --- ตัวอย่างข้อมูลให้เหมือนภาพ ---
  const rows: RoleRow[] = [
    { id: 'r1', roleName: 'ผู้ดูแลระบบ (Admin)',     color: '#6F2AFF', userCount: 5,  unusedLicenses: 10, status: 'ใช้งานอยู่' },
    { id: 'r2', roleName: 'อาจารย์ (Lecturer)',       color: '#2F66FF', userCount: 95, unusedLicenses: 4,  status: 'ใช้งานอยู่' },
    { id: 'r3', roleName: 'ผู้บริหาร (Executive)',   color: '#E0772F', userCount: 20, unusedLicenses: 6,  status: 'ใช้งานอยู่' },
  ];

  const [sortKey, setSortKey] = useState<SortKey>('roleName');
  const [sortDir, setSortDir] = useState<SortDir>('asc');

  const toggleSort = (key: SortKey) => {
    setSortKey(prev => (prev === key ? prev : key));
    setSortDir(prev => (sortKey === key ? (prev === 'asc' ? 'desc' : 'asc') : 'asc'));
  };

  const sorted = useMemo(() => {
    const arr = [...rows];
    arr.sort((a, b) => {
      const dir = sortDir === 'asc' ? 1 : -1;
      let va: string | number = a[sortKey] as any;
      let vb: string | number = b[sortKey] as any;

      if (sortKey === 'color') {
        return String(va).localeCompare(String(vb)) * dir;
      }
      if (sortKey === 'roleName' || sortKey === 'status') {
        return String(va).localeCompare(String(vb), 'th') * dir;
      }
      return (va as number - (vb as number)) * dir;
    });
    return arr;
  }, [rows, sortKey, sortDir]);

  const HeaderCell = ({ label, k }: { label: string; k: SortKey }) => {
    const active = sortKey === k;
    return (
      <th className="py-2.5">
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
            <path d="M8 4l4 5H4l4-5Z" fill="currentColor" />
          </svg>
        </button>
      </th>
    );
  };

  return (
    <div className="w-full h-full overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full">
        <thead className="bg-[var(--background)]">
          <tr className="text-[var(--text-secondary)] text-xs uppercase border-b border-[var(--border)]">
            <th className="w-[48px] px-3 py-2.5">
              <input type="checkbox" className="accent-[var(--primary)] w-4 h-4" />
            </th>
            <HeaderCell label="ชื่อบทบาท" k="roleName" />
            <HeaderCell label="สี" k="color" />
            <HeaderCell label="จำนวนผู้ใช้" k="userCount" />
            <HeaderCell label="จำนวนสิทธิ์ที่ใช้ได้" k="unusedLicenses" />
            <HeaderCell label="สถานะ" k="status" />
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
                <span className="text-sm text-[var(--text-primary)]">{r.roleName}</span>
              </td>

              <td className="py-2.5">
                <span
                  className="inline-block w-4 h-4 rounded"
                  style={{ backgroundColor: r.color }}
                  aria-label={`สีของบทบาท ${r.roleName}`}
                  title={r.color}
                />
              </td>

              <td className="py-2.5">
                <span className="inline-flex items-center gap-2 text-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z" fill="#8C8C8C" />
                  </svg>
                  {r.userCount}
                </span>
              </td>

              <td className="py-2.5">
                <button
                  className="text-sm underline text-[#0163ff] hover:opacity-80"
                  onClick={() => alert(`แสดงรายการสิทธิ์ที่ยังไม่ใช้ของ "${r.roleName}" (${r.unusedLicenses})`)}
                >
                  {r.unusedLicenses} สิทธิ์ที่ใช้ได้
                </button>
              </td>

              <td className="py-2.5">
                <span className="inline-flex items-center gap-2 text-sm">
                  <span className={`inline-block w-2.5 h-2.5 rounded-full ${r.status === 'ใช้งานอยู่' ? 'bg-[#32D74B]' : 'bg-[#FF3B30]'}`} />
                  {r.status}
                </span>
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
              <td colSpan={7} className="py-8 text-center text-sm text-[var(--text-secondary)]">
                ไม่พบข้อมูล
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
