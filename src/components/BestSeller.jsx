import React from 'react';
import Book1 from '../assests/Book1.jpg'
import Book2 from '../assests/Book2.jpg'
import Book3 from '../assests/Book3.jpg'
import Book4 from '../assests/Book4.jpg'
import Book5 from '../assests/Book5.jpg'




const data = [
    {
        title: 'A Scientific and Technical Writing Today',
        author: 'John Doe',
        image: Book1
    },
    {
        title: 'A Game  of Thrones', 
        author: 'John Doe',
        image: Book2
    },
    {
        title: 'South Songs',
        author: 'John Doe',
        image: Book3
    },
    {
        title: 'On Desert Trails ',
        author: 'John Doe',
        image: Book4
    },
    {
        title: 'The Wind in The Willows',
        author: 'John Doe',
        image: Book5
    },
   
   
]
   

const BestSeller = () => {

    return (
        <div className='w-full mx-auto px-6 py-12 cursor-pointer flex items-center justify-center sm:grid-cols-2 lg:grid-cols-2 gap-4'>
            <div>
                <div className='w-full block text-center py-4 '>
                    <h1>Our Featured Books</h1>

                    <div className='flex  items-center justify-center gap-10 pt-5  sm:grid-cols-2 '>
                    {data.map(({ title, author, image }, index) => {
                        return (
                           
                                <div className='w-[350px] h-[450px]  border-2 rounded-2xl flex flex-col items-center justify-center shadow-md' >
                                    <div className='pb-3'>
                                        <img src={image} alt="book" className='w-[250px] h-[300px]' />
                                    </div>

                                    <div className='block '>
                                        <h3>{title}</h3>
                                        <h4>{author}</h4>
                                    </div>
                                </div>
                          
                        )
                    })
                    }
  </div>
                </div>

            </div>
        </div>
    );
};

export default BestSeller;