import ScheduleBanner1 from "./NoChanging/Schedule_Banner1";
import ScheduleBanner2 from "./NoChanging/Schedule_Banner2";
import OutGreenGrid from "./Changing/OutAirport/OutGreenGrid";

import OutMove from "./Changing/OutAirport/OutMove";
import OutTraffic from "./Changing/OutAirport/OutTraffic";
import OutGuide from "./Changing/OutAirport/OutGuide";

export default function OutAirport({ isOn }) {
  return (
    <>
      <ScheduleBanner1 />
      <ScheduleBanner2 isOn={isOn} />
      <OutGreenGrid />

      <OutMove />
      <OutTraffic />
      <OutGuide />
    </>
  );
}
