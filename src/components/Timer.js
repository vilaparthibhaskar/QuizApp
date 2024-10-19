import { useState, useEffect } from "react";

export default function Timer({setLog, selected, log}){
    const [remTime, setRemTime] = useState(10000);


    useEffect(() => {
        let time = 10000;
        setRemTime(time)
        const timer = setInterval(() => {
            setRemTime((prevTime) => {
                if(prevTime > 0){
                    return prevTime - 10;
                }
                else{
                    clearInterval(timer)
                    return 0
                }})
        }, 10)

        return () => clearInterval(timer)
    }, [log])

    
    useEffect(() => {
        if(remTime <= 0){
        setLog((prev) => [...prev, selected])
        }
    }, [remTime, selected, setLog])

    let length = (remTime / 10000)

    return (
        <div className="">
            <div className="m-2 rounded" style={{backgroundColor:'#386641', width:`${length * 44}rem`, height:'0.5rem'}}>
            </div>
        </div>
    )
}