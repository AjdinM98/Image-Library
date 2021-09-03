import { useState } from "react";
const Sidebara = () => {
     const [isActive,setActive]=useState(false);
     let hamburgerClick=()=>{
          setActive(!isActive)
      }
    return ( 

       <section className={isActive?'sidebar height-auto':'sidebar'} onClick={hamburgerClick}>
            <div className="sidebar-btn-container">
            <ion-icon name="chevron-back-outline" id="sidebar-button" class={isActive?'md hydrated':'md hydrated active'} onClick={hamburgerClick}></ion-icon>
            </div>
           <div className={isActive?'hide-sidebar':'sidebar-items'} >
               <div>
                    <ion-icon name="home-outline"></ion-icon>   
                    <p>Home </p>
               </div>
               <div>
                    <ion-icon name="images-outline"></ion-icon>
                    <p>Media Library</p>
               </div>
               <div>
                    <ion-icon name="analytics-outline"></ion-icon>
                    <p>Web Analytics</p>
               </div>
               <div>
                    <ion-icon name="settings-outline"></ion-icon>
                    <p>Settings</p>
               </div>

           </div>
       </section>
     );
}
 
export default Sidebara;