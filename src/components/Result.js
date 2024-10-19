import { useContext } from 'react';
import QuestionResult from './QuestionResult'
import { QuestionsContext } from '../contexts/questionsContext';
import result from '../images/result.jpg';
import UnAttempted_img from '../images/unAttempted.png'
import correct_img from '../images/correct.png'
import wrong_img from '../images/wrong.png'

export function Result({log, setLog}){
    const {questions} = useContext(QuestionsContext);

    let UnAttempted = 0
    let correct = 0
    for(let i = 0;i < 10; i++){
        if(log[i] === -1){
            UnAttempted += 1
            continue
        }
        if(log[i] === questions[i]['answer']){
            correct += 1
        }
    }

    function handleReset(){
        setLog([])
    }


    return (
        <div className="container" style={{color:'#283618'}}>
            <div className='row text-center mb-2'>
                <h1>Results</h1>
            </div>
            <div className="row d-flex justify-content-center mb-2">
                <img src={result} style={{width:'10rem', height:'8rem'}} alt='result'></img>
            </div>
            <div className="row">
                <div className="col-4 text-center">
                    <h4>UnAttempted</h4>
                    <img src={UnAttempted_img} style={{width:'10rem', height:'8rem'}} alt='unattempted'></img>
                    <h4 className='my-2'>{UnAttempted}</h4>
                </div>
                <div className="col-4 text-center">
                <h4>Correct</h4>
                <img src={correct_img} style={{width:'10rem', height:'8rem'}} alt='correct'></img>
                <h4 className='my-2'>{correct}</h4>
                </div>
                <div className='col-4 text-center'>
                <h4>Wrong</h4>
                <img src={wrong_img} style={{width:'10rem', height:'8rem'}} alt='wrong'></img>
                    <h4 className='my-2'>{10 - UnAttempted - correct}</h4>
                </div>
            </div>
            {[0,1,2,3,4,5,6,7,8,9].map((idx) => {
                return (
                <div key={idx} className="row">
                    <QuestionResult index={idx} selectedOption={log[idx]}/>
                </div>
                );
            })}
            <div className='d-flex justify-content-center'>
                <button className='btn fw-bold mt-3' onClick={handleReset} style={{backgroundColor: 'green', color: 'black', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer',fontSize: '18px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',transition: 'background-color 0.3s ease, transform 0.3s ease'}}
                onMouseOver={(e) => e.target.style.backgroundColor = 'darkgreen'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'green'}
                onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
                onMouseUp={(e) => e.target.style.transform = 'scale(1)'}>
                    Reset
                </button>
            </div>

        </div>
    )
}