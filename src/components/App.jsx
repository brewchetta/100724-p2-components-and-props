import '../App.css'
import { whatever, whateverThree } from '../export-stuff'
import pizza from '../export-stuff.js'
import Navbar from './Navbar'
import ParadeDescription from './ParadeDescription.jsx'
import Float from './Float.jsx'

function App() {

  return (
    <div>

      <Navbar />

      <h1>Parade Routes in NYC</h1>

      <button>Click Me!</button>

      <ParadeDescription />

      <Float image={ "https://static.wikia.nocookie.net/macysthanksgiving/images/d/d3/IBC89-1.png/" } description="To infinity and beyond!" alt="float of buzz lightyear" />
      
      <Float image="https://static.wikia.nocookie.net/macysthanksgiving/images/3/3a/Garfield2003.jpg" description="Screw mondays" alt="float of garfield" />
      
      <Float image="https://static.wikia.nocookie.net/the-new-macys-parade/images/4/4c/71112186_115336513234068_13436668886419252_n.jpg" description="only you can prevent forest fires" alt="smokey bear float" />
      
    </div>
  )
}

export default App