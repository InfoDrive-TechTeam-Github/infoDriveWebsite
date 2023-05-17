import { Avatar } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { CgCalendarDates } from 'react-icons/cg';

function blogCard({ slug, img, author, title, desc, created, category }) {
  // console.log(desc, 'card');
  return (
    <Link
      href={`/blog/${slug}.html`}
      className='card    pt-10  flex flex-col gap-2 mr-5 rounded-lg  cursor-pointer hoverblog relative decoration-transparent h-max px-2 overflow-hidden  '
      style={{
        background: 'linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)',
        textDecoration: 'none',
      }}
    >
      <div className='h-[300px] w-[350px] flex items-center justify-center mx-auto'>
        <img src={img} alt='' className=' object-fit h-full rounded-xl' />
      </div>
      <div className='flex flex-col gap-5 px-3 '>
        <div className='left flex gap-2 items-center'>
          <Avatar src='/broken-image.jpg' className='h-[2rem] w-[2rem]' />
          <span className='text-white'>{author}</span>
        </div>
        <div className='right rounded-md  bg-pink-700 text-white w-max flex items-center justify-center px-5 py-1 '>
          {category}
        </div>
      </div>
      <h1 className='text-white font-bold '>{title}</h1>
    
    
    </Link>
  );
}

export default blogCard;
