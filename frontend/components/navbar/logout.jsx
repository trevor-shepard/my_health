import React, { Component } from 'react'


const Logout = ({user, logout}) => (
    
    <div className="logout-button" onClick={logout}>
        <div className="account-name">{user.fname} {user.lname}</div>
        <div>logout</div>
    </div>
    
)

export default Logout