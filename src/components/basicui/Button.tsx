import {ReactNode} from "react";
import clsx from "clsx";

type btnType = "primary" | "ghost";

export default function Button({children, btnType = "primary", className}: { children: ReactNode, btnType?: btnType, className?: string }) {

  return (
    <button className={clsx('bg-[#F9C06A] text-black rounded-3xl px-6 py-3 cursor-pointer', {
      'bg-transparent text-white': btnType === 'ghost',
      'shadow-[#F9C06A]/50 shadow-lg': btnType === 'primary'
    }, `${className ? className : ''}`)}>
      {children}
    </button>
  )
}