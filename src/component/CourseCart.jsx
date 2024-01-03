import React from "react";

const CourseCart = ({ data }) => {
  return (
    <div>
      <h1 className="font-semibold text-lg">Course fees</h1>
      <h1 className="font-semibold text-2xl">₹{data.course.fee.amount}</h1>
      <h1 className="font-semibold text-lg">What's included:</h1>
      <h3>
        <i className="ri-movie-line"></i>{" "}
        {data.course.inclusions.on_demand_videos}on-demand videos
      </h3>
      <h3>
        {data.course.inclusions.live_qa_sessions ? (
          <>
            <i className="ri-chat-4-line"></i> Live Q&A sessions with{" "}
            {data.instructor.name}
          </>
        ) : null}
      </h3>
      <h3>
        {data.course.inclusions.whatsapp_community ? (
          <>
            <i className="ri-chat-4-line"></i> An active whatsapp community
          </>
        ) : null}
      </h3>
      <button className="w-80 mt-5 font-semibold m-auto text-white bg-violet-700 rounded-3xl py-2 flex justify-center">
        Register Today
      </button>
    </div>
  );
};

export default CourseCart;
