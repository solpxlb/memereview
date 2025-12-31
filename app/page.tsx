'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function Home() {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Attempt to autoplay when component mounts
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.log('Autoplay prevented:', error);
            });
        }
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <main className="landing-page">
            {/* Background Video */}
            <div className="video-background">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="bg-video"
                    poster="/memereview_pfp.png"
                    preload="auto"
                >
                    <source src="/memereview.mp4" type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
            </div>

            {/* Unmute Button */}
            <button
                onClick={toggleMute}
                className="unmute-button"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
                {isMuted ? '🔇' : '🔊'}
            </button>

            {/* Hero Content */}
            <div className="hero-content">
                <div className="hero-container">
                    <h1 className="hero-title">
                        MEME
                        <br />
                        REVIEW
                    </h1>
                    <p className="hero-subtitle">
                        A Year of Chaos, Controversy & Crypto Degeneracy
                    </p>

                    <Link href="/museum" className="museum-button">
                        Enter the Museum
                        <span className="button-arrow">→</span>
                    </Link>

                    {/* CA Address Section */}
                    <div className="ca-section">
                        <span className="ca-label">Contract Address:</span>
                        <div className="ca-box">
                            <span className="ca-text">Coming Soon</span>
                            {/* Uncomment when CA is ready:
              <button 
                className="copy-button"
                onClick={() => {
                  navigator.clipboard.writeText('YOUR_CA_HERE');
                  alert('CA copied to clipboard!');
                }}
              >
                📋
              </button>
              */}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="social-links">
                        <a
                            href="https://x.com/memereviewworld"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                            @memereviewworld
                        </a>
                    </div>

                    <div className="hero-features">
                        <div className="feature">
                            <span className="feature-icon">📅</span>
                            <span className="feature-text">12 Months</span>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">💰</span>
                            <span className="feature-text">Biggest Memes</span>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">🎨</span>
                            <span className="feature-text">3D Gallery</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
