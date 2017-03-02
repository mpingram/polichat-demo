const leftHue = 261; 
const centerHue = 300;
const rightHue = 360;

// bitwise OR zero will zero-round floats quickly
const zeroRound = ( num ) => num | 0;

// political spectrum hues share same (magic) saturation and lightness
const colorFormat = ( hue ) => `hsl(${hue.toString(10)}, 89%, 60%)`;

const chooseColor = ( value, max ) => {
  let negativeValue = false;
  let hueRange;
  let minHue;
  let maxHue;

  if ( value === 0 ){
    return colorFormat( centerHue );
  } else if ( value < 0 ){
    negativeValue = true;
    minHue = leftHue;
    maxHue = centerHue;
  } else if ( value > 0 ){
    minHue = centerHue;
    maxHue = rightHue;
  }
  
  if( negativeValue ){
    hueRange = centerHue - leftHue;
  } else {
    hueRange = rightHue - centerHue;
  }

  const targetHue = centerHue + zeroRound( (value / max) * hueRange );
  return colorFormat( targetHue );
};

export default chooseColor;