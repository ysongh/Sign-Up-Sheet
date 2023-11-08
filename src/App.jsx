import { HashRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Text } from '@chakra-ui/react';

import './App.css';
import Navbar from './components/layout/Navbar';
import SignUp from './pages/SignUp';

function App() {
  return (
    <ChakraProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route
            path="/test"
            element={
              <>
                <h1>Test</h1>
              </>} />
          <Route
            path="/"
            element={
              <SignUp /> } />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  )
}

export default App;
