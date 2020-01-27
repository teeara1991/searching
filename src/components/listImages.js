import React from "react";
import Image from "./Image";

class ListImages extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { filter, images, id } = this.props;
    console.log(id);
    return (
      <div>
        {images
          .filter(image => image.folderId === id)
          .filter(
            image => new RegExp(filter, "g").test(image.tags.join(" ")) === true
          )

          .map(image => (
            <Image image={image} />
          ))}
      </div>
    );
  }
}

export default ListImages;
