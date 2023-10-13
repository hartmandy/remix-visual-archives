import React from "react";

export default function TeamMember({ member }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border border-gray-200 rounded p-4 overflow-hidden">
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-84 object-cover mb-3"
      />
      <h2 className="font-bold text-2xl mb-2">{member.name}</h2>
      <p className="font-medium text-lg mb-2">{member.title}</p>
      <button onClick={() => setIsOpen(!isOpen)} className="text-primary-500">
        {isOpen ? "Hide Bio" : "Show Bio"}
      </button>
      {isOpen && (
        <p className="mt-2 text-sm md:text-base lg:text-lg overflow-auto">
          {member.bio}
        </p>
      )}
    </div>
  );
}
