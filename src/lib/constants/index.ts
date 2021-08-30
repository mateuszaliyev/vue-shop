import { Step } from "@/lib/types";

export const CHECKOUT_STEPS: ReadonlyArray<Step> = [
  {
    href: "/cart",
    icon: "shopping-cart",
    title: "Order details",
  },
  {
    href: "/checkout",
    icon: "address-card",
    title: "Personal details",
  },
  {
    href: "/summary",
    icon: "clipboard-list",
    title: "Summary",
  },
];
