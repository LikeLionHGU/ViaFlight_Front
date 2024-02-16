import styled from "styled-components";
import FooterLogo from "../../img/FooterLogo.svg";

const StyleContainer = styled.div`
  background-color: black;
  color: white;
  padding: 10px;
`;

const Above = styled.div`
  display: flex;
  align-items: center;
`;

const Below = styled.div`
  display: flex;
  flex-direction: column;
`;

const BelowOver = styled.div`
  display: flex;
`;

const Menu = styled.div`
  display: flex;
`;
const BelowUnder = styled.div`
  display: flex;
  align-items: center;
`;
const UnderLine = styled.div`
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  border-left: 1px solid white;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  height: 10px;
  width: 100px;
`;

function Footer() {
  return (
    <StyleContainer>
      <Above>
        <img src={FooterLogo} alt="logo" style={{}} />
        <Menu>
          <div>내 경유지 조회</div>
          <div>맞춤형 여행 일정</div>
          <div>ABOUT US</div>
        </Menu>
      </Above>
      <Below>
        <BelowOver>
          <div>© ViaFlight - 2024</div>
          <div>instagram</div>
          <div>facebook</div>
          <div>blog</div>
        </BelowOver>
        <BelowUnder>
          <UnderLine></UnderLine>
          <div>All rights reserved.</div>
        </BelowUnder>
      </Below>
    </StyleContainer>
  );
}

export default Footer;
