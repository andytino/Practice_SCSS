import React, { Component } from 'react'

import NavItem from '../Data/Navigation/index'
import dataList from '../Data/Navigation/dataNav'

export default class Header extends Component {
    render(){
        return (
            <div>
                <ul>
                    {
                        dataList.map((item,idx) => {
                            return (
                                <NavItem
                                    key = {idx}
                                    link = {item.link}
                                    label = {item.label}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        )
    
    }
}