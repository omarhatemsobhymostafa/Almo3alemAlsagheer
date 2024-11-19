import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home';
import Layout from './Components/Layout.jsx';
import { Outlet, Link ,createBrowserRouter , RouterProvider} from 'react-router-dom';
import GradeSelect from './Components/GradeSelect.jsx';
import Grade6 from './Components/Grade6.jsx'
import Lesson from './Components/Lesson.jsx';
import Quizzes from './Components/Quizzes.jsx';


function App() {
  const Route = createBrowserRouter([
    {path:'/' , element:<Layout/> ,children:[
      {path:'/' , element:<Home/>},
      {path:'/home' , element:<Home/>},
      {path:'/quiz' , element:<GradeSelect/>},
      {path:'quiz/grade-6' , element:<Grade6 />, children:[
        {path:'quizzes/questions/:options', element:<Quizzes/>}
      ]},
     
    ]},
   
  ])
  
  return <RouterProvider router={Route} />
}

export default App
//////////////////////   ||\\           ||   ||//////                
//                       || \\          ||   ||    /////
//                       ||  \\         ||   ||        /////
//                       ||   \\        ||   ||            ///
//                       ||    \\       ||   ||             /// 
// ///////////////////   ||     \\      ||   ||              //
//                       ||      \\     ||   ||              //
//                       ||       \\    ||   ||              //
//                       ||        \\   ||   ||             //
//                       ||         \\  ||   ||           ///
//                       ||          \\ ||   ||       ///// 
//////////////////////   ||           \\||   ||///////      
 
