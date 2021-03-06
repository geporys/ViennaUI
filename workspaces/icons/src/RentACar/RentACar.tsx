import React, { SVGAttributes } from 'react';

export interface RentACarProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const RentACar: React.FC<RentACarProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6 16h3l1 1v1H7l-1-1v-1zm8 1l1-1h3v1l-1 1h-3v-1zm5.7-3.48a2.98 2.98 0 011.3 2.464V20a2.023 2.023 0 01-2.021 2h-1.957a2.015 2.015 0 01-1.735-1H8.734c-.36.617-1.02.998-1.734 1H5a2.007 2.007 0 01-2-2v-4.052A2.942 2.942 0 014.315 13.5l1.399-3.162C6.291 9.037 11.417 9 12 9c.583 0 5.709.037 6.291 1.338L19.7 13.52zM12 11a21.028 21.028 0 00-4.605.48L6.722 13h10.556l-.673-1.52A21 21 0 0012 11zm7 9v-3.917c0-.598-.485-1.082-1.083-1.083H6.084c-.598 0-1.083.485-1.084 1.083V20h2l.022-1H17v1h2zM7 6H6L5 5V4h7v.022A2.021 2.021 0 0114.021 2h3.958A2.021 2.021 0 0120 4.022v1.957A2.02 2.02 0 0117.979 8h-3.958A2.021 2.021 0 0112 5.979V6H9v1H7V6zm7.021-2L14 5.979 17.979 6 18 4.022 17.979 4h-3.958z' />
        </svg>
    );
};

RentACar.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

RentACar.displayName = 'RentACar';
export default RentACar;
