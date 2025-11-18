export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-4 bg-slate-900 text-white flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
      <p className="text-center text-slate-300 mb-8 max-w-xl">
        I'm currently open to full-time opportunities in software development. 
        Feel free to reach out via email, LinkedIn, or GitHub, or send a message below!
      </p>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <a
          href="mailto:anvishasingh2905@gmail.com"
          className="bg-teal-600 px-6 py-3 rounded-lg font-semibold text-white text-center hover:bg-teal-500 transition"
        >
          Email Me
        </a>
        <a
          href="https://linkedin.com/in/anvisha-singh"
          target="_blank"
          className="bg-blue-700 px-6 py-3 rounded-lg font-semibold text-white text-center hover:bg-blue-600 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Anvisha-Singh"
          target="_blank"
          className="bg-slate-700 px-6 py-3 rounded-lg font-semibold text-white text-center hover:bg-slate-600 transition"
        >
          GitHub
        </a>
      </div>

      {/* Contact Form */}
      <form
        action="mailto:anvishasingh2905@gmail.com"
        method="POST"
        className="flex flex-col w-full max-w-xl gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-teal-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-teal-500"
          required
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          className="p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-teal-500"
          required
        />
        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-500 transition px-6 py-3 rounded-lg font-semibold text-white mt-2"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
