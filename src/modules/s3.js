import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";

const name = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const key = process.env.AWS_BUCKET_ACCESS_KEY;
const secret = process.env.AWS_BUCKEY_ACCESS_SECRET;

aws.config.update({
  secretAccessKey: secret,
  accessKeyId: key,
  region: region,
});

const s3 = new aws.S3();

export const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: name,
    key: (req, file, callback) => {
      let fileName = Date.now() + "-" + file.originalname;
      file.fileName = fileName;
      req.file = file;
      callback(null, fileName);
    },
  }),
});

export async function getImage(key) {
  try {
    return (await s3.getObject({ Bucket: name, Key: key }).promise()).Body;
  } catch (ex) {
    console.log("error finding image");
    return "";
  }
}

export async function deleteImage(key) {
  try {
    await s3.deleteObject({ Bucket: name, Key: key }).promise();
    return true;
  } catch (ex) {
    console.log("error deleting image");
    return false;
  }
}
