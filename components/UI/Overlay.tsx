'use client';

import { MemeCoin } from '@/types';

interface OverlayProps {
    coin: MemeCoin;
}

export default function Overlay({ coin }: OverlayProps) {
    return (
        <div className="overlay">
            <div className="overlay-content">
                <h2 className="coin-name">{coin.month}</h2>

                <div className="stats">
                    <div className="stat-section">
                        <span className="stat-label">🔴 Controversial Memecoins:</span>
                        <p className="stat-text">{coin.controversial}</p>
                    </div>

                    <div className="stat-section">
                        <span className="stat-label">🚀 High-Mindshare Memecoins:</span>
                        <p className="stat-text highlight">{coin.highMindshare}</p>
                    </div>

                    <div className="stat-section">
                        <span className="stat-label">✨ Highlights:</span>
                        <p className="stat-text">{coin.highlights}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
