import Link from 'next/link';

import { ReplySearchForm } from '../search';
import { BackOff } from '../backoff';

function MetaThread() {
    return <>This thread has no content. Navigate <Link className='' href='/browse'>back to the browse section</Link> to find something new!</>;
}

function ThreadContent(id: string) {
    return <>
      <p>Thread number: { id }!</p>
    </>;
}

type Context = { params: { id: string } };
export default function Thread(context: Context) {
  let { id } = context.params;

  return (
    <div className='flex flex-col p-4 h-5/6 w-full my-auto bg-slate-900 rounded-md'>
      <div className='flex flex-row p-2'>
        <BackOff />
        <ReplySearchForm />
      </div>
      <div className='flex flex-col my-2 bg-slate-50 dark:bg-slate-800 rounded-md hover:cursor-pointer'>
        { id ? ThreadContent(id) : MetaThread() }
      </div>
    </div>
  )
}
