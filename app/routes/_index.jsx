import HeroImage from "~/components/hero-image";
import Services from "../components/services";
import HeroProject from "../components/hero-project";
import mockup from "~/images/mockup.png";

export const meta = () => {
  return [
    { title: "Visual Archives Home" },
    {
      name: "description",
      content: "Preserving the Past for a Present Future",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex-1 p-4 flex flex-col justify-center md:max-w-xl gap-4 text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl">
            Preserving the Past for a Better Future
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-600">
            Visual Archives creates digital resources for non-profits that
            promote inclusivity and accessibility.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="mailto:amandahartman@visualarchives.org"
              style={{ backgroundColor: "#fbf0e6" }}
              className="inline-block px-6 py-2 text-gray font-semibold rounded-md mt-4"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex-1 p-4 md:p-2 flex justify-center">
          <HeroImage />
        </div>
      </div>

      <div className="grid gap-8">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl p-4 text-center md:text-left ">
          Services
        </h1>
        <Services />

        <h1
          id="projects"
          className="font-bold text-2xl md:text-4xl lg:text-5xl p-4 text-center md:text-left mt-8 "
        >
          What We're Working On
        </h1>
        <HeroProject />

        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl p-4 text-center md:text-left ">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="flex justify-center md:justify-start">
            <img
              src={mockup}
              alt="Black Mountain College Website Mockup"
              className="object-cover h-full mx-auto"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-neutral-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mb-5"
              placeholder="name@email.com"
              required
            />

            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-neutral-100 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
            <a
              href="mailto:amandahartman@visualarchives.org"
              style={{ backgroundColor: "#3c4448" }}
              className="inline-block px-6 py-2 text-white font-semibold rounded-md mt-4"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
