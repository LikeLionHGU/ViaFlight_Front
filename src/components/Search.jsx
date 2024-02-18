import Banner from "./SearchPage/Banner";
import Slider from "./SearchPage/Slider";
import Toggle from "./SchedulePage/Changing/ToggleBtn";

function Search() {
  return (
    <>
      <Banner />
      <div style={{ padding: "10px" }}></div>
      <Toggle />
      <Slider />
    </>
  );
}
export default Search;
