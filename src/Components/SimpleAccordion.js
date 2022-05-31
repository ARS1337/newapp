import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

function SimpleAccordion(props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={
        props?.border
          ? "w-full overflow-hidden border border-gray-300  border-t-0 border-l-0 border-r-0"
          : "w-full overflow-hidden"
      }
    >
      <Accordion defaultExpanded={props?.defaultExpanded}>
        <AccordionSummary
          onClick={() => {
            setExpanded(!expanded);
          }}
          expandIcon={expanded ? <RemoveIcon fontSize="large" /> : <AddIcon fontSize="large" />}
          style={props?.headingStyle}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <div className={props?.headingTextStyle}>{props.heading}</div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ padding: 0 }}>
          <Typography>
            <div className={props?.childrenTextStyle}>{props.children}</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SimpleAccordion;
