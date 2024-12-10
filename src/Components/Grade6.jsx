import React, { useState } from 'react'; // Import useState hook
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiBars3 } from "react-icons/hi2";
import { NavLink, Outlet } from 'react-router-dom';

export default function Grade6() {

  const [isOpen, setIsOpen] = useState(true);
  const [icon , setIcon] = useState(<FaTimes />)

  const unit1 = {
    name: "وحدة أرض وتاريخ شعب",
    lessons: [
      { title: "الموقع الجغرافي لوطننا العربي", number: 1 },
      { title: "قصّة ظهور الإسلام", number: 2 },
      { title: "هجرة الرسول (صلى الله عليه وسلم) وتأسيس الدولة الإسلامية", number: 3 },
      { title: "لمحات من حياة الخلفاء الراشدين", number: 4 }
    ]
  };

  const unit2 = {
    name: "الوحدة الثانية : الملامح الطبيعية لوطننا العربي",
    lessons: [
      {
        title: "مظاهر سطح وطننا العربي",
        lessonNumber: 5,
        description: "يتناول هذا الدرس التضاريس المختلفة في الوطن العربي مثل الصحارى، السهول، الجبال، والوديان، وكيف تساهم هذه المظاهر في تشكيل البيئة."
      },
      {
        title: "العوامل المؤثرة في مناخ وطننا العربي",
        lessonNumber: 6,
        description: "يناقش هذا الدرس تأثير العوامل الجغرافية مثل خطوط العرض، المسطحات المائية، والتيارات الجوية على المناخ في المنطقة العربية."
      },
      {
        title: "الأقاليم المناخية والنباتية في وطننا العربي",
        lessonNumber: 7,
        description: "يتناول هذا الدرس تصنيف الأقاليم المناخية المختلفة مثل المناخ الصحراوي، المعتدل، والمداري، وكيف يؤثر المناخ على النبات والحياة البيئية في هذه الأقاليم."
      },
      {
        title: "المشكلات البيئية في وطننا العربي",
        lessonNumber: 8,
        description: "يركز على التحديات البيئية مثل التصحر، التلوث، وتدهور التنوع البيولوجي في المنطقة العربية."
      },
    ]
  };

  const unit3 = {
    name: "الوحدة الثالثة : الموارد والانشطة الاقتصادية في وطننا العربي",
    lessons: [
      { lessonNumber: 9, title: "الزراعة في وطننا العربي" },
      { lessonNumber: 10, title: "الثروة الحيوانية والسمكية في وطننا العربي" },
      { lessonNumber: 11, title: "التعدين والصناعة في وطننا العربي" },
      { lessonNumber: 12, title: "السياحة في وطننا العربي" },
      { lessonNumber: 13, title: "التجارة في وطننا العربي" }
    ]
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    !isOpen?setIcon(<FaTimes />):setIcon(<FaBars />)
  };

  return (
    <main style={{ paddingBlock: 9 + 'rem', paddingInline: 4.69 + 'rem', minWidth: 100 + "vh" }}>
      <button
        id="open"
        style={{
          fontSize: "2.5rem",
          transform: 'translateX(100%)', 
          marginTop:'3rem',
        }}
        onClick={handleToggle} 
      >
        {icon}
      </button>

      <div className="grade-6">

        {isOpen && (
          <div className="lessons" id="lessons">
            <p>الوحدة الاولي : {unit1.name}</p>
            {unit1.lessons.map((lesson) => (
              <NavLink key={lesson.number} to={`quiz${lesson.number}`}>
                {lesson.title}
              </NavLink>
            ))}

            <p>{unit2.name}</p>
            {unit2.lessons.map((lesson) => (
              <NavLink key={lesson.lessonNumber} to={`quiz${lesson.lessonNumber}`}>
                {lesson.title}
              </NavLink>
            ))}

            <p>{unit3.name}</p>
            {unit3.lessons.map((lesson) => (
              <NavLink key={lesson.lessonNumber} to={`quiz${lesson.lessonNumber}`}>
                {lesson.title}
              </NavLink>
            ))}
          </div>
        )}

        <div className="lesson-display">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
