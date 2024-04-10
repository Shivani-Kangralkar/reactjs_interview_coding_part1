import  { useEffect, useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
    const [value,setValue] = useState(()=>{

        let currentValue;
        // console.log("defaultValue", defaultValue);


        try{
            currentValue = JSON.parse(
                localStorage.getItem(key) || String(defaultValue)
            )

        }catch(error){
            console.log(error);
            currentValue = defaultValue;
        }
        // console.log("currentValue",currentValue);
        return currentValue
    });

    useEffect(()=>{
        // local storage key value is stored in array of strings , [""]
        localStorage.setItem(key, JSON.stringify(value))
    },[key,value])

  return [value,setValue]
}

export default useLocalStorage
