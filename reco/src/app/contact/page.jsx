
const Contacts = () => {
  return (
    <div className="bg-[#023d5b] py-5 lg:py-9 relative overflow-hidden min-h-screen grid place-items-center p-6 md:p-0">

      <div className="absolute -left-64 top-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#a7cb4f]/60 to-[#84a82d]/40 blur-3xl pointer-events-none"></div>
      <div className="absolute -right-10 top-2 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#A7CB4F]/50 to-[#B1FFFF]/30 blur-3xl pointer-events-none"></div>

      <div className="bg-[#EDEDED] md:px-5 pb-16 pt-6 mx-4 md:mx-10 rounded-t-3xl relative z-10 max-w-4xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-[#023d5b] mb-6">Contact Us</h1>

        <p className="text-[#023d5b] mb-8">
          If you have any questions, feel free to reach out to us using the form below.
        </p>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A7CB4F]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A7CB4F]"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A7CB4F]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#A7CB4F] text-white font-bold py-3 rounded-md hover:bg-[#84a82d] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
