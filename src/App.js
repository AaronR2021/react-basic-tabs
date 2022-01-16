import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'
function App() {
    const [data, setData] = useState();
    const [displayData, setDisplayData] = useState();
    useEffect(() => {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          setData(data);
          setDisplayData(data);
        });
        const a=document.querySelectorAll(".company-name")
        console.log(a,'inUseEffect');
      //for tommy add select
    }, []);

    const findInfo=(id)=>{
      setDisplayData(data.filter((dataset) => dataset.id == id))
    }
 if (!displayData) {
   return <h1>Loading....</h1>;
 } else {
   return (
     <div className="body">
       <div className="header">
         <h1>Experience</h1>
       </div>
       <div className="body-grid">
         <ul className='nav'>
           {data.map((company) => (
             <li
               className={
                 company.id == data[0].id
                   ? "company-name  active"
                   : "company-name"
               }
               data-id={company.id}
               onClick={(e) => {
                 //border
                 const a = document.querySelectorAll(".company-name");
                 [...a].map((i) => {
                   i.classList.remove("active");
                 });
                 e.target.classList.add("active");
                 //select info
                 findInfo(e.target.dataset.id);
               }}
             >
               {company.company}
             </li>
           ))}
         </ul>
         {console.log("dataset:", displayData[0])}
         <div className="content-experience">
           <h2>{displayData[0].title}</h2>
           <div className="company-tag">{displayData[0].company}</div>
           <div className="duration">{displayData[0].dates}</div>
           <ul>
             {displayData[0].duties.map((duty) => (
               <li>
                 <FaAngleDoubleRight className="icon" />
                 <p>{duty}</p>
               </li>
             ))}
           </ul>
           <button>MORE INFO</button>
         </div>
       </div>
     </div>
   );
 }
}

export default App;
