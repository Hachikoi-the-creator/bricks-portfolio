import React from "react";
import { types } from "react-bricks";

const Web3ExtraProjects: types.Brick = () => {
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
    <div className="text-white bg-gray-900 px-[10vw]">
      <h3 className="text-center text-2xl p-4">Extra Web3</h3>
      <div className="flex flex-wrap  justify-center ">
        {subComp(
          "Whitelist Dapp",
          "https://whitelist-navy.vercel.app/",
          "Stores a mapping of addresses => bool to know if an address has been whitelisted"
        )}
        {subComp(
          "NFT Viwer",
          "https://alchemy-api-nft-gallery.vercel.app/",
          "Using Alchemy API, fetches the NFT's of an addres or a collection, or the collection an address has"
        )}
        {subComp(
          "Dynamic NFT",
          "#",
          "Using Chainlink Oracle service, an NFT changes form depending on the price of BTC/USD"
        )}
        {subComp(
          "Dex Aggregator",
          "https://app.netlify.com/sites/dex-aggreagator/overview",
          "Using 0x's aggregator service, a Dapp that allows you to exchange tokens whit the best fees possible!"
        )}
        {/* {subComp("My_title", "#", "My_Desc_erasable")} */}
      </div>
    </div>
  );
};

Web3ExtraProjects.schema = {
  name: "Web3ExtraProjects",
  label: "Extra W3 Projects",
  sideEditProps: [],
};

export default Web3ExtraProjects;
