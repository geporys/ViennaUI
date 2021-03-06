import React, { SVGAttributes } from 'react';

export interface SnowProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Snow: React.FC<SnowProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13 13.705v3.239l2.937 2.834v1.201h-1.201L13 19.237V22l-1 1-1-1v-2.807l-1.83 1.755H7.969v-1.201L11 16.914v-3.165l-2.823 1.629-.986 3.961-1.04.601-.601-1.04.641-2.375-2.393 1.382-1.366-.366.366-1.366 2.431-1.404-2.435-.707-.6-1.041 1.04-.6 3.969 1.208 2.835-1.636-2.842-1.641-3.989 1.197-1.04-.6.6-1.041 2.482-.68-2.433-1.405-.366-1.366 1.366-.366L6.23 7.487l-.653-2.382.601-1.04 1.04.601.966 3.949L11 10.241V7.058L7.969 4.201V3H9.17L11 4.809V2l1-1 1 1v2.787l1.736-1.756h1.201v1.201L13 7.043v6.662zm5.744 1.007l2.393 1.381.366 1.366-1.366.366-2.431-1.403.605 2.462-.601 1.04-1.04-.6-.938-4.042-1.795-1.036V9.743l1.802-1.04.958-4.053 1.04-.601.601 1.041-.652 2.489 2.433-1.404 1.366.366-.366 1.366L18.705 9.3l2.389.626.6 1.04-1.04.601-3.903-1.139-2.713 1.567 2.72 1.57 3.923-1.127 1.04.601-.6 1.041-2.377.632z' />
        </svg>
    );
};

Snow.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Snow.displayName = 'Snow';
export default Snow;
