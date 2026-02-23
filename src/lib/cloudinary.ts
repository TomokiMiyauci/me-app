import { Cloudinary } from "@cloudinary/url-gen";
import { CLOUDINARY_ID } from "~env";

export default new Cloudinary({ cloud: { cloudName: CLOUDINARY_ID } });
