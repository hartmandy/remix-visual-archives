import React from "react";

export default function TeamMember({ member }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border border-gray-200 rounded p-4">
      <div className="aspect-w-1 aspect-h-1 mb-3">
        <img
          src={member.img}
          alt={member.name}
          className="object-cover w-full h-[500px]"
        />
      </div>
      <h2 className="font-bold text-2xl mb-2">{member.name}</h2>
      <p className="font-medium text-lg mb-2">{member.title}</p>
      <button onClick={() => setIsOpen(!isOpen)} className="text-primary-500">
        {isOpen ? "Hide Bio" : "Show Bio"}
      </button>
      {isOpen && (
        <p className="mt-2 text-sm md:text-base lg:text-lg">{member.bio}</p>
      )}
    </div>
  );
}
