import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onChangeTabId} = props
  const {tabId, displayText} = tabDetails

  const onChangeId = () => {
    onChangeTabId(tabId)
  }

  const activeClassName = isActive ? 'active-tab' : ''
  return (
    <li>
      <button
        type="button"
        className={`button ${activeClassName}`}
        onClick={onChangeId}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
