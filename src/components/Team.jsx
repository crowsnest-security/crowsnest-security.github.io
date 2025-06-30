import React from "react";
import Avatar from "./Avatar";

const Team = () => {
  const team = [
    {
      name: "Robert Erenberg-Andersen",
      role: "Chief Executive Officer & Founder",
      photo: "img/avatars/rob.jpg",
      bio: "Award-winning, globally-recognized cybersecurity expert with extensive experience guiding F500 companies, militaries and government insitutions through cyber transformations",
    },
    {
      name: "Jerry Becker",
      role: "Chief Operating Officer",
      photo: "img/avatars/jerry.jpg",
      bio: "Leading specialist in business development & transformation, customer success and innvation, with a track record of deliveing results spanning Big Tech, Management Consulting and Military Service",
    },
    {
      name: "Andy Block",
      role: "Chief Technical Officer",
      photo: "img/avatars/andy.jpg",
      bio: "World-renowned cloud technologist and open source maintainer specialising in holistic system design and cuttingedge technology solutions within Big Tech",
    },

    {
      name: "Kris Kearton",
      role: "Chief Security Officer",
      photo: "img/avatars/kris.jpg",
      bio: "Veteran Chief Information and Security Officeer, with 30+ years of experience in cybersecurity, risk management, and compliance across global enterprises",
    },
    {
      name: "Bríd Mackay",
      role: "Chief Experience Officer",
      photo: "img/avatars/brid.jpg",
      bio: "Recognized experience and agile lead, designing and fostering lasting, bespoke enterprise user experiences, brand and relationships",
    },
  ];
  return (
    <section className="dark:bg-crow-dark ">
      <div className="  text-center lg:px-6 w-full">
        <div className="mx-auto mb-8  flex flex-col lg:mb-16 w-full">
          <h2 className="mx-auto text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Built by Leaders in Cybersecurity
          </h2>
          <p className="mt-8 p-5 text-md font-light w-full text-gray-500 sm:text-xl dark:text-gray-400">
            CrowsNest is powered by a team of world-class cybersecurity
            experts—former CISOs, security architects, and compliance leaders
            from world-class technology companies and global enterprises. With
            decades of hands-on experience, we’ve turned deep industry knowledge
            into a platform designed for clarity, control, and confidence.
          </p>
        </div>
        <div>
          <h2 className="mb-8 text-3xl tracking-tight  text-gray-900 dark:text-white">
            Founders
          </h2>
        </div>
        <div className="mb-16 flex flex-row flex-wrap justify-center mx-auto gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {team.map((member) => (
            <Avatar
              name={member.name}
              role={member.role}
              photo={member.photo}
              bio={member.bio}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
