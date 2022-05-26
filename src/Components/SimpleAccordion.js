import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SimpleAccordion(props) {
  return (
    <div className="w-full overflow-hidden ">
      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon color="#FFFFFF" fontSize="large"/>} style={props?.style} aria-controls="panel1a-content" id="panel1a-header">
          <Typography >{props.heading}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.children}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SimpleAccordion;
