"use client";

import React from "react";
import Image from "next/image";

const TICKER_DATA = [
  // Ticker 1 - Left Outer
  {
    className: "hero-ticker ticker-1",
    speed: "26s",
    reverse: false,
    images: [
      "https://framerusercontent.com/images/58jKnp7hLLzdDIH8AeZp1dVx5aM.jpg?width=150&height=190",
      "https://framerusercontent.com/images/Bd07BN5yigOLtP3SXyG8OJitnVc.png?width=150&height=190",
      "https://framerusercontent.com/images/t9xu7L7pgWCIoAuF7XpN5wR68.jpg?width=150&height=190",
      "https://framerusercontent.com/images/yt1ykFm0L5w8LPSajlK2ODHnbV4.jpg?width=150&height=190"
    ]
  },
  // Ticker 2 - Left Inner
  {
    className: "hero-ticker ticker-2",
    speed: "32s",
    reverse: true,
    images: [
      "https://framerusercontent.com/images/d8vg9LLKL8KLOup6FYhep0oZIR8.jpg?width=150&height=200",
      "https://framerusercontent.com/images/0duV02ymHv88IXNPdq0Cjj6PCQ.jpg?width=150&height=190",
      "https://framerusercontent.com/images/38kcpgzSLtCE71VTDv2r6fdNVxw.jpg?width=150&height=190",
      "https://framerusercontent.com/images/8wwc3LFYMIKzWRQVUJo1e4YYWJ0.jpg?width=150&height=190"
    ]
  },
  // Ticker 3 - Right Inner
  {
    className: "hero-ticker ticker-3",
    speed: "28s",
    reverse: false,
    images: [
      "https://framerusercontent.com/images/iuz1dDf3xIRhHG0bBERjvfzy8.jpg?width=150&height=190",
      "https://framerusercontent.com/images/YOq7bwYWbqUTBoqwhs8z9lUXqg.jpg?width=150&height=190",
      "https://framerusercontent.com/images/sRroWIFnYlXAz3KvvuvxEFSjJ8.jpg?width=150&height=190",
      "https://framerusercontent.com/images/vZnn0mcsobYT1pFRvRwJiX1GPM.jpg?width=150&height=190"
    ]
  },
  // Ticker 4 - Right Outer
  {
    className: "hero-ticker ticker-4",
    speed: "34s",
    reverse: true,
    images: [
      "https://framerusercontent.com/images/r3Ugaj2iZXBm8r4OULjUaFu0Bp8.jpg?width=150&height=190",
      "https://framerusercontent.com/images/tzjCYYcEXO5gQ5MbHVuFztif8S4.jpg?width=150&height=190",
      "https://framerusercontent.com/images/ehoDuqHdnQv3WqakxeGZxCya1s.png?width=150&height=190",
      "https://framerusercontent.com/images/IAubOWZxmhZ5e1za7pq65WEPw08.png?width=1500&height=1991"
    ]
  }
];

export default function HeroTicker() {
  return (
    <div className="hero-tickers-container" aria-hidden="true">
      {TICKER_DATA.map((ticker, idx) => (
        <div key={idx} className={ticker.className}>
          <div
            className={`ticker-track ${ticker.reverse ? "ticker-track-reverse" : "ticker-track-forward"}`}
            style={{ animationDuration: ticker.speed }}
          >
            {/* First sequence */}
            {ticker.images.map((src, i) => (
              <div key={`a-${i}`} className="ticker-card">
                <Image
                  src={src}
                  alt=""
                  width={150}
                  height={190}
                  className="ticker-card-img"
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </div>
            ))}
            {/* Duplicated sequence for seamless infinite loop */}
            {ticker.images.map((src, i) => (
              <div key={`b-${i}`} className="ticker-card">
                <Image
                  src={src}
                  alt=""
                  width={150}
                  height={190}
                  className="ticker-card-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
