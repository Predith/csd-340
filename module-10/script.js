//Kristopher Kuenning 
//Assignment #10.3 
//7.13.25
//CSD340

function changeImage(imgElement) {
  const mapping = {
    "Mount Everest.jpg": "Mount Everest_alt.jpg",
    "Mount Everest_alt.jpg": "Mount Everest.jpg",
    "Mauna Kea.jpg": "Mauna Kea_alt.jpg",
    "Mauna Kea_alt.jpg": "Mauna Kea.jpg",
    "Mount McKinley.jpg": "Mount McKinley_alt.jpg",
    "Mount McKinley_alt.jpg": "Mount McKinley.jpg"
  };

  const currentFile = imgElement.src.split('/').pop();

  if (mapping[currentFile]) {
    imgElement.src = mapping[currentFile];
  }
}

