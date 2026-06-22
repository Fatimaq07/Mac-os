import React, { useEffect, useState } from 'react'

const DateTime = () => {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(id)
    }, [])

    const format = (d) => {
        const weekday = d.toLocaleDateString(undefined, { weekday: 'short' }).toLowerCase()
        const month = d.toLocaleDateString(undefined, { month: 'short' }).toLowerCase()
        const day = d.getDate()
        let hours = d.getHours()
        const minutes = String(d.getMinutes()).padStart(2, '0')
        const ampm = hours >= 12 ? 'PM' : 'AM'
        hours = hours % 12
        if (hours === 0) hours = 12
        return `${weekday} ${month} ${day} ${hours}:${minutes}${ampm}`
    }

    return <div>{format(now)}</div>
}

export default DateTime