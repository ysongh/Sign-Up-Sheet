import { HashRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Navbar from './components/layout/Navbar';
import SignUp from './pages/SignUp';
import SignupForm from './pages/SignupForm';
import SignUpList from './pages/SignUpList';

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
            path="/form"
            element={
              <SignupForm /> } />
          <Route
            path="/"
            element={
              <SignUpList /> } />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  )
}

export default App;
