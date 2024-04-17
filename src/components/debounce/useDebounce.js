import { useEffect, useState } from 'react'

const useDebounce = (paramValue,delay=1000) => {
    const [ debounceValue, setDebounceValue] = useState(paramValue);

    // console.log("debounce", paramValue,delay);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounceValue(paramValue)
        },delay)

        return () => clearInterval(timer)
    },[paramValue,delay])

  return debounceValue
}

export default useDebounce
