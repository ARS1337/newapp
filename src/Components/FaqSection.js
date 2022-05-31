import React from "react";
import SimpleAccordion from "./SimpleAccordion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

function FaqSection(props) {
  return (
    <div className="w-full  rounded-lg">
      <div className="w-full overflow-hidden ">
        <Accordion sx={{}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon fontSize="large" sx={{ color: "white" }} />}
            style={{ backgroundColor: "#2e5984", color: "white", borderRadius: "10px" }}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <div className="text-xl font-Poppins-SemiBold">Frequently Asked Questions (FAQ)</div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{padding:0}}>
            <Typography>
              <SimpleAccordion heading="Lorem ipsum dolor sit amet" border={true} headingTextStyle="text-xl font-Poppins-SemiBold" childrenTextStyle="font-Poppins-Regular text-lg px-4 pb-4 border border-gray-300 border-b-0 border-l-0 border-r-0 pt-4">
                <label className="font-Poppins-Bold"> This is the first item's accordion body.</label>
                It is shown by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These classes control the overall appearance, as
                well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just about any HTML can go within the
                .accordion-body, though the transition does limit overflow.
              </SimpleAccordion>
              <SimpleAccordion heading="Lorem ipsum dolor sit amet" border={true} headingTextStyle="text-xl font-Poppins-SemiBold" childrenTextStyle="font-Poppins-Regular text-lg px-4 pb-4 border border-gray-300 border-b-0 border-l-0 border-r-0 pt-4">
              <label className="font-Poppins-Bold"> This is the second item's accordion body.</label> It is shown by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These classes control the overall appearance, as
                well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just about any HTML can go within the
                .accordion-body, though the transition does limit overflow.
              </SimpleAccordion>
              <SimpleAccordion heading="Lorem ipsum dolor sit amet" border={false} headingTextStyle="text-xl font-Poppins-SemiBold" childrenTextStyle="font-Poppins-Regular text-lg px-4 pb-4 border border-gray-300 border-b-0 border-l-0 border-r-0 pt-4">
              <label className="font-Poppins-Bold"> This is the third item's accordion body.</label> It is shown by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These classes control the overall appearance, as
                well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just about any HTML can go within the
                .accordion-body, though the transition does limit overflow.
              </SimpleAccordion>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default FaqSection;
