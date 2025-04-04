import './App.css'
import { use, useState } from 'react'






export  function Square({pValue}) {

    const [initValue, setInitValue] = useState(pValue)

    const handleClick = () => {

        if (initValue == 'X') {

            setInitValue('O') 
        } else {

            setInitValue('X')
        }


    }

    return (
        
        <div className='square' onClick={handleClick}><span className='pChoice'>{initValue}</span></div>
    )


}