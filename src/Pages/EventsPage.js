import React, { useState } from "react";
import GradientButton from "../Components/GradientButton";
import data from "../config";

const EventCardComponent = (props) => {
  return (
    <div className="w-full bg-white p-2 md:p-3 border-2 border-green-custom flex flex-col items-center rounded-xl my-4 font-Poppins-Regular">
      <div className="flex flex-row items-center justify-between w-full">
        <label className="text-md md:text-xl">{props.eventDetails.name}</label>
        <div className="bg-green-custom p-2 px-9 text-white text-md -mr-3 flex flex-row items-center justify-start">
          <div className="h-8 w-8 bg-white -ml-[3.2rem] mr-6 -my-3 rotate-45"></div>
          <label className="text-md md:text-lg">{props.eventDetails.type}</label>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center md:justify-start w-full text-gray-500 mt-3 md:mt-2">
        <img src="/assets/EventsPage/chair.png" alt="seats" className="pr-2" />
        <label>{props.eventDetails.seatsRemaining + "/"}</label>
        <label>{props.eventDetails.totalSeats}</label>
        <label className="pl-2">Remaining</label>
      </div>
      <div className="h-0.5 w-full border border-gray-300 my-5 "></div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full ">
        <div className="flex flex-row items-center justify-start p-1">
          <img src="/assets/EventsPage/calendar-interface-symbol-tool.png" alt="" className="pr-2" />
          <label>{props.eventDetails.date.toUpperCase() + " | "}</label>&nbsp;
          <label>{props.eventDetails.time}</label>
        </div>
        <button className="border-2 border-dark-blue-custom text-blue-custom rounded-md p-2 px-4 mb-2 md:mb-0">
          Register now
        </button>
      </div>
    </div>
  );
};

function EventsPage(props) {
  const [currTab, setcurrTab] = useState("Webinar");
  return (
    <div className="w-full">
      <div className="bg-white rounded-md p-5 flex flex-col my-6 text-gray-500">
        <label className="text-2xl text-blue-custom font-Poppins-Regular pb-6">
          Why we want to engage with mariners
        </label>
        <label className="leading-8">
          Suspendisse rutrum sodales libero, sed pulvinar magna pharetra ac. Pellentesque hendrerit, ex eget iaculis
          fringilla, magna ex luctus ante, non tristique sem orci eu justo. Praesent rhoncus rutrum hendrerit.
          Suspendisse pulvinar sem finibus viverra finibus. Duis quis dictum odio, ut convallis libero. Proin mollis
          fringilla quam, nec posuere leo venenatis molestie. Nulla sem ex, vulputate at fringilla a, accumsan id metus.
          Nulla facilisi. Fusce malesuada congue tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Aliquam facilisis magna nec porttitor dapibus. Aenean quam nibh, molestie vitae justo quis, molestie malesuada
          ipsum. Phasellus massa diam, ultrices finibus varius eget, elementum vel enim. Phasellus ultricies dui id
          pretium molestie. Curabitur eget nisi velit. Sed gravida posuere ante quis varius.
        </label>
      </div>
      <label className="text-2xl text-blue-custom font-Poppins-Regular">Upcoming Events</label>
      {data.upcomingEvent.map((eventDetails, key) => {
        return (
          <div key={key}>
            <EventCardComponent eventDetails={eventDetails} />
          </div>
        );
      })}
      <div className="mt-6">
        <label className="text-2xl text-blue-custom">Our Engagements</label>
        <div className="flex flex-row items-center justify-between mt-6 overflow-scroll md:overflow-hidden">
          <GradientButton onClick={() => {}} text="webinar" />
          <GradientButton onClick={() => {}} text="Tournament" />
          <GradientButton onClick={() => {}} text="coaching" />
          <GradientButton onClick={() => {}} text="training" />
        </div>
        <div className="h-1 bg-gradient-to-r from-blue-custom to-green-custom w-full border border-gray-300  "></div>
        <div className="bg-white pt-6">
            
            <button>View More</button>
        </div>
      </div>
    </div>
  );
}
export default EventsPage;
