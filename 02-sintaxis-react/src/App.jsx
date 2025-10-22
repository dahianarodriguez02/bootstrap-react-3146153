 //vamos a importar los estilos y el componente InfoCard
 
 import { InfoCard } from "./components/InfoCard" 
 import { UseCard } from "./components/Use.Card"
 import "./App.css"
 import { listaPeliculas } from "./components/listapeliculas"
 
 export function App () {

  return (

    <div>
          <h1>App</h1>
          <InfoCard/>
          <UseCard 
          image="https://rickandmortyapi.com/api/character/avatar/406.jpeg" 
          userName= "pepe"
         
         />
           <UseCard 
          image="https://rickandmortyapi.com/api/character/avatar/130.jpeg" 
          userName= "pepe"
          
          
          />
          <UseCard 
          image="https://rickandmortyapi.com/api/character/avatar/677.jpeg" 
          userName= "pepe"
          
          
          />
           <UseCard 
          image="https://rickandmortyapi.com/api/character/avatar/502.jpeg" 
          userName= "pepe"
          />

        <listaPeliculas
         image="https://i.postimg.cc/43LQvVpb/a-dos-metros-de-ti.jpg" 
          nombrePelicula="a dos metros de ti"
          descripcion="película romántica que cuenta la historia de Stella y Will, dos adolescentes con fibrosis quísiticas que se enamoran "
        
        
        />
         
                          
         



    </div>
  )
}


