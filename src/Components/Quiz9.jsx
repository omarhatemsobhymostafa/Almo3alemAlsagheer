import { includes, toArray, toString } from 'lodash';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import video9 from "../Videos/9-الدرس الاول الوحدة الثالثة/L10.mp4"

export default function Quiz9() {
    const questions = [
        {
            id: 1,
            question: "ما هي أبرز المقومات الطبيعية للزراعة في الوطن العربي؟",
            options: [
                "المناخ، وسائل النقل، السوق",
                "الموارد المائية، التربة الخصبة، المناخ",
                "الأيدي العاملة، رأس المال، السوق",
                "رأس المال، وسائل النقل، الأيدي العاملة"
            ],
            answer: "الموارد المائية، التربة الخصبة، المناخ",
            desc: "الموارد المائية تشمل الأنهار، المياه الجوفية، والأمطار، وهي ضرورية للزراعة. التربة الخصبة والمناخ المتنوع يعززان تنوع المحاصيل."
        },
        {
            id: 2,
            question: "ما المصدر الرئيسي للمياه في الزراعة في المناطق الصحراوية في الوطن العربي؟",
            options: [
                "الأنهار",
                "مياه الأمطار",
                "المياه الجوفية",
                "بحيرات"
            ],
            answer: "المياه الجوفية",
            desc: "في المناطق الصحراوية، تعتمد الزراعة على المياه الجوفية المستخرجة عبر الآبار والعيون بسبب ندرة الأنهار والمطر."
        },
        {
            id: 3,
            question: "أي من الدول التالية تشتهر بزراعة البن؟",
            options: [
                "مصر",
                "العراق",
                "اليمن",
                "المغرب"
            ],
            answer: "اليمن",
            desc: "اليمن مشهورة بزراعة البن، خاصة في المناطق الجبلية، ويتميز البن اليمني بجودته العالية."
        },
        {
            id: 4,
            question: "ما هي المحاصيل التي تحتل مصر المركز الأول في إنتاجها؟",
            options: [
                "القمح، الأرز، الذرة",
                "التمر، الزيتون، العنب",
                "القطن، الكتان، القمح",
                "الفواكه، الزهور، الخضروات"
            ],
            answer: "القمح، الأرز، الذرة",
            desc: "مصر تعد من أكبر الدول المنتجة للقمح، الأرز، والذرة في الوطن العربي، مما يجعلها من الدول الرائدة في إنتاج الحبوب."
        },
        {
            id: 5,
            question: "في أي من الدول العربية يتم الاحتفال بيوم الزراعة العربي؟",
            options: [
                "السعودية",
                "الإمارات",
                "لبنان",
                "كل الدول العربية"
            ],
            answer: "كل الدول العربية",
            desc: "يتم الاحتفال بيوم الزراعة العربي في جميع الدول العربية في 2 سبتمبر من كل عام، تأكيدًا على أهمية الزراعة."
        },
        {
            id: 6,
            question: "ما هي المحاصيل السكرية التي تزرع في الوطن العربي؟",
            options: [
                "القمح، الأرز",
                "قصب السكر، بنجر السكر",
                "الموالح، الزيتون",
                "البطاطا، الفاصوليا"
            ],
            answer: "قصب السكر، بنجر السكر",
            desc: "قصب السكر وبنجر السكر من المحاصيل السكرية التي تُزرع بكثرة في مصر والسودان."
        },
        {
            id: 7,
            question: "ما هي التربة التي تعد من المقومات الأساسية للزراعة في الوطن العربي؟",
            options: [
                "التربة الجافة",
                "التربة المالحة",
                "التربة الخصبة",
                "التربة الرملية"
            ],
            answer: "التربة الخصبة",
            desc: "التربة الخصبة، الموجودة قرب الأنهار، تعد أساسية لزراعة المحاصيل المختلفة."
        },
        {
            id: 8,
            question: "ما هي المحاصيل التي تزرع في المناطق الحارة في الوطن العربي؟",
            options: [
                "الموز، الزيتون، التين",
                "الأرز، القمح",
                "البن، القطن",
                "البطاطا، الفاصوليا"
            ],
            answer: "الموز، الزيتون، التين",
            desc: "الموز، الزيتون، والتين تُزرع في المناطق الحارة التي تحتاج إلى درجات حرارة مرتفعة."
        },
        {
            id: 9,
            question: "أي من العوامل التالية يعتبر من المقومات البشرية للزراعة؟",
            options: [
                "رأس المال",
                "المياه الجوفية",
                "التربة الخصبة",
                "المناخ"
            ],
            answer: "رأس المال",
            desc: "رأس المال يساعد في تمويل المشاريع الزراعية وشراء المعدات اللازمة."
        },
        {
            id: 10,
            question: "ما هو نوع الري الذي يستخدم في مصر والسعودية لتوفير المياه العذبة؟",
            options: [
                "الري بالغمر",
                "الري بالتنقيط",
                "الري بالرش",
                "الري بالأنابيب"
            ],
            answer: "الري بالرش",
            desc: "الري بالرش يوفر المياه عن طريق توزيعها بشكل متساوٍ على الأراضي الزراعية."
        },
        {
            id: 11,
            question: "ما هي التحديات التي تواجه الزراعة في الوطن العربي؟",
            options: [
                "وفرة المياه العذبة",
                "التصحر وزحف الرمال",
                "تزايد الأمطار",
                "التربة الخصبة"
            ],
            answer: "التصحر وزحف الرمال",
            desc: "التصحر وزحف الرمال يعدان من أكبر التحديات التي تواجه الزراعة في الوطن العربي، خاصة في المناطق الصحراوية."
        },
        {
            id: 12,
            question: "أي من الدول العربية اختارتها الفاو كموقع للتراث الزراعي العالمي؟",
            options: [
                "مصر والسعودية",
                "الإمارات ومصر",
                "لبنان والأردن",
                "سوريا ولبنان"
            ],
            answer: "الإمارات ومصر",
            desc: "منظمة الفاو اختارت واحة العين في الإمارات وواحة سيوة في مصر كمواقع للتراث الزراعي العالمي، تقديراً لتاريخها الزراعي العريق."
        },
        {
            id: 13,
            question: "ما هي الزراعة التي لا تحتاج إلى تربة وتوفر الماء بنسبة 22%؟",
            options: [
                "الزراعة العضوية",
                "الزراعة المائية",
                "الزراعة التقليدية",
                "الزراعة الهيدروبونيكية"
            ],
            answer: "الزراعة المائية",
            desc: "الزراعة المائية لا تحتاج إلى تربة وتستخدم المياه بشكل أكثر كفاءة، مما يوفر حوالي 22% من المياه مقارنة بالزراعة التقليدية."
        },
        {
            id: 14,
            question: "ما هو سبب تذبذب كمية الأمطار في الوطن العربي؟",
            options: [
                "تقلبات المناخ",
                "ندرة المياه",
                "زيادة في درجات الحرارة",
                "كثافة السكان"
            ],
            answer: "تقلبات المناخ",
            desc: "تذبذب كمية الأمطار في الوطن العربي يعود إلى التغيرات المناخية، التي تؤدي إلى قلة أو زيادة في هطول الأمطار في بعض السنوات."
        },
        {
            id: 15,
            question: "ما هي إحدى طرق معالجة مشكلات الزراعة في الوطن العربي؟",
            options: [
                "تقليل استخدام الأسمدة العضوية",
                "زيادة عدد المحاصيل الزراعية",
                "إنشاء السدود والخزانات",
                "تقليص مساحات الأراضي المزروعة"
            ],
            answer: "إنشاء السدود والخزانات",
            desc: "إنشاء السدود والخزانات يساعد في تخزين المياه وتنظيم استخدامها، مما يساهم في حل مشكلة ندرة المياه في العديد من المناطق العربية."
        }
    ];
    
    const [SelectedAnswer9, setSelectedAnswer9] = useState([]);
    const [QuizSubmitted9, setQuizSubmitted9] = useState(false);
    const [QuizScore9, setQuizScore9] = useState(0);
    const [Message9 , setMessage9] = useState('')

    useEffect(() => {
        const storedScore = localStorage.getItem('QuizScore9');
        const storedAnswers = localStorage.getItem('SelectedAnswer9');
        const storedMessage9 = localStorage.getItem('SelectedMessage9');

        if (storedScore) {
            setQuizScore9(parseInt(storedScore));
            setQuizSubmitted9(true);
        }

        if (storedAnswers) {
           
                setSelectedAnswer9(JSON.parse(storedAnswers));
            
        }
  
    }, []);

    const AnswerSelection = (questionIndex, answer) => {
        const updatedAnswers = [...SelectedAnswer9];
        updatedAnswers[questionIndex] = answer;
        setSelectedAnswer9(updatedAnswers);

        
        
    };
    const CommpleteMessage9= "لم يتم اختيار جميع الاجابات من فضلك اجب علي جميع الاسئلة"
    const SubmitQuiz = (event) => {
        event.preventDefault();
        
        let score = 0;
        console.log(SelectedAnswer9);


        questions.forEach((question, index) => {
            if (SelectedAnswer9[index] === question.answer) {
                score++;
            }
        });

        setQuizScore9(score);
        if (SelectedAnswer9.includes(undefined)) {
            setQuizSubmitted9(false);
            setMessage9(CommpleteMessage9)
          }
          
          if (!SelectedAnswer9.includes(undefined)) {
            localStorage.setItem('QuizScore9', score.toString());
            setQuizSubmitted9(true);
         window.scrollTo(0, 700);

          }

        const sanitizedAnswers = SelectedAnswer9.map(answer => {
            if (typeof answer === "string") {
                return answer.trim();
            }
            return answer;
        });



        localStorage.setItem('SelectedAnswer9', JSON.stringify(sanitizedAnswers));
        localStorage.setItem('SelectedMessage9' , CommpleteMessage9)
        console.log(SelectedAnswer9)

    };
    const resetQuiz = () => {
        setSelectedAnswer9([]);
        setQuizScore9(0);
        setQuizSubmitted9(false);

        localStorage.removeItem('QuizScore9');
        localStorage.removeItem('SelectedAnswer9');
    };
    let percentColor = '';
    const percent = (QuizScore9 * 100) / questions.length;
    if (percent >= 50) {
        percentColor = '#11C27C';
    } else if (percent < 50) {
        percentColor = '#E20D47';
    }
    return (
        <div className="quiz">
           <video src={video9} className="video" controls></video>
            {!QuizSubmitted9 && ( 
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
                                        checked={SelectedAnswer9[questionIndex] === option} 
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
               <h3>{Message9}</h3>
                    <button type="submit" className='submit'>انهاء الاختبار</button>
                </form>
            )}

            {QuizSubmitted9 && (
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
                    <h2>النتيجة: {QuizScore9} / {questions.length}</h2>

                    {QuizScore9 >= 9 && QuizScore9 <= 10 ? (
                        <div className="comment">
                            <p>مبروك! إجاباتك كانت دقيقة جدًا، وأنت تظهر مستوى عميقًا من الفهم. عمل رائع!</p>
                            <p>نصيحة للمستقبل: حافظ على هذا الأداء الرائع. من الممكن أن تحدي نفسك بمزيد من الأسئلة الأكثر تعقيدًا لتحافظ على مستوى تقدمك.</p>
                        </div>
                    ) : null}

                    {QuizScore9 >= 7 && QuizScore9 < 9 ? (
                        <div className="comments">
                            <p>أداء جيد جدًا! لديك فهم جيد للموضوع وأجبت على معظم الأسئلة بشكل صحيح. فقط تحتاج إلى التركيز أكثر في بعض الجوانب.</p>
                            <p>نصيحة للمستقبل: حاول مراجعة الأخطاء الصغيرة في إجاباتك. التركيز على التفاصيل قد يساعدك في الوصول إلى درجة أعلى.</p>
                        </div>
                    ) : null}

                    {QuizScore9 >= 5 && QuizScore9 < 7 ? (
                        <div className="comments">
                            <p>أداء جيد، ولكن هناك بعض النقاط التي تحتاج إلى تحسين. لم تكن جميع الإجابات صحيحة، ولكن لديك قاعدة جيدة.</p>
                            <p>نصيحة للمستقبل: ركز على المواضيع التي لم تجب عنها بشكل صحيح. حاول التعمق في فهم هذه النقاط بشكل أفضل من خلال المزيد من المراجعة والتدريب.</p>
                        </div>
                    ) : null}

                    {QuizScore9 >= 3 && QuizScore9 < 5 ? (
                        <div className="comments">
                            <p>الأداء جيد لكن يحتاج إلى تحسين. لديك بعض الأخطاء الكبيرة التي تؤثر على النتيجة النهائية.</p>
                            <p>نصيحة للمستقبل: أعد مراجعة المواد التي واجهت صعوبة فيها. من المفيد أن تلخص النقاط الرئيسية وتطلب المساعدة في النقاط الغامضة.</p>
                        </div>
                    ) : null}

                    {QuizScore9 >= 0 && QuizScore9 < 3 ? (
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
                                    <h4>اجابتك : {SelectedAnswer9[Qindex]} </h4>
                                    {
                                    SelectedAnswer9[Qindex]!==question.answer ? (
                                        <h4>اجابتك خاطئة ❌</h4>
                                    ) : null
                                    
                                   }
                                     {
                                    SelectedAnswer9[Qindex]===question.answer ? (
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
