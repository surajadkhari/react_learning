import React, { Component } from 'react';
class Nav extends Component{
    render(){
        return(
            <ul style={{
                listStyleType:'none',marginTop:0,padding:5,backgroundColor:'Red',position:'-moz-initial',position:'sticky',textAlign:'center'
            }}> This is
            <li style={{fontFamily:'poppins'}}>Reactjs</li>
            <li style={{fontFamily:'poppins'}}>Vue</li>
            <li style={{fontFamily:'poppins'}}>Bootstrap</li>

          </ul>
        );
    }
}

export default Nav;