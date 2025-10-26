import './App.css'
import Dashboard from './comp/Dashboard.jsx'
import NavBar from './comp/NavBar.jsx'
import Tab from './comp/Tab.jsx'
import Tailwind from './Tailwind.jsx'
function App() {


  return (
    <>
      <NavBar></NavBar>
      <Tailwind></Tailwind>

      <Dashboard></Dashboard>
      <center>
      <Tab></Tab>
      </center>

    </>
  )
}

export default App
