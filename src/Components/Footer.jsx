import React from 'react'
import Logo from '../Images/logo.png'

export default function Footer() {
  return (
    <footer>
        <img src={Logo} alt="" className='footer-img'/>
        <p> مادة الدراسات الاجتماعية.</p>
        <p>تعلموا التاريخ، افهموا الحاضر، وابنوا المستقبل.</p>
        <p>للمزيد من المعلومات، تواصلوا معنا عبر البريد الإلكتروني <i className="fa-regular fa-envelope"></i> :
            omar.hatem.okasha@gmail.com</p>
        <p>و تواصلوا معنا عبر الواتس اب <i className="fab fa-whatsapp"></i> :01224653326</p>
        <p/> <strong>خدماتنا</strong> : نقدم شرح ملخص علي دروس مادة الدراسات الاجتماعية للصف السادس الابتدائي
            <br/>و اختبار علي كل درس  لمعرفة مستوي الطالب <br/> ونقدم مصادر للتعلم اكثر ونساعد علي تشجيع الطفل
            للتعلم
        <p/>
        <p><strong>الفئة المستهدفة</strong> : تلاميذ الصف السادس الابتدائي </p>

        <p> أنشأُه عمر حاتم عكاشه</p>
    </footer>
  )
}
