const chooseColor = require("../../../src/shared/utils/choose-color.js");

describe( "choose-color function", () => {

  it( "should work",  () => {
    
    console.log( chooseColor( 73, 127 ) );
    console.log( chooseColor( -43, 127 ) );
    
    expect(true).toBe(true);
  });

});