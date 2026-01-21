import {useRef} from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_API_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div
      id="contactme"
      className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center px-4 py-10"
    >
      <h2 className="text-3xl sm:text-5xl font-bold mb-2 text-center">
        Contact Me
      </h2>
      <p className="text-gray-400 mb-6 text-center text-sm sm:text-base">
        Cultivating Connections: Reach Out And Connect with me
      </p>

      <div className="w-full max-w-4xl bg-gray-900 p-6 sm:p-8 rounded-lg shadow-2xl">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="p-3 bg-gray-800 text-white rounded-lg focus:outline-none col-span-1 sm:col-span-2"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            className="p-3 bg-gray-800 text-white rounded-lg focus:outline-none col-span-1 sm:col-span-2"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            className="p-3 bg-gray-800 text-white rounded-lg focus:outline-none col-span-1 sm:col-span-2"
          />

          <textarea
            name="message"
            placeholder="Description..."
            required
            className="p-3 bg-gray-800 text-white rounded-lg focus:outline-none col-span-1 sm:col-span-2 h-28 resize-none"
          />

          <div className="col-span-1 sm:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-transparent text-gray-400 border border-gray-400 px-6 py-2 rounded-lg hover:text-orange-600 hover:border-orange-600 transition duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
