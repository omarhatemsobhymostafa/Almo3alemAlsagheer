import React from 'react'
import Grade4 from '../Images/BookCover-4.png'
import Grade5 from '../Images/BookCover-5.png'
import Grade6 from '../Images/BookCover-6.png'
export default function Grades() {
  return (

    <div className="grades">
    <div className="grade ">
        <h2 >الصف الرابع الابتدائي</h2>
        <img src={Grade4} alt=""/>
    </div>

    <div className="grade grade-5">
        <h2> الصف الخامس الابتدائي</h2>
        <img src={Grade5} alt=""/>
    </div>

    <div className="grade grade-6">
        <h2> الصف السادس الابتدائي</h2>
        <img src={Grade6} alt=""/>
    </div>

</div>
  )
}
