import multer from "multer";

const uploadconfig = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./uploads/");
    },
    filename:(req,file,cb)=>{
        cb(null, new Date().toString().replace(/:/g,"_") + file.originalname);
    }
})

export const fileUpload = multer({
    storage:uploadconfig
})