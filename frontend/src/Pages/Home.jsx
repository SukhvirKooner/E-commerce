import React from 'react'
import "./CSS/Home.css"
import { useNavigate } from 'react-router-dom';
import leftimg from "../Components/Assets/photo-1.jpg"
import rightimg from "../Components/Assets/3.jpg"
import btmimg from "../Components/Assets/6.png"
import card1 from "../Components/Assets/card1.png"
import card2 from "../Components/Assets/card2.png"
import card3 from "../Components/Assets/card3.png"
import item4 from "../Components/Assets/item4.png"

function Home() {
    const navigate = useNavigate();
    const loadMore = () => {
        navigate('/shop');
        window.scrollTo(0,0);
    };
    const product1 = () => {
        navigate('/product/9');
        window.scrollTo(0,0);
    };
    const product2 = () => {
        navigate('/product/10');
        window.scrollTo(0,0);
    };
    const product3 = () => {
        navigate('/product/11');
        window.scrollTo(0,0);
    };
    const product4 = () => {
        navigate('/product/12');
        window.scrollTo(0,0);
    };
    const custom = () => {
        navigate('/custom');
        window.scrollTo(0,0);
    };


    return (
        <div className='mega'>
        <div className=' welcome-page'>
            <div className="row ">

            <div className='col-lg-3 item-1'>
            <img className='img-fluid photo-1' src={leftimg} alt="photo-1" />
            </div>
            <div className='col-lg-6 item-2'>
            <div className='subtext' style={{textAlign:"center"}}>Tech Heaven</div>
            <div className='titletext'>EMPOWERING </div>
            <div className='titletext'> GAMERS</div>
            
            </div>
            <div className='col-lg-3 item-3'>
            <img className='img-fluid photo-2' src={rightimg} alt="photo-2" />
            </div>

            <div className='col-lg-12 item-4'>
            <img className='img-fluid photo-3' src={btmimg} alt="photo-3" />
            </div>

            </div>
            <div className='titletext'>TOP PICKS</div>
            
            <section id="pricing">

            <div className="row  text-center">

            <div className="col-lg-4 col-md-6 mb-4 ">
                <div className="card">
                <img className="card-img-top" src={card1} alt="Card image cap"/>
                <div className="card-body d-grid gap-2">
                    
                    <button onClick={product1}  className="pricebtn btn btn-outline-light btn-lg subtext" type="button"> <p>Liquid Cooler  </p> <p>$150.00</p></button>
                </div>
                </div>  
            </div>


            <div className="  col-lg-4 col-md-6 mb-4  ">
                <div className="card">
                <img className="card-img-top" src={card2} alt="Card image cap"/>
                    <div className="card-body  d-grid gap-2">

                    <button onClick={product2}  className="pricebtn btn btn-outline-light btn-lg subtext" type="button"><p> SSD-1TB </p> <p>$150.00</p></button>
                    </div>
                </div>
            </div>
            
            
            <div class="col-lg-4 col-md-6 mb-3 ">
                <div className="card">
                <img className="card-img-top" src={card3} alt="Card image cap"/>
                <div className="card-body d-grid gap-2">
                    
                <button onClick={product3} className="pricebtn btn btn-outline-light btn-lg subtext" type="button"> <p> Graphic Card-8GB </p> <p>$150.00</p> </button>
                </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-3 hid ">
                <div className="card">
                <img className="card-img-top" src={item4} alt="Card image cap"/>
                <div className="card-body d-grid gap-2">
                    
                <button onClick={product4} className="pricebtn btn btn-outline-light btn-lg subtext" type="button"> <p> Gaming Headset </p> <p>$100.00</p> </button>
                </div>
                </div>
            </div>
            <div className='col-lg-12'><button onClick={loadMore}  className="pricebtn btn btn-outline-light btn-lg subtext" type="button">Load More!</button></div>
            </div>



         </section>
        </div>
        <section id='Services'>

        <div className='servicestext'>SERVICES</div>
            <hr className='servicehr' />
            <div className="row ">
            <div className='col-md-4'><p className='text'> AI PC Consultaion</p></div>
            <div className='col-md-4'><p className='text'>Free!</p></div>
            <div className='col-md-4' style={{textAlign:"center"}}><button onClick={custom} className="pricebtn btn btn-outline-dark btn-lg text" type="button"> Try Now </button></div>
            </div>
            
            <hr className='servicehr' />
            <div className="row ">
            <div className='col-md-4'><p className='text'> Custom PC Building </p></div>
            <div className='col-md-4'><p className='text'>100$</p></div>
            <div className='col-md-4' style={{textAlign:"center"}}><button className="pricebtn btn btn-outline-dark btn-lg text" type="button"> Buy Now </button></div>
            </div>
            <hr className='servicehr' style={{height:"0.5px"}} />
            <div className="row ">
            <div className='col-md-4'><p className='text'>Gaming Peripheral's</p></div>
            <div className='col-md-4'><p className='text'>100$</p></div>
            <div className='col-md-4' style={{textAlign:"center"}}><button onClick={loadMore} className="pricebtn btn btn-outline-dark btn-lg text" type="button"> Buy Now </button></div>
            </div>
            <hr className='servicehr' style={{height:"1.5px"}} />

        </section>

            
        
    </div>
    )
}

export default Home
