import './App.css'
import ClockH from './ClockH'
import ClockSb from './ClockSb'
import CurrentTime from './CurrentTime'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
    <center>
      <ClockH></ClockH>
      <ClockSb></ClockSb>
      <CurrentTime></CurrentTime>
    </center>
  )
}

export default App
