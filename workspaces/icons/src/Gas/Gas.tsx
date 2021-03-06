import React, { SVGAttributes } from 'react';

export interface GasProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Gas: React.FC<GasProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.1 6V4h-4l-1-1V2h12v1l-1 1h-4v2h2.021A1.979 1.979 0 0117.1 7.979v1.65a22.07 22.07 0 00-2 2.381V8h-6v10h3.511c-.002.06-.011.12-.011.18.004.62.113 1.236.323 1.82H9.07a1.97 1.97 0 01-1.97-1.971V7.971A1.97 1.97 0 019.07 6h2.03zm7.651 15.958l-.659-2.276-.692 2.264-.855-.372A3.9 3.9 0 0114.2 18c0-2.811 2.932-5.806 3.266-6.139l.631-.627.634.623C19.064 12.187 22 15.151 22 18a3.9 3.9 0 01-2.383 3.593l-.866.365zm-.612-4.895l1.325 2.561c.441-.43.704-1.01.736-1.624 0-1.4-1.207-3.126-2.1-4.169C17.213 14.886 16 16.628 16 18c.035.602.274 1.175.676 1.624l1.463-2.561zM2 9h5.1v2H2V9zm0 5h5.1v2H2v-2z' />
        </svg>
    );
};

Gas.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Gas.displayName = 'Gas';
export default Gas;
