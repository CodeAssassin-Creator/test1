import React from 'react'

import PropTypes from 'prop-types'

import './gallery1.css'

const Gallery1 = (props) => {
  return (
    <div className="gallery1-gallery3 thq-section-padding">
      <div className="gallery1-max-width thq-section-max-width">
        <div className="gallery1-section-title">
          <h2 className="gallery1-text thq-heading-2">{props.heading1}</h2>
          <span className="gallery1-text1 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="gallery1-content">
          <div className="gallery1-container">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container1">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container2">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery1.defaultProps = {
  image3Src: '/images-1400w.jpeg',
  content1:
    'Explore our vibrant campus life through these images showcasing our state-of-the-art facilities, engaging classrooms, and diverse student activities.',
  image1Src: '/class-room-pic-1-1400w.jpeg',
  image3Alt: 'Modern library with study spaces',
  image2Alt: 'Students participating in a sports event',
  image2Src: '/download%20(1)-1400w.jpeg',
  heading1: 'Campus Life at MANAV RACHNA',
  image1Alt: 'Classroom with interactive whiteboard',
}

Gallery1.propTypes = {
  image3Src: PropTypes.string,
  content1: PropTypes.string,
  image1Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image2Src: PropTypes.string,
  heading1: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Gallery1
