import Button from "../button/button";
import './history-panel.css'
import Textbox from '../textbox/textbox';
// import { BiUser } from "react-icons/bi";
// import { BiBulb } from "react-icons/bi";
function HistoryPanel(){
    return <div className="HistoryPanel">
        <Textbox text={"Transaction History"} bold={false} fontSize={"medium"}/>
        {/* <Button icon={BiUser}/>
        <Button icon={BiBulb}/> */}
    </div>
}

export default HistoryPanel;