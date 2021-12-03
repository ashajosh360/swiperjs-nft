import { IApeTrait } from "../../../../api/types/apeTrait";

export const emptyApe: IApeTrait = {
  name: "",
  symbol: "",
  description: "",
  image: "",
  animation_url: "",
  external_url: "",
  edition: "",
  background_color: "",
  attributes: [],
  properties: {
    category: "",
    files: "",
    creators: [],
  },
};
