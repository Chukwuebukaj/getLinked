import { ReactNode } from "react";

export const topPara: string =
  "Below are our privacy & policy, which outline a lot of goodies. It’s our aim to always take care of our participants";

export const bottomPara: string =
  "At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.";

export const terms: { icon: ReactNode; content: string }[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
      >
        <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
        <path d="M5 8L7 10.5L13.5 6" stroke="white" strokeWidth="2" />
      </svg>
    ),
    content:
      "The Standard License grants you a non-exclusive right to navigate and register for our event",
  },

  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
      >
        <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
        <path d="M5 8L7 10.5L13.5 6" stroke="white" strokeWidth="2" />
      </svg>
    ),
    content:
      "You are licensed to use the item available at any free source sites, for your project developement",
  },
];
