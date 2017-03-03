import { PoliticalSpectrumHues as Hues } from "../config/app-defaults";

// bitwise OR zero will zero-round floats quickly
const zeroRound = ( num ) => num | 0;

// political spectrum hues share same (magic) saturation and lightness
const colorFormat = ( hue ) => `hsl(${hue.toString(10)}, 89%, 60%)`;

const chooseColor = ( value, max ) => {
  let hueRange;

  if ( value === 0 ){
    return colorFormat( Hues.center );
  } else if ( value < 0 ){
    hueRange = Hues.center - Hues.left;
  } else if ( value >  0){
    hueRange = Hues.right - Hues.center;
  }

  const targetHue = Hues.center + zeroRound( (value / max) * hueRange );
  return colorFormat( targetHue );
};

export default chooseColor;