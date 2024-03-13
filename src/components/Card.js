// import { click } from '@testing-library/user-event/dist/click';
import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import {toast} from "react-toastify";

const Card = (props) => {

  // let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    if(likedCourses.includes(props.course.id)) {
      // Already liked course
      setLikedCourses( (prev) => prev.filter( (cid) => (cid !== props.course.id) ) );
      toast.warning("Like Removed");
    }
    else {
      // pehle se like nahi he ye course
      // insert this course into likedCourse
      if(likedCourses.length === 0){
        setLikedCourses( [props.course.id] );
      }
      else {
        // non empty
        setLikedCourses( (prev) => [...prev, props.course.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative '>
        <img src={props.course.image.url} alt={props.course.image.alt}></img>

        <div className='w-[40px] h-[40px] absolute rounded-full bg-white right-2 bottom-[-12px] grid place-items-center'>
            <button onClick={clickHandler}>
              {
                !likedCourses.includes(props.course.id) ? 
                (<FcLikePlaceholder fontSize='1.75rem' />) :
                (<FcLike fontSize='1.75rem' />)
              }
            </button>
        </div>
      </div>
      <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{props.course.title}</p>
            <p className='mt-2 text-white'>
              { props.course.description.length > 100 ?
                (props.course.description.substr(0,100)+" ...") :
                (props.course.description)
              }
              </p>
      </div>
    </div>
  )
}

export default Card
