import { BrowserRouter } from 'react-router-dom';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import AllRoutes from './routes/AllRoutes';


function App() {
  return (
    // <div className="w-screen min-h-screen space-y-4">
    //   <Navbar />
    //   <MainContent/>
    // </div>
    <BrowserRouter>

      <AllRoutes />

    </BrowserRouter>
  );
}

export default App;
