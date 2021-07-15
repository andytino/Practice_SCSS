import React, { Component } from 'react'

export default class NavItem extends Component {
    render() {

        const {link, label} = this.props

        return (
            <li className = "">
                <a href ={link}>{label}</a>
            </li>
        )
    }
}