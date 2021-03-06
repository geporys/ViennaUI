import React, { SVGAttributes } from 'react';

export interface TelevisionProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Television: React.FC<TelevisionProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19.039 7A1.961 1.961 0 0121 8.961V21.07A1.93 1.93 0 0119.07 23H5a2 2 0 01-2-2V9.031C3 7.909 3.91 7 5.031 7h5.555L8 4.414V3h1.414L12.5 6.086 16.586 2H18v1.414L14.414 7h4.625zM19 21V8.988h-3.597l.011.012h-2.828l-.012-.012H5V21h14zM6 12.042C6 10.914 6.914 10 8.042 10h7.916c1.128 0 2.042.914 2.042 2.042v4.916A2.042 2.042 0 0115.958 19H8.042A2.042 2.042 0 016 16.958v-4.916zM16 12H8v5h8v-5z' />
        </svg>
    );
};

Television.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Television.displayName = 'Television';
export default Television;
