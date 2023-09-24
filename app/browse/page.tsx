import { ThreadSearchForm } from "../search";
import { ThreadList } from "./list";
import { BackOff } from "../backoff";

import { ThreadFiller } from "./filler";

type Context = { params: { query: string } };
export default function Browse(context: Context) {
  let { query } = context.params;

  if (query) {
    // do something with the query
  }

  let listOfThreads: Thread[] = process.env.NODE_ENV === 'development' ? ThreadFiller() : [];

  return (
    <div className='flex flex-col p-4 h-5/6 w-full my-auto bg-slate-900 rounded-md'>
      <div className='flex flex-row p-2'>
        <BackOff />
        <ThreadSearchForm query={query} />
      </div>
      <ThreadList threads={listOfThreads} />
    </div>
  )
}
