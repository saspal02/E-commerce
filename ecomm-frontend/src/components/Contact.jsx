import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-14 bg-cover bg-center"
      style={{ backgroundImage: "url('')" }}
    >
      <div className="bg-white border-2 border-gray-200 shadow-2xl rounded-lg p-10 w-full max-w-lg mb-6">
        <h1 className="text-4xl font-bold text-center mb-8">Contact us</h1>
        <p className="text-gray-600 text-center mb-4">
          We would love to hear from you! Please fill out the form below or
          contact us directly
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-hidden focus:ring-2 focus: ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-hidden focus:ring-2 focus: ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows="4"
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-hidden focus:ring-2 focus: ring-blue-500"
            />
          </div>

          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center">
          <h2 className="text-lg font-semibold">Contact Information</h2>
          <div className="flex flex-col items-center space-y-2 mt-4">
            <div className="flex items-center">
              <FaPhone className="text-blue-500 mr-2" />
              <span className="text-gray-600">+91 9876543210</span>
            </div>

            <div className="flex items-center">
              <FaEnvelope className="text-blue-500 mr-2" />
              <span className="text-gray-600">johndoe@gmail.com</span>
            </div>

            <div className="flex items-center">
              <FaMapMarkedAlt className="text-blue-500 mr-2" />
              <span className="text-gray-600">
                White field, Bangalore, Karnataka
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
