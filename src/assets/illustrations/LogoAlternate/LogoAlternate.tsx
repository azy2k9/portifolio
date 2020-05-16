import React from 'react';

const LogoAlternate: React.FC = () => {
  return (
    <svg
      width="120"
      height="65"
      viewBox="0 0 120 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo-alternate"
    >
      <g clipPath="url(#clipLogoAlternate)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M52.581 25.5227C52.163 27.7186 51.9442 29.9859 51.9442 32.3047C51.9442 46.3581 59.9821 58.5177 71.6734 64.361C71.3428 64.5211 70.9679 64.6125 70.5617 64.6125H48.0743C47.1361 64.6125 46.2726 64.0951 45.8237 63.2638L36.4558 45.9072L26.8629 63.2853C26.4106 64.1046 25.5539 64.6125 24.6242 64.6125H2.56609C0.595482 64.6125 -0.63752 62.4621 0.345023 60.739L34.2414 1.29594C35.2252 -0.429398 37.6919 -0.432615 38.6802 1.29012L52.581 25.5227Z"
          fill="#0091FE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M110.188 55.5794C116.237 49.7024 120 41.4483 120 32.3077C120 14.4646 105.66 0 87.9715 0C70.2827 0 55.9431 14.4646 55.9431 32.3077C55.9431 50.0069 70.0525 64.382 87.5445 64.6126V64.6154H87.9715H117.084C117.845 64.6154 118.226 63.6875 117.688 63.1447L110.188 55.5794Z"
          fill="#42D7B7"
        />
      </g>
      <defs>
        <clipPath id="clipLogoAlternate">
          <path d="M0 0H120V64.6154H0V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LogoAlternate;
