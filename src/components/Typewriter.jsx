import useTypewriter from "@/hooks/useTypewriter";

export default function Typewriter({ texts, speed = 100, pause = 1500 }) {
    const displayText = useTypewriter(texts, speed, pause);
    return (
        <p className="text-2xl text-white opacity-0 animate-fade-in text-glow">
            {displayText}
            <span className="animate-blink">|</span>
        </p>
    );
};

