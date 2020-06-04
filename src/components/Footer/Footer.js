import React from "react";

function Footer() {
  return (
    <footer className="address">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ul>
              <span className="text-bold">About</span>
              <li>Diversity & Belonging</li>
              <li>Trust & Safety</li>
              <li>Airbnb Citizen</li>
              <li>Newsroom</li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <span className="text-bold">Community</span>
              <li>Airbnb Magazine</li>
              <li>Airbnb Associates</li>
              <li>Airbnb for Work</li>
              <li>Invite friends</li>
              <li>Gift cards</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <span className="text-bold">Host</span>
              <li>Host your home</li>
              <li>Host an experience</li>
              <li>Responsible hosting</li>
              <li>Open Homes</li>
              <li>Olympics</li>
              <li>Resource Center</li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <span className="text-bold">Support</span>
              <li>Help Center</li>
              <li>Neighborhood Support</li>
              <li></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="pb-4">© 2020 Airbnb, Inc. All rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
