import React from 'react';
import './Table.css';
import numeral from 'numeral';

function Table({ countries }) {
    return (
        <div className="table">
            {countries.map(({ country, cases }) => (
                <tr>
                    <dt>{country}</dt>
                    <dt>
                        <strong>{numeral(cases).format("0,0")}</strong>
                    </dt>
                </tr>
            ))}
        </div>
    )
}

export default Table
