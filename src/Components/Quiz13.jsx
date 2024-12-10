import { includes, toArray, toString } from 'lodash';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import video13 from "../Videos/13-الدرس الخامس الوحدة الثالثة/L14.mp4"

export default function Quiz13() {
    const questions =[
        {
            "id": 1,
            "question": "كيف ساهمت التجارة في بناء الدولة الإسلامية؟",
            "options": [
                "زيادة الضرائب",
                "نشر الإسلام وتقوية العلاقات بين الدول",
                "إضعاف العلاقات الاقتصادية",
                "تقليل التبادل التجاري"
            ],
            "answer": "نشر الإسلام وتقوية العلاقات بين الدول",
            "desc": "التجارة كانت وسيلة لنشر الإسلام وتعزيز العلاقات الاقتصادية والثقافية بين مختلف الشعوب."
        },
        {
            "id": 2,
            "question": "أي من المدن التالية كانت مركزًا تجاريًا في الدولة الإسلامية؟",
            "options": [
                "القاهرة",
                "جدة",
                "بغداد",
                "دمشق"
            ],
            "answer": "جدة",
            "desc": "جدة كانت أحد المراكز التجارية المهمة في العصور الإسلامية لوقوعها على البحر الأحمر، ما جعلها نقطة وصل بين العالم العربي والدول الأخرى."
        },
        {
            "id": 3,
            "question": "ما هي إحدى الفوائد الأساسية للتجارة في الوطن العربي؟",
            "options": [
                "زيادة التبعية للدول الأجنبية",
                "تقوية العلاقات بين الدول",
                "تقليل فرص العمل",
                "تدمير الاقتصاد المحلي"
            ],
            "answer": "تقوية العلاقات بين الدول",
            "desc": "التجارة تعزز من الروابط الاقتصادية والسياسية بين الدول، مما يساعد على تحقيق التنمية المشتركة."
        },
        {
            "id": 4,
            "question": "ما الذي يساعد التجارة في ضبط الميزان التجاري للدولة؟",
            "options": [
                "تقليل الواردات",
                "زيادة الصادرات",
                "تقليل الضرائب",
                "تقليل الإنتاج المحلي"
            ],
            "answer": "زيادة الصادرات",
            "desc": "زيادة الصادرات يعزز من دخل الدولة ويضبط الميزان التجاري، مما يساهم في استقرار الاقتصاد."
        },
        {
            "id": 5,
            "question": "ما هي أحد أهداف التجارة البينية العربية؟",
            "options": [
                "تعزيز التجارة بين الدول العربية فقط",
                "تحسين العلاقات التجارية مع الدول الأجنبية",
                "تعزيز التبادل التجاري بين الدول العربية",
                "زيادة الصادرات العربية فقط"
            ],
            "answer": "تعزيز التبادل التجاري بين الدول العربية",
            "desc": "التجارة البينية تهدف إلى تعزيز التجارة بين الدول العربية من خلال تقليل الحواجز الجمركية وتحقيق التكامل الاقتصادي."
        },
        {
            "id": 6,
            "question": "ما هي أحد أسباب ضعف التجارة البينية بين الدول العربية؟",
            "options": [
                "زيادة التنوع في الصادرات",
                "توافر التكنولوجيا الحديثة",
                "وجود حواجز جمركية",
                "ارتفاع جودة المنتجات العربية"
            ],
            "answer": "وجود حواجز جمركية",
            "desc": "وجود حواجز جمركية بين الدول العربية يعوق تدفق البضائع ويضعف التجارة البينية."
        },
        {
            "id": 7,
            "question": "ما هو أحد أنواع التجارة التي تشمل الصادرات والواردات بين الدول العربية وبقية العالم؟",
            "options": [
                "التجارة البينية العربية",
                "التجارة الدولية",
                "التجارة المحلية",
                "التجارة الداخلية"
            ],
            "answer": "التجارة الدولية",
            "desc": "التجارة الدولية تتضمن التبادل التجاري بين الدول العربية وبقية دول العالم، مثل الصادرات والواردات."
        },
        {
            "id": 8,
            "question": "ما هو أبرز مصدر للصادرات في الوطن العربي؟",
            "options": [
                "المنتجات الزراعية",
                "المنتجات الصناعية",
                "الوقود والمعادن",
                "الإلكترونيات"
            ],
            "answer": "الوقود والمعادن",
            "desc": "الوقود والمعادن مثل النفط والغاز الطبيعي هي من أهم صادرات الدول العربية."
        },
        {
            "id": 9,
            "question": "ما هي أهم واردات الوطن العربي؟",
            "options": [
                "المنتجات الزراعية",
                "السلع الغذائية",
                "المعدات الثقيلة",
                "المنتجات الصناعية"
            ],
            "answer": "المنتجات الصناعية",
            "desc": "الدول العربية تستورد العديد من السلع الصناعية لتلبية احتياجاتها في مختلف القطاعات الاقتصادية."
        },
        {
            "id": 10,
            "question": "ما هي إحدى الطرق التي يمكن أن تساعد في تقوية التجارة البينية بين الدول العربية؟",
            "options": [
                "فرض قيود صارمة على الصادرات",
                "تقليل الجمارك بين الدول العربية",
                "زيادة التكاليف الجمركية",
                "تقليل المعارض التجارية"
            ],
            "answer": "تقليل الجمارك بين الدول العربية",
            "desc": "تقليل الجمارك يعزز من تدفق التجارة بين الدول العربية ويزيد من التبادل التجاري."
        },
        {
            "id": 11,
            "question": "ما هي إحدى المنظمات العربية التي تهدف إلى تعزيز التجارة الحرة بين الدول العربية؟",
            "options": [
                "اتحاد دول المغرب العربي",
                "المنظمة العربية للتنمية الزراعية",
                "منظمة التجارة العربية الحرة",
                "مجلس التعاون الخليجي"
            ],
            "answer": "منظمة التجارة العربية الحرة",
            "desc": "منظمة التجارة العربية الحرة تسعى إلى تحقيق التكامل الاقتصادي بين الدول العربية عن طريق إزالة الحواجز التجارية."
        },
        {
            "id": 12,
            "question": "كيف تسهم التجارة الإلكترونية في دعم الاقتصاد؟",
            "options": [
                "تقليل قدرة الشركات على الوصول للأسواق",
                "رفع الأسعار بسبب التنافس",
                "تقليل الفجوة الاقتصادية",
                "تسهيل عملية الشراء والبيع على نطاق أوسع"
            ],
            "answer": "تسهيل عملية الشراء والبيع على نطاق أوسع",
            "desc": "التجارة الإلكترونية تتيح للأفراد والشركات الوصول إلى أسواق واسعة وتساعد في زيادة الحركة التجارية."
        },
        {
            "id": 13,
            "question": "ما هو أحد أهداف إنشاء الاتحاد العربي للتجارة الإلكترونية؟",
            "options": [
                "تقليل التجارة الدولية",
                "تشجيع التجارة الإلكترونية في الدول العربية",
                "حظر التجارة الإلكترونية",
                "تقليص استخدام الإنترنت"
            ],
            "answer": "تشجيع التجارة الإلكترونية في الدول العربية",
            "desc": "الاتحاد العربي للتجارة الإلكترونية يسعى إلى تعزيز استخدام التجارة الإلكترونية في الدول العربية لزيادة التبادل التجاري والاقتصادي."
        }
    ]
    
    
    const [SelectedAnswer13, setSelectedAnswer13] = useState([]);
    const [QuizSubmitted13, setQuizSubmitted13] = useState(false);
    const [QuizScore13, setQuizScore13] = useState(0);
    const [Message13 , setMessage13] = useState('')

    useEffect(() => {
        const storedScore = localStorage.getItem('QuizScore13');
        const storedAnswers = localStorage.getItem('SelectedAnswer13');
        const storedMessage13 = localStorage.getItem('SelectedMessage13');

        if (storedScore) {
            setQuizScore13(parseInt(storedScore));
            setQuizSubmitted13(true);
        }

        if (storedAnswers) {
           
                setSelectedAnswer13(JSON.parse(storedAnswers));
            
        }
  
    }, []);

    const AnswerSelection = (questionIndex, answer) => {
        const updatedAnswers = [...SelectedAnswer13];
        updatedAnswers[questionIndex] = answer;
        setSelectedAnswer13(updatedAnswers);

        
        
    };
    const CommpleteMessage13= "لم يتم اختيار جميع الاجابات من فضلك اجب علي جميع الاسئلة"
    const SubmitQuiz = (event) => {
        event.preventDefault();
        
        let score = 0;
        console.log(SelectedAnswer13);


        questions.forEach((question, index) => {
            if (SelectedAnswer13[index] === question.answer) {
                score++;
            }
        });

        setQuizScore13(score);
        if (SelectedAnswer13.includes(undefined)) {
            setQuizSubmitted13(false);
            setMessage13(CommpleteMessage13)
          }
          
          if (!SelectedAnswer13.includes(undefined)) {
            localStorage.setItem('QuizScore13', score.toString());
            setQuizSubmitted13(true);
         window.scrollTo(0, 700);

          }

        const sanitizedAnswers = SelectedAnswer13.map(answer => {
            if (typeof answer === "string") {
                return answer.trim();
            }
            return answer;
        });



        localStorage.setItem('SelectedAnswer13', JSON.stringify(sanitizedAnswers));
        localStorage.setItem('SelectedMessage13' , CommpleteMessage13)
        console.log(SelectedAnswer13)

    };
    const resetQuiz = () => {
        setSelectedAnswer13([]);
        setQuizScore13(0);
        setQuizSubmitted13(false);

        localStorage.removeItem('QuizScore13');
        localStorage.removeItem('SelectedAnswer13');
    };
    let percentColor = '';
    const percent = (QuizScore13 * 100) / questions.length;
    if (percent >= 50) {
        percentColor = '#11C27C';
    } else if (percent < 50) {
        percentColor = '#E20D47';
    }
    return (
        <div className="quiz">
           <video src={video13} className="video" controls></video>
            {!QuizSubmitted13 && ( 
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
                                        checked={SelectedAnswer13[questionIndex] === option} 
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
               <h3>{Message13}</h3>
                    <button type="submit" className='submit'>انهاء الاختبار</button>
                </form>
            )}

            {QuizSubmitted13 && (
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
                    <h2>النتيجة: {QuizScore13} / {questions.length}</h2>

                    {QuizScore13 >= 9 && QuizScore13 <= 10 ? (
                        <div className="comment">
                            <p>مبروك! إجاباتك كانت دقيقة جدًا، وأنت تظهر مستوى عميقًا من الفهم. عمل رائع!</p>
                            <p>نصيحة للمستقبل: حافظ على هذا الأداء الرائع. من الممكن أن تحدي نفسك بمزيد من الأسئلة الأكثر تعقيدًا لتحافظ على مستوى تقدمك.</p>
                        </div>
                    ) : null}

                    {QuizScore13 >= 7 && QuizScore13 < 9 ? (
                        <div className="comments">
                            <p>أداء جيد جدًا! لديك فهم جيد للموضوع وأجبت على معظم الأسئلة بشكل صحيح. فقط تحتاج إلى التركيز أكثر في بعض الجوانب.</p>
                            <p>نصيحة للمستقبل: حاول مراجعة الأخطاء الصغيرة في إجاباتك. التركيز على التفاصيل قد يساعدك في الوصول إلى درجة أعلى.</p>
                        </div>
                    ) : null}

                    {QuizScore13 >= 5 && QuizScore13 < 7 ? (
                        <div className="comments">
                            <p>أداء جيد، ولكن هناك بعض النقاط التي تحتاج إلى تحسين. لم تكن جميع الإجابات صحيحة، ولكن لديك قاعدة جيدة.</p>
                            <p>نصيحة للمستقبل: ركز على المواضيع التي لم تجب عنها بشكل صحيح. حاول التعمق في فهم هذه النقاط بشكل أفضل من خلال المزيد من المراجعة والتدريب.</p>
                        </div>
                    ) : null}

                    {QuizScore13 >= 3 && QuizScore13 < 5 ? (
                        <div className="comments">
                            <p>الأداء جيد لكن يحتاج إلى تحسين. لديك بعض الأخطاء الكبيرة التي تؤثر على النتيجة النهائية.</p>
                            <p>نصيحة للمستقبل: أعد مراجعة المواد التي واجهت صعوبة فيها. من المفيد أن تلخص النقاط الرئيسية وتطلب المساعدة في النقاط الغامضة.</p>
                        </div>
                    ) : null}

                    {QuizScore13 >= 0 && QuizScore13 < 3 ? (
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
                                    <h4>اجابتك : {SelectedAnswer13[Qindex]} </h4>
                                    {
                                    SelectedAnswer13[Qindex]!==question.answer ? (
                                        <h4>اجابتك خاطئة ❌</h4>
                                    ) : null
                                    
                                   }
                                     {
                                    SelectedAnswer13[Qindex]===question.answer ? (
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
