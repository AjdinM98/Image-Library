import { useState,useEffect } from "react";
import boba from './boba.jpeg'
import {getImg} from "./apiCall.js";

const Content = () => {
  const [imageData ,setimageData]=useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm,setSerchTerm]=useState('');
  const [iconClick,seticonClick]=useState(-1);
  const [isActive,setActive]=useState(false);

  const viewClick=()=>{
    setActive(!isActive)
  }

  let eyeClick=(itemName)=>{
    seticonClick(itemName);
    imageData.splice(itemName,1);
  }

  const getData=async()=>{
    try {
      setLoading(true);
      const imgData= await getImg();
      setimageData(imgData.data.results);
      setLoading(false);
    } catch (error) {
    console.log(error.message);
    setLoading(false);
    }
  }

  useEffect(()=>{
     getData()
  },[]);
    return (
      <section className="library">
        <div className="filter">
            <div className="filter-input">
                <ion-icon name="search-outline"></ion-icon>
                <input  type="text" placeholder="Type to filter" onChange={e=>{setSerchTerm(e.target.value)}}/>
            </div>
            <div className="filter-icons">
                <ion-icon name="grid-outline" class={isActive?'md hydrated':'md hydrated active'} onClick={viewClick} ></ion-icon>
                <ion-icon class={isActive?'md hydrated active':'md hydrated'} name="list-outline" onClick={viewClick}></ion-icon>
            </div>
        </div>
        {loading ? (
                <div>loading...</div>
        ) : (
          <>
            {imageData!==null? (
                        
        <div className={isActive ? 'library-container-list-view': 'library-container'}>
          
          {imageData.filter(val=>{
            if(searchTerm==='')
            return val;
            else if (val.name.first.toLowerCase().includes(searchTerm.toLowerCase()))
            return val
          }).map((image,key)=>(
            <div className={isActive ? 'library-item-list-view': 'library-item grid-view'}>
              {console.log()}
              <img src={boba} alt=""/>
              <p className="library-item-title">{image.name.first}</p>
                <div className="item-details">
                  <div>
                  <ion-icon name="image-outline"></ion-icon>
                  <p>Image</p>
                  </div>
                  <div>
                  <p>192.65 kb</p>
                  <p>21.11.2011</p>  
                  </div>
                  <a className="eye-icon"><ion-icon name="eye-outline" onClick={()=>eyeClick(imageData.indexOf(image))}></ion-icon></a>
                </div>
            </div>
          ))}
        </div>  ) : null}
                   </>
                 ) }  
        </section>
      );
}
 
export default Content;