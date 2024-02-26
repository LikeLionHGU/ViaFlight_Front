import Banner from "./SearchPage/Banner";
import Slider from "./SearchPage/Slider";
import Header from "./layout/Header";

import SearchBanner from "./SearchPage/Search_Banner";
import SearchInputbox from "./SearchPage/Search_Input_box";

function Search() {
  window.onload = function () {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 100);
  };
  return (
    <>
      <Header />
      <SearchBanner></SearchBanner>
      <SearchInputbox></SearchInputbox>
      <Banner />
      <Slider />
    </>
  );
}
export default Search;
