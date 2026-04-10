const stars = Array.from({ length: 30 }, (_, i) => {
    const size = 1 + Math.random() * 1.8;
    const delay = Math.random() * 4;
    const duration = 4 + Math.random() * 4;

    return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size,
        delay,
        duration,
    };
});

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Base gradient background */}
            <div
                className="absolute inset-0"
                style={{
                    background: `var(--background)`
                }}
            />

            {/* Floating stars */}
            <div className="absolute inset-0">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="star"
                        style={{
                            left: star.left,
                            top: star.top,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            backgroundColor: 'rgba(255,255,255,0.85)',
                            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite alternate`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default AnimatedBackground;