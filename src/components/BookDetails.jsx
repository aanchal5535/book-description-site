import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import coverImg from "../assests/cover_not_found.jpg";
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const {id} = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getBookDetails(){
      try{
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if(data){
          const {title,author,covers, description,subject_places,subjects,subject_times,subject_people} =data;
          const newBook ={
            description: description ? description.value :"No Description Provided",
            title: title,
            author: author,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times : subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
            subject_people: subject_people ? subject_people :"There are no People"
          }
          setBook(newBook);
        } else {
          setBook(null);
        }
      
      } catch(error){
        console.log(error);
      
      }
    }
    getBookDetails();
  }, [id]);



  return (
    <section className='w-full flex items-start justify-center '>
      <div className='m-24'>
        <button type='button' className='flex text-lg gap-2 bg-white text-black' onClick={() => navigate("/book")}>
          <FaArrowLeft size = {22} className='mt-1.5 '/>
          <h2>Go Back</h2>
        </button>

        <div className='flex flex-col-2 items-center justify-center gap-2'>
          <div className='w-[80%] h-[60%]'>
            <img src = {book?.cover_img} alt = "cover img" className='w-[80%] h-auto'/>
          </div>
          <div className=' flex flex-col items-start justify-center w-[80%] h-auto'>
           <div className='text-red-500 text-xl capitalize pb-2'>
            <span>{book?.title}</span><br />
           </div>
           <div className=' text-xl capitalize pb-2'>
            <span>{book?.author}</span><br />
           </div>
            <div className='text-lg pb-2 '>
              <span>{book?.description}</span>
            </div>
            <div className='text-lg pb-2'>
              <span className='text'>Subject Places: {book?.subject_places}</span>
            </div>
            <div className='text-lg pb-2'>
              <span className='text'>Subject Times: {book?.subject_times}</span>
            </div>
            <div className='text-lg pb-2'>
              <span className='text'>Subject : {book?.subjects}</span>
            </div>
            <div className='text-lg pb-2'>
              <span className='text'>Subject People : {book?.subject_people}</span>
            </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default BookDetails