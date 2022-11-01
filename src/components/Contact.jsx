import React from "react";
import { FORM_IO_SUBMIT_METHOD, FORM_IO_SUBMIT_URL } from "../Constants";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-3xl sm:text-4xl font-bold border-b-4 border-gray-500 inline">
            Contact
          </p>
          <p className="py-3 sm:py-6 ">
            Submit the below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action={FORM_IO_SUBMIT_URL}
            method={FORM_IO_SUBMIT_METHOD}
            name="contact"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md
                    text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md
                    text-white focus:outline-none"
            />
            <textarea
              name="message"
              id=""
              placeholder="Enter your message"
              cols="30"
              rows="10"
              className="bg-transparent p-2 border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 rounded-md
              mx-auto flex items-center hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
