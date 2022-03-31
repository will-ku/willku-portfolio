import React from "react"
import Routes from "./router/Routes"


const App = () => {
  const aboutHeadshot = new Image()
  aboutHeadshot.src = "https://pixsy-dev.s3.us-east-2.amazonaws.com/port/aboutmedarkshorter.jpg"

  const pixsyThumbnail = new Image()
  pixsyThumbnail.src = "https://pixsy-dev.s3.us-east-2.amazonaws.com/port/portpixsy.png"

  const homeCourtThumbnail = new Image()
  homeCourtThumbnail.src = "https://pixsy-dev.s3.us-east-2.amazonaws.com/port/porthomecourt.png"

  const nycVizThumbnail = new Image()
  nycVizThumbnail.src = "https://pixsy-dev.s3.us-east-2.amazonaws.com/port/portnycviz.png"

  return (
    <div className="tokyo_tm_all_wrap">  
      <Routes/>
    </div>
   
  );
}

export default App;

