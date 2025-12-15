"use client";

import Link from "next/link";

interface SideBarProps {
  isOpen: boolean;
}
const SideBar = ({ isOpen }: SideBarProps) => {
  return (
    <aside
      className={`
        fixed
        top-[60px]
        left-0
        h-[calc(100vh-60px)]
        w-[240px]  
        bg-gray-100
        p-4
        transition-transform 
        duration-300
        ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
    >
      <div>
        <div className="text-lg mb-2 font-bold">Template</div>
        <ul className="space-y-2">
          <li className="cursor-pointer rounded px-2 py-1">
            <Link href="/template/bucket-list">Bucket-List</Link>
          </li>
          <li className="cursor-pointer  rounded px-2 py-1">
            <Link href="/template/habit-tracker">Habit-Tracker</Link>
          </li>
          <li className="cursor-pointer  rounded px-2 py-1">
            <Link href="/template/mandalart">Mandalart</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
