import React from "react";
import boxes from "~/images/boxes.png";
import folders from "~/images/folders.png";
import tablet from "~/images/tablet.png";

export default function Services() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
      <div className="border border-neutral-200 rounded p-4">
        <img
          src={boxes}
          alt="illustration of boxes"
          className="h-full max-h-[200px] mx-auto mb-3"
        />
        <h2 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">
          Digital Collections Management
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-600">
          We offer comprehensive solutions to digitize and manage your museum or
          archive collections, enhancing accessibility and ease of use.
        </p>
      </div>
      <div className="border border-gray-200 rounded p-4">
        <img
          src={folders}
          alt="illustration of folders in a file holder"
          className="h-full max-h-[200px] mx-auto mb-3"
        />
        <h2 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">
          Database Design and Maintenance
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-600">
          Our expert digital archivists specialize in creating efficient and
          user-friendly databases to manage your collections and resources
          effectively.
        </p>
      </div>
      <div className="border border-gray-200 rounded p-4">
        <img
          src={tablet}
          alt="illustration of a handhold tablet device"
          className="h-full max-h-[200px] mx-auto mb-3"
        />
        <h2 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">
          Digital Resource Creation
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-600">
          Visual Archives innovates in creating digital resources to share your
          museum's research and collections, making your knowledge more
          inclusive and accessible to a diverse audience.
        </p>
      </div>
    </div>
  );
}
