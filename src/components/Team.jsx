import React from "react";
import Avatar from "./Avatar";

const Team = () => {
  const team = [
    {
      name: "Chief Executive Officer & Founder",
      role: " ",
      photo: "img/crow.svg",
      bio: "Award-winning, globally-recognized cybersecurity expert with extensive experience guiding F500 companies, militaries and government insitutions through cyber transformations",
    },
    {
      name: "Chief Operating Officer",
      role: " ",
      photo: "img/crow.svg",
      bio: "Leading specialist in business development & transformation, customer success and innvation, with a track record of deliveing results spanning Big Tech, Management Consulting and Military Service",
    },
    {
      name: "Chief Technical Officer",
      role: "",
      photo: "img/crow.svg",
      bio: "Leading cloud and security strategist, driving enterprise innovation across edge, AI, and Kubernetes ecosystems with experience in Big Tech and Defense",
    },

    {
      name: "Chief Information Officer",
      role: " ",
      photo: "img/crow.svg",
      bio: "Veteran Chief Information and Security Officer, with 30+ years of experience in cybersecurity, risk management, and compliance across global enterprises",
    },
    {
      name: "Chief Experience Officer",
      role: " ",
      photo: "img/crow.svg",
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
          <p className="mt-8 p-5 text-md font-normal w-full text-gray-500 sm:text-xl dark:text-gray-400">
            CrowsNest is powered by a team of world-class cybersecurity
            experts—former CISOs, security architects, and compliance leaders
            from world-class technology companies and global enterprises. With
            decades of hands-on experience, we’ve turned deep industry knowledge
            into a platform designed for clarity, control, and confidence.
          </p>
        </div>
        <div>
          <h2 className="mb-8 text-3xl tracking-tight  text-gray-900 dark:text-white">
            Meet the Founding Team
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
