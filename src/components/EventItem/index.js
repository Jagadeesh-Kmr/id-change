import './index.css'

const EventItem = props => {
  const {eventItem} = props
  const {imageUrl, name, location, setActiveId, id} = eventItem

  const onClickBtn = () => {
    setActiveId(id)
  }

  return (
    <>
      <li className="event-item-li">
        <button type="button" onClick={onClickBtn} className="btn">
          <img src={imageUrl} alt={name} className="event-img" />
        </button>

        <h1 className="event-name">{name}</h1>
        <p className="event-location">{location}</p>
      </li>
    </>
  )
}

export default EventItem
