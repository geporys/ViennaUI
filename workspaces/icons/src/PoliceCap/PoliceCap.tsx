import React, { SVGAttributes } from 'react';

export interface PoliceCapProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PoliceCap: React.FC<PoliceCapProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19.969 17v1.65A22.639 22.639 0 0112 19.95a22.52 22.52 0 01-8-1.32v-6.988c0-1.5 5.116-2.6 8.016-2.6h.026C14.907 9.046 20 10.141 20 11.688V17h-.031zm-.953 0H4.984A21.8 21.8 0 0012 18.05 21.8 21.8 0 0019.016 17zm-6.977-5.958h-.023A18.683 18.683 0 006 12.005V15h12v-3.073c-1.061-.565-3.809-.885-5.961-.885zM13 14h-2l-1-1v-1h4v1l-1 1zm-1-9.736c6.758 0 11.5 4.464 11.503 6.882 0 1.223-1.038 2.163-2.625 2.854v-2.282c.343-.221.534-.423.534-.575 0-1.007-3.534-4.861-9.409-4.861-5.875 0-9.409 3.854-9.409 4.861 0 .147.175.343.5.557v2.285C1.524 13.295.5 12.36.5 11.145.5 8.728 5.242 4.264 12 4.264z' />
        </svg>
    );
};

PoliceCap.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PoliceCap.displayName = 'PoliceCap';
export default PoliceCap;
