import React from 'react';

export default function Loading() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center">
            <Icons.spinner className="h-36 w-36" />
        </div>
    )
}

type IconProps = React.HTMLAttributes<SVGSVGElement>;

export const Icons = {
    spinner: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" {...props} >
            <circle
                cx="20"
                cy="50"
                r="10"
                fill="#A10FBA"
                className="animate-circle-1"
            />
            <circle
                cx="50"
                cy="50"
                r="10"
                fill="#A10FBA"
                className="animate-circle-2"
            />
            <circle
                cx="80"
                cy="50"
                r="10"
                fill="#A10FBA"
                className="animate-circle-3"
            />
        </svg>
    ),
};