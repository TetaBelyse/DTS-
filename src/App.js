import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="w-screen min-h-screen space-y-4">
      <Navbar />
      <MainContent/>
    </div>
  );
}

export default App;
