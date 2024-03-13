import React, { useState } from 'react'
import Card from './Card'

const Cards = (props) => {

    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    // returns a list of all courses which you have received from the api response 
    const getCourses = () => {
      if(category === "All"){
        let allCourses = [];
        Object.values(props.courses).forEach( (courseCategory) => {
            courseCategory.forEach( (course) => {
                allCourses.push(course);
            })
        })
        return allCourses;
      }
      else {
        // only return specific category data
        return props.courses[category];
      }
    }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {getCourses().map( (course) => {
       return <Card 
                course={course} 
                key={props.courses.id}
                likedCourses={likedCourses}
                setLikedCourses={setLikedCourses}/>
      })}
    </div>
  )
}

export default Cards
