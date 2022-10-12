import React from "react";
import "./Sidebar.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Sidebar() {
  return (
    <aside>
      <div className="container">
        <h1>Katalog</h1>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Название</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="center">
                <p>
                  <input name="radio" type="radio" /> А-Я
                </p>
                <p>
                  <input name="radio" type="radio" />
                  А-Я
                </p>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Ширина</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="center">
                <p>
                  <input name="box" type="checkbox" /> 1000
                </p>
                <p>
                  <input name="box" type="checkbox" /> 20
                </p>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Высота</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="center">
                <p>
                  <input name="box" type="checkbox" /> 100
                </p>
                <p>
                  <input name="box" type="checkbox" /> 50
                </p>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </aside>
  );
}

// function Sidebar() {
//   return (
//     <>
//       <aside>
//         <div className="container">
//           <h1> Katalog </h1>
//           <div className="select">
//             <div className="select_1">
//               <h3>Название</h3>
//               <p>
//                 <input name="radio" type="radio" />
//                 А-Я
//               </p>
//               <p>
//                 <input name="radio" type="radio" />
//                 А-Я
//               </p>
//             </div>
//             <div className="select_2">
//               <h3>Высота</h3>
//               <p>
//                 <input name="box" type="checkbox" />
//                 1000
//               </p>
//               <p>
//                 <input name="box" type="checkbox" />
//                 20
//               </p>
//             </div>
//             <div className="select_3">
//               <h3>Ширина</h3>
//             </div>
//           </div>
//         </div>

//       </aside>
//     </>
//   );
// }

export default Sidebar;
