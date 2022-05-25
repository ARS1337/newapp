import React from "react";
import SimpleAccordion from "./SimpleAccordion";

function FaqSection(props) {
  return (
    <div className="w-full bg-black rounded-lg">
      <SimpleAccordion heading="Frequently Asked Questions (FAQ)" style={{backgroundColor:'#2e5984',color:'white'}} className="bg-green-custom">
        <SimpleAccordion heading="Lorem ipsum dolor sit amet">
          This is the first item's accordion body. It is shown by default, until the collapse plugin adds the
          appropriate classes that we use to style each element. These classes control the overall appearance, as well
          as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our
          default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though
          the transition does limit overflow.
        </SimpleAccordion>
        <SimpleAccordion heading="Lorem ipsum dolor sit amet">
          This is the second item's accordion body. It is shown by default, until the collapse plugin adds the
          appropriate classes that we use to style each element. These classes control the overall appearance, as well
          as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our
          default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though
          the transition does limit overflow.
        </SimpleAccordion>
        <SimpleAccordion heading="Lorem ipsum dolor sit amet">
          This is the third item's accordion body. It is shown by default, until the collapse plugin adds the
          appropriate classes that we use to style each element. These classes control the overall appearance, as well
          as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our
          default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though
          the transition does limit overflow.
        </SimpleAccordion>
      </SimpleAccordion>
    </div>
  );
}

export default FaqSection;
