import HeroImage from "~/components/hero-image";
import Services from "../components/services";
import HeroProject from "../components/hero-project";

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
      </div>
    </div>
  );
}
