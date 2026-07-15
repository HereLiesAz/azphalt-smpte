
export function register(runtime) {
    runtime.registerGenerator('smpte', (canvas, params) => {
        const ctx = canvas.getContext('2d');
        const colors = ['#BFBFBF', '#BFC000', '#00C0C0', '#00C000', '#C000C0', '#C00000', '#0000C0']; const w = canvas.width / colors.length; colors.forEach((c, i) => { ctx.fillStyle = c; ctx.fillRect(i * w, 0, w, canvas.height * 0.75); });
    });
}
