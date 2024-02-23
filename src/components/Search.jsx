import Banner from "./SearchPage/Banner";
import Slider from "./SearchPage/Slider";
import Header from "./layout/Header";

import Search_Banner from "./SearchPage/Search_Banner";
import Search_Input_box from "./SearchPage/Search_Input_box";


function Search() {
  window.onload = function() {

    setTimeout (function () {
    
    window.scrollTo(0,0);
    
    },100);
    
    }
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
