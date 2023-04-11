import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieObject} = props
  const {thumbnailUrl, videoUrl} = movieObject

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <img className="thumbnail-image" alt="thumbnail" src={thumbnailUrl} />
        }
        className="popup-content"
      >
        {close => (
          <>
            <div className="react-player-container">
              <button
                data-testid="closeButton"
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                <IoMdClose />
              </button>
              <ReactPlayer
                height="200px"
                width="350px"
                className="react-player"
                url={videoUrl}
                controls
              />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
