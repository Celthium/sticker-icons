/*
 * Sticker Icons catalog
 * ---------------------
 * This file declares the current SVG asset inventory
 * The app cannot scan assets/ automatically from a static page
 */
(function () {
    'use strict';

    // Shared gradient presets reused by folder backgrounds and brand fallbacks
    const PRESETS = Object.freeze([
        { top: '#FEC2A1', bottom: '#F58422' },
        { top: '#92CCF8', bottom: '#5EA6FE' },
        { top: '#FDD3A4', bottom: '#F3BD31' },
        { top: '#6ED58B', bottom: '#12D0B1' },
        { top: '#DA97FF', bottom: '#E660FF' },
        { top: '#F78CB0', bottom: '#FD636B' },
        { top: '#89A7FC', bottom: '#8042FD' },
        { top: '#C5C5C5', bottom: '#9DA1A4' },
        { top: '#838C97', bottom: '#626975' },
        { top: '#383838', bottom: '#2C2C2C' }
    ]);

    // App-specific brand gradients used by Dock Icons and the Apps tab until the user overrides colors manually
    const APP_BRAND_PALETTES = Object.freeze({
        Spotify: { top: '#7BFFAA', bottom: '#1ED760' },
        Jellyfin: { top: '#AA5CC3', bottom: '#7971CA' },
        GameNative: { top: '#53C3F0', bottom: '#7B88F9' },
        GameHub: { top: '#CDD7E0', bottom: '#9098A0' },
        PixelGuide: { top: '#7E68F6', bottom: '#614CD8' },
        Obtainium: { top: '#A257EB', bottom: '#6D3DBA' },
        Syncthing: { top: '#26B6DB', bottom: '#0882C8' },
        Youtube: { top: '#FF6987', bottom: '#FF0033' },
        Discord: { top: '#8388F2', bottom: '#5865F2' }
    });

    // Normalize entries and keep explicit asset paths when provided
    function entries(rows) {
        return rows.map(row => Array.isArray(row) ? { name: row[0], presetIndex: row[1] } : { ...row });
    }

    // Build App/Dock entries with brand palettes, Pods defaults, and locked colors for fixed app assets
    function appEntries(rows) {
        return rows.map(row => {
            const base = Array.isArray(row) ? { name: row[0], presetIndex: row[1] } : { ...row };
            const { name, presetIndex, asset, filename, id } = base;
            return {
                name,
                presetIndex,
                asset,
                filename,
                id,
                brandPalette: APP_BRAND_PALETTES[name] || (Number.isInteger(presetIndex) ? PRESETS[presetIndex] : null),
                defaultStyle: 'pods',
                lockedAssetColor: true
            };
        });
    }

    // Current catalog
    const CATALOG = Object.freeze({
        platforms: [
            { name: '3DS', presetIndex: 5, asset: 'assets/platforms/3ds.svg' },
            { name: '3DS (Alt)', presetIndex: 5, asset: 'assets/platforms/3ds_alt.svg' },
            { name: 'DS', presetIndex: 5, asset: 'assets/platforms/ds.svg' },
            { name: 'DS (Alt)', presetIndex: 5, asset: 'assets/platforms/ds_alt.svg' },
            // { name: 'DSi', presetIndex: 5, asset: 'assets/platforms/dsi.svg' },
            // { name: 'DSi (Alt)', presetIndex: 5, asset: 'assets/platforms/dsi_alt.svg' },
            { name: 'FDS', presetIndex: 5, asset: 'assets/platforms/fds.svg' },
            { name: 'GB', presetIndex: 5, asset: 'assets/platforms/gb.svg' },
            { name: 'GBA', presetIndex: 5, asset: 'assets/platforms/gba.svg' },
            { name: 'GBC', presetIndex: 5, asset: 'assets/platforms/gbc.svg' },
            { name: 'GameCube', presetIndex: 5, asset: 'assets/platforms/gamecube.svg' },
            { name: 'N64', presetIndex: 5, asset: 'assets/platforms/n64.svg' },
            { name: 'NES', presetIndex: 5, asset: 'assets/platforms/nes.svg' },
            { name: 'Pokémon Mini', presetIndex: 5, asset: 'assets/platforms/pokémon-mini.svg' },
            { name: 'SNES', presetIndex: 5, asset: 'assets/platforms/snes.svg' },
            { name: 'Satellaview', presetIndex: 5, asset: 'assets/platforms/satellaview.svg' },
            { name: 'Switch', presetIndex: 5, asset: 'assets/platforms/switch.svg' },
            { name: 'Virtual Boy', presetIndex: 5, asset: 'assets/platforms/virtualboy.svg' },
            { name: 'Wii', presetIndex: 5, asset: 'assets/platforms/wii.svg' },
            { name: 'WiiU', presetIndex: 5, asset: 'assets/platforms/wiiu.svg' },
            { name: 'WiiU (Alt)', presetIndex: 5, asset: 'assets/platforms/wiiu_(alt).svg' },
            { name: 'WiiU (Full)', presetIndex: 5, asset: 'assets/platforms/wiiu_alt-02.svg' },
            { name: 'PS1', presetIndex: 6, asset: 'assets/platforms/ps1.svg' },
            { name: 'PS1 (Alt)', presetIndex: 6, asset: 'assets/platforms/ps1_alt.svg' },
            { name: 'PS2', presetIndex: 6, asset: 'assets/platforms/ps2.svg' },
            { name: 'PS2 (Alt)', presetIndex: 6, asset: 'assets/platforms/ps2_alt.svg' },
            { name: 'PS3', presetIndex: 6, asset: 'assets/platforms/ps3.svg' },
            { name: 'PS3 (Alt)', presetIndex: 6, asset: 'assets/platforms/ps3_alt.svg' },
            { name: 'PSP', presetIndex: 6, asset: 'assets/platforms/psp.svg' },
            { name: 'PSVITA', presetIndex: 6, asset: 'assets/platforms/psvita.svg' },
            { name: 'Dreamcast', presetIndex: 1, asset: 'assets/platforms/dreamcast.svg' },
            { name: 'Game Gear', presetIndex: 1, asset: 'assets/platforms/gamegear.svg' },
            { name: 'Genesis', presetIndex: 1, asset: 'assets/platforms/genesis.svg' },
            { name: 'Mega Drive', presetIndex: 1, asset: 'assets/platforms/megadrive.svg' },
            { name: 'Master System', presetIndex: 1, asset: 'assets/platforms/master-system.svg' },
            { name: 'Naomi', presetIndex: 1, asset: 'assets/platforms/naomi.svg' },
            { name: 'Pico', presetIndex: 1, asset: 'assets/platforms/pico.svg' },
            { name: 'Saturn', presetIndex: 1, asset: 'assets/platforms/saturn.svg' },
            { name: 'Sega 32X', presetIndex: 1, asset: 'assets/platforms/sega32x.svg' },
            { name: 'Sega CD', presetIndex: 1, asset: 'assets/platforms/segacd.svg' },
            { name: 'SG-1000', presetIndex: 1, asset: 'assets/platforms/sg-1000.svg' },
            { name: 'Atari 2600', presetIndex: 5, asset: 'assets/platforms/atari2600.svg' },
            { name: 'Atari 5200', presetIndex: 5, asset: 'assets/platforms/atari5200.svg' },
            { name: 'Atari 7800', presetIndex: 5, asset: 'assets/platforms/atari7800.svg' },
            { name: 'Atari Jaguar', presetIndex: 5, asset: 'assets/platforms/jaguar.svg' },
            { name: 'Atari Lynx', presetIndex: 5, asset: 'assets/platforms/lynx.svg' },
            { name: 'Atari ST', presetIndex: 5, asset: 'assets/platforms/atari-st.svg' },
            { name: 'Neo-Geo', presetIndex: 6, asset: 'assets/platforms/neo-geo.svg' },
            { name: 'Neo-Geo CD', presetIndex: 6, asset: 'assets/platforms/neo-geo-cd.svg' },
            { name: 'Neo-Geo Pocket', presetIndex: 6, asset: 'assets/platforms/neo-geo-pocket.svg' },
            { name: 'Neo-Geo Pocket Color', presetIndex: 6, asset: 'assets/platforms/neo-geo-pocket-color.svg' },
            { name: 'DOS', presetIndex: 9, asset: 'assets/platforms/dos.svg' },
            { name: 'Windows', presetIndex: 1, asset: 'assets/platforms/windows.svg' },
            { name: 'Xbox', presetIndex: 3, asset: 'assets/platforms/xbox.svg' },
            { name: 'PC-60', presetIndex: 6, asset: 'assets/platforms/pc-60.svg' },
            { name: 'PC-88', presetIndex: 6, asset: 'assets/platforms/pc-88.svg' },
            { name: 'PC-98', presetIndex: 6, asset: 'assets/platforms/pc-98.svg' },
            { name: 'PC-Engine', presetIndex: 6, asset: 'assets/platforms/pc-engine.svg' },
            { name: 'Commodore 64', presetIndex: 6, asset: 'assets/platforms/commodore-64.svg' },
            { name: 'Commodore 64 (Alt)', presetIndex: 6, asset: 'assets/platforms/commodore-64_alt.svg' },
            { name: 'VIC-20', presetIndex: 6, asset: 'assets/platforms/vic-20.svg' },
            { name: 'Amiga', presetIndex: 6, asset: 'assets/platforms/amiga.svg' },
            { name: 'X1', presetIndex: 9, asset: 'assets/platforms/x1.svg' },
            { name: 'X68K', presetIndex: 9, asset: 'assets/platforms/x68k.svg' },
            { name: 'ZX Spectrum', presetIndex: 9, asset: 'assets/platforms/zx-spectrum.svg' },
            { name: 'ZX81', presetIndex: 9, asset: 'assets/platforms/zx81.svg' },
            { name: '3DO', presetIndex: 5, asset: 'assets/platforms/3do.svg' },
            { name: 'Amstrad CPC', presetIndex: 5, asset: 'assets/platforms/amstrad-cpc.svg' },
            { name: 'Android', presetIndex: 3, asset: 'assets/platforms/android_icon.svg' },
            { name: 'Apple II', presetIndex: 7, asset: 'assets/platforms/appleII.svg' },
            { name: 'Arcadia 2001', presetIndex: 5, asset: 'assets/platforms/arcadia-2001.svg' },
            { name: 'Arduboy', presetIndex: 7, asset: 'assets/platforms/arduboy.svg' },
            { name: 'Atomiswave', presetIndex: 0, asset: 'assets/platforms/atomiswave.svg' },
            { name: 'Channel F', presetIndex: 5, asset: 'assets/platforms/channel-f.svg' },
            { name: 'ColecoVision', presetIndex: 5, asset: 'assets/platforms/colecovision.svg' },
            { name: 'Compact Disc', presetIndex: 9, asset: 'assets/platforms/compact-disc.svg' },
            { name: 'Flash', presetIndex: 5, asset: 'assets/platforms/flash.svg' },
            { name: 'FM Towns', presetIndex: 3, asset: 'assets/platforms/fm-towns.svg' },
            { name: 'Intellivision', presetIndex: 9, asset: 'assets/platforms/intellivision.svg' },
            { name: 'Java', presetIndex: 5, asset: 'assets/platforms/java.svg' },
            { name: 'Mega Duck', presetIndex: 1, asset: 'assets/platforms/megaduck.svg' },
            { name: 'Moonlight', presetIndex: 7, asset: 'assets/platforms/moonlight.svg' },
            { name: 'MSX', presetIndex: 9, asset: 'assets/platforms/msx.svg' },
            { name: 'N-Gage', presetIndex: 5, asset: 'assets/platforms/ngage.svg' },
            { name: 'Odyssey 2', presetIndex: 5, asset: 'assets/platforms/odyssey2.svg' },
            { name: 'Oric', presetIndex: 5, asset: 'assets/platforms/oric.svg' },
            { name: 'Palm OS', presetIndex: 9, asset: 'assets/platforms/palm.svg' },
            { name: 'ScummVM', presetIndex: 3, asset: 'assets/platforms/scummvm.svg' },
            { name: 'ScummVM (Alt)', presetIndex: 3, asset: 'assets/platforms/scummvm_alt.svg' },
            { name: 'Steam', presetIndex: 9, asset: 'assets/platforms/steam.svg' },
            { name: 'Super Cassette Vision', presetIndex: 2, asset: 'assets/platforms/super-cassette-vision.svg' },
            { name: 'Supervision', presetIndex: 7, asset: 'assets/platforms/supervision.svg' },
            { name: 'TurboGrafx-16', presetIndex: 6, asset: 'assets/platforms/turbografx-16.svg' },
            { name: 'Vectrex', presetIndex: 9, asset: 'assets/platforms/vectrex.svg' },
            { name: 'Vectrex (Alt)', presetIndex: 9, asset: 'assets/platforms/vectrex_alt.svg' },
            { name: 'WonderSwan', presetIndex: 5, asset: 'assets/platforms/wonderswan.svg' },
            { name: 'WonderSwan Color', presetIndex: 5, asset: 'assets/platforms/wonderswancolor.svg' },
            { name: 'Zeebo', presetIndex: 0, asset: 'assets/platforms/zeebo.svg' },
            { name: 'MAME', presetIndex: 9, asset: 'assets/platforms/mame.svg' },
            { name: 'FBNeo', presetIndex: 9, asset: 'assets/platforms/fbneo.svg' },
            { name: 'CPS-1', presetIndex: 1, asset: 'assets/platforms/cps-1.svg' },
            { name: 'CPS-2', presetIndex: 1, asset: 'assets/platforms/cps-2.svg' },
            { name: 'CPS-3', presetIndex: 1, asset: 'assets/platforms/cps-3.svg' },
            { name: 'Model 2', presetIndex: 1, asset: 'assets/platforms/model-2.svg' },
            { name: 'Model 3', presetIndex: 1, asset: 'assets/platforms/model-3.svg' },
            { name: 'PC-FX', presetIndex: 6, asset: 'assets/platforms/pc-fx.svg' },
            { name: 'SuperGrafx', presetIndex: 6, asset: 'assets/platforms/supergrafx.svg' },
            { name: 'PC Engine CD', presetIndex: 6, asset: 'assets/platforms/pc-engine-cd.svg' },
            { name: 'Amiga CD32', presetIndex: 6, asset: 'assets/platforms/amiga-cd32.svg' }
        ],
        games: [
            { name: 'Space Invaders', presetIndex: 9, asset: 'assets/games/space-invaders.svg' },
            { name: 'Batman', presetIndex: 9, asset: 'assets/games/batman.svg' },
            { name: 'Mario', presetIndex: 5, asset: 'assets/games/mario.svg' },
            { name: 'Minecraft', presetIndex: 3, asset: 'assets/games/minecraft.svg' },
            { name: 'Dragon Ball', presetIndex: 0, asset: 'assets/games/dragon-ball.svg' },
            { name: 'Dragon Quest', presetIndex: 1, asset: 'assets/games/dragon-quest.svg' },
            { name: 'Donkey Kong', presetIndex: 5, asset: 'assets/games/donkey-kong.svg' },
            { name: 'Sonic', presetIndex: 1, asset: 'assets/games/sonic.svg' },
            { name: 'Sonic (Ring)', presetIndex: 2, asset: 'assets/games/sonic-ring.svg' },
            { name: 'Zelda', presetIndex: 2, asset: 'assets/games/triforce.svg' },
            { name: 'Pokémon (Pokéball)', presetIndex: 5, asset: 'assets/games/pokeball.svg' },
            { name: 'Pokémon (Master Ball)', presetIndex: 6, asset: 'assets/games/masterball.svg' },
            { name: 'Pokémon (Ultra Ball)', presetIndex: 9, asset: 'assets/games/ultraball.svg' },
            { name: 'Pokémon (Great Ball)', presetIndex: 1, asset: 'assets/games/greatball.svg' },
            { name: 'Metroid', presetIndex: 5, asset: 'assets/games/metroid.svg' },
            { name: 'Kirby', presetIndex: 5, asset: 'assets/games/kirby.svg' },
            { name: 'Fire Emblem', presetIndex: 5, asset: 'assets/games/fire-emblem.svg' },
            { name: 'Mega Man', presetIndex: 1, asset: 'assets/games/mega-man.svg' },
            { name: 'Final Fantasy', presetIndex: 6, asset: 'assets/games/final-fantasy.svg' },
            { name: 'Yoshi', presetIndex: 3, asset: 'assets/games/yoshi.svg' },
            { name: 'Star Wars', presetIndex: 1, asset: 'assets/games/star-wars.svg' },
            { name: 'Shrek', presetIndex: 3, asset: 'assets/games/shrek.svg' },
            { name: 'Street Fighter', presetIndex: 5, asset: 'assets/games/street-fighter.svg' },
            { name: 'GTA', presetIndex: 9, asset: 'assets/games/gta.svg' },
            { name: 'Persona', presetIndex: 9, asset: 'assets/games/persona.svg' },
            { name: 'Pac-Man', presetIndex: 2, asset: 'assets/games/pac-man.svg' },
            { name: 'Tetris', presetIndex: 2, asset: 'assets/games/tetris.svg' },
            { name: 'Lego', presetIndex: 2, asset: 'assets/games/lego.svg' },
            { name: 'Kingdom Hearts', presetIndex: 1, asset: 'assets/games/kingdom-hearts.svg' },
            { name: 'Yu-Gi-Oh!', presetIndex: 2, asset: 'assets/games/yu-gi-oh!.svg' },
            { name: 'Ys', presetIndex: 5, asset: 'assets/games/ys.svg' },
            { name: 'Warhammer', presetIndex: 9, asset: 'assets/games/warhammer.svg' },
            { name: 'Warhammer 40K', presetIndex: 9, asset: 'assets/games/warhammer-40k.svg' }
        ],
        generic: [
            { name: 'Book (Dynamic)', presetIndex: 0 },
            { name: 'Recent (Dynamic)', presetIndex: 0 },
            { name: 'Streaming (Dynamic)', presetIndex: 0 },
            { name: 'Music (Dynamic)', presetIndex: 0 },
            { name: 'Favorites (Dynamic)', presetIndex: 0 },
            { name: 'Liked (Dynamic)', presetIndex: 0 },
            { name: 'Media (Dynamic)', presetIndex: 0 },
            { name: 'Internet (Dynamic)', presetIndex: 0 },
            { name: 'Chat (Dynamic)', presetIndex: 0 },
            { name: 'Infinite (Dynamic)', presetIndex: 0 },
            { name: 'Settings (Dynamic)', presetIndex: 0 },
            { name: 'Book', presetIndex: 7, asset: 'assets/generic/book.svg' },
            { name: 'Streaming', presetIndex: 1, asset: 'assets/generic/streaming.svg' },
            { name: 'Music', presetIndex: 9, asset: 'assets/generic/note.svg' },
            { name: 'Media', presetIndex: 9, asset: 'assets/generic/media.svg' },
            { name: 'Favorites', presetIndex: 2, asset: 'assets/generic/star.svg' },
            { name: 'Liked', presetIndex: 5, asset: 'assets/generic/heart.svg' },
            { name: 'Settings', presetIndex: 7, asset: 'assets/generic/settings.svg' }
        ],
        apps: appEntries([
            { name: 'Spotify', asset: 'assets/apps/spotify.svg' },
            { name: 'Jellyfin', asset: 'assets/apps/jellyfin.svg' },
            { name: 'GameNative', asset: 'assets/apps/gamenative.svg' },
            { name: 'GameHub', asset: 'assets/apps/gamehub.svg' },
            { name: 'PixelGuide', asset: 'assets/apps/pixelguide.svg' },
            { name: 'Obtainium', asset: 'assets/apps/obtainium.svg' },
            { name: 'Syncthing', asset: 'assets/apps/syncthing.svg' },
            { name: 'Youtube', asset: 'assets/apps/youtube.svg' },
            { name: 'Discord', asset: 'assets/apps/discord.svg' }
        ]),
        logos: [
            { name: '3DS', presetIndex: 5, asset: 'assets/logos/3ds_logo.svg' },
            { name: 'DS', presetIndex: 5, asset: 'assets/logos/ds_logo.svg' },
            // { name: 'DSi', presetIndex: 5, asset: 'assets/logos/dsi_logo.svg' },
            { name: 'FDS', presetIndex: 5, asset: 'assets/logos/fds_logo.svg' },
            { name: 'GB', presetIndex: 5, asset: 'assets/logos/gb_logo.svg' },
            { name: 'GBA', presetIndex: 5, asset: 'assets/logos/gba_logo.svg' },
            { name: 'GBC', presetIndex: 5, asset: 'assets/logos/gbc_logo.svg' },
            { name: 'GameCube', presetIndex: 5, asset: 'assets/logos/gamecube_logo.svg' },
            { name: 'N64', presetIndex: 5, asset: 'assets/logos/n64_logo.svg' },
            { name: 'NES', presetIndex: 5, asset: 'assets/logos/nes_logo.svg' },
            { name: 'Pokémon Mini', presetIndex: 5, asset: 'assets/logos/pokémon-mini_logo.svg' },
            { name: 'SNES', presetIndex: 5, asset: 'assets/logos/snes_logo.svg' },
            { name: 'Satellaview', presetIndex: 5, asset: 'assets/logos/satellaview_logo.svg' },
            { name: 'Switch', presetIndex: 5, asset: 'assets/logos/switch_logo.svg' },
            { name: 'Virtual Boy', presetIndex: 5, asset: 'assets/logos/virtualboy_logo.svg' },
            { name: 'Wii', presetIndex: 5, asset: 'assets/logos/wii_logo.svg' },
            { name: 'WiiU', presetIndex: 5, asset: 'assets/logos/wiiu_logo.svg' },
            { name: 'PS1', presetIndex: 6, asset: 'assets/logos/ps1_logo.svg' },
            { name: 'PS2', presetIndex: 6, asset: 'assets/logos/ps2_logo.svg' },
            { name: 'PS3', presetIndex: 6, asset: 'assets/logos/ps3_logo.svg' },
            { name: 'PSP', presetIndex: 6, asset: 'assets/logos/psp_logo.svg' },
            { name: 'PSVITA', presetIndex: 6, asset: 'assets/logos/psvita_logo.svg' },
            { name: 'Dreamcast', presetIndex: 1, asset: 'assets/logos/dreamcast_logo.svg' },
            { name: 'Game Gear', presetIndex: 1, asset: 'assets/logos/gamegear_logo.svg' },
            { name: 'Genesis', presetIndex: 1, asset: 'assets/logos/genesis_logo.svg' },
            { name: 'Mega Drive', presetIndex: 1, asset: 'assets/logos/megadrive_logo.svg' },
            { name: 'Master System', presetIndex: 1, asset: 'assets/logos/master-system_logo.svg' },
            { name: 'Naomi', presetIndex: 1, asset: 'assets/logos/naomi_logo.svg' },
            { name: 'Pico', presetIndex: 1, asset: 'assets/logos/pico_logo.svg' },
            { name: 'Saturn', presetIndex: 1, asset: 'assets/logos/saturn_logo.svg' },
            { name: 'Sega 32X', presetIndex: 1, asset: 'assets/logos/sega32x_logo.svg' },
            { name: 'Sega CD', presetIndex: 1, asset: 'assets/logos/segacd_logo.svg' },
            { name: 'SG-1000', presetIndex: 1, asset: 'assets/logos/sg-1000_logo.svg' },
            { name: 'Atari 2600', presetIndex: 5, asset: 'assets/logos/atari2600_logo.svg' },
            { name: 'Atari 5200', presetIndex: 5, asset: 'assets/logos/atari5200_logo.svg' },
            { name: 'Atari 7800', presetIndex: 5, asset: 'assets/logos/atari7800_logo.svg' },
            { name: 'Atari Jaguar', presetIndex: 5, asset: 'assets/logos/jaguar_logo.svg' },
            { name: 'Atari Lynx', presetIndex: 5, asset: 'assets/logos/lynx_logo.svg' },
            { name: 'Atari ST', presetIndex: 5, asset: 'assets/logos/atarist_logo.svg' },
            { name: 'Neo-Geo', presetIndex: 6, asset: 'assets/logos/neo-geo_logo.svg' },
            { name: 'Neo-Geo CD', presetIndex: 6, asset: 'assets/logos/neo-geo-cd_logo.svg' },
            { name: 'Neo-Geo Pocket', presetIndex: 6, asset: 'assets/logos/neo-geo-pocket_logo.svg' },
            { name: 'Neo-Geo Pocket Color', presetIndex: 6, asset: 'assets/logos/neo-geo-pocket-color_color.svg' },
            { name: 'Windows', presetIndex: 1, asset: 'assets/logos/windows_logo.svg' },
            { name: 'Xbox', presetIndex: 3, asset: 'assets/logos/xbox_logo.svg' },
            { name: 'Android', presetIndex: 3, asset: 'assets/logos/android_logo.svg' },
            { name: 'Arduboy', presetIndex: 7, asset: 'assets/logos/arduboy_logo.svg' },
            { name: 'Atomiswave', presetIndex: 0, asset: 'assets/logos/atomiswave_logo.svg' },
            { name: 'Flash', presetIndex: 5, asset: 'assets/logos/flash_logo.svg' },
            { name: 'Java', presetIndex: 5, asset: 'assets/logos/java_logo.svg' },
            { name: 'Mega Duck', presetIndex: 1, asset: 'assets/logos/megaduck_logo.svg' },
            { name: 'N-Gage', presetIndex: 5, asset: 'assets/logos/n-gage_logo.svg' },
            { name: 'ScummVM', presetIndex: 3, asset: 'assets/logos/scummvm_logo.svg' },
            { name: 'Steam', presetIndex: 9, asset: 'assets/logos/steam_logo.svg' },
            { name: 'Supervision', presetIndex: 7, asset: 'assets/logos/supervision_logo.svg' },
            { name: 'WonderSwan', presetIndex: 5, asset: 'assets/logos/wonderswan_logo.svg' },
            { name: 'WonderSwan Color', presetIndex: 5, asset: 'assets/logos/wonderswancolor_logo.svg' },
            { name: 'MAME', presetIndex: 9, asset: 'assets/logos/mame_logo.svg' },
            { name: 'FBNeo', presetIndex: 9, asset: 'assets/logos/fbneo_logo.svg' },
            { name: 'CPS-1', presetIndex: 1, asset: 'assets/logos/cps-1_logo.svg' },
            { name: 'CPS-2', presetIndex: 1, asset: 'assets/logos/cps-2_logo.svg' },
            { name: 'CPS-3', presetIndex: 1, asset: 'assets/logos/cps-3_logo.svg' },
            { name: 'Model 2', presetIndex: 1, asset: 'assets/logos/model-2_logo.svg' },
            { name: 'Model 3', presetIndex: 1, asset: 'assets/logos/model-3_logo.svg' },
            { name: 'PC-FX', presetIndex: 6, asset: 'assets/logos/pc-fx_logo.svg' },
            { name: 'SuperGrafx', presetIndex: 6, asset: 'assets/logos/supergrafx_logo.svg' },
            { name: 'PC Engine CD', presetIndex: 6, asset: 'assets/logos/pc-engine-cd_logo.svg' },
            { name: 'Amiga CD32', presetIndex: 6, asset: 'assets/logos/amiga-cd32_logo.svg' }
        ],
        dock: appEntries([
            { name: 'Spotify' },
            { name: 'Jellyfin' },
            { name: 'GameNative' },
            { name: 'GameHub' },
            { name: 'PixelGuide' },
            { name: 'Obtainium' },
            { name: 'Syncthing' },
            { name: 'Youtube' },
            { name: 'Discord' },
            { name: 'Moonlight', presetIndex: 7 },
            { name: 'Music', presetIndex: 9 },
            { name: 'Files', presetIndex: 7 },
            { name: 'Internet', presetIndex: 1 },
            { name: 'Chat', presetIndex: 1 },
            { name: 'Book', presetIndex: 7 },
            { name: 'Streaming', presetIndex: 9 },
            { name: 'Settings', presetIndex: 7 }
        ])
    });

    // Debug view generated from CATALOG
    const viewData = Object.freeze(Object.fromEntries(
        Object.entries(CATALOG).map(([key, items]) => [key, items.map(item => item.name)])
    ));

    // Flattened runtime database used by the grid, selection logic, previews, and export
    const iconsDatabase = [];
    const EXPORT_LABEL_BY_SUFFIX = Object.freeze({
        icon: 'Folder',
        logo: 'Asset',
        dock: 'Dock'
    });

    // Flatten one catalog category into iconsDatabase
    function addIconsToDB(items, tabName, suffix) {
        items.forEach(({ name, presetIndex, brandPalette, defaultStyle, lockedAssetColor, asset, filename, id }) => {
            const exportLabel = EXPORT_LABEL_BY_SUFFIX[suffix];
            iconsDatabase.push({
                id: id || `${tabName}_${name}`,
                src: asset || '',
                filename: filename || `${name}_${exportLabel}.png`,
                displayName: name,
                tab: tabName,
                presetIndex,
                brandPalette,
                defaultStyle,
                lockedAssetColor: Boolean(lockedAssetColor),
                sourceType: asset ? 'asset' : 'template'
            });
        });
    }

    addIconsToDB(CATALOG.platforms, 'platforms', 'icon');
    addIconsToDB(CATALOG.games, 'games', 'icon');
    addIconsToDB(CATALOG.generic, 'generic', 'icon');
    addIconsToDB(CATALOG.logos, 'logos', 'logo');
    addIconsToDB(CATALOG.apps, 'apps', 'icon');
    addIconsToDB(CATALOG.dock, 'dock', 'dock');

    window.StickerIconCatalog = Object.freeze({
        PRESETS,
        APP_BRAND_PALETTES,
        CATALOG,
        viewData,
        iconsDatabase
    });

    window.viewData = viewData;
})();
