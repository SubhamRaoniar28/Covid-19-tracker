import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './InfoBox.css'

function InfoBox({ title, cases, active, isRed, total, ...props }) {
    console.log("isRed: " + isRed);
    return (
        <Card onClick={props.onClick} className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'}`}>
            <CardContent>

                <Typography className="infoBox__title" colrs="textSecondary">
                    {title}
                </Typography>

                <h2 className={`infoBox__cases ${!isRed && 'infoBox--green'}`}>{cases}</h2>

                <Typography className="infoBox__total" colrs="textSecondary">
                    {total} Total
                </Typography>

            </CardContent>
        </Card>
    )
}

export default InfoBox
