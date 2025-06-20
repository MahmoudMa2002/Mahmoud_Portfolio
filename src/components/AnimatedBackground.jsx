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

            {/* Floating particles */}
            <div className="absolute inset-0">
                {[...Array(60)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full opacity-20 animate-pulse"
                        style={{
                            backgroundColor: 'var(--primary)',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default AnimatedBackground;
