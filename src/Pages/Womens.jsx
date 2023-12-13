import React from "react";
import './Womens.css';
import product_1 from '../Components/Assets/product_1.png'
import product_3 from '../Components/Assets/product_3.png'
import product_4 from '../Components/Assets/product_4.png'
import product_5 from '../Components/Assets/product_5.png'
import product_9 from '../Components/Assets/product_9.png'
import product_10 from '../Components/Assets/product_10.png'
import product_11 from '../Components/Assets/product_11.png'
import product_12 from '../Components/Assets/product_12.png'
const Womens = () => {
    return (
        <div className="womens">
            <div className="women-one">
                <img src={product_1} alt="" />
                <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
                <p>$85.0 <span>$120.5</span></p>
                <button>Add To Cart</button>
            </div>
            <div className="women-one">
                <img src={product_3} alt="" />
                <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
                <p>$85.0 <span>$120.5</span></p>
                <button>Add To Cart</button>
            </div>
            <div className="women-one">
                <img src={product_4} alt="" />
                <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
                <p>$85.0 <span>$120.5</span></p>
                <button>Add To Cart</button>
            </div>
            <div className="women-one">
                <img src={product_5} alt="" />
                <p>Men Green Solid Zippered Full-Zip Slim Fit Bomber <br />Jacket</p>
                <p>$85.0 <span>$120.5</span></p>
                <button>Add To Cart</button>
            </div>
            <div className="women-one">
                <img src={product_9} alt="" />
                <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
                <p>$85.0 <span>$120.5</span></p>
                <button>Add To Cart</button>
            </div>
            <div className="women-one">
                <img src={product_10} alt="" />
                <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
                <p>$85.0 <span>$120.5</span></p>
                <button>Add To Cart</button>
            </div>
            <div className="women-one">
                <img src={product_11} alt="" />
                <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
                <p>$85.0 <span>$120.5</span></p>
                <button>Add To Cart</button>
            </div>
            <div className="women-one">
                <img src={product_12} alt="" />
                <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
                <p>$85.0 <span>$120.5</span></p>
                <button>Add To Cart</button>
            </div>
        </div>
    
    )
}

export default Womens;