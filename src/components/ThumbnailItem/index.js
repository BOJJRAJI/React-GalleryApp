import './index.css'

const ThumbnailItem = props => {
  const {image, changeTab, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = image
  const showClearly = isActive ? 'apply-active-class' : 'image'

  return (
    <li className="list-item">
      <button
        className="image-button"
        type="button"
        onClick={() => changeTab(id)}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={showClearly}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
