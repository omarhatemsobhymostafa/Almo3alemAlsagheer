import { includes, toArray, toString } from 'lodash';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import video2 from "../Videos/2-الدرس التانى الوحدة الاولى/L2.mp4"

export default function Quiz2() {
    const questions = [
        {
            "id": 1,
            "question": "من كان أول من أسلم من الصبية؟",
            "options": [
                "جده عبد المطلب",
                "عمه أبو طالب",
                "علي بن أبي طالب",
                "أبو بكر الصديق"
            ],
            "answer": "علي بن أبي طالب",
            "desc": "كان علي بن أبي طالب أول من أسلم من الصبية، حيث أسلم وهو في سن صغيرة وكان من المقربين للنبي صلى الله عليه وسلم."
        },
        {
            "id": 2,
            "question": "في أي سنة وُلد النبي محمد صلى الله عليه وسلم؟",
            "options": [
                "570 ميلاديًا",
                "570 هجريًا",
                "622 ميلاديًا",
                "622 هجريًا"
            ],
            "answer": "570 ميلاديًا",
            "desc": "وُلد النبي محمد صلى الله عليه وسلم في عام 570 ميلاديًا، وهو العام الذي سُمي عام الفيل."
        },
        {
            "id": 3,
            "question": "أين نزل الوحي على الرسول صلى الله عليه وسلم لأول مرة؟",
            "options": [
                "غار حراء",
                "غار ثور",
                "المسجد الحرام",
                "جبل أحد"
            ],
            "answer": "غار حراء",
            "desc": "نزل الوحي على النبي محمد صلى الله عليه وسلم لأول مرة في غار حراء بمكة المكرمة."
        },
        {
            "id": 4,
            "question": "ما هي مدة الدعوة السرية للإسلام؟",
            "options": [
                "سنتين",
                "ثلاث سنوات",
                "أربع سنوات",
                "خمس سنوات"
            ],
            "answer": "ثلاث سنوات",
            "desc": "استمرت الدعوة السرية في مكة لمدة ثلاث سنوات قبل أن يطلب الله تعالى من الرسول صلى الله عليه وسلم دعوة الناس علنًا."
        },
        {
            "id": 5,
            "question": "ماذا كان يعمل النبي صلى الله عليه وسلم قبل البعثة؟",
            "options": [
                "تاجر",
                "فلاح",
                "جندي",
                "طباخ"
            ],
            "answer": "تاجر",
            "desc": "كان النبي محمد صلى الله عليه وسلم يعمل في التجارة قبل البعثة، وقد اشتهر بلقب 'الصادق الأمين' بسبب صدقه وأمانته."
        },
        {
            "id": 6,
            "question": "ماذا كان يسمى أول هجرة للمسلمين إلى الحبشة؟",
            "options": [
                "الهجرة الكبرى",
                "الهجرة الأولى",
                "الهجرة الثانية",
                "الهجرة إلى المدينة"
            ],
            "answer": "الهجرة الأولى",
            "desc": "كانت الهجرة الأولى للمسلمين إلى الحبشة بسبب الاضطهاد الذي تعرضوا له في مكة، حيث لجأوا إلى ملك الحبشة الذي كان عادلًا."
        },
        {
            "id": 7,
            "question": "ماذا كانت قريش تخاف منه عندما حاربت دعوة الرسول صلى الله عليه وسلم؟",
            "options": [
                "خوفًا من فقدان مكانتها بين القبائل",
                "خوفًا من زيادة عدد المسلمين",
                "خوفًا من غزو الأعداء",
                "خوفًا من أن يصبح محمد صلى الله عليه وسلم ملكًا"
            ],
            "answer": "خوفًا من فقدان مكانتها بين القبائل",
            "desc": "كانت قريش تخاف من أن يؤدي انتشار الإسلام إلى فقدان مكانتها بين قبائل العرب."
        },
        {
            "id": 8,
            "question": "من هي أول من أسلمت من النساء؟",
            "options": [
                "فاطمة الزهراء",
                "عائشة بنت أبي بكر",
                "خديجة بنت خويلد",
                "أم سلمة"
            ],
            "answer": "خديجة بنت خويلد",
            "desc": "كانت السيدة خديجة بنت خويلد أول من أسلمت من النساء واحتضنت الدعوة الإسلامية بعد نزول الوحي على النبي صلى الله عليه وسلم."
        },
        {
            "id": 9,
            "question": "في أي سنة كانت الهجرة إلى المدينة المنورة؟",
            "options": [
                "1 هـ",
                "2 هـ",
                "3 هـ",
                "4 هـ"
            ],
            "answer": "1 هـ",
            "desc": "الهجرة إلى المدينة المنورة حدثت في السنة الأولى من الهجرة (1 هـ) بعد أن زادت المضايقات والاضطهادات للمسلمين في مكة."
        },
        {
            "id": 10,
            "question": "أي من هذه الصفات كانت من الصفات السيئة للعرب قبل الإسلام؟",
            "options": [
                "الكرم",
                "الوفاء بالعهد",
                "وأد البنات",
                "الشجاعة"
            ],
            "answer": "وأد البنات",
            "desc": "وأد البنات كان من العادات السيئة التي كانت منتشرة بين بعض قبائل العرب قبل الإسلام، حيث كانوا يدفنون البنات أحياء خوفًا من العار."
        },
        {
            "id": 11,
            "question": "ما هي أول معركة خاضها المسلمون؟",
            "options": [
                "معركة بدر",
                "معركة أحد",
                "معركة الخندق",
                "معركة حنين"
            ],
            "answer": "معركة بدر",
            "desc": "معركة بدر كانت أول معركة كبرى خاضها المسلمون ضد قريش في السنة الثانية من الهجرة."
        },
        {
            "id": 12,
            "question": "ما الذي كانت قريش تفعله لوقف الدعوة الإسلامية في مكة؟",
            "options": [
                "تقديم الأموال للمسلمين",
                "الإيذاء والتهديد",
                "دعم الرسول صلى الله عليه وسلم",
                "إرسال رسل للمطالبة بالسلام"
            ],
            "answer": "الإيذاء والتهديد",
            "desc": "كانت قريش تلاحق المسلمين وتؤذيهم من خلال العنف والتهديدات في محاولة لوقف انتشار الإسلام."
        },
        {
            "id": 13,
            "question": "من كان أول من أسلم من الصحابة من الرجال؟",
            "options": [
                "أبو بكر الصديق",
                "عمر بن الخطاب",
                "علي بن أبي طالب",
                "عثمان بن عفان"
            ],
            "answer": "أبو بكر الصديق",
            "desc": "كان أبو بكر الصديق أول من أسلم من الصحابة بعد خديجة بنت خويلد، وكان من أقرب المقربين للنبي صلى الله عليه وسلم وسانده في بداية الدعوة."
        },
        {
            "id": 14,
            "question": "أي من هذه الصفات كانت من صفات العرب الحسنة قبل الإسلام؟",
            "options": [
                "وأد البنات",
                "شرب الخمر",
                "الوفاء بالعهد",
                "الإيثار"
            ],
            "answer": "الوفاء بالعهد",
            "desc": "الوفاء بالعهد كان من الصفات الحسنة التي تحلى بها العرب قبل الإسلام، وكانت من أبرز القيم التي حافظوا عليها."
        },
        {
            "id": 15,
            "question": "ماذا كان السبب وراء الهجرة الأولى للمسلمين إلى الحبشة؟",
            "options": [
                "خوفًا من قريش",
                "بسبب ظلم قريش للمسلمين",
                "طلبًا للرزق",
                "تجنبًا لحروب العرب"
            ],
            "answer": "بسبب ظلم قريش للمسلمين",
            "desc": "الهجرة الأولى إلى الحبشة كانت بسبب الظلم الكبير الذي تعرض له المسلمون في مكة، حيث لجأوا إلى ملك الحبشة الذي كان يرحب بهم ويحميهم."
        }
    ]
    
    

    const [SelectedAnswer2, setSelectedAnswer2] = useState([]);
    const [QuizSubmitted2, setQuizSubmitted2] = useState(false);
    const [QuizScore2, setQuizScore2] = useState(0);
    const [Message2 , setMessage2] = useState('')

    useEffect(() => {
        const storedScore = localStorage.getItem('QuizScore2');
        const storedAnswers = localStorage.getItem('SelectedAnswer2');
        const storedMessage2 = localStorage.getItem('SelectedMessage2');

        if (storedScore) {
            setQuizScore2(parseInt(storedScore));
            setQuizSubmitted2(true);
        }

        if (storedAnswers) {
           
                setSelectedAnswer2(JSON.parse(storedAnswers));
            
        }
    
    }, []);

    const AnswerSelection = (questionIndex, answer) => {
        const updatedAnswers = [...SelectedAnswer2];
        updatedAnswers[questionIndex] = answer;
        setSelectedAnswer2(updatedAnswers);

        
        
    };
    const CommpleteMessage2= "لم يتم اختيار جميع الاجابات من فضلك اجب علي جميع الاسئلة"
    const SubmitQuiz = (event) => {
        event.preventDefault();
        
        let score = 0;
        console.log(SelectedAnswer2);


        questions.forEach((question, index) => {
            if (SelectedAnswer2[index] === question.answer) {
                score++;
            }
        });

        setQuizScore2(score);
        if (SelectedAnswer2.includes(undefined)) {
            setQuizSubmitted2(false);
            setMessage2(CommpleteMessage2)
          }
          
          if (!SelectedAnswer2.includes(undefined)) {
            localStorage.setItem('QuizScore2', score.toString());
            setQuizSubmitted2(true);
         window.scrollTo(0, 700);

          }

        const sanitizedAnswers = SelectedAnswer2.map(answer => {
            if (typeof answer === "string") {
                return answer.trim();
            }
            return answer;
        });



        localStorage.setItem('SelectedAnswer2', JSON.stringify(sanitizedAnswers));
        localStorage.setItem('SelectedMessage2' , CommpleteMessage2)
        console.log(SelectedAnswer2)

    };
    const resetQuiz = () => {
        setSelectedAnswer2([]);
        setQuizScore2(0);
        setQuizSubmitted2(false);

        localStorage.removeItem('QuizScore2');
        localStorage.removeItem('SelectedAnswer2');
    };
    let percentColor = '';
    const percent = (QuizScore2 * 100) / questions.length;
    if (percent >= 50) {
        percentColor = '#11C27C';
    } else if (percent < 50) {
        percentColor = '#E20D47';
    }
    return (
        <div className="quiz">
           <video src={video2} className="video" controls></video>
            {!QuizSubmitted2 && ( 
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
                                        checked={SelectedAnswer2[questionIndex] === option} 
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
               <h3>{Message2}</h3>
                    <button type="submit" className='submit'>انهاء الاختبار</button>
                </form>
            )}

            {QuizSubmitted2 && (
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
                    <h2>النتيجة: {QuizScore2} / {questions.length}</h2>

                    {QuizScore2 >= 9 && QuizScore2 <= 10 ? (
                        <div className="comment">
                            <p>مبروك! إجاباتك كانت دقيقة جدًا، وأنت تظهر مستوى عميقًا من الفهم. عمل رائع!</p>
                            <p>نصيحة للمستقبل: حافظ على هذا الأداء الرائع. من الممكن أن تحدي نفسك بمزيد من الأسئلة الأكثر تعقيدًا لتحافظ على مستوى تقدمك.</p>
                        </div>
                    ) : null}

                    {QuizScore2 >= 7 && QuizScore2 < 9 ? (
                        <div className="comments">
                            <p>أداء جيد جدًا! لديك فهم جيد للموضوع وأجبت على معظم الأسئلة بشكل صحيح. فقط تحتاج إلى التركيز أكثر في بعض الجوانب.</p>
                            <p>نصيحة للمستقبل: حاول مراجعة الأخطاء الصغيرة في إجاباتك. التركيز على التفاصيل قد يساعدك في الوصول إلى درجة أعلى.</p>
                        </div>
                    ) : null}

                    {QuizScore2 >= 5 && QuizScore2 < 7 ? (
                        <div className="comments">
                            <p>أداء جيد، ولكن هناك بعض النقاط التي تحتاج إلى تحسين. لم تكن جميع الإجابات صحيحة، ولكن لديك قاعدة جيدة.</p>
                            <p>نصيحة للمستقبل: ركز على المواضيع التي لم تجب عنها بشكل صحيح. حاول التعمق في فهم هذه النقاط بشكل أفضل من خلال المزيد من المراجعة والتدريب.</p>
                        </div>
                    ) : null}

                    {QuizScore2 >= 3 && QuizScore2 < 5 ? (
                        <div className="comments">
                            <p>الأداء جيد لكن يحتاج إلى تحسين. لديك بعض الأخطاء الكبيرة التي تؤثر على النتيجة النهائية.</p>
                            <p>نصيحة للمستقبل: أعد مراجعة المواد التي واجهت صعوبة فيها. من المفيد أن تلخص النقاط الرئيسية وتطلب المساعدة في النقاط الغامضة.</p>
                        </div>
                    ) : null}

                    {QuizScore2 >= 0 && QuizScore2 < 3 ? (
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
                                    <h4>اجابتك : {SelectedAnswer2[Qindex]} </h4>
                                    {
                                    SelectedAnswer2[Qindex]!==question.answer ? (
                                        <h4>اجابتك خاطئة ❌</h4>
                                    ) : null
                                    
                                   }
                                     {
                                    SelectedAnswer2[Qindex]===question.answer ? (
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
