export function  listaPeliculas ({image,nombrePelicula,descripcion}){
    return(
        <>
        <h1>{nombrePelicula}</h1>
        <img src= {image} alt="" width="150" />
        <small>{listaPeliculas}</small>
        <p>{descripcion}</p>

        </>
    )

}