import React, { useState } from "react";
import { IconContext } from "react-icons";
import { BsArrowRight } from "react-icons/bs";
import GradientButton from "../Components/GradientButton";
import data from "../config";

const EventCardComponent = (props) => {
  return (
    <div className="w-full bg-white p-2 md:p-3 border-2 border-green-custom flex flex-col items-center rounded-xl my-4 font-Poppins-Regular">
      <div className="flex flex-row items-center justify-between w-full">
        <label className="text-md md:text-xl font-Poppins-SemiBold">{props.eventDetails.name}</label>
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
        <button className="border border-dark-blue-custom text-blue-custom rounded-md p-2 px-4 mb-2 md:mb-0 flex flex-row items-center justify-center">
         <div className="pr-2"> Explore more</div>
          <IconContext.Provider value={{ size: 22, color: "#2E5984" }}>
            <BsArrowRight />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

function EventsPage(props) {
  const webinarText =
    "webinarText Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod fringilla tempor. Aenean rhoncus mi eget molestie scelerisque. Sed risus sapien, ultricies eu mauris in, consequat tempus velit. Ut mattis vestibulum est id facilisis. Nulla vel dolor sagittis, sagittis est ut, scelerisque massa. Nullam a rutrum eros. Proin et rutrum eros. In vel risus eros...";
  const tournamentText =
    "tournamentText Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod fringilla tempor. Aenean rhoncus mi eget molestie scelerisque. Sed risus sapien, ultricies eu mauris in, consequat tempus velit. Ut mattis vestibulum est id facilisis. Nulla vel dolor sagittis, sagittis est ut, scelerisque massa. Nullam a rutrum eros. Proin et rutrum eros. In vel risus eros...";
  const coachingText =
    "coachingText Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod fringilla tempor. Aenean rhoncus mi eget molestie scelerisque. Sed risus sapien, ultricies eu mauris in, consequat tempus velit. Ut mattis vestibulum est id facilisis. Nulla vel dolor sagittis, sagittis est ut, scelerisque massa. Nullam a rutrum eros. Proin et rutrum eros. In vel risus eros...";
  const trainingText =
    "trainingText Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod fringilla tempor. Aenean rhoncus mi eget molestie scelerisque. Sed risus sapien, ultricies eu mauris in, consequat tempus velit. Ut mattis vestibulum est id facilisis. Nulla vel dolor sagittis, sagittis est ut, scelerisque massa. Nullam a rutrum eros. Proin et rutrum eros. In vel risus eros...";
  const [currTabText, setcurrTabText] = useState(webinarText);
  return (
    <div className="w-full px-2 md:px-0">
      <div className="bg-white rounded-md p-6 flex flex-col my-6 text-gray-500">
        <label className="text-3xl text-blue-custom font-Poppins-SemiBold py-6">
          Why we want to engage with mariners
        </label>
        <label className="leading-8 text-lg">
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
      <label className="text-3xl text-blue-custom font-Poppins-SemiBold">Upcoming Events</label>
      {data.upcomingEvent.map((eventDetails, key) => {
        return (
          <div key={key}>
            <EventCardComponent eventDetails={eventDetails} />
          </div>
        );
      })}
      <div className="mt-6">
        <label className="text-3xl text-blue-custom font-Poppins-SemiBold">Our Engagements</label>
        <div className="flex flex-row items-center justify-between mt-6 overflow-x-scroll md:overflow-hidden">
          <GradientButton
            onClick={() => {
              setcurrTabText(webinarText);
            }}
            text="webinar"
          />
          <GradientButton
            onClick={() => {
              setcurrTabText(tournamentText);
            }}
            text="Tournament"
          />
          <GradientButton
            onClick={() => {
              setcurrTabText(coachingText);
            }}
            text="coaching"
          />
          <GradientButton
            onClick={() => {
              setcurrTabText(trainingText);
            }}
            text="training"
          />
        </div>
        <div className="h-1 bg-gradient-to-r from-blue-custom to-green-custom w-full border border-gray-300  "></div>
        <div className="bg-white pt-2">
          <div className="text-lg p-4 pb-8 text-gray-500 p-6">{currTabText}</div>
          <button className="bg-green-custom w-full rounded-b-xl p-3 text-white text-lg flex flex-row items-center justify-center">
            View More
            <img src="/assets/EventsPage/iconfinder_outlined_log_in_4280467 copy.png" alt="" className="pl-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default EventsPage;
