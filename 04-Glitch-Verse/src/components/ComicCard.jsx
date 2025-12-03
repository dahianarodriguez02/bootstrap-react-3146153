import React from 'react'
import "../Styles/Comic.css"
export const ComicCard = () => {
  return (

    <div className='container'>
      <div className="titulos" >
            <h1 >Matrix</h1>
          </div>

          <div>
           <h1 className="parrafo">Matrix es un cómic interactivo
            que busca concienzar  </h1>
            <h1 className="parrafo">a las personas sobre el buen uso que se le debe dar a la tecnología</h1> 
          </div>

          <div className='seccion-comic'>
            <h1 className='comic'>CONOCE EL CÓMIC</h1>
            <button className='historia'>Historia del cómic</button>
            <h1></h1>
            <img src="../public/glicht.png" alt="" />
            <h1 className='parrafo-2'>Matrix es una historia basada en un mundo siendo controlada por la tecnologia, mostrando como la manipulación tecnologica puede llegar
               a ser nuestro mayor destructor. En cada una de las fases Matrix muestra como Chappie un
                Robot que fue hecho para dominar, ve lo que hace la tecnología y no esta bien. Noah y Emma buscan una solución para que el mundo no se acabe.</h1>
                <img className='comic12' src ="" alt="" />
          </div>
    </div>
  )
}



