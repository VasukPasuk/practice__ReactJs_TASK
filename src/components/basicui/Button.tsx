import {ReactNode} from "react";
import clsx from "clsx";

type btnType = "primary" | "ghost";

interface ButtonProps {
  children: ReactNode,
  btnType?: btnType,
  className?: string
  onClick?: () => void;
}

export default function Button({children, btnType = "primary", className, onClick}: ButtonProps) {

  return (
    <button onClick={onClick && onClick} className={clsx('bg-[#F9C06A] text-black rounded-3xl px-6 py-3 cursor-pointer', {
      'bg-transparent text-white': btnType === 'ghost',
      'shadow-[#F9C06A]/50 shadow-lg hover:bg-[#F9C06A]/70 transition-colors duration-500': btnType === 'primary'
    }, `${className ? className : ''}`)}>
      {children}
    </button>
  )
}