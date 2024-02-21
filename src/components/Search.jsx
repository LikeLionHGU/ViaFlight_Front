import Banner from "./SearchPage/Banner";
import Slider from "./SearchPage/Slider";
import Header from "./layout/Header";

import Search_Banner from "./SearchPage/Search_Banner";
import Search_Input_box from "./SearchPage/Search_Input_box";

function Search() {
  return (
    <>
      <Header />
      <Search_Banner></Search_Banner>
      <Search_Input_box></Search_Input_box>
      <Banner />
      <Slider />
    </>
  );
}
export default Search;
