import { types } from "react-bricks/frontend";
import website from "react-bricks-ui/website";
import blog from "react-bricks-ui/blog";
import HeroUnit from "./MyHeroUnit";
import Thumbnail from "./Thumbnail";
import Web2ExtraProjects from "./Web2HardCodded";
import Web3ExtraProjects from "./Web3HardCodded";

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  ...blog,
  HeroUnit, // Example custom brick
  Thumbnail,
  Web2ExtraProjects,
  Web3ExtraProjects,
  // Put here your other bricks...
];

export default bricks;
