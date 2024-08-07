import  { DragCards } from "@/components/ui/DragCrds";
import BrandNeedsSection from "@/components/widgets/BrandNeedsSection";
import CompaignSection from "@/components/widgets/CompaignSection";
import DirectMailSection from "@/components/widgets/DirectMailSection";
import FastLanuchSection from "@/components/widgets/FastLanuchSection";
import Footer from "@/components/widgets/Footer";
import HeroSection from "@/components/widgets/HeroSection";
import LatestTrendsSection from "@/components/widgets/LatestTrendsSection";
import PostCardSection from "@/components/widgets/PostCardSection";
import TrustedCard from "@/components/widgets/TrustedCardSection";
import TryPostPilotRiskFreeSection from "@/components/widgets/TryPostPilotRiskFreeSection";


export default function Home() {
  return (
   <div >
    <HeroSection/>
    <TrustedCard/>
    <DirectMailSection/>
    <PostCardSection/>
    <BrandNeedsSection/>
    <FastLanuchSection/>
    <DragCards/>
    <CompaignSection/>
    <TryPostPilotRiskFreeSection/>
    <LatestTrendsSection/>
   </div>
  );
}
