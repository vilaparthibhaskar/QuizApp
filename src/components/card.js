import { useState, useContext, useEffect } from "react";
import { QuestionsContext } from "../contexts/questionsContext";
import Timer from "./Timer";

export default function Card({log, setLog}){
    const {questions} = useContext(QuestionsContext);
    const [selected, setSelected] = useState(-1);

    useEffect(() => {
        setSelected(-1)
    }, [log])


    function handleClick(){
        let hold = selected
        setLog((prevLog) => {
            return [...prevLog, hold]
        })
    }

    function handleOption(ind){
        setSelected(ind)
    }


    let ind = log.length;

    return (
        <div className="container">
            <div className="row">
                <Timer setLog={setLog} selected={selected} log={log}/>
            </div>
            <div className="row fw-bold fw-italic mb-2">
                {questions[ind]['question']}
            </div>
            <div className="row d-flex justify-content-center">
                <button className="btn my-1 col-10 fw-bold" onClick={() => handleOption(0)} style={{backgroundColor:`${selected === 0 ? '#90be6d' : '#f6bd60'}`, color:'#ad2831'}}>
                {questions[ind]['options'][0]}
                </button>
            </div>
            <div className="row  d-flex justify-content-center">
                <button className="btn my-1 col-10 fw-bold"  onClick={() => handleOption(1)} style={{backgroundColor:`${selected === 1 ? '#90be6d' : '#f6bd60'}`, color:'#ad2831'}}>
                {questions[ind]['options'][1]}
                </button>
            </div>
            <div className="row  d-flex justify-content-center">
                <button className="btn my-1 col-10 fw-bold"  onClick={() => handleOption(2)} style={{backgroundColor:`${selected === 2 ? '#90be6d' : '#f6bd60'}`, color:'#ad2831'}}>
                {questions[ind]['options'][2]}
                </button>
            </div>
            <div className="row  d-flex justify-content-center">
                <button className="btn my-1 col-10 fw-bold"  onClick={() => handleOption(3)} style={{backgroundColor:`${selected === 3 ? '#90be6d' : '#f6bd60'}`, color:'#ad2831'}}>
                {questions[ind]['options'][3]}
                </button>
            </div>
            <div className="row">
                <button className="btn" onClick={handleClick}>
                    <p className="fw-bold">Next</p>
                </button>
            </div>
        </div>
    );
}