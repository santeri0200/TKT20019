'use client'

import { useRouter } from "next/navigation";
import Image from "next/image";

function ThreadListing(thread: Thread) {
  const { push } = useRouter();
  const OpenThread = (e: any) => push('/thread/' + thread.id);
  const OpenAuthor = (e: any) => console.log(e);

  return <div className='flex flex-col my-2 bg-slate-50 dark:bg-slate-800 rounded-md hover:cursor-pointer' key={thread.id} onClick={OpenThread}>
    <p className='text-lg'>{ thread.name }</p>
    <div className='flex flex-row'>
      <p className='flex-grow text-sm'>{ thread.last_message?.content }</p>
      <div className='w-40' onClick={OpenAuthor}>
        <p className='text-sm'>{ thread.last_message?.meta.author.name }</p>
        { thread.last_message?.meta.author.picture ? <Image /> : null }
      </div>
    </div>
  </div>;
}

function ThreadList(props: { threads: Thread[] }) {
  return <div className="mt-5 w-full">{ props.threads.map(ThreadListing) }</div>;
}

export { ThreadList };