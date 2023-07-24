import React from "react";
import mandy from "~/images/mandy.png";
import kimberly from "~/images/kimberly.jpeg";
import alexis from "~/images/alexis.jpeg";
import hilary from "~/images/hilary.jpeg";
import heather from "~/images/heather.jpeg";
import TeamMember from "../components/team-member";

const teamMembers = [
  {
    name: "Amanda Hartman",
    title: "Executive Director",
    img: mandy,
    bio: "Amanda has worked in museums, archives, and academia for over a decade. She is experienced in visual and web design, archive and museum collections management, and digital educational programming. She has most recently managed large digitization projects, created digital resources for museums and archives, and is always encouraging accessibility and open access of information through her work. She holds a BA in Design from Florida International University, an MA in Museum Education from the University of Florida, an MLIS in Archives Management from the University of South Florida, and is currently a PhD student in Digital History at Clemson.",
  },
  {
    name: "Kimberly Cramer",
    title: "Board President",
    img: kimberly,
    bio: "Bio coming soon!",
  },
  {
    name: "Alexis Meldrum",
    title: "Board Vice President",
    img: alexis,
    bio: "Bio coming soon!",
  },
  {
    name: "Hilary Schroeder",
    title: "Board Secretary",
    img: hilary,
    bio: "Hilary is the Program Manager for Life Transitions and Special Programs at OLLI at UNC Asheville. She received her BA in Art History with a minor in German Studies from Macalester College in St. Paul, MN in 2012 and her MA in Art History from the University of Georgia, Athens, GA in 2015, where her research focused on the intersection of 20th and 21st century art history and modern dance. Hilary has previously worked in service to continuing education for all ages in the museum field as a curatorial fellow at the McNay Art Museum in San Antonio, TX, and as assistant curator at the Asheville Art Museum in Asheville, NC. Her professional interests include Black Mountain College, interdisciplinary and performance art, and postmodernism. Outside of work, Hilary maintains a personal practice in dance and aerial arts, is an avid reader of science fiction/fantasy, and intermittently plays Dungeons & Dragons online with friends spread across the country.",
  },
  {
    name: "Heather South",
    title: "Board Treasurer",
    img: heather,
    bio: "Bio coming soon!",
  },
];

export default function OurTeam() {
  return (
    <div>
      <h1 className="font-bold text-4xl p-4">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>
    </div>
  );
}
