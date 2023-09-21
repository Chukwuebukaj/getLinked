import { ReactNode } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { PiPhoneCallFill } from "react-icons/pi";
import { HiLocationMarker } from "react-icons/hi";

export const getLinkedInfo: string =
  "Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology";

export const usefulLinks: { title: string; path: string }[] = [
  { title: "Overview", path: "#overview" },
  { title: "Timeline", path: "#timeline" },
  { title: "FAQs", path: "#faqs" },
  { title: "Register", path: "register" },
];

export const socialMediaIcons: { icon: ReactNode; url: string }[] = [
  { icon: <AiOutlineInstagram />, url: "www.instagram.com" },
  { icon: <FaXTwitter />, url: "twitter.com" },
  { icon: <BiLogoFacebook />, url: "www.facebook.com" },
  { icon: <BiLogoLinkedin />, url: "www.linkedin.com" },
];

export const contactUsData: { icon: ReactNode; content: string }[] = [
  { icon: <PiPhoneCallFill />, content: "+234 679 81819" },
  {
    icon: <HiLocationMarker />,
    content: "27,Alara Street Yaba 100012 Lagos State",
  },
];
