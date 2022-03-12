import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

(async () => {
  try {
    await imagemin(["public/images/uncompressed/*.{jpg,jpeg,png}"], {
      destination: "build/images",
      plugins: [
        imageminMozjpeg({ quality: 50 }),
        imageminPngquant({
          quality: [0.6, 0.8],
        }),
      ],
    });
    console.log("Images optimized");
  } catch (e) {
    console.log(e);
  }
})();
