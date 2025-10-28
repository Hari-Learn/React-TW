import './App.css'
import Dashboard from './comp/Dashboard.jsx'
import ListGroup from './comp/ListGroup.jsx'
import Mark from './comp/Mark.jsx'
import NavBar from './comp/NavBar.jsx'
import Tab from './comp/Tab.jsx'
import Tailwind from './Tailwind.jsx'
function App() {


  return (
    <>
      <NavBar></NavBar>
      <Mark></Mark>
      <Tailwind></Tailwind>

      <Dashboard></Dashboard>
      <ListGroup></ListGroup>
      <Tab></Tab>
      

    </>
  )
}

export default App
