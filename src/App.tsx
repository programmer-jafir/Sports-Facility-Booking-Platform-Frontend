import Navbar from './components/Navbar/Navbar'
import SportsFooter from './components/SportsFooter'
import MainLayout from './components/layout/MainLayout'
import ProtectedRoute from './components/layout/ProtectedRoute'

function App() {

  return (
   <>
   <Navbar/>
   <ProtectedRoute>
   <MainLayout/>
   </ProtectedRoute>
   </>

  )
}

export default App
