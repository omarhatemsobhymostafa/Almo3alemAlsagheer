import { includes, toArray, toString } from 'lodash';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import video7 from "../Videos/7-الدرس الثالث الوحدة الثانية/7-الدرس الثالث الوحدة الثانية.mp4"

export default function Quiz7() {
    const questions = [
        {
            id: 1,
            question: "ما هو المناخ الذي يتميز بتساقط الأمطار في فصل الشتاء؟",
            options: [
                "الإقليم المداري",
                "الإقليم الصحراوي",
                "الإقليم البحر الأبيض المتوسط",
                "الإقليم الاستوائي"
            ],
            answer: "الإقليم البحر الأبيض المتوسط",
            desc: "الإقليم البحر الأبيض المتوسط يتميز بمناخ جاف وحار في الصيف، ودافئ ممطر في الشتاء."
        },
        {
            id: 2,
            question: "أي من الأقاليم المناخية في الوطن العربي يتسم بحرارة شديدة في الصيف قد تصل إلى 50°C؟",
            options: [
                "الإقليم المداري",
                "الإقليم الصحراوي",
                "الإقليم البحر الأبيض المتوسط",
                "الإقليم الاستوائي"
            ],
            answer: "الإقليم الصحراوي",
            desc: "الإقليم الصحراوي يتميز بدرجات حرارة مرتفعة للغاية في الصيف قد تصل إلى 50 درجة مئوية أو أكثر."
        },
        {
            id: 3,
            question: "أي من النباتات التالية ينمو في الإقليم الصحراوي؟",
            options: [
                "الزيتون",
                "الصبار",
                "الأرز",
                "الأرز"
            ],
            answer: "الصبار",
            desc: "الصبار هو نبات يتحمل الظروف القاسية والجفاف في الإقليم الصحراوي."
        },
        {
            id: 4,
            question: "أين ينمو نبات الزيتون بشكل رئيسي في الوطن العربي؟",
            options: [
                "في الإقليم المداري",
                "في الإقليم الصحراوي",
                "في الإقليم البحر الأبيض المتوسط",
                "في الإقليم الاستوائي"
            ],
            answer: "في الإقليم البحر الأبيض المتوسط",
            desc: "الزيتون ينمو بشكل رئيسي في مناطق ذات مناخ البحر الأبيض المتوسط الذي يتسم بالصيف الجاف والشتاء الممطر."
        },
        {
            id: 5,
            question: "أي من الأقاليم المناخية في الوطن العربي يميز مناخًا حارًا وجافًا طوال العام؟",
            options: [
                "الإقليم المداري",
                "الإقليم الصحراوي",
                "الإقليم البحر الأبيض المتوسط",
                "الإقليم الاستوائي"
            ],
            answer: "الإقليم الصحراوي",
            desc: "الإقليم الصحراوي يشهد مناخًا حارًا وجافًا طوال العام مع برودة شديدة في الشتاء وحرارة شديدة في الصيف."
        },
        {
            id: 6,
            question: "أي من الحيوانات التالية تعيش في الإقليم الصحراوي؟",
            options: [
                "الزرافة",
                "النمر",
                "الثعلب الصحراوي",
                "الفيل"
            ],
            answer: "الثعلب الصحراوي",
            desc: "الثعلب الصحراوي هو من الحيوانات المتكيفة مع البيئة الصحراوية التي تتحمل درجات الحرارة المرتفعة."
        },
        {
            id: 7,
            question: "أي من المحميات الطبيعية توجد في لبنان؟",
            options: [
                "محمية جبل علبة",
                "محمية أرز الشوف",
                "محمية ضانا",
                "محمية النقب"
            ],
            answer: "محمية أرز الشوف",
            desc: "محمية أرز الشوف هي من أبرز المحميات الطبيعية في لبنان التي تهدف إلى حماية أشجار الأرز."
        },
        {
            id: 8,
            question: "ما هو المناخ السائد في الإقليم المداري؟",
            options: [
                "حار جاف",
                "معتدل ممطر",
                "حار ممطر",
                "بارد شتاءً"
            ],
            answer: "حار ممطر",
            desc: "الإقليم المداري يتميز بمناخ حار ممطر في الصيف مع موسم جاف في الشتاء."
        },
        {
            id: 9,
            question: "أي من الأقاليم المناخية في الوطن العربي يشمل مناطق مثل اليمن والصومال؟",
            options: [
                "الإقليم المداري",
                "الإقليم الصحراوي",
                "الإقليم البحر الأبيض المتوسط",
                "الإقليم الاستوائي"
            ],
            answer: "الإقليم المداري",
            desc: "الإقليم المداري يشمل مناطق تقع في جنوب الوطن العربي مثل اليمن والصومال."
        },
        {
            id: 10,
            question: "أي من النباتات التالية ينمو في الإقليم المداري؟",
            options: [
                "الزيتون",
                "الصبار",
                "حشائش السافانا",
                "الأرز"
            ],
            answer: "حشائش السافانا",
            desc: "حشائش السافانا تنمو في الإقليم المداري حيث يتوفر المناخ الحار والممطر."
        },
        {
            id: 11,
            question: "ما هي أهمية المحميات الطبيعية في الوطن العربي؟",
            options: [
                "حماية الأنواع المهددة بالانقراض",
                "تعزيز الأنشطة السياحية",
                "الحفاظ على التنوع البيولوجي",
                "جميع ما ذكر"
            ],
            answer: "جميع ما ذكر",
            desc: "المحميات الطبيعية تلعب دورًا في حماية الحياة البرية، تعزيز السياحة البيئية، والحفاظ على التنوع البيولوجي."
        },
        {
            id: 12,
            question: "أي من الأقاليم المناخية في الوطن العربي يتسم بمناخ جاف وحار في الصيف ودافئ ممطر في الشتاء؟",
            options: [
                "الإقليم الصحراوي",
                "الإقليم البحر الأبيض المتوسط",
                "الإقليم المداري",
                "الإقليم الاستوائي"
            ],
            answer: "الإقليم البحر الأبيض المتوسط",
            desc: "الإقليم البحر الأبيض المتوسط يتميز بمناخ جاف وحار في الصيف، ودافئ ممطر في الشتاء."
        },
        {
            id: 13,
            question: "أين يوجد الإقليم الصحراوي في الوطن العربي؟",
            options: [
                "في شمال غرب الوطن العربي",
                "في جنوب شرق الوطن العربي",
                "في جنوب الوطن العربي",
                "في جميع أنحاء الوطن العربي"
            ],
            answer: "في جميع أنحاء الوطن العربي",
            desc: "الإقليم الصحراوي يمتد عبر معظم أنحاء الوطن العربي، بما في ذلك الصحراء الكبرى والصحراء العربية."
        },
        {
            id: 14,
            question: "أي من المحميات الطبيعية تقع في الأردن؟",
            options: [
                "محمية جبل علبة",
                "محمية ضانا",
                "محمية النقب",
                "محمية أرز الشوف"
            ],
            answer: "محمية ضانا",
            desc: "محمية ضانا في الأردن تعتبر من أبرز المحميات الطبيعية في المنطقة."
        },
        {
            id: 15,
            question: "أي من الأشجار التالية تنمو في الإقليم البحر الأبيض المتوسط؟",
            options: [
                "أشجار الأرز",
                "أشجار النخيل",
                "أشجار السافانا",
                "أشجار الصبار"
            ],
            answer: "أشجار الأرز",
            desc: "أشجار الأرز هي واحدة من الأشجار التي تنمو بشكل رئيسي في الإقليم البحر الأبيض المتوسط."
        }
    ];
    
    

    const [SelectedAnswer7, setSelectedAnswer7] = useState([]);
    const [QuizSubmitted7, setQuizSubmitted7] = useState(false);
    const [QuizScore7, setQuizScore7] = useState(0);
    const [Message7 , setMessage7] = useState('')

    useEffect(() => {
        const storedScore = localStorage.getItem('QuizScore7');
        const storedAnswers = localStorage.getItem('SelectedAnswer7');
        const storedMessage7 = localStorage.getItem('SelectedMessage7');

        if (storedScore) {
            setQuizScore7(parseInt(storedScore));
            setQuizSubmitted7(true);
        }

        if (storedAnswers) {
           
                setSelectedAnswer7(JSON.parse(storedAnswers));
            
        }
  
    }, []);

    const AnswerSelection = (questionIndex, answer) => {
        const updatedAnswers = [...SelectedAnswer7];
        updatedAnswers[questionIndex] = answer;
        setSelectedAnswer7(updatedAnswers);

        
        
    };
    const CommpleteMessage7= "لم يتم اختيار جميع الاجابات من فضلك اجب علي جميع الاسئلة"
    const SubmitQuiz = (event) => {
        event.preventDefault();
        
        let score = 0;
        console.log(SelectedAnswer7);


        questions.forEach((question, index) => {
            if (SelectedAnswer7[index] === question.answer) {
                score++;
            }
        });

        setQuizScore7(score);
        if (SelectedAnswer7.includes(undefined)) {
            setQuizSubmitted7(false);
            setMessage7(CommpleteMessage7)
          }
          
          if (!SelectedAnswer7.includes(undefined)) {
            localStorage.setItem('QuizScore7', score.toString());
            setQuizSubmitted7(true);
         window.scrollTo(0, 700);

          }

        const sanitizedAnswers = SelectedAnswer7.map(answer => {
            if (typeof answer === "string") {
                return answer.trim();
            }
            return answer;
        });



        localStorage.setItem('SelectedAnswer7', JSON.stringify(sanitizedAnswers));
        localStorage.setItem('SelectedMessage7' , CommpleteMessage7)
        console.log(SelectedAnswer7)

    };
    const resetQuiz = () => {
        setSelectedAnswer7([]);
        setQuizScore7(0);
        setQuizSubmitted7(false);

        localStorage.removeItem('QuizScore7');
        localStorage.removeItem('SelectedAnswer7');
    };
    let percentColor = '';
    const percent = (QuizScore7 * 100) / questions.length;
    if (percent >= 50) {
        percentColor = '#11C27C';
    } else if (percent < 50) {
        percentColor = '#E20D47';
    }
    return (
        <div className="quiz">
           <video src={video7} className="video" controls></video>
            {!QuizSubmitted7 && ( 
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
                                        checked={SelectedAnswer7[questionIndex] === option} 
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
               <h3>{Message7}</h3>
                    <button type="submit" className='submit'>انهاء الاختبار</button>
                </form>
            )}

            {QuizSubmitted7 && (
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
                    <h2>النتيجة: {QuizScore7} / {questions.length}</h2>

                    {QuizScore7 >= 9 && QuizScore7 <= 10 ? (
                        <div className="comment">
                            <p>مبروك! إجاباتك كانت دقيقة جدًا، وأنت تظهر مستوى عميقًا من الفهم. عمل رائع!</p>
                            <p>نصيحة للمستقبل: حافظ على هذا الأداء الرائع. من الممكن أن تحدي نفسك بمزيد من الأسئلة الأكثر تعقيدًا لتحافظ على مستوى تقدمك.</p>
                        </div>
                    ) : null}

                    {QuizScore7 >= 7 && QuizScore7 < 9 ? (
                        <div className="comments">
                            <p>أداء جيد جدًا! لديك فهم جيد للموضوع وأجبت على معظم الأسئلة بشكل صحيح. فقط تحتاج إلى التركيز أكثر في بعض الجوانب.</p>
                            <p>نصيحة للمستقبل: حاول مراجعة الأخطاء الصغيرة في إجاباتك. التركيز على التفاصيل قد يساعدك في الوصول إلى درجة أعلى.</p>
                        </div>
                    ) : null}

                    {QuizScore7 >= 5 && QuizScore7 < 7 ? (
                        <div className="comments">
                            <p>أداء جيد، ولكن هناك بعض النقاط التي تحتاج إلى تحسين. لم تكن جميع الإجابات صحيحة، ولكن لديك قاعدة جيدة.</p>
                            <p>نصيحة للمستقبل: ركز على المواضيع التي لم تجب عنها بشكل صحيح. حاول التعمق في فهم هذه النقاط بشكل أفضل من خلال المزيد من المراجعة والتدريب.</p>
                        </div>
                    ) : null}

                    {QuizScore7 >= 3 && QuizScore7 < 5 ? (
                        <div className="comments">
                            <p>الأداء جيد لكن يحتاج إلى تحسين. لديك بعض الأخطاء الكبيرة التي تؤثر على النتيجة النهائية.</p>
                            <p>نصيحة للمستقبل: أعد مراجعة المواد التي واجهت صعوبة فيها. من المفيد أن تلخص النقاط الرئيسية وتطلب المساعدة في النقاط الغامضة.</p>
                        </div>
                    ) : null}

                    {QuizScore7 >= 0 && QuizScore7 < 3 ? (
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
                                    <h4>اجابتك : {SelectedAnswer7[Qindex]} </h4>
                                    {
                                    SelectedAnswer7[Qindex]!==question.answer ? (
                                        <h4>اجابتك خاطئة ❌</h4>
                                    ) : null
                                    
                                   }
                                     {
                                    SelectedAnswer7[Qindex]===question.answer ? (
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
