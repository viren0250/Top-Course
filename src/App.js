import React, {useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from './components/Spinner';

const App = () => {

  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

    const fetchData = async() => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        // save the data into a variable
        setCourses(output.data);
      }
      catch {
        toast.error("Something went wrong");
      }
      setLoading(false);
    }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>
      <div className="">
        <div>
          <Filter filterData = {filterData} category={category} setCategory={setCategory} />
        </div>
        
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap items-center justify-center min-h-[50vh]">
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
