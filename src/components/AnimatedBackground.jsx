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

            {/* Floating particles*/}
            <div className="absolute inset-0">
                {[...Array(60)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-0.5 h-0.5 rounded-full opacity-20"
                        style={{
                            backgroundColor: 'white',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `pulse ${2 + Math.random() * 2}s ease-in-out ${Math.random() * 3}s infinite`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default AnimatedBackground;