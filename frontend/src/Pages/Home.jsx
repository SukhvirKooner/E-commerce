import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom';
import leftimg from "../Components/Assets/photo-1.jpg"
import rightimg from "../Components/Assets/3.jpg"
import btmimg from "../Components/Assets/6.png"
import card1 from "../Components/Assets/card1.png"
import card2 from "../Components/Assets/card2.png"
import card3 from "../Components/Assets/card3.png"

function Home() {
    const navigate = useNavigate();
    const loadMore = () => {
        navigate('/shop');
    };

    return (
        <div className='mega'>
        <div className=' welcome-page'>
            <div className="row ">

            <div className='col-lg-3 item-1'>
            <img className='img-fluid photo-1' src={leftimg} alt="photo-1" />
            </div>
            <div className='col-lg-6 item-2'>
            <div className='subtext'>Tech Heaven</div>
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

            <div class="row  text-center">

            <div class="col-lg-4 col-md-6 mb-4 ">
                <div class="card">
                <img class="card-img-top" src={card1} alt="Card image cap"/>
                <div class="card-body d-grid gap-2">
                    
                    <button  class="pricebtn btn btn-outline-light btn-lg subtext" type="button"> <p>Liquid Cooling System  </p> <p>$150.00</p></button>
                </div>
                </div>  
            </div>


            <div class="  col-lg-4 col-md-6 mb-4  ">
                <div class="card">
                <img class="card-img-top" src={card2} alt="Card image cap"/>
                    <div className="card-body  d-grid gap-2">

                    <button  className="pricebtn btn btn-outline-light btn-lg subtext" type="button"><p> SSD-1TB </p> <p>$150.00</p></button>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-4 col-md-12 mb-3 ">
                <div className="card">
                <img className="card-img-top" src={card3} alt="Card image cap"/>
                <div className="card-body d-grid gap-2">
                    
                <button className="pricebtn btn btn-outline-light btn-lg subtext" type="button"> <p> Graphic Card-8GB </p> <p>$150.00</p> </button>
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
            <div className='col-md-4' style={{textAlign:"center"}}><button class="pricebtn btn btn-outline-dark btn-lg text" type="button"> Try Now </button></div>
            </div>
            
            <hr className='servicehr' />
            <div className="row ">
            <div className='col-md-4'><p className='text'> Custom PC Building </p></div>
            <div className='col-md-4'><p className='text'>100$</p></div>
            <div className='col-md-4' style={{textAlign:"center"}}><button class="pricebtn btn btn-outline-dark btn-lg text" type="button"> Buy Now </button></div>
            </div>
            <hr className='servicehr' style={{height:"0.5px"}} />
            <div className="row ">
            <div className='col-md-4'><p className='text'>Gaming Peripherals setup</p></div>
            <div className='col-md-4'><p className='text'>30$</p></div>
            <div className='col-md-4' style={{textAlign:"center"}}><button class="pricebtn btn btn-outline-dark btn-lg text" type="button"> Buy Now </button></div>
            </div>
            <hr className='servicehr' style={{height:"1.5px"}} />

        </section>

            
        
    </div>
    )
}

export default Home
