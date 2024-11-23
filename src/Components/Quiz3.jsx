import { toArray, toString } from 'lodash';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Quiz3() {
    const questions = [
        {
            question: "خطّط الرسول صلى الله عليه وسلم للهجرة فأمرر الهجرة _______ تامة لئلا ...",
            options: ["بسرية", "بجهر", "بسرعة"],
            answer: "بسرية",
            desc: "الهجرة النبوية كانت أحد أهم الأحداث في تاريخ الإسلام، حيث خطط الرسول صلى الله عليه وسلم للهجرة بسرية تامة لحماية نفسه وأصحابه من بطش قريش. لم يُفشَ أمر الهجرة إلا للذين شاركوا في تنفيذ الخطة، مثل أبو بكر الصديق رضي الله عنه، وعلي بن أبي طالب الذي نام في فراش الرسول لخداع قريش."
        },
        {
            question: "آخى الرسول صلى الله عليه وسلم بين المهاجرين و _______ لتكوين مجتمع متماسك.",
            options: ["الأوس", "الأنصار", "القرشيين"],
            answer: "الأنصار",
            desc: "بعد وصول الرسول صلى الله عليه وسلم إلى المدينة، آخى بين المهاجرين والأنصار لتأسيس مجتمع قوي ومتماسك. كان هذا الإخاء مثالًا فريدًا للتضامن الإسلامي، حيث تقاسم الأنصار أموالهم ومنازلهم مع المهاجرين، مما ساهم في بناء دولة إسلامية قوية."
        },
        {
            question: "في غزوة أحد تحوّل النصر إلى هزيمة بسبب مخالفة _______ لأوامر الرسول.",
            options: ["الرماة", "الفرسان", "المشاة"],
            answer: "الرماة",
            desc: "في غزوة أحد، أمر الرسول صلى الله عليه وسلم الرماة بالبقاء في مواقعهم على الجبل وعدم تركها مهما حدث. لكن بعض الرماة خالفوا الأمر ونزلوا لجمع الغنائم عندما اعتقدوا أن المعركة انتهت، مما أدى إلى هجوم مفاجئ من خالد بن الوليد على المسلمين وانقلاب النصر إلى هزيمة."
        },
        {
            question: "أشار سلمان الفارسي على النبي صلى الله عليه وسلم بحفر _______ حول المدينة لحمايتها.",
            options: ["الخندق", "البئر", "السد"],
            answer: "الخندق",
            desc: "عندما تحالفت قريش والأحزاب لمهاجمة المدينة المنورة، أشار سلمان الفارسي رضي الله عنه بحفر خندق حول المدينة كوسيلة دفاعية جديدة على العرب. كان الخندق سببًا في إفشال هجوم الأحزاب وحماية المسلمين، وأظهر عبقرية التخطيط العسكري للرسول صلى الله عليه وسلم."
        },
        {
            question: "اجتمع زعماء قريش في دار _______ وقرروا قتل الرسول لكنهم فشلوا.",
            options: ["الحكمة", "العلوم", "الندوة", "الشعب"],
            answer: "الندوة",
            desc: "دار الندوة كانت مكان اجتماع زعماء قريش للتشاور في أمورهم الهامة. قرروا في هذا الاجتماع قتل الرسول صلى الله عليه وسلم، ولكن الله سبحانه وتعالى أحبط مؤامرتهم، ونجح النبي في الهجرة إلى المدينة بفضل تخطيطه المحكم وعناية الله."
        },
        {
            question: "حدثت غزوة بدر في العام _______ من الهجرة.",
            options: ["الأول", "الثاني", "الثالث", "الرابع"],
            answer: "الثاني",
            desc: "غزوة بدر الكبرى وقعت في العام الثاني من الهجرة، وكانت أول معركة كبرى بين المسلمين وقريش. حقق المسلمون نصرًا عظيمًا رغم قلة عددهم وعدتهم مقارنة بجيش قريش، وكان هذا النصر دعمًا معنويًا كبيرًا للمسلمين."
        },
        {
            question: "انهزم المسلمون في غزوة _______ بسبب مخالفة الرماة لأوامر الرسول صلى الله عليه وسلم.",
            options: ["بدر", "أحد", "الخندق", "فتح مكة"],
            answer: "أحد",
            desc: "غزوة أحد كانت اختبارًا لصبر المسلمين وإيمانهم. رغم أن المسلمين بدؤوا المعركة بانتصار واضح، إلا أن مخالفة الرماة لأوامر الرسول صلى الله عليه وسلم أدت إلى هجوم مضاد من قريش، مما تسبب في هزيمة المسلمين."
        },
        {
            question: "كانت مدة الهدنة في صلح الحديبية _______ سنوات.",
            options: ["سبع", "ثمان", "تسع", "عشر"],
            answer: "عشر",
            desc: "صلح الحديبية كان اتفاقًا بين المسلمين وقريش ينص على هدنة لمدة عشر سنوات. على الرغم من أن الشروط بدت ظالمة للمسلمين، إلا أن هذا الصلح أتاح فرصة لنشر الدعوة الإسلامية بحرية وتهيئة الظروف لفتح مكة."
        },
        {
            question: "توفي الرسول صلى الله عليه وسلم في سنة _______ من الهجرة.",
            options: ["13", "12", "11", "10"],
            answer: "11",
            desc: "توفي الرسول صلى الله عليه وسلم في السنة الحادية عشرة من الهجرة بعد أن أكمل رسالته ونشر الإسلام. كانت وفاته حدثًا مؤلمًا للمسلمين، لكنه كان بداية لانتشار الإسلام في أرجاء العالم."
        },
        {
            question: "كان هو صديق الرسول صلى الله عليه وسلم في الهجرة إلى المدينة _______.",
            options: ["أبو بكر الصديق", "علي بن أبي طالب", "عمر بن الخطاب", "عثمان بن عفان"],
            answer: "أبو بكر الصديق",
            desc: "رافق أبو بكر الصديق رضي الله عنه الرسول صلى الله عليه وسلم في الهجرة، وكان له دور كبير في تأمين الرحلة وتوفير الحماية. كان أبو بكر مثالًا للوفاء والصداقة الحقيقية، وخلّد التاريخ هذا الموقف العظيم."
        }
    ];


    const [SelectedAnswer3, setSelectedAnswer3] = useState([]);
    const [QuizSubmitted3, setQuizSubmitted3] = useState(false);
    const [QuizScore3, setQuizScore3] = useState(0);
    useEffect(() => {
        const storedScore = localStorage.getItem('QuizScore3');
        const storedAnswers = localStorage.getItem('SelectedAnswer3');

        if (storedScore) {
            setQuizScore3(parseInt(storedScore));
            setQuizSubmitted3(true);
        }

        if (storedAnswers) {
            try {
                setSelectedAnswer3(JSON.parse(storedAnswers));
            } catch (error) {
                console.error("خطأ أثناء استرجاع الإجابات:", error);
                setSelectedAnswer3([]);
            }
        }
    }, []);
    const AnswerSelection = (questionIndex, selectedAnswer) => {
        const newAnswers = [...SelectedAnswer3];
        newAnswers[questionIndex] = selectedAnswer;
        setSelectedAnswer3(newAnswers);
    };

    const SubmitQuiz = (event) => {
        event.preventDefault();

        let score = 0;
        console.log(SelectedAnswer3);
        window.scrollTo(0, 0);


        questions.forEach((question, index) => {
            if (SelectedAnswer3[index] === question.answer) {
                score++;
            }
        });

        setQuizScore3(score);
        setQuizSubmitted3(true);


        const sanitizedAnswers = SelectedAnswer3.map(answer => {
            if (typeof answer === "string") {
                return answer.trim();
            }
            return answer;
        });


        localStorage.setItem('QuizScore3', score.toString());
        localStorage.setItem('SelectedAnswer3', JSON.stringify(sanitizedAnswers));

    };


    let percentColor = '';
    const percent = (QuizScore3 * 100) / questions.length;
    if (percent >= 50) {
        percentColor = '#11C27C';
    } else if (percent < 50) {
        percentColor = '#E20D47';
    }

    const resetQuiz = () => {
        setSelectedAnswer3([]);
        setQuizScore3(0);
        setQuizSubmitted3(false);

        localStorage.removeItem('QuizScore3');
        localStorage.removeItem('SelectedAnswer3');
    };

    return (
        <div className="quiz">
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
