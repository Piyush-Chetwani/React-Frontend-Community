import React from 'react';
import {components} from 'react';
import './letcon.css'


class Letcon extends React.Component {
    render() {
        return (
            <div className="container">
  <div className="block-about">
    <div className="block-about-content">
      <h6>Let's talk <span>Numbers</span></h6>
      <h3 className="block-about-title"><span>Let</span>con 2020</h3>
      <div className="row row-30 row-bordered">
        <div className="col-6 col-md-3 row-bordered-item">
          <div className="wow fadeInUp" data-wow-delay=".4">
            {/*Counter*/}
            <div className="box-counter">
              <div className="box-counter-main">
                <div className="counter">6700</div>
              </div>
              <p className="box-counter-title">Registrations</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3 row-bordered-item">
          <div className="wow fadeInUp" data-wow-delay=".5">
            {/*Counter*/}
            <div className="box-counter">
              <div className="box-counter-main">
                <div className="counter">3000</div>
              </div>
              <p className="box-counter-title">Unique Views</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3 row-bordered-item">
          <div className="wow fadeInUp" data-wow-delay=".6">
            {/*Counter*/}
            <div className="box-counter">
              <div className="box-counter-main">
                <div className="counter">20</div>
              </div>
              <p className="box-counter-title">Renowned Speakers</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3 row-bordered-item">
          <div className="wow fadeInUp" data-wow-delay=".4">
            {/*Counter*/}
            <div className="box-counter">
              <div className="box-counter-main">
                <div className="counter">14</div>
              </div>
              <p className="box-counter-title">Exclusive Sessions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>

        )
    }
}

export default Letcon;
