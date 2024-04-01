'useclient'
import React, { useEffect, useRef } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {useGlobalContext} from '../context/context'
import { useNavigate } from 'react-router-dom'


const Search = () => {
    const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };
  return (
   <>
    <form onSubmit={handleSubmit}
          className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-black bg-white'
        >
          <div>
            <input
              className='bg-white w-[300px]  sm:w-[400px] font-[Poppins] focus:outline-none
                  '
              type='text'
              placeholder='Search Books...'
              ref={searchText}
            />
          </div>
          <div>
            <button onClick={handleSubmit}>
              <AiOutlineSearch size={20} className='icon' style={{color: '#ffffff'}}  />
            </button>
          </div>
        </form>
   </>
  )
}

export default Search
