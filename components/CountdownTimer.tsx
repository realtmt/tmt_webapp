"use client"
import { useEffect, useState } from "react"

const CountdownTimer = () => {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date().getTime()
            const distance = new Date("2023-04-26").getTime() - now
            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            )
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            )
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            setCountdown({ days, hours, minutes, seconds })
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <h1 className="flex flex-wrap justify-center text-light">
            <ul className="flex">
                {Object.keys(countdown).map((u, i) => {
                    let unit = countdown[u as keyof typeof countdown]
                    let isFirst = Object.keys(countdown)[0] === u

                    return (
                        <li
                            key={i}
                            className="flex items-end justify-center relative"
                        >
                            {!isFirst && (
                                <span
                                    className={`text-[48px] xs:text-[78px] md:text-[144px] flex items-center font-bold h-[20px] xs:h-[60px] md:h-[100px] px-1 md:px-2 mb-3 xs:mb-4 md:mb-5`}
                                >
                                    :
                                </span>
                            )}
                            <span className="flex flex-col justify-center items-center space-y-1">
                                <span className="capitalize text-[12px] xs:text-[24px] md:text-[36px] flex justify-center text-light/70">
                                    {u}
                                </span>

                                <span
                                    className={`text-[48px] xs:text-[78px] md:text-[144px] flex items-center font-bold h-[40px] xs:h-[80px] md:h-[120px]`}
                                >
                                    {(unit as number) < 10 ? "0" + unit : unit}
                                </span>
                            </span>
                        </li>
                    )
                })}
            </ul>
        </h1>
    )
}

export default CountdownTimer
