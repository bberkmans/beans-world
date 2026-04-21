"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

export type ArtPiece = {
  id: number;
  src: string;
  alt: string;
  aspectRatio: number;
};

type Props = {
  artPieces: ArtPiece[];
};

export default function ArtGallery(props: Props) {
  const { artPieces } = props;
  const [activePiece, setActivePiece] = useState<ArtPiece | null>(null);

  return (
    <>
      {/* Masonry grid */}
      <div className="max-w-7xl mx-auto columns-2 md:columns-3 lg:columns-4 gap-6 [column-fill:_balance]">
        {artPieces.map((piece) => (
          <button
            key={piece.id}
            onClick={() => setActivePiece(piece)}
            className="block w-full mb-6 break-inside-avoid overflow-hidden rounded-sm hover:opacity-80 transition duration-200 cursor-pointer"
          >
            <div
              className="relative w-full"
              style={{ aspectRatio: piece.aspectRatio }}
            >
              <Image
                src={piece.src}
                alt={piece.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {activePiece && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
        >
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setActivePiece(null)}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
          >
            <button
              onClick={() => setActivePiece(null)}
              className="absolute top-2 right-2 z-10 text-white hover:opacity-60 text-3xl"
              aria-label="Close"
            >
              ✕
            </button>
            <div
              className="relative"
              style={{
                aspectRatio: activePiece.aspectRatio,
                maxWidth: "100%",
                maxHeight: "85vh",
                width: activePiece.aspectRatio >= 1 ? "min(90vw, 1100px)" : "auto",
                height: activePiece.aspectRatio < 1 ? "85vh" : "auto",
              }}
            >
              <Image
                src={activePiece.src}
                alt={activePiece.alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}