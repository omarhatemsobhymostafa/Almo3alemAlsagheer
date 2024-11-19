import React from 'react'
import Grade4 from '../Images/BookCover-4.png'
import Grade5 from '../Images/BookCover-5.png'
import Grade6 from '../Images/BookCover-6.png'
import { Link } from 'react-router-dom';
export default function GradeSelect() {
  return (
  <div style={{paddingInline:4.69+"rem" , textAlign:'center'}}>
    <h2  style={{marginTop:9+"rem" , marginBottom:-4+"rem",textAlign:'center', display:'inline-block'}}> اختر صفك </h2>
    <div className="grades"  style={{paddingInline:0+"rem"}}>
    
        <Link to={'grade-4'} className='grade '>
      
           <h2 >الصف الرابع الابتدائي</h2>
           <img src={Grade4 } alt=""/>
      
        </Link>
   
   <Link to={"grade-5"} className='grade grade-5'>

           <h2> الصف الخامس الابتدائي</h2>
           <img src={Grade5} alt=""/>
       
   </Link>
      
   <Link to={'grade-6'} className='grade grade-5'>
   
           <h2> الصف السادس الابتدائي</h2>
           <img src={Grade6} alt=""/>
       
   </Link>
      
   
   </div>
  </div>

  )
}
