import { useState, useEffect } from 'react';
import Main from './Main';

const API_KEY = '563492ad6f9170000100000168be622f4c4b4b09ae36846d120ad7f6';

export default function Home() {
  const [fotoList, setFotoList] = useState({})
  const [principal, setPrincipal] = useState(null)
  const [page] = useState(1)

  useEffect(() => {
    fetch(`https://api.pexels.com/v1/search/?page=${page}&per_page=30&query=food`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: API_KEY
      },
    }).then((response) => response.json())
      .then((response) => {
        setFotoList(response)

        let randomPrincipal = Math.floor(Math.random() * (response.photos.length - 1))
        let aleatory = response.photos[randomPrincipal]

        setPrincipal(aleatory)
      })
  }, [page])

  return (
    <section id='home'>
      {principal &&
        <Main item={principal} />
      }
      <div id='fotosSection' className='fotosSection'>
        {fotoList.photos && (
          fotoList.photos.map((foto) => (
            <picture key={foto.id} className='fotosRowItem'>
              <img src={foto.src.medium} alt="Foto" />
            </picture>
          ))
        )}
      </div>
    </section>
  )
};