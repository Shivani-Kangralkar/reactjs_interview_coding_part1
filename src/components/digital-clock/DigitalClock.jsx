import React, { useEffect, useState } from 'react'
import './digital.css'

const DigitalClock = () => {
    // set as current date
    const [ time, setTime] = useState(new Date())

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
        }, 1000)

        return()=>{
            clearInterval(intervalId)
        }
    },[])

  return (
    <div className='digital-clock'>
        <h1>Digital Clock</h1>
        <div className='clock'>
            <div className='time'>
              {/* display time */}
                <span>
                    {
                        time.getHours().toString().padStart(2, "0")
                    }
                </span>:
                <span>
                    {
                        time.getMinutes().toString().padStart(2, "0")
                    }
                </span>:
                <span>
                    {
                        time.getSeconds().toString().padStart(2,"0")
                    }
                </span>
            </div>

            {/* displays date */}
            <div className='date'>
                    {
                        time.toLocaleDateString(undefined,{
                            weekday:"long",
                            year:"numeric",
                            month:"long",
                            day:"numeric"
                        })
                    }
            </div>

        </div>
      
    </div>
  )
}

export default DigitalClock
