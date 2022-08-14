import React, { useState, useEffect } from 'react'

const DisplaySessionTime = () => {
  useEffect(() => {
    let interval = setInterval(() => {
      setTimeSpent(Date.now() - startTime)
    }, 1000);

    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line 
  }, [])

  // eslint-disable-next-line 
  const [startTime, setStartTime] = useState(Date.now())
  const [timeSpent, setTimeSpent] = useState()

  const stringPadding = (string, pad, length) => {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  }

  let displayTime = stringPadding(Math.floor((timeSpent / 1000) / 60), '0', 2) + ':' + stringPadding((Math.floor(timeSpent / 1000)) % 60, '0', 2);

  return timeSpent > 1000 ? (
    <div id='session'>Session: {displayTime}</div>
  ) : null
}

export default DisplaySessionTime