import React from 'react';
import { useParams } from 'react-router-dom';

const Lesson = () => {
  const { que , opt} = useParams()
  console.log(  useParams());

  return (
    <div>
      
   {que}
   <p>{opt[0]}</p>
   <p>{opt[2]}</p>
   <p>{opt[4]}</p>
   {que}
   <p>{opt[0]}</p>
   <p>{opt[2]}</p>
   <p>{opt[4]}</p>
    </div>
 
  );
};

export default Lesson;