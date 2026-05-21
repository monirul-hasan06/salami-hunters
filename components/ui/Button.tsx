import { ButtonHTMLAttributes } from 'react';import { twMerge } from 'tailwind-merge';
export default function Button({className,...props}:ButtonHTMLAttributes<HTMLButtonElement>){return <button className={twMerge('rounded-2xl bg-eid-green px-5 py-3 font-bold text-black shadow-neon transition hover:scale-[1.02] disabled:opacity-50',className)} {...props}/>}
