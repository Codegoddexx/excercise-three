import { useState } from 'react'
import './App.css'
import Questions from './components/Questions'

const theQuestions = [
  { text: "Who does our work?", ans: "loremmmmmm", clicked: true },
  { text:  "Where is our work done?", ans: "loremmmmmm", clicked: false},
  { text: "Who sees our work?", ans: "loremmmmmm", clicked: false},
  { text: "Who do we work for", ans: "loremmmmmm", clicked: false},
  {text: "What is our Work?", ans: "loremmmmmm", clicked: false}
];



function App() {
  const [faqList, setFaqList ] = useState(theQuestions)
  // const clicked = false
  return (
    <>
     <h1>Frequently Asked Questions</h1>
     <div>
      
      {faqList.map((QuestionTag, index) => {
                  return (
                    <Questions
                      key={index}
                      {...QuestionTag}
                      faqList = {faqList}
                      setFaqList = {setFaqList}
                    />
                    );
                  })}
     </div>
    </>
  )
}

export default App
