import type { StaticImageData } from "next/image";

import appleFritter from "@/assets/images/apple-fritter.jpg";
import cinnamonRoll from "@/assets/images/cinnamon-roll.jpg";
import donutTray from "@/assets/images/donut-tray.jpg";

export const shop = {
  name: "Queen Donut Houston",
  shortName: "Queen Donut",
  slogan: "You deserve a donut",
  // Bio from the shop's Facebook page.
  description:
    "The best little donut shop around. Stop by at Ella and West 18th in the Heights for the best donuts and kolaches around!",
  demoNotice: "Demo by Sarmad Rehan, not the official site.",
  phone: "(713) 869-2335",
  email: "donutqueenhouston@gmail.com",
  facebookUrl: "https://www.facebook.com/Donutqueenhouston/",
  street: "1806 W 18th St",
  crossStreets: "Corner of Ella Blvd & W 18th St",
  neighborhood: "The Heights",
  city: "Houston",
  postalCode: "77008",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Queen+Donut,+1806+W+18th+St,+Houston,+TX+77008&output=embed",
} as const;

export type HoursEntry = { days: string; hours: string };

// Community Impact, February 2023. Older listings disagree, so the page labels these "hours may vary".
export const hours: HoursEntry[] = [
  { days: "Mon – Tue", hours: "6 AM – 8 PM" },
  { days: "Wednesday", hours: "6 AM – 4 PM" },
  { days: "Thu – Sat", hours: "6 AM – 8 PM" },
  { days: "Sunday", hours: "6 AM – 1 PM" },
];

export const hoursNote = "Hours may vary, so give us a call before a special trip.";

export function phoneHref(phone: string): string {
  return `tel:+1${phone.replace(/\D/g, "")}`;
}

export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `Queen Donut ${shop.street}, ${shop.city}, TX ${shop.postalCode}`,
)}`;

export type Favorite = {
  name: string;
  description: string;
  image?: { src: StaticImageData; alt: string };
};

export const favorites: Favorite[] = [
  {
    name: "Apple Fritters",
    description: "Craggy, glazed and loaded with apple and cinnamon.",
    image: { src: appleFritter, alt: "Close-up of a glazed apple fritter" },
  },
  {
    name: "Cinnamon Rolls",
    description: "A tight swirl of cinnamon under a shiny glaze.",
    image: { src: cinnamonRoll, alt: "Close-up of a glazed cinnamon roll" },
  },
  {
    name: "Meat Donuts",
    description:
      "Kolache dough wrapped around scrambled egg and breakfast meat, the one the Houston Press wrote up.",
  },
  {
    name: "Blueberry Cake Donuts",
    description: "The blueberry cake donut the Houston Press singled out.",
  },
  {
    name: "Ham & Cheese Croissants",
    description: "A flaky croissant with ham and cheese, breakfast you can eat on the way.",
  },
  {
    name: "Kolaches",
    description: "The other half of the shop's promise: “the best donuts and kolaches around.”",
  },
];

export type MenuGroup = {
  id: string;
  title: string;
  items: string[];
};

// Item list from the Community Impact guide plus items named in press reviews. No source lists prices.
export const menu: MenuGroup[] = [
  {
    id: "donuts",
    title: "Donuts",
    items: [
      "Glazed",
      "Iced",
      "Cake",
      "Blueberry cake",
      "Sprinkle",
      "Jelly-filled",
      "Donut holes",
    ],
  },
  {
    id: "pastries",
    title: "Pastries",
    items: [
      "Apple fritters",
      "Cinnamon rolls",
      "Cinnamon twists",
      "Long johns",
      "Croissants",
      "Biscuits",
    ],
  },
  {
    id: "savory",
    title: "Kolaches & Savory",
    items: ["Kolaches", "Meat donuts", "Ham & cheese croissants"],
  },
];

export const pressQuote = {
  quote: "A no-frills, neighborhood favorite of The Heights",
  source: "Secret Houston",
  year: "2023",
};

export const heroImage = {
  src: donutTray,
  alt: "A tray of pink, white and chocolate iced donuts covered in rainbow sprinkles",
};
