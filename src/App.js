import {Component} from 'react'
import './App.css'
import LanguageItem from './component/LanguageItem'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  //
  // state = {
  //  activeButtonId: languageGreetingsList[0].id,
  // }

  // onActiveTab = id => {
  //  const imageUrlObject = languageGreetingsList.filter(each => each.id === id)
  // this.setState({
  //  activeButtonId: imageUrlObject[0].id,
  //  })
  //  }

  // render() {
  //  const {activeButtonId} = this.state
  //  return (
  //    <div>
  //     <h1>Multilingual Greetings</h1>
  //     <ul>
  //     {languageGreetingsList.map(each => (
  //       <LanguageItem
  //        key={each.id}
  //        LanguageItemDetails={each}
  //       isActive={activeButtonId === each.id}
  //        onActiveTab={this.onActiveTab}
  //     />
  //   ))}
  //  </ul>
  // </div>
  //  )
  // }
  // }
  state = {
    greetingList: [],
    activeTabId: languageGreetingsList[0].id,
    bgImageUrl: languageGreetingsList[0].imageUrl,
    bgAltText: languageGreetingsList[0].imageAltText,
  }

  componentDidMount() {
    this.getListElements()
  }

  getListElements = () => {
    const greetList = languageGreetingsList
    this.setState({
      greetingList: greetList,
      activeTabId: greetList[0].id,
    })
  }

  onActiveTab = (id, imageUrl, imageAltText) => {
    this.setState({
      activeTabId: id,
      bgImageUrl: imageUrl,
      bgAltText: imageAltText,
    })
  }

  render() {
    const {activeTabId, greetingList, bgImageUrl, bgAltText} = this.state
    return (
      <div>
        <h1>Multilingual Greetings</h1>
        <div>
          {greetingList.map(each => (
            <LanguageItem
              LanguageItemDetails={each}
              key={each.id}
              isActive={activeTabId === each.id}
              onActiveTab={this.onActiveTab}
            />
          ))}
        </div>
        <img src={bgImageUrl} alt={bgAltText} width="100" />
      </div>
    )
  }
}

export default App
