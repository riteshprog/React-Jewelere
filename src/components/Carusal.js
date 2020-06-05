import React, { Component } from 'react'
import { MDBCarousel, Row, Col,  MDBCarouselInner, MDBCarouselItem,  MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBCardText,} from "mdbreact";
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
export default class Carusal extends Component {
  render() {
    return (
      <MDBContainer>
        <Row>
          <Col>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBCard className="text-center carusal-card">
                            <div class="card-image-block text-center">
            <MDBCardImage className="img-fluid img-left" src={image2} waves />
            <MDBCardImage className="img-fluid text-center" src={image1} waves />
            <MDBCardImage className="img-fluid  img-right" src={image3} waves />

            </div>
            <h1>Vintage and Antique</h1>

        <MDBCardBody>
          <h2>Vintage and Antique</h2>
          <span className="border-text"></span>
          <h3>$ 2000</h3>
          <MDBCardText>
            Take 20% off for a limited time<br />
            <span className="code-text">Use Code: LOVE20</span>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBCard className="text-center carusal-card">
              <div class="card-image-block text-center">
            <MDBCardImage className="img-fluid  img-left" src={image1} waves />
            <MDBCardImage className="img-fluid text-center" src={image3} waves />
            <MDBCardImage className="img-fluid  img-right" src={image2} waves />

            </div>
            <h1>Three Stone</h1>
        <MDBCardBody>
          <h2>Three Stone</h2>
          <span className="border-text"></span>
          <h3>$ 2000</h3>
          <MDBCardText>
            Take 20% off for a limited time<br />
            <span className="code-text">Use Code: LOVE20</span>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBCard className="text-center carusal-card">
              <div class="card-image-block text-center">
            <MDBCardImage className="img-fluid  img-left" src={image3} waves />
            <MDBCardImage className="img-fluid text-center" src={image2} waves />
            <MDBCardImage className="img-fluid  img-right" src={image1} waves />

            </div>
            <h1>Side Stones</h1>
        <MDBCardBody>
          <h2>Vintage and Antique</h2>
          <span className="border-text"></span>
          <h3>$ 2000</h3>
          <MDBCardText>
            Take 20% off for a limited time<br />
            <span className="code-text">Use Code: LOVE20</span>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      </Col>
      </Row>
    </MDBContainer>
    )
  }
}
