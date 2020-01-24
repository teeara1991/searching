import React from "react";

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image } = this.props;
    return (
      <div>
        <div>
          <img src={image.url} alt="pic"></img>
          <ul>
            {image.tags.map(tag => {
              return (
                <li className="tags" key={tag.id}>
                  #{tag}{" "}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Image;
