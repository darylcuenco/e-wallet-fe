import Button from "../button/button";
import './nav-bar.css'
import { BiUser } from "react-icons/bi";
import { BiBulb } from "react-icons/bi";
import { BiQrScan } from "react-icons/bi";
import {CNavbar, CContainer, CNavbarBrand} from "react"
function NavBar(){
    return <div className="NavBar">
            <div className="btn1">
                <Button icon={BiUser}/>
            </div>
            <div className="btn2">
                <Button icon={BiBulb}/>
            </div>
            <div className="btn3">
                <Button icon={BiQrScan}/>
            </div>
        </div>
//     return <div>
//         <CNavbar colorScheme="light" className="bg-light">
//     <CContainer fluid>
//       <CNavbarBrand href="#">
//         <img src="../../../../logo.svg" alt="" width="22" height="24" />
//       </CNavbarBrand>
//     </CContainer>
//   </CNavbar>
//     </div>
}

export default NavBar;