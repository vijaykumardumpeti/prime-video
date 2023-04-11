import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  }

  return (
    <div className="prime-video-container">
      <img
        className="prime-video-image"
        alt="prime video"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
      />
      <div className="slides-container">
        <div className="action-movies-container">
          <h1 className="heading">Action Movies</h1>
          <Slider {...settings} className="slider">
            {moviesList
              .filter(object => object.categoryId === 'ACTION')
              .map(object => (
                <MoviesSlider movieObject={object} />
              ))}
          </Slider>
        </div>

        <div className="action-movies-container">
          <h1 className="heading">Comedy Movies</h1>
          <Slider {...settings} className="slider">
            {moviesList
              .filter(object => object.categoryId === 'COMEDY')
              .map(object => (
                <MoviesSlider movieObject={object} />
              ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
