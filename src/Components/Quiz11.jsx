import { includes, toArray, toString } from 'lodash';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import video11 from "../Videos/11-الدرس الثالث الوحدة الثالثة/L12.mp4"

export default function Quiz11() {
    const questions =[
        {
            "id": 1,
            "question": "أول الدول العربية إنتاجًا لمعدن الذهب هي:",
            "options": [
                "مصر",
                "السودان",
                "المغرب",
                "السعودية"
            ],
            "answer": "السودان",
            "desc": "السودان تحتل المرتبة الأولى عربيًا في إنتاج الذهب."
        },
        {
            "id": 2,
            "question": "يُستخدم الفوسفات بشكل رئيسي في:",
            "options": [
                "صناعة الإسمنت",
                "صناعة الأسمدة والمبيدات",
                "صناعة الحديد والصلب",
                "صناعة المشغولات الذهبية"
            ],
            "answer": "صناعة الأسمدة والمبيدات",
            "desc": "الفوسفات مادة أساسية في صناعة الأسمدة الزراعية والمبيدات."
        },
        {
            "id": 3,
            "question": "أول الدول العربية إنتاجًا للأسمنت هي:",
            "options": [
                "المغرب",
                "السعودية",
                "مصر",
                "الإمارات"
            ],
            "answer": "السعودية",
            "desc": "السعودية تحتل المركز الأول عربيًا في إنتاج الأسمنت."
        },
        {
            "id": 4,
            "question": "أهم المعادن المستخدمة في صناعة الكباري والمنشآت هي:",
            "options": [
                "الذهب",
                "الحديد",
                "الفوسفات",
                "النحاس"
            ],
            "answer": "الحديد",
            "desc": "الحديد يُستخدم في الصناعات الثقيلة مثل الكباري والمنشآت."
        },
        {
            "id": 5,
            "question": "يُسهم الوطن العربي بنسبة كم من الإنتاج العالمي للفوسفات؟",
            "options": [
                "10%",
                "25%",
                "50%",
                "75%"
            ],
            "answer": "25%",
            "desc": "الإنتاج العربي من الفوسفات يمثل ربع الإنتاج العالمي."
        },
        {
            "id": 6,
            "question": "تحتل المغرب المركز الأول عربيًا في إنتاج:",
            "options": [
                "الذهب",
                "الفوسفات",
                "الحديد",
                "البترول"
            ],
            "answer": "الفوسفات",
            "desc": "المغرب غنية بمناجم الفوسفات وتحتل المركز الأول عربيًا."
        },
        {
            "id": 7,
            "question": "أكثر الدول إنتاجًا للبترول في الوطن العربي هي:",
            "options": [
                "قطر",
                "العراق",
                "السعودية",
                "الإمارات"
            ],
            "answer": "السعودية",
            "desc": "السعودية تُعد أكبر منتج للبترول في الوطن العربي."
        },
        {
            "id": 8,
            "question": "أهم مقومات الصناعة في الوطن العربي هي:",
            "options": [
                "العمالة الماهرة",
                "رأس المال",
                "السوق المحلية",
                "جميع ما سبق"
            ],
            "answer": "جميع ما سبق",
            "desc": "الصناعة تعتمد على العمالة، رأس المال، والسوق المحلية."
        },
        {
            "id": 9,
            "question": "يُمثل قطاع الصناعة نسبة كم من القوى العاملة في الوطن العربي؟",
            "options": [
                "20%",
                "30%",
                "40%",
                "50%"
            ],
            "answer": "40%",
            "desc": "40% من القوى العاملة تعمل في القطاع الصناعي."
        },
        {
            "id": 10,
            "question": "من مشاكل التعدين في الوطن العربي:",
            "options": [
                "نقص الموارد المعدنية",
                "الاعتماد على استيراد المعدات",
                "وفرة مصادر الطاقة",
                "عدم وجود أسواق"
            ],
            "answer": "الاعتماد على استيراد المعدات",
            "desc": "الدول العربية تعتمد على استيراد الآلات من الخارج."
        },
        {
            "id": 11,
            "question": "الدولة الأولى عربيًا في إنتاج الغاز الطبيعي هي:",
            "options": [
                "السعودية",
                "قطر",
                "مصر",
                "الجزائر"
            ],
            "answer": "قطر",
            "desc": "قطر تعتبر المنتج الأول للغاز الطبيعي في الوطن العربي."
        },
        {
            "id": 12,
            "question": "من أمثلة الصناعات التحويلية:",
            "options": [
                "استخراج الفوسفات",
                "تكرير البترول",
                "استخراج الحديد",
                "استخراج الذهب"
            ],
            "answer": "تكرير البترول",
            "desc": "الصناعات التحويلية تشمل تحويل المواد الخام مثل تكرير البترول."
        },
        {
            "id": 13,
            "question": "تعمل الدول العربية على تطوير الصناعة من خلال:",
            "options": [
                "الاعتماد على مصادر الطاقة النظيفة",
                "تقليل الاستثمار في الصناعة",
                "إلغاء التكنولوجيا الحديثة",
                "خفض إنتاج الفوسفات"
            ],
            "answer": "الاعتماد على مصادر الطاقة النظيفة",
            "desc": "الصناعة الخضراء والطاقة النظيفة من أولويات التنمية الصناعية."
        },
        {
            "id": 14,
            "question": "أهم مصادر الطاقة النظيفة التي يتم تطويرها في الوطن العربي هي:",
            "options": [
                "البترول",
                "الطاقة الشمسية",
                "الغاز الطبيعي",
                "الفحم"
            ],
            "answer": "الطاقة الشمسية",
            "desc": "الوطن العربي يتميز بتوافر ضوء الشمس مما يشجع الاستثمار في الطاقة الشمسية."
        },
        {
            "id": 15,
            "question": "من نتائج نفاذ البترول في المستقبل:",
            "options": [
                "زيادة الاعتماد على الصناعة",
                "البحث عن مصادر طاقة بديلة",
                "تقليل الصناعات التحويلية",
                "زيادة صادرات الغاز الطبيعي"
            ],
            "answer": "البحث عن مصادر طاقة بديلة",
            "desc": "البترول مصدر غير متجدد، ونفاده يدفع الدول للبحث عن بدائل نظيفة."
        }
    ]
    
    const [SelectedAnswer11, setSelectedAnswer11] = useState([]);
    const [QuizSubmitted11, setQuizSubmitted11] = useState(false);
    const [QuizScore11, setQuizScore11] = useState(0);
    const [Message11 , setMessage11] = useState('')

    useEffect(() => {
        const storedScore = localStorage.getItem('QuizScore11');
        const storedAnswers = localStorage.getItem('SelectedAnswer11');
        const storedMessage11 = localStorage.getItem('SelectedMessage11');

        if (storedScore) {
            setQuizScore11(parseInt(storedScore));
            setQuizSubmitted11(true);
        }

        if (storedAnswers) {
           
                setSelectedAnswer11(JSON.parse(storedAnswers));
            
        }
  
    }, []);

    const AnswerSelection = (questionIndex, answer) => {
        const updatedAnswers = [...SelectedAnswer11];
        updatedAnswers[questionIndex] = answer;
        setSelectedAnswer11(updatedAnswers);

        
        
    };
    const CommpleteMessage11= "لم يتم اختيار جميع الاجابات من فضلك اجب علي جميع الاسئلة"
    const SubmitQuiz = (event) => {
        event.preventDefault();
        
        let score = 0;
        console.log(SelectedAnswer11);


        questions.forEach((question, index) => {
            if (SelectedAnswer11[index] === question.answer) {
                score++;
            }
        });

        setQuizScore11(score);
        if (SelectedAnswer11.includes(undefined)) {
            setQuizSubmitted11(false);
            setMessage11(CommpleteMessage11)
          }
          
          if (!SelectedAnswer11.includes(undefined)) {
            localStorage.setItem('QuizScore11', score.toString());
            setQuizSubmitted11(true);
         window.scrollTo(0, 700);

          }

        const sanitizedAnswers = SelectedAnswer11.map(answer => {
            if (typeof answer === "string") {
                return answer.trim();
            }
            return answer;
        });



        localStorage.setItem('SelectedAnswer11', JSON.stringify(sanitizedAnswers));
        localStorage.setItem('SelectedMessage11' , CommpleteMessage11)
        console.log(SelectedAnswer11)

    };
    const resetQuiz = () => {
        setSelectedAnswer11([]);
        setQuizScore11(0);
        setQuizSubmitted11(false);

        localStorage.removeItem('QuizScore11');
        localStorage.removeItem('SelectedAnswer11');
    };
    let percentColor = '';
    const percent = (QuizScore11 * 100) / questions.length;
    if (percent >= 50) {
        percentColor = '#11C27C';
    } else if (percent < 50) {
        percentColor = '#E20D47';
    }
    return (
        <div className="quiz">
           <video src={video11} className="video" controls></video>
            {!QuizSubmitted11 && ( 
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
                                        checked={SelectedAnswer11[questionIndex] === option} 
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
               <h3>{Message11}</h3>
                    <button type="submit" className='submit'>انهاء الاختبار</button>
                </form>
            )}

            {QuizSubmitted11 && (
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
                    <h2>النتيجة: {QuizScore11} / {questions.length}</h2>

                    {QuizScore11 >= 9 && QuizScore11 <= 10 ? (
                        <div className="comment">
                            <p>مبروك! إجاباتك كانت دقيقة جدًا، وأنت تظهر مستوى عميقًا من الفهم. عمل رائع!</p>
                            <p>نصيحة للمستقبل: حافظ على هذا الأداء الرائع. من الممكن أن تحدي نفسك بمزيد من الأسئلة الأكثر تعقيدًا لتحافظ على مستوى تقدمك.</p>
                        </div>
                    ) : null}

                    {QuizScore11 >= 7 && QuizScore11 < 9 ? (
                        <div className="comments">
                            <p>أداء جيد جدًا! لديك فهم جيد للموضوع وأجبت على معظم الأسئلة بشكل صحيح. فقط تحتاج إلى التركيز أكثر في بعض الجوانب.</p>
                            <p>نصيحة للمستقبل: حاول مراجعة الأخطاء الصغيرة في إجاباتك. التركيز على التفاصيل قد يساعدك في الوصول إلى درجة أعلى.</p>
                        </div>
                    ) : null}

                    {QuizScore11 >= 5 && QuizScore11 < 7 ? (
                        <div className="comments">
                            <p>أداء جيد، ولكن هناك بعض النقاط التي تحتاج إلى تحسين. لم تكن جميع الإجابات صحيحة، ولكن لديك قاعدة جيدة.</p>
                            <p>نصيحة للمستقبل: ركز على المواضيع التي لم تجب عنها بشكل صحيح. حاول التعمق في فهم هذه النقاط بشكل أفضل من خلال المزيد من المراجعة والتدريب.</p>
                        </div>
                    ) : null}

                    {QuizScore11 >= 3 && QuizScore11 < 5 ? (
                        <div className="comments">
                            <p>الأداء جيد لكن يحتاج إلى تحسين. لديك بعض الأخطاء الكبيرة التي تؤثر على النتيجة النهائية.</p>
                            <p>نصيحة للمستقبل: أعد مراجعة المواد التي واجهت صعوبة فيها. من المفيد أن تلخص النقاط الرئيسية وتطلب المساعدة في النقاط الغامضة.</p>
                        </div>
                    ) : null}

                    {QuizScore11 >= 0 && QuizScore11 < 3 ? (
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
                                    <h4>اجابتك : {SelectedAnswer11[Qindex]} </h4>
                                    {
                                    SelectedAnswer11[Qindex]!==question.answer ? (
                                        <h4>اجابتك خاطئة ❌</h4>
                                    ) : null
                                    
                                   }
                                     {
                                    SelectedAnswer11[Qindex]===question.answer ? (
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
