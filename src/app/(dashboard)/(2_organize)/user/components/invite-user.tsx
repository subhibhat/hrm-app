'use client';

import Image from 'next/image';
import React from 'react';
import Frame from '../../../../../../public/Frame.svg';
import Doc from '../../../../../../public/doccsv.svg';
import { Modal, ModalContent, useDisclosure } from '@heroui/react';

export default function InviteUser({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
 
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}   backdrop="opaque" 
      classNames={{ wrapper: 'z-[1000]' }}   
      portalContainer={
        typeof document !== 'undefined' ? document.body : undefined
      }                                      
    >
      <ModalContent>
          {(onClose) => (
    <div className="inline-flex flex-col gap-2.5 rounded-lg">
      <div className="w-[462px] bg-[var(--background)] rounded-lg flex flex-col gap-5 border border-[var(--border)]">
        <div className="h-11 px-[18px] py-3.5 border-b border-[var(--border)] flex justify-between items-center">
          <div className="text-[var(--text-primary)] text-sm font-medium leading-none">
            เชิญผู้ใช้เข้าสู่ระบบ
          </div>
        </div>

        <div className="px-[18px] flex flex-col gap-5">
          <label className="w-full h-[38px] px-3.5 bg-[var(--input-default)] rounded-lg ring-1 ring-[var(--border)] flex items-center gap-2.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
             
            </svg>
            <input id="email" name="email" type="email"placeholder="กรอกอีเมลผู้ใช้"
              className="flex-1 bg-transparent outline-none text-[var(--text-primary)] text-sm"
            />
          </label>

          {/* First / Last name */}
          <div className="flex gap-4">
            <label className="flex-1 flex flex-col gap-2.5">
              <span className="text-[var(--text-primary)] text-sm font-medium leading-none">ชื่อจริง</span>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="กรอกชื่อจริง"
                className="h-[38px] px-3.5 bg-[var(--input-default)] rounded-lg ring-1 ring-[var(--border)] text-sm text-[var(--text-primary)] outline-none"
              />
            </label>

            <label className="flex-1 flex flex-col gap-2.5">
              <span className="text-[var(--text-primary)] text-sm font-medium leading-none">นามสกุล</span>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="กรอกนามสกุล"
                className="h-[38px] px-3.5 bg-[var(--input-default)] rounded-lg ring-1 ring-[var(--border)] text-sm text-[var(--text-primary)] outline-none"
              />
            </label>
          </div>

          <div className="flex gap-4 items-end">
            <label className="flex-1 flex flex-col gap-2.5">
              <span className="text-[var(--text-primary)] text-sm font-medium leading-none">ตำแหน่งทางวิชาการ</span>
              <div className="h-[38px] px-3.5 bg-[var(--input-default)] rounded-lg ring-1 ring-[var(--border)] flex items-center">
                <select
                  id="position"
                  name="position"
                  className="flex-1 bg-transparent outline-none text-sm text-[var(--text-primary)]"
                  defaultValue=""
                >
                  <option value="" disabled>เลือกตำแหน่ง</option>
                  <option value="lecturer">อาจารย์</option>
                  <option value="assistant">ผู้ช่วยศาสตราจารย์</option>
                  <option value="associate">รองศาสตราจารย์</option>
                  <option value="professor">ศาสตราจารย์</option>
                </select>
              </div>
            </label>

  
            <label htmlFor="prefixDr" className="h-[38px] px-3.5 rounded-lg flex items-center gap-2.5 cursor-pointer">
              <input id="prefixDr" name="prefixDr" type="checkbox" className="peer sr-only" />
              <span className="w-[22px] h-[22px] rounded-md border border-[var(--border)] grid place-items-center">
                <svg className="hidden peer-checked:block" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-[var(--text-primary)] text-sm leading-none">คำนำหน้า ดร.</span>
            </label>
          </div>
        </div>

        <div className="px-[18px] py-3.5 border-t border-[var(--border)] flex justify-around gap-2.5">
          <button type="button" className="h-[38px] w-full px-3.5 rounded-lg ring-1 ring-[var(--border)]">
            <span className="text-[var(--text-primary)] text-sm font-medium leading-none">ยกเลิก</span>
          </button>
          <button type="submit" className="h-[38px] w-full px-3.5 bg-[var(--primary)] rounded-lg">
            <span className="text-[var(--primary-foreground)] text-sm font-medium leading-none">ส่งคำเชิญ</span>
          </button>
        </div>
      </div>

      {/* CSV row */}
      <div className="h-[50px] w-[462px] px-[18px] py-3.5 bg-[var(--background)] rounded-lg border border-[var(--border)] flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <div className="w-[22px] h-[22px]">
            <Image src={Doc} alt="csv" width={22} />
          </div>
          <div className="text-[var(--text-primary)] text-sm">อัปโหลดไฟล์ CSV</div>
        </div>
        <div className="w-[18px] h-[18px] rotate-180" />
      </div>
    </div>
              )}
        </ModalContent>
    </Modal>
  );
}
