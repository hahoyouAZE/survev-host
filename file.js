(function() {
    'use strict';

    // 1. NEON CROSSHAIR OVERLAY
    const style = document.createElement('style');
    style.textContent = `
        .custom-crosshair {
            position: fixed; top: 50%; left: 50%; width: 10px; height: 10px;
            transform: translate(-50%, -50%); pointer-events: none; z-index: 999999;
        }
        .custom-crosshair::before, .custom-crosshair::after {
            content: ''; position: absolute; background: #00ffcc; box-shadow: 0 0 4px #00ffcc;
        }
        .custom-crosshair::before { top: 4px; left: -10px; width: 30px; height: 2px; }
        .custom-crosshair::after { left: 4px; top: -10px; width: 2px; height: 30px; }
    `;
    document.head.appendChild(style);

    const crosshair = document.createElement('div');
    crosshair.className = 'custom-crosshair';
    document.documentElement.appendChild(crosshair);

    // 2. AUTO-LOOT ENGINE (Spams the F key automatically)
    setInterval(() => {
        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'f', keyCode: 70, bubbles: true }));
        window.dispatchEvent(new KeyboardEvent('keyup', { key: 'f', keyCode: 70, bubbles: true }));
    }, 30);
})();
