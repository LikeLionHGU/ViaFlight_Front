import styled from "styled-components";
import FooterLogo from "../../img/FooterLogo.svg";
import "../../font/font.css";
import Fadein from "../AboutPage/About_fadin";

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

const ToLink = styled.div`
  cursor: pointer;
`

function Footer() {
  const ToInsta = () => {
    window.open("https://www.instagram.com/via_flight/")
  }
  const ToFaceBook = () => {
    window.open("https://www.facebook.com/profile.php?id=61556486139944")
  }
  const ToBlog = () => {
    window.open("https://blog.naver.com/via_flight")
  }
  return (
    <StyleContainer>
      <Fadein>
        <Above>
          <img src={FooterLogo} alt="logo" style={{ paddingRight: "15%" }} />
          
        </Above>
        <Below>
          <BelowOver>
            <BelowCompany>© ViaFlight - 2024</BelowCompany>
            <BelowContact>
              <ToLink onClick={ToInsta}>instagram</ToLink>
              <ToLink onClick={ToFaceBook}>facebook</ToLink>
              <ToLink onClick={ToBlog}>blog</ToLink>
            </BelowContact>
          </BelowOver>
          <BelowUnder>
            <LineCover>
              <UnderLine />
            </LineCover>
            <div>All rights reserved.</div>
          </BelowUnder>
        </Below>
      </Fadein>
    </StyleContainer>
  );
}

export default Footer;
