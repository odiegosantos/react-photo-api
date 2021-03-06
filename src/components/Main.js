import './style/Main.css';

export default function main({ item }) {
  return (
    <section className='main' style={{
      backgroundImage: `url(${item.src.large2x})`
    }}>
      <div className='mainVertical'>
        <div className='mainHorizontal'>
          <div className='mainName'>
            <p id='topo'>Photo by. &nbsp;
              {item.photographer}
            </p>
          </div>
          <div className='mainButton'>
            <a href={item.photographer_url}
              alt={item.photographer_url}
              target='_blank nooperner'>
              Visit Perfil
            </a>
          </div>
        </div>
      </div>
    </section>
  )
};