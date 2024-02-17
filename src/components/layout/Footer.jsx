import styled from "styled-components";
import FooterLogo from "../../img/FooterLogo.svg";
import "../../font/font.css";

const StyleContainer = styled.div`
  background-color: black;
  color: rgba(244, 240, 231, 1);
  padding: 10px 50px;
  padding-bottom: 30px;

  font-family: Plaid;
`;

const Above = styled.div`
  display: flex;
  align-items: center;
`;

const Below = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px;
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

  padding-top: 10px;
`;
const UnderLine = styled.div`
  border-bottom: 0.8px solid rgba(244, 240, 231, 1);
  border-right: 0.8px solid rgba(244, 240, 231, 1);
  border-left: 0.8px solid rgba(244, 240, 231, 1);

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  height: 10px;
  width: 80%;
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
          <UnderLine />
          <div>All rights reserved.</div>
        </BelowUnder>
      </Below>
    </StyleContainer>
  );
}

export default Footer;
