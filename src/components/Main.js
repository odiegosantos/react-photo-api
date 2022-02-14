export default function Principal({ item }) {
  return (
    <section className='principal' style={{
      backgroundImage: `url(${item.src.large2x})`
    }}>
      <div className='principalVertical'>
        <div className='principalHorizontal'>
          <div className='principalName'>
            <p id='topo'>photographer</p>
            <h3>{item.photographer}</h3>
          </div>
          <div className='principalButton'>
            <a href={item.photographer_url}
              alt={item.photographer_url}
              target='_blank nooperner'>
              Visit Pexels Perfil
            </a>
          </div>
        </div>
      </div>
    </section>
  )
};