import React, { SVGAttributes } from 'react';

export interface GBDDProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const GBDD: React.FC<GBDDProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9 19.12a3.113 3.113 0 002.207-.913L21.328 8.086a3.121 3.121 0 00-4.414-4.414L6.793 13.793a3.116 3.116 0 00-.58 3.58l-3.92 3.92L4.031 23H12l1-1v-1H5.414l2.213-2.213c.426.215.896.329 1.373.333zm9.116-14.246a1.5 1.5 0 012.011 0 1.421 1.421 0 010 2.01l-1.484 1.484-2.01-2.01 1.483-1.484zm-2.758 2.758l2.01 2.01-1.726 1.727-2.011-2.01 1.727-1.727zm-3 3l2.011 2.01-1.727 1.728-2.011-2.01 1.727-1.728zM8 15l1.363-1.364 2.011 2.01-1.364 1.364a1.413 1.413 0 01-1.98.02l-.049-.049A1.418 1.418 0 018 15z' />
        </svg>
    );
};

GBDD.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

GBDD.displayName = 'GBDD';
export default GBDD;
