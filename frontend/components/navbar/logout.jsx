import React, { Component } from 'react'


const Logout = ({user, logout}) => (
    <div>
        <div className="logout-button" onClick={logout}>
            <span className="account-name">{user.fname} {user.lname}</span>
        </div>
    </div>
)

export default Logout