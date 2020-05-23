import React from 'react';
import { useSpring } from 'react-spring';
import {
  PortraitContainer,
  TriangleBlue,
  TriangleYellow,
  RectangleBlue,
  RectanglePurple,
  SquareYellow,
  SquareBlue,
  BGWhite,
  ElipseBlue,
  ElipsePurple,
  PolygonGreen,
  BGGradient
} from './Portrait.styled';
import Avatar from '../../../assets/illustrations/Avatar';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const transBGGradient = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const transRectanglePurple = (x, y) => `translate3d(${x / 15}px,${y / 35}px,0)`;
const transSquareBlue = (x, y) => `translate3d(${x / 10}px,${y / 6 - 10}px,0)`;
const transPolygonGreen = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`;
const transElipsePurple = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const transElipseBlue = (x, y) => `translate3d(${x / 36}px,${y / 36}px,0)`;
const transBGWhite = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;
const transSquareYellow = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`;
const transRectangleBlue = (x, y) => `translate3d(${x / 34}px,${y / 34}px,0)`;
const transTriangleYellow = (x, y) => `translate3d(${x / 36}px,${y / 36}px,0)`;
const transTriangleBlue = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`;

const Portrait: React.FC = () => {

  const [springProps, setSpring] = useSpring(() =>
    ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));

  return (
    <PortraitContainer
      onMouseMove={({ clientX: x, clientY: y }) =>
        setSpring({ xy: calc(x, y) })}
    >

      <BGGradient
        style={{ transform: springProps.xy.interpolate(transBGGradient) }}
      >
        <svg width="405" height="494" viewBox="0 0 405 494" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="405" height="494" rx="6" fill="url(#paint0_linear_BGGradient)" />
          <defs>
            <linearGradient id="paint0_linear_BGGradient" x1="405" y1="0" x2="-79.4108" y2="397.138" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B37FEB" />
              <stop offset="0.489583" stopColor="#40A9FF" />
              <stop offset="1" stopColor="#5CDBD3" />
            </linearGradient>
          </defs>
        </svg>
      </BGGradient>

      <RectanglePurple
        style={{ transform: springProps.xy.interpolate(transRectanglePurple) }}
      >
        <svg width="83" height="73" viewBox="0 0 83 73" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="83" height="73" rx="6" fill="url(#paint0_linear_RectanglePurple)" />
          <defs>
            <linearGradient id="paint0_linear_RectanglePurple" x1="83" y1="0" x2="10.5975" y2="82.3207" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EFDBFF" />
              <stop offset="1" stopColor="#FF85C0" />
            </linearGradient>
          </defs>
        </svg>
      </RectanglePurple>

      <SquareBlue
        style={{ transform: springProps.xy.interpolate(transSquareBlue) }}
      >
        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <rect width="65" height="65" rx="6" fill="url(#paint0_linear_SquareBlue)" />
          </g>
          <defs>
            <linearGradient id="paint0_linear_SquareBlue" x1="65" y1="0" x2="0" y2="65" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B37FEB" />
              <stop offset="0.489583" stopColor="#40A9FF" />
              <stop offset="1" stopColor="#5CDBD3" />
            </linearGradient>
          </defs>
        </svg>
      </SquareBlue>

      <PolygonGreen
        style={{ transform: springProps.xy.interpolate(transPolygonGreen) }}
      >
        <svg width="88" height="100" viewBox="0 0 88 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.63" d="M9.69873 30.1962L44 10.3923L78.3013 30.1962V69.8038L44 89.6077L9.69873 69.8038V30.1962Z" stroke="url(#paint0_linear_PolygonGreen)" strokeWidth="18" />
          <defs>
            <linearGradient id="paint0_linear_PolygonGreen" x1="94" y1="0" x2="-6" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#95DE64" />
              <stop offset="1" stopColor="#FFD666" />
            </linearGradient>
          </defs>
        </svg>
      </PolygonGreen>

      <ElipsePurple
        style={{ transform: springProps.xy.interpolate(transElipsePurple) }}
      >
        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.5" cx="19.5" cy="19.5" r="19.5" fill="url(#paint0_linear_ElipsePurple)" />
          <defs>
            <linearGradient id="paint0_linear_ElipsePurple" x1="39" y1="0" x2="0" y2="39" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EFDBFF" />
              <stop offset="1" stopColor="#FF85C0" />
            </linearGradient>
          </defs>
        </svg>
      </ElipsePurple>

      <ElipseBlue
        style={{ transform: springProps.xy.interpolate(transElipseBlue) }}
      >
        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19.5" cy="19.5" r="14" stroke="url(#paint0_linear_ElipseBlue)" strokeWidth="11" />
          <defs>
            <linearGradient id="paint0_linear_ElipseBlue" x1="39" y1="0" x2="0" y2="39" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B5F5EC" />
              <stop offset="0.489583" stopColor="#91D5FF" />
              <stop offset="1" stopColor="#B5F5EC" />
            </linearGradient>
          </defs>
        </svg>
      </ElipseBlue>

      <BGWhite
        style={{ transform: springProps.xy.interpolate(transBGWhite) }}
      >
        <Avatar />
      </BGWhite>

      <SquareYellow
        style={{ transform: springProps.xy.interpolate(transSquareYellow) }}
      >
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <g clipPath="url(#clip0_SquareYellow)">
              <rect x="36" width="50.9117" height="50.9117" rx="6" transform="rotate(45 36 0)" fill="url(#paint0_linear_SquareYellow)" />
            </g>
          </g>
          <defs>
            <linearGradient id="paint0_linear_SquareYellow" x1="86.9117" y1="0" x2="36" y2="50.9117" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFA39E" />
              <stop offset="1" stopColor="#EAFF8F" />
            </linearGradient>
            <clipPath id="clip0_SquareYellow">
              <path d="M31.7574 4.24264C34.1005 1.89949 37.8995 1.8995 40.2426 4.24264L67.7574 31.7574C70.1005 34.1005 70.1005 37.8995 67.7574 40.2426L40.2426 67.7574C37.8995 70.1005 34.1005 70.1005 31.7574 67.7574L4.24263 40.2426C1.89948 37.8995 1.89949 34.1005 4.24263 31.7574L31.7574 4.24264Z" fill="white" />
            </clipPath>
          </defs>
        </svg>

      </SquareYellow>

      <RectangleBlue
        style={{ transform: springProps.xy.interpolate(transRectangleBlue) }}
      >
        <svg width="80" height="63" viewBox="0 0 80 63" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.8">
            <rect width="80" height="63" rx="6" fill="url(#paint0_linear_RectangleBlue)" />
          </g>
          <defs>
            <linearGradient id="paint0_linear_RectangleBlue" x1="80" y1="0" x2="18.7559" y2="77.7703" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B5F5EC" />
              <stop offset="1" stopColor="#91D5FF" />
            </linearGradient>
          </defs>
        </svg>
      </RectangleBlue>

      <TriangleYellow
        style={{ transform: springProps.xy.interpolate(transTriangleYellow) }}
      >
        <svg width="56" height="49" viewBox="0 0 56 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M33.1618 3.71045L54.6318 39.9412C57.002 43.9408 54.1192 49 49.4701 49H6.52994C1.8808 49 -1.00195 43.9408 1.36819 39.9412L22.8383 3.71045C25.1622 -0.21113 30.8379 -0.211126 33.1618 3.71045Z" fill="url(#paint0_linear_TriangleYellow)" />
          <defs>
            <linearGradient id="paint0_linea_TriangleYellowr" x1="60" y1="-5" x2="6.77011" y2="58.0873" gradientUnits="userSpaceOnUse">
              <stop stopColor="#95DE64" />
              <stop offset="1" stopColor="#FFD666" />
            </linearGradient>
          </defs>
        </svg>
      </TriangleYellow>

      <TriangleBlue
        style={{ transform: springProps.xy.interpolate(transTriangleBlue) }}
      >
        <svg width="63" height="73" viewBox="0 0 63 73" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M59.3447 41.655L9.07022 71.5979C5.07077 73.9799 -1.0912e-05 71.098 -1.07086e-05 66.4429L-8.09086e-06 6.55709C-7.88738e-06 1.90202 5.07079 -0.979896 9.07023 1.40213L59.3447 31.345C63.2511 33.6716 63.2511 39.3284 59.3447 41.655Z" fill="url(#paint0_linear_TriangleBlue)" />
          <defs>
            <linearGradient id="paint0_linear_TriangleBlue" x1="68" y1="77" x2="-11.7761" y2="10.0274" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B5F5EC" />
              <stop offset="1" stopColor="#91D5FF" />
            </linearGradient>
          </defs>
        </svg>
      </TriangleBlue>

    </PortraitContainer>
  );
};

export default Portrait;
