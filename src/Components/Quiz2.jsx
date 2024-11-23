import { toArray, toString } from 'lodash';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import video2 from '../Videos/lesson2.mp4';
export default function Quiz2() {
    const questions = [
        { 
            id: 1,
            question: "نزل الوحي على الرسول ﷺ وهو في سن .......... وكان يتعبد في غار .........", 
            options: ["حراء, الأربعين", "حراء, الثلاثين", "ثور, الأربعين"], 
            answer: "حراء, الأربعين",
            desc: "في سن الأربعين، كان النبي ﷺ في غار حراء يتعبد ويتأمل. في هذا المكان، نزل عليه الوحي لأول مرة من خلال جبريل عليه السلام. هذا الحدث كان بداية رسالة الإسلام التي استمرت 23 سنة. يعتبر غار حراء مكانًا مقدسًا في تاريخ الإسلام لأنه المكان الذي بدأ فيه الوحي والرسالة."
        },
        { 
            id: 2,
            question: "بعد ثلاث سنوات من الدعوة بدأت دعوة الرسول ﷺ ...............", 
            options: ["جهرية", "سرية", "هجومية"], 
            answer: "جهرية",
            desc: "الدعوة الإسلامية بدأت بشكل سري في البداية لتجنب المعارضة من قريش، ولكن بعد ثلاث سنوات من الدعوة بدأ النبي ﷺ في دعوة الناس علنًا وجهرًا. كانت هذه الفترة هي التي بدأ فيها النبي ﷺ بأداء الصلاة في الأماكن العامة ودعوة الناس من مختلف الطبقات الاجتماعية والجغرافية."
        },
        { 
            id: 3,
            question: "واجهت الدعوة الإسلامية معارضة شديدة من ...............", 
            options: ["الأنصار", "قريش", "الروم"], 
            answer: "قريش",
            desc: "الدعوة الإسلامية واجهت معارضة شديدة من قريش الذين كانوا يشكلون الطبقة الحاكمة في مكة. كانت قريش تخشى أن تهدد هذه الدعوة مصالحها الاقتصادية والاجتماعية. كما أن الدعوة كانت تتعارض مع عقيدتهم الوثنية، مما جعلهم يقاومونها بشدة عبر التهديدات والاضطهادات."
        },
        { 
            id: 4,
            question: "أول من أسلم من النساء ............... بينما ........... أول من أسلم من الرجال", 
            options: ["خديجة بنت خويلد, أبو بكر الصديق", "عائشة بنت أبي بكر, عمر بن الخطاب", "حفصة بنت عمر, علي بن أبي طالب"], 
            answer: "خديجة بنت خويلد, أبو بكر الصديق",
            desc: "خديجة بنت خويلد كانت أول امرأة تسلم بالإسلام، وكانت زوجة النبي ﷺ الأولى وأكبر داعمة له. كما كان أبو بكر الصديق هو أول من أسلم من الرجال، وهو أقرب الأصدقاء إلى النبي ﷺ وكان له دور كبير في نشر الإسلام ودعمه في بداية الدعوة."
        },
        { 
            id: 5,
            question: "أول من أسلم من الصبيان ..............", 
            options: ["علي بن أبي طالب", "عبد الله بن مسعود", "زيد بن ثابت"], 
            answer: "علي بن أبي طالب",
            desc: "علي بن أبي طالب هو أول من أسلم من الصبيان، وكان ابن عم النبي ﷺ. منذ صغره، كان علي يؤمن برسالة النبي ﷺ وسانده في دعوته. كان علي أيضًا من المقربين للنبي ﷺ ولعب دورًا مهمًا في العديد من الأحداث الهامة في تاريخ الإسلام."
        },
        { 
            id: 6,
            question: "كان الرسول ﷺ يخرج إلى غار ............... ليتعبد فيه", 
            options: ["ثور", "حراء", "المغارة"], 
            answer: "حراء",
            desc: "غار حراء هو المكان الذي كان النبي ﷺ يتوجه إليه في فترة ما قبل البعثة ليتعبد ويغرق في التأمل. كان هذا الغار يقع في جبل النور في مكة، وكان ملاذًا للنبي ﷺ من ضغوط الحياة الاجتماعية في مكة. ويعد هذا الغار المكان الذي نزل فيه أول وحي من الله سبحانه وتعالى."
        },
        { 
            id: 7,
            question: "استغرقت المرحلة السرية ...................... سنوات", 
            options: ["ثلاث", "خمس", "سبع"], 
            answer: "ثلاث",
            desc: "استمرت المرحلة السرية من الدعوة الإسلامية لمدة ثلاث سنوات، كان خلالها النبي ﷺ يدعو في الخفاء خوفًا من أن تكتشف قريش الدعوة وتتصدى لها بعنف. كان النبي ﷺ يدعو إلى الإسلام من خلال القلة المؤمنة التي آمنت به سرًا، وقد استمرت هذه المرحلة حتى أصبحت الدعوة علنية."
        },
        { 
            id: 8,
            question: "كانت أول هجرة للمسلمين إلى ...........................", 
            options: ["الحبشة", "المدينة", "الطائف"], 
            answer: "الحبشة",
            desc: "أول هجرة للمسلمين كانت إلى الحبشة في السنة الخامسة من البعثة، وذلك بسبب الاضطهاد الذي تعرض له المسلمون من قريش. كانت الهجرة إلى الحبشة خيارًا آمنًا حيث كان ملك الحبشة نجاشي معروفًا بحكمته وعدله. وعندما وصل المسلمون هناك، رحب بهم النجاشي ومنحهم الحماية."
        },
        { 
            id: 9,
            question: "كان لأهل مكة رحلتان تجاريتان هما....................و......................", 
            options: ["رحلة الشتاء, رحلة الصيف", "رحلة الربيع, رحلة الخريف", "رحلة الجنوب, رحلة الشمال"], 
            answer: "رحلة الشتاء, رحلة الصيف",
            desc: "كان أهل مكة يقومون برحلتين تجاريتين سنويًا: رحلة الشتاء إلى اليمن، ورحلة الصيف إلى الشام. كانت هذه الرحلات تشكل جزءًا كبيرًا من الاقتصاد المكي، حيث كانوا يتاجرون بالعديد من البضائع. وتعتبر هذه الرحلات من المزايا الاقتصادية التي استفادت منها قريش."
        },
        { 
            id: 10,
            question: "من العادات السيئة للعرب قبل الإسلام .......... من العادات الحسنة للعرب قبل الإسلام .......", 
            options: ["وأد البنات, الكرم, الوفاء بالعهد", "شرب الخمر, الكرم, العدل", "الربا, حسن الجوار, الشجاعة"], 
            answer: "وأد البنات, الكرم, الوفاء بالعهد",
            desc: "من العادات السيئة التي كانت منتشرة بين العرب قبل الإسلام كان وأد البنات، وهو دفن الفتيات أحياء. لكنهم أيضًا كانوا يمتازون ببعض العادات الحسنة مثل الكرم والوفاء بالعهد. كان الكرم من أبرز صفاتهم التي امتدحت، كما أن الوفاء بالعهد كان من القيم النبيلة لديهم."
        },
        { 
            id: 11,
            question: "كانت لب لٌة لر شٌ من أشد المرحب نٌ بالدعوة الإسلام ةٌ", 
            options: ["أبو طالب", "عمرو بن العاص", "أبو بكر الصديق"], 
            answer: "أبو طالب",
            desc: "كان أبو طالب من أشد الأشخاص الذين أيدوا وساندوا النبي ﷺ في بداية الدعوة، رغم أنه لم يعلن إيمانه بالإسلام. كان دائمًا يدافع عن النبي ﷺ ويحميه من الأذى. أبو طالب كان له دور محوري في حماية النبي ﷺ من هجمات قريش."
        },
        { 
            id: 12,
            question: "هجرة المسلم نٌ إلى ثٌرب كانت لبل هجرتهم إلى الحبشة", 
            options: ["مكة", "المدينة", "الشام"], 
            answer: "الحبشة",
            desc: "كانت أول هجرة للمسلمين إلى الحبشة بسبب الاضطهاد الكبير الذي تعرضوا له في مكة. كانت الهجرة إلى الحبشة خيارًا أمنًا للمسلمين الذين كانوا يواجهون تهديدًا مباشرًا من قريش. وبالفعل، لاقى المسلمون ترحيبًا كبيرًا في الحبشة من ملكها النجاشي."
        },
        { 
            id: 13,
            question: "استمرت الدعوة سر ةٌ خمس سنوات", 
            options: ["ثلاث", "خمس", "سبع"], 
            answer: "خمس",
            desc: "استمرت الدعوة الإسلامية سرية لمدة خمس سنوات من بداية الوحي، حيث كان النبي ﷺ يرسل رسائله بشكل غير علني خوفًا من ملاحقة قريش. في هذه الفترة، كان الصحابة يلتقون بالرسول ﷺ سرًا ويتعلمون منه الدين الإسلامي."
        }
    ];
    
      
    const [selectedAnswer2, setSelectedAnswer2] = useState([]);
    const [quizSubmitted2, setquizSubmitted2] = useState(false);
    const [QuizScore2, setQuizScore2] = useState(0);

    useEffect(() => {
        const storedScore = localStorage.getItem('QuizScore2');
        const storedAnswers = localStorage.getItem('SelectedAnswer2');

        if (storedScore) {
            setQuizScore2(parseInt(storedScore));
            setquizSubmitted2(true);
        }

        if (storedAnswers) {
            try {
                setSelectedAnswer2(JSON.parse(storedAnswers));
            } catch (error) {
                console.error("خطأ أثناء استرجاع الإجابات:", error);
                setSelectedAnswer2([]);
            }
        }
    }, []);

    const AnswerSelection = (questionIndex, answer) => {
        const updatedAnswers = [...selectedAnswer2];
        updatedAnswers[questionIndex] = answer;
        setSelectedAnswer2(updatedAnswers);

        
        
    };

    const SubmitQuiz = (event) => {
        event.preventDefault();

        let score = 0;
        console.log(selectedAnswer2);
        window.scrollTo(0, 985);


        questions.forEach((question, index) => {
            if (selectedAnswer2[index] === question.answer) {
                score++;
            }
        });

        setQuizScore2(score);
        setquizSubmitted2(true);


        const sanitizedAnswers = selectedAnswer2.map(answer => {
            if (typeof answer === "string") {
                return answer.trim();
            }
            return answer;
        });


        localStorage.setItem('QuizScore2', score.toString());
        localStorage.setItem('SelectedAnswer2', JSON.stringify(sanitizedAnswers));

    };
    const resetQuiz = () => {
        setSelectedAnswer2([]);
        setQuizScore2(0);
        setquizSubmitted2(false);

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
            <video src={video2} className='video' controls></video>
            {!quizSubmitted2 && ( 
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
                                        checked={selectedAnswer2[questionIndex] === option} 
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

            {quizSubmitted2 && (
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
                                    <h4>اجابتك : {selectedAnswer2[Qindex]} </h4>
                                    {
                                    selectedAnswer2[Qindex]!==question.answer ? (
                                        <h4>اجابتك خاطئة ❌</h4>
                                    ) : null
                                    
                                   }
                                     {
                                    selectedAnswer2[Qindex]===question.answer ? (
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
