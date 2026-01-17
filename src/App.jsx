import './App.css'
import BoxgleeDifference from './assets/components/Differences'
import Footer from './assets/components/Footer'
import Header from './assets/components/Header/Header'
import LandigImg from './assets/components/LandigImg'

function App() {

  return (
    <div className='relative'>
      <Header />
      <LandigImg />
      <BoxgleeDifference/>
      <Footer />

    </div>
  )
}

export default App
