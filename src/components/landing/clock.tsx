'use client';
import { useEffect, useState } from 'react';

const Clock = () => {
    const [isReverse, setIsReverse] = useState(false);

    useEffect(() => {
        // Toggle between forward and reverse every 10 seconds
        const toggleInterval = setInterval(() => {
            setIsReverse(prev => !prev);
        }, 10000); // 10 seconds normal, then 10 seconds reverse

        return () => clearInterval(toggleInterval);
    }, []);

    useEffect(() => {
        let animationFrameId: number;
        let startTime: number | null = null;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsedTime = timestamp - startTime;

            // Get the local time
            const date = new Date();
            let seconds = date.getSeconds();
            let minutes = date.getMinutes();
            let hours = date.getHours();

            if (isReverse) {
                // When in reverse mode, add a fast-moving offset
                const fastOffset = (elapsedTime / 10) % (12 * 60 * 60); // Complete cycle every 12 hours
                seconds = (seconds - fastOffset) % 60;
                minutes = (minutes - fastOffset / 60) % 60;
                hours = (hours - fastOffset / 3600) % 12;

                // Ensure we don't get negative values
                if (seconds < 0) seconds += 60;
                if (minutes < 0) minutes += 60;
                if (hours < 0) hours += 12;
            }

            // Calculate angles
            const hands = [
                {
                    hand: 'hours',
                    angle: (hours * 30) + (minutes / 2)
                },
                {
                    hand: 'minutes',
                    angle: (minutes * 6)
                },
                {
                    hand: 'seconds',
                    angle: (seconds * 6)
                }
            ];

            // Update hand positions
            hands.forEach((hand) => {
                const elements = document.querySelectorAll('.' + hand.hand);
                elements.forEach((element) => {
                    const htmlElement = element as HTMLElement;
                    htmlElement.style.transform = `rotateZ(${hand.angle}deg)`;
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [isReverse]);

    return (
        <div className="justify-center items-center ">
            <article className="clock simple">
                <div className="hours-container">
                    <div className="hours"></div>
                </div>
                <div className="minutes-container">
                    <div className="minutes"></div>
                </div>
                <div className="seconds-container">
                    <div className="seconds"></div>
                </div>
            </article>
        </div>
    );
};

export default Clock;