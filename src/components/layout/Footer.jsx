import styled from "styled-components";
import FooterLogo from "../../img/FooterLogo.svg";

const StyleContainer = styled.div`
  background-color: black;
`;

function Footer() {
  return (
    <StyleContainer>
      <img src={FooterLogo} alt="logo" />
      <div>내 경유지 조회</div>
      <div>맞춤형 여행 일정</div>
      <div>ABOUT US</div>
      <div>© ViaFlight - 2024</div>
      <div>instagram</div>
      <div>facebook</div>
      <div>blog</div>
      <div>All rights reserved.</div>
    </StyleContainer>
  );
}

export default Footer;
