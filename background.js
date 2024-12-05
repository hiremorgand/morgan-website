const asciiArt = '@'.repeat(100); // Create a pattern of @ symbols

export function initBackground() {
  const background = document.getElementById('ascii-background');
  const container = document.createElement('div');
  container.className = 'ascii-container';
  
  // Create multiple layers of ASCII art for a more interesting effect
  for (let i = 0; i < 3; i++) {
    const layer = document.createElement('div');
    layer.className = 'ascii-layer';
    layer.textContent = asciiArt.repeat(100);
    // Add slight rotation variations for each layer
    layer.style.transform = `scale(${1 + i * 0.05}) rotate(${i * 2}deg)`;
    container.appendChild(layer);
    
    // Add subtle animation
    setInterval(() => {
      const rotation = Math.sin(Date.now() / 1000) * 2;
      layer.style.transform = `scale(${1 + i * 0.05}) rotate(${i * 2 + rotation}deg)`;
    }, 100);
  }
  
  background.appendChild(container);
}