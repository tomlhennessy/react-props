import React from 'react';
import './BaseStats.css';

function BaseStats(props) {
    return (
        <div className="base-stats">
            <h1>BaseStats</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Hit Points</td>
                        <td>{props.stats.hp}</td>
                    </tr>
                    <tr>
                        <td>Attack</td>
                        <td>{props.stats.attack}</td>
                    </tr>
                    <tr>
                        <td>Defense</td>
                        <td>{props.stats.defense}</td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td>{props.stats.speed}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BaseStats;
