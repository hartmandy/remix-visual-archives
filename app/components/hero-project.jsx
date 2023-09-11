import React from "react";
import bmc from "~/images/bmc.png";

export default function HeroProject() {
  return (
    <div className="p-4 border border-gray-200 rounded mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-center md:justify-start">
          <img
            src={bmc}
            alt="Black Mountain College Biography Cards"
            className="object-cover h-full mx-auto"
          />
        </div>

        <div className="p-8">
          <h2 className="font-bold text-xl md:text-2xl lg:text-4xl text-center md:text-left mb-4">
            Black Mountain College Yearbook
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600">
            Black Mountain College was an experimental, liberal arts college in
            Black Mountain, North Carolina from (1933-1957). BMC has an eclectic
            history of avant garde arts and music, poetry, and community living.
          </p>
          <p className="text-sm md:text-base lg:text-lg mt-2 text-gray-600">
            We are now building a digital resource for researchers to navigate
            the vast collection of Black Mountain College material at Western
            Regional Archive, a division of the State of North Carolina
            Archives. This resource will house biographies for the 1500+
            individuals that taught at, attended, or worked at the college.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="https://www.bmcyearbook.org"
              style={{ backgroundColor: "#3c4448" }}
              className="inline-block px-6 py-2 text-white font-semibold rounded-md mt-4"
            >
              View BMC Yearbook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
