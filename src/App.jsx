
import AppRoutes from './AppRoutes';
import Header from './Components/Header';
import MainLayout from './layouts/MainLayout';

function App() {

  return (
    <>
   <MainLayout />
     <AppRoutes />
     <h1>this is from main layout </h1>
    
    </>
  )
}

export default App
