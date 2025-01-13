import { Inconsolata } from "next/font/google";

export default function Loading() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center">
            <Icon.spinner className="h-36 w-36" />
        </div>
    )
}

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icon = {
    spinner: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <linearGradient id="a8">
                <stop offset="0" stopColor="#A10FBA" stopOpacity="0">
                </stop>
                <stop offset="1" stopColor="#A10FBA">
                </stop>
            </linearGradient>
            <circle fill="none" stroke="url(#a8)" strokeWidth="15" strokeLinecap="round" strokeDasharray="0 44 0 44 0 44 0 44 0 360" cx="100" cy="100" r="70" transformOrigin="center">
                <animateTransform type="rotate" attributeName="transform" calcMode="discrete" dur="2" values="360;324;288;252;216;180;144;108;72;36" repeatCount="indefinite">
                </animateTransform>
            </circle>
        </svg>
    )
}