import {Row, Carousel} from "react-bootstrap"
import c1 from "../../Assets/ct1.png"
import c2 from "../../Assets/ct2.png"
function Certificates() {
    return (
        <Row style={{padding: "30px", margin: "40px"}}>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={c1}
                    alt="First certificate"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={c2}
                    alt="second certificate"
                    />
                </Carousel.Item>
            </Carousel>
        </Row>
    )
}

export default Certificates
