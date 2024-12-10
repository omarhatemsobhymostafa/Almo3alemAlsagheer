import { includes, toArray, toString } from 'lodash';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import video5 from "../Videos/5-الدرس الاول الوحدة التانية/L5.mp4"

export default function Quiz5() {
    const questions =[
        {
          "id": 1,
          "question": "ما هو أعلى جبل في الوطن العربي؟",
          "options": ["جبل توبقال", "جبل الأردن", "جبل سينا", "جبل لبنان"],
          "answer": "جبل توبقال",
          "desc": "جبل توبقال في المغرب هو أعلى جبل في الوطن العربي بارتفاع 4167 مترًا فوق سطح البحر."
        }, 
        {
          "id": 2,
          "question": "أين تقع أدنى نقطة في الوطن العربي؟",
          "options": ["البحر الأحمر", "البحر الميت", "البحر المتوسط", "الخليج العربي"],
          "answer": "البحر الميت",
          "desc": "البحر الميت يقع في الأردن وفلسطين، وهو أدنى نقطة في الوطن العربي حيث يقع على عمق 232 مترًا تحت سطح البحر."
        },
        {
          "id": 3,
          "question": "أي من الجبال التالية هو جبل إلتوائي في الوطن العربي؟",
          "options": ["جبال البحر الأحمر", "جبال أطمس", "جبال البحر المتوسط", "جبال زاجروس"],
          "answer": "جبال أطمس",
          "desc": "جبال أطمس هي من الجبال الإلتوائية في المغرب، حيث تشكلت نتيجة حركات باطنية في قشرة الأرض."
        },
        {
          "id": 4,
          "question": "أين توجد واحة سيوة؟",
          "options": ["في مصر", "في ليبيا", "في الجزائر", "في السعودية"],
          "answer": "في مصر",
          "desc": "واحة سيوة هي واحدة من أشهر الواحات في مصر، وتقع في الصحراء الغربية بالقرب من الحدود مع ليبيا."
        },
        {
          "id": 5,
          "question": "أي من الظواهر التالية تكونت بسبب التعرية المائية؟",
          "options": ["الأودية الجافة", "الجبال الإلتوائية", "السهول الساحلية", "السهول الفيضية"],
          "answer": "الأودية الجافة",
          "desc": "الأودية الجافة تتكون نتيجة للتعرية المائية التي تؤثر على الأرض، على الرغم من أنها لا تحتوي على مياه دائمة."
        },
        {
          "id": 6,
          "question": "ما هو أكبر التضاريس المساحة في الجناح الأفريقي للوطن العربي؟",
          "options": ["جبال البحر الأحمر", "الهضبة الإفريقية الشمالية", "الهضبة العربية", "سلاسل جبال الحجاز"],
          "answer": "الهضبة الإفريقية الشمالية",
          "desc": "الهضبة الإفريقية الشمالية هي أكبر ظاهرة تضاريسية في الجناح الأفريقي للوطن العربي، تمتد من البحر الأحمر شرقًا إلى المحيط الأطلسي غربًا."
        },
        {
          "id": 7,
          "question": "أي من الجبال التالية يتكون نتيجة لحركات انكسارية؟",
          "options": ["جبال أطمس", "جبال البحر الأحمر", "جبال كردستان", "جبال لبنان"],
          "answer": "جبال البحر الأحمر",
          "desc": "جبال البحر الأحمر تتكون نتيجة لحركات انكسارية في قشرة الأرض."
        },
        {
          "id": 8,
          "question": "أي من السيول التالية تتميز بكثرة الأمطار الشتوية؟",
          "options": ["السيول الفيضية", "السيول الساحلية", "السيول الجافة", "السيول في وادي النيل"],
          "answer": "السيول الساحلية",
          "desc": "السيول الساحلية تتميز بكثرة الأمطار الشتوية، مما يساهم في فيضان الأنهار المجاورة."
        },
        {
          "id": 9,
          "question": "ما هي أسباب تكوين السيول الفيضية؟",
          "options": ["الأمطار الصيفية", "الرياح الصحراوية", "ترسيب المواد العالقة بالمياه", "التعرية المائية"],
          "answer": "ترسيب المواد العالقة بالمياه",
          "desc": "السيول الفيضية تتكون بسبب الأمطار الغزيرة التي تترسب خلالها المواد العالقة بالمياه، مما يؤدي إلى تكوين الأنهار الطميية."
        },
        {
          "id": 10,
          "question": "أي من الأودية التالية يتم استخدامه كطرق مواصلات؟",
          "options": ["وادي الجرير", "وادي النيل", "وادي النيل الأبيض", "وادي النيل الأزرق"],
          "answer": "وادي النيل",
          "desc": "وادي النيل يُستخدم كطريق مواصلات رئيسي بين مصر والسودان، ويعتبر من الأودية الهامة في المنطقة."
        },
        {
          "id": 11,
          "question": "البحر الميت هو أعلى نقطة في الوطن العربي.",
          "options": ["صح", "خطأ"],
          "answer": "خطأ",
          "desc": "البحر الميت هو أدنى نقطة في الوطن العربي، حيث يقع على عمق 232 مترًا تحت سطح البحر."
        },
        {
          "id": 12,
          "question": "الجبال الإلتوائية تتكون نتيجة لحركات باطنية في قشرة الأرض.",
          "options": ["صح", "خطأ"],
          "answer": "صح",
          "desc": "الجبال الإلتوائية تتكون نتيجة لضغط الأرض وحركاتها الباطنية التي تؤدي إلى انثناءات في قشرة الأرض."
        },
        {
          "id": 13,
          "question": "الأودية الجافة تتكون بسبب الأمطار الغزيرة.",
          "options": ["صح", "خطأ"],
          "answer": "خطأ",
          "desc": "الأودية الجافة تتكون نتيجة للتعرية المائية، لكنها لا تحتوي على مياه دائمة، وتكون جافة معظم الوقت."
        },
        {
          "id": 14,
          "question": "السيول الساحلية في البحر الأحمر تتميز بالثروات المعدنية مثل الحديد والنحاس.",
          "options": ["صح", "خطأ"],
          "answer": "صح",
          "desc": "السيول في البحر الأحمر تتميز بوجود الثروات المعدنية مثل الحديد والنحاس، بالإضافة إلى وجود مصادر الطاقة مثل النفط."
        },
        {
          "id": 15,
          "question": "الهضبة الإفريقية الشمالية تمتد من البحر الأحمر إلى المحيط الأطلسي.",
          "options": ["صح", "خطأ"],
          "answer": "صح",
          "desc": "الهضبة الإفريقية الشمالية تمتد بين البحر الأحمر شرقًا والمحيط الأطلسي غربًا."
        }
      ]
      

    const [SelectedAnswer5, setSelectedAnswer5] = useState([]);
    const [QuizSubmitted5, setQuizSubmitted5] = useState(false);
    const [QuizScore5, setQuizScore5] = useState(0);
    const [Message5 , setMessage5] = useState('')

    useEffect(() => {
        const storedScore = localStorage.getItem('QuizScore5');
        const storedAnswers = localStorage.getItem('SelectedAnswer5');
        const storedMessage5 = localStorage.getItem('SelectedMessage5');

        if (storedScore) {
            setQuizScore5(parseInt(storedScore));
            setQuizSubmitted5(true);
        }

        if (storedAnswers) {
           
                setSelectedAnswer5(JSON.parse(storedAnswers));
            
        }
  
    }, []);

    const AnswerSelection = (questionIndex, answer) => {
        const updatedAnswers = [...SelectedAnswer5];
        updatedAnswers[questionIndex] = answer;
        setSelectedAnswer5(updatedAnswers);

        
        
    };
    const CommpleteMessage5= "لم يتم اختيار جميع الاجابات من فضلك اجب علي جميع الاسئلة"
    const SubmitQuiz = (event) => {
        event.preventDefault();
        
        let score = 0;
        console.log(SelectedAnswer5);


        questions.forEach((question, index) => {
            if (SelectedAnswer5[index] === question.answer) {
                score++;
            }
        });

        setQuizScore5(score);
        if (SelectedAnswer5.includes(undefined)) {
            setQuizSubmitted5(false);
            setMessage5(CommpleteMessage5)
          }
          
          if (!SelectedAnswer5.includes(undefined)) {
            localStorage.setItem('QuizScore5', score.toString());
            setQuizSubmitted5(true);
         window.scrollTo(0, 700);

          }

        const sanitizedAnswers = SelectedAnswer5.map(answer => {
            if (typeof answer === "string") {
                return answer.trim();
            }
            return answer;
        });



        localStorage.setItem('SelectedAnswer5', JSON.stringify(sanitizedAnswers));
        localStorage.setItem('SelectedMessage5' , CommpleteMessage5)
        console.log(SelectedAnswer5)

    };
    const resetQuiz = () => {
        setSelectedAnswer5([]);
        setQuizScore5(0);
        setQuizSubmitted5(false);

        localStorage.removeItem('QuizScore5');
        localStorage.removeItem('SelectedAnswer5');
    };
    let percentColor = '';
    const percent = (QuizScore5 * 100) / questions.length;
    if (percent >= 50) {
        percentColor = '#11C27C';
    } else if (percent < 50) {
        percentColor = '#E20D47';
    }
    return (
        <div className="quiz">
           <video src={video5} className="video" controls></video>
            {!QuizSubmitted5 && ( 
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
                                        checked={SelectedAnswer5[questionIndex] === option} 
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
               <h3>{Message5}</h3>
                    <button type="submit" className='submit'>انهاء الاختبار</button>
                </form>
            )}

            {QuizSubmitted5 && (
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
                    <h2>النتيجة: {QuizScore5} / {questions.length}</h2>

                    {QuizScore5 >= 9 && QuizScore5 <= 10 ? (
                        <div className="comment">
                            <p>مبروك! إجاباتك كانت دقيقة جدًا، وأنت تظهر مستوى عميقًا من الفهم. عمل رائع!</p>
                            <p>نصيحة للمستقبل: حافظ على هذا الأداء الرائع. من الممكن أن تحدي نفسك بمزيد من الأسئلة الأكثر تعقيدًا لتحافظ على مستوى تقدمك.</p>
                        </div>
                    ) : null}

                    {QuizScore5 >= 7 && QuizScore5 < 9 ? (
                        <div className="comments">
                            <p>أداء جيد جدًا! لديك فهم جيد للموضوع وأجبت على معظم الأسئلة بشكل صحيح. فقط تحتاج إلى التركيز أكثر في بعض الجوانب.</p>
                            <p>نصيحة للمستقبل: حاول مراجعة الأخطاء الصغيرة في إجاباتك. التركيز على التفاصيل قد يساعدك في الوصول إلى درجة أعلى.</p>
                        </div>
                    ) : null}

                    {QuizScore5 >= 5 && QuizScore5 < 7 ? (
                        <div className="comments">
                            <p>أداء جيد، ولكن هناك بعض النقاط التي تحتاج إلى تحسين. لم تكن جميع الإجابات صحيحة، ولكن لديك قاعدة جيدة.</p>
                            <p>نصيحة للمستقبل: ركز على المواضيع التي لم تجب عنها بشكل صحيح. حاول التعمق في فهم هذه النقاط بشكل أفضل من خلال المزيد من المراجعة والتدريب.</p>
                        </div>
                    ) : null}

                    {QuizScore5 >= 3 && QuizScore5 < 5 ? (
                        <div className="comments">
                            <p>الأداء جيد لكن يحتاج إلى تحسين. لديك بعض الأخطاء الكبيرة التي تؤثر على النتيجة النهائية.</p>
                            <p>نصيحة للمستقبل: أعد مراجعة المواد التي واجهت صعوبة فيها. من المفيد أن تلخص النقاط الرئيسية وتطلب المساعدة في النقاط الغامضة.</p>
                        </div>
                    ) : null}

                    {QuizScore5 >= 0 && QuizScore5 < 3 ? (
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
                                    <h4>اجابتك : {SelectedAnswer5[Qindex]} </h4>
                                    {
                                    SelectedAnswer5[Qindex]!==question.answer ? (
                                        <h4>اجابتك خاطئة ❌</h4>
                                    ) : null
                                    
                                   }
                                     {
                                    SelectedAnswer5[Qindex]===question.answer ? (
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
