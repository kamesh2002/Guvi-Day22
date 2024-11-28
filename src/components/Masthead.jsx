import React from 'react';

const Masthead = () => (
  <header className="masthead text-center text-white">
    <div className="container position-relative">
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <h1 className="mb-5">Generate more leads with a professional landing page!</h1>
          <form className="form-subscribe">
            <div className="row">
              <div className="col">
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="col-auto">
                <button className="btn btn-primary btn-lg" type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </header>
);

export default Masthead;
