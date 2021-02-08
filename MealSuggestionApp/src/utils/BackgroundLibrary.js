const backgrounds = [
  require("../../assets/bg1.jpg"),
  require("../../assets/bg2.jpg"),
  require("../../assets/bg3.jpg"),
  require("../../assets/bg4.jpg"),
  require("../../assets/bg5.jpg"),
]

export const getBackground = (index) => {
  if (0 <= index < backgrounds.length)
    return backgrounds[index];
  else return backgrounds[0];
}

export const getRandomBackground = () => {
  let number = Math.floor(Math.random() * backgrounds.length)
  return getBackground(number);
}