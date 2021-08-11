
import './App.css';
import messi from './messi.jpg'
import Profile from './profile/Profile';
import PropTypes from "prop-types";

import ReactHeader from"react"
import Component from "react";

function App() {

  ReactHeader.defaultProps = {
     fullname:"hibi",
    bio: "gmc instructor",
    profession: "gmc instructor",

  };

  Component.propTypes = {
    anyProp: PropTypes.any,
    booleanProp: PropTypes.bool,
    numberProp: PropTypes.number,
    stringProp: PropTypes.string,
    functionProp: PropTypes.func
  };


 const stuleobject = {color: "red"};
const handleclick=()=> alert('welcome messi');
  return (
    <div className="App" style={stuleobject}>

    <Profile  fullname="messi" bio="FCB player forever " profession="footballer"  handleclick={handleclick}>
        <img src={messi} alt="" />
    </Profile>
    
    </div>
  ); }


export default App;
