const stuff = document.querySelector('stuff');

getMetadata().forEach((metadata) => {
    const e = document.createElement('div');
    e.classList.add('shape');

    e.innerHTML = `
    <canvas width="100" height="100"></canvas>
    <div class="metadata">
        <h2>${metadata.name}</h2>
        <p>by ${metadata.credit}</p>
    </div>
    `;
    stuff.appendChild(e);
    stuff.appendChild(document.createElement("hr"))

    const canvas = e.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    const pixelSize = canvas.width / metadata.shape.length;

    for (let i = 0; i < metadata.shape.length; i++) {
        for (let j = 0; j < metadata.shape[i].length; j++) {
            if (metadata.shape[i][j] !== 0) {
                ctx.fillStyle = metadata.color;
                ctx.fillRect(j * pixelSize, i * pixelSize, pixelSize + 1, pixelSize + 1);
            }
        }
    }
});

// remove last hr element
stuff.removeChild(stuff.lastChild);