import { Countries, RegExpKey, Step } from "@/lib/types";

import * as COUNTRIES_JSON from "@/lib/constants/countries.json";

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

export const { default: COUNTRIES } = COUNTRIES_JSON as unknown as {
  default: Countries;
};

/* eslint-disable no-control-regex */
export const REGEX: { [key in RegExpKey]: RegExp } = {
  creditCard:
    /^(3[47][0-9]{13}|(6541|6556)[0-9]{12}|389[0-9]{11}|3(?:0[0-5]|[68][0-9])[0-9]{11}|65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})|63[7-9][0-9]{13}|(?:2131|1800|35\d{3})\d{11}|9[0-9]{15}|(6304|6706|6709|6771)[0-9]{12,15}|(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}|(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))|(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}|(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]{12}|564182[0-9]{13}|633110[0-9]{10}|633110[0-9]{12}|633110[0-9]{13}|(62[0-9]{14,17})|4[0-9]{12}(?:[0-9]{3})?|(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}))$/,
  email:
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
  expiryDate: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
  expiryDateReplace: /\s/g,
  phoneNumber:
    /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/,
  phoneNumberReplace: /[\s()+\-./x]/gi,
  postalCode: /^[a-zA-Z0-9-\s]*$/,
  securityCode: /^[0-9]{3,4}$/,
};
/* eslint-disable no-control-regex */
