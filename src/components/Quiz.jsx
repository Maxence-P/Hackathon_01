import React, { useState } from 'react';
import './Quiz.css';

const Quiz = () => {
    const questList = [
        {
            ques: 'Chocolat ou vanille ?',
            rep: ['Chocolat', 'Vanille'],
            good: '1',
        }
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
