import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom'
export default function Grade6() {
  const unit1 = {
    name: "وحدة أرض وتاريخ شعب",
    lessons: [
      { title: "الموقع الجغرافي لوطننا العربي", number: 1 },
      { title: "قصّة ظهور الإسلام", number: 2 },
      { title: "هجرة الرسول (صلى الله عليه وسلم) وتأسيس الدولة الإسلامية", number: 3 },
      { title: "لمحات من حياة الخلفاء الراشدين", number: 4 }
    ]
  };

  return (
    <main style={{ paddingBlock: 9 + 'rem', paddingInline: 4.69 + 'rem' ,minWidth:100+"vh"}}>
      <div className="grade-6">
        <div className="lessons">
          <p>الوحدة الأولى: وحدة أرض وتاريخ شعب</p>
          {
            unit1.lessons.map((lesson, index) => (
              <NavLink  to={`quiz${lesson.number}`}>
                {lesson.title}
              </NavLink>
            ))
          }


        </div>
        <div className="lesson-display">
          <Outlet />
        </div>
      </div>
    </main>
  )
}

