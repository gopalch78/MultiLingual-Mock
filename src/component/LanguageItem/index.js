const LanguageItem = props => {
  const {LanguageItemDetails, isActive, onActiveTab} = props
  const {id, imageUrl, buttonText} = LanguageItemDetails
  const onClickButton = () => {
    onActiveTab(id, imageUrl)
  }

  return (
    <li>
      <button type="button" active={isActive} onClick={onClickButton}>
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageItem
