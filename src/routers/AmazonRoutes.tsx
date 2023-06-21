import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home.tsx';

const AmazonRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='aii' element={<h1>Hello world</h1>} />
    </Routes>
  );
};

export default AmazonRoutes;
