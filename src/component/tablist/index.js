import './index.css'

const Tablist = props => {
  const {listDetails, onCheckingIdOfImage} = props
  const {thumbnailUrl, id} = listDetails

  const onChangeImage = () => {
    onCheckingIdOfImage(id)
  }

  return (
    <li className="list-container-li">
      <button type="button" className="image-button" onClick={onChangeImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default Tablist
