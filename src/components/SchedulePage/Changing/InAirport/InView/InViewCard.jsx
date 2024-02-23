import styled from "styled-components";
import "../../../../../font/font.css";

const StyleContainer = styled.div``;

const Card = styled.div`
  display: flex;
  padding: 50px 0;

  font-family: Pretendard-Regular;
`;

const ImageCard = styled.img`
  width: 40%;
  height: 500px;
  border-radius: 5px;

  object-fit: cover;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 80px;
`;

const Name = styled.div`
  padding-bottom: 18px;

  font-family: EsaManru;
  font-weight: 300;
  font-size: 40px;
`;

const Hours = styled.div`
  padding-bottom: 10px;

  font-family: Pretendard-ExtraLight;
  font-weight: 300;
  font-size: 24px;
`;

const Location = styled.div`
  padding-bottom: 50px;

  font-family: Pretendard-Thin;
  font-size: 22px;
`;

const Info = styled.div`
  padding-bottom: 50px;
  width: 700px;

  font-family: Pretendard-Thin;
  font-size: 19px;
  line-height: 30px;
`;

const BlogBtn = styled.button`
  border: 1px solid #f4f0e7;
  padding: 20px 40px;
  border-radius: 5px;
  background-color: #f4f0e7;
  color: #2c6e49;
  cursor: pointer;

  font-family: Plaid;
  font-size: 20px;

  &:hover {
    color: #f4f0e7;
    background-color: #2c6e49;
  }
`;

function InViewCard({
  imageURL,
  name,
  businessHours,
  location,
  information,
  blog,
  index,
}) {
  const ToBlog = () => {
    window.open(blog);
  };
  return (
    <StyleContainer>
      <Card style={index % 2 === 1 ? { flexDirection: "row-reverse" } : null}>
        <ImageCard src={imageURL} />
        <InfoBox
          style={
            index % 2 === 1
              ? {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }
              : null
          }
        >
          <Name>{name}</Name>
          <Hours>{businessHours}</Hours>
          <Location>{location}</Location>
          <Info style={index % 2 === 1 ? { textAlign: "right" } : null}>
            {information}
          </Info>
          {blog ? <BlogBtn onClick={ToBlog}>DISCOVER</BlogBtn> : ""}
        </InfoBox>
      </Card>
    </StyleContainer>
  );
}

// InViewCard.propTypes = {
//   key: PropTypes.number.isRequired,
//   coverImg: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default InViewCard;
