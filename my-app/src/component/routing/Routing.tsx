//import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Useref from "../hooks/Useref/useref";
import Main from "../hooks/Useref/main";
import { ChildContext } from "../hooks/context/ChildContext";
import { ParentContextProvider } from "../hooks/context/ParentContext";

function Routing() {
    return (
        <div >

            <Router>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link  to="/forwardref" className="nav-item nav-link " ><span>forwardref</span></Link>
                            <Link to="/useref" className="nav-item nav-link" >useref</Link>
                            <Link to="/context" className="nav-item nav-link" >Context</Link>

                        </div>
                    </div>
                </nav>
                <div>

                    <Routes>
                        <Route path="/useref" element={<Useref />} />
                        <Route path="/forwardref" element={<Main />} />
                        <Route path="/context" element={<ParentContextProvider>
                            <ChildContext />
                        </ParentContextProvider>} />
                    </Routes>
                </div>
            </Router>

        </div>
    );
}
export default Routing;
