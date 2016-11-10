import React from 'react'
import './Board.css'

var Header = React.createClass({
            
            render() {
              return (  <header>
                          <nav className="navbar navbar-default" role="navigation">
                            <div className="container">
                              <div className="navbar-header">
                                <a className="navbar-brand" href="#">Colo Local</a>
                              </div>{/* navbar-header */}
                            </div>{/* container */}
                          </nav>
                        </header>
                )

            }
        })

export default Header