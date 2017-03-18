import CountryList from "./country-list";
import PartyCountryMap from "./party-country-map.json";

const PoliticalSpectrumCutoffs = {
  moderate: 0.25,
  centerMain: 0.5,
  main: 0.75,
  farMain: 1
}

const PoliticalSpectrumHues = {
  left: 261,
  center: 300,
  right: 360,
}

const PoliticalSpectrumColorsHSL = {
  left: `hsl(${PoliticalSpectrumHues.left}, 89%, 60%)`,
  center: `hsl(${PoliticalSpectrumHues.center}, 89%, 60%)`,
  right: `hsl(${PoliticalSpectrumHues.right}, 89%, 60%)`
}

const PoliticalSpectrumColorsHex = {
  left: "#7D3DF4",
  center: "#F43DF4",
  right: "#F43D3D"
}

const AppColors = {
  light: "#fefcfc",
  neutral: "#e6e6e6",
  dark: "#ff5d55",
}

const PoliticalSpectrumNumericMax = 100;




export { 
  PoliticalSpectrumCutoffs,
  PoliticalSpectrumHues,
  PoliticalSpectrumColorsHSL,
  PoliticalSpectrumColorsHex,
  PoliticalSpectrumNumericMax,
  AppColors,
  CountryList,
  PartyCountryMap,
};