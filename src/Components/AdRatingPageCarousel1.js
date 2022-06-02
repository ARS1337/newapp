import React from "react";
import { IconContext } from "react-icons";
import { MdLocationOn } from "react-icons/md";
import data from "../config";
import TestimonialContainer from "./TestimonialContainer";

function AdRatingPageCarousel1(props) {
  return (
    <div className="px-2 bg-white rounded-xl">
      <TestimonialContainer
        autoScroll={true}
        key="testimonial"
        heading={false}
        id="similarJobtt"
        headingStyle="text-blue-custom lg:text-2xl"
        bodyStyle=" p-2 bg-white rounded-xl"
        scrollBy={340}
      >
        {data.testimonials.map((testimonial, key) => {
          return (
            <div key={key} className=" min-w-[340px] lg:w-[600px]  flex items-center justify-center">
              <img src="/assets/RatingPage/pic.jpg" className="min-w-[340px] max-w-[340px] h-auto" alt="sd" />
            </div>
          );
        })}
      </TestimonialContainer>
    </div>
  );
}

export default AdRatingPageCarousel1;
