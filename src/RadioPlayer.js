const RadioPlayer = () => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [volume, setVolume] = React.useState(0.1);
    const audioRef = React.useRef(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    React.useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, []);

    return (
        <div className="min-h-screen bg-image bg-zinc-900 bg-opacity-75 flex flex-col items-center justify-center p-4 space-y-8">
            {/* Logo and Title Section */}
            <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-4">
                    <img src="./img/rccb.png" alt="RCCB Logo" style={{ height: '300px', width: 'auto' }} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Rádio Clube <span className="text-orange-400">Castelo Branco</span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold">
                    <span className="text-emerald-400">Só Músicas</span>{" "}
                    <span className="text-white">Brutais!</span>
                </h2>
                <p className="text-gray-300">
                    Se há uma Rádio livre de publicidade e com boa música é aqui #RCCB!
                </p>
            </div>

            {/* Player Section */}
            <div className="w-full max-w-2xl bg-zinc-800 bg-opacity-75 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        <span className="text-gray-300">Giródisco</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                            <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
                            <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
                            <circle cx="12" cy="12" r="2"></circle>
                            <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
                            <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
                        </svg>
                        <span className="text-gray-300">Programação automática</span>
                    </div>
                </div>

                <div className="relative w-full h-12 bg-zinc-700 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-8 flex items-center justify-center">
                            <div className="w-full h-1 bg-zinc-600 relative">
                                <div className="absolute inset-0 flex space-x-1">
                                    {[...Array(50)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 bg-emerald-400"
                                            style={{
                                                height: `${Math.random() * 100}%`,
                                                transform: 'scaleY(0.8)',
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <button
                        onClick={togglePlay}
                        className="w-12 h-12 rounded-full bg-orange-400 hover:bg-orange-500 text-white flex items-center justify-center"
                    >
                        {isPlaying ? (
                            <span className="h-4 w-4 bg-white rounded-sm" />
                        ) : (
                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                        )}
                    </button>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                        </svg>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="w-24 h-1 bg-zinc-600 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-400"
                        />
                    </div>
                </div>
            </div>

            <audio
                ref={audioRef}
                src="https://azuracast.rhoster.pt/listen/rccb/;"
                className="hidden"
            />
        </div>
    );
};

ReactDOM.render(<RadioPlayer />, document.getElementById('root'));
