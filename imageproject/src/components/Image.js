import React from "react";
import "./Image.css"


function Image(){
    return(
        <>
      <div className="image-container-row">
          
      <div className="image-container">
       <img src=".\Images\Lymio Casual Shirt.jpg"></img>
        <span className="image-name">Lymio Casual Shirt</span>
        <span className="image-price">$750</span>
        <button className="buynow">BUY NOW</button>
       
       </div>
     <div className="image-container">
        <img src=".\Images\Men's Shirt.jpg"></img>
        <span className="image-name">Men's Shirt</span>
        <span className="image-price">$700</span>
        <button className="buynow">BUY NOW</button>
     </div>
     <div className="image-container">
        <img src=".\Images\LOUIS DEVIN Silicone Strap Analog Wrist Watch for Men.jpg"></img>
        <span className="image-name">LOUIS DEVIN Silicone Watch for Men</span>
        <span className="image-price">$250</span>
        <button className="buynow">BUY NOW</button>
     </div>
     <div className="image-container">
        <img src=".\Images\Campus Mens Terminator (N) Running Shoes.jpg"></img>
        <span className="image-name">Campus Mens Running Shoes</span>
        <span className="image-price">$450</span>
        <button className="buynow">BUY NOW</button>
     </div>
     <div className="image-container">
        <img src=".\Images\Leaf Printed Rayon Shirts for Men.jpg"></img>
        <span className="image-name">Leaf Printed Rayon Shirts for Men</span>
        <span className="image-price">$400</span>
        <button className="buynow">BUY NOW</button>
     </div>

      </div>
        </>
    )
}

export default Image;