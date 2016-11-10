import React from 'react'
import './Board.css'

var Footer = React.createClass({
            
            render() {
              return ( <footer className="clearfix">
                            <div className="content container-fluid">
                              <div className="row">
                                <div className="col-sm-6">
                                  <p>All contents &copy; 2016</p>
                                </div>{/* col-sm-6 */}
                                <div className="col-sm-6">
                                  <nav className="navbar navbar-default" role="navigation">
                                    <ul className="nav navbar-nav navbar-right">
                                      <li><a href="#">Terms of use</a></li>
                                      <li><a href="#">Privacy policy</a></li>
                                    </ul>
                                  </nav>
                                </div>{/* col-sm-6 */}
                              </div>{/* row */}
                            </div>{/* content container */}
                          </footer>
                )

            }
        })

export default Footer