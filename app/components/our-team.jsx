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
    bio: "Amanda Hartman is the Founder and Executive Director of Visual Archives, leading digital archiving and preservation initiatives for museums and archives. She is also a PhD student in Digital History at Clemson University, where she specializes in digital methodologies for exploring Southern U.S. material culture, specifically focusing on death and funerary objects and mourning practices from the late 1800s to the early 1900s. She also holds a BA in Design from Florida International University, an MA in Museum Education from the University of Florida, and an MLIS in Archives Management from the University of South Florida.",
  },
  {
    name: "Kimberly Cramer",
    title: "Board President",
    img: kimberly,
    bio: "Kimberly Cramer currently works at UNC Asheville in the Chancellors Office. She was born and raised just north of Atlanta, GA, Kimberly received a BA in Anthropology and a minor in Fashion Merchandising from the University of Georgia and a MA in Material Culture and Textile Studies from the University of Nebraska-Lincoln. She spends much of her free time hiking with her dogs.",
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
    bio: "Heather is Lead Archivist of the Western Regional Archives, Department of Cultural Resources, State of North Carolina. The Western Regional Archives (WRA) collects, preserves, and makes available for public use historical and evidential materials relating to western North Carolina.",
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
