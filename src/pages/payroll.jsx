import { useState, useEffect } from 'react'
import JsonData from '../data/data.json'

const Payroll = (props) => {
    const [data, SetData] = useState({})
    useEffect(() => {
      const information = JsonData.Service.find(({title}) => (title === "Payroll Services") )
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
<div className="col-md-6">
<br /><br /><br />
<p>{data.wording}</p>
<a href="#contact"><button className="btn btn-primary" style={{padding : "10px 10px", margin : "15px 0"}}>Apply For Service</button></a>
</div>
<div className="col-md-6">
<img src="img/payroll.jpg" className="service-img"/>
</div>
</div>
</>
)
}
export default Payroll
