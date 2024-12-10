import { includes, toArray, toString } from 'lodash';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import video1 from "../Videos/1-الدرس الاول الوحدةالاولى/L1.mp4"

export default function Quiz1() {
    const questions = [
        {
            "id": 1,
            "question": "تقع أراضي الوطن العربي في قارتين هما:",
            "options": [
                "آسيا وأوروبا",
                "آسيا وأفريقيا",
                "أفريقيا وأوروبا",
                "آسيا وأمريكا"
            ],
            "answer": "آسيا وأفريقيا",
            "desc": "يمتد الوطن العربي على قارتين فقط هما آسيا وأفريقيا، ولا يشمل أوروبا أو أمريكا."
        },
        {
            "id": 2,
            "question": "يطل الوطن العربي من جهة الغرب على:",
            "options": [
                "المحيط الأطلسي",
                "البحر الأحمر",
                "المحيط الهندي",
                "البحر المتوسط"
            ],
            "answer": "المحيط الأطلسي",
            "desc": "المحيط الأطلسي يحد الوطن العربي غربًا، بينما المحيط الهندي يحده جنوبًا."
        },
        {
            "id": 3,
            "question": "البحرين تُعتبر:",
            "options": [
                "أكبر دولة عربية من حيث المساحة",
                "أصغر دولة عربية من حيث المساحة",
                "دولة في الجناح الأفريقي",
                "غير عربية"
            ],
            "answer": "أصغر دولة عربية من حيث المساحة",
            "desc": "البحرين هي أصغر دولة عربية وتقع في الجناح الآسيوي."
        },
        {
            "id": 4,
            "question": "تبلغ مساحة الوطن العربي:",
            "options": [
                "13 مليون كم²",
                "10 مليون كم²",
                "15 مليون كم²",
                "12 مليون كم²"
            ],
            "answer": "13 مليون كم²",
            "desc": "مساحة الوطن العربي تبلغ حوالي 13 مليون كيلومتر مربع."
        },
        {
            "id": 5,
            "question": "يضم الوطن العربي أماكن مقدسة منها:",
            "options": [
                "الأزهر الشريف",
                "برج خليفة",
                "الأهرامات",
                "البحر الميت"
            ],
            "answer": "الأزهر الشريف",
            "desc": "الأزهر الشريف في مصر يعد أحد أهم الأماكن المقدسة في الوطن العربي."
        },
        {
            "id": 6,
            "question": "يتحكم الوطن العربي في مضائق مهمة مثل:",
            "options": [
                "مضيق البوسفور",
                "مضيق باب المندب",
                "مضيق جبل طارق",
                "ب + ج"
            ],
            "answer": "ب + ج",
            "desc": "الوطن العربي يتحكم في مضائق استراتيجية، مثل باب المندب الذي يربط البحر الأحمر بالمحيط الهندي، وجبل طارق الذي يربط البحر المتوسط بالمحيط الأطلسي."
        },
        {
            "id": 7,
            "question": "أكبر دولة عربية من حيث المساحة هي:",
            "options": [
                "السعودية",
                "الجزائر",
                "السودان",
                "مصر"
            ],
            "answer": "الجزائر",
            "desc": "الجزائر هي الدولة العربية الأكبر مساحة، وتقع في الجناح الأفريقي."
        },
        {
            "id": 8,
            "question": "عدد الدول العربية هو:",
            "options": [
                "21 دولة",
                "22 دولة",
                "20 دولة",
                "25 دولة"
            ],
            "answer": "22 دولة",
            "desc": "يبلغ عدد الدول العربية 22 دولة موزعة بين قارتين: آسيا وأفريقيا."
        },
        {
            "id": 9,
            "question": "من الدول التي تقع في الجناح الآسيوي:",
            "options": [
                "السودان",
                "العراق",
                "جيبوتي",
                "الجزائر"
            ],
            "answer": "العراق",
            "desc": "العراق تقع في الجناح الآسيوي، بينما السودان وجيبوتي والجزائر تقع في الجناح الأفريقي."
        },
        {
            "id": 10,
            "question": "تُعتبر جبال زاجروس جزءًا من حدود الوطن العربي من جهة:",
            "options": [
                "الغرب",
                "الجنوب",
                "الشرق",
                "الشمال"
            ],
            "answer": "الشرق",
            "desc": "جبال زاجروس تُعتبر جزءًا من الحدود الشرقية للوطن العربي."
        },
        {
            "id": 11,
            "question": "من الخصائص الثقافية المشتركة بين الدول العربية:",
            "options": [
                "اللغات المتعددة",
                "اللغة العربية والدين الإسلامي",
                "الاستقلال السياسي",
                "تنوع التضاريس"
            ],
            "answer": "اللغة العربية والدين الإسلامي",
            "desc": "اللغة العربية والدين الإسلامي هما العاملان الأساسيان اللذان يجمعان الدول العربية."
        },
        {
            "id": 12,
            "question": "تتمثل الأهمية الاقتصادية لموقع الوطن العربي في:",
            "options": [
                "التحكم بالممرات البحرية",
                "وجود الجبال العالية",
                "كثرة الصحراء",
                "التوسع العمراني"
            ],
            "answer": "التحكم بالممرات البحرية",
            "desc": "موقع الوطن العربي الاستراتيجي يجعله يتحكم بممرات بحرية هامة، مثل قناة السويس ومضيق هرمز."
        },
        {
            "id": 13,
            "question": "من دول الجناح الأفريقي:",
            "options": [
                "اليمن",
                "جيبوتي",
                "سوريا",
                "لبنان"
            ],
            "answer": "جيبوتي",
            "desc": "جيبوتي تقع في الجناح الأفريقي، بينما اليمن وسوريا ولبنان في الجناح الآسيوي."
        },
        {
            "id": 14,
            "question": "يُعتبر مضيق هرمز ممرًا بحريًا هامًا لأنه:",
            "options": [
                "يقع بين آسيا وأوروبا",
                "يتحكم في التجارة العالمية",
                "يربط البحر الأحمر بالمتوسط",
                "يحتوي على موارد طبيعية"
            ],
            "answer": "يتحكم في التجارة العالمية",
            "desc": "مضيق هرمز يُعد ممرًا استراتيجيًا لنقل النفط والتجارة العالمية."
        },
        {
            "id": 15,
            "question": "من النتائج المترتبة على التحكم في الممرات البحرية:",
            "options": [
                "زيادة الصراعات",
                "التحكم في التجارة العالمية",
                "انخفاض النمو الاقتصادي",
                "انقطاع الطرق الدولية"
            ],
            "answer": "التحكم في التجارة العالمية",
            "desc": "بفضل موقعه الاستراتيجي، يُسيطر الوطن العربي على حركة التجارة العالمية المارة عبر ممراته البحرية."
        }
    ];
  
    

    const [SelectedAnswer, setSelectedAnswer] = useState([]);
    const [QuizSubmitted, setQuizSubmitted] = useState(false);
    const [QuizScore, setQuizScore] = useState(0);
    const [Message , setMessage] = useState('')

    useEffect(() => {
        const storedScore = localStorage.getItem('QuizScore');
        const storedAnswers = localStorage.getItem('SelectedAnswer');
        const storedMessage = localStorage.getItem('SelectedMessage');

        if (storedScore) {
            setQuizScore(parseInt(storedScore));
            setQuizSubmitted(true);
        }

        if (storedAnswers) {
           
                setSelectedAnswer(JSON.parse(storedAnswers));
            
        }
       
    }, []);

    const AnswerSelection = (questionIndex, answer) => {
        const updatedAnswers = [...SelectedAnswer];
        updatedAnswers[questionIndex] = answer;
        setSelectedAnswer(updatedAnswers);

        
        
    };
    const CommpleteMessage= "لم يتم اختيار جميع الاجابات من فضلك اجب علي جميع الاسئلة"
    const SubmitQuiz = (event) => {
        event.preventDefault();
        
        let score = 0;
        console.log(SelectedAnswer);


        questions.forEach((question, index) => {
            if (SelectedAnswer[index] === question.answer) {
                score++;
            }
        });

        setQuizScore(score);
        if (SelectedAnswer.includes(undefined)) {
            setQuizSubmitted(false);
            setMessage(CommpleteMessage)
          }
          
          if (!SelectedAnswer.includes(undefined)) {
            localStorage.setItem('QuizScore', score.toString());
            setQuizSubmitted(true);
         window.scrollTo(0, 700);

          }

        const sanitizedAnswers = SelectedAnswer.map(answer => {
            if (typeof answer === "string") {
                return answer.trim();
            }
            return answer;
        });



        localStorage.setItem('SelectedAnswer', JSON.stringify(sanitizedAnswers));
        localStorage.setItem('SelectedMessage' , CommpleteMessage)
        console.log(SelectedAnswer)

    };
    const resetQuiz = () => {
        setSelectedAnswer([]);
        setQuizScore(0);
        setQuizSubmitted(false);
        localStorage.removeItem('SelectedMessage');
        localStorage.removeItem('QuizScore');
        localStorage.removeItem('SelectedAnswer');
    };
    let percentColor = '';
    const percent = (QuizScore * 100) / questions.length;
    if (percent >= 50) {
        percentColor = '#11C27C';
    } else if (percent < 50) {
        percentColor = '#E20D47';
    }
    return (
        <div className="quiz">
           <video src={video1} className="video" controls></video>
            {!QuizSubmitted && ( 
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
                                        checked={SelectedAnswer[questionIndex] === option} 
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
               <h3>{Message}</h3>
                    <button type="submit" className='submit'>انهاء الاختبار</button>
                </form>
            )}

            {QuizSubmitted && (
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
                    <h2>النتيجة: {QuizScore} / {questions.length}</h2>

                    {QuizScore >= 9 && QuizScore <= 10 ? (
                        <div className="comment">
                            <p>مبروك! إجاباتك كانت دقيقة جدًا، وأنت تظهر مستوى عميقًا من الفهم. عمل رائع!</p>
                            <p>نصيحة للمستقبل: حافظ على هذا الأداء الرائع. من الممكن أن تحدي نفسك بمزيد من الأسئلة الأكثر تعقيدًا لتحافظ على مستوى تقدمك.</p>
                        </div>
                    ) : null}

                    {QuizScore >= 7 && QuizScore < 9 ? (
                        <div className="comments">
                            <p>أداء جيد جدًا! لديك فهم جيد للموضوع وأجبت على معظم الأسئلة بشكل صحيح. فقط تحتاج إلى التركيز أكثر في بعض الجوانب.</p>
                            <p>نصيحة للمستقبل: حاول مراجعة الأخطاء الصغيرة في إجاباتك. التركيز على التفاصيل قد يساعدك في الوصول إلى درجة أعلى.</p>
                        </div>
                    ) : null}

                    {QuizScore >= 5 && QuizScore < 7 ? (
                        <div className="comments">
                            <p>أداء جيد، ولكن هناك بعض النقاط التي تحتاج إلى تحسين. لم تكن جميع الإجابات صحيحة، ولكن لديك قاعدة جيدة.</p>
                            <p>نصيحة للمستقبل: ركز على المواضيع التي لم تجب عنها بشكل صحيح. حاول التعمق في فهم هذه النقاط بشكل أفضل من خلال المزيد من المراجعة والتدريب.</p>
                        </div>
                    ) : null}

                    {QuizScore >= 3 && QuizScore < 5 ? (
                        <div className="comments">
                            <p>الأداء جيد لكن يحتاج إلى تحسين. لديك بعض الأخطاء الكبيرة التي تؤثر على النتيجة النهائية.</p>
                            <p>نصيحة للمستقبل: أعد مراجعة المواد التي واجهت صعوبة فيها. من المفيد أن تلخص النقاط الرئيسية وتطلب المساعدة في النقاط الغامضة.</p>
                        </div>
                    ) : null}

                    {QuizScore >= 0 && QuizScore < 3 ? (
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
                                    <h4>اجابتك : {SelectedAnswer[Qindex]} </h4>
                                    {
                                    SelectedAnswer[Qindex]!==question.answer ? (
                                        <h4>اجابتك خاطئة ❌</h4>
                                    ) : null
                                    
                                   }
                                     {
                                    SelectedAnswer[Qindex]===question.answer ? (
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
