let sistemaDePelisConMetodos = {
    peliculas : pelis,
    promedioDeDuracion: funcion(){
        let sumatoria = this.peliculas.reduce(
            (acum, pelicula) => 
            acum + pelicula.duracion, 0
        )
        return sumatoria/this.peliculas.length;
    }
}
