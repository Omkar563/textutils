import React , {useState}from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleOnChange=(e)=>{
        console.log("on change")
        setText(e.target.value)
        
    }
    const handleUpclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText); 
    }
    
    const handlelowclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText); 
    }
    const handlesarclick = ()=>{
        let news = "";
        for (let  i = 1;  i <= text.length; i++) {
            if(i%2 ===0){
                news= news +text[i-1].toUpperCase();
            }else{
                news= news +text[i-1].toLowerCase();
            }
        }
        let newText = news;
        setText(newText); 
    }

  return (
    
    <>
    <h1>{props.heading} </h1>
    <div className="mb-3">
    <textarea className="form-control" value = {text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
    
    <button className='btn btn-primary my-3' onClick={handleUpclick}>To uppercase</button>
    <button className='btn btn-primary my-3 mx-3' onClick={handlelowclick}>To lowercase</button>
    <button className='btn btn-primary my-3 ' onClick={handlesarclick}>To Sarcasm</button>
    <h2>summary</h2>
    <p>{text.length } characters have been typed</p>
    <p>{text.split(" ").length }  words have been typed</p>

    </div>
    </>
  )
}
