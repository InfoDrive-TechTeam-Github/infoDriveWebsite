import { Avatar } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { CgCalendarDates } from 'react-icons/cg';
import dateFormat, { masks } from 'dateformat';

function blogCard({ slug, img, author, title, desc, created, category }) {
  // console.log(desc, 'card');
  return (
    <Link
      href={`/blog/${slug}.html`}
      className='card p-10  pt-0  flex flex-col gap-2 mr-5 rounded-lg  cursor-pointer hoverblog  decoration-transparent h-full px-5 overflow-hidden relative '
      style={{
        background: 'linear-gradient(to right, #dd3952,#dd3952)',
        textDecoration: 'none',
      }}
    >
      <div className='h-full w-full flex items-center justify-center pt-5 '>
        <img src={img} alt='' className=' object-contain h-full rounded-xl' />
      </div>
      <div className='flex flex-col gap-5  '>
        <div className='left flex gap-2 items-center'>
          <Avatar src='/broken-image.jpg' className='h-[2rem] w-[2rem]' />
          <span className='text-white'>{author}</span>
        </div>
        <div className='right rounded-md  bg-red-900 text-white w-max flex items-center justify-center px-5 py-1 shadow-lg'>
          {category}
        </div>
      </div>
      <h1 className='text-white font-bold mb-5 '>{title}</h1>
      <h3 className=' poppin font-semibold text-white absolute bottom-3'>
        Publish Date: {dateFormat(created, 'fullDate')}
      </h3>
    </Link>
  );
}

export default blogCard;
