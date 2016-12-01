var renderer = PIXI.autoDetectRenderer();
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();
renderer.render(stage);