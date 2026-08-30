"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function MediaCard({
  src,
  title,
  eyebrow,
  className = ""
}: {
  src: string;
  title: string;
  eyebrow?: string;
  className?: string;
}) {
  return (
    <article className={`media-card ${className}`}>
      <div className="media-wrap">
        <Image
          src={src}
          alt={title || "Service item"}
          fill
          sizes="(max-width: 800px) 100vw, 35vw"
          className="media-card-img"
        />
        <div className="media-overlay">
          <span className="media-eyebrow">{eyebrow}</span>
          <div className="media-arrow-wrap">
            <ArrowUpRight size={18} className="media-arrow-icon" />
          </div>
        </div>
      </div>
      <div className="media-title">{title}</div>
    </article>
  );
}