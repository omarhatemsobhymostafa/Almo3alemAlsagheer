import { includes, toArray, toString } from 'lodash';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import video3 from "../Videos/3-الدرس الثالث الوحدة الاولى/L3.mp4"

export default function Quiz3() {
    const questions = [
        {
            "id": 1,
            "question": "ماذا حاولت قريش فعله لمنع الهجرة إلى المدينة؟",
            "options": [
                "فرضت جزية",
                "حاولت قتل الرسول صلى الله عليه وسلم",
                "منعت التجارة",
                "أغلقت الطرق"
            ],
            "answer": "حاولت قتل الرسول صلى الله عليه وسلم",
            "desc": "قريش كانت تشعر بالتهديد من انتشار الإسلام فخططت لقتل الرسول صلى الله عليه وسلم لمنع الهجرة."
        },
        {
            "id": 2,
            "question": "في أي عام حدثت غزوة بدر؟",
            "options": [
                "الأول",
                "الثاني",
                "الثالث",
                "الرابع"
            ],
            "answer": "الثاني",
            "desc": "غزوة بدر حدثت في السنة الثانية من الهجرة وكانت انتصاراً مهماً للمسلمين."
        },
        {
            "id": 3,
            "question": "من الذي ساعد الرسول صلى الله عليه وسلم في الهجرة؟",
            "options": [
                "عمر بن الخطاب",
                "أبو بكر الصديق",
                "عثمان بن عفان",
                "علي بن أبي طالب"
            ],
            "answer": "أبو بكر الصديق",
            "desc": "أبو بكر الصديق كان مع الرسول صلى الله عليه وسلم في الهجرة إلى المدينة المنورة."
        },
        {
            "id": 4,
            "question": "ما الذي تحول في غزوة أحد؟",
            "options": [
                "النصر إلى هزيمة بسبب خيانة الرماة",
                "الهزيمة إلى نصر بسبب الخيانة",
                "الصلح بين المسلمين والكفار",
                "الغزوة إلى هدنة"
            ],
            "answer": "النصر إلى هزيمة بسبب خيانة الرماة",
            "desc": "في غزوة أحد، كان النصر للمسلمين في البداية لكن بسبب ترك الرماة لمواقعهم، حدث تحول لصالح قريش."
        },
        {
            "id": 5,
            "question": "من قام بتوجيه نصيحة حفر الخندق حول المدينة؟",
            "options": [
                "سعد بن أبي وقاص",
                "سلمان الفارسي",
                "أبو هريرة",
                "عبد الله بن مسعود"
            ],
            "answer": "سلمان الفارسي",
            "desc": "سلمان الفارسي اقترح حفر الخندق أثناء غزوة الخندق لحماية المدينة من هجوم قريش."
        },
        {
            "id": 6,
            "question": "ما الذي فعلته قريش في صلح الحديبية؟",
            "options": [
                "رفضت التفاوض",
                "قامت بقتل المسلمين",
                "نقضت الاتفاق بعد عامين",
                "اعتنقت الإسلام"
            ],
            "answer": "نقضت الاتفاق بعد عامين",
            "desc": "قريش نقضت الاتفاق بعد عامين عندما اعتدت على حلفاء المسلمين."
        },
        {
            "id": 7,
            "question": "ما هو اسم المدينة التي هاجر إليها الرسول صلى الله عليه وسلم؟",
            "options": [
                "مكة",
                "المدينة المنورة",
                "بدر",
                "الطائف"
            ],
            "answer": "المدينة المنورة",
            "desc": "المدينة المنورة هي المكان الذي هاجر إليه الرسول صلى الله عليه وسلم، وكانت نقطة تحول في تاريخ الإسلام."
        },
        {
            "id": 8,
            "question": "لماذا قام الرسول صلى الله عليه وسلم ببناء المسجد بعد الهجرة؟",
            "options": [
                "لتعليم القرآن",
                "لاحتضان الأنصار والمهاجرين",
                "ليكون مقرًا للحكومة",
                "كل ما سبق"
            ],
            "answer": "كل ما سبق",
            "desc": "بناء المسجد كان هدفه تعليم الدين، وكان مقرًا للشؤون الاجتماعية والسياسية."
        },
        {
            "id": 9,
            "question": "ما هي أول معركة انتصر فيها المسلمون بعد الهجرة؟",
            "options": [
                "غزوة بدر",
                "غزوة أحد",
                "غزوة الخندق",
                "فتح مكة"
            ],
            "answer": "غزوة بدر",
            "desc": "غزوة بدر كانت أول معركة هامة انتصر فيها المسلمون ضد قريش."
        },
        {
            "id": 10,
            "question": "كيف انتهت غزوة الخندق؟",
            "options": [
                "بهزيمة المسلمين",
                "بانتصار قريش",
                "بانتصار المسلمين دون قتال",
                "بصلح بين الطرفين"
            ],
            "answer": "بانتصار المسلمين دون قتال",
            "desc": "غزوة الخندق انتهت بعد أن فشل قريش في اختراق الخندق وانسحبوا."
        },
        {
            "id": 11,
            "question": "ما هو سبب فتح مكة؟",
            "options": [
                "نقض قريش للصلح",
                "غزو المدينة",
                "انتشار الإسلام في مكة",
                "قتل الصحابة"
            ],
            "answer": "نقض قريش للصلح",
            "desc": "قريش نقضت صلح الحديبية واعتدت على حلفاء المسلمين، مما جعل الرسول صلى الله عليه وسلم يقرر فتح مكة."
        },
        {
            "id": 12,
            "question": "ما الذي أدى إلى انتصار المسلمين في غزوة بدر؟",
            "options": [
                "كثرة عدد المسلمين",
                "استراتيجيات الرسول العسكرية",
                "ضعف جيش قريش",
                "تدخّل الملائكة"
            ],
            "answer": "تدخّل الملائكة",
            "desc": "الملائكة أمدّت المسلمين بالقتال في غزوة بدر، مما كان سببًا رئيسيًا في نصرهم."
        },
        {
            "id": 13,
            "question": "ما هو السبب في بناء الرسول صلى الله عليه وسلم للمدينة المنورة كمجتمع موحد؟",
            "options": [
                "وجود فتنة في مكة",
                "لتطبيق النظام والعدل",
                "لمكانة مكة الدينية",
                "للاستراحة"
            ],
            "answer": "لتطبيق النظام والعدل",
            "desc": "المدينة كانت تعتبر مركزًا لبناء الدولة الإسلامية على أسس من النظام والعدل."
        },
        {
            "id": 14,
            "question": "في أي عام توفي الرسول صلى الله عليه وسلم؟",
            "options": [
                "10 هـ",
                "11 هـ",
                "12 هـ",
                "13 هـ"
            ],
            "answer": "11 هـ",
            "desc": "توفي الرسول صلى الله عليه وسلم في السنة 11 هـ بعد أن أكمل رسالته."
        },
        {
            "id": 15,
            "question": "ما هو الهدف من بناء صحيفة المدينة؟",
            "options": [
                "تنظيم الحياة السياسية",
                "تنظيم حقوق وواجبات المواطنين",
                "نشر السلام بين المسلمين واليهود",
                "كل ما سبق"
            ],
            "answer": "كل ما سبق",
            "desc": "صحيفة المدينة كانت تهدف إلى تنظيم الحياة السياسية والاجتماعية، وضمان حقوق وواجبات جميع سكان المدينة، بما فيهم اليهود."
        }
    ]
    
    
    

    const [SelectedAnswer3, setSelectedAnswer3] = useState([]);
    const [QuizSubmitted3, setQuizSubmitted3] = useState(false);
    const [QuizScore3, setQuizScore3] = useState(0);
    const [Message3 , setMessage3] = useState('')

    useEffect(() => {
        const storedScore = localStorage.getItem('QuizScore3');
        const storedAnswers = localStorage.getItem('SelectedAnswer3');
        const storedMessage3 = localStorage.getItem('SelectedMessage3');

        if (storedScore) {
            setQuizScore3(parseInt(storedScore));
            setQuizSubmitted3(true);
        }

        if (storedAnswers) {
           
                setSelectedAnswer3(JSON.parse(storedAnswers));
            
        }
  
    }, []);

    const AnswerSelection = (questionIndex, answer) => {
        const updatedAnswers = [...SelectedAnswer3];
        updatedAnswers[questionIndex] = answer;
        setSelectedAnswer3(updatedAnswers);

        
        
    };
    const CommpleteMessage3= "لم يتم اختيار جميع الاجابات من فضلك اجب علي جميع الاسئلة"
    const SubmitQuiz = (event) => {
        event.preventDefault();
        
        let score = 0;
        console.log(SelectedAnswer3);


        questions.forEach((question, index) => {
            if (SelectedAnswer3[index] === question.answer) {
                score++;
            }
        });

        setQuizScore3(score);
        if (SelectedAnswer3.includes(undefined)) {
            setQuizSubmitted3(false);
            setMessage3(CommpleteMessage3)
          }
          
          if (!SelectedAnswer3.includes(undefined)) {
            localStorage.setItem('QuizScore3', score.toString());
            setQuizSubmitted3(true);
         window.scrollTo(0, 700);

          }

        const sanitizedAnswers = SelectedAnswer3.map(answer => {
            if (typeof answer === "string") {
                return answer.trim();
            }
            return answer;
        });



        localStorage.setItem('SelectedAnswer3', JSON.stringify(sanitizedAnswers));
        localStorage.setItem('SelectedMessage3' , CommpleteMessage3)
        console.log(SelectedAnswer3)

    };
    const resetQuiz = () => {
        setSelectedAnswer3([]);
        setQuizScore3(0);
        setQuizSubmitted3(false);

        localStorage.removeItem('QuizScore3');
        localStorage.removeItem('SelectedAnswer3');
    };
    let percentColor = '';
    const percent = (QuizScore3 * 100) / questions.length;
    if (percent >= 50) {
        percentColor = '#11C27C';
    } else if (percent < 50) {
        percentColor = '#E20D47';
    }
    return (
        <div className="quiz">
           <video src={video3} className="video" controls></video>
            {!QuizSubmitted3 && ( 
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
                                        checked={SelectedAnswer3[questionIndex] === option} 
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
               <h3>{Message3}</h3>
                    <button type="submit" className='submit'>انهاء الاختبار</button>
                </form>
            )}

            {QuizSubmitted3 && (
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
                    <h2>النتيجة: {QuizScore3} / {questions.length}</h2>

                    {QuizScore3 >= 9 && QuizScore3 <= 10 ? (
                        <div className="comment">
                            <p>مبروك! إجاباتك كانت دقيقة جدًا، وأنت تظهر مستوى عميقًا من الفهم. عمل رائع!</p>
                            <p>نصيحة للمستقبل: حافظ على هذا الأداء الرائع. من الممكن أن تحدي نفسك بمزيد من الأسئلة الأكثر تعقيدًا لتحافظ على مستوى تقدمك.</p>
                        </div>
                    ) : null}

                    {QuizScore3 >= 7 && QuizScore3 < 9 ? (
                        <div className="comments">
                            <p>أداء جيد جدًا! لديك فهم جيد للموضوع وأجبت على معظم الأسئلة بشكل صحيح. فقط تحتاج إلى التركيز أكثر في بعض الجوانب.</p>
                            <p>نصيحة للمستقبل: حاول مراجعة الأخطاء الصغيرة في إجاباتك. التركيز على التفاصيل قد يساعدك في الوصول إلى درجة أعلى.</p>
                        </div>
                    ) : null}

                    {QuizScore3 >= 5 && QuizScore3 < 7 ? (
                        <div className="comments">
                            <p>أداء جيد، ولكن هناك بعض النقاط التي تحتاج إلى تحسين. لم تكن جميع الإجابات صحيحة، ولكن لديك قاعدة جيدة.</p>
                            <p>نصيحة للمستقبل: ركز على المواضيع التي لم تجب عنها بشكل صحيح. حاول التعمق في فهم هذه النقاط بشكل أفضل من خلال المزيد من المراجعة والتدريب.</p>
                        </div>
                    ) : null}

                    {QuizScore3 >= 3 && QuizScore3 < 5 ? (
                        <div className="comments">
                            <p>الأداء جيد لكن يحتاج إلى تحسين. لديك بعض الأخطاء الكبيرة التي تؤثر على النتيجة النهائية.</p>
                            <p>نصيحة للمستقبل: أعد مراجعة المواد التي واجهت صعوبة فيها. من المفيد أن تلخص النقاط الرئيسية وتطلب المساعدة في النقاط الغامضة.</p>
                        </div>
                    ) : null}

                    {QuizScore3 >= 0 && QuizScore3 < 3 ? (
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
                                    <h4>اجابتك : {SelectedAnswer3[Qindex]} </h4>
                                    {
                                    SelectedAnswer3[Qindex]!==question.answer ? (
                                        <h4>اجابتك خاطئة ❌</h4>
                                    ) : null
                                    
                                   }
                                     {
                                    SelectedAnswer3[Qindex]===question.answer ? (
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
