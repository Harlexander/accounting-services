import Home from "./pages/home"
import { useEffect, useState } from "react"
import {Switch, Route} from "react-router-dom"
import Bookkeeping from "./pages/bookkeeping"
import Budget from "./pages/budget"
import Payroll from "./pages/payroll"
import Tax from "./pages/tax"
import Vat from "./pages/vat"
import { Navigation } from "./components/navigation"
import { Contact } from "./components/contact"
import JsonData from './data/data.json'

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])
  return (
    <>
    <Navigation/>
    <Switch>
      <Route path="/" exact>
      <Home/>
      </Route>
      <Route path="/Bookkeeping Services">
      <Bookkeeping/>
      </Route>
      <Route path="/Budgeting and Forecasting">
      <Budget/>
      </Route>
      <Route path="/Payroll Services">
      <Payroll/>
      </Route>
      <Route path="/Self-assessment Tax Returns">
      <Tax/>
      </Route>
      <Route path="/Vat Registration and Returns">
      <Vat/>
      </Route>
    </Switch>
   <Contact data={landingPageData.Contact} />
   </>
  )
}
export default App
