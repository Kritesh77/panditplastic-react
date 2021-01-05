import React from "react";
import Header from "./components/Header.js";
import Mainwrap from "./components/Mainwrap.js";
import Slider1 from "./components/Slider1.js";
import Slider2 from "./components/Slider2.js";
import Helmet from "react-helmet";
function App() {
  return (
    <div>
      <Header />
      <Mainwrap />
      <Slider1 />
      <Slider2 />
    </div>
  );
}
<Helmet>
  <script src="/script.js" type="text/javascript" />
</Helmet>;
export default App;
