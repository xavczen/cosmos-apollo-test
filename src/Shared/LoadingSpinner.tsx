import React from 'react';

export default () => (
  <svg
    width="200px"
    height="200px"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    style={{background: "none"}}
  >
    <g transform="translate(50,50)">
      <g transform="scale(0.7)">
        <g transform="translate(-50,-50)">
          <g transform="rotate(8 50 50)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              calcMode="linear"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              dur="0.75s"
              begin="0s"
              repeatCount="indefinite"
            />
            <path
              d="M50 50L50 0A50 50 0 0 1 100 50Z"
              fillOpacity="0.8"
              fill="#004d73"
            />
          </g>
          <g transform="rotate(96 50 50)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              calcMode="linear"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              dur="1s"
              begin="0s"
              repeatCount="indefinite"
            />
            <path
              d="M50 50L50 0A50 50 0 0 1 100 50Z"
              transform="rotate(90 50 50)"
              fillOpacity="0.8"
              fill="#00334e"
            />
          </g>
          <g transform="rotate(184 50 50)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              calcMode="linear"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <path
              d="M50 50L50 0A50 50 0 0 1 100 50Z"
              transform="rotate(180 50 50)"
              fillOpacity="0.8"
              fill="#007fdb"
            />
          </g>
          <g transform="rotate(272 50 50)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              calcMode="linear"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              dur="3s"
              begin="0s"
              repeatCount="indefinite"
            />
            <path
              d="M50 50L50 0A50 50 0 0 1 100 50Z"
              transform="rotate(270 50 50)"
              fillOpacity="0.8"
              fill="#dbebfa"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
