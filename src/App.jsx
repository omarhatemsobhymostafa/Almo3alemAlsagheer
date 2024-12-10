import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home';
import Layout from './Components/Layout.jsx';
import { Outlet, Link ,createBrowserRouter , RouterProvider} from 'react-router-dom';
import GradeSelect from './Components/GradeSelect.jsx';
import Grade6 from './Components/Grade6.jsx'
import Lesson from './Components/Lesson.jsx';
import Quiz1 from './Components/Quiz1.jsx';
import Quiz2 from './Components/Quiz2.jsx';
import Quiz3 from './Components/Quiz3.jsx';
import Quiz4 from './Components/Quiz4.jsx';
import Quiz5 from './Components/Quiz5.jsx';
import Sources from './Components/Sources.jsx';
import Quiz6 from './Components/Quiz6.jsx';
import Quiz7 from './Components/Quiz7.jsx';
import Quiz8 from './Components/Quiz8.jsx';
import Quiz9 from './Components/Quiz9.jsx';
import Quiz10 from './Components/Quiz10.jsx';
import Quiz11 from './Components/Quiz11.jsx';
import Quiz12 from './Components/Quiz12.jsx';
import Quiz13 from './Components/Quiz13.jsx';



function App() {

  const Route = createBrowserRouter([
    {
      path: '/the-little-teacher',
      element: <Layout />,
      children: [
        { path: '', element: <Home /> }, 
        { path: 'home', element: <Home /> },
        { path: 'quiz', element: <GradeSelect /> },
        { path: 'sources', element: <Sources /> },
        {
          path: 'quiz/grade-6',
          element: <Grade6 />,
          children: [
            { path: '', element: <Quiz1 /> },
            { path: 'quiz1', element: <Quiz1 /> },
            { path: 'quiz2', element: <Quiz2 /> },
            { path: 'quiz3', element: <Quiz3 /> },
            { path: 'quiz4', element: <Quiz4 /> },
            { path: 'quiz5', element: <Quiz5 /> },
            { path: 'quiz6', element: <Quiz6 />  },
            { path: 'quiz7', element: <Quiz7 />  },
            { path: 'quiz8', element: <Quiz8 />  },
            { path: 'quiz9', element: <Quiz9 />  },
            { path: 'quiz10', element: <Quiz10 />  },
            { path: 'quiz11', element: <Quiz11 />  },
            { path: 'quiz12', element: <Quiz12 />  },
            { path: 'quiz13', element: <Quiz13 />  },
         
          ],
        },

      ],
    },
  ]);
  
  
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
 
