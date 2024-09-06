import ChatRollPrivacy from './chat-roll-privacy.js';
import AllianceViewer from './alliance-viewer.js';

Hooks.on('ready', async () => {
    // Retrait de la classe de Monk's Little Details
    // Créer une erreur lorsque le module n'est pas activé
        if (game.settings.settings.has('monks-little-details.window-css-changes')) {
                game.settings.set("monks-little-details", "window-css-changes", false);
                $("body").removeClass("change-windows");
        }
		if (game.modules.has('pf2e-dorako-ui') && game.modules.get('pf2e-dorako-ui').active) {
			ui.notifications.error(game.i18n.localize('RPGUI.SETTINGS.DORAKOUI'));
		}
});

Hooks.on('init', () => {
	// Register module settings.

	game.settings.register('pathfinder-ui', 'darkWindowsToggle', {
		name: game.i18n.localize('RPGUI.SETTINGS.DARKWINDOWS'),
		hint: game.i18n.localize('RPGUI.SETTINGS.DARKWINDOWS_HINT'),
		scope: "client",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload();
		}
	});
	game.settings.register('pathfinder-ui', 'adjustTokenEffectsHudToggle', {
		name: game.i18n.localize('RPGUI.SETTINGS.TOKEN_EFFECT_HUD'),
		hint: game.i18n.localize('RPGUI.SETTINGS.TOKEN_EFFECT_HUD_HINT'),
		scope: "world",
		type: Boolean,
		default: true,
		config: true,
		onChange: () => {
			location.reload();
		}
	});
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
	game.settings.register('pathfinder-ui', 'minimalUICompatibility', {
		name: game.i18n.localize('RPGUI.SETTINGS.MINIMAL_UI'),
		hint: game.i18n.localize('RPGUI.SETTINGS.MINIMAL_UI_HINT'),
		scope: "world",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload();
		}
	});

	game.settings.register('pathfinder-ui', 'tokenHud', {
		name: game.i18n.localize('RPGUI.SETTINGS.TOKEN_HUD'),
		hint: game.i18n.localize('RPGUI.SETTINGS.TOKEN_HUD_HINT'),
		scope: "client",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload();
		}
	});

	game.settings.register('pathfinder-ui', 'pf2eHud', {
		name: game.i18n.localize('RPGUI.SETTINGS.PF2E_HUD'),
		hint: game.i18n.localize('RPGUI.SETTINGS.PF2E_HUD_HINT'),
		scope: "client",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload();
		}
	});

	game.settings.register('pathfinder-ui', 'pf2eBestiaryTracking', {
		name: game.i18n.localize('RPGUI.SETTINGS.PF2E_BESTIARY_TRACKING'),
		hint: game.i18n.localize('RPGUI.SETTINGS.PF2E_BESTIARY_TRACKING_HINT'),
		scope: "client",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload();
		}
	});

	game.settings.register('pathfinder-ui', 'journalSheet', {
		name: game.i18n.localize('RPGUI.SETTINGS.JOURNAL_SHEET'),
		hint: game.i18n.localize('RPGUI.SETTINGS.JOURNAL_SHEET_HINT'),
		scope: "client",
		type: Boolean,
		default: true,
		config: true,
		onChange: () => {
			location.reload();
		}
	});
	game.settings.register('pathfinder-ui', 'cursor', {
		name: game.i18n.localize('RPGUI.SETTINGS.JOURNAL_CURSOR'),
		hint: game.i18n.localize('RPGUI.SETTINGS.JOURNAL_CURSOR_HINT'),
		scope: "client",
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
	game.settings.register('pathfinder-ui', 'autoCollapseSceneNavigation', {
		name: game.i18n.localize('RPGUI.SETTINGS.AUTO_COLLAPSE_SCENE_NAVIGATION_TEXT'),
		hint: game.i18n.localize('RPGUI.SETTINGS.AUTO_COLLAPSE_SCENE_NAVIGATION_TEXT_HINT'),
		scope: "client",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload();
		}
	});
	game.settings.register('pathfinder-ui', 'openSheetOnChatClick', {
		name: game.i18n.localize('RPGUI.SETTINGS.OPEN_SHEET_ON_CHAT_CLICK_TEXT'),
		hint: game.i18n.localize('RPGUI.SETTINGS.OPEN_SHEET_ON_CHAT_CLICK_TEXT_HINT'),
		scope: "client",
		type: Boolean,
		default: true,
		config: true,
		onChange: () => {
			location.reload();
		}
	});

	if (!game.settings.get('pathfinder-ui', 'compactModeToggle')) {
		if (!game.settings.get('pathfinder-ui', 'standardLogoToggle')) {
			addClassByQuerySelector("hide", "img#logo")

			let newLogo = document.createElement('div');
			let uiLeft = document.getElementById('ui-left')
			newLogo.classList.add("new-logo")
			newLogo.innerText = "Pathfinder \n2e"
			uiLeft.prepend(newLogo)
		}
	}

	if (!game.settings.get('pathfinder-ui', 'disableAllStyles')) { rpgUIAddMainCss() }
    if (game.settings.get('pathfinder-ui', 'darkWindowsToggle')) { rpgUIAddDarkWindows() }	
    if (game.settings.get('pathfinder-ui', 'adjustTokenEffectsHudToggle')) { rpgUIAddTokenEffectsHud() }
	if (!game.settings.get('pathfinder-ui', 'tokenHud')) { rpgUIAddTokenHud() }
	if (!game.settings.get('pathfinder-ui', 'pf2eHud')) { rpgUIAddPf2eHud() }
	if (!game.settings.get('pathfinder-ui', 'pf2eBestiaryTracking')) { rpgUIAddPf2eBestiaryTracking() }
	if (!game.settings.get('pathfinder-ui', 'journalSheet')) { rpgUIAddJournalSheet() }
	if (!game.settings.get('pathfinder-ui', 'cursor')) { rpgUIAddCursor() }
	if (game.settings.get('pathfinder-ui', 'minimalUICompatibility')) { addClassByQuerySelector('minimal-ui-mode', 'body.vtt') }

	ChatRollPrivacy.init();
	AllianceViewer.init();
});

Hooks.once('setup', function () {
	ChatRollPrivacy.setup();
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

Hooks.on('renderSceneNavigation', (sceneNavigation) => {
	if (game.settings.get('pathfinder-ui', 'autoCollapseSceneNavigation')) {
		sceneNavigation.collapse();
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
function rpgUIAddDarkWindows() {
	const head = document.getElementsByTagName("head")[0];
	const mainCss = document.createElement("link");
	mainCss.setAttribute("rel", "stylesheet")
	mainCss.setAttribute("type", "text/css")
	mainCss.setAttribute("href", "modules/pathfinder-ui/css/dark-windows.css")
	mainCss.setAttribute("media", "all")
	head.insertBefore(mainCss, head.lastChild);
}
function rpgUIAddTokenEffectsHud() {
    const head = document.getElementsByTagName("head")[0];
    const mainCss = document.createElement("script");
    mainCss.setAttribute("type", "text/javascript")
    mainCss.setAttribute("src", "modules/pathfinder-ui/scripts/status-halo.js")
    head.insertBefore(mainCss, head.lastChild);

    setTimeout(() => enableStatusHalo(), 500);
}
function rpgUIAddTokenHud() {
	const head = document.getElementsByTagName("head")[0];
	const mainCss = document.createElement("link");
	mainCss.setAttribute("rel", "stylesheet")
	mainCss.setAttribute("type", "text/css")
	mainCss.setAttribute("href", "modules/pathfinder-ui/css/hud.css")
	mainCss.setAttribute("media", "all")
	head.insertBefore(mainCss, head.lastChild);
}

function rpgUIAddPf2eHud() {
	const head = document.getElementsByTagName("head")[0];
	const mainCss = document.createElement("link");
	mainCss.setAttribute("rel", "stylesheet")
	mainCss.setAttribute("type", "text/css")
	mainCss.setAttribute("href", "modules/pathfinder-ui/css/pf2e-hud.css")
	mainCss.setAttribute("media", "all")
	head.insertBefore(mainCss, head.lastChild);
}

function rpgUIAddPf2eBestiaryTracking() {
	const head = document.getElementsByTagName("head")[0];
	const mainCss = document.createElement("link");
	mainCss.setAttribute("rel", "stylesheet")
	mainCss.setAttribute("type", "text/css")
	mainCss.setAttribute("href", "modules/pathfinder-ui/css/pf2e-bestiary-tracking.css")
	mainCss.setAttribute("media", "all")
	head.insertBefore(mainCss, head.lastChild);
}

function rpgUIAddJournalSheet() {
	const head = document.getElementsByTagName("head")[0];
	const mainCss = document.createElement("link");
	mainCss.setAttribute("rel", "stylesheet")
	mainCss.setAttribute("type", "text/css")
	mainCss.setAttribute("href", "modules/pathfinder-ui/css/journal-sheet.css")
	mainCss.setAttribute("media", "all")
	head.insertBefore(mainCss, head.lastChild);
}

function rpgUIAddCursor() {
	const head = document.getElementsByTagName("head")[0];
	const mainCss = document.createElement("link");
	mainCss.setAttribute("rel", "stylesheet")
	mainCss.setAttribute("type", "text/css")
	mainCss.setAttribute("href", "modules/pathfinder-ui/css/cursor.css")
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

Hooks.on('renderChatMessage', (chat, html) => {
  if (!chat.speaker.actor) {
    return;
  }

  const tokenImage = html[0].querySelector('header > img');
  if (!tokenImage) {
    return;
  }

  const actor = game.actors.get(chat.speaker.actor);
  if (!actor) {
    return;
  }

  const scale = actor?.prototypeToken?.texture?.scaleX;
  if (!scale || 1 >= scale) {
    return;
  }

  tokenImage.style.transform = `scale(${scale - 0.2})`;
  tokenImage.style.boxShadow = 'none';
});

Hooks.on('renderChatLogPF2e', (chat, html) => {
  if (!game.settings.get('pathfinder-ui', 'openSheetOnChatClick')) {
    return;
  }

  html[0].addEventListener('click', async (event) => {
    const target = event.target;
    if (!target || (
      !target.classList.contains('message-sender') // Actor name
      && !target.nextElementSibling?.classList.contains('message-sender') // Actor image
    )) {
      return;
    }

    const messageId = target.closest('[data-message-id]');
    if (!messageId) {
      return;
    }

    const message = game.messages.get(messageId.dataset.messageId);
    if (!message || !message.actor || !message.actor.isOwner) {
      return;
    }

    message.actor.sheet.render(true);
  });
});

Hooks.on('hoverToken', (token, isHovered) => {
    const board = document.getElementById('board');

    if (isHovered) {
        board.classList.add('rpg-ui-hover-token');
    } else {
        board.classList.remove('rpg-ui-hover-token');
    }
});
