import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
function App() {
  return (
    <>
      <div className='h-[100vh] bg-rose-50'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddTask />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
