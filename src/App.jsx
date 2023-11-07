import { HashRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Text } from '@chakra-ui/react';

import './App.css';
import SignUp from './pages/SignUp';

function App() {
  return (
    <ChakraProvider>
      <HashRouter>
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
