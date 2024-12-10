import { includes, toArray, toString } from 'lodash';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import video4 from "../Videos/4-الدرس الرابع الوحدة الاولى/L4.mp4"

export default function Quiz4() {
    const questions =[
        {
            "id": 1,
            "question": "كان عمر بن الخطاب هو الخليفة الأول للمسلمين.",
            "options": [
                "صواب",
                "خطأ"
            ],
            "answer": "خطأ",
            "desc": "الخليفة الأول هو أبو بكر الصديق، بينما عمر بن الخطاب كان الخليفة الثاني."
        },
        {
            "id": 2,
            "question": "ارتدت بعض القبائل عن الإسلام بعد وفاة الرسول صلى الله عليه وسلم.",
            "options": [
                "صواب",
                "خطأ"
            ],
            "answer": "صواب",
            "desc": "بعد وفاة الرسول صلى الله عليه وسلم، ارتدت بعض القبائل عن الإسلام، فحاربهم أبو بكر الصديق وأعادهم إلى الإسلام."
        },
        {
            "id": 3,
            "question": "أنشأ عمر بن الخطاب الدواوين مثل ديوان الجند وبيت المال.",
            "options": [
                "صواب",
                "خطأ"
            ],
            "answer": "صواب",
            "desc": "عمر بن الخطاب هو الذي أسس الدواوين مثل ديوان الجند وبيت المال لتنظيم شؤون الدولة."
        },
        {
            "id": 4,
            "question": "نقل الخليفة أبو بكر الصديق مقر الخلافة إلى الكوفة بالعراق.",
            "options": [
                "صواب",
                "خطأ"
            ],
            "answer": "خطأ",
            "desc": "الخليفة علي بن أبي طالب هو الذي نقل مقر الخلافة إلى الكوفة بالعراق بعد اتساع الدولة."
        },
        {
            "id": 5,
            "question": "أنفق عثمان بن عفان الكثير من ماله لنصرة الإسلام.",
            "options": [
                "صواب",
                "خطأ"
            ],
            "answer": "صواب",
            "desc": "عثمان بن عفان كان معروفًا بكرمه الكبير، فقد أنفق الكثير من ماله في سبيل الله، مثل تجييش جيش العسرة وتوسيع المسجد النبوي."
        },
        {
            "id": 6,
            "question": "نجح أبو بكر الصديق في إعادة المرتدين إلى الإسلام.",
            "options": [
                "صواب",
                "خطأ"
            ],
            "answer": "صواب",
            "desc": "أبو بكر الصديق نجح في قتال المرتدين الذين رفضوا الإسلام بعد وفاة النبي صلى الله عليه وسلم."
        },
        {
            "id": 7,
            "question": "أنشأ علي بن أبي طالب أول أسطول بحري في الإسلام.",
            "options": [
                "صواب",
                "خطأ"
            ],
            "answer": "خطأ",
            "desc": "عثمان بن عفان هو الذي أنشأ أول أسطول بحري في الإسلام لحماية حدود الشام ومصر."
        },
        {
            "id": 8,
            "question": "استشهد عدد كبير من حفظة القرآن الكريم في حرب المرتدين.",
            "options": [
                "صواب",
                "خطأ"
            ],
            "answer": "صواب",
            "desc": "في حرب المرتدين استشهد العديد من حفظة القرآن، مما دفع أبو بكر الصديق إلى أمر زيد بن ثابت بجمع القرآن."
        },
        {
            "id": 9,
            "question": "عمر بن الخطاب هو الخليفة الثاني للمسلمين.",
            "options": [
                "صواب",
                "خطأ"
            ],
            "answer": "صواب",
            "desc": "عمر بن الخطاب هو الخليفة الثاني بعد أبو بكر الصديق، وكان من أبرز القادة الذين فتحوا العديد من البلدان."
        },
        {
            "id": 10,
            "question": "من الخليفة الذي قام بتوسيع المسجد النبوي في المدينة المنورة؟",
            "options": [
                "أبو بكر الصديق",
                "عمر بن الخطاب",
                "عثمان بن عفان",
                "علي بن أبي طالب"
            ],
            "answer": "عثمان بن عفان",
            "desc": "عثمان بن عفان قام بتوسيع المسجد النبوي في المدينة المنورة ليتمكن المزيد من المسلمين من أداء الصلاة."
        },
        {
            "id": 11,
            "question": "من الخليفة الذي أسس جيش العسرة لتجهيز الجيش لملاقاة الروم؟",
            "options": [
                "أبو بكر الصديق",
                "عمر بن الخطاب",
                "عثمان بن عفان",
                "علي بن أبي طالب"
            ],
            "answer": "عثمان بن عفان",
            "desc": "عثمان بن عفان قام بتجهيز جيش العسرة بنفقة كبيرة عندما أمر النبي صلى الله عليه وسلم بحشد جيش لقتال الروم."
        },
        {
            "id": 12,
            "question": "خصص الخليفة علي بن أبي طالب اليوم لمظالم الناس.",
            "options": [
                "صواب",
                "خطأ"
            ],
            "answer": "صواب",
            "desc": "علي بن أبي طالب كان حريصًا على تحقيق العدالة وكان يخصص يومًا للبت في مظالم الناس."
        },
        {
            "id": 13,
            "question": "من الخليفة الذي جمع القرآن الكريم في مصحف واحد ووزعه على البلاد؟",
            "options": [
                "أبو بكر الصديق",
                "عمر بن الخطاب",
                "عثمان بن عفان",
                "علي بن أبي طالب"
            ],
            "answer": "عثمان بن عفان",
            "desc": "عثمان بن عفان جمع القرآن الكريم في مصحف واحد ووزعه على البلاد لضمان توحيد قراءته."
        },
        {
            "id": 14,
            "question": "من الخليفة الذي وضع التقويم الهجري بداية من هجرة الرسول صلى الله عليه وسلم؟",
            "options": [
                "أبو بكر الصديق",
                "عمر بن الخطاب",
                "عثمان بن عفان",
                "علي بن أبي طالب"
            ],
            "answer": "عمر بن الخطاب",
            "desc": "عمر بن الخطاب هو الذي وضع التقويم الهجري بداية من هجرة الرسول صلى الله عليه وسلم من مكة إلى المدينة."
        },
        {
            "id": 15,
            "question": "من الخليفة الذي قام بتنظيم الشرطة في الدولة الإسلامية؟",
            "options": [
                "أبو بكر الصديق",
                "عمر بن الخطاب",
                "عثمان بن عفان",
                "علي بن أبي طالب"
            ],
            "answer": "علي بن أبي طالب",
            "desc": "علي بن أبي طالب قام بتنظيم الشرطة لضمان الأمن والنظام داخل الدولة الإسلامية."
        }
    ]
    
    
    

    const [SelectedAnswer4, setSelectedAnswer4] = useState([]);
    const [QuizSubmitted4, setQuizSubmitted4] = useState(false);
    const [QuizScore4, setQuizScore4] = useState(0);
    const [Message4 , setMessage4] = useState('')

    useEffect(() => {
        const storedScore = localStorage.getItem('QuizScore4');
        const storedAnswers = localStorage.getItem('SelectedAnswer4');
        const storedMessage4 = localStorage.getItem('SelectedMessage4');

        if (storedScore) {
            setQuizScore4(parseInt(storedScore));
            setQuizSubmitted4(true);
        }

        if (storedAnswers) {
           
                setSelectedAnswer4(JSON.parse(storedAnswers));
            
        }
  
    }, []);

    const AnswerSelection = (questionIndex, answer) => {
        const updatedAnswers = [...SelectedAnswer4];
        updatedAnswers[questionIndex] = answer;
        setSelectedAnswer4(updatedAnswers);

        
        
    };
    const CommpleteMessage4= "لم يتم اختيار جميع الاجابات من فضلك اجب علي جميع الاسئلة"
    const SubmitQuiz = (event) => {
        event.preventDefault();
        
        let score = 0;
        console.log(SelectedAnswer4);


        questions.forEach((question, index) => {
            if (SelectedAnswer4[index] === question.answer) {
                score++;
            }
        });

        setQuizScore4(score);
        if (SelectedAnswer4.includes(undefined)) {
            setQuizSubmitted4(false);
            setMessage4(CommpleteMessage4)
          }
          
          if (!SelectedAnswer4.includes(undefined)) {
            localStorage.setItem('QuizScore4', score.toString());
            setQuizSubmitted4(true);
         window.scrollTo(0, 700);

          }

        const sanitizedAnswers = SelectedAnswer4.map(answer => {
            if (typeof answer === "string") {
                return answer.trim();
            }
            return answer;
        });



        localStorage.setItem('SelectedAnswer4', JSON.stringify(sanitizedAnswers));
        localStorage.setItem('SelectedMessage4' , CommpleteMessage4)
        console.log(SelectedAnswer4)

    };
    const resetQuiz = () => {
        setSelectedAnswer4([]);
        setQuizScore4(0);
        setQuizSubmitted4(false);

        localStorage.removeItem('QuizScore4');
        localStorage.removeItem('SelectedAnswer4');
    };
    let percentColor = '';
    const percent = (QuizScore4 * 100) / questions.length;
    if (percent >= 50) {
        percentColor = '#11C27C';
    } else if (percent < 50) {
        percentColor = '#E20D47';
    }
    return (
        <div className="quiz">
           <video src={video4} className="video" controls></video>
            {!QuizSubmitted4 && ( 
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
                                        checked={SelectedAnswer4[questionIndex] === option} 
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
               <h3>{Message4}</h3>
                    <button type="submit" className='submit'>انهاء الاختبار</button>
                </form>
            )}

            {QuizSubmitted4 && (
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
                    <h2>النتيجة: {QuizScore4} / {questions.length}</h2>

                    {QuizScore4 >= 9 && QuizScore4 <= 10 ? (
                        <div className="comment">
                            <p>مبروك! إجاباتك كانت دقيقة جدًا، وأنت تظهر مستوى عميقًا من الفهم. عمل رائع!</p>
                            <p>نصيحة للمستقبل: حافظ على هذا الأداء الرائع. من الممكن أن تحدي نفسك بمزيد من الأسئلة الأكثر تعقيدًا لتحافظ على مستوى تقدمك.</p>
                        </div>
                    ) : null}

                    {QuizScore4 >= 7 && QuizScore4 < 9 ? (
                        <div className="comments">
                            <p>أداء جيد جدًا! لديك فهم جيد للموضوع وأجبت على معظم الأسئلة بشكل صحيح. فقط تحتاج إلى التركيز أكثر في بعض الجوانب.</p>
                            <p>نصيحة للمستقبل: حاول مراجعة الأخطاء الصغيرة في إجاباتك. التركيز على التفاصيل قد يساعدك في الوصول إلى درجة أعلى.</p>
                        </div>
                    ) : null}

                    {QuizScore4 >= 5 && QuizScore4 < 7 ? (
                        <div className="comments">
                            <p>أداء جيد، ولكن هناك بعض النقاط التي تحتاج إلى تحسين. لم تكن جميع الإجابات صحيحة، ولكن لديك قاعدة جيدة.</p>
                            <p>نصيحة للمستقبل: ركز على المواضيع التي لم تجب عنها بشكل صحيح. حاول التعمق في فهم هذه النقاط بشكل أفضل من خلال المزيد من المراجعة والتدريب.</p>
                        </div>
                    ) : null}

                    {QuizScore4 >= 3 && QuizScore4 < 5 ? (
                        <div className="comments">
                            <p>الأداء جيد لكن يحتاج إلى تحسين. لديك بعض الأخطاء الكبيرة التي تؤثر على النتيجة النهائية.</p>
                            <p>نصيحة للمستقبل: أعد مراجعة المواد التي واجهت صعوبة فيها. من المفيد أن تلخص النقاط الرئيسية وتطلب المساعدة في النقاط الغامضة.</p>
                        </div>
                    ) : null}

                    {QuizScore4 >= 0 && QuizScore4 < 3 ? (
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
                                    <h4>اجابتك : {SelectedAnswer4[Qindex]} </h4>
                                    {
                                    SelectedAnswer4[Qindex]!==question.answer ? (
                                        <h4>اجابتك خاطئة ❌</h4>
                                    ) : null
                                    
                                   }
                                     {
                                    SelectedAnswer4[Qindex]===question.answer ? (
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
