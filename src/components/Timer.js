import { useState, useEffect } from "react";

export default function Timer({time, setLog, selected, log}){
    const [remTime, setRemTime] = useState(time);


    useEffect(() => {
        setRemTime(time)
        const timer = setInterval(() => {
            setRemTime((time) => {
                if(time > 0){
                    return time - 10;
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
    }, [remTime])

    let length = (remTime / time)

    return (
        <div className="">
            <div className="m-2 rounded" style={{backgroundColor:'#386641', width:`${length * 44}rem`, height:'0.5rem'}}>
            </div>
        </div>
    )
}