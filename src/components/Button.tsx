import React, { CSSProperties, FC } from 'react'

type ButtonProps = {
    children: React.ReactNode
    className: string
    style?: CSSProperties
    disabled?: boolean
    onClick?: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    type: "submit" | "reset" | "button"
}

const Button:FC<ButtonProps> = ({className, style, children, onClick, disabled, type, onMouseEnter, onMouseLeave}) => {
  return (
    <button style={style} type={type} disabled={disabled} className={`${className} flex items-center justify-start xl:gap-[7.5px] lg:gap-[6px] gap-2 rounded-[7.5px] hover:bg-opacity-90 xl:px-[23px] xl:py-3 py-[9px] `} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
    </button>
  )
}

export default Button;
