import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 w-3/4 bg-gradient-to-r from-black/90 via-black/40 to-transparent px-4 pt-16 pb-8 text-white sm:px-10 sm:pt-24 sm:pb-20 lg:px-16 lg:pt-36 lg:pb-32">
      <h1 className="max-w-xs text-xl font-bold leading-snug sm:max-w-3xl sm:text-4xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-2 max-w-xs text-[11px] text-gray-200 sm:mt-4 sm:max-w-2xl sm:text-sm lg:max-w-lg lg:text-base">
        {overview}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <button className="rounded-md bg-white/90 px-6 py-2 text-sm font-semibold text-black transition hover:bg-white/80 sm:text-base">
          ▶️ Play Now
        </button>
        <button className="rounded-md bg-gray-700/80 px-6 py-2 text-sm font-semibold text-white transition hover:bg-gray-600/80 sm:text-base">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;