import styled from "styled-components";

const StyleContainer = styled.div``;
const ImageCard = styled.img`
  width: 40%;
  height: 500px;

  object-fit: cover;
`;

function InViewCard({
  key,
  imageURL,
  name,
  businessHours,
  location,
  information,
}) {
  return (
    <StyleContainer>
      <ImageCard src={imageURL} />
      <div>{name}</div>
      <div>{businessHours}</div>
      <div>{location}</div>
      <div>{information}</div>
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
