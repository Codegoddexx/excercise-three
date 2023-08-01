import { useState } from 'react'
import './App.css'
import Questions from './components/Questions'

const theQuestions = [
  {id: Math.random(), text: "Who does our work?", ans: "loremmmmmm", clicked: false },
  {id: Math.random(), text:  "Where is our work done?", ans: "loremmmmmm", clicked: false},
  {id: Math.random(), text: "Who sees our work?", ans: "loremmmmmm", clicked: false},
  {id: Math.random(), text: "Who do we work for", ans: "loremmmmmm", clicked: false},
  {id: Math.random(), text: "What is our Work?", ans: "loremmmmmm", clicked: false}
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
                      onClick= {QuestionTag + index}
                    />
                    );
                  })}
     </div>
    </>
  )
}

export default App
