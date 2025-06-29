export const drawFullWidth = (ctx, img, dy = 0, width, height) => {
    ctx.drawImage(img, 0, dy, width, height);
};