import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Forth from "./components/Forth";
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share'
// import Fifth from "./components/Fifth";

const anchors = ["firstPage", "secondPage", "thirdPage", "forthPage"];

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["#f1bbc7", "#9463a4", "#b4e1f3", "#ffc6cc"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <First />
          <Second />
          <Third />
          <Forth />
          {/* <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial> */}
          {/* <Fifth/> */}
        </div>
      );
    }}
  />
);
export default App;