import IMAGE1 from '../../assets/image.jpeg'
import IMAGE7 from '../../assets/image7.jpeg'
import IMAGE8 from '../../assets/image8.jpeg'
import IMAGE9 from '../../assets/image9.jpeg'
import IMAGE10 from '../../assets/image10.jpeg'
import IMAGE11 from '../../assets/image11.jpeg'
import "./fasho.css"
const FashionNews = () => {
  return (
    <section id='fashNews'>
        <h2><span></span>FashionNews</h2>
        
        <div className="container">
            
            <div className="fashioNews">
                <div className="fashCard">
                    <img src={IMAGE1} alt="image2" />
                    <div className="overFlow"></div>
                        <div className="overFashion">
                            <div className="fashBrand"> <h4>Fashion</h4> </div>
                                <h4>Don't Let Yesterday Take Up Too Much of Today</h4>
                                <small>march 6, 2020</small>
                        </div>
                </div>
                <div className="fashCard">
                    <img src={IMAGE7} alt="image2" />
                    <div className="overFlow"></div>
                        <div className="overFashion">
                            <div className="fashBrand"> <h4>Fashion</h4> </div>
                                <h4>Begin Now To Be What You Will Be Here after</h4>
                                <small>march 6, 2020</small>
                        </div>
                </div>
                <div className="fashCard">
                    <img src={IMAGE8} alt="image2" />
                    <div className="overFlow"></div>
                        <div className="overFashion">
                            <div className="fashBrand"> <h4>Fashion</h4> </div>
                                <h4>Shoot for the Moon and if You Miss you will Still Be Among The Stars</h4>
                                <small>march 6, 2020</small>
                        </div>
                </div>
                <div className="fashCard">
                    <img src={IMAGE9} alt="image2" />
                    <div className="overFlow"></div>
                        <div className="overFashion">
                            <div className="fashBrand"> <h4>Health</h4> </div>
                                <h4>You Have as Much Loughter As You Have Faith</h4>
                                <small>march 6, 2020</small>
                        </div>
                </div>
                <div className="fashCard">
                    <img src={IMAGE10} alt="image2" />
                    <div className="overFlow"></div>
                        <div className="overFashion">
                            <div className="fashBrand"> <h4>Fashion</h4> </div>
                                <h4>Nothing is More Powerful Than an idea Whose Time Has Come </h4>
                                <small>march 6, 2020</small>
                        </div>
                </div>
                <div className="fashCard">
                    <img src={IMAGE11} alt="image2" />
                    <div className="overFlow"></div>
                        <div className="overFashion">
                            <div className="fashBrand"> <h4>Fashion</h4> </div>
                                <h4>A Harmful Truth is better Than a Useful Lie</h4>
                                <small>march 6, 2020</small>
                        </div>
                </div>


            </div>


        </div>
    </section>
  )
}

export default FashionNews