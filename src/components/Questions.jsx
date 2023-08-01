/* eslint-disable react/prop-types */
const Questions = (props) => {
const {text, ans, clicked, faqList, setFaqList, id} = props

function showAnswer(id) {
    const newList = faqList.map((faq) => {
        if(faq.id === id ) {
            return {...faq, clicked:(clicked ? false :true)}
        }else{
            return {...faq}
        }
    })
const pickedQuestion = faqList.filter((faq)=> {
    return faq.id === id
})

const NewQuestion = [...newList, ...pickedQuestion]
    
setFaqList(NewQuestion)
}

  return (
    <div>
        <p onClick={()=> {
            showAnswer(id)
        }}> {clicked ? "lala" : text}</p>
        {
            clicked ? 
            <p>{ans}</p> : null
        }
    </div>
  )
}

export default Questions