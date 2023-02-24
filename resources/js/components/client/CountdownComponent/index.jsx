import React from 'react';
import { useEffect, useState } from 'react';
import './style.scss';

function CountdownComponent({ expireDiscountDays }) {
    let expireDate = new Date().setDate(new Date().getDate() + expireDiscountDays);
    const countDownDate = new Date(new Date(expireDate).toISOString().slice(0, 10)).getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );

    const getFormatReturnValues = (countDownTime) => {
        const days = Math.floor(countDownTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (countDownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((countDownTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((countDownTime % (1000 * 60)) / 1000);
        return {
            days: days.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            }),
            hours: hours.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            }),
            minutes: minutes.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            }),
            seconds: seconds.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            })
        };
    };

    useEffect(() => {
        const interval = setInterval(() => {
            let formatReturnValues = getFormatReturnValues(countDownDate - new Date().getTime());
            setCountDown(formatReturnValues);
        }, 1000);

        return () => clearInterval(interval);
    }, [expireDiscountDays]);

    return (
        <span className='countdown-component'>
            {Object.keys(countDown).map((timeElement, index) => {
                return (
                    <span key={'countdown_' + timeElement}>
                        {index !== 0 && <span>:</span>}
                        <span key={'countdown_' + timeElement} className='time-component'>{countDown[timeElement]}</span>
                    </span>
                );
            })}
        </span>
    );
}

export default CountdownComponent;