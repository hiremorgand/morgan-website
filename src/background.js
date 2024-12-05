import { asciiArt } from './ascii-art.js';

export function initBackground() {
    const background = document.getElementById('ascii-background');
    const container = document.createElement('div');
    container.className = 'ascii-container';
    
    // Create multiple layers of ASCII art for a more interesting effect
    for (let i = 0; i < 3; i++) {
        const layer = document.createElement('div');
        layer.className = 'ascii-layer';
        layer.textContent = asciiArt;
        // Add slight rotation variations for each layer
        layer.style.transform = `scale(${1 + i * 0.05}) rotate(${i * 2}deg)`;
        container.appendChild(layer);
    }
    
    background.appendChild(container);
}