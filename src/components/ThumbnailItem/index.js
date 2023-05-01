import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, changeActiveImage, activeTab} = props

  const {
    id,
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
  } = imageDetails

  let image = null
  let activeAlt = null

  if (activeTab === id) {
    image = imageUrl
    activeAlt = imageAltText
  } else {
    image = thumbnailUrl
    activeAlt = thumbnailAltText
  }

  console.log(image, activeAlt)

  const onClickImage = () => {
    changeActiveImage(id)
  }

  return (
    <li className="image-list">
      <button type="button" className="button">
        <img
          src={image}
          alt={activeAlt}
          className="image"
          onClick={onClickImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
