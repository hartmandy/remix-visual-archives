import { useLoaderData } from "@remix-run/react";
import OurTeam from "../components/our-team";

export const meta = () => {
  return [
    { title: "Visual Archives Contact Us" },
    {
      name: "description",
      content: "Contact Visual Archives",
    },
  ];
};

export default function Team() {
  return (
    <div className="flex flex-col">
      <OurTeam />
    </div>
  );
}
