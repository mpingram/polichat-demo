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

export { PoliticalSpectrumCutoffs, PoliticalSpectrumHues, PoliticalSpectrumColorsHSL };