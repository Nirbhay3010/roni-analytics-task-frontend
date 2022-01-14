
import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './pages/Homepage'
import NFTPage from './pages/NFTPage'
import AddNFTPage from './pages/AddNFTPage'
import NFTSPage from './pages/NFTSPage'
import Delete from './pages/Delete';
import Navbar from './components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <Router>
     <ChakraProvider>
    <div className="container dark">
      <div className="app">
        <Navbar></Navbar>
        <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/nft/:name" element={<NFTPage />} />
        <Route path="/add-nft" element={<AddNFTPage />} />
        <Route path="/nfts" element={<NFTSPage />} />
        <Route path="/delete/:name" element={<Delete/>} />
        </Routes>
        </div>
    </div>
    </ChakraProvider>
    </Router>
    
  )
}

export default App;
