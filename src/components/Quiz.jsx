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
            rep: ['', ''],
            good: '1',
        },
        {
            ques: ' ou  ?',
            rep: ['', ''],
            good: '1',
        },
        {
            ques: ' ou  ?',
            rep: ['', ''],
            good: '1',
        },
        {
            ques: ' ou  ?',
            rep: ['', ''],
            good: '1',
        },
        {
            ques: ' ou  ?',
            rep: ['', ''],
            good: '1',
        },
        {
            ques: ' ou  ?',
            rep: ['', ''],
            good: '1',
        },
        {
            ques: ' ou  ?',
            rep: ['', ''],
            good: '1',
        },
        {
            ques: ' ou  ?',
            rep: ['', ''],
            good: '1',
        },
        {
            ques: ' ou  ?',
            rep: ['', ''],
            good: '1',
        },
        {
            ques: ' ou  ?',
            rep: ['', ''],
            good: '1',
        },
        {
            ques: ' ou  ?',
            rep: ['', ''],
            good: '1',
        },
        {
            ques: ' ou  ?',
            rep: ['', ''],
            good: '1',
        },
        {
            ques: '   ?',
            rep: ['', ''],
            good: '1',
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
                    {result && <div className='congratulation'>Congratulations {Math.floor(goodAws / questList.length * 100)} % of right answer</div>}
                </>
            }
        </div>
    )
}


export default Quiz;