import React from 'react';
import { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Main from './Main';
import './style/Home.css';
import Loading from '../../src/loading.svg'

const API_KEY = '563492ad6f9170000100000168be622f4c4b4b09ae36846d120ad7f6';

export default function Home() {
  const [photoList, setFotoList] = useState({})
  const [home, setHome] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`https://api.pexels.com/v1/search/?page=${page}&per_page=20&query=food`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: API_KEY
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setFotoList(response)

        let randomPhoto = Math.floor(Math.random() * (response.photos.length - 1))
        let aleatory = response.photos[randomPhoto]

        setHome(aleatory)
      })
  }, [page])

  function prevPage() {
    setPage(page - 1)
    if (page <= 1) {
      setPage(1)
    }
  };

  function nextPage() {
    setPage(page + 1)
  };
  return (
    <section id='home'>
      {home &&
        <Main item={home} />
      }
      <div id='photoSection' className='photoSection'>
        {photoList.photos && (
          photoList.photos.map((photo) => (
            <picture key={photo.id} className='photoRowItem'>
              <img src={photo.src.medium} alt="Food photograpy" />
            </picture>
          ))
        )}
      </div>
      <div className='pagination'>
        <a href='#topo' onClick={prevPage}>
          <FaAngleLeft />
        </a>
        <a href='#topo' onClick={nextPage}>
          <FaAngleRight />
        </a>
      </div>

      {!home &&
        <div className='loading'>
          <img src={Loading} alt='Loading' />
        </div>
      }
    </section>
  )
};