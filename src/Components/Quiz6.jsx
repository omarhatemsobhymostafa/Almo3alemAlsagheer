import { includes, toArray, toString } from 'lodash';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import video6 from "../Videos/6-الدرس التانى الوحدة التانية/L6 - Made with Clipchamp.mp4"

export default function Quiz6() {
    const questions =[
        {
            "id": 1,
            "question": "ما هو العامل الرئيسي الذي يؤثر على مناخ الوطن العربي؟",
            "options": ["الموقع الفلكي", "نوع التربة", "نوع النباتات", "تلوث الهواء"],
            "answer": "الموقع الفلكي",
            "desc": "الموقع الفلكي يؤثر بشكل رئيسي على المناخ من حيث تحديد درجات الحرارة والفصول المناخية، خاصة من خلال موقع الوطن العربي بين خط الاستواء والمدارين."
        },
        {
            "id": 2,
            "question": "أي من العوامل التالية يؤدي إلى تعديل درجات الحرارة في المناطق الساحلية؟",
            "options": ["التيارات البحرية الدافئة", "التيارات البحرية الباردة", "التضاريس الجبلية", "ارتفاعات القمر"],
            "answer": "التيارات البحرية الباردة",
            "desc": "التيارات البحرية الباردة تعمل على تقليل درجات الحرارة في السواحل، مما يجعل المناخ أكثر اعتدالًا مقارنة بالمناطق الداخلية."
        },
        {
            "id": 3,
            "question": "ما هو التأثير المتوقع إذا مرت الرياح الحارة من مناطق صحراوية على المنطقة؟",
            "options": ["زيادة الأمطار", "انخفاض درجات الحرارة", "ارتفاع درجات الحرارة", "زيادة الرطوبة"],
            "answer": "ارتفاع درجات الحرارة",
            "desc": "الرياح الحارة القادمة من الصحارى تؤدي إلى رفع درجات الحرارة في المناطق التي تمر بها."
        },
        {
            "id": 4,
            "question": "أي من المدن التالية تتمتع بمناخ معتدل بسبب قربها من البحر؟",
            "options": ["الرياض", "القاهرة", "الإسكندرية", "بغداد"],
            "answer": "الإسكندرية",
            "desc": "مدينة الإسكندرية تتمتع بمناخ معتدل بسبب قربها من البحر المتوسط، مما يساعد على تعديل درجات الحرارة."
        },
        {
            "id": 5,
            "question": "في أي فصل من السنة تتعامد الشمس على مدار السرطان؟",
            "options": ["الربيع", "الصيف", "الخريف", "الشتاء"],
            "answer": "الصيف",
            "desc": "في الصيف، تتعامد الشمس على مدار السرطان، مما يؤدي إلى ارتفاع درجات الحرارة في معظم أنحاء الوطن العربي."
        },
        {
            "id": 6,
            "question": "ما الذي يسبب حدوث الأمطار في المناطق الجبلية؟",
            "options": ["تأثير الرياح المحملة بالبخار", "السحب الرعدية", "حركة التيارات البحرية", "تلوث الهواء"],
            "answer": "تأثير الرياح المحملة بالبخار",
            "desc": "الأمطار في المناطق الجبلية تحدث عندما تصطدم الرياح المحملة بالبخار بالجبال، مما يؤدي إلى تكثف البخار وتساقط الأمطار."
        },
        {
            "id": 7,
            "question": "أي من العوامل التالية لا يؤثر بشكل كبير في مناخ الوطن العربي؟",
            "options": ["المسطحات المائية", "الموقع الفلكي", "اتجاه الرياح", "الكثافة السكانية"],
            "answer": "الكثافة السكانية",
            "desc": "الكثافة السكانية ليست عاملًا مؤثرًا كبيرًا على المناخ بالمقارنة مع العوامل الأخرى مثل الموقع الفلكي واتجاه الرياح."
        },
        {
            "id": 8,
            "question": "في أي فصل تتعامد الشمس على مدار الجدي؟",
            "options": ["الخريف", "الشتاء", "الربيع", "الصيف"],
            "answer": "الشتاء",
            "desc": "الشمس تتعامد على مدار الجدي في فصل الشتاء، مما يؤدي إلى اعتدال الحرارة في معظم مناطق الوطن العربي."
        },
        {
            "id": 9,
            "question": "تعتبر مدينة الرياض أكثر حرارة من مدينة الإسكندرية بسبب بعد الرياض عن البحر.",
            "options": ["صحيح", "خطأ"],
            "answer": "صحيح",
            "desc": "مدينة الرياض هي مدينة داخلية بعيدًا عن تأثير المسطحات المائية، مما يجعلها أكثر حرارة مقارنة بالإسكندرية التي تتمتع بمناخ معتدل بفضل قربها من البحر المتوسط."
        },
        {
            "id": 10,
            "question": "المناخ في معظم مناطق الوطن العربي معتدل طوال العام.",
            "options": ["صحيح", "خطأ"],
            "answer": "خطأ",
            "desc": "المناخ في معظم مناطق الوطن العربي حار في الصيف، بينما يكون معتدلًا في الشتاء فقط في بعض المناطق الشمالية والجبلية."
        },
        {
            "id": 11,
            "question": "ما هو العامل الذي يسبب ارتفاع درجة الحرارة في معظم مناطق الوطن العربي؟",
            "options": ["التيارات البحرية الباردة", "الموقع الفلكي", "الكثافة السكانية", "التضاريس الجبلية"],
            "answer": "الموقع الفلكي",
            "desc": "الموقع الفلكي للوطن العربي، بين خط الاستواء ومدار السرطان، يسبب ارتفاع درجات الحرارة."
        },
        {
            "id": 12,
            "question": "أي من العوامل التالية لا يُؤثر بشكل كبير على مناخ الوطن العربي؟",
            "options": ["المسطحات المائية", "التيارات البحرية", "الزراعة", "التضاريس الجبلية"],
            "answer": "الزراعة",
            "desc": "الزراعة لا تُعتبر عاملًا مؤثرًا في مناخ الوطن العربي بشكل عام، بينما تؤثر المسطحات المائية، التيارات البحرية، والتضاريس بشكل ملحوظ."
        },
        {
            "id": 13,
            "question": "أي من المدن التالية تشهد مناخًا حارًا وجافًا في الصيف؟",
            "options": ["الرياض", "بيروت", "القاهرة", "الجزائر"],
            "answer": "الرياض",
            "desc": "الرياض هي مدينة داخلية تشهد مناخًا حارًا وجافًا في الصيف، في حين أن المدن الساحلية مثل بيروت والقاهرة تتمتع بمناخ أكثر اعتدالًا."
        },
        {
            "id": 14,
            "question": "ما هو تأثير الرياح القادمة من البحر على المناطق الساحلية؟",
            "options": ["رفع درجات الحرارة", "انخفاض درجات الحرارة", "زيادة الرطوبة", "تقليل الرطوبة"],
            "answer": "انخفاض درجات الحرارة",
            "desc": "الرياح القادمة من البحر تساعد على تقليل درجات الحرارة وزيادة الرطوبة، مما يجعل المناخ أكثر اعتدالًا في المناطق الساحلية."
        },
        {
            "id": 15,
            "question": "أي من الجبال التالية يشهد تساقط الثلوج في الشتاء؟",
            "options": ["جبال البحر الأحمر", "جبال أطلس في المغرب", "جبال عمان", "جبال لبنان"],
            "answer": "جبال أطلس في المغرب",
            "desc": "جبال أطلس تشهد تساقط الثلوج في الشتاء بسبب ارتفاعها الكبير فوق سطح البحر، بينما المناخ في معظم المناطق الأخرى من الوطن العربي لا يسمح بتساقط الثلوج."
        }
    ]
    

    const [SelectedAnswer6, setSelectedAnswer6] = useState([]);
    const [QuizSubmitted6, setQuizSubmitted6] = useState(false);
    const [QuizScore6, setQuizScore6] = useState(0);
    const [Message6 , setMessage6] = useState('')

    useEffect(() => {
        const storedScore = localStorage.getItem('QuizScore6');
        const storedAnswers = localStorage.getItem('SelectedAnswer6');
        const storedMessage6 = localStorage.getItem('SelectedMessage6');

        if (storedScore) {
            setQuizScore6(parseInt(storedScore));
            setQuizSubmitted6(true);
        }

        if (storedAnswers) {
           
                setSelectedAnswer6(JSON.parse(storedAnswers));
            
        }
  
    }, []);

    const AnswerSelection = (questionIndex, answer) => {
        const updatedAnswers = [...SelectedAnswer6];
        updatedAnswers[questionIndex] = answer;
        setSelectedAnswer6(updatedAnswers);

        
        
    };
    const CommpleteMessage6= "لم يتم اختيار جميع الاجابات من فضلك اجب علي جميع الاسئلة"
    const SubmitQuiz = (event) => {
        event.preventDefault();
        
        let score = 0;
        console.log(SelectedAnswer6);


        questions.forEach((question, index) => {
            if (SelectedAnswer6[index] === question.answer) {
                score++;
            }
        });

        setQuizScore6(score);
        if (SelectedAnswer6.includes(undefined)) {
            setQuizSubmitted6(false);
            setMessage6(CommpleteMessage6)
          }
          
          if (!SelectedAnswer6.includes(undefined)) {
            localStorage.setItem('QuizScore6', score.toString());
            setQuizSubmitted6(true);
         window.scrollTo(0, 700);

          }

        const sanitizedAnswers = SelectedAnswer6.map(answer => {
            if (typeof answer === "string") {
                return answer.trim();
            }
            return answer;
        });



        localStorage.setItem('SelectedAnswer6', JSON.stringify(sanitizedAnswers));
        localStorage.setItem('SelectedMessage6' , CommpleteMessage6)
        console.log(SelectedAnswer6)

    };
    const resetQuiz = () => {
        setSelectedAnswer6([]);
        setQuizScore6(0);
        setQuizSubmitted6(false);

        localStorage.removeItem('QuizScore6');
        localStorage.removeItem('SelectedAnswer6');
    };
    let percentColor = '';
    const percent = (QuizScore6 * 100) / questions.length;
    if (percent >= 50) {
        percentColor = '#11C27C';
    } else if (percent < 50) {
        percentColor = '#E20D47';
    }
    return (
        <div className="quiz">
           <video src={video6} className="video" controls></video>
            {!QuizSubmitted6 && ( 
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
                                        checked={SelectedAnswer6[questionIndex] === option} 
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
               <h3>{Message6}</h3>
                    <button type="submit" className='submit'>انهاء الاختبار</button>
                </form>
            )}

            {QuizSubmitted6 && (
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
                    <h2>النتيجة: {QuizScore6} / {questions.length}</h2>

                    {QuizScore6 >= 9 && QuizScore6 <= 10 ? (
                        <div className="comment">
                            <p>مبروك! إجاباتك كانت دقيقة جدًا، وأنت تظهر مستوى عميقًا من الفهم. عمل رائع!</p>
                            <p>نصيحة للمستقبل: حافظ على هذا الأداء الرائع. من الممكن أن تحدي نفسك بمزيد من الأسئلة الأكثر تعقيدًا لتحافظ على مستوى تقدمك.</p>
                        </div>
                    ) : null}

                    {QuizScore6 >= 7 && QuizScore6 < 9 ? (
                        <div className="comments">
                            <p>أداء جيد جدًا! لديك فهم جيد للموضوع وأجبت على معظم الأسئلة بشكل صحيح. فقط تحتاج إلى التركيز أكثر في بعض الجوانب.</p>
                            <p>نصيحة للمستقبل: حاول مراجعة الأخطاء الصغيرة في إجاباتك. التركيز على التفاصيل قد يساعدك في الوصول إلى درجة أعلى.</p>
                        </div>
                    ) : null}

                    {QuizScore6 >= 5 && QuizScore6 < 7 ? (
                        <div className="comments">
                            <p>أداء جيد، ولكن هناك بعض النقاط التي تحتاج إلى تحسين. لم تكن جميع الإجابات صحيحة، ولكن لديك قاعدة جيدة.</p>
                            <p>نصيحة للمستقبل: ركز على المواضيع التي لم تجب عنها بشكل صحيح. حاول التعمق في فهم هذه النقاط بشكل أفضل من خلال المزيد من المراجعة والتدريب.</p>
                        </div>
                    ) : null}

                    {QuizScore6 >= 3 && QuizScore6 < 5 ? (
                        <div className="comments">
                            <p>الأداء جيد لكن يحتاج إلى تحسين. لديك بعض الأخطاء الكبيرة التي تؤثر على النتيجة النهائية.</p>
                            <p>نصيحة للمستقبل: أعد مراجعة المواد التي واجهت صعوبة فيها. من المفيد أن تلخص النقاط الرئيسية وتطلب المساعدة في النقاط الغامضة.</p>
                        </div>
                    ) : null}

                    {QuizScore6 >= 0 && QuizScore6 < 3 ? (
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
                                    <h4>اجابتك : {SelectedAnswer6[Qindex]} </h4>
                                    {
                                    SelectedAnswer6[Qindex]!==question.answer ? (
                                        <h4>اجابتك خاطئة ❌</h4>
                                    ) : null
                                    
                                   }
                                     {
                                    SelectedAnswer6[Qindex]===question.answer ? (
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
