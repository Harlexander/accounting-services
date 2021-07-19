export const Services = (props) => {
  return (
    <div id="software" className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Software We Use</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
            <div className='col-md-3'>
                  {' '}
                  <i className="fa">
                  <img  src="/img/portfolio/nomisma.png" height="27px"/>
                  </i>
                  <div className='service-desc'>
                    <h3>Nomisma</h3>
                  </div>
                </div>
        </div>
      </div>
    </div>
  )
}
