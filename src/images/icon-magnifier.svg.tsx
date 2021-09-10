import React from 'react'

export interface SvgIconProps extends React.HTMLAttributes<SVGElement> {
}

function IconMagnifier(props: SvgIconProps) {
    return (
        <svg
            { ...props }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 51.32 51.32"
        >
            <path
                d="M279.67,477.05l-13-13a21.35,21.35,0,0,0-16.42-35h0a21.36,21.36,0,1,0,13.63,37.78l13,13a2,2,0,0,0,2.8-2.79Zm-29.39-9.19a17.41,17.41,0,1,1,17.4-17.4A17.43,17.43,0,0,1,250.28,467.86Z"
                transform="translate(-228.92 -429.1)"
            />
        </svg>
    )
}

export default IconMagnifier
