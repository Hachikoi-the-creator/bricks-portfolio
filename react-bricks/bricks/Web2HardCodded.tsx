import React from "react";
import { types } from "react-bricks";

const Web2ExtraProjects: types.Brick = () => {
  const subComp = (title: string, link: string, desc: string) => (
    <a
      className="w-[20ch] p-4 flex flex-col rounded-md border m-2 shadow shadow-blue-100 items-center"
      href={link}
    >
      <h4 className="text-center italic text-xl w-min mb-2">{title}</h4>
      <p className="">{desc}</p>
    </a>
  );

  // rounded-md
  return (
    <div className="text-white pb-2 bg-gray-900 px-[10vw]">
      <h3 className="text-center text-2xl p-4">Extra Web2</h3>
      <div className="flex flex-wrap  justify-center ">
        {subComp(
          "Stylish Landing",
          "https://stylish-comp.netlify.app/",
          "Descriptiv webpage using Styled Components"
        )}

        {subComp(
          "Pet's age",
          "https://pets-age.netlify.app/",
          "I Remeber having problems knwoing the age of my dog, and created a project to solve that + Cats "
        )}

        {subComp(
          "Hachi blog",
          "https://blog-revamp.herokuapp.com/",
          "A blog made whit NodeJS and Prisma highlighting"
        )}

        {subComp(
          "Google Clone",
          "https://google-09.netlify.app/",
          "Exact copy of Google's mainpage"
        )}

        {subComp(
          "Blackjack game",
          "https://blackjack-09.netlify.app/",
          "Game made whit my limited knowledge of the game"
        )}

        {subComp(
          "Flexbox layouts",
          "https://nostalgic-pasteur-18f054.netlify.app/",
          "Used it to have a quick view on what I can do whit flexbox"
        )}

        {subComp(
          "Flask App",
          "https://nya-nya9000.herokuapp.com/",
          "A little text modifer based on a challenge I found in codewars"
        )}

        {/* {subComp("My title", "#", "My cooler desc")} */}
      </div>
    </div>
  );
};

Web2ExtraProjects.schema = {
  name: "Web2ExtraProjects",
  label: "Extra W2 Projects",
  sideEditProps: [],
};

export default Web2ExtraProjects;
