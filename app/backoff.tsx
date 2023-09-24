'use client'

import { useRouter } from "next/navigation";

function BackOff() {
  const { back } = useRouter();
  const GoBack = (e: any) => back();

  return <button className='p-2 mr-4 bg-slate-800 rounded-md' onClick={GoBack}>Go back!</button>;
}

export { BackOff };