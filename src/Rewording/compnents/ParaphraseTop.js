import React from 'react';
import Trash from '../img/trash.svg';
import { options } from './constants/content';

const ParaphraseTop = ({ handleRemove }) => {
     
    return (
        <div className="header-bottom">
            <div className="left-side">
                <label htmlFor="dropdown">Density of paraphrasing:</label>
                <select id="dropdown" name="dropdown">
                    {options.map((item) => {
                        return <option key={item.id} value={item.value}>{item.name}</option>
                    })}
                </select>
            </div>
            <div className="right-side">
                <button className="trash" onClick={handleRemove}>
                    <img src={Trash} alt="remove btn" />
                </button>
            </div>
        </div>
    )
}


export default ParaphraseTop;