import { includes, toArray, toString } from 'lodash';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import video8 from "../Videos/8-الدرس الرابع الوحدة التانية/L8.mp4"

export default function Quiz8() {
    const questions = [
        {
            id: 1,
            question: "ما هي أهم أسباب ظاهرة الجفاف في الوطن العربي؟",
            options: [
                "زيادة الأمطار",
                "ارتفاع درجات الحرارة",
                "نقص المياه الجوفية",
                "زيادة المساحات الخضراء"
            ],
            answer: "ارتفاع درجات الحرارة",
            desc: "التغيرات المناخية، وارتفاع درجات الحرارة، هما العاملان الرئيسيان في زيادة معدلات الجفاف في الوطن العربي."
        },
        {
            id: 2,
            question: "ما هو التصحر؟",
            options: [
                "نقص الأمطار فقط",
                "تدهور الأراضي الزراعية",
                "زيادة نمو الغابات",
                "ازدياد درجة الحرارة"
            ],
            answer: "تدهور الأراضي الزراعية",
            desc: "التصحر يعني تدهور الأراضي الزراعية، مما يؤدي إلى فقدان القدرة على الإنتاج الزراعي بسبب عدة عوامل منها الجفاف والإفراط في استخدام المياه."
        },
        {
            id: 3,
            question: "أي من هذه الدول العربية يعاني بشكل رئيسي من نقص المياه العذبة؟",
            options: [
                "مصر",
                "السودان",
                "العراق",
                "البحرين"
            ],
            answer: "البحرين",
            desc: "البحرين هي واحدة من الدول التي تعاني من نقص المياه العذبة بسبب جغرافيا المنطقة واعتمادها على تحلية المياه."
        },
        {
            id: 4,
            question: "ما هي إحدى حلول التصحر في الوطن العربي؟",
            options: [
                "زيادة التوسع العمراني",
                "بناء سدود لتخزين المياه",
                "الإفراط في استخدام الأسمدة",
                "تشجير المناطق الصحراوية"
            ],
            answer: "تشجير المناطق الصحراوية",
            desc: "التشجير يساعد في الحد من التصحر من خلال تقليل تأثير الرياح وحفظ التربة."
        },
        {
            id: 5,
            question: "أي من هذه المشاريع البيئية تم إطلاقه في المملكة العربية السعودية؟",
            options: [
                "مدينة نيوم",
                "مدينة العين",
                "مدينة الكويت",
                "مدينة الدوحة"
            ],
            answer: "مدينة نيوم",
            desc: "نيوم هي مدينة ذكية في السعودية تهدف إلى استخدام تقنيات حديثة وتحقيق التنمية المستدامة."
        },
        {
            id: 6,
            question: "ما هو السبب الرئيسي وراء الجفاف في الصومال؟",
            options: [
                "زيادة الري",
                "نقص الأمطار",
                "الإفراط في استخدام المياه الجوفية",
                "تدهور التربة"
            ],
            answer: "نقص الأمطار",
            desc: "الصومال يعاني من نقص الأمطار السنوي بسبب التغيرات المناخية، ما يؤدي إلى فترات جفاف طويلة."
        },
        {
            id: 7,
            question: "ما هو الغرض من إنشاء المدن الذكية؟",
            options: [
                "زيادة الازدحام المروري",
                "تقليل استهلاك الطاقة",
                "زيادة إنتاج الزراعة",
                "تدمير الحياة البيئية"
            ],
            answer: "تقليل استهلاك الطاقة",
            desc: "المدن الذكية تهدف إلى استخدام تقنيات مستدامة لتقليل استهلاك الطاقة وتقليل الأثر البيئي."
        },
        {
            id: 8,
            question: "أين تم إطلاق مبادرة لزراعة 122 مليون شجرة مثمرة؟",
            options: [
                "مصر",
                "الأردن",
                "الإمارات",
                "السعودية"
            ],
            answer: "مصر",
            desc: "مصر أطلقت مبادرة لزراعة 122 مليون شجرة مثمرة في إطار جهودها لمكافحة التغيرات المناخية."
        },
        {
            id: 9,
            question: "ما هي إحدى الأسباب الرئيسية لمشكلة التصحر في الدول العربية؟",
            options: [
                "الرعي الجائر",
                "زراعة المحاصيل المقاومة للجفاف",
                "زيادة الأمطار",
                "زيادة الثروة الحيوانية"
            ],
            answer: "الرعي الجائر",
            desc: "الرعي الجائر يؤدي إلى تدهور التربة وفقدان النباتات التي تحافظ على التربة من الانجراف، مما يزيد من التصحر."
        },
        {
            id: 10,
            question: "ما هي إحدى آثار التصحر على الحياة النباتية؟",
            options: [
                "زيادة النباتات",
                "تدهور الغطاء النباتي",
                "زيادة الغابات",
                "تحسن التربة"
            ],
            answer: "تدهور الغطاء النباتي",
            desc: "التصحر يؤدي إلى تدهور الغطاء النباتي وفقدان التنوع البيولوجي."
        },
        {
            id: 11,
            question: "ما هو دور المياه الجوفية في مشكلة ندرة المياه؟",
            options: [
                "المساعدة في زيادة الأمطار",
                "توفير مياه إضافية للزراعة",
                "تهديد مصادر المياه العذبة",
                "تحسين نوعية المياه"
            ],
            answer: "تهديد مصادر المياه العذبة",
            desc: "الإفراط في استخدام المياه الجوفية يؤدي إلى استنزافها بشكل غير مستدام، مما يقلل من مصادر المياه العذبة."
        },
        {
            id: 12,
            question: "أي من هذه العوامل لا يساهم في التصحر؟",
            options: [
                "قلة الأمطار",
                "التوسع العمراني",
                "الرعي الجائر",
                "الأمطار الغزيرة"
            ],
            answer: "الأمطار الغزيرة",
            desc: "الأمطار الغزيرة لا تساهم في التصحر، بل يمكن أن تكون مفيدة للنباتات، بينما قلة الأمطار تساهم في تفاقم التصحر."
        },
        {
            id: 13,
            question: "أي من هذه المبادرات تهدف إلى تقليل التلوث البيئي؟",
            options: [
                "زراعة الأشجار المثمرة",
                "استخدام الوقود الأحفوري",
                "زيادة عدد السيارات",
                "إزالة الغابات"
            ],
            answer: "زراعة الأشجار المثمرة",
            desc: "زراعة الأشجار المثمرة تساهم في تحسين جودة الهواء وتقليل انبعاثات الكربون."
        },
        {
            id: 14,
            question: "ما هي نتائج زيادة معدلات استهلاك المياه في الوطن العربي؟",
            options: [
                "زيادة كمية الأمطار",
                "استنزاف الموارد المائية",
                "تحسن الزراعة",
                "زيادة عدد الأنهار"
            ],
            answer: "استنزاف الموارد المائية",
            desc: "زيادة استهلاك المياه في الوطن العربي يؤدي إلى استنزاف الموارد المائية الجوفية والسطحية، مما يفاقم أزمة المياه."
        },
        {
            id: 15,
            question: "أين تم إنشاء أول مدينة صديقة للبيئة في مصر؟",
            options: [
                "القاهرة",
                "الإسكندرية",
                "الخارجة",
                "سوهاج"
            ],
            answer: "الخارجة",
            desc: "مدينة الخارجة في الوادي الجديد كانت أول مدينة صديقة للبيئة في مصر، حيث أُطلقت مشروعات بيئية لإعادة تدوير المخلفات."
        }
    ];
    

    const [SelectedAnswer8, setSelectedAnswer8] = useState([]);
    const [QuizSubmitted8, setQuizSubmitted8] = useState(false);
    const [QuizScore8, setQuizScore8] = useState(0);
    const [Message8 , setMessage8] = useState('')

    useEffect(() => {
        const storedScore = localStorage.getItem('QuizScore8');
        const storedAnswers = localStorage.getItem('SelectedAnswer8');
        const storedMessage8 = localStorage.getItem('SelectedMessage8');

        if (storedScore) {
            setQuizScore8(parseInt(storedScore));
            setQuizSubmitted8(true);
        }

        if (storedAnswers) {
           
                setSelectedAnswer8(JSON.parse(storedAnswers));
            
        }
  
    }, []);

    const AnswerSelection = (questionIndex, answer) => {
        const updatedAnswers = [...SelectedAnswer8];
        updatedAnswers[questionIndex] = answer;
        setSelectedAnswer8(updatedAnswers);

        
        
    };
    const CommpleteMessage8= "لم يتم اختيار جميع الاجابات من فضلك اجب علي جميع الاسئلة"
    const SubmitQuiz = (event) => {
        event.preventDefault();
        
        let score = 0;
        console.log(SelectedAnswer8);


        questions.forEach((question, index) => {
            if (SelectedAnswer8[index] === question.answer) {
                score++;
            }
        });

        setQuizScore8(score);
        if (SelectedAnswer8.includes(undefined)) {
            setQuizSubmitted8(false);
            setMessage8(CommpleteMessage8)
          }
          
          if (!SelectedAnswer8.includes(undefined)) {
            localStorage.setItem('QuizScore8', score.toString());
            setQuizSubmitted8(true);
         window.scrollTo(0, 700);

          }

        const sanitizedAnswers = SelectedAnswer8.map(answer => {
            if (typeof answer === "string") {
                return answer.trim();
            }
            return answer;
        });



        localStorage.setItem('SelectedAnswer8', JSON.stringify(sanitizedAnswers));
        localStorage.setItem('SelectedMessage8' , CommpleteMessage8)
        console.log(SelectedAnswer8)

    };
    const resetQuiz = () => {
        setSelectedAnswer8([]);
        setQuizScore8(0);
        setQuizSubmitted8(false);

        localStorage.removeItem('QuizScore8');
        localStorage.removeItem('SelectedAnswer8');
    };
    let percentColor = '';
    const percent = (QuizScore8 * 100) / questions.length;
    if (percent >= 50) {
        percentColor = '#11C27C';
    } else if (percent < 50) {
        percentColor = '#E20D47';
    }
    return (
        <div className="quiz">
           <video src={video8} className="video" controls></video>
            {!QuizSubmitted8 && ( 
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
                                        checked={SelectedAnswer8[questionIndex] === option} 
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
               <h3>{Message8}</h3>
                    <button type="submit" className='submit'>انهاء الاختبار</button>
                </form>
            )}

            {QuizSubmitted8 && (
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
                    <h2>النتيجة: {QuizScore8} / {questions.length}</h2>

                    {QuizScore8 >= 9 && QuizScore8 <= 10 ? (
                        <div className="comment">
                            <p>مبروك! إجاباتك كانت دقيقة جدًا، وأنت تظهر مستوى عميقًا من الفهم. عمل رائع!</p>
                            <p>نصيحة للمستقبل: حافظ على هذا الأداء الرائع. من الممكن أن تحدي نفسك بمزيد من الأسئلة الأكثر تعقيدًا لتحافظ على مستوى تقدمك.</p>
                        </div>
                    ) : null}

                    {QuizScore8 >= 7 && QuizScore8 < 9 ? (
                        <div className="comments">
                            <p>أداء جيد جدًا! لديك فهم جيد للموضوع وأجبت على معظم الأسئلة بشكل صحيح. فقط تحتاج إلى التركيز أكثر في بعض الجوانب.</p>
                            <p>نصيحة للمستقبل: حاول مراجعة الأخطاء الصغيرة في إجاباتك. التركيز على التفاصيل قد يساعدك في الوصول إلى درجة أعلى.</p>
                        </div>
                    ) : null}

                    {QuizScore8 >= 5 && QuizScore8 < 7 ? (
                        <div className="comments">
                            <p>أداء جيد، ولكن هناك بعض النقاط التي تحتاج إلى تحسين. لم تكن جميع الإجابات صحيحة، ولكن لديك قاعدة جيدة.</p>
                            <p>نصيحة للمستقبل: ركز على المواضيع التي لم تجب عنها بشكل صحيح. حاول التعمق في فهم هذه النقاط بشكل أفضل من خلال المزيد من المراجعة والتدريب.</p>
                        </div>
                    ) : null}

                    {QuizScore8 >= 3 && QuizScore8 < 5 ? (
                        <div className="comments">
                            <p>الأداء جيد لكن يحتاج إلى تحسين. لديك بعض الأخطاء الكبيرة التي تؤثر على النتيجة النهائية.</p>
                            <p>نصيحة للمستقبل: أعد مراجعة المواد التي واجهت صعوبة فيها. من المفيد أن تلخص النقاط الرئيسية وتطلب المساعدة في النقاط الغامضة.</p>
                        </div>
                    ) : null}

                    {QuizScore8 >= 0 && QuizScore8 < 3 ? (
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
                                    <h4>اجابتك : {SelectedAnswer8[Qindex]} </h4>
                                    {
                                    SelectedAnswer8[Qindex]!==question.answer ? (
                                        <h4>اجابتك خاطئة ❌</h4>
                                    ) : null
                                    
                                   }
                                     {
                                    SelectedAnswer8[Qindex]===question.answer ? (
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
