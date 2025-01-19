/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'

const useLocalStorage = (key, initialValue) => {

    const [name, setName] = useState(
        localStorage.getItem(key) ?
        localStorage.getItem(key) : initialValue
      );
    
      useEffect(()=>{
        console.log("hello")
        localStorage.setItem(key, name)
      }, [name, key])

  return [name, setName]
}

export default useLocalStorage