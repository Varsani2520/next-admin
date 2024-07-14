import { SvgIcon } from "@mui/material";
import React from "react";

const Poligon = ({ fill, iconName, text }) => {
  return (
    <div style={{ position: "relative", width: "48px", height: "52px" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="52"
        viewBox="0 0 48 52"
        fill="none"
      >
        <path
          d={
            "M19.1094 2.12943C22.2034 0.343099 26.0154 0.343099 29.1094 2.12943L42.4921 9.85592C45.5861 11.6423 47.4921 14.9435 47.4921 18.5162V33.9692C47.4921 37.5418 45.5861 40.8431 42.4921 42.6294L29.1094 50.3559C26.0154 52.1423 22.2034 52.1423 19.1094 50.3559L5.72669 42.6294C2.63268 40.8431 0.726688 37.5418 0.726688 33.9692V18.5162C0.726688 14.9435 2.63268 11.6423 5.72669 9.85592L19.1094 2.12943Z"
          }
          fill={fill}
        />
        {text && (
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="20"
            fontFamily="Arial, sans-serif"
          >
            {text}
          </text>
        )}
      </svg>
      {iconName && (
        <SvgIcon
          component={iconName}
          className="absolute"
          style={{
            width: "24px",
            height: "24px",
            color: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </div>
  );
};

export default Poligon;
