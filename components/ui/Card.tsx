import { HTMLAttributes } from 'react';import { twMerge } from 'tailwind-merge';
export default function Card({className,...props}:HTMLAttributes<HTMLDivElement>){return <div className={twMerge('glass rounded-3xl p-6 shadow-2xl',className)} {...props}/>}
