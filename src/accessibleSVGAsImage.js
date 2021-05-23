import React from "react";

import imageListSVG from "./imageList";

export const accessibleSVGAsImage = () => {
  return (
    <div>
      {imageListSVG.map((value, index) => {
        return (
          <img
            src={value.svg}
            alt={value.svgTitle}
            title={value.svgTitle}
            aria-label={value.svgTitle}
          />
        );
      })}
    </div>
  );
};
