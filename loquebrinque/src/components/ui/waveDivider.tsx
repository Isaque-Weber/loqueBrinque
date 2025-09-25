type WaveDividerProps = {
    flip?: boolean
    color?: string
    className?: string
}

const WaveDivider = ({ flip = false, color = "#fff", className = "" }: WaveDividerProps) => {
    return (
        <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}>
            <svg
                className="w-full h-16 md:h-24 lg:h-32"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill={color}
                    d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,170.7C672,181,768,203,864,186.7C960,171,1056,117,1152,90.7C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
            </svg>
        </div>
    )
}

export default WaveDivider
