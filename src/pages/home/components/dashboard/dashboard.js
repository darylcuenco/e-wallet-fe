import './dashboard.css'
import Textbox from '../textbox/textbox';
import ButtonPanel from '../button-panel/button-panel';
import { BiMoney } from "react-icons/bi";
import { BiTransferAlt } from "react-icons/bi";
import { BiQr } from "react-icons/bi";

var name = "Deej"
var amt = "₱ 300,000.00"

function getTextType(amt){
    if(amt.length <= 10){
        return "h3"
    }
    else{
        return "h5"
    }
}

function Dashboard(){
    return <div className="Dashboard">
        <div className="container1">
            <Textbox text={"Hello " + name + "!"} bold={false} textColor={"#ffffff"}/>
            <div className='container2'>
            <Textbox text={amt} bold={false} type={getTextType(amt)} textColor={"#ffffff"}/>
            <p className='label'>Available Balance</p>
            </div>
        </div>
        <div><br/><br/></div>
        <div className="container1">
            <ButtonPanel icon={BiMoney} text={"Cash-In"}/>
            <ButtonPanel icon={BiTransferAlt} text={"Transfer"}/>
            <ButtonPanel icon={BiQr} text={"Generate QR"}/>
            
        </div>
    </div>
}

export default Dashboard;