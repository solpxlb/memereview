'use client';

export default function Instructions({ isLocked }: { isLocked: boolean }) {
    if (isLocked) return null;

    return (
        <div className="instructions">
            <div className="instructions-content">
                <h1 className="instructions-title">Meme Review</h1>
                <p className="instructions-subtitle">2025 Museum Gallery</p>

                <div className="controls-grid">
                    <div className="control-item">
                        <kbd>W</kbd>
                        <span>Forward</span>
                    </div>
                    <div className="control-item">
                        <kbd>A</kbd>
                        <span>Left</span>
                    </div>
                    <div className="control-item">
                        <kbd>S</kbd>
                        <span>Backward</span>
                    </div>
                    <div className="control-item">
                        <kbd>D</kbd>
                        <span>Right</span>
                    </div>
                </div>

                <div className="instructions-hint">
                    <p>🖱️ Use your mouse to look around</p>
                    <p>🖼️ Approach paintings to see details</p>
                    <p className="click-prompt">Click to start exploring</p>
                </div>

                <a href="/" className="back-button">← Back to Home</a>
            </div>
        </div>
    );
}
