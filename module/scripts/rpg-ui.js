Hooks.on('init', () => {
	// Register module settings.
	game.settings.register('pathfinder-ui', 'navigationVerticalToggle', {
		name: game.i18n.localize('RPGUI.SETTINGS.NAVIGATION'),
		hint: game.i18n.localize('RPGUI.SETTINGS.NAVIGATION_HINT'),
		scope: "world",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload();
		}
	});
	game.settings.register('pathfinder-ui', 'compactModeToggle', {
		name: game.i18n.localize('RPGUI.SETTINGS.COMPACT_MODE'),
		hint: game.i18n.localize('RPGUI.SETTINGS.COMPACT_MODE_HINT'),
		scope: "world",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload();
		}
	});
	game.settings.register('pathfinder-ui', 'standardLogoToggle', {
		name: game.i18n.localize('RPGUI.SETTINGS.STANDARD_LOGO'),
		hint: game.i18n.localize('RPGUI.SETTINGS.STANDARD_LOGO_HINT'),
		scope: "world",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload();
		}
	});
	game.settings.register('pathfinder-ui', 'disableAllStyles', {
		name: game.i18n.localize('RPGUI.SETTINGS.DISABLE_STYLES'),
		hint: game.i18n.localize('RPGUI.SETTINGS.DISABLE_STYLES_HINT'),
		scope: "client",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload();
		}
	});

	if (!game.settings.get('pathfinder-ui', 'compactModeToggle')) {
		if (!game.settings.get('pathfinder-ui', 'standardLogoToggle')) {
			addClassByQuerySelector("hide", "img#logo")

			let newLogo = document.createElement('div');
			newLogo.classList.add("new-logo")
			newLogo.innerText = "Pathfinder \n2e"
			document.body.appendChild(newLogo);
		}
	}

	if (!game.settings.get('pathfinder-ui', 'disableAllStyles')) { rpgUIAddMainCss() }
});

Hooks.on('getSceneNavigationContext', () => {
	if (!game.settings.get('pathfinder-ui', 'navigationVerticalToggle')) {
		navigation = document.querySelector("nav.app > ol#scene-list");
		if (navigation) {
			navigation.classList.add("vertical")
		}
	}
	if (game.settings.get('pathfinder-ui', 'compactModeToggle')) {
		addClassByQuerySelector("compact-mode", "body")
	}
});

Hooks.on('renderCombatCarousel', () => {
	let carouselSize = game.settings.get('combat-carousel', 'carouselSize')
	if (carouselSize !== "") {
		addClassByQuerySelector(carouselSize, "#combat-carousel")
	}
});

function addClassByQuerySelector(className, selector) {
	let navigation = document.querySelector(selector);
	navigation.classList.add(className)
}

function rpgUIAddMainCss() {
	const head = document.getElementsByTagName("head")[0];
	const mainCss = document.createElement("link");
	mainCss.setAttribute("rel", "stylesheet")
	mainCss.setAttribute("type", "text/css")
	mainCss.setAttribute("href", "modules/pathfinder-ui/css/pathfinderui.css")
	mainCss.setAttribute("media", "all")
	head.insertBefore(mainCss, head.lastChild);
}

Hooks.on('renderSidebarTab', async (object, html) => {
	if (object instanceof Settings) {
	  const details = html.find('#game-details')
	  const list = document.createElement('ul')
	  list.innerHTML = await renderTemplate('modules/pathfinder-ui/templates/settings-info.hbs')
	  details.append(list.firstChild)
	}
  })