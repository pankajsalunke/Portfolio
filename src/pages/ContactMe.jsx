import React, {useRef} from "react";
import emailjs from "emailjs-com";
const ContactMe = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID, // Replace with your service ID
        import.meta.env.VITE_TEMPLATE_ID, // Replace with your template ID
        form.current,
        import.meta.env.VITE_PUBLIC_API_KEY // Replace with your public API key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div
      id="contactme"
      className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center px-4"
    >
      <h2 className="text-5xl font-bold text-white mb-4">Contact Me</h2>
      <p className="text-gray-400 mb-2 text-center ">
        Cultivating Connections: Reach Out And Connect with me
      </p>

      <div className="w-full max-w-4xl bg-gray-900 p-8 rounded-lg drop-shadow-2xl flex justify-center ">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-2/3"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="p-3 bg-gray-800 text-white rounded-lg focus:outline-none  col-span-2"
          />

          <input
            type="email"
            placeholder="Enter Email"
            className="p-3 bg-gray-800 text-white rounded-lg focus:outline-none col-span-2"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="p-3 bg-gray-800 text-white rounded-lg focus:outline-none col-span-2"
          />

          <textarea
            placeholder="Description..."
            name="message"
            className="p-3 bg-gray-800 text-white rounded-lg focus:outline-none col-span-2 h-24 resize-none"
          />

          <div className="col-span-2 flex justify-center">
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
