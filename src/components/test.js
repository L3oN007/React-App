import React, { Component } from 'react'
import { ListOfPlayers } from './Share/ListOfPlayers'
export default class test extends Component {
    render() {
        return (
            <div className='container'>
                {ListOfPlayers.map(() => (
                    <div className='column'>
                        <div className='card'>
                            <img src='{}' />
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
