import React from 'react';

const ContactForm = () => {
  return (
    <section className="min-h-screen min-w-screen flex items-center justify-center bg-background1" id="Contact">
      <div className="w-full max-w-4xl p-6 shadow-custom rounded-lg flex flex-col justify-between h-[70%] mt-16 mb-16 mx-6">
        <h2 className="text-4xl text-center font-bold mb-6 text-textColor">Contact Me</h2>

        <form className="space-y-6 flex flex-wrap gap-6">
          {/* Full Name */}
          <div className="flex flex-col w-full h-max mt-6 sm:w-[46%]">
            <label htmlFor="fullname" className="text-lg text-textColor -700 mb-2">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="p-3 border-2 bg-background2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col w-full sm:w-[46%]">
            <label htmlFor="email" className="text-lg text-textColor -700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-3 border-2 bg-background2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Address */}
          <div className="flex flex-col w-full sm:w-[46%]">
            <label htmlFor="address" className="text-lg text-textColor -700 mb-2">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className="p-3 bg-background2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Address"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col w-full sm:w-[46%]">
            <label htmlFor="phone" className="text-lg text-textColor -700 mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="p-3 bg-background2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Phone Number"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col w-full">
            <label htmlFor="message" className="text-lg text-textColor -700 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              className="p-3 bg-background2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows={5}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-48 py-3 bg-blue-500 text-white text-2xl rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
