import React, { useState } from 'react';
import './Quiz.css';

const Quiz = () => {
    const questList = [
        {
            ques: 'When did the Classic Antiquity started ?',
            rep: ['V century BC', 'VI century BC', 'VII century BC'],
            good: '2',
        },
        {
            ques: 'What event marks the end of the Classic Antiquity ?',
            rep: ['Rome pillaging in 410', 'The deposed of Romulus Augustulus in 476'],
            good: '1',
        },
        {
            ques: 'When was Rome founded ?',
            rep: ['600 BC', '700 BC', '750 BC', '800 BC'],
            good: '3',
        },
        {
            ques: 'When was the Olympic Games first established ?',
            rep: ['750 BC', '775 BC', '800 BC', '825 BC'],
            good: '1',
        },
        {
            ques: 'What does SPQR means ?',
            rep: ['Rome stand above all', 'the Senate and the Roman people', 'the Roman Empire is Eternal'],
            good: '1',
        },
        {
            ques: 'What does Nike mean ?',
            rep: ['Nothing but it is cool', 'Victorious'],
            good: '1',
        },
        {
            ques: 'Who was fighting who during the Trojan war ?',
            rep: ['Greeks vs Persians', 'Greeks vs Greeks'],
            good: '1',
        },
        {
            ques: 'What was ancient Greece main strengh ?',
            rep: ['Infantry', 'Navy', 'Airforce'],
            good: '1',
        },
        {
            ques: 'What was Roman Empire main strengh ?',
            rep: ['Infantry', 'Navy', 'Airforce'],
            good: '0',
        },
        {
            ques: 'How many Olympians were in Greek Mythology ?',
            rep: ['10', '11', '12', '13'],
            good: '4',
        },
        {
            ques: 'How many Gods were in Roman Mythology ? (hard question)',
            rep: ['3 majors flamens (with designed priests), 12 minors flamens, 20 Di selecti (principal gods), 23 Sabine (adopted by Romans)',
            '3 majors flamens (with designed priests), 8 minors flamens, 15 Di selecti (principal gods), 12 Sabine (adopted by Romans)'],
            good: '0',
        },
        {
            ques: 'What was Athens emblem ? (was given by a god)',
            rep: ['A Horse', 'An Olive Tree'],
            good: '1',
        },
        {
            ques: 'What was Rome mains emblems ?',
            rep: ['Eagle and Wolf', 'Falcon and Bear'],
            good: '0',
        },
        {
            ques: 'What was the Trojan horse ?',
            rep: ['A peaceful gift to end the war with peace', 'A fake gift in order to allow soldiers to enter the city and win by force'],
            good: '1',
        },
        {
            ques: 'Did you liked the questions ?',
            rep: ['Yes', 'No'],
            good: '5',
        },
    ]
    const [inQuiz, setQuiz] = useState(false);
    const [quest, setQuest] = useState(0);
    const [goodAws, setGoodAws] = useState(0);
    const [result, setResultVisible] = useState(false)

    const seeResult = () => {
        setResultVisible(true);
    }

    const NextQues = () => {
        if (quest === questList.length - 1){ return seeResult() }
        setQuest(quest + 1);
    }
    const repon = (e) => {
        // console.log(e.target.id === questList[quest].good);
        if (e.target.id === questList[quest].good) { setGoodAws( goodAws + 1 ) };
        NextQues();
    }
    const reloadGame = () => {
        setQuest(0);
        setResultVisible(false);
        setGoodAws(0);
    }
    return (
        <div className='quizWrapper'>
            {!inQuiz ?
                <button className='startGame' onClick={() => {setQuiz(true)}}>Start</button>
                :
                <>
                    {!result && <h2>{questList[quest].ques}</h2>}
                    <div className='buttonWrapper'>
                        {!result && questList[quest].rep.map((el, id) => (
                            <button onClick={repon} key={`questId${id}`} id={id}>{el}</button>
                        ))}
                    </div>
                    {result && <button onClick={reloadGame}>Try Again</button>}
                    {result && <div className='congratulation'>Congratulations {Math.floor(goodAws / (questList.length - 1) * 100)} % of right answer</div>}
                </>
            }
        </div>
    )
}

export default Quiz;
