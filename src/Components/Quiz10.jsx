import { includes, toArray, toString } from 'lodash';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import video10 from "../Videos/10-الدرس التانى الوحدة الثالثة/L11.mp4"

export default function Quiz10() {
    const questions = [
        {
            "id": 1,
            "question": "ما هي الدولة التي تعد الأولى في تربية الجاموس في الوطن العربي؟",
            "options": [
                "المغرب",
                "مصر",
                "السودان",
                "الصومال"
            ],
            "answer": "مصر",
            "desc": "مصر هي الأولى في تربية الجاموس في الوطن العربي بنسبة تصل إلى 22% بسبب البيئة الزراعية الفيضية المناسبة لذلك."
        },
        {
            "id": 2,
            "question": "أي من الدول التالية تعد الأولى في تربية الإبل في الوطن العربي؟",
            "options": [
                "السودان",
                "مصر",
                "الصومال",
                "المغرب"
            ],
            "answer": "الصومال",
            "desc": "الصومال تعتبر الدولة الأولى في تربية الإبل في الوطن العربي."
        },
        {
            "id": 3,
            "question": "أين توجد المصايد السمكية في الوطن العربي؟",
            "options": [
                "البحار فقط",
                "البحيرات فقط",
                "الأنهار فقط",
                "جميع ما سبق"
            ],
            "answer": "جميع ما سبق",
            "desc": "المصايد السمكية في الوطن العربي توجد في البحار، البحيرات، الأنهار، وكذلك في المحيطات."
        },
        {
            "id": 4,
            "question": "أي من الدول العربية تعد الأولى في إنتاج الأسماك من المصايد؟",
            "options": [
                "مصر",
                "المغرب",
                "الإمارات",
                "تونس"
            ],
            "answer": "المغرب",
            "desc": "المغرب هي الأولى في إنتاج الأسماك من المصايد بفضل طول سواحلها على البحر المتوسط والمحيط الأطلسي."
        },
        {
            "id": 5,
            "question": "من أكبر الدول العربية في إنتاج الأسماك من المزارع السمكية؟",
            "options": [
                "مصر",
                "السودان",
                "الصومال",
                "الجزائر"
            ],
            "answer": "مصر",
            "desc": "مصر تعد الأولى في إنتاج الأسماك من المزارع السمكية في الوطن العربي."
        },
        {
            "id": 6,
            "question": "ما هي المشكلة الرئيسية التي تواجه الثروة الحيوانية في الوطن العربي؟",
            "options": [
                "نقص المراعي",
                "وفرة الأعلاف",
                "زيادة إنتاج اللحوم",
                "انخفاض أعداد الحيوانات"
            ],
            "answer": "نقص المراعي",
            "desc": "نقص المراعي بسبب الجفاف والتصحر يعتبر من أكبر المشكلات التي تؤثر على الثروة الحيوانية في الوطن العربي."
        },
        {
            "id": 7,
            "question": "ما هو السبب الرئيسي لتربية الدواجن في الوطن العربي؟",
            "options": [
                "إنتاج البيض فقط",
                "سد العجز في اللحوم الحمراء",
                "تربية الحيوانات الأليفة",
                "تلبية احتياجات اللحوم البحرية"
            ],
            "answer": "سد العجز في اللحوم الحمراء",
            "desc": "الدول العربية تعتمد على تربية الدواجن لسد العجز في اللحوم الحمراء بسبب قلة إنتاج اللحوم الحمراء."
        },
        {
            "id": 8,
            "question": "ما هو المشروع المصري الذي يهدف إلى تنمية الثروة الحيوانية؟",
            "options": [
                "مشروع البحر الأحمر",
                "مشروع المليون رأس ماشية",
                "مشروع النيل",
                "مشروع القاهرة الكبرى"
            ],
            "answer": "مشروع المليون رأس ماشية",
            "desc": "مشروع المليون رأس ماشية هو مشروع مصري لتنمية الثروة الحيوانية، ويهدف إلى تحسين إنتاج اللحوم."
        },
        {
            "id": 9,
            "question": "أي من الدول التالية هي الأولى في إنتاج الأسماك من المزارع السمكية؟",
            "options": [
                "مصر",
                "المغرب",
                "العراق",
                "السعودية"
            ],
            "answer": "مصر",
            "desc": "مصر تحتل المركز الأول في إنتاج الأسماك من المزارع السمكية في الوطن العربي."
        },
        {
            "id": 10,
            "question": "ما هو العامل الذي يؤثر بشكل سلبي على الثروة السمكية في الوطن العربي؟",
            "options": [
                "ارتفاع درجات الحرارة في المسطحات المائية",
                "زيادة إنتاج الأسماك",
                "تطور تقنيات الصيد",
                "تنوع الموارد السمكية"
            ],
            "answer": "ارتفاع درجات الحرارة في المسطحات المائية",
            "desc": "ارتفاع درجات الحرارة يؤدي إلى نقص الأوكسجين في المسطحات المائية، مما يؤثر سلبًا على الكائنات البحرية."
        }
    ]
    
    
    const [SelectedAnswer10, setSelectedAnswer10] = useState([]);
    const [QuizSubmitted10, setQuizSubmitted10] = useState(false);
    const [QuizScore10, setQuizScore10] = useState(0);
    const [Message10 , setMessage10] = useState('')

    useEffect(() => {
        const storedScore = localStorage.getItem('QuizScore10');
        const storedAnswers = localStorage.getItem('SelectedAnswer10');
        const storedMessage10 = localStorage.getItem('SelectedMessage10');

        if (storedScore) {
            setQuizScore10(parseInt(storedScore));
            setQuizSubmitted10(true);
        }

        if (storedAnswers) {
           
                setSelectedAnswer10(JSON.parse(storedAnswers));
            
        }
  
    }, []);

    const AnswerSelection = (questionIndex, answer) => {
        const updatedAnswers = [...SelectedAnswer10];
        updatedAnswers[questionIndex] = answer;
        setSelectedAnswer10(updatedAnswers);

        
        
    };
    const CommpleteMessage10= "لم يتم اختيار جميع الاجابات من فضلك اجب علي جميع الاسئلة"
    const SubmitQuiz = (event) => {
        event.preventDefault();
        
        let score = 0;
        console.log(SelectedAnswer10);


        questions.forEach((question, index) => {
            if (SelectedAnswer10[index] === question.answer) {
                score++;
            }
        });

        setQuizScore10(score);
        if (SelectedAnswer10.includes(undefined)) {
            setQuizSubmitted10(false);
            setMessage10(CommpleteMessage10)
          }
          
          if (!SelectedAnswer10.includes(undefined)) {
            localStorage.setItem('QuizScore10', score.toString());
            setQuizSubmitted10(true);
         window.scrollTo(0, 700);

          }

        const sanitizedAnswers = SelectedAnswer10.map(answer => {
            if (typeof answer === "string") {
                return answer.trim();
            }
            return answer;
        });



        localStorage.setItem('SelectedAnswer10', JSON.stringify(sanitizedAnswers));
        localStorage.setItem('SelectedMessage10' , CommpleteMessage10)
        console.log(SelectedAnswer10)

    };
    const resetQuiz = () => {
        setSelectedAnswer10([]);
        setQuizScore10(0);
        setQuizSubmitted10(false);

        localStorage.removeItem('QuizScore10');
        localStorage.removeItem('SelectedAnswer10');
    };
    let percentColor = '';
    const percent = (QuizScore10 * 100) / questions.length;
    if (percent >= 50) {
        percentColor = '#11C27C';
    } else if (percent < 50) {
        percentColor = '#E20D47';
    }
    return (
        <div className="quiz">
           <video src={video10} className="video" controls></video>
            {!QuizSubmitted10 && ( 
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
                                        checked={SelectedAnswer10[questionIndex] === option} 
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
               <h3>{Message10}</h3>
                    <button type="submit" className='submit'>انهاء الاختبار</button>
                </form>
            )}

            {QuizSubmitted10 && (
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
                    <h2>النتيجة: {QuizScore10} / {questions.length}</h2>

                    {QuizScore10 >= 9 && QuizScore10 <= 10 ? (
                        <div className="comment">
                            <p>مبروك! إجاباتك كانت دقيقة جدًا، وأنت تظهر مستوى عميقًا من الفهم. عمل رائع!</p>
                            <p>نصيحة للمستقبل: حافظ على هذا الأداء الرائع. من الممكن أن تحدي نفسك بمزيد من الأسئلة الأكثر تعقيدًا لتحافظ على مستوى تقدمك.</p>
                        </div>
                    ) : null}

                    {QuizScore10 >= 7 && QuizScore10 < 9 ? (
                        <div className="comments">
                            <p>أداء جيد جدًا! لديك فهم جيد للموضوع وأجبت على معظم الأسئلة بشكل صحيح. فقط تحتاج إلى التركيز أكثر في بعض الجوانب.</p>
                            <p>نصيحة للمستقبل: حاول مراجعة الأخطاء الصغيرة في إجاباتك. التركيز على التفاصيل قد يساعدك في الوصول إلى درجة أعلى.</p>
                        </div>
                    ) : null}

                    {QuizScore10 >= 5 && QuizScore10 < 7 ? (
                        <div className="comments">
                            <p>أداء جيد، ولكن هناك بعض النقاط التي تحتاج إلى تحسين. لم تكن جميع الإجابات صحيحة، ولكن لديك قاعدة جيدة.</p>
                            <p>نصيحة للمستقبل: ركز على المواضيع التي لم تجب عنها بشكل صحيح. حاول التعمق في فهم هذه النقاط بشكل أفضل من خلال المزيد من المراجعة والتدريب.</p>
                        </div>
                    ) : null}

                    {QuizScore10 >= 3 && QuizScore10 < 5 ? (
                        <div className="comments">
                            <p>الأداء جيد لكن يحتاج إلى تحسين. لديك بعض الأخطاء الكبيرة التي تؤثر على النتيجة النهائية.</p>
                            <p>نصيحة للمستقبل: أعد مراجعة المواد التي واجهت صعوبة فيها. من المفيد أن تلخص النقاط الرئيسية وتطلب المساعدة في النقاط الغامضة.</p>
                        </div>
                    ) : null}

                    {QuizScore10 >= 0 && QuizScore10 < 3 ? (
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
                                    <h4>اجابتك : {SelectedAnswer10[Qindex]} </h4>
                                    {
                                    SelectedAnswer10[Qindex]!==question.answer ? (
                                        <h4>اجابتك خاطئة ❌</h4>
                                    ) : null
                                    
                                   }
                                     {
                                    SelectedAnswer10[Qindex]===question.answer ? (
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
