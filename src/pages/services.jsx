import { useState, useEffect } from 'react'
import JsonData from '../data/data.json'

const Services = (props) => {
    const [data, SetData] = useState({})
    useEffect(() => {
      let url = window.location.pathname.split("/")[2]
      url = decodeURIComponent(url)
      const information = JsonData.Service.find(({title}) => (title === url) )
      SetData(information)
    }, [])
  return (
      <Structure data={data}/>
  )
}

const Structure = ({data}) => {
    return (
    <>
    <div class="jumbotron text-center head" style={{marginTop : "80px"}}>
    <div class="p-5 inner-head">
      <div class="row">
        <div class="col-md-6">
    <h3>{data.title}</h3>
        </div>
    </div>
    </div>
  </div>
<div class="container" style={{padding : "20px 0 30px 0"}}>
<p>{data.wording}</p>
</div>
</>
)
}
export default Services
