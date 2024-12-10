import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <div className="hero-section">
            <h2 > هيا بنا نتعلم دراسات اجتماعية</h2>
            <br />
            <br/>
            <Link className="main-btn" to={'/the-little-teacher/quiz/grade-6'}>ابدأ الاّن</Link>
        </div>

  )
}
