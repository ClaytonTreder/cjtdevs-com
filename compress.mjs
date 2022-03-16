import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

(async () => {
  try {
    await imagemin(["public/images/uncompressed/*.{jpg,jpeg,png}"], {
      destination: "public/images",
      plugins: [
        imageminMozjpeg({ quality: 25 }),
        imageminPngquant({
          quality: [0.25, 0.35],
        }),
      ],
    });
    console.log("Images optimized");
  } catch (e) {
    console.log(e);
  }
})();
