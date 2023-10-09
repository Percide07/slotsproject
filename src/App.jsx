
import './App.css'
import SlotsComp from './components/SlotsComp'
function App() {

  return (
    <>
      <SlotsComp val1= '🍌' val2='🍌' val3='🍌' className="slot" />
      <SlotsComp val1= '🍌' val2='🍑' val3='🍌' className="slot"/>
      <SlotsComp val1= '🍌' val2='🥝' val3='🥝' className="slot"/>
    </>
  )
}

export default App
