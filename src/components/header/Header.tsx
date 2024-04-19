import './Header.css';
import React from 'react';
import GillyIcon from '../../assets/icons/Gilly-icon';
import TehoIcon from '../../assets/icons/Teho-icon';
import { IoChevronBackSharp } from 'react-icons/io5';
import { Tab } from '../../Outlay';

const Navbar: React.FC<{ backBtnHandler?: () => void }> = ({
  backBtnHandler,
}) => {
  const BackBtn = () => {
    return (
      <div onClick={backBtnHandler} className="global-navbar-back-btn">
        <IoChevronBackSharp />
      </div>
    );
  };

  return (
    <div className="navbar">
      {backBtnHandler ? <BackBtn /> : <span></span>}
      <span
        style={
          backBtnHandler
            ? { flexGrow: 1, display: 'flex', justifyContent: 'center' }
            : { flexGrow: 1, display: 'flex', justifyContent: 'start' }
        }
        onClick={() => (window.location.href = '/')}
      >
        <GillyIcon />
      </span>
      <TehoIcon />
    </div>
  );
};

const HeaderTab: React.FC<{
  currentTab: Tab;
  changeTab: (value: Tab) => void;
}> = ({ changeTab, currentTab }) => {
  const LeftArrowSvg: React.FC<{ text: string }> = ({ text }) => {
    return (
      <svg
        width="106"
        height="32"
        viewBox="0 0 106 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.3745 1H104.213L95.3328 15.4771L95.012 16L95.3328 16.5229L104.213 31H10.3745L1.17315 16L10.3745 1Z"
          fill="url(#paint0_radial_2031_22255)"
          fill-opacity="0.5"
          stroke="url(#paint1_radial_2031_22255)"
          stroke-width="2"
        />
        <defs>
          <radialGradient
            id="paint0_radial_2031_22255"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(51.5094 6.13699) rotate(60.4577) scale(28.2163 59.6832)"
          >
            <stop stop-color="#A1A1A1" stop-opacity="0.9" />
            <stop offset="1" stop-color="#3D3D3D" stop-opacity="0.6" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_2031_22255"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(59.625 4.9315) rotate(59.1735) scale(29.7352 71.3143)"
          >
            <stop stop-color="#949494" stop-opacity="0.9" />
            <stop offset="1" stop-color="#3D3C3C" stop-opacity="0.4" />
          </radialGradient>
        </defs>
        <text
          x="50%"
          y="50%"
          dominant-baseline="middle"
          text-anchor="middle"
          fill="white"
          fontWeight="800"
          fontSize="12px"
        >
          {text}
        </text>
      </svg>
    );
  };

  const RightArrowSvg: React.FC<{ text: string }> = ({ text }) => {
    return (
      <span>
        <svg
          width="106"
          height="32"
          viewBox="0 0 106 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M95.5365 31H1.70202L9.78942 16.4868L10.0607 16L9.78942 15.5132L1.70202 1H95.5365L104.824 16L95.5365 31Z"
            fill="url(#paint0_radial_2027_21773)"
            fill-opacity="0.5"
            stroke="url(#paint1_radial_2027_21773)"
            stroke-width="2"
          />
          <defs>
            <radialGradient
              id="paint0_radial_2027_21773"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(51.5094 6.13699) rotate(60.4577) scale(28.2163 59.6832)"
            >
              <stop stop-color="#A1A1A1" stop-opacity="0.9" />
              <stop offset="1" stop-color="#3D3D3D" stop-opacity="0.6" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_2027_21773"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(59.625 4.9315) rotate(59.1735) scale(29.7352 71.3143)"
            >
              <stop stop-color="#949494" stop-opacity="0.9" />
              <stop offset="1" stop-color="#3D3C3C" stop-opacity="0.4" />
            </radialGradient>
          </defs>
          <text
            x="50%"
            y="50%"
            dominant-baseline="middle"
            text-anchor="middle"
            fontSize="12px"
            fontWeight="800"
            fill="white"
          >
            {text}
          </text>
        </svg>
      </span>
    );
  };

  const MidCutSvg: React.FC<{ text: string }> = ({ text }) => {
    return (
      <svg
        width="106"
        height="32"
        viewBox="0 0 106 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.86204 1H104.138L94.5663 15.4477L94.2004 16L94.5663 16.5523L104.138 31H1.86204L11.4336 16.5523L11.7995 16L11.4336 15.4477L1.86204 1Z"
          fill="url(#paint0_radial_2027_21791)"
          fill-opacity="0.5"
          stroke="url(#paint1_radial_2027_21791)"
          stroke-width="2"
        />
        <defs>
          <radialGradient
            id="paint0_radial_2027_21791"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(51.5094 6.13699) rotate(60.4577) scale(28.2163 59.6832)"
          >
            <stop stop-color="#A1A1A1" stop-opacity="0.9" />
            <stop offset="1" stop-color="#3D3D3D" stop-opacity="0.6" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_2027_21791"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(59.625 4.9315) rotate(59.1735) scale(29.7352 71.3143)"
          >
            <stop stop-color="#949494" stop-opacity="0.9" />
            <stop offset="1" stop-color="#3D3C3C" stop-opacity="0.4" />
          </radialGradient>
        </defs>
        <text
          x="50%"
          y="50%"
          fontSize="12px"
          dominant-baseline="middle"
          text-anchor="middle"
          fill="white"
        >
          {text}
        </text>
      </svg>
    );
  };

  const MidFullActiveSvg: React.FC<{ text: string }> = ({ text }) => {
    return (
      <svg
        width="116"
        height="36"
        viewBox="0 0 116 36"
        className="transform-mid-active"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.17473 18L11.654 1H104.346L114.825 18L104.346 35H11.654L1.17473 18Z"
          fill="#F8990B"
          stroke="#FFD25E"
          stroke-width="2"
        />
        <text
          x="50%"
          y="50%"
          fontSize="14px"
          dominant-baseline="middle"
          text-anchor="middle"
          fill="white"
          fontWeight="800"
        >
          {text}
        </text>
      </svg>
    );
  };
  const MidFullSvg: React.FC<{ text: string }> = ({ text }) => {
    return (
      <svg
        width="106"
        height="32"
        viewBox="0 0 106 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.15407 16L9.79537 1H96.2046L104.846 16L96.2046 31H9.79537L1.15407 16Z"
          fill="url(#paint0_radial_2027_21790)"
          fill-opacity="0.5"
          stroke="url(#paint1_radial_2027_21790)"
          stroke-width="2"
        />
        <defs>
          <radialGradient
            id="paint0_radial_2027_21790"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(51.5094 6.13699) rotate(60.4577) scale(28.2163 59.6832)"
          >
            <stop stop-color="#A1A1A1" stop-opacity="0.9" />
            <stop offset="1" stop-color="#3D3D3D" stop-opacity="0.6" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_2027_21790"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(59.625 4.9315) rotate(59.1735) scale(29.7352 71.3143)"
          >
            <stop stop-color="#949494" stop-opacity="0.9" />
            <stop offset="1" stop-color="#3D3C3C" stop-opacity="0.4" />
          </radialGradient>
        </defs>
        <text
          x="50%"
          fontSize="12px"
          fontWeight="800"
          y="50%"
          dominant-baseline="middle"
          text-anchor="middle"
          fill="white"
        >
          {text}
        </text>
      </svg>
    );
  };

  const GetComponents = () => {
    if (currentTab === Tab.BUY) {
      return [
        <span onClick={() => changeTab(Tab.BUY)}>
          <MidFullActiveSvg text="BUY" />
        </span>,
        <span onClick={() => changeTab(Tab.QUEUE)}>
          <RightArrowSvg text="RACE" />
        </span>,
        <span onClick={() => changeTab(Tab.LEADERBOARD)}>
          <RightArrowSvg text="WIN" />
        </span>,
      ];
    } else if (currentTab === Tab.QUEUE) {
      return [
        <span
          className="transform-mid-active"
          onClick={() => changeTab(Tab.BUY)}
        >
          <LeftArrowSvg text="BUY" />
        </span>,
        <span onClick={() => changeTab(Tab.QUEUE)}>
          <MidFullActiveSvg text="RACE" />
        </span>,
        <span onClick={() => changeTab(Tab.LEADERBOARD)}>
          <RightArrowSvg text="WIN" />
        </span>,
      ];
    } else if (currentTab === Tab.LEADERBOARD) {
      return [
        <span
          className="transform-mid-active"
          onClick={() => changeTab(Tab.BUY)}
        >
          <MidFullSvg text="BUY" />
        </span>,
        <span onClick={() => changeTab(Tab.QUEUE)}>
          <MidCutSvg text="RACE" />
        </span>,
        <span onClick={() => changeTab(Tab.LEADERBOARD)}>
          <MidFullActiveSvg text="WIN" />
        </span>,
      ];
    } else {
      return [
        <span
          className="transform-mid-active"
          onClick={() => (window.location.href = '/')}
        >
          <MidFullSvg text="BUY" />
        </span>,
        <span onClick={() => changeTab(Tab.QUEUE)}>
          <MidCutSvg text="RACE" />
        </span>,
        <span onClick={() => changeTab(Tab.LEADERBOARD)}>
          <LeftArrowSvg text="WIN" />
        </span>,
      ];
    }
  };

  return (
    <div className="headertab">
      <GetComponents />
    </div>
  );
};

const Header: React.FC<{
  backBtnHandler?: () => void;
  changeTabValue: (value: Tab) => void;
  currentTab: Tab;
}> = ({ backBtnHandler, changeTabValue, currentTab }) => {
  return (
    <div className="header">
      <div>
        <Navbar backBtnHandler={backBtnHandler} />
      </div>
      <div>
        <HeaderTab currentTab={currentTab} changeTab={changeTabValue} />
      </div>
    </div>
  );
};

export default Header;
