import MovieItem from '../MovieItem'

import './index.css'

const MoviesSlider = props => {
  const {movieObject} = props

  return (
    <div className="slider-container">
      <MovieItem movieObject={movieObject} />
    </div>
  )
}
export default MoviesSlider
