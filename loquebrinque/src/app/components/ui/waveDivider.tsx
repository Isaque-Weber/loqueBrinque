import React from "react";

interface WaveDividerProps {
    topColor?: string;      // Cor da section acima
    bottomColor?: string;   // Cor da section abaixo
    flip?: boolean;         // Inverter a onda
    variant?: "smooth" | "wave" | "tilt"; // Tipos de onda
    useGradient?: boolean;  // Ativar gradiente
}

const WaveDivider: React.FC<WaveDividerProps> = ({
                                                     topColor = "#ffffff",
                                                     bottomColor = "#f97316",
                                                     flip = false,
                                                     variant = "smooth",
                                                     useGradient = false,
                                                 }) => {
    const variants = {
        smooth:
            "M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,96C672,75,768,53,864,69.3C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z",
        wave: "M0,160L40,154.7C80,149,160,139,240,117.3C320,96,400,64,480,48C560,32,640,32,720,58.7C800,85,880,139,960,144C1040,149,1120,107,1200,85.3C1280,64,1360,64,1400,64L1440,64L1440,320L0,320Z",
        tilt: "M0 0 L1440 80 L1440 320 L0 320 Z",
    };

    return (
        <div
            className={`w-full overflow-hidden leading-none ${
                flip ? "rotate-180" : ""
            }`}
        >
            <svg
                className="w-full h-24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                {useGradient ? (
                    <>
                        <defs>
                            <linearGradient
                                id="waveGradient"
                                x1="0%"
                                y1="0%"
                                x2="0%"
                                y2="100%"
                            >
                                <stop offset="0%" stopColor={topColor} />
                                <stop offset="100%" stopColor={bottomColor} />
                            </linearGradient>
                        </defs>
                        <path d={variants[variant]} fill="url(#waveGradient)" />
                    </>
                ) : (
                    <>
                        {/* Fundo da section de baixo */}
                        <rect x="0" y="0" width="1440" height="320" fill={topColor} />
                        {/* Onda separando as duas cores */}
                        <path d={variants[variant]} fill={bottomColor} />
                    </>
                )}
            </svg>
        </div>
    );
};

export default WaveDivider;
