import HeroImage from "~/components/hero-image";

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
    <div className="flex flex-col-reverse md:flex-row">
      <div className="flex-1 p-4 flex flex-col justify-center md:max-w-lg gap-4">
        <h1 className="font-bold text-4xl">
          Preserving the Past for a Better Future
        </h1>
        <p>
          Visual Archives creates digital resources for non-profits that promote
          inclusivity and accessibility.
        </p>
        <a
          href="mailto:amandahartman@visualarchives.org"
          style={{ backgroundColor: "#fbf0e6" }}
          className="inline-block px-6 py-2 text-gray font-semibold rounded-md mr-auto mt-4"
        >
          Contact Us
        </a>
      </div>
      <div className="flex-1 p-4 md:p-2 flex justify-center">
        <HeroImage />
      </div>
    </div>
  );
}
