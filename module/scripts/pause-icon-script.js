import {registerSettings} from "./pause-icon-settings.js"
Hooks.on('setup', () => {
    registerSettings();
});
Hooks.on("renderPause", function (_,html, options) {
    if (!options.paused) return;
    const path = game.settings.get("pathfinder-ui", "allSettings").path;
    const opacity = game.settings.get("pathfinder-ui", "allSettings").opacity / 100;
    let speed = game.settings.get("pathfinder-ui", "allSettings").speed + "s";
    const text = game.settings.get("pathfinder-ui", "allSettings").text;
    const dimensionX = game.settings.get("pathfinder-ui", "allSettings").dimensionX;
    const dimensionY = game.settings.get("pathfinder-ui", "allSettings").dimensionY;
    const top = `${-16 - (dimensionY - 128) / 2}px`;
    const left = `calc(50% - ${dimensionX / 2}px)`;
    const textColor = game.settings.get("pathfinder-ui", "allSettings").textColor;
    const shadow = game.settings.get("pathfinder-ui", "allSettings").shadow;
    const fontSize = game.settings.get("pathfinder-ui", "allSettings").fontSize;
    const size = `${(text.length * fontSize * 90 / 12) + 70}px 100px`;
    if(path === "None" || dimensionX === 0 || dimensionY === 0) {
        html.find("#pause.paused img").hide();
    }
    else {
        html.find("img").attr("src", path);
        if(foundry.utils.isNewerVersion(game.version, "10")){
			html.find("img").addClass("fa-spin")
            html.find("img").css({"top": top, "left": left, "width": dimensionX, "height": dimensionY, "opacity": opacity, "--fa-animation-duration": speed});
        }
        else{
            speed += " linear 0s infinite normal none running rotation";
            html.find("img").css({"top": top, "left": left, "width": dimensionX, "height": dimensionY, "opacity": opacity, "-webkit-animation": speed});
        }
    }
    if(foundry.utils.isNewerVersion(game.version, "10")){
        html.find("figcaption").text(text);
        if (text.length !== 0 && shadow) {
            html.css({"background-size": size});
            html.find("figcaption").css({"color": textColor, "font-size": `${fontSize}em`});
        }
        else if(text.length !== 0 && !shadow) {
            html.find("figcaption").css({"color": textColor, "font-size": `${fontSize}em`});
            html.find("figcaption").css({"color": textColor});
            html.css("background", "none");
        }
        else {
            html.css("background", "none");
        }
    }
    else {
        html.find(".paused h3").text(text);
        if (text.length !== 0 && shadow) {
            html.css({"background-size": size});
            html.find("h3").css({"color": textColor, "font-size": `${fontSize}em`});
        }
        else if(text.length !== 0 && !shadow) {
            html.find("h3").css({"color": textColor, "font-size": `${fontSize}em`});
            html.find("h3").css({"color": textColor});
            html.css("background", "none");
        }
        else {
            html.css("background", "none");
        }
    }
});