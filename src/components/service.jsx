import {Link} from "react-router-dom"
export const Service = (props) => {
    return (
      <div className='text-center' id="services" style={{paddingTop : "80px"}}>
        <div className='container'>
          <div className='section-title'>
            <h2>Services</h2>
          </div>
          <div className="container text-center">
  <div className="row vcenter">
      <div className="col-md-6 col-xs-12">
          <h3>Bookkeeping Services </h3>
            <div className="text-left py-2">
              <p>We can prepare and submit your accounts for you. We will discuss all your figures and answer any questions you may have about your accounts. We provide a full range of bookkeeping services including maintaining cashbooks for sole traders, purchase ledgers entry, sales ledger accounting, trial balance and balance sheet, etc.
              </p>
              <Link to="/Bookkeeping Services" className="btn btn-primary">Read More</Link>
              </div>
              <br/>
          </div>
          <div className="col-md-6 col-xs-12 text-center">
          <img alt="service" className="img-responsive"  height="200px" src='img/bookkeeping.jpg'/>
          </div>
  </div>
  <hr/>
  <div className="row vcenter">
      <div className="col-md-6 col-xs-12">
      <img alt="service" className="img-responsive"  height="200px" src='img/payroll.jpg'/>
      </div>
      <div className="col-md-6 col-xs-12">
          <h3>Payroll Services</h3>
          <div className="text-left py-2">
            <p>We help with paying your staff promptly, compliance with laws, payroll taxes and deductions while you focus your time and resources on running your business.
            </p>
            <Link to="/Payroll Services" className="btn btn-primary">Read More</Link>
        </div>
        <br/>
          </div>
  </div>
  <hr/>
   <div className="row vcenter">
      <div className="col-md-6 col-xs-12">
          <h3>Vat Registration and Returns</h3>
          <div className="text-left py-2">
            <p>Our team assists with VAT registration, planning, administration control, and reconciliation process.
            </p>
            <Link to="/Vat Registration and Returns" className="btn btn-primary">Read More</Link>
          </div>
          <br/>
          </div>
          <div className="col-md-6 col-xs-12">
              <img alt="service" className="img-responsive"  height="200px" src='img/vat.jpg'/>
          </div>
  </div>
  <hr/>
  <div className="row vcenter">
   <div className="col-md-6 col-xs-12">
              <img alt="service" className="img-responsive" height="200px" src='img/budget.jpg'/>
          </div>
      <div className="col-md-6 col-xs-12">
          <h3>Budgeting and Forecasting </h3>
          <div className="text-left py-2">
            <p>We are specialists in using detailed financial account and budget to plan business projects and plans from company’s revenues, expenses, cash flow and financial position.
            </p>
            <Link to="/Budgeting and Forecasting" className="btn btn-primary">Read More</Link>
          </div>
          <br/>
          </div>
          <br/>
  </div>
  <hr/>
   <div className="row vcenter ">
      <div className="col-md-6 col-xs-12">
          <h3>Self-Assessment Tax Returns</h3>
          <div className="text-left py-2">
            <p>Our team will help if you work for yourself, have other sources of income such as a property, make a significant gain when you sell an asset, or earn a salary above £100k then you need to report what you earn to HMRC.
            </p>
            <Link to="/Self-assessment Tax Returns" className="btn btn-primary">Read More</Link>
          </div>
          <br/>
          </div>
          <div className="col-md-6 col-xs-12">
              <img alt="service" className="img-responsive"  height="200px" src='img/tax return.jpg'/>
          </div>
  </div>
</div>
</div>
</div>
    )
  }
  