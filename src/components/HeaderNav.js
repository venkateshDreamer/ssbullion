import React, { useContext,useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import {logo} from 'components/images'
import {routes} from 'routes/_nav';
import context from 'store/context';
import axios from 'axios';

function Header() {
    const [menu, setMenu] = useState(false);
    const [values, setValues] = useState(false);
    const { state, dispatch } = useContext(context);

    async function menuBtn(){
        dispatch({ type: "MENU_TOGGLE",payload:!menu});
        setMenu(!menu)
    }
    useEffect (() =>{
        axios.get("/ss/marketDetails", { market: !values === true ? 1 : 0 })
        .then(res => {
           let data =  parseInt(res.data.result[0].market) === 1 ? true : true
           setValues(data)
            console.log(data)
        })
    },[])

    async function marketMode(event) {
        setValues(!values);
        axios.post("/ss/marketNewDetails", { market: !values === true ? 1 : 0 })
        .then(res => {
            console.log(res)
        })
    }
    return (
        <nav className="shadow-sm navbar navbar-light bg-light">
            <div className="container-fluid">
                <div className="col-md">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} width="100px" alt='' height="auto"/>
                    </Link>
                </div>
                <div className="col-md-3">
                    <p style={{ display: 'inline-block', fontSize: 18 }}>Market</p>
                    <label className="switch"><input type="checkbox" name = "market" value={values} onChange={marketMode}  />
                        <div className="slider round">
                        { values ? <span className="on">ON</span>
                         : <span className="off">OFF</span>}
                        </div>
                    </label>
                </div>
                <button className= {state.isMenu ? "navbar-toggler  " : "navbar-toggler collapsed"} type="button"  onClick={()=> menuBtn()} data-toggle="collapse" data-target="#navbar-menu" aria-expanded={state.isMenu ? "true" : "false"}>
                    <span className="navbar-toggler-icon" />
                </button>
                <div className= {state.isMenu ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbar-menu">
                    <ul className="nav navbar-nav">
                    {
                             routes
                             .map((route,key) => {
                                    return (
                                        <li key ={key} className="nav-item">
                                            <Link to={route.path} className="nav-link">
                                                 <span>{route.name}</span>
                                            </Link>
                                        </li>
                                    )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
