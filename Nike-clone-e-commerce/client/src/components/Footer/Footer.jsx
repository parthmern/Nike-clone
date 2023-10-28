import React, { useEffect, useState } from 'react';
import "./Footer.scss";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";



const Footer = () => {

  const [footerType,setFooterType] = useState("terms");
  const [desc,setDecs] = useState("");
  const classx = "selected";

  useEffect(()=>{
    if(footerType=="terms"){
      setDecs("Copyright © 2023 Nike clone | All Rights Reserved");
    }
    else if(footerType=="privacy"){
      setDecs("We believe in transparency. Please review our Terms of Use to understand our website's policies. Your privacy is important to us, so we've outlined our data handling practices in our Privacy Policy. Learn about our use of cookies and tracking technologies in our Cookie Policy.");
    }
    else if(footerType=="about"){
      setDecs("Join us on this journey of relentless improvement, as we equip athletes and enthusiasts worldwide with the tools they need to reach new heights, set new records, and achieve their dreams.");
    }
    else if(footerType=="blog"){
      setDecs("Step into the world of Nike, where sport meets style, and innovation never stops. Our blog is your source for the latest trends, fitness tips, athlete stories, and all things Nike.");
    }

  },[footerType])

  return (
    <footer className="footer mt-[100px] flex flex-col overflow-x-hidden items-center justify-center">
    <>
        <ul className="menuItems">
            <li className={`menuItem ${footerType=="terms" && classx } `} onClick={()=>setFooterType("terms")}>Terms Of Use</li>
            <li className={`menuItem ${footerType=="privacy" && classx } `} onClick={()=>setFooterType("privacy")}>Privacy-Policy</li>
            <li className={`menuItem ${footerType=="about" && classx } `} onClick={()=>setFooterType("about")}>About</li>
            <li className={`menuItem ${footerType=="blog" && classx } `} onClick={()=>setFooterType("blog")}>community</li>
        </ul>
        <div className="infoText">
            {desc}
        </div>
        <div className="socialIcons">
            <span className="icon">
                <FaFacebookF />
            </span>
            <span className="icon">
                <FaInstagram />
            </span>
            <span className="icon">
                <FaTwitter />
            </span>
            <span className="icon">
                <FaLinkedin />
            </span>
        </div>
        <div className='end mx-auto'>created by @ParthPatel with 💚</div>
    </>
</footer>
  )
}

export default Footer;