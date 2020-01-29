import React from "react";
import Image from "./Image";

function ListImages(props) {
  const { filter, images, id } = props;
  return (
    <div>
      {id[0]
        ? images
            .filter(image => id.includes(image.folderId))
            .filter(
              image =>
                new RegExp(filter, "g").test(image.tags.join(" ")) === true
            )
            .map((image, id) => <Image key={id} image={image} />)
        : images
            .filter(
              image =>
                new RegExp(filter, "g").test(image.tags.join(" ")) === true
            )
            .map((image, id) => <Image key={id} image={image} />)}
    </div>
  );
}

export default ListImages;
