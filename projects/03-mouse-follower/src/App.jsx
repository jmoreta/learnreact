import { useEffect, useState } from 'react'

import './App.css'

const FolloMouse = () => {

  const [enabled, setEnabled] = useState(false)

  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {

    console.log('efecto', { enabled })

    const handleMove = (event) => {

      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {

      window.addEventListener('pointermove', handleMove)
    }

    //cleanup
    //se ejecuta cuando el componente se desmonta
    //o cuando cambian las dependencias
    return () => {
      window.removeEventListener("pointermove", handleMove)
    }

  }

    , [enabled])


  return (


    <main>

      <div style={{

        position: 'absolute',
        backgroundColor: '#89f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`

      }}>

      </div>

      <button onClick={() => setEnabled(!enabled)} >
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )



}




function App() {

return(

  <FolloMouse />


)



}

export default App
