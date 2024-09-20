import React, { useEffect, useState } from 'react';
import Episodechard from './Episodechard';
import './Episode.css'

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // Estado para carga

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const urlEp = `https://rickandmortyapi.com/api/episode?page=${currentPage}`;
        const response = await fetch(urlEp);
        const data = await response.json();

        console.log(data, "<----impresion data Episodios");

        setEpisodes(data.results);
        setTotalPages(data.info.pages);
        setLoading(false); // Actualizar carga al obtener datos
      } catch (error) {
        setError(error.message);
        setLoading(false); // Actualizar carga en caso de error
      }
    };

    fetchEpisodes();
  }, [currentPage]);


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='contendor-2'>
      <div className="episodes-container">
        {
          episodes.map((itempEP) => {

            return <Episodechard
              name={itempEP.name}
              air_date={itempEP.air_date}
              episode={itempEP.episode}
              className="episode-card"
            />
          })
        }
      </div>
      <p>Total de páginas: {totalPages}</p>
      <div className="buttons">
        <button onClick={handlePreviousPage} disabled={loading || currentPage === 1}>
          Página anterior
        </button>
        <button onClick={handleNextPage} disabled={loading || currentPage === totalPages}>
          Siguiente página
        </button>
      </div>


    </div>
  )
}

export default EpisodesPage


