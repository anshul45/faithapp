import React from "react";
import CourseCart from "./component/CourseCart";
import Facebook from "./assets/facebook.png";
import Instagram from "./assets/instagram.png";
import Twitter from "./assets/twitter.png";
import Youtube from "./assets/youtube.png";
import { Testimonial } from "./component/Testimonial";
import { data } from "./utils/data";

const App = () => {
  return (
    <div>
      <div className="relative h-96 text-black">
        <div
          className="absolute inset-0 bg-cover "
          style={{
            backgroundImage: `url(${data.instructor.banner_image})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-60"></div>
        <div className="absolute bottom-7 left-32 z-10 ">
          <div className="w-[500px] font-semibold leading-4 text-white">
            <h1 className="text-lg">{data.instructor.name}</h1>
            <h1 className="text-4xl">{data.course.title}</h1>
          </div>
        </div>
      </div>
      <div className="px-20 ">
        <div className="flex justify-between">
          <div className="flex gap-24 py-4 font-semibold">
            <h3>ABOUT</h3>
            <h3>INSTRUCTOR</h3>
            <h3>REVIEWS</h3>
          </div>
          <div className="bg-gray-200 w-[420px] absolute right-20 top-80  px-5 py-5">
            <CourseCart data={data} />
          </div>
        </div>

        {/* About the course   */}
        <div className="w-[63%]">
          <h1 className="font-semibold text-2xl py-3">About the course</h1>

          <div>
            {data.course.about.map((data, idx) => (
              <p className="py-3" key={idx}>
                {data}
              </p>
            ))}
          </div>
        </div>
        {/* About the course   */}

        {/* What to expect from the course? */}
        <div>
          <h1 className="font-semibold text-2xl py-3">
            What to expect from the course
          </h1>
          {data.course.what_to_expect.map((data, idx) => (
            <div key={idx} className="py-2 flex items-center gap-4">
              <i className="ri-check-line"> </i>
              <p>{data} </p>
            </div>
          ))}
        </div>
        {/* What to expect from the course? */}

        {/* Key topics covered */}
        <div className="w-[700px]">
          <h1 className="font-semibold text-2xl py-3">Key topics covered</h1>
          <div>{data.course.key_topics.content}</div>
          <div className=" pt-3 ">
            {data.course.key_topics.points.map((data, idx) => (
              <div key={idx} className="flex py-1 gap-3 font-semibold">
                <i className="ri-check-line"></i>
                <div className="">{data}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Key topics covered */}

        {/* About the Instructor */}

        <div className="py-8">
          <h1 className="font-semibold text-2xl py-3">About the Instructor</h1>
          <div className="flex gap-16 py-3">
            <img
              alt="instructor_image"
              className="rounded-full w-28"
              src={data.about_instructor.img}
            />
            {data.about_instructor.content.map((data, idx) => (
              <h1 key={idx}>{data}</h1>
            ))}
          </div>
          <div className="px-40 py-5  flex justify-between ">
            <a
              href={data.instructor.social_media.facebook}
              target="_blank"
              className="flex gap-2 items-center cursor-pointer"
            >
              <img alt="social_image" className="w-7" src={Facebook} />
              <h1 className="font-semibold ">Facebook</h1>
            </a>
            <a
              href={data.instructor.social_media.twitter}
              target="_blank"
              className="flex gap-2 items-center cursor-pointer"
            >
              <img alt="social_image" className="w-8" src={Twitter} />
              <h1 className="font-semibold ">Twitter</h1>
            </a>
            <a
              href={data.instructor.social_media.youtube}
              target="_blank"
              className="flex gap-2 items-center cursor-pointer"
            >
              <img alt="social_image" className="w-11" src={Youtube} />
              <h1 className="font-semibold ">Youtube</h1>
            </a>
            <a
              href={data.instructor.social_media.instagram}
              target="_blank"
              className="flex gap-2 items-center cursor-pointer"
            >
              <img alt="social_image" className="w-9" src={Instagram} />
              <h1 className="font-semibold ">Instagram</h1>
            </a>
          </div>
        </div>
        {/* About the Instructor */}
      </div>
      {/* Testimonial */}
      <div>
        <Testimonial data={data.testimonial} />
      </div>
      {/* Testimonial */}
    </div>
  );
};

export default App;
