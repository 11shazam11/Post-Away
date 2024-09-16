import { ApplicatioError } from "./application-error.js";
export default function invalidPath (req,res,next)  {
    throw new ApplicatioError("Invalid path",404);
}