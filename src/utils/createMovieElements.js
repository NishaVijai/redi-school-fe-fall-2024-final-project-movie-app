import noImage from "../../public/assets/images/missingImage.svg";

export const createPosterImg = (posterUrl) => {
  const img = document.createElement("img");
  img.alt = "poster";
  img.src = posterUrl && posterUrl !== "N/A" ? posterUrl : noImage;
  img.onerror = () => {
    img.onerror = null;
    img.src = noImage;
  };
  return img;
};

export const createContainer = (className) => {
  const div = document.createElement("div");
  if (className) div.classList.add(className);
  return div;
};
