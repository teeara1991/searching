import React from "react";
import Image from "./Image";

class ListImages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { filter, images } = this.props;
    return (
      <div>
        {images
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
