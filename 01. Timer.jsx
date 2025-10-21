import React, { useEffect, useState } from 'react'

const Timer = () => {
    let [leftTime, setLeftTime] = useState(3)
    let [displayTime,setDisplayTime] = useState()

    useEffect(()=>{
        let intervalId = setInterval(() => {
            setLeftTime((prev)=>{
                if(prev > 0){
                    return prev -1
                }
                return 0
            })
        }, 1000);

        return()=>(
            clearInterval(intervalId)
        )
    },[])

    useEffect(()=>{
        let munite = (Math.floor(leftTime / 60)).toString().padStart(2,0)
        let second = (Math.floor(leftTime % 60)).toString().padStart(2,0)
        let formatted_time = `${munite}: ${second} `
        console.log(formatted_time)
        setDisplayTime(formatted_time)
    },[leftTime])



    return (
        <div>
            <p>reamining time : {leftTime}</p>
            <p>reamining time : {displayTime}</p>
        </div>
    )
}

export default Timer
