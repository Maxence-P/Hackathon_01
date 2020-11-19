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
    const initQues = () => {
        setQuest(Math.floor(Math.random() * questList.length));
    }
    const repon = (e) => {
        console.log(e.target.id === questList[quest].good);
    }
    return (
        <div className='quizWrapper'>
            {!inQuiz ?
                <button className='startGame' onClick={() => {initQues(); setQuiz(true)}}>Start</button>
                :
                <>
                    <h2>{questList[quest].ques}</h2>
                    <div className='buttonWrapper'>
                        {questList[quest].rep.map((el, id) => (
                            <button onClick={repon} key={`questId${id}`} id={id}>{el}</button>
                        ))}
                    </div>
                </>
            }
        </div>
    )
}


export default Quiz;