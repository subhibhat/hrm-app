'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLink {
    href?:string;
    children: React.ReactNode
}

export default function NavLink({ href, children }: NavLink) {

    const path = usePathname()
    const link = path.split('/').filter(Boolean).pop()

    const isActive = link === href?.replace('/', '')

    return (
        <Link href={`${href}`} className={` flex w-full h-9 py-0 px-2.5 justify-center items-center gap-2.5 self-stretch rounded-[8px] not-italic font-medium leading-normal ${isActive ? ' text-white bg-[var(--primary)] hover:bg-[var(--hover)] hover:rounded-lg hover:cursor-pointer ' : ' hover:bg-[var(--hover)] hover:rounded-lg hover:cursor-pointer '} `}>
            { children }
        </Link>
    )
}