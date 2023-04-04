import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/Navigaton/navigation.component";
import Autherication from "./routes/authentication/authentication.component";
const Shop = () => {
  return <h1>I am the shop page</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* <Route path="home" element={<Home />} /> */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Autherication />} />
      </Route>
    </Routes>
  );
};

export default App;
