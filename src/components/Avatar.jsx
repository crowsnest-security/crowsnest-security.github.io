import React from "react";

const Avatar = ({ name, role, photo, bio }) => {
  return (
    <>
      <div className="flex flex-row gap-5 card shadow-2xl w-130 m-5 dark:shadow-[8px_8px_16px_-8px_rgba(59,_130,_246,_0.5)]">
        <div className="w-1/4 bg-crow-primary">
          <div className="text-center justify-center  mt-10 items-center text-gray-500 dark:text-gray-400  ">
            <img
              className="mx-auto mb-4 w-12 h-12 md:w-24 md:h-24 rounded-full"
              src={photo}
              alt={name}
            />
          </div>
        </div>
        <div className=" w-96 rounded p-5 text-left flex flex-col">
          <div className="flex flex-row items-center justify-between font-bold text-xl ">
            <div className="text-lg">{name}</div>
            <div>
        
              <img src="img/crow.svg" className="w-8 ml-auto block dark:hidden" />
              <img src="img/crow-white.svg" className="w-8 ml-auto hidden dark:block" />

            </div>
          </div>
          <div className="text-md mb-5">{role}</div>
          <div className="text-sm">{bio}</div>
        </div>
      </div>
    </>
  );
};

export default Avatar;
