import { includes, toArray, toString } from 'lodash';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import video12 from "../Videos/12-الدرس الرابع الوحدة الثالثة/L13 (2).mp4"

export default function Quiz12() {
    const questions =[
        {
            "id": 1,
            "question": "ما هو الموقع الجغرافي الذي يعزز السياحة في الوطن العربي؟",
            "options": [
                "الوجود في مناطق شديدة البرودة",
                "الموقع بالقرب من المناطق الاستوائية",
                "الموقع الاستراتيجي على طرق التجارة العالمية",
                "الموقع في المناطق الجبلية"
            ],
            "answer": "الموقع الاستراتيجي على طرق التجارة العالمية",
            "desc": "الموقع الجغرافي الفريد والوضع الاستراتيجي على طرق التجارة العالمية يساهم في جذب السياح."
        },
        {
            "id": 2,
            "question": "أي من هذه الدول لا تُعد من أبرز مقاصد السياحة الثقافية في الوطن العربي؟",
            "options": [
                "مصر",
                "العراق",
                "السعودية",
                "تونس"
            ],
            "answer": "السعودية",
            "desc": "السعودية أكثر شهرة بالسياحة الدينية، بينما مصر والعراق وتونس مشهورة بالسياحة الثقافية."
        },
        {
            "id": 3,
            "question": "أي من الأنواع التالية من السياحة يشمل زيارة الشواطئ في لبنان؟",
            "options": [
                "سياحة علاجية",
                "سياحة ثقافية",
                "سياحة ترفيهية",
                "سياحة رياضية"
            ],
            "answer": "سياحة ترفيهية",
            "desc": "زيارة الشواطئ في لبنان تُعد جزءًا من السياحة الترفيهية."
        },
        {
            "id": 4,
            "question": "أي من هذه العوامل يُعد من مقومات السياحة الطبيعية في الوطن العربي؟",
            "options": [
                "تنوع الفنادق والقرى السياحية",
                "الموقع الجغرافي الفريد",
                "وجود شبكة مواصلات جيدة",
                "تطوير الفنادق"
            ],
            "answer": "الموقع الجغرافي الفريد",
            "desc": "الموقع الجغرافي الفريد يُعتبر من المقومات الطبيعية التي تساعد في جذب السياح."
        },
        {
            "id": 5,
            "question": "زيارة الأماكن المقدسة مثل المسجد الحرام والمسجد الأقصى تعتبر سياحة...",
            "options": [
                "علاجية",
                "رياضية",
                "دينية",
                "ثقافية"
            ],
            "answer": "دينية",
            "desc": "السياحة الدينية تتضمن زيارة الأماكن المقدسة مثل المسجد الحرام والمسجد الأقصى."
        },
        {
            "id": 6,
            "question": "ما هي نوع السياحة التي تشمل زيارة مواقع التراث العالمي مثل الأهرامات في مصر؟",
            "options": [
                "سياحة ثقافية",
                "سياحة رياضية",
                "سياحة ترفيهية",
                "سياحة بيئية"
            ],
            "answer": "سياحة ثقافية",
            "desc": "السياحة الثقافية تركز على زيارة المعالم التاريخية مثل الأهرامات."
        },
        {
            "id": 7,
            "question": "تتمثل السياحة البيئية في زيارة:",
            "options": [
                "الأماكن المقدسة",
                "المحميات الطبيعية",
                "الشواطئ",
                "المعارض التجارية"
            ],
            "answer": "المحميات الطبيعية",
            "desc": "السياحة البيئية تشمل زيارة المحميات الطبيعية والمناطق الصحراوية."
        },
        {
            "id": 8,
            "question": "أي من الدول العربية تُعد من أبرز مقاصد السياحة العلاجية؟",
            "options": [
                "الإمارات",
                "الأردن",
                "المغرب",
                "العراق"
            ],
            "answer": "الأردن",
            "desc": "الأردن تعد وجهة رئيسية للسياحة العلاجية بسبب مناطق مثل البحر الميت وعيون ماعين."
        },
        {
            "id": 9,
            "question": "السياحة التي تشمل الذهاب إلى المعارض الدولية مثل معرض القاهرة الدولي للكتاب تُعد سياحة:",
            "options": [
                "دينية",
                "ثقافية",
                "رياضية",
                "ترفيهية"
            ],
            "answer": "ثقافية",
            "desc": "المعارض الثقافية مثل معرض القاهرة الدولي للكتاب تساهم في تعزيز السياحة الثقافية."
        },
        {
            "id": 10,
            "question": "أي من هذه الأنواع من السياحة يشمل زيارة شواطئ البحر الأحمر؟",
            "options": [
                "سياحة رياضية",
                "سياحة بيئية",
                "سياحة ترفيهية",
                "سياحة علاجية"
            ],
            "answer": "سياحة ترفيهية",
            "desc": "زيارة شواطئ البحر الأحمر تُعد من الأنشطة الترفيهية."
        },
        {
            "id": 11,
            "question": "أين توجد جزيرة فرسان التي تعتبر من مواقع السياحة الطبيعية؟",
            "options": [
                "في تونس",
                "في السعودية",
                "في مصر",
                "في المغرب"
            ],
            "answer": "في السعودية",
            "desc": "جزيرة فرسان تقع في البحر الأحمر، وهي من المناطق الطبيعية المميزة في السعودية."
        },
        {
            "id": 12,
            "question": "ما الذي يعزز السياحة الرياضية في الوطن العربي؟",
            "options": [
                "استضافة المسابقات الرياضية العالمية",
                "وجود محميات طبيعية",
                "تطور الفنادق والقرى السياحية",
                "توفير مراكز تجارية ضخمة"
            ],
            "answer": "استضافة المسابقات الرياضية العالمية",
            "desc": "استضافة البطولات الكبرى مثل كأس العالم أو كأس الأمم الإفريقية تساهم في تعزيز السياحة الرياضية."
        },
        {
            "id": 13,
            "question": "ما هو الهدف الأساسي للسياحة المستدامة؟",
            "options": [
                "زيادة أعداد السياح",
                "تقليل النفايات والانبعاثات",
                "تعزيز السياحة الثقافية",
                "إنشاء مراكز تجارية جديدة"
            ],
            "answer": "تقليل النفايات والانبعاثات",
            "desc": "السياحة المستدامة تهدف إلى الحفاظ على البيئة من خلال تقليل النفايات والانبعاثات واستخدام مصادر الطاقة المتجددة."
        },
        {
            "id": 14,
            "question": "أحد مقومات السياحة في الوطن العربي يشمل تطور:",
            "options": [
                "الفنادق فقط",
                "الفنادق والمطاعم فقط",
                "الفنادق والقرى السياحية",
                "الطرق والجسور فقط"
            ],
            "answer": "الفنادق والقرى السياحية",
            "desc": "تطوير الفنادق والقرى السياحية يساعد على توفير خدمات مريحة للسياح."
        },
        {
            "id": 15,
            "question": "أي من الدول العربية تعد واحدة من أبرز الوجهات السياحية للشراء والتسوق؟",
            "options": [
                "تونس",
                "لبنان",
                "الإمارات",
                "اليمن"
            ],
            "answer": "الإمارات",
            "desc": "الإمارات، وخاصة دبي، تعد من أبرز الوجهات السياحية للتسوق بفضل مراكز التسوق الفاخرة."
        }
    ]
    
    const [SelectedAnswer12, setSelectedAnswer12] = useState([]);
    const [QuizSubmitted12, setQuizSubmitted12] = useState(false);
    const [QuizScore12, setQuizScore12] = useState(0);
    const [Message12 , setMessage12] = useState('')

    useEffect(() => {
        const storedScore = localStorage.getItem('QuizScore12');
        const storedAnswers = localStorage.getItem('SelectedAnswer12');
        const storedMessage12 = localStorage.getItem('SelectedMessage12');

        if (storedScore) {
            setQuizScore12(parseInt(storedScore));
            setQuizSubmitted12(true);
        }

        if (storedAnswers) {
           
                setSelectedAnswer12(JSON.parse(storedAnswers));
            
        }
  
    }, []);

    const AnswerSelection = (questionIndex, answer) => {
        const updatedAnswers = [...SelectedAnswer12];
        updatedAnswers[questionIndex] = answer;
        setSelectedAnswer12(updatedAnswers);

        
        
    };
    const CommpleteMessage12= "لم يتم اختيار جميع الاجابات من فضلك اجب علي جميع الاسئلة"
    const SubmitQuiz = (event) => {
        event.preventDefault();
        
        let score = 0;
        console.log(SelectedAnswer12);


        questions.forEach((question, index) => {
            if (SelectedAnswer12[index] === question.answer) {
                score++;
            }
        });

        setQuizScore12(score);
        if (SelectedAnswer12.includes(undefined)) {
            setQuizSubmitted12(false);
            setMessage12(CommpleteMessage12)
          }
          
          if (!SelectedAnswer12.includes(undefined)) {
            localStorage.setItem('QuizScore12', score.toString());
            setQuizSubmitted12(true);
         window.scrollTo(0, 700);

          }

        const sanitizedAnswers = SelectedAnswer12.map(answer => {
            if (typeof answer === "string") {
                return answer.trim();
            }
            return answer;
        });



        localStorage.setItem('SelectedAnswer12', JSON.stringify(sanitizedAnswers));
        localStorage.setItem('SelectedMessage12' , CommpleteMessage12)
        console.log(SelectedAnswer12)

    };
    const resetQuiz = () => {
        setSelectedAnswer12([]);
        setQuizScore12(0);
        setQuizSubmitted12(false);

        localStorage.removeItem('QuizScore12');
        localStorage.removeItem('SelectedAnswer12');
    };
    let percentColor = '';
    const percent = (QuizScore12 * 100) / questions.length;
    if (percent >= 50) {
        percentColor = '#11C27C';
    } else if (percent < 50) {
        percentColor = '#E20D47';
    }
    return (
        <div className="quiz">
           <video src={video12} className="video" controls></video>
            {!QuizSubmitted12 && ( 
                <form onSubmit={SubmitQuiz}>
                    <p>عدد الأسئلة : {questions.length}</p>
                    {questions.map((question, questionIndex) => (
                        <div key={questionIndex}>
                            <h3>{question.question}</h3>
                            {question.options.map((option, optionIndex) => (
                                <label key={optionIndex} htmlFor={`option-${questionIndex}-${optionIndex}`}>
                                    <input
                                        type="radio"
                                        name={`question-${questionIndex}`}
                                        id={`option-${questionIndex}-${optionIndex}`}
                                        value={option}
                                        checked={SelectedAnswer12[questionIndex] === option} 
                                        onChange={() => AnswerSelection(questionIndex, option)} 
                                    />
                                    {option}
                                    <br />
                                </label>
                            ))}
                        </div>
                    ))}
          
          
                 {
               
               }
               <h3>{Message12}</h3>
                    <button type="submit" className='submit'>انهاء الاختبار</button>
                </form>
            )}

            {QuizSubmitted12 && (
                <div>
                    <div style={{ width: '8rem', height: '8rem' }}>
                        <CircularProgressbar
                            value={percent}
                            text={`${Math.round(percent)}%`}
                            styles={{
                                path: {
                                    stroke: percentColor,
                                    strokeWidth: 8,
                                },
                                trail: {
                                    stroke: '#d8d8d8',
                                    strokeWidth: 8,
                                },
                                text: {
                                    fontSize: '1.4rem',
                                    fontWeight: 'bold',
                                    color: percentColor,
                                },
                            }}
                        />
                    </div>
                    <h2>النتيجة: {QuizScore12} / {questions.length}</h2>

                    {QuizScore12 >= 9 && QuizScore12 <= 10 ? (
                        <div className="comment">
                            <p>مبروك! إجاباتك كانت دقيقة جدًا، وأنت تظهر مستوى عميقًا من الفهم. عمل رائع!</p>
                            <p>نصيحة للمستقبل: حافظ على هذا الأداء الرائع. من الممكن أن تحدي نفسك بمزيد من الأسئلة الأكثر تعقيدًا لتحافظ على مستوى تقدمك.</p>
                        </div>
                    ) : null}

                    {QuizScore12 >= 7 && QuizScore12 < 9 ? (
                        <div className="comments">
                            <p>أداء جيد جدًا! لديك فهم جيد للموضوع وأجبت على معظم الأسئلة بشكل صحيح. فقط تحتاج إلى التركيز أكثر في بعض الجوانب.</p>
                            <p>نصيحة للمستقبل: حاول مراجعة الأخطاء الصغيرة في إجاباتك. التركيز على التفاصيل قد يساعدك في الوصول إلى درجة أعلى.</p>
                        </div>
                    ) : null}

                    {QuizScore12 >= 5 && QuizScore12 < 7 ? (
                        <div className="comments">
                            <p>أداء جيد، ولكن هناك بعض النقاط التي تحتاج إلى تحسين. لم تكن جميع الإجابات صحيحة، ولكن لديك قاعدة جيدة.</p>
                            <p>نصيحة للمستقبل: ركز على المواضيع التي لم تجب عنها بشكل صحيح. حاول التعمق في فهم هذه النقاط بشكل أفضل من خلال المزيد من المراجعة والتدريب.</p>
                        </div>
                    ) : null}

                    {QuizScore12 >= 3 && QuizScore12 < 5 ? (
                        <div className="comments">
                            <p>الأداء جيد لكن يحتاج إلى تحسين. لديك بعض الأخطاء الكبيرة التي تؤثر على النتيجة النهائية.</p>
                            <p>نصيحة للمستقبل: أعد مراجعة المواد التي واجهت صعوبة فيها. من المفيد أن تلخص النقاط الرئيسية وتطلب المساعدة في النقاط الغامضة.</p>
                        </div>
                    ) : null}

                    {QuizScore12 >= 0 && QuizScore12 < 3 ? (
                        <div className="comments">
                            <p>يبدو أن هناك حاجة ملحة لتحسين الفهم في هذا الموضوع. النتيجة تشير إلى أن هناك صعوبة في استيعاب المفاهيم الأساسية.</p>
                            <p>نصيحة للمستقبل: من المهم أن تركز على مراجعة المادة بشكل شامل. أبدأ بمراجعة الأساسيات، وإذا لزم الأمر، يمكننا ترتيب جلسات إضافية لشرح النقاط الصعبة. لا تيأس، التحسن يتطلب وقتًا.</p>
                        </div>
                    ) : null}
                  
                    <button onClick={resetQuiz} className='reset'>
                        اعادة الاختبار
                    </button>
                    {
                        questions.map((question, Qindex) => (
                            <div className="desc">
                              

                                    <h3>{question.question}</h3>
                                    <h4>اجابتك : {SelectedAnswer12[Qindex]} </h4>
                                    {
                                    SelectedAnswer12[Qindex]!==question.answer ? (
                                        <h4>اجابتك خاطئة ❌</h4>
                                    ) : null
                                    
                                   }
                                     {
                                    SelectedAnswer12[Qindex]===question.answer ? (
                                        <h4>اجابتك صحيحة ✅</h4>
                                    ) : null
                                    
                                   }
                                    <p>{question.desc}</p>

                            </div>

                        ))
                    }
                </div>
            )}
        </div>
    );
}
