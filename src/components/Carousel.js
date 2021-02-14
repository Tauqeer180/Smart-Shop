import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import $ from 'jquery';
import '../assets2/css/bootstrap.min.css';
import '../assets2/css/main.css';
import img1 from '../assets2/images/banners/topbanner1.jpg';
import img2 from '../assets2/images/banners/topbanner2.jpg';
import img3 from '../assets2/images/banners/topbanner5.jpg';
import img4 from '../assets/images/a4.png';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
class MyCarousel extends Component {
  constructor(props){
    super(props )
  }
  componentDidMount=()=> {
    
    // Jquery here $(...)...
    // $(window).load(function() {
      //   $('.flexslider').flexslider({
        //   animation: "slide",
        //   controlNav: "thumbnails"
        //   });
        // //   addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
        // 	// function hideURLbar(){ window.scrollTo(0,1);}
        // });
      }
      render(){
        // console.log( this.props.thumbs);
        return (
    <div className="App" style={{marginTop:94}}>
      <Carousel style={{width:100}} ToggleAutoplay={true} showThumbs= {this.props.thumbs} >
                <div>
                    <img src={img3} className="img-fluid" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 2</p>
                </div>
                               
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img3} className="img-fluid" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img3} className="img-fluid" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img3} className="img-fluid" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img3} className="img-fluid" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 2</p>
                </div>
                               
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img3} className="img-fluid" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img3} className="img-fluid" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img3} className="img-fluid" />
                    <p className="legend">Legend 1</p>
                </div>
               
            </Carousel>
    </div>
  );
}
}

export default MyCarousel;
