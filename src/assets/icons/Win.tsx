import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

const Win = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={106}
    height={32}
    viewBox="0 0 106 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M95.5365 31H1.79532L10.7568 16.5264L11.0827 16L10.7568 15.4736L1.79532 1H95.5365L104.824 16L95.5365 31Z"
      fill="url(#paint0_radial_1926_13376)"
      fillOpacity={0.5}
      stroke="url(#paint1_radial_1926_13376)"
      strokeWidth={2}
    />
    <path
      d="M43.7724 20L41.2326 11.2727H43.5636L44.8803 16.9915H44.9528L46.457 11.2727H48.3576L49.8619 17.0043H49.9343L51.2553 11.2727H53.582L51.0465 20H49.0138L47.4414 14.7074H47.3732L45.8008 20H43.7724ZM56.5629 11.2727V20H54.4535V11.2727H56.5629ZM65.3146 11.2727V20H63.5249L60.0518 14.9631H59.9964V20H57.8871V11.2727H59.7024L63.1371 16.3011H63.2095V11.2727H65.3146Z"
      fill="#F4F4F4"
    />
    <defs>
      <radialGradient
        id="paint0_radial_1926_13376"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(51.5094 6.13699) rotate(60.4577) scale(28.2163 59.6832)"
      >
        <stop stopColor="#A1A1A1" stopOpacity={0.9} />
        <stop offset={1} stopColor="#3D3D3D" stopOpacity={0.6} />
      </radialGradient>
      <radialGradient
        id="paint1_radial_1926_13376"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(59.625 4.9315) rotate(59.1735) scale(29.7352 71.3143)"
      >
        <stop stopColor="#949494" stopOpacity={0.9} />
        <stop offset={1} stopColor="#3D3C3C" stopOpacity={0.4} />
      </radialGradient>
    </defs>
  </svg>
);
export default Win;
