import { useContext } from "react";
import { QuestionsContext } from "../contexts/questionsContext";

export default function QuestionResult({index, selectedOption}){
    const {questions} = useContext(QuestionsContext);

    let answer = questions[index]['answer']

    return (
        <div className="container mt-1 fw-bold">
            <div className="row">
                {index + 1}. {questions[index]['question']}
            </div>
            <div className="row" style={{color: `${answer === 0 ? selectedOption === 0 ? 'green' : 'red' : '#ff9914'}`}}>
                <p className="ml-2 my-1">{questions[index]['options'][0]}</p>
            </div>
            <div className="row" style={{color: `${answer === 1 ? selectedOption === 1 ? 'green' : 'red' : '#ff9914'}`}}>
                <p className="ml-2 my-1">{questions[index]['options'][1]}</p>
            </div>
            <div className="row" style={{color: `${answer === 2 ? selectedOption === 2 ? 'green' : 'red' : '#ff9914'}`}}>
                <p className="ml-2 my-1">{questions[index]['options'][2]}</p>
            </div>
            <div className="row" style={{color: `${answer === 3 ? selectedOption === 3 ? 'green' : 'red' : '#ff9914'}`}}>
                <p className="ml-2 my-1">{questions[index]['options'][3]}</p>
            </div>
        </div>
    )
}