import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x4012069F643eD865373Bc43A79122B3334A951f9",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Remote Work Computer",
        description: "This NFT will give you access to RemoteDAO!",
        image: readFileSync("scripts/assets/HL_M65_04.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()