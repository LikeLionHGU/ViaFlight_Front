import styled from "styled-components";
import FooterLogo from "../../img/FooterLogo.svg";
import "../../font/font.css";

const StyleContainer = styled.div`
  background-color: black;
  color: rgba(244, 240, 231, 1);
  padding: 10px 3%;
  padding-bottom: 30px;

  font-family: Plaid;
  white-space: nowrap;
`;

const Above = styled.div`
  display: flex;
  align-items: center;
`;

const Below = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px; // 로고와 일직선 상에 있기위해 위해
  padding-top: 80px;
`;

const BelowOver = styled.div`
  display: flex;
`;
const BelowCompany = styled.div`
  padding-right: 9%;
`;
const BelowContact = styled.div`
  display: flex;
  justify-content: space-between;

  width: 20%;
  font-weight: 300;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;

  width: 40%;

  font-family: EsaManru;
  font-weight: 200;
  font-size: 15px;
`;
const BelowUnder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding-top: 10px;
`;
const LineCover = styled.div`
  width: 100%;
`;
const UnderLine = styled.div`
  border-bottom: 1px solid rgba(244, 240, 231, 0.7);
  border-right: 1px solid rgba(244, 240, 231, 0.7);
  border-left: 1px solid rgba(244, 240, 231, 0.7);

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  height: 10px;
  width: 90%;
`;

function Footer() {
  return (
    <StyleContainer>
      <Above>
        <img src={FooterLogo} alt="logo" style={{ paddingRight: "15%" }} />
        <Menu>
          <div>내 경유지 조회</div>
          <div>맞춤형 여행 일정</div>
          <div style={{ fontFamily: "Plaid", fontWeight: "500" }}>ABOUT US</div>
        </Menu>
      </Above>
      <Below>
        <BelowOver>
          <BelowCompany>© ViaFlight - 2024</BelowCompany>
          <BelowContact>
            <div>instagram</div>
            <div>facebook</div>
            <div>blog</div>
          </BelowContact>
        </BelowOver>
        <BelowUnder>
          <LineCover>
            <UnderLine />
          </LineCover>
          <div>All rights reserved.</div>
        </BelowUnder>
      </Below>
    </StyleContainer>
  );
}

export default Footer;
