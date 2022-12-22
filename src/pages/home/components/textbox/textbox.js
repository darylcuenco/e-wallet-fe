import './textbox.css'


function getTextType(props){

    switch(props.type){
        case 'h1':
            return <h1 className='text' style={{color:props.textColor, fontSize:props.fontSize}}>{props.text}</h1>
            break;
        case 'h2':
            return <h2 className='text' style={{color:props.textColor, fontSize:props.fontSize}}>{props.text}</h2>
            break;
        case 'h3':
            return <h3 className='text' style={{color:props.textColor, fontSize:props.fontSize}}>{props.text}</h3>
            break;
        case 'h4':
            return <h4 className='text' style={{color:props.textColor, fontSize:props.fontSize}}>{props.text}</h4>
            break;
        case 'h5':
            return <h5 className='text' style={{color:props.textColor, fontSize:props.fontSize}}>{props.text}</h5>
            break;
        case 'h6':
            return <h6 className='text' style={{color:props.textColor, fontSize:props.fontSize}}>{props.text}</h6>
            break;
        default:
            return props.bold ? <p className='textbold' style={{color:props.textColor, fontSize:props.fontSize}}>{props.text}</p> : <p className='text' style={{color:props.textColor, fontSize:props.fontSize}}>{props.text}</p>  
    }
    

}

function Textbox(props){
    return <div className="Textbox">
        
        {getTextType(props)}
        
    </div>
}

export default Textbox;