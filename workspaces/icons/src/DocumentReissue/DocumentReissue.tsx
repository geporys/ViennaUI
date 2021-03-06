import React, { SVGAttributes } from 'react';

export interface DocumentReissueProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocumentReissue: React.FC<DocumentReissueProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12.76 22H4.559A1.559 1.559 0 013 20.441V3.559C3 2.698 3.698 2 4.559 2h14.882A1.559 1.559 0 0121 3.564v8.694a6.686 6.686 0 00-2-.462V4H5v16h6.946c.163.717.441 1.39.814 2zM7.063 6.063h10v2h-10v-2zm0 4h7v2h-7v-2zm4.604 8.675l-1.309.106.106-1.308L14 14l3.536 3.536.106 1.308-1.309-.106-1.483-1.713V18.5a3.65 3.65 0 102.27-3.38l-1.27-1.27a5.35 5.35 0 11-2.7 4.65v-1.475l-1.483 1.713z' />
        </svg>
    );
};

DocumentReissue.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocumentReissue.displayName = 'DocumentReissue';
export default DocumentReissue;
