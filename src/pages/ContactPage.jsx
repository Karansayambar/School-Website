
const ContactPage = () => {
  return (
    <div className="md:w-[95%] md:m-8 rounded-lg py-10 px-4 bg-slate-400">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold text-center mb-8">-------- CONTACT US 🤙🏻--------</h1>
        
        <div className="flex flex-col md:flex-row md:gap-8 mb-8">
          <div className="flex-1 bg-slate-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> <a href="mailto:info@springdale.edu" className="text-blue-500">info@springdale.edu</a>
            </p>
          </div>

          <div className="flex-1 mt-6 md:mt-0">
            <iframe
              title="Google Maps Location"
              className="w-full h-64 rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126910.6069269051!2d-122.38972416607597!3d37.7749297761103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c74b2bdf7%3A0x71fdc8dd96fa4c4e!2sSan%20Francisco%2C%20CA%2094131%2C%20USA!5e0!3m2!1sen!2sin!4v1633379339367!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="bg-slate-200 p-6 rounded-lg shadow-md md:px-[200px] py-5">
          <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
