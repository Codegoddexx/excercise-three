const Questions = (props) => {
const {text, ans, clicked, faqList, setFaqList} = props

function showAnswer(id) {
    const newList = faqList.map((faq) => {
        if(faq.text === id ) {
            return {...faq, clicked:(clicked ? false :true)}
        }else{
            return {...faq}
        }
    })
setFaqList(newList)
}

  return (
    <div>
        <p onClick={()=> {
            showAnswer(text)
        }}> {clicked ? "lala" : text}</p>
        {
            clicked ? 
            <p>{ans}</p> : null
        }
    </div>
  )
}

export default Questions