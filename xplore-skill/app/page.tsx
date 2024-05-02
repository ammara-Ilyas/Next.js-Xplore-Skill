import Image from "next/image";
import Hero from "@/components/mainComponent/home/Hero";
import VerticalLine from "@/components/widgets/VerticalLine";
import Course from "@/components/mainComponent/home/Course";
import VirtualTour from "@/components/mainComponent/home/VirtualTour";
import Faculity from "@/components/mainComponent/home/Faculity";
export default function Home() {
  return (
    <>
      <Hero />
      <VerticalLine />
      <Course />
      <VerticalLine />
      <VirtualTour />
      <VerticalLine />
      <Faculity />
    </>
  );
}
