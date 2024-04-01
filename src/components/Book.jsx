import React from 'react';
import { Link } from 'react-router-dom';


const Book = (book) => {
  return (
  
    <div className='w-full h-[550px] border px-8 py-8 cursor-pointer shadow-md '>      
      <div className='max-w-44 mr-auto ml-auto '>
        <img src = {book.cover_img} alt = "cover" />
      </div>
      <div className='mt-8 text-center '>
        <Link to = {`/book/${book._id}`}{...book}>
          <div className='leading-6 mb-3 hover:text-xl'>
            <span>{book.title}</span>
          </div>
        </Link>

        <div className='leading-6 mb-3 '>
          <span className='capitalize '>Author: </span>
          <span>{Array.isArray(book.author) ? book.author.join(" , ") : ''}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='capitalize '>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='opacity-60 text-lg font-normal'>
          <span className='text-capitalize '>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
      </div>
    </div>
   
  )
}

export default Book