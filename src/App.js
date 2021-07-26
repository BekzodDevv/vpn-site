import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import Navbar1 from './component/Navbar/Navbar1'
import Section1 from './component/Section1/Section1'
import Section21 from './component/Section2/Section21'
import Section31 from './component/Section3/Section31'
import Section41 from './component/Section4/Section41'
import Section51 from './component/Section5/Section51'
import Footer1 from './component/Footer/Footer1'


function App() {
  const [content, setContent] = useState("");
  return (
    <div>
     <Navbar1 />
     <Section1 />
     <Section21 />
     <Section31 />
     <Section41 setTooltipContent={setContent} />
     <ReactTooltip>{content}</ReactTooltip>
     <Section51 />
     <Footer1 />
    </div>
  );
}

export default App;
