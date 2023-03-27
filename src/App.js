import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";


const Shop = () => {
  return (<h1>this is the Shop</h1>)
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
