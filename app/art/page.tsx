import fs from "fs";
import path from "path";
import { imageSize } from "image-size";
import { Playfair_Display } from "next/font/google";
import ArtGallery from "./ArtGallery";
import type { ArtPiece } from "./ArtGallery";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

function getArtPieces(): ArtPiece[] {
  const artDir = path.join(process.cwd(), "public/art");
  const files = fs
    .readdirSync(artDir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort();

  return files.map((file, i) => {
    const filePath = path.join(artDir, file);
    const buffer = fs.readFileSync(filePath);
    const dimensions = imageSize(buffer);
    const aspectRatio =
      dimensions.width && dimensions.height
        ? dimensions.width / dimensions.height
        : 1;

    const nameWithoutExt = file.replace(/\.[^/.]+$/, "");

    return {
      id: i,
      src: `/art/${file}`,
      alt: nameWithoutExt.replace(/[_-]/g, " "),
      aspectRatio,
    };
  });
}

export default function ArtPage() {
  const artPieces = getArtPieces();

  return (
    <main className="min-h-screen bg-white pt-24 pb-20 px-6 md:px-12">
      <h1
        className={`${playfair.className} text-black text-5xl md:text-7xl font-bold text-center mb-16`}
      >
        My Art
      </h1>

      <ArtGallery artPieces={artPieces} />
    </main>
  );
}