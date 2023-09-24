import Image from 'next/image';

// Client-side render
import { ThreadSearchContainer } from './search';


function LogoContainer() {
  // Lisää logo myöhemmin
  return <div className=''>
    <div className='h-20 mt-3 mb-9 bg-black rounded-md'></div>
  </div>;
}

export default function Index() {
  return (
    <div className='flex flex-col p-4 my-auto bg-slate-900 rounded-md'>
      <LogoContainer />
      <ThreadSearchContainer />
      <span className='h-0.5 mx-auto w-10/12 my-9 bg-slate-800'></span>
      <div className='relative flex flex-row'>
        <button className='flex-1 mx-0.5 bg-slate-50 dark:bg-slate-800 rounded-md' type='submit' >
          <p className='p-2'>Login</p>
        </button>
        <button className='flex-1 mx-0.5 bg-slate-50 dark:bg-slate-800 rounded-md' type='submit' >
          <p className='p-2'>Register</p>
        </button>
      </div>
    </div>
  )
}
