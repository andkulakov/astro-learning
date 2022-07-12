import React, { useEffect, useState } from 'react';

export type Props = {
    country: string;
    city: string;
}

export function WorldClock({ country, city }: Props) {
    const [datetime, setDatetime] = useState('loading...')

    const url = `http://worldtimeapi.org/api/timezone/${country}/${city}`
    
    const fetchData = async () => {
        const response = await (await fetch(url)).json()
        const date = new Date(response.unixtime * 1000)
        setDatetime(date.toLocaleString())
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <p>Current time in {country}/{city}: {datetime}</p>
            <button onClick={fetchData}>Refresh</button>
        </>
    )
}
