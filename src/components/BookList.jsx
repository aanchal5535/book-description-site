import React from 'react'
import Loading from './Loading'
import Book from'./Book'
import { useGlobalContext } from '../context/context'
import coverImg from '../assests/cover_not_found.jpg'

const BookList = () => {
    const {books, loading} = useGlobalContext();
    const booksWithCovers = books.map((singleBook) => {
      return {
        ...singleBook,
        // removing /works/ to get only id
        id: (singleBook.id).replace("/works/", ""),
        cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
      }
    });
   
    if(loading) return <Loading />;
  return (
        <div className='w-full p-5 '>
        <div className='grid grid-cols-4 gap-4 items-center justify-center pt-24'>
            {booksWithCovers.slice(0,30).map((item, index)=>{
                return(
                    <Book key ={index}{...item}/>
                )
            })}
        </div>
        </div>
  )
}

export default BookList
