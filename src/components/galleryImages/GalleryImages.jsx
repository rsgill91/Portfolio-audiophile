import React from "react";
import "./GalleryImages.css";

function GalleryImages(props) {
  var selected = props?.gallery;
  console.log(selected);
  return (
    <div className="tri-picture-gallery">
      <div className="small-pictures">
        <div className="first-picture">
          <picture>
            <source
              media="(min-width: 1200px)"
              srcSet={selected.first.desktop.slice(1)}
            />
            <source
              media="(min-width: 768px)"
              srcSet={selected.first.tablet.slice(1)}
            />
            <source
              media="(min-width: 375px)"
              srcSet={selected.first.mobile.slice(1)}
            />
            <img src={selected.first.desktop.slice(1)} alt="" />
          </picture>
        </div>
        <div className="second-picture">
          <picture>
            <source
              media="(min-width: 1200px)"
              srcSet={selected.second.desktop.slice(1)}
            />
            <source
              media="(min-width: 768px)"
              srcSet={selected.second.tablet.slice(1)}
            />
            <source
              media="(min-width: 375px)"
              srcSet={selected.second.mobile.slice(1)}
            />
            <img src={selected.second.desktop.slice(1)} alt="" />
          </picture>
        </div>
      </div>

      <div className="large-pictures">
        <picture>
          <source
            media="(min-width: 1200px)"
            srcSet={selected.third.desktop.slice(1)}
          />
          <source
            media="(min-width: 768px)"
            srcSet={selected.third.tablet.slice(1)}
          />
          <source
            media="(min-width: 375px)"
            srcSet={selected.third.mobile.slice(1)}
          />
          <img src={selected.third.desktop.slice(1)} alt="" />
        </picture>
      </div>
    </div>
  );
}

export default GalleryImages;
