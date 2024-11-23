import { toArray, toString } from 'lodash';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import video1 from '../Videos/lesson1.mp4';

export default function Quiz1() {
    const questions = [
        {
            id: 1,
            question: "تمع دولة ......................... بأكملها في المحيط الهندي.",
            options: ["البحرين", "عمان", "جيبوتي", "جزر القمر"],
            answer: "عمان",
            desc: "عمان هي الدولة الوحيدة بين الدول العربية التي تتمتع بسواحل تمتد بالكامل على المحيط الهندي. تتميز عمان بتاريخها البحري الطويل، حيث كانت من الدول الرائدة في التجارة البحرية والصيد. كما أنها تشترك في العديد من الممرات البحرية الهامة التي تربط بين الشرق والغرب."
        },
        {
            id: 2,
            question: "قامت حضارة ............................. في شمال شرق الوطن العربي.",
            options: ["ليبيا", "العراق القديم", "مصر القديمة", "بلاد المغرب"],
            answer: "العراق القديم",
            desc: "حضارة العراق القديمة تعتبر واحدة من أقدم الحضارات في العالم. نشأت في منطقة ما بين النهرين (دجلة والفرات) في شمال شرق الوطن العربي. هذه الحضارة أسهمت في العديد من المجالات مثل الكتابة (الخط المسماري)، الزراعة، والحكم الملكي، وتمثل واحدة من أقدم وأعظم الحضارات في التاريخ البشري."
        },
        {
            id: 3,
            question: "أعطى الأزهر الشريف لمصر أهمية ..................",
            options: ["سياسية", "اقتصادية", "دينية", "تجارية"],
            answer: "دينية",
            desc: "الأزهر الشريف هو مؤسسة دينية علمية تأسست في القاهرة في القرن العاشر الميلادي. يعتبر الأزهر مركزًا رئيسيًا للعلم والدين في العالم الإسلامي. لعب دورًا كبيرًا في تعزيز الفهم الصحيح للإسلام وقيادة الفكر الديني في مصر والعالم العربي، ولذلك فإنه يمثل العمود الفقري للهوية الدينية لمصر."
        },
        {
            id: 4,
            question: "يحد الوطن العربي شمالًا .......................",
            options: ["جبال طوروس", "البحر الأحمر", "الخليج العربي", "البحر العربي"],
            answer: "جبال طوروس",
            desc: "جبال طوروس هي سلسلة جبلية تمتد عبر جنوب تركيا وتفصل بين المناطق العربية في الشرق وأوروبا في الغرب. تشكل هذه الجبال جزءًا من الحدود الطبيعية التي تفصل بين الوطن العربي ومناطق آسيا الصغرى، وتلعب دورًا في مناخ المنطقة وظروفها الجغرافية."
        },
        {
            id: 5,
            question: "يرجع ترابط الوطن العربي لعوامل متعددة منها ....................",
            options: ["الدين", "اللغة", "التاريخ", "كل ما سبق"],
            answer: "كل ما سبق",
            desc: "الوطن العربي يشترك في عوامل ثقافية وتاريخية ودينية متشابهة. الدين الإسلامي هو عامل مشترك بين معظم الدول العربية، بالإضافة إلى اللغة العربية التي تعتبر لغة التواصل الرئيسية. كما أن التاريخ المشترك بين الدول العربية يعزز من روابطها السياسية والثقافية."
        },
        {
            id: 6,
            question: "من أهم الممرات المائية في شرق الوطن العربي .........................",
            options: ["مضيق باب المندب", "مضيق جبل طارق", "قناة السويس", "مضيق هرمز"],
            answer: "مضيق هرمز",
            desc: "مضيق هرمز هو الممر المائي الذي يفصل بين الخليج العربي وبحر عمان، ويعد من أبرز الممرات البحرية في العالم. يمر عبره جزء كبير من إمدادات النفط العالمية، ما يجعله نقطة استراتيجية هامة بالنسبة للعالم. يتواجد هذا المضيق بين إيران وعمان."
        },
        {
            id: 7,
            question: "حلقة الوصل بين دول الوطن العربي هي دولة ...........",
            options: ["سوريا", "عمان", "فلسطين", "مصر"],
            answer: "مصر",
            desc: "مصر تتمتع بموقع جغرافي استراتيجي يجعلها نقطة وصل بين إفريقيا وآسيا، كما أنها تلعب دورًا محوريًا في السياسة العربية. تاريخيًا، كانت مصر بمثابة مركز ثقافي، سياسي وديني في المنطقة العربية، وما زالت حتى اليوم تمثل حلقة وصل بين دول الوطن العربي."
        },
        {
            id: 8,
            question: "أهم ممر مائي لدولة المغرب هو .......",
            options: ["قناة السويس", "مضيق جبل طارق", "باب المندب", "مضيق هرمز"],
            answer: "مضيق جبل طارق",
            desc: "مضيق جبل طارق هو الممر المائي الذي يفصل بين المحيط الأطلسي والبحر الأبيض المتوسط. هذا المضيق يعد بوابة هامة من حيث النقل البحري والتجارة الدولية، وهو الممر الذي يصل بين أوروبا وأفريقيا ويعتبر مهمًا بشكل خاص لدولة المغرب."
        },
        {
            id: 9,
            question: "إذا كنت من سكان المغرب وأردت السفر إلى دولة موريتانيا، سوف تتجه .....",
            options: ["شمالًا", "شرقًا", "غربًا", "جنوبًا"],
            answer: "جنوبًا",
            desc: "من المغرب، التوجه إلى موريتانيا يكون نحو الجنوب. تقع موريتانيا جنوب المغرب، وتحدها من الشمال الصحراء الكبرى ومن الشرق والجنوب منطقة غرب إفريقيا."
        },
        {
            id: 10,
            question: "تطل دولة ......................... على البحر العربي.",
            options: ["ليبيا", "الأردن", "العراق", "عمان"],
            answer: "عمان",
            desc: "عمان هي الدولة الوحيدة في الخيارات التي تطل على البحر العربي. تقع عمان على السواحل الجنوبية للجزيرة العربية، وتتمتع بتاريخ طويل في مجال التجارة البحرية والصيد البحري."
        },
        {
            id: 11,
            question: "تتمركز معظم دول الوطن العربي في .................... الكرة الأرضية.",
            options: ["شمال غرب", "جنوب", "غرب", "شرق"],
            answer: "شمال غرب",
            desc: "دول الوطن العربي تقع في شمال غرب الكرة الأرضية، حيث تمتد من المحيط الأطلسي غربًا إلى الخليج العربي شرقًا. هذه المواقع الجغرافية تعكس التنوع الكبير في المناخ والبيئة بين الدول العربية."
        },
        {
            id: 12,
            question: "تتحكم دولة .......... في قناة السويس.",
            options: ["لبنان", "الأردن", "مصر", "ليبيا"],
            answer: "مصر",
            desc: "قناة السويس هي ممر مائي يقع في مصر، وتربط بين البحر الأبيض المتوسط والبحر الأحمر. هذه القناة تعد واحدة من أهم المعابر البحرية في العالم، حيث تساهم بشكل كبير في حركة التجارة العالمية."
        },
        {
            id: 13,
            question: "من دول الوطن العربي في قارة أفريقيا هي ............",
            options: ["السعودية", "الجزائر", "لبنان", "الكويت"],
            answer: "الجزائر",
            desc: "الجزائر هي أكبر دولة عربية في قارة أفريقيا، وهي تعتبر واحدة من أهم الدول في منطقة شمال أفريقيا. الجزائر لها تاريخ طويل في مقاومة الاستعمار وتعد دولة غنية بالموارد الطبيعية مثل النفط والغاز."
        },
        {
            id: 14,
            question: "أصغر الدول العربية هي ..........",
            options: ["السعودية", "الجزائر", "البحرين", "العراق"],
            answer: "البحرين",
            desc: "البحرين هي أصغر دولة عربية من حيث المساحة، وتعتبر من الدول التي تمتاز بتطورها الاقتصادي السريع، خاصة في قطاع النفط والمال."
        }
    ];

    const [SelectedAnswer, setSelectedAnswer] = useState([]);
    const [QuizSubmitted, setQuizSubmitted] = useState(false);
    const [QuizScore, setQuizScore] = useState(0);

    useEffect(() => {
        const storedScore = localStorage.getItem('QuizScore');
        const storedAnswers = localStorage.getItem('SelectedAnswer');

        if (storedScore) {
            setQuizScore(parseInt(storedScore));
            setQuizSubmitted(true);
        }

        if (storedAnswers) {
            try {
                setSelectedAnswer(JSON.parse(storedAnswers));
            } catch (error) {
                console.error("خطأ أثناء استرجاع الإجابات:", error);
                setSelectedAnswer([]);
            }
        }
    }, []);

    const AnswerSelection = (questionIndex, answer) => {
        const updatedAnswers = [...SelectedAnswer];
        updatedAnswers[questionIndex] = answer;
        setSelectedAnswer(updatedAnswers);

        
        
    };

    const SubmitQuiz = (event) => {
        event.preventDefault();

        let score = 0;
        console.log(SelectedAnswer);
        window.scrollTo(0, 785);


        questions.forEach((question, index) => {
            if (SelectedAnswer[index] === question.answer) {
                score++;
            }
        });

        setQuizScore(score);
        setQuizSubmitted(true);


        const sanitizedAnswers = SelectedAnswer.map(answer => {
            if (typeof answer === "string") {
                return answer.trim();
            }
            return answer;
        });


        localStorage.setItem('QuizScore', score.toString());
        localStorage.setItem('SelectedAnswer', JSON.stringify(sanitizedAnswers));

    };
    const resetQuiz = () => {
        setSelectedAnswer([]);
        setQuizScore(0);
        setQuizSubmitted(false);

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
            <video src={video1} className='video' controls>
                
            </video>
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
