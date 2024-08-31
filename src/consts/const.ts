import { LinkT } from "./types";

export const Links: LinkT[] = [
  {
    pageNumber: "firstPage",
    parameters: {
      pageName: "Socket",
      pageUrl: "/",
      id: "1232324qwe",
    },
  },
  {
    pageNumber: "secondPage",
    parameters: {
      pageName: "Exchange",
      pageUrl: "/exchange",
      id: "123asd",
    },
  },
  {
    pageNumber: "thirdPage",
    parameters: {
      pageName: "InfinityScroll",
      pageUrl: "/infinityScroll",
      id: "1232324oiajkaka",
    },
  },
];

export enum Valutes {
  EUR = "EUR",
  USD = "USD",
  AUD = "AUD",
  CAD = "CAD",
}
