export function Controls(): JSX.Element {
    return (
        <>
            <div className="row">
                <h1>Controls</h1>
            </div>

            <div className="row">
                <kbd>↑</kbd>
                <div className="spacer"></div>
                <kbd>W</kbd>
            </div>

            <p>↻ Rotate</p>

            <div className="row">
                <kbd>←</kbd>
                <kbd>→</kbd>
                <div className="spacer"></div>
                <kbd>A</kbd>
                <kbd>D</kbd>
            </div>

            <p>← Left/Right →</p>

            <div className="row">
                <kbd>↓</kbd>
                <div className="spacer"></div>
                <kbd>S</kbd>
            </div>

            <p>↓ Drop down ↓</p>

            <kbd className="space">Space</kbd>

            <p>&dArr; Hard drop &dArr;</p>

            <kbd>Esc</kbd>

            <p>Close popup &times;</p>
        </>
    )
}