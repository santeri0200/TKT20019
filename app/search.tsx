'use client'

import Link from 'next/link';
import { useRouter } from "next/navigation";
import { FormEvent, ChangeEvent } from 'react';

function ReplySearchForm() {
  let queryData = "";

  const { push } = useRouter();
  const SearchQuery = (event: FormEvent) => {
    event.preventDefault();

    // push(currentUrl + anchor)
    /*
    fetch('/api/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(queryData),
    });
    */
  };
  const HandleQueryData = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("change event");
    queryData = event.target.value;
  }

  return <form className='flex flex-row bg-slate-50 dark:bg-slate-800 rounded-md' onSubmit={SearchQuery}>
    <input id='query' className='p-2 bg-transparent' type='text' placeholder='Find text in the thread...' autoComplete='off' onChange={HandleQueryData} defaultValue={queryData}></input>
    <button className='p-2' type='submit'>Search</button>
  </form>;
}

type Context = { query: string };
function ThreadSearchForm(context: Context | null) {
  let queryData = context?.query ?? "";

  const { push } = useRouter();
  const SearchQuery = (event: FormEvent) => {
    event.preventDefault();
    
    push('/browse/' + queryData);
    /*
    fetch('/api/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(queryData),
    });
    */
  };
  const HandleQueryData = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("change event");
    queryData = event.target.value;
  }

  return <form className='flex flex-row bg-slate-50 dark:bg-slate-800 rounded-md' onSubmit={SearchQuery}>
    <input id='query' className='p-2 bg-transparent' type='text' placeholder='Find a thread...' autoComplete='off' onChange={HandleQueryData} defaultValue={queryData}></input>
    <button className='p-2' type='submit'>Search</button>
  </form>;
}

function ThreadSearchContainer() {
  return <>
    <ThreadSearchForm query={ null } />
    <p className='flex-1 my-1 text-center text-slate-400'>or</p>
    <div className='relative flex flex-row'>
      <button className='flex-1 mx-0.5 bg-slate-50 dark:bg-slate-800 rounded-md' >
        <p className='p-2'>Post a thread!</p>
      </button>
      <Link className='flex-1 mx-0.5 bg-slate-50 dark:bg-slate-800 rounded-md' href="/browse">
        <p className='p-2'>Browse threads!</p>
      </Link>
    </div>
  </>;
}

export { ReplySearchForm, ThreadSearchForm, ThreadSearchContainer }