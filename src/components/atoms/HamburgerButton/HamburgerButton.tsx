import React from 'react';
import styled from 'styled-components';

const HamburgerContainer = styled.div`
  display: none;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    display: unset;
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
`;

const StyledHamburgerIcon = styled.svg<Props>`
  .line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms, transform 400ms;
    stroke: ${({ theme }) => theme.colors.paragraph};
    stroke-width: 5.5;
    stroke-linecap: round;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    transform-origin: 50% 50%;
  }

  .top {
    stroke-dasharray: 40 139;
    stroke-dashoffset: ${({ isOpen }) => (isOpen ? '-98px' : '0')};
  }

  .bottom {
    stroke-dasharray: 40 180;
    stroke-dashoffset: ${({ isOpen }) => (isOpen ? '-138px' : '0')};
  }
`;

interface Props {
  isOpen: boolean;
  handleClick: () => void;
}

const HamburgerButton: React.FC<Props> = (props: Props) => {
  const { handleClick } = props;

  return (
    <HamburgerContainer onClick={(_) => handleClick && handleClick()}>
      <StyledHamburgerIcon
        viewBox="0 0 100 100"
        height="42"
        width="42"
        {...props}
      >
        <path
          className="line top"
          d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
        />
        <path className="line middle" d="m 30,50 h 40" />
        <path
          className="line bottom"
          d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
        />
      </StyledHamburgerIcon>
    </HamburgerContainer>
  );
};

export default HamburgerButton;
