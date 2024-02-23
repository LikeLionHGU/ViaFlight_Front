import ScheduleBanner1 from "./NoChanging/Schedule_Banner1";
import ScheduleBanner2 from "./NoChanging/Schedule_Banner2";
import OutGreenGrid from "./Changing/OutAirport/OutGreenGrid";
import OutTraffic from "./Changing/OutAirport/OutView/OutTraffic";
import OutBanner2 from "./Changing/OutAirport/OutBanner2";

export default function OutAirport() {
  return (
    <>
      <ScheduleBanner1 />
      <ScheduleBanner2 />
      {/* <OutBanner2 /> */}
      <OutGreenGrid />
      <OutTraffic />
    </>
  );
}
