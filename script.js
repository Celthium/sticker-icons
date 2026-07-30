/*
 * Sticker Icons
 * ------------------------
 * Browser-only icon editor
 *
 * Browser security note:
 * A static web page cannot scan the local assets/ directory by itself
 * Every asset must therefore be declared in catalog.js
 * The main script consumes catalog.js, icon-templates.js and dock-icons.js
 * to build the grid, previews and export filenames
 *
 * - UI state lives in the `state` object instead of being scattered globally
 * - SVG templates use COLOR_TOP / COLOR_BOTTOM placeholders for recoloring
 * - Blob URLs are revoked whenever dynamic SVGs are regenerated
 */

// --- EXTERNAL DATA CATALOG ---
// catalog.js exposes the static asset catalog and shared palettes on window.StickerIconCatalog
const catalogData = window.StickerIconCatalog || {};
const PRESETS = catalogData.PRESETS || Object.freeze([{ top: '#FEC2A1', bottom: '#F58422' }]);
const APP_BRAND_PALETTES = catalogData.APP_BRAND_PALETTES || Object.freeze({});
const CATALOG = catalogData.CATALOG || Object.freeze({
    platforms: [],
    games: [],
    generic: [],
    logos: [],
    apps: [],
    dock: []
});
const viewData = catalogData.viewData || Object.freeze(Object.fromEntries(
    Object.entries(CATALOG).map(([key, items]) => [key, items.map(item => item.name)])
));
const iconsDatabase = catalogData.iconsDatabase || [];
window.viewData = viewData;

// SVG templates for generated backgrounds. Gradients are recolored by replacing COLOR_TOP / COLOR_BOTTOM
// Folders / Pods SVG
const svgTemplates = {
    noborder: `<svg width="1024" height="1024" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_546_86136)"><g filter="url(#filter0_d_546_86136)"><g filter="url(#filter1_i_546_86136)"><path d="M10 46C10 29.4315 23.4315 16 40 16H69.999C76.5292 16 82.881 18.1307 88.0902 22.0687L96.0699 28.101C97.8063 29.4137 99.9236 30.1239 102.1 30.1239H216C232.569 30.1239 246 43.5554 246 60.1239V210C246 226.569 232.569 240 216 240H40C23.4315 240 10 226.569 10 210V46Z" fill="url(#paint0_linear_546_86136)"/><path d="M10 46C10 29.4315 23.4315 16 40 16H69.999C76.5292 16 82.881 18.1307 88.0902 22.0687L96.0699 28.101C97.8063 29.4137 99.9236 30.1239 102.1 30.1239H216C232.569 30.1239 246 43.5554 246 60.1239V210C246 226.569 232.569 240 216 240H40C23.4315 240 10 226.569 10 210V46Z" fill="black" fill-opacity="0.05"/></g><g filter="url(#filter2_i_546_86136)"><path d="M33.2646 55.5277C33.0234 54.4775 33.6872 53.4327 34.7404 53.2049L178.432 22.1324C188.776 19.8957 198.995 26.3892 201.364 36.703L216.754 103.705C219.166 114.207 212.528 124.655 201.996 126.933L75.5322 154.28C65.1889 156.516 54.9691 150.023 52.6001 139.709L33.2646 55.5277Z" fill="url(#paint1_linear_546_86136)"/></g><path d="M178.327 21.6439C188.937 19.3494 199.422 26.0105 201.852 36.5909L217.241 103.593C219.716 114.367 212.906 125.085 202.102 127.421L75.6379 154.768C65.0272 157.063 54.5431 150.402 52.1128 139.821L32.7774 55.6401C32.4738 54.3183 33.3093 53.0031 34.6349 52.7165L178.327 21.6439Z" stroke="white"/><g filter="url(#filter3_i_546_86136)"><path d="M10 69.9997C10 53.4312 23.4315 39.9998 40 39.9998H216C232.569 39.9998 246 53.4312 246 69.9998V210C246 226.568 232.569 240 216 240H40C23.4315 240 10 226.568 10 210L10 69.9997Z" fill="url(#paint2_linear_546_86136)"/></g></g></g><defs><filter id="filter0_d_546_86136" x="-2" y="10" width="260" height="248" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="6"/><feGaussianBlur stdDeviation="6"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_546_86136"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_546_86136" result="shape"/></filter><filter id="filter1_i_546_86136" x="10" y="16" width="236" height="234" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="10"/><feGaussianBlur stdDeviation="7.5"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_546_86136"/></filter><filter id="filter2_i_546_86136" x="32.2148" y="20.6914" width="186.035" height="139.029" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_546_86136"/></filter><filter id="filter3_i_546_86136" x="10" y="39.9998" width="236" height="200" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_546_86136"/></filter><linearGradient id="paint0_linear_546_86136" x1="128" y1="16.2469" x2="128" y2="240" gradientUnits="userSpaceOnUse"><stop stop-color="#FEC2A1"/><stop offset="1" stop-color="#F58422"/></linearGradient><linearGradient id="paint1_linear_546_86136" x1="97.3382" y1="68.5473" x2="411.622" y2="-14.0148" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="#BEBEBE"/></linearGradient><linearGradient id="paint2_linear_546_86136" x1="128" y1="40.2202" x2="128" y2="240" gradientUnits="userSpaceOnUse"><stop stop-color="#FEC2A1"/><stop offset="1" stop-color="#F58422"/></linearGradient><clipPath id="clip0_546_86136"><rect width="256" height="256" fill="white"/></clipPath></defs></svg>`,
    border: `<svg width="1024" height="1024" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_546_86103)"><g filter="url(#filter0_d_546_86103)"><g filter="url(#filter1_i_546_86103)"><path d="M18 55.417C18 38.8485 31.4315 25.417 48 25.417H73.3125C79.8036 25.417 86.1196 27.5223 91.3125 31.417L92.7292 32.4795C97.9221 36.3742 104.238 38.4795 110.729 38.4795H208C224.569 38.4795 238 51.911 238 68.4795V202.584C238 219.152 224.569 232.584 208 232.584H48C31.4315 232.584 18 219.152 18 202.584V55.417Z" fill="url(#paint0_linear_546_86103)"/><path d="M18 55.417C18 38.8485 31.4315 25.417 48 25.417H73.3125C79.8036 25.417 86.1196 27.5223 91.3125 31.417L92.7292 32.4795C97.9221 36.3742 104.238 38.4795 110.729 38.4795H208C224.569 38.4795 238 51.911 238 68.4795V202.584C238 219.152 224.569 232.584 208 232.584H48C31.4315 232.584 18 219.152 18 202.584V55.417Z" fill="black" fill-opacity="0.05"/></g><path d="M18 55.417C18 38.8485 31.4315 25.417 48 25.417H73.3125C79.8036 25.417 86.1196 27.5223 91.3125 31.417L92.7292 32.4795C97.9221 36.3742 104.238 38.4795 110.729 38.4795H208C224.569 38.4795 238 51.911 238 68.4795V202.584C238 219.152 224.569 232.584 208 232.584H48C31.4315 232.584 18 219.152 18 202.584V55.417Z" stroke="white" stroke-width="15"/><g filter="url(#filter2_i_546_86103)"><path d="M33.264 87.028C33.0228 85.9777 33.6866 84.9329 34.7398 84.7052L178.432 53.6327C188.775 51.396 198.995 57.8894 201.364 68.2032L216.753 135.205C219.166 145.708 212.527 156.155 201.995 158.433L75.5316 185.78C65.1883 188.017 54.9685 181.523 52.5995 171.209L33.264 87.028Z" fill="url(#paint1_linear_546_86103)"/></g><g filter="url(#filter3_i_546_86103)"><path d="M25.5 95C25.5 82.2975 35.7975 72 48.5 72H207.5C220.203 72 230.5 82.2975 230.5 95V202.5C230.5 215.203 220.203 225.5 207.5 225.5H48.5C35.7975 225.5 25.5 215.203 25.5 202.5L25.5 95Z" fill="url(#paint2_linear_546_86103)"/></g></g></g><defs><filter id="filter0_d_546_86103" x="-1.5" y="11.917" width="259" height="246.167" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="6"/><feGaussianBlur stdDeviation="6"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_546_86103"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_546_86103" result="shape"/></filter><filter id="filter1_i_546_86103" x="10.5" y="17.917" width="235" height="237.167" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="20"/><feGaussianBlur stdDeviation="7.5"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_546_86103"/></filter><filter id="filter2_i_546_86103" x="33.2145" y="53.1919" width="184.034" height="137.029" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_546_86103"/></filter><filter id="filter3_i_546_86103" x="25.5" y="72" width="205" height="153.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_546_86103"/></filter><linearGradient id="paint0_linear_546_86103" x1="128" y1="25.6453" x2="128" y2="232.584" gradientUnits="userSpaceOnUse"><stop stop-color="#FEC2A1"/><stop offset="1" stop-color="#F58422"/></linearGradient><linearGradient id="paint1_linear_546_86103" x1="97.3376" y1="100.048" x2="411.622" y2="17.4854" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="#BEBEBE"/></linearGradient><linearGradient id="paint2_linear_546_86103" x1="128" y1="72.1692" x2="128" y2="225.5" gradientUnits="userSpaceOnUse"><stop stop-color="#FEC2A1"/><stop offset="1" stop-color="#F58422"/></linearGradient><clipPath id="clip0_546_86103"><rect width="256" height="256" fill="white"/></clipPath></defs></svg>`,
    pods: `<svg width="1024" height="1024" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_561_91253)"><rect width="256" height="256" fill="url(#paint0_linear_561_91253)"/><g style="mix-blend-mode:lighten" opacity="0.5"><g filter="url(#filter0_i_561_91253)" style="mix-blend-mode:soft-light"><path d="M256 256H200.348V216.248C200.348 207.467 207.467 200.348 216.248 200.348H256V256Z" fill="white" fill-opacity="0.3"/></g><g filter="url(#filter1_i_561_91253)" style="mix-blend-mode:soft-light"><path d="M77.9121 256H178.086V216.248C178.086 207.467 170.967 200.348 162.185 200.348H93.8127C85.0311 200.348 77.9121 207.467 77.9121 216.248V256Z" fill="white" fill-opacity="0.3"/></g><g filter="url(#filter2_i_561_91253)" style="mix-blend-mode:soft-light"><path d="M0 256H55.6522V216.248C55.6522 207.467 48.5332 200.348 39.7515 200.348H0V256Z" fill="white" fill-opacity="0.3"/></g></g><g style="mix-blend-mode:lighten" opacity="0.5"><g filter="url(#filter3_i_561_91253)" style="mix-blend-mode:soft-light"><path d="M256 77.9136H216.248C207.467 77.9136 200.348 85.0325 200.348 93.8142V162.187C200.348 170.969 207.467 178.087 216.248 178.087H256V77.9136Z" fill="white" fill-opacity="0.3"/></g><g filter="url(#filter4_i_561_91253)" style="mix-blend-mode:soft-light"><path d="M77.9121 93.8142C77.9121 85.0325 85.0311 77.9136 93.8127 77.9136H162.185C170.967 77.9136 178.086 85.0325 178.086 93.8142V162.187C178.086 170.969 170.967 178.087 162.185 178.087H93.8127C85.0311 178.087 77.9121 170.969 77.9121 162.187V93.8142Z" fill="white" fill-opacity="0.3"/></g><g filter="url(#filter5_i_561_91253)" style="mix-blend-mode:soft-light"><path d="M0 77.9136H39.7516C48.5332 77.9136 55.6522 85.0325 55.6522 93.8142V162.187C55.6522 170.969 48.5332 178.087 39.7515 178.087H0V77.9136Z" fill="white" fill-opacity="0.3"/></g></g><g style="mix-blend-mode:lighten" opacity="0.5"><g filter="url(#filter6_i_561_91253)" style="mix-blend-mode:soft-light"><path d="M256 0H200.348V39.7516C200.348 48.5332 207.467 55.6522 216.248 55.6522H256V0Z" fill="white" fill-opacity="0.3"/></g><g filter="url(#filter7_i_561_91253)" style="mix-blend-mode:soft-light"><path d="M77.9121 0H178.086V39.7516C178.086 48.5332 170.967 55.6522 162.185 55.6522H93.8127C85.0311 55.6522 77.9121 48.5332 77.9121 39.7515V0Z" fill="white" fill-opacity="0.3"/></g><g filter="url(#filter8_i_561_91253)" style="mix-blend-mode:soft-light"><path d="M0 0H55.6522V39.7516C55.6522 48.5332 48.5332 55.6522 39.7515 55.6522H0V0Z" fill="white" fill-opacity="0.3"/></g></g></g><defs><filter id="filter0_i_561_91253" x="200.348" y="200.348" width="55.6523" height="58.8325" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="3.18012"/><feGaussianBlur stdDeviation="1.59006"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_561_91253"/></filter><filter id="filter1_i_561_91253" x="77.9121" y="200.348" width="100.174" height="58.8325" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="3.18012"/><feGaussianBlur stdDeviation="1.59006"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_561_91253"/></filter><filter id="filter2_i_561_91253" x="0" y="200.348" width="55.6523" height="58.8325" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="3.18012"/><feGaussianBlur stdDeviation="1.59006"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_561_91253"/></filter><filter id="filter3_i_561_91253" x="200.348" y="77.9136" width="55.6523" height="103.354" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="3.18012"/><feGaussianBlur stdDeviation="1.59006"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_561_91253"/></filter><filter id="filter4_i_561_91253" x="77.9121" y="77.9136" width="100.174" height="103.354" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="3.18012"/><feGaussianBlur stdDeviation="1.59006"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_561_91253"/></filter><filter id="filter5_i_561_91253" x="0" y="77.9136" width="55.6523" height="103.354" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="3.18012"/><feGaussianBlur stdDeviation="1.59006"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_561_91253"/></filter><filter id="filter6_i_561_91253" x="200.348" y="0" width="55.6523" height="58.8325" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="3.18012"/><feGaussianBlur stdDeviation="1.59006"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_561_91253"/></filter><filter id="filter7_i_561_91253" x="77.9121" y="0" width="100.174" height="58.8325" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="3.18012"/><feGaussianBlur stdDeviation="1.59006"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_561_91253"/></filter><filter id="filter8_i_561_91253" x="0" y="0" width="55.6523" height="58.8325" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="3.18012"/><feGaussianBlur stdDeviation="1.59006"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_561_91253"/></filter><linearGradient id="paint0_linear_561_91253" x1="128" y1="0" x2="128" y2="256" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB889"/><stop offset="1" stop-color="#F79847"/></linearGradient><clipPath id="clip0_561_91253"><rect width="256" height="256" fill="white"/></clipPath></defs></svg>`
};

// Dynamic generic icon SVG templates are loaded from icon-templates.js
// Keeping them outside the main script makes the app logic easier to read
const genericSvgTemplates = window.iconSvgTemplates || {};

// Dock Icons SVG
// Dock Icon SVG templates are loaded from dock-icons.js
// Keeping them outside the main script makes the app logic easier to read while preserving editable SVG templates
const dockSvgTemplates = window.dockSvgTemplates || {};

// Background SVG templates are loaded from background-templates.js
const backgroundSvgTemplates = window.backgroundSvgTemplates || {};

const BACKGROUND_DEFAULT_PRESET = Object.freeze({ top: '#EFEFF2', bottom: '#CFCFDB' });
const BACKGROUND_DARK_PRESET = Object.freeze({ top: '#2A2A2A', bottom: '#1E1E1E' });
const BACKGROUND_DESIGN_SIZE = Object.freeze({ width: 1920, height: 1080 });
const BACKGROUND_PREVIEW_SIZE = Object.freeze({ width: 1280, height: 720 });
const BACKGROUND_EXTERNAL_SIZE = Object.freeze({ width: 1240, height: 1080 });
const BACKGROUND_EXTERNAL_VARIANT_LABELS = Object.freeze({
    margin: 'Margin',
    full: 'No Margin',
    gradient: 'Gradient only'
});
const BACKGROUND_EXTERNAL_DOCK_POSITION_LABELS = Object.freeze({
    top: 'Top',
    bottom: 'Bottom'
});
const BACKGROUND_EXTERNAL_THEME_LABELS = Object.freeze({
    light: 'Light Theme',
    dark: 'Dark Theme'
});
const BACKGROUND_EXTERNAL_THEME_COLORS = Object.freeze({
    light: Object.freeze({
        backgroundTop: '#EFEFF2',
        backgroundBottom: '#CFCFDB'
    }),
    dark: Object.freeze({
        backgroundTop: '#2A2A2A',
        backgroundBottom: '#1E1E1E'
    })
});
const BACKGROUND_EXTERNAL_SVG_TEMPLATES = Object.freeze({
    light: Object.freeze({
        margin: "<svg width=\"1240\" height=\"1080\" viewBox=\"0 0 1240 1080\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_2945_183)\">\n<rect width=\"1240\" height=\"1080\" fill=\"url(#paint0_linear_2945_183)\"/>\n<g filter=\"url(#filter0_di_2945_183)\">\n<rect x=\"20\" y=\"188\" width=\"1200\" height=\"872\" rx=\"40\" fill=\"url(#paint1_linear_2945_183)\"/>\n</g>\n</g>\n<defs>\n<filter id=\"filter0_di_2945_183\" x=\"8\" y=\"180\" width=\"1224\" height=\"896\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"4\"/>\n<feGaussianBlur stdDeviation=\"6\"/>\n<feComposite in2=\"hardAlpha\" operator=\"out\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0\"/>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_2945_183\"/>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_2945_183\" result=\"shape\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"-4\"/>\n<feGaussianBlur stdDeviation=\"4\"/>\n<feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0\"/>\n<feBlend mode=\"normal\" in2=\"shape\" result=\"effect2_innerShadow_2945_183\"/>\n</filter>\n<linearGradient id=\"paint0_linear_2945_183\" x1=\"620\" y1=\"0\" x2=\"620\" y2=\"1080\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#EFEFF2\"/>\n<stop offset=\"1\" stop-color=\"#CFCFDB\"/>\n</linearGradient>\n<linearGradient id=\"paint1_linear_2945_183\" x1=\"620\" y1=\"-483.43\" x2=\"620\" y2=\"1060\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#F8F8F8\"/>\n<stop offset=\"1\" stop-color=\"#E9EDF1\"/>\n</linearGradient>\n<clipPath id=\"clip0_2945_183\">\n<rect width=\"1240\" height=\"1080\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>\n",
        full: "<svg width=\"1240\" height=\"1080\" viewBox=\"0 0 1240 1080\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_2945_201)\">\n<rect width=\"1240\" height=\"1080\" fill=\"url(#paint0_linear_2945_201)\"/>\n<g filter=\"url(#filter0_di_2945_201)\">\n<rect y=\"188\" width=\"1240\" height=\"872\" fill=\"url(#paint1_linear_2945_201)\"/>\n</g>\n</g>\n<defs>\n<filter id=\"filter0_di_2945_201\" x=\"-12\" y=\"180\" width=\"1264\" height=\"896\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"4\"/>\n<feGaussianBlur stdDeviation=\"6\"/>\n<feComposite in2=\"hardAlpha\" operator=\"out\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0\"/>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_2945_201\"/>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_2945_201\" result=\"shape\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"-4\"/>\n<feGaussianBlur stdDeviation=\"4\"/>\n<feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0\"/>\n<feBlend mode=\"normal\" in2=\"shape\" result=\"effect2_innerShadow_2945_201\"/>\n</filter>\n<linearGradient id=\"paint0_linear_2945_201\" x1=\"620\" y1=\"0\" x2=\"620\" y2=\"1080\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#EFEFF2\"/>\n<stop offset=\"1\" stop-color=\"#CFCFDB\"/>\n</linearGradient>\n<linearGradient id=\"paint1_linear_2945_201\" x1=\"620\" y1=\"-483.43\" x2=\"620\" y2=\"1060\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#F8F8F8\"/>\n<stop offset=\"1\" stop-color=\"#E9EDF1\"/>\n</linearGradient>\n<clipPath id=\"clip0_2945_201\">\n<rect width=\"1240\" height=\"1080\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>\n"
    }),
    dark: Object.freeze({
        margin: "<svg width=\"1240\" height=\"1080\" viewBox=\"0 0 1240 1080\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_2945_175)\">\n<rect width=\"1240\" height=\"1080\" fill=\"url(#paint0_linear_2945_175)\"/>\n<g filter=\"url(#filter0_di_2945_175)\">\n<rect x=\"20\" y=\"188\" width=\"1200\" height=\"872\" rx=\"40\" fill=\"url(#paint1_linear_2945_175)\"/>\n</g>\n</g>\n<defs>\n<filter id=\"filter0_di_2945_175\" x=\"8\" y=\"180\" width=\"1224\" height=\"896\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"4\"/>\n<feGaussianBlur stdDeviation=\"6\"/>\n<feComposite in2=\"hardAlpha\" operator=\"out\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.105882 0 0 0 0 0.105882 0 0 0 0 0.105882 0 0 0 0.15 0\"/>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_2945_175\"/>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_2945_175\" result=\"shape\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"-8\"/>\n<feGaussianBlur stdDeviation=\"4\"/>\n<feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.075 0\"/>\n<feBlend mode=\"normal\" in2=\"shape\" result=\"effect2_innerShadow_2945_175\"/>\n</filter>\n<linearGradient id=\"paint0_linear_2945_175\" x1=\"620\" y1=\"0\" x2=\"620\" y2=\"1080\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#2A2A2A\"/>\n<stop offset=\"1\" stop-color=\"#1E1E1E\"/>\n</linearGradient>\n<linearGradient id=\"paint1_linear_2945_175\" x1=\"620\" y1=\"-483.43\" x2=\"620\" y2=\"1060\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#424242\"/>\n<stop offset=\"1\" stop-color=\"#282828\"/>\n</linearGradient>\n<clipPath id=\"clip0_2945_175\">\n<rect width=\"1240\" height=\"1080\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>\n",
        full: "<svg width=\"1240\" height=\"1080\" viewBox=\"0 0 1240 1080\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_2945_204)\">\n<rect width=\"1240\" height=\"1080\" fill=\"url(#paint0_linear_2945_204)\"/>\n<g filter=\"url(#filter0_di_2945_204)\">\n<rect y=\"188\" width=\"1240\" height=\"872\" fill=\"url(#paint1_linear_2945_204)\"/>\n</g>\n</g>\n<defs>\n<filter id=\"filter0_di_2945_204\" x=\"-12\" y=\"180\" width=\"1264\" height=\"896\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"4\"/>\n<feGaussianBlur stdDeviation=\"6\"/>\n<feComposite in2=\"hardAlpha\" operator=\"out\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.105882 0 0 0 0 0.105882 0 0 0 0 0.105882 0 0 0 0.15 0\"/>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_2945_204\"/>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_2945_204\" result=\"shape\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"-8\"/>\n<feGaussianBlur stdDeviation=\"4\"/>\n<feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.075 0\"/>\n<feBlend mode=\"normal\" in2=\"shape\" result=\"effect2_innerShadow_2945_204\"/>\n</filter>\n<linearGradient id=\"paint0_linear_2945_204\" x1=\"620\" y1=\"0\" x2=\"620\" y2=\"1080\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#2A2A2A\"/>\n<stop offset=\"1\" stop-color=\"#1E1E1E\"/>\n</linearGradient>\n<linearGradient id=\"paint1_linear_2945_204\" x1=\"620\" y1=\"-483.43\" x2=\"620\" y2=\"1060\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#424242\"/>\n<stop offset=\"1\" stop-color=\"#282828\"/>\n</linearGradient>\n<clipPath id=\"clip0_2945_204\">\n<rect width=\"1240\" height=\"1080\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>\n"
    })
});
const BACKGROUND_EXTERNAL_DOCK_BOTTOM_SVG_TEMPLATES = Object.freeze({
    light: Object.freeze({
        margin: "<svg width=\"1240\" height=\"1080\" viewBox=\"0 0 1240 1080\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_2949_226)\">\n<rect width=\"1240\" height=\"1080\" transform=\"matrix(1 0 0 -1 0 1080)\" fill=\"url(#paint0_linear_2949_226)\"/>\n<g filter=\"url(#filter0_di_2949_226)\">\n<rect x=\"20\" y=\"20\" width=\"1200\" height=\"872\" rx=\"40\" fill=\"url(#paint1_linear_2949_226)\"/>\n</g>\n</g>\n<defs>\n<filter id=\"filter0_di_2949_226\" x=\"8\" y=\"12\" width=\"1224\" height=\"896\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"4\"/>\n<feGaussianBlur stdDeviation=\"6\"/>\n<feComposite in2=\"hardAlpha\" operator=\"out\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0\"/>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_2949_226\"/>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_2949_226\" result=\"shape\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"-4\"/>\n<feGaussianBlur stdDeviation=\"4\"/>\n<feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0\"/>\n<feBlend mode=\"normal\" in2=\"shape\" result=\"effect2_innerShadow_2949_226\"/>\n</filter>\n<linearGradient id=\"paint0_linear_2949_226\" x1=\"620\" y1=\"0\" x2=\"620\" y2=\"1080\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#EFEFF2\"/>\n<stop offset=\"1\" stop-color=\"#CFCFDB\"/>\n</linearGradient>\n<linearGradient id=\"paint1_linear_2949_226\" x1=\"620\" y1=\"-651.43\" x2=\"620\" y2=\"892\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#F8F8F8\"/>\n<stop offset=\"1\" stop-color=\"#E9EDF1\"/>\n</linearGradient>\n<clipPath id=\"clip0_2949_226\">\n<rect width=\"1240\" height=\"1080\" fill=\"white\" transform=\"matrix(1 0 0 -1 0 1080)\"/>\n</clipPath>\n</defs>\n</svg>\n",
        full: "<svg width=\"1240\" height=\"1080\" viewBox=\"0 0 1240 1080\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_2949_229)\">\n<rect width=\"1240\" height=\"1080\" transform=\"matrix(1 0 0 -1 0 1080)\" fill=\"url(#paint0_linear_2949_229)\"/>\n<g filter=\"url(#filter0_di_2949_229)\">\n<rect y=\"20\" width=\"1240\" height=\"872\" fill=\"url(#paint1_linear_2949_229)\"/>\n</g>\n</g>\n<defs>\n<filter id=\"filter0_di_2949_229\" x=\"-12\" y=\"12\" width=\"1264\" height=\"896\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"4\"/>\n<feGaussianBlur stdDeviation=\"6\"/>\n<feComposite in2=\"hardAlpha\" operator=\"out\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0\"/>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_2949_229\"/>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_2949_229\" result=\"shape\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"-4\"/>\n<feGaussianBlur stdDeviation=\"4\"/>\n<feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0\"/>\n<feBlend mode=\"normal\" in2=\"shape\" result=\"effect2_innerShadow_2949_229\"/>\n</filter>\n<linearGradient id=\"paint0_linear_2949_229\" x1=\"620\" y1=\"0\" x2=\"620\" y2=\"1080\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#EFEFF2\"/>\n<stop offset=\"1\" stop-color=\"#CFCFDB\"/>\n</linearGradient>\n<linearGradient id=\"paint1_linear_2949_229\" x1=\"620\" y1=\"-651.43\" x2=\"620\" y2=\"892\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#F8F8F8\"/>\n<stop offset=\"1\" stop-color=\"#E9EDF1\"/>\n</linearGradient>\n<clipPath id=\"clip0_2949_229\">\n<rect width=\"1240\" height=\"1080\" fill=\"white\" transform=\"matrix(1 0 0 -1 0 1080)\"/>\n</clipPath>\n</defs>\n</svg>\n"
    }),
    dark: Object.freeze({
        margin: "<svg width=\"1240\" height=\"1080\" viewBox=\"0 0 1240 1080\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_2949_226)\">\n<rect width=\"1240\" height=\"1080\" transform=\"matrix(1 0 0 -1 0 1080)\" fill=\"url(#paint0_linear_2949_226)\"/>\n<g filter=\"url(#filter0_di_2949_226)\">\n<rect x=\"20\" y=\"20\" width=\"1200\" height=\"872\" rx=\"40\" fill=\"url(#paint1_linear_2949_226)\"/>\n</g>\n</g>\n<defs>\n<filter id=\"filter0_di_2949_226\" x=\"8\" y=\"12\" width=\"1224\" height=\"896\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"4\"/>\n<feGaussianBlur stdDeviation=\"6\"/>\n<feComposite in2=\"hardAlpha\" operator=\"out\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0\"/>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_2949_226\"/>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_2949_226\" result=\"shape\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"-4\"/>\n<feGaussianBlur stdDeviation=\"4\"/>\n<feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0\"/>\n<feBlend mode=\"normal\" in2=\"shape\" result=\"effect2_innerShadow_2949_226\"/>\n</filter>\n<linearGradient id=\"paint0_linear_2949_226\" x1=\"620\" y1=\"0\" x2=\"620\" y2=\"1080\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#EFEFF2\"/>\n<stop offset=\"1\" stop-color=\"#CFCFDB\"/>\n</linearGradient>\n<linearGradient id=\"paint1_linear_2949_226\" x1=\"620\" y1=\"-651.43\" x2=\"620\" y2=\"892\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#F8F8F8\"/>\n<stop offset=\"1\" stop-color=\"#E9EDF1\"/>\n</linearGradient>\n<clipPath id=\"clip0_2949_226\">\n<rect width=\"1240\" height=\"1080\" fill=\"white\" transform=\"matrix(1 0 0 -1 0 1080)\"/>\n</clipPath>\n</defs>\n</svg>\n",
        full: "<svg width=\"1240\" height=\"1080\" viewBox=\"0 0 1240 1080\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_2949_229)\">\n<rect width=\"1240\" height=\"1080\" transform=\"matrix(1 0 0 -1 0 1080)\" fill=\"url(#paint0_linear_2949_229)\"/>\n<g filter=\"url(#filter0_di_2949_229)\">\n<rect y=\"20\" width=\"1240\" height=\"872\" fill=\"url(#paint1_linear_2949_229)\"/>\n</g>\n</g>\n<defs>\n<filter id=\"filter0_di_2949_229\" x=\"-12\" y=\"12\" width=\"1264\" height=\"896\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"4\"/>\n<feGaussianBlur stdDeviation=\"6\"/>\n<feComposite in2=\"hardAlpha\" operator=\"out\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0\"/>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_2949_229\"/>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_2949_229\" result=\"shape\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dy=\"-4\"/>\n<feGaussianBlur stdDeviation=\"4\"/>\n<feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0\"/>\n<feBlend mode=\"normal\" in2=\"shape\" result=\"effect2_innerShadow_2949_229\"/>\n</filter>\n<linearGradient id=\"paint0_linear_2949_229\" x1=\"620\" y1=\"0\" x2=\"620\" y2=\"1080\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#EFEFF2\"/>\n<stop offset=\"1\" stop-color=\"#CFCFDB\"/>\n</linearGradient>\n<linearGradient id=\"paint1_linear_2949_229\" x1=\"620\" y1=\"-651.43\" x2=\"620\" y2=\"892\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#F8F8F8\"/>\n<stop offset=\"1\" stop-color=\"#E9EDF1\"/>\n</linearGradient>\n<clipPath id=\"clip0_2949_229\">\n<rect width=\"1240\" height=\"1080\" fill=\"white\" transform=\"matrix(1 0 0 -1 0 1080)\"/>\n</clipPath>\n</defs>\n</svg>\n"
    })
});
const BACKGROUND_WEBM_SETTINGS = Object.freeze({
    width: 1920,
    height: 1080,
    fps: 30,
    durationMs: 8000,
    videoBitsPerSecond: 16_000_000,
    fileName: 'Cocoon_Background.webm'
});
const BACKGROUND_MP4_SETTINGS = Object.freeze({
    width: 1920,
    height: 1080,
    fps: 30,
    durationMs: 8000,
    fileName: 'Cocoon_Background.mp4'
});
const BACKGROUND_OVERLAY_DEFAULTS = Object.freeze({ scale: 50, x: 0, y: 0, rot: 0 });
const BACKGROUND_ANIMATION_LABELS = Object.freeze({
    drift: 'Tile Drift',
    ripple: 'Ripple',
    echo: 'Tile Echo',
    tapEcho: 'Tap Echo',
    swap: 'Vertical Swap',
    swapDrift: 'Diagonal Column Flow',
    diagonalColumnFlowContinuous: 'Diagonal Column Flow Continuous',
    diagonalColumnFlowVariable: 'Diagonal Column Flow Variable Speed'
});
const FFMPEG_WASM_SOURCES = Object.freeze({
    local: Object.freeze({
        label: 'local',
        ffmpeg: 'vendor/ffmpeg/ffmpeg.js',
        coreJs: 'vendor/ffmpeg/ffmpeg-core.js',
        coreWasm: 'vendor/ffmpeg/ffmpeg-core.wasm',
        useBlobUrls: true
    }),
    cdn: Object.freeze({
        label: 'cdn',
        ffmpeg: 'https://unpkg.com/@ffmpeg/ffmpeg@0.12.10/dist/umd/ffmpeg.js',
        coreJs: 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.js',
        coreWasm: 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.wasm',
        useBlobUrls: true
    })
});


// --- APP STATE ---
// Defaults define the initial UI state and the values used by Reset

const DEFAULTS = Object.freeze({
    colors: Object.freeze({ top: '#FEC2A1', bottom: '#F58422' }),
    icon: Object.freeze({ scale: 50, x: 0, y: 8, rot: 0 }),
    folderRot: 0,
    style: 'border',
    tab: 'platforms',
    mode: 'generator'
});

// Mutable state for the whole editor. Keeping it centralized makes mode/tab interactions predictable
const state = {
    mode: DEFAULTS.mode,
    activeTab: DEFAULTS.tab,
    selectedIcons: new Set(),
    customIconCounter: 0,
    assets: {
        globalSvgImg: null,
        globalFolderDataUrl: null,
        customBgDataUrl: null,
        backgroundOverlayDataUrl: null,
        backgroundOverlayImage: null,
        backgroundOverlayFileName: '',
        dynamicGenericUrls: {},
        dynamicDockUrls: {},
        backgroundPreviewUrl: null,
        backgroundPreviewImage: null,
        backgroundPreviewFrame: null,
        backgroundPreviewRenderId: 0,
        backgroundExternalPreviewImage: null,
        backgroundExternalPreviewKey: '',
        backgroundExternalFolderPreviewImage: null,
        backgroundExternalFolderPreviewKey: '',
        ffmpegLoadPromise: null,
        ffmpegInstance: null,
        ffmpegBlobUrls: [],
        ffmpegSource: null
    },
    missingAssets: new Set(),
    autoColor: {
        enabled: false,
        cardImages: {}
    },
    brandColors: {
        apps: true,
        dock: true
    },
    defaultStyle: {
        apps: true
    },
    generatorStyle: DEFAULTS.style,
    folderPreviewPalette: { ...DEFAULTS.colors },
    backgroundExportFormat: 'png',
    backgroundVideoDurationMs: BACKGROUND_WEBM_SETTINGS.durationMs,
    backgroundAnimation: 'drift',
    backgroundScreen: 'main',
    backgroundExternalTheme: 'light',
    backgroundExternalVariant: 'margin',
    backgroundExternalDockPosition: 'top',
    backgroundExternalPanelCustomTop: '#F8F8F8',
    backgroundExternalPanelCustomBottom: '#E9EDF1',
    backgroundExternalPanelOpacity: 100,
    backgroundExternalShowFolders: false,
    temporaryScale: {
        active: false,
        previous: null,
        value: 75
    }
};

// --- DOM CACHE ---
// DOM references are cached once to avoid repeated querySelector calls throughout UI updates

const els = {
    grid: document.getElementById('icon-grid'),
    countDisplay: document.getElementById('selection-count'),
    downloadBtn: document.getElementById('download-btn'),
    tabBtns: document.querySelectorAll('.tab-btn[data-tab]'),
    mainTabBtns: document.querySelectorAll('.main-tab-btn'),
    dashboard: document.querySelector('.dashboard'),
    styleSelect: document.getElementById('global-style'),
    customUploadBtn: document.getElementById('custom-upload-btn'),
    customBgUpload: document.getElementById('custom-bg-upload'),
    iconUploadInput: document.getElementById('icon-upload-input'),
    autoColorBtn: document.getElementById('auto-color-btn'),
    resetColorBtn: document.getElementById('reset-color-btn'),
    resetPositionBtn: document.getElementById('reset-position-btn'),
    randomColorBtn: document.getElementById('random-color-btn'),
    colorTop: document.getElementById('color-top'),
    colorBottom: document.getElementById('color-bottom'),
    colorTopValue: document.getElementById('color-top-value'),
    colorBottomValue: document.getElementById('color-bottom-value'),
    presetBtns: document.querySelectorAll('.preset-btn'),
    styleOptionBtns: document.querySelectorAll('.style-option-btn'),
    tiltOptionBtns: document.querySelectorAll('.tilt-option-btn'),
    scaleSlider: document.getElementById('slider-scale'),
    xSlider: document.getElementById('slider-x'),
    ySlider: document.getElementById('slider-y'),
    rotSlider: document.getElementById('slider-rot'),
    folderTilt: document.getElementById('folder-tilt'),
    folderStyleRow: document.getElementById('style-control-row') || document.getElementById('global-style')?.parentElement,
    folderTiltRow: document.getElementById('tilt-control-row') || document.getElementById('folder-tilt')?.parentElement,
    appearanceTitle: document.getElementById('appearance-title'),
    dockNote: document.getElementById('dock-note'),
    backgroundNote: document.getElementById('background-note'),
    adjustmentsTitle: document.getElementById('adjustments-title'),
    iconControlsGroup: document.getElementById('icon-controls-group') || document.querySelectorAll('.control-group')[1],
    subTabsContainer: document.getElementById('sub-tabs') || document.querySelectorAll('.tabs')[1],
    backgroundPanel: document.getElementById('background-panel'),
    backgroundPreviewImage: document.getElementById('background-preview-image'),
    backgroundPreviewCanvas: document.getElementById('background-preview-canvas'),
    backgroundOriginalPresetBtn: document.getElementById('background-original-preset-btn'),
    backgroundExportBtns: document.querySelectorAll('.background-export-btn[data-export-format]'),
    backgroundScreenTabs: document.getElementById('background-screen-tabs'),
    backgroundScreenBtns: document.querySelectorAll('.background-screen-btn[data-background-screen]'),
    backgroundExternalThemeGroup: document.getElementById('background-external-theme-group'),
    backgroundExternalThemeBtns: document.querySelectorAll('.background-external-theme-btn[data-external-theme]'),
    backgroundExternalVariantGroup: document.getElementById('background-external-variant-group'),
    backgroundExternalVariantBtns: document.querySelectorAll('.background-external-variant-btn[data-external-variant]'),
    backgroundExternalDockGroup: document.getElementById('background-external-dock-group'),
    backgroundExternalDockBtns: document.querySelectorAll('.background-external-dock-btn[data-external-dock-position]'),
    backgroundExternalPreviewGroup: document.getElementById('background-external-preview-group'),
    backgroundExternalShowFolders: document.getElementById('background-external-show-folders'),
    backgroundExternalSettingsPanel: document.getElementById('background-external-settings-panel'),
    backgroundExternalPanelGroup: document.getElementById('background-external-panel-group'),
    backgroundExternalPanelCustom: document.getElementById('background-external-panel-custom'),
    backgroundExternalPanelTop: document.getElementById('background-external-panel-top'),
    backgroundExternalPanelBottom: document.getElementById('background-external-panel-bottom'),
    backgroundExternalPanelTopValue: document.getElementById('background-external-panel-top-value'),
    backgroundExternalPanelBottomValue: document.getElementById('background-external-panel-bottom-value'),
    backgroundExternalPanelOpacityGroup: document.getElementById('background-external-panel-opacity-group'),
    backgroundExternalPanelOpacity: document.getElementById('background-external-panel-opacity'),
    backgroundExternalPanelOpacityValue: document.getElementById('background-external-panel-opacity-value'),
    backgroundExternalPanelResetBtn: document.getElementById('background-external-panel-reset-btn'),
    backgroundExternalPanelMatchBtn: document.getElementById('background-external-panel-match-btn'),
    backgroundExportHelp: document.getElementById('background-export-help'),
    backgroundMetaDetail: document.getElementById('background-meta-detail'),
    backgroundInlineControls: document.getElementById('background-inline-controls'),
    backgroundAnimationGroup: document.getElementById('background-animation-group'),
    backgroundAnimationSelect: document.getElementById('background-animation-select'),
    backgroundOverlayGroup: document.getElementById('background-overlay-group'),
    backgroundOverlayUploadBtn: document.getElementById('background-overlay-upload-btn'),
    backgroundOverlayUpload: document.getElementById('background-overlay-upload'),
    backgroundOverlayResetBtn: document.getElementById('background-overlay-reset-btn'),
    backgroundOverlayRemoveBtn: document.getElementById('background-overlay-remove-btn'),
    backgroundOverlayNote: document.getElementById('background-overlay-note'),
    backgroundOverlayScale: document.getElementById('background-overlay-scale'),
    backgroundOverlayX: document.getElementById('background-overlay-x'),
    backgroundOverlayY: document.getElementById('background-overlay-y'),
    backgroundOverlayRot: document.getElementById('background-overlay-rot'),
    backgroundOverlayScaleValue: document.getElementById('background-overlay-scale-value'),
    backgroundOverlayXValue: document.getElementById('background-overlay-x-value'),
    backgroundOverlayYValue: document.getElementById('background-overlay-y-value'),
    backgroundOverlayRotValue: document.getElementById('background-overlay-rot-value'),
    backgroundVideoGroup: document.getElementById('background-video-group'),
    backgroundDurationSlider: document.getElementById('background-duration-slider'),
    backgroundDurationValue: document.getElementById('background-duration-value')
};

function setDownloadButtonLoading(label) {
    if (!els.downloadBtn) return;
    els.downloadBtn.classList.add('is-loading');
    els.downloadBtn.textContent = label;
}

function clearDownloadButtonLoading() {
    if (!els.downloadBtn) return;
    els.downloadBtn.classList.remove('is-loading');
}

// --- SMALL UTILITIES ---
// Escape user-facing names before injecting them into card markup
function escapeHtml(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

// Read the current manual Top/Bottom colors from the UI controls
function getPalette() {
    return {
        top: els.colorTop.value,
        bottom: els.colorBottom.value
    };
}

// Normalize hex strings for reliable preset comparisons
function normalizeHex(value) {
    return String(value || '').toUpperCase();
}

// Return true when the current view still uses per-app brand palettes
function isBrandColorContextActive() {
    return (state.mode === 'dock' && state.brandColors.dock)
        || (state.mode === 'generator' && state.activeTab === 'apps' && state.brandColors.apps);
}

// Decide whether a specific icon should use its brand palette instead of the manual palette
function shouldUseBrandPaletteForIcon(icon) {
    if (!icon?.brandPalette) return false;
    if (icon.tab === 'dock') return state.brandColors.dock;
    if (icon.tab === 'apps') return state.brandColors.apps;
    return false;
}

// Apps use fixed-color PNG assets on branded Pods, so Auto Color must stay unavailable there
function isAppsTabContext() {
    return state.mode === 'generator' && state.activeTab === 'apps';
}

// Custom backgrounds are user-provided images, so Auto Color cannot safely recolor them
function isCustomStyleContext() {
    return els.styleSelect.value === 'custom';
}

// Disable the Auto button in contexts where recoloring is intentionally unavailable
function isAutoColorDisabledContext() {
    return state.mode === 'background' || isAppsTabContext() || isCustomStyleContext();
}

// Keep the Auto button state aligned with Apps and Custom style contexts
function syncAutoColorButtonState() {
    if (!els.autoColorBtn) return;

    const disabled = isAutoColorDisabledContext();
    els.autoColorBtn.disabled = disabled;
    els.autoColorBtn.setAttribute('aria-disabled', String(disabled));
    els.autoColorBtn.title = disabled
        ? 'Auto color is disabled for Apps and Custom backgrounds.'
        : '';
    els.autoColorBtn.style.opacity = disabled ? '0.45' : '';
    els.autoColorBtn.style.cursor = disabled ? 'not-allowed' : '';
}

// Resolve the final palette for a specific icon in the current context
function getEffectivePaletteForIcon(icon) {
    return shouldUseBrandPaletteForIcon(icon) ? icon.brandPalette : getPalette();
}

// Resolve the final background style. Apps default to Pods until the user changes style manually
function getEffectiveStyleForIcon(icon, fallbackStyle = els.styleSelect.value) {
    if (icon?.tab === 'apps' && state.defaultStyle.apps && icon.defaultStyle) {
        return icon.defaultStyle;
    }

    return fallbackStyle;
}

// Update color labels, preset active states, and controls that depend on color context
function syncPaletteControls() {
    const top = normalizeHex(els.colorTop.value);
    const bottom = normalizeHex(els.colorBottom.value);
    const allowPresetHighlight = !isBrandColorContextActive();

    if (els.colorTopValue) els.colorTopValue.textContent = top;
    if (els.colorBottomValue) els.colorBottomValue.textContent = bottom;

    els.presetBtns.forEach(button => {
        const isActive = allowPresetHighlight
            && normalizeHex(button.dataset.c1) === top
            && normalizeHex(button.dataset.c2) === bottom;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });

    if (els.backgroundOriginalPresetBtn) {
        const isOriginal = state.mode === 'background'
            && normalizeHex(BACKGROUND_DEFAULT_PRESET.top) === top
            && normalizeHex(BACKGROUND_DEFAULT_PRESET.bottom) === bottom;
        els.backgroundOriginalPresetBtn.classList.toggle('active', isOriginal);
        els.backgroundOriginalPresetBtn.setAttribute('aria-pressed', String(isOriginal));
    }

    syncBackgroundExportControls();
    syncAutoColorButtonState();
}

// Mirror hidden select values onto the visible Shape and Folder angle buttons
function syncChoiceButtons() {
    els.styleOptionBtns.forEach(button => {
        const isActive = button.dataset.style === els.styleSelect.value;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });

    els.tiltOptionBtns.forEach(button => {
        const isActive = button.dataset.tilt === els.folderTilt.value;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
        button.disabled = els.folderTilt.disabled;
    });
}

// Write a CSS custom property used by live previews
function setCssVar(name, value) {
    document.documentElement.style.setProperty(name, value);
}

// Release generated Blob URLs to avoid memory leaks after regenerating SVG assets
function revokeBlobUrls(urlMap) {
    Object.values(urlMap).forEach(url => {
        if (typeof url === 'string' && url.startsWith('blob:')) {
            URL.revokeObjectURL(url);
        }
    });
}

// Create an object URL for a dynamic SVG so it can be used as an image source
function createSvgBlobUrl(svgString) {
    return URL.createObjectURL(new Blob([svgString], { type: 'image/svg+xml' }));
}

// Create a data URL for a dynamic SVG, mostly used for background-image values and export
function createSvgDataUrl(svgString) {
    return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgString)))}`;
}

// Return a filename without its extension for uploaded custom icons


// Return the editable wallpaper template, falling back to the first registered background template
function getBackgroundTemplate() {
    return backgroundSvgTemplates.cocoonTiles || Object.values(backgroundSvgTemplates)[0] || '';
}

function getBackgroundVideoDurationMs() {
    return Math.max(1000, Number(state.backgroundVideoDurationMs) || BACKGROUND_WEBM_SETTINGS.durationMs);
}

function getBackgroundVideoDurationSeconds() {
    return Math.round(getBackgroundVideoDurationMs() / 1000);
}

function getBackgroundWebmSettings() {
    return { ...BACKGROUND_WEBM_SETTINGS, durationMs: getBackgroundVideoDurationMs() };
}

function getBackgroundMp4Settings() {
    return { ...BACKGROUND_MP4_SETTINGS, durationMs: getBackgroundVideoDurationMs() };
}

function getBackgroundAnimation() {
    return BACKGROUND_ANIMATION_LABELS[state.backgroundAnimation]
        ? state.backgroundAnimation
        : 'drift';
}

function getBackgroundAnimationLabel() {
    return BACKGROUND_ANIMATION_LABELS[getBackgroundAnimation()] || BACKGROUND_ANIMATION_LABELS.drift;
}

function getBackgroundScreen() {
    return state.backgroundScreen === 'external' ? 'external' : 'main';
}

function isBackgroundExternalScreen() {
    return state.mode === 'background' && getBackgroundScreen() === 'external';
}

function getBackgroundExternalVariant() {
    return BACKGROUND_EXTERNAL_VARIANT_LABELS[state.backgroundExternalVariant]
        ? state.backgroundExternalVariant
        : 'margin';
}

function getBackgroundExternalVariantLabel() {
    return BACKGROUND_EXTERNAL_VARIANT_LABELS[getBackgroundExternalVariant()] || BACKGROUND_EXTERNAL_VARIANT_LABELS.margin;
}

function getBackgroundExternalDockPosition() {
    return state.backgroundExternalDockPosition === 'bottom' ? 'bottom' : 'top';
}

function getBackgroundExternalDockPositionLabel() {
    return BACKGROUND_EXTERNAL_DOCK_POSITION_LABELS[getBackgroundExternalDockPosition()] || BACKGROUND_EXTERNAL_DOCK_POSITION_LABELS.top;
}

function getColorLuminance(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return 1;

    const channel = value => {
        const normalized = value / 255;
        return normalized <= 0.03928
            ? normalized / 12.92
            : Math.pow((normalized + 0.055) / 1.055, 2.4);
    };

    return 0.2126 * channel(rgb.r) + 0.7152 * channel(rgb.g) + 0.0722 * channel(rgb.b);
}


function getFolderPreviewPalette() {
    const palette = state.folderPreviewPalette || DEFAULTS.colors;
    return {
        top: normalizeHex(palette.top) || DEFAULTS.colors.top,
        bottom: normalizeHex(palette.bottom) || DEFAULTS.colors.bottom
    };
}

function rememberFolderPreviewPaletteFromControls() {
    if (state.mode !== 'generator' || state.activeTab === 'apps') return;

    state.folderPreviewPalette = {
        top: normalizeHex(els.colorTop.value) || DEFAULTS.colors.top,
        bottom: normalizeHex(els.colorBottom.value) || DEFAULTS.colors.bottom
    };
    state.assets.backgroundExternalFolderPreviewKey = '';
}

function getExternalPreviewFolderKey() {
    const style = els.styleSelect?.value || DEFAULTS.style;
    const palette = getFolderPreviewPalette();
    const customKey = style === 'custom' ? state.assets.customBgDataUrl || '' : '';
    return [style, palette.top, palette.bottom, customKey].join('|');
}

function syncExternalPreviewFolderImage() {
    const style = els.styleSelect?.value || DEFAULTS.style;

    if (style === 'icon_only') {
        state.assets.backgroundExternalFolderPreviewImage = null;
        state.assets.backgroundExternalFolderPreviewKey = '';
        return;
    }

    if (style === 'custom') {
        state.assets.backgroundExternalFolderPreviewImage = state.assets.globalSvgImg;
        state.assets.backgroundExternalFolderPreviewKey = getExternalPreviewFolderKey();
        return;
    }

    const key = getExternalPreviewFolderKey();
    if (state.assets.backgroundExternalFolderPreviewKey === key && state.assets.backgroundExternalFolderPreviewImage) return;

    state.assets.backgroundExternalFolderPreviewImage = null;
    state.assets.backgroundExternalFolderPreviewKey = key;

    const img = new Image();
    img.onload = () => {
        if (state.assets.backgroundExternalFolderPreviewKey !== key) return;
        state.assets.backgroundExternalFolderPreviewImage = img;
        if (isBackgroundExternalScreen() && state.backgroundExternalShowFolders) {
            drawBackgroundPreviewFrame(0);
        }
    };
    img.src = getColoredFolderDataUrl(style, getFolderPreviewPalette());
}

function isExternalDarkPalette(palette = getPalette()) {
    return getColorLuminance(palette.bottom) < 0.28;
}

function getBackgroundExternalTheme() {
    return isExternalDarkPalette() ? 'dark' : 'light';
}

function getBackgroundExternalThemeLabel() {
    if (isExternalLightPreset()) return BACKGROUND_EXTERNAL_THEME_LABELS.light;
    if (isExternalDarkPreset()) return BACKGROUND_EXTERNAL_THEME_LABELS.dark;
    return 'Custom Theme';
}

function isExternalLightPreset() {
    const palette = getPalette();
    return normalizeHex(palette.top) === normalizeHex(BACKGROUND_DEFAULT_PRESET.top)
        && normalizeHex(palette.bottom) === normalizeHex(BACKGROUND_DEFAULT_PRESET.bottom);
}

function isExternalDarkPreset() {
    const palette = getPalette();
    return normalizeHex(palette.top) === normalizeHex(BACKGROUND_DARK_PRESET.top)
        && normalizeHex(palette.bottom) === normalizeHex(BACKGROUND_DARK_PRESET.bottom);
}

function isExternalFolderBlackPreset() {
    const palette = getPalette();
    return normalizeHex(palette.top) === '#383838'
        && normalizeHex(palette.bottom) === '#2C2C2C';
}

function isExternalBlackPanelPreset() {
    return isExternalDarkPreset();
}

function getDefaultExternalPanelColors() {
    return isExternalDarkPreset()
        ? { top: '#424242', bottom: '#282828' }
        : { top: '#F8F8F8', bottom: '#E9EDF1' };
}

function setExternalPanelColors(top, bottom, { refresh = true } = {}) {
    state.backgroundExternalPanelCustomTop = normalizeHex(top) || '#F8F8F8';
    state.backgroundExternalPanelCustomBottom = normalizeHex(bottom) || '#E9EDF1';
    state.assets.backgroundExternalPreviewKey = '';

    if (refresh) {
        syncBackgroundExportControls();
        updateBackgroundPreview();
        updateActionBar();
    }
}

function getExternalPanelOpacity() {
    return Math.max(45, Math.min(100, Number(state.backgroundExternalPanelOpacity) || 100));
}

function setExternalPanelOpacity(value, { refresh = true } = {}) {
    state.backgroundExternalPanelOpacity = getClampedPanelOpacity(value);
    state.assets.backgroundExternalPreviewKey = '';

    if (refresh) {
        syncBackgroundExportControls();
        updateBackgroundPreview();
        updateActionBar();
    }
}

function getClampedPanelOpacity(value) {
    return Math.max(45, Math.min(100, Math.round(Number(value) || 100)));
}

function resetExternalPanelColorsToThemeDefault({ refresh = true } = {}) {
    const colors = getDefaultExternalPanelColors();
    state.backgroundExternalPanelOpacity = 100;
    setExternalPanelColors(colors.top, colors.bottom, { refresh });
}

function matchExternalPanelColorsToBackground({ refresh = true } = {}) {
    const palette = getPalette();
    const top = isExternalLightPreset()
        ? BACKGROUND_DEFAULT_PRESET.top
        : isExternalDarkPreset()
            ? BACKGROUND_DARK_PRESET.top
            : palette.top;
    const bottom = isExternalLightPreset()
        ? BACKGROUND_DEFAULT_PRESET.bottom
        : isExternalDarkPreset()
            ? BACKGROUND_DARK_PRESET.bottom
            : palette.bottom;

    setExternalPanelColors(
        mixHexColors(top, '#FFFFFF', 0.36),
        mixHexColors(bottom, '#FFFFFF', 0.44),
        { refresh }
    );
}

function getBackgroundPreviewSize() {
    return isBackgroundExternalScreen() ? BACKGROUND_EXTERNAL_SIZE : BACKGROUND_PREVIEW_SIZE;
}

function syncBackgroundPreviewCanvasSize() {
    const canvas = els.backgroundPreviewCanvas;
    if (!canvas) return;

    const size = getBackgroundPreviewSize();
    if (canvas.width !== size.width) canvas.width = size.width;
    if (canvas.height !== size.height) canvas.height = size.height;
    canvas.style.aspectRatio = `${size.width} / ${size.height}`;
}

function rgbToHex({ r, g, b }) {
    const toHex = value => Math.max(0, Math.min(255, Math.round(value)))
        .toString(16)
        .padStart(2, '0')
        .toUpperCase();
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function rgbToHsl({ r, g, b }) {
    const rn = r / 255;
    const gn = g / 255;
    const bn = b / 255;
    const max = Math.max(rn, gn, bn);
    const min = Math.min(rn, gn, bn);
    const delta = max - min;

    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (delta !== 0) {
        s = delta / (1 - Math.abs(2 * l - 1));
        switch (max) {
            case rn:
                h = 60 * (((gn - bn) / delta) % 6);
                break;
            case gn:
                h = 60 * (((bn - rn) / delta) + 2);
                break;
            default:
                h = 60 * (((rn - gn) / delta) + 4);
                break;
        }
    }

    if (h < 0) h += 360;

    return { h, s, l };
}

function getRelativeLuminance(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return 0;

    const toLinear = channel => {
        const value = channel / 255;
        return value <= 0.03928
            ? value / 12.92
            : Math.pow((value + 0.055) / 1.055, 2.4);
    };

    const r = toLinear(rgb.r);
    const g = toLinear(rgb.g);
    const b = toLinear(rgb.b);
    return (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
}

function tintTowardPanel(baseHex, options = {}) {
    const rgb = hexToRgb(baseHex);
    if (!rgb) return baseHex;

    const { h, s, l } = rgbToHsl(rgb);
    const saturationScale = Math.max(0, Math.min(1, options.saturationScale ?? 0.4));
    const lightnessBoost = options.lightnessBoost ?? 0.2;
    const minLightness = options.minLightness ?? 0.82;
    const tintHex = options.tintHex || '#FFFFFF';
    const tintAmount = Math.max(0, Math.min(1, options.tintAmount ?? 0.12));

    const toned = hslToHex(
        h,
        Math.max(0, Math.min(100, s * 100 * saturationScale)),
        Math.max(0, Math.min(100, Math.max(minLightness * 100, (l * 100) + (lightnessBoost * 100))))
    );

    return mixHexColors(toned, tintHex, tintAmount);
}

function ensurePanelLightness(panelHex, backgroundHex, minLift = 0.14) {
    let candidate = panelHex;
    const target = Math.min(1, getRelativeLuminance(backgroundHex) + Math.max(0, minLift));
    let tries = 0;

    while (tries < 10 && getRelativeLuminance(candidate) < target) {
        candidate = mixHexColors(candidate, '#FFFFFF', 0.2);
        tries += 1;
    }

    return candidate;
}

function mixHexColors(baseHex, targetHex, amount) {
    const base = hexToRgb(baseHex);
    const target = hexToRgb(targetHex);
    if (!base || !target) return baseHex;

    const t = Math.max(0, Math.min(1, Number(amount) || 0));
    return rgbToHex({
        r: base.r + (target.r - base.r) * t,
        g: base.g + (target.g - base.g) * t,
        b: base.b + (target.b - base.b) * t
    });
}

function continueExternalBackgroundBottom(bottomHex) {
    const luminance = getRelativeLuminance(bottomHex);
    const darkenAmount = luminance > 0.55 ? 0.1 : luminance > 0.32 ? 0.08 : 0.05;
    return mixHexColors(bottomHex, '#000000', darkenAmount);
}

function getExternalContinuationMidpoint(bottomHex) {
    const luminance = getRelativeLuminance(bottomHex);
    const highlightAmount = luminance > 0.55 ? 0.09 : luminance > 0.32 ? 0.12 : 0.16;
    return mixHexColors(bottomHex, '#FFFFFF', highlightAmount);
}

function isBackgroundDefaultPalette() {
    const palette = getPalette();
    return normalizeHex(palette.top) === normalizeHex(BACKGROUND_DEFAULT_PRESET.top)
        && normalizeHex(palette.bottom) === normalizeHex(BACKGROUND_DEFAULT_PRESET.bottom);
}

function getExternalPanelLiftAmount(baseHex, isBottom = false) {
    const luminance = getRelativeLuminance(baseHex);
    const baseLift = isBottom ? 0.16 : 0.12;
    const darkLift = Math.max(0, 0.38 - luminance) * (isBottom ? 0.28 : 0.22);
    const brightReduction = Math.max(0, luminance - 0.58) * 0.16;

    return Math.max(0.08, Math.min(0.28, baseLift + darkLift - brightReduction));
}

function getExternalBackgroundColors() {
    const palette = getPalette();
    const usesExternalLightPreset = isExternalLightPreset();
    const usesExternalDarkPreset = isExternalDarkPreset();
    const backgroundTop = usesExternalLightPreset
        ? BACKGROUND_DEFAULT_PRESET.top
        : usesExternalDarkPreset
            ? BACKGROUND_DARK_PRESET.top
            : palette.bottom;
    const backgroundMid = usesExternalLightPreset
        ? mixHexColors(BACKGROUND_DEFAULT_PRESET.top, BACKGROUND_DEFAULT_PRESET.bottom, 0.45)
        : usesExternalDarkPreset
            ? mixHexColors(BACKGROUND_DARK_PRESET.top, BACKGROUND_DARK_PRESET.bottom, 0.45)
            : getExternalContinuationMidpoint(palette.bottom);
    const backgroundBottom = usesExternalLightPreset
        ? BACKGROUND_DEFAULT_PRESET.bottom
        : usesExternalDarkPreset
            ? BACKGROUND_DARK_PRESET.bottom
            : continueExternalBackgroundBottom(palette.bottom);
    const defaultPanel = getDefaultExternalPanelColors();

    return {
        backgroundTop,
        backgroundMid,
        backgroundBottom,
        blockTop: normalizeHex(state.backgroundExternalPanelCustomTop) || defaultPanel.top,
        blockBottom: normalizeHex(state.backgroundExternalPanelCustomBottom) || defaultPanel.bottom,
        blockOpacity: getExternalPanelOpacity() / 100,
        isDark: usesExternalDarkPreset
    };
}

function getExternalBackgroundSvgKey() {
    const colors = getExternalBackgroundColors();
    return [
        colors.backgroundTop,
        colors.backgroundMid,
        colors.backgroundBottom,
        colors.blockTop,
        colors.blockBottom,
        colors.isDark ? 'dark' : 'light',
        getBackgroundExternalDockPosition(),
        state.backgroundExternalPanelCustomTop,
        state.backgroundExternalPanelCustomBottom,
        getExternalPanelOpacity(),
        getBackgroundExternalVariant()
    ].join('|');
}

function getExternalGradientOnlySvg(colors) {
    return `<svg width="1240" height="1080" viewBox="0 0 1240 1080" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="1240" height="1080" fill="url(#external_gradient_only)"/><defs><linearGradient id="external_gradient_only" x1="620" y1="0" x2="620" y2="1080" gradientUnits="userSpaceOnUse"><stop stop-color="${colors.backgroundTop}"/><stop offset="0.46" stop-color="${colors.backgroundMid || colors.backgroundTop}"/><stop offset="1" stop-color="${colors.backgroundBottom}"/></linearGradient></defs></svg>`;
}

function enrichExternalBackgroundGradientSvg(svgText, colors) {
    if (!colors.backgroundMid) return svgText;

    return svgText.replace(
        /(<linearGradient id="paint0_linear_[^"]+"[\s\S]*?<stop stop-color="[^"]+"\/>)(\s*<stop offset="1" stop-color="[^"]+"\/>)/,
        `$1\n<stop offset="0.46" stop-color="${colors.backgroundMid}"/>$2`
    );
}

function adjustExternalPanelLayoutSvg(svgText) {
    return svgText;
}

function applyExternalPanelOpacitySvg(svgText, opacity) {
    const alpha = Math.max(0.45, Math.min(1, Number(opacity) || 1));
    if (alpha >= 0.999) return svgText;

    return svgText.replace(
        /(fill="url\(#paint1_linear_[^"]+\)")/,
        `$1 fill-opacity="${alpha.toFixed(2)}"`
    );
}

function recolorExternalBackgroundSvg(svgText, colors) {
    return applyExternalPanelOpacitySvg(enrichExternalBackgroundGradientSvg(adjustExternalPanelLayoutSvg(svgText), colors), colors.blockOpacity)
        .replaceAll('#EFEFF2', colors.backgroundTop)
        .replaceAll('#EFEFF3', colors.backgroundTop)
        .replaceAll('#CFCFDB', colors.backgroundBottom)
        .replaceAll('#CECEDA', colors.backgroundBottom)
        .replaceAll('#2A2A2A', colors.backgroundTop)
        .replaceAll('#1E1E1E', colors.backgroundBottom)
        .replaceAll('#F8F8F8', colors.blockTop)
        .replaceAll('#E9EDF1', colors.blockBottom)
        .replaceAll('#424242', colors.blockTop)
        .replaceAll('#282828', colors.blockBottom);
}

function getColoredExternalBackgroundSvg() {
    const variant = getBackgroundExternalVariant();
    const colors = getExternalBackgroundColors();

    if (variant === 'gradient') {
        return getExternalGradientOnlySvg(colors);
    }

    const theme = colors.isDark ? 'dark' : 'light';
    const sourceTemplates = getBackgroundExternalDockPosition() === 'bottom'
        ? BACKGROUND_EXTERNAL_DOCK_BOTTOM_SVG_TEMPLATES
        : BACKGROUND_EXTERNAL_SVG_TEMPLATES;
    const themeTemplates = sourceTemplates[theme] || sourceTemplates.light || BACKGROUND_EXTERNAL_SVG_TEMPLATES.light;
    const template = themeTemplates[variant] || themeTemplates.margin;
    return recolorExternalBackgroundSvg(template, colors);
}

function sanitizeExternalSvgForCanvas(svgText) {
    return svgText
        .replace(/<\?xml[^>]*>/gi, '')
        .replace(/<!DOCTYPE[\s\S]*?>/gi, '')
        .replace(/<script\b[\s\S]*?<\/script>/gi, '')
        .replace(/<foreignObject\b[\s\S]*?<\/foreignObject>/gi, '')
        .replace(/\s+on[a-z]+="[^"]*"/gi, '')
        .replace(/\s+on[a-z]+='[^']*'/gi, '');
}

async function loadExternalBackgroundImage() {
    const svgText = sanitizeExternalSvgForCanvas(getColoredExternalBackgroundSvg());
    return loadImage(svgTextToDataUrl(svgText), 6000);
}

function drawExternalBackgroundImage(ctx, img, width, height) {
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);
}

function renderExternalBackgroundFallbackFrame(ctx, width, height) {
    const colors = getExternalBackgroundColors();
    const scaleX = width / BACKGROUND_EXTERNAL_SIZE.width;
    const scaleY = height / BACKGROUND_EXTERNAL_SIZE.height;
    const variant = getBackgroundExternalVariant();
    const isDarkTheme = colors.isDark;

    ctx.clearRect(0, 0, width, height);

    const backgroundGradient = ctx.createLinearGradient(0, 0, 0, height);
    backgroundGradient.addColorStop(0, colors.backgroundTop);
    backgroundGradient.addColorStop(0.46, colors.backgroundMid || colors.backgroundTop);
    backgroundGradient.addColorStop(1, colors.backgroundBottom);
    ctx.fillStyle = backgroundGradient;
    ctx.fillRect(0, 0, width, height);

    if (variant === 'gradient') return;

    const panelY = getBackgroundExternalDockPosition() === 'bottom' ? 20 : 188;
    const rect = variant === 'full'
        ? { x: 0, y: panelY, width: 1240, height: 872, radius: 0 }
        : { x: 20, y: panelY, width: 1200, height: 872, radius: 40 };

    const x = rect.x * scaleX;
    const y = rect.y * scaleY;
    const rectWidth = rect.width * scaleX;
    const rectHeight = rect.height * scaleY;
    const radius = rect.radius * Math.min(scaleX, scaleY);
    const blockTop = colors.blockTop;
    const blockBottom = colors.blockBottom;

    ctx.save();
    ctx.shadowColor = isDarkTheme ? 'rgba(27,27,27,0.15)' : 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 12 * Math.min(scaleX, scaleY);
    ctx.shadowOffsetY = 4 * scaleY;
    drawRoundedRectPath(ctx, x, y, rectWidth, rectHeight, radius);
    const blockGradient = ctx.createLinearGradient(0, y, 0, y + rectHeight);
    blockGradient.addColorStop(0, blockTop);
    blockGradient.addColorStop(1, blockBottom);
    ctx.globalAlpha = colors.blockOpacity ?? 1;
    ctx.fillStyle = blockGradient;
    ctx.fill();
    ctx.restore();
}

function renderExternalBackgroundFrame(ctx, width, height) {
    const img = state.assets.backgroundExternalPreviewImage;
    if (img) {
        drawExternalBackgroundImage(ctx, img, width, height);
        return;
    }

    renderExternalBackgroundFallbackFrame(ctx, width, height);
}

function getExternalPreviewFolderImage() {
    if (!state.backgroundExternalShowFolders) return null;

    const style = els.styleSelect?.value || DEFAULTS.style;
    if (style === 'icon_only') return null;

    syncExternalPreviewFolderImage();
    return state.assets.backgroundExternalFolderPreviewImage || null;
}

function drawExternalPreviewFolders(ctx, width, height) {
    const folderImg = getExternalPreviewFolderImage();
    if (!folderImg || !folderImg.complete) return;

    const scale = Math.min(width / BACKGROUND_EXTERNAL_SIZE.width, height / BACKGROUND_EXTERNAL_SIZE.height);
    const folderSize = 172 * scale;
    const placements = getBackgroundExternalDockPosition() === 'bottom'
        ? [
            { x: 0.27, y: 0.35, size: 0.95, rot: -7, alpha: 0.96 },
            { x: 0.50, y: 0.31, size: 1.08, rot: 4, alpha: 1 },
            { x: 0.72, y: 0.39, size: 0.98, rot: -3, alpha: 0.98 },
            { x: 0.59, y: 0.58, size: 0.78, rot: 8, alpha: 0.9 }
        ]
        : [
            { x: 0.27, y: 0.51, size: 0.95, rot: -7, alpha: 0.96 },
            { x: 0.50, y: 0.47, size: 1.08, rot: 4, alpha: 1 },
            { x: 0.72, y: 0.55, size: 0.98, rot: -3, alpha: 0.98 },
            { x: 0.59, y: 0.74, size: 0.78, rot: 8, alpha: 0.9 }
        ];

    placements.forEach(item => {
        const size = folderSize * item.size;
        ctx.save();
        ctx.globalAlpha = item.alpha;
        ctx.translate(width * item.x, height * item.y);
        ctx.rotate((item.rot * Math.PI) / 180);
        ctx.shadowColor = 'rgba(15, 23, 42, 0.22)';
        ctx.shadowBlur = 18 * scale;
        ctx.shadowOffsetY = 8 * scale;
        ctx.drawImage(folderImg, -size / 2, -size / 2, size, size);
        ctx.restore();
    });
}


function getBackgroundOverlayImage() {
    return state.assets.backgroundOverlayImage || null;
}

function syncBackgroundOverlayControlsState() {
    const hasOverlay = Boolean(getBackgroundOverlayImage());

    if (els.backgroundOverlayGroup) {
        els.backgroundOverlayGroup.classList.remove('is-disabled');
    }

    if (els.backgroundOverlayNote) {
        els.backgroundOverlayNote.textContent = hasOverlay
            ? `Loaded: ${state.assets.backgroundOverlayFileName || 'Overlay image'}`
            : 'No overlay image selected';
    }

    [
        els.backgroundOverlayScale,
        els.backgroundOverlayX,
        els.backgroundOverlayY,
        els.backgroundOverlayRot,
        els.backgroundOverlayResetBtn,
        els.backgroundOverlayRemoveBtn
    ].forEach(control => {
        if (control) control.disabled = !hasOverlay;
    });
}

function applyBackgroundOverlayControls() {
    if (els.backgroundOverlayScaleValue && els.backgroundOverlayScale) els.backgroundOverlayScaleValue.textContent = `${els.backgroundOverlayScale.value}%`;
    if (els.backgroundOverlayXValue && els.backgroundOverlayX) els.backgroundOverlayXValue.textContent = els.backgroundOverlayX.value;
    if (els.backgroundOverlayYValue && els.backgroundOverlayY) els.backgroundOverlayYValue.textContent = els.backgroundOverlayY.value;
    if (els.backgroundOverlayRotValue && els.backgroundOverlayRot) els.backgroundOverlayRotValue.textContent = `${els.backgroundOverlayRot.value}°`;

    syncBackgroundOverlayControlsState();

    if (state.mode === 'background') {
        drawBackgroundPreviewFrame(0);
    }
}

function resetBackgroundOverlayControls() {
    if (els.backgroundOverlayScale) els.backgroundOverlayScale.value = String(BACKGROUND_OVERLAY_DEFAULTS.scale);
    if (els.backgroundOverlayX) els.backgroundOverlayX.value = String(BACKGROUND_OVERLAY_DEFAULTS.x);
    if (els.backgroundOverlayY) els.backgroundOverlayY.value = String(BACKGROUND_OVERLAY_DEFAULTS.y);
    if (els.backgroundOverlayRot) els.backgroundOverlayRot.value = String(BACKGROUND_OVERLAY_DEFAULTS.rot);
    applyBackgroundOverlayControls();
}

function syncBackgroundVideoControls() {
    const isVideoFormat = state.mode === 'background' && !isBackgroundExternalScreen() && getBackgroundExportFormat() !== 'png';

    if (els.backgroundDurationValue) {
        els.backgroundDurationValue.textContent = `${getBackgroundVideoDurationSeconds()}s`;
    }

    if (els.backgroundDurationSlider) {
        els.backgroundDurationSlider.disabled = !isVideoFormat;
    }

    if (els.backgroundAnimationSelect) {
        els.backgroundAnimationSelect.value = getBackgroundAnimation();
        els.backgroundAnimationSelect.disabled = !isVideoFormat;
    }

    if (els.backgroundInlineControls) {
        els.backgroundInlineControls.hidden = false;
        els.backgroundInlineControls.classList.toggle('is-visible', isVideoFormat);
    }

    if (els.backgroundAnimationGroup) {
        els.backgroundAnimationGroup.hidden = false;
        els.backgroundAnimationGroup.classList.toggle('is-visible', isVideoFormat);
    }

    if (els.backgroundVideoGroup) {
        els.backgroundVideoGroup.hidden = false;
        els.backgroundVideoGroup.classList.toggle('is-visible', isVideoFormat);
    }
}

function drawBackgroundOverlay(ctx, width, height) {
    const img = getBackgroundOverlayImage();
    if (!img) return;

    const scale = Math.max(1, Number(els.backgroundOverlayScale?.value) || BACKGROUND_OVERLAY_DEFAULTS.scale);
    const offsetX = (Number(els.backgroundOverlayX?.value) || 0) * (width / 200);
    const offsetY = (Number(els.backgroundOverlayY?.value) || 0) * (height / 200);
    const rotation = ((Number(els.backgroundOverlayRot?.value) || 0) * Math.PI) / 180;
    const { width: imageWidth, height: imageHeight } = getImageDimensions(img, width, height);
    const aspect = imageWidth / imageHeight || 1;
    const maxDimension = Math.min(width, height) * (scale / 100);

    let drawWidth = maxDimension;
    let drawHeight = maxDimension;

    if (aspect >= 1) {
        drawHeight = maxDimension / aspect;
    } else {
        drawWidth = maxDimension * aspect;
    }

    ctx.save();
    ctx.translate(width / 2 + offsetX, height / 2 + offsetY);
    ctx.rotate(rotation);
    ctx.drawImage(img, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight);
    ctx.restore();
}

// Apply the current Top/Bottom colors to the background SVG template
function getBackgroundPatternOpacity() {
    const top = normalizeHex(els.colorTop.value);
    const bottom = normalizeHex(els.colorBottom.value);
    const topLuminance = getColorLuminance(top);
    const bottomLuminance = getColorLuminance(bottom);
    const averageLuminance = (topLuminance + bottomLuminance) / 2;

    if (averageLuminance < 0.035) return 0.035;
    if (averageLuminance < 0.08) return 0.045;
    if (averageLuminance < 0.18) return 0.07;
    return 0.12;
}

function getColoredBackgroundSvg() {
    const palette = getPalette();
    const template = getBackgroundTemplate();
    const patternOpacity = getBackgroundPatternOpacity();

    return template
        .replaceAll('COLOR_TOP', palette.top)
        .replaceAll('COLOR_BOTTOM', palette.bottom)
        .replace(/fill="url\(#paint\d+_linear_[^"]+\)" fill-opacity="0\.15"/g, `fill="white" fill-opacity="${patternOpacity}"`);
}

// Stop the animated Background preview loop
function stopBackgroundPreviewAnimation() {
    if (state.assets.backgroundPreviewFrame) {
        cancelAnimationFrame(state.assets.backgroundPreviewFrame);
        state.assets.backgroundPreviewFrame = null;
    }
}

// Draw one Background preview frame, matching the selected PNG/Video mode
function drawBackgroundPreviewFrame(progress = 0) {
    const canvas = els.backgroundPreviewCanvas;
    if (!canvas) return;

    syncBackgroundPreviewCanvasSize();

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    if (isBackgroundExternalScreen()) {
        renderExternalBackgroundFrame(ctx, width, height);
        drawExternalPreviewFolders(ctx, width, height);
        return;
    }

    const img = state.assets.backgroundPreviewImage;
    if (!img) return;

    if (getBackgroundExportFormat() !== 'png') {
        renderAnimatedBackgroundFrame(ctx, width, height, progress);
    } else {
        renderStaticBackgroundFrame(ctx, img, width, height);
    }
}

function renderStaticBackgroundFrame(ctx, img, width, height) {
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);
    drawBackgroundOverlay(ctx, width, height);
}

// Start the live animated preview when Video export is selected
function startBackgroundPreviewAnimation() {
    if (state.mode !== 'background' || getBackgroundExportFormat() === 'png') {
        stopBackgroundPreviewAnimation();
        drawBackgroundPreviewFrame(0);
        return;
    }

    if (state.assets.backgroundPreviewFrame) return;

    const loop = timestamp => {
        const durationMs = getBackgroundVideoDurationMs();
        const progress = (timestamp % durationMs) / durationMs;
        drawBackgroundPreviewFrame(progress);
        state.assets.backgroundPreviewFrame = requestAnimationFrame(loop);
    };

    state.assets.backgroundPreviewFrame = requestAnimationFrame(loop);
}

// Keep the Background preview aligned with the selected export format
function syncBackgroundPreviewPlayback() {
    if (state.mode !== 'background') {
        stopBackgroundPreviewAnimation();
        return;
    }

    if (isBackgroundExternalScreen()) {
        stopBackgroundPreviewAnimation();
        drawBackgroundPreviewFrame(0);
        return;
    }

    if (getBackgroundExportFormat() !== 'png') {
        startBackgroundPreviewAnimation();
    } else {
        stopBackgroundPreviewAnimation();
        drawBackgroundPreviewFrame(0);
    }
}

// Refresh the large Background mode preview
async function updateBackgroundPreview() {
    const canvas = els.backgroundPreviewCanvas;
    const template = getBackgroundTemplate();
    if (!canvas) return;

    syncBackgroundPreviewCanvasSize();

    if (isBackgroundExternalScreen()) {
        state.assets.backgroundPreviewImage = null;
        stopBackgroundPreviewAnimation();

        const externalKey = getExternalBackgroundSvgKey();
        if (state.assets.backgroundExternalPreviewImage && state.assets.backgroundExternalPreviewKey === externalKey) {
            drawBackgroundPreviewFrame(0);
            syncBackgroundExportControls();
            return;
        }

        state.assets.backgroundExternalPreviewImage = null;
        state.assets.backgroundExternalPreviewKey = externalKey;
        drawBackgroundPreviewFrame(0);

        const renderId = state.assets.backgroundPreviewRenderId + 1;
        state.assets.backgroundPreviewRenderId = renderId;

        try {
            const img = await loadExternalBackgroundImage();
            if (renderId !== state.assets.backgroundPreviewRenderId) return;

            state.assets.backgroundExternalPreviewImage = img;
            drawBackgroundPreviewFrame(0);
            syncBackgroundExportControls();
        } catch (error) {
            console.warn('External background preview could not be rendered.', error);
            syncBackgroundExportControls();
        }

        return;
    }

    if (!template) return;

    const renderId = state.assets.backgroundPreviewRenderId + 1;
    state.assets.backgroundPreviewRenderId = renderId;

    try {
        const svgText = sanitizeSvgForCanvas(getColoredBackgroundSvg());
        const img = await loadImage(svgTextToDataUrl(svgText), 6000);
        if (renderId !== state.assets.backgroundPreviewRenderId) return;

        state.assets.backgroundPreviewImage = img;
        drawBackgroundPreviewFrame(0);
        syncBackgroundPreviewPlayback();
    } catch (error) {
        console.warn('Wallpaper preview could not be rendered.', error);
    }
}

function getBackgroundExportFormat() {
    return state.backgroundExportFormat || 'png';
}

function getBackgroundVideoMimeType() {
    if (typeof MediaRecorder === 'undefined') return '';
    const candidates = ['video/webm;codecs=vp8', 'video/webm', 'video/webm;codecs=vp9'];
    return candidates.find(type => typeof MediaRecorder.isTypeSupported !== 'function' || MediaRecorder.isTypeSupported(type)) || '';
}

function isBackgroundVideoSupported() {
    return typeof MediaRecorder !== 'undefined'
        && typeof HTMLCanvasElement !== 'undefined'
        && 'captureStream' in HTMLCanvasElement.prototype
        && Boolean(getBackgroundVideoMimeType());
}


function setUnavailableControlGroup(group, unavailable) {
    if (!group) return;

    group.classList.toggle('is-disabled', unavailable);
    group.setAttribute('aria-disabled', String(unavailable));
    group.querySelectorAll('button, input, select, textarea').forEach(control => {
        control.disabled = unavailable;
    });
}

function syncBackgroundExportControls() {
    if (isBackgroundExternalScreen() && state.backgroundExportFormat !== 'png') {
        state.backgroundExportFormat = 'png';
    }

    const format = getBackgroundExportFormat();
    const webmSupported = isBackgroundVideoSupported();
    const isExternal = isBackgroundExternalScreen();

    if (els.backgroundExportBtns?.length) {
        els.backgroundExportBtns.forEach(button => {
            const buttonFormat = button.dataset.exportFormat;
            const isActive = buttonFormat === format;
            const isWebm = buttonFormat === 'webm';
            const isVideoButton = buttonFormat === 'webm' || buttonFormat === 'mp4';
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
            button.disabled = isExternal ? isVideoButton : isWebm && !webmSupported;
            button.title = isExternal && isVideoButton
                ? 'External wallpaper export is PNG only.'
                : isWebm && !webmSupported
                    ? 'WEBM export is not supported in this browser.'
                    : '';
        });
    }

    if (els.backgroundExportHelp) {
        if (isExternal) {
            els.backgroundExportHelp.textContent = getBackgroundExternalVariant() === 'gradient'
                ? `External PNG · ${getBackgroundExternalVariantLabel()}`
                : `External PNG · ${getBackgroundExternalVariantLabel()} · ${getBackgroundExternalDockPositionLabel()}`;
        } else if (format === 'mp4') {
            els.backgroundExportHelp.textContent = `MP4 Video · ${getBackgroundAnimationLabel()} · ${getBackgroundVideoDurationSeconds()}s. (Uses ffmpeg.wasm. It is slower, but it is the most compatible option for Cocoon.)`;
        } else if (format === 'webm') {
            els.backgroundExportHelp.textContent = `WEBM Video · ${getBackgroundAnimationLabel()} · ${getBackgroundVideoDurationSeconds()}s`;
        } else {
            els.backgroundExportHelp.textContent = 'PNG Image';
        }
    }

    if (els.backgroundScreenTabs) {
        els.backgroundScreenTabs.hidden = state.mode !== 'background';
    }

    if (els.backgroundScreenBtns?.length) {
        els.backgroundScreenBtns.forEach(button => {
            const isActive = button.dataset.backgroundScreen === getBackgroundScreen();
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-selected', String(isActive));
        });
    }

    const backgroundPreviewShell = els.backgroundPreviewCanvas?.closest('.background-preview-shell');
    if (backgroundPreviewShell) {
        backgroundPreviewShell.classList.toggle('external-preview-compact', isExternal);
    }

    if (els.backgroundExternalSettingsPanel) {
        els.backgroundExternalSettingsPanel.hidden = !isExternal;
    }

    if (els.backgroundExternalVariantGroup) {
        els.backgroundExternalVariantGroup.hidden = !isExternal;
    }

    const isGradientOnlyExternal = isExternal && getBackgroundExternalVariant() === 'gradient';
    if (els.backgroundExternalDockGroup) {
        els.backgroundExternalDockGroup.hidden = !isExternal;
        setUnavailableControlGroup(els.backgroundExternalDockGroup, isGradientOnlyExternal);
    }

    if (els.backgroundExternalPreviewGroup) {
        els.backgroundExternalPreviewGroup.hidden = !isExternal;
    }
    if (els.backgroundExternalShowFolders) {
        els.backgroundExternalShowFolders.checked = Boolean(state.backgroundExternalShowFolders);
    }

    const isExternalPanelConfigVisible = isExternal;
    if (els.backgroundExternalPanelGroup) {
        els.backgroundExternalPanelGroup.hidden = !isExternalPanelConfigVisible;
        setUnavailableControlGroup(els.backgroundExternalPanelGroup, isGradientOnlyExternal);
    }
    if (els.backgroundExternalPanelCustom) {
        els.backgroundExternalPanelCustom.hidden = !isExternalPanelConfigVisible;
    }
    if (els.backgroundExternalPanelOpacityGroup) {
        els.backgroundExternalPanelOpacityGroup.hidden = !isExternalPanelConfigVisible;
        setUnavailableControlGroup(els.backgroundExternalPanelOpacityGroup, isGradientOnlyExternal);
    }
    if (els.backgroundExternalPanelOpacity) {
        els.backgroundExternalPanelOpacity.hidden = !isExternalPanelConfigVisible;
        els.backgroundExternalPanelOpacity.value = getExternalPanelOpacity();
    }
    if (els.backgroundExternalPanelOpacity?.closest('.background-external-panel-opacity-row')) {
        els.backgroundExternalPanelOpacity.closest('.background-external-panel-opacity-row').hidden = !isExternalPanelConfigVisible;
    }
    if (els.backgroundExternalPanelOpacityValue) {
        els.backgroundExternalPanelOpacityValue.textContent = `${getExternalPanelOpacity()}%`;
    }
    if (els.backgroundExternalPanelTop) {
        els.backgroundExternalPanelTop.value = normalizeHex(state.backgroundExternalPanelCustomTop) || '#F8F8F8';
    }
    if (els.backgroundExternalPanelBottom) {
        els.backgroundExternalPanelBottom.value = normalizeHex(state.backgroundExternalPanelCustomBottom) || '#E9EDF1';
    }
    if (els.backgroundExternalPanelTopValue) {
        els.backgroundExternalPanelTopValue.textContent = normalizeHex(state.backgroundExternalPanelCustomTop) || '#F8F8F8';
    }
    if (els.backgroundExternalPanelBottomValue) {
        els.backgroundExternalPanelBottomValue.textContent = normalizeHex(state.backgroundExternalPanelCustomBottom) || '#E9EDF1';
    }
    if (els.backgroundNote) {
        els.backgroundNote.hidden = state.mode !== 'background' || isExternal;
    }

    if (els.backgroundOverlayGroup) {
        els.backgroundOverlayGroup.hidden = state.mode !== 'background' || isExternal;
    }


    if (els.backgroundExternalThemeBtns?.length) {
        els.backgroundExternalThemeBtns.forEach(button => {
            const isActive = button.dataset.externalTheme === getBackgroundExternalTheme();
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });
    }

    if (els.backgroundExternalVariantBtns?.length) {
        els.backgroundExternalVariantBtns.forEach(button => {
            const isActive = button.dataset.externalVariant === getBackgroundExternalVariant();
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });
    }

    if (els.backgroundExternalDockBtns?.length) {
        els.backgroundExternalDockBtns.forEach(button => {
            const isActive = button.dataset.externalDockPosition === getBackgroundExternalDockPosition();
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });
    }

    if (els.backgroundMetaDetail) {
        if (isExternal) {
            els.backgroundMetaDetail.textContent = getBackgroundExternalVariant() === 'gradient'
                ? `${BACKGROUND_EXTERNAL_SIZE.width}×${BACKGROUND_EXTERNAL_SIZE.height} PNG · ${getBackgroundExternalVariantLabel()}`
                : `${BACKGROUND_EXTERNAL_SIZE.width}×${BACKGROUND_EXTERNAL_SIZE.height} PNG · ${getBackgroundExternalVariantLabel()} · ${getBackgroundExternalDockPositionLabel()}`;
        } else if (format === 'mp4') {
            els.backgroundMetaDetail.textContent = `1920×1080 MP4 · ${getBackgroundAnimationLabel()} · ${getBackgroundVideoDurationSeconds()}s`;
        } else if (format === 'webm') {
            els.backgroundMetaDetail.textContent = `1920×1080 WEBM · ${getBackgroundAnimationLabel()} · ${getBackgroundVideoDurationSeconds()}s`;
        } else {
            els.backgroundMetaDetail.textContent = '1920×1080 PNG';
        }
    }

    syncBackgroundVideoControls();
    syncBackgroundPreviewPlayback();
}

function fileNameWithoutExtension(fileName) {
    return fileName.replace(/\.[^/.]+$/, '');
}

// --- COLOR / RANDOM ENGINE ---
// Convert HSL values to a hex color string for the Random palette generator
function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;

    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    const toHex = value => Math.round(255 * value).toString(16).padStart(2, '0');

    return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`.toUpperCase();
}

// Generate a cohesive two-stop gradient using a random hue and a small hue shift
function getRandomPalette() {
    const hue = Math.floor(Math.random() * 360);
    const hueShift = Math.floor(Math.random() * 41) - 20;

    return {
        top: hslToHex(hue, 90, 78),
        bottom: hslToHex((hue + hueShift + 360) % 360, 85, 54)
    };
}

// Once the user picks manual colors, stop using brand palettes in the current context
function disableBrandColorsForCurrentContext() {
    if (state.mode === 'dock') {
        state.brandColors.dock = false;
    }

    if (state.mode === 'generator' && state.activeTab === 'apps') {
        state.brandColors.apps = false;
    }
}

// Store the user-selected folder style before Apps temporarily forces Pods
function rememberNormalGeneratorStyle() {
    if (state.mode === 'generator' && state.activeTab !== 'apps') {
        state.generatorStyle = els.styleSelect.value || DEFAULTS.style;
    }
}

// Restore the remembered generator style when leaving Apps
function restoreNormalGeneratorStyleIfNeeded() {
    if (state.mode !== 'generator' || state.activeTab === 'apps') return false;

    const targetStyle = state.generatorStyle || DEFAULTS.style;
    if (els.styleSelect.value === targetStyle) return false;

    els.styleSelect.value = targetStyle;
    updateStyleControls();
    clearAutoColor();
    return true;
}


// Force Apps into Pods by default without overwriting the remembered normal folder style
function applyAppsDefaultStyleIfNeeded() {
    if (state.mode !== 'generator' || state.activeTab !== 'apps' || !state.defaultStyle.apps) return;
    if (els.styleSelect.value === 'pods') return;

    els.styleSelect.value = 'pods';
    updateStyleControls();
    clearAutoColor();
    updateGlobalDesign();
}

// Apply a manual palette, disable brand colors for the current context, and refresh previews
function setPalette(top, bottom, { clearAuto = true, userOverride = true, rebuild = false } = {}) {
    if (userOverride) disableBrandColorsForCurrentContext();

    els.colorTop.value = top;
    els.colorBottom.value = bottom;
    syncPaletteControls();
    rememberFolderPreviewPaletteFromControls();

    if (state.mode === 'background') {
        resetExternalPanelColorsToThemeDefault({ refresh: false });
    }

    if (clearAuto) clearAutoColor();
    updateGlobalDesign();
    if (rebuild) rebuildGrid();
}

// Restore the default orange gradient
function resetPalette() {
    setPalette(DEFAULTS.colors.top, DEFAULTS.colors.bottom, { userOverride: false });
}

// Reset colors while respecting special contexts such as Apps brand colors
function resetColorContext() {
    if (state.mode === 'background') {
        setPalette(BACKGROUND_DEFAULT_PRESET.top, BACKGROUND_DEFAULT_PRESET.bottom, { userOverride: false });
        return;
    }

    if (state.mode === 'dock') {
        state.brandColors.dock = true;
        syncPaletteControls();
        clearAutoColor();
        updateGlobalDesign();
        rebuildGrid();
        return;
    }

    if (state.mode === 'generator' && state.activeTab === 'apps') {
        state.brandColors.apps = true;
        state.defaultStyle.apps = true;
        applyAppsDefaultStyleIfNeeded();
        syncPaletteControls();
        clearAutoColor();
        updateGlobalDesign();
        rebuildGrid();
        return;
    }

    resetPalette();
}

// Apply a random gradient palette
function randomizePalette() {
    const palette = getRandomPalette();
    setPalette(palette.top, palette.bottom);
}

// --- AUTO-COLOR ENGINE ---
// Turn off Auto Color and clear cached per-card folder backgrounds
function clearAutoColor() {
    state.autoColor.enabled = false;
    state.autoColor.cardImages = {};

    document.querySelectorAll('.card-bg').forEach(bg => {
        bg.style.backgroundImage = '';
    });
}

// Convert a hex color into RGB components
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : null;
}

// Find the preset closest to a sampled image color
function getClosestPreset(hexColor) {
    const target = hexToRgb(hexColor || '');
    if (!target) return PRESETS[0];

    let closest = PRESETS[0];
    let minDistance = Infinity;

    PRESETS.forEach(preset => {
        const presetColor = hexToRgb(preset.bottom);
        const distance = Math.sqrt(
            Math.pow(target.r - presetColor.r, 2) +
            Math.pow(target.g - presetColor.g, 2) +
            Math.pow(target.b - presetColor.b, 2)
        );

        if (distance < minDistance) {
            minDistance = distance;
            closest = preset;
        }
    });

    return closest;
}

// Sample an image through canvas to estimate its dominant top/bottom colors
function getAverageColors(imgSrc) {
    return new Promise(resolve => {
        const img = new Image();

        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, 64, 64);

            const getAvgHex = (yStart, height) => {
                const data = ctx.getImageData(0, yStart, 64, height).data;
                let r = 0;
                let g = 0;
                let b = 0;
                let count = 0;

                for (let i = 0; i < data.length; i += 4) {
                    if (data[i + 3] > 50) {
                        r += data[i];
                        g += data[i + 1];
                        b += data[i + 2];
                        count++;
                    }
                }

                return count
                    ? `#${(1 << 24 | Math.round(r / count) << 16 | Math.round(g / count) << 8 | Math.round(b / count)).toString(16).slice(1)}`
                    : null;
            };

            resolve({ top: getAvgHex(0, 32), bottom: getAvgHex(32, 32) });
        };

        img.onerror = () => resolve({ top: null, bottom: null });
        img.src = imgSrc;
    });
}

// Build a recolored folder/pod background SVG data URL for the requested style
function getColoredFolderDataUrl(style, palette) {
    const template = style === 'pods' ? svgTemplates.pods : svgTemplates[style];
    const doc = new DOMParser().parseFromString(template, 'image/svg+xml');

    doc.querySelectorAll('linearGradient').forEach(gradient => {
        const id = gradient.getAttribute('id');
        if (!id || (!id.includes('paint0') && !id.includes('paint2'))) return;

        const stops = gradient.querySelectorAll('stop');
        if (stops.length < 2) return;

        stops[0].setAttribute('stop-color', palette.top);
        stops[1].setAttribute('stop-color', palette.bottom);
    });

    return createSvgDataUrl(new XMLSerializer().serializeToString(doc));
}

// Color visible folder backgrounds from each icon preset or sampled icon colors
async function applyAutoColor() {
    // Apps and Custom backgrounds are intentionally excluded from Auto Color
    if (isAutoColorDisabledContext()) return;

    const style = els.styleSelect.value;
    if (style === 'icon_only') return;

    clearAutoColor();
    state.autoColor.enabled = true;

    for (const card of document.querySelectorAll('.card')) {
        if (card.classList.contains('add-card') || card.dataset.tab === 'logos') continue;

        const icon = iconsDatabase.find(item => item.id === card.dataset.id);
        const iconImg = card.querySelector('.card-icon');
        if (!icon || !iconImg) continue;

        let finalColors;

        if (Number.isInteger(icon.presetIndex) && PRESETS[icon.presetIndex]) {
            finalColors = PRESETS[icon.presetIndex];
        } else {
            const detectedColors = await getAverageColors(iconImg.src);
            finalColors = getClosestPreset(detectedColors.bottom || detectedColors.top);
        }

        if (!finalColors?.top || !finalColors?.bottom) continue;

        if (icon.tab === 'dock' && dockSvgTemplates[icon.displayName]) {
            const svg = dockSvgTemplates[icon.displayName]
                .replaceAll('COLOR_TOP', finalColors.top)
                .replaceAll('COLOR_BOTTOM', finalColors.bottom);
            const url = createSvgBlobUrl(svg);

            if (state.assets.dynamicDockUrls[icon.displayName]?.startsWith('blob:')) {
                URL.revokeObjectURL(state.assets.dynamicDockUrls[icon.displayName]);
            }

            state.assets.dynamicDockUrls[icon.displayName] = url;
            iconImg.src = url;
            continue;
        }

        const folderDataUrl = getColoredFolderDataUrl(style, finalColors);
        const bg = card.querySelector('.card-bg');
        if (bg) bg.style.backgroundImage = `url("${folderDataUrl}")`;

        const img = new Image();
        img.src = folderDataUrl;
        state.autoColor.cardImages[icon.id] = img;
    }
}

// --- VIEW / STATE SYNC ---
// Regenerate recolored generic and dock SVG icon URLs for the active palette/brand state
function updateDynamicIconUrls() {
    const palette = getPalette();

    revokeBlobUrls(state.assets.dynamicGenericUrls);
    revokeBlobUrls(state.assets.dynamicDockUrls);

    state.assets.dynamicGenericUrls = {};
    state.assets.dynamicDockUrls = {};

    for (const [name, templateStr] of Object.entries(genericSvgTemplates)) {
        const svg = templateStr
            .replaceAll('COLOR_TOP', palette.top)
            .replaceAll('COLOR_BOTTOM', palette.bottom);
        state.assets.dynamicGenericUrls[name] = createSvgBlobUrl(svg);
    }

    for (const [name, templateStr] of Object.entries(dockSvgTemplates)) {
        const dockPalette = state.brandColors.dock && APP_BRAND_PALETTES[name]
            ? APP_BRAND_PALETTES[name]
            : palette;
        const svg = templateStr
            .replaceAll('COLOR_TOP', dockPalette.top)
            .replaceAll('COLOR_BOTTOM', dockPalette.bottom);
        state.assets.dynamicDockUrls[name] = createSvgBlobUrl(svg);
    }
}

// Update already-rendered cards after dynamic SVG URLs change
function refreshVisibleIconSources() {
    document.querySelectorAll('.card-icon').forEach(img => {
        const name = img.dataset.name;
        const card = img.closest('.card');

        if (card?.dataset.tab === 'dock' && state.assets.dynamicDockUrls[name]) {
            img.src = state.assets.dynamicDockUrls[name];
            return;
        }

        if (state.assets.dynamicGenericUrls[name]) {
            img.src = state.assets.dynamicGenericUrls[name];
        }
    });
}

// Update the global folder/pod background used by card previews
function updateFolderBackground() {
    const style = els.styleSelect.value;
    state.assets.globalSvgImg = null;
    state.assets.globalFolderDataUrl = null;

    if (style === 'icon_only') {
        setCssVar('--folder-bg', 'none');
        return;
    }

    if (style === 'custom') {
        setCssVar('--folder-bg', state.assets.customBgDataUrl ? `url("${state.assets.customBgDataUrl}")` : 'none');
        return;
    }

    const folderDataUrl = getColoredFolderDataUrl(style, getPalette());
    state.assets.globalFolderDataUrl = folderDataUrl;
    setCssVar('--folder-bg', `url("${folderDataUrl}")`);

    const img = new Image();
    img.onload = () => {
        state.assets.globalSvgImg = img;
        if (style === 'custom') {
            state.assets.backgroundExternalFolderPreviewImage = img;
            state.assets.backgroundExternalFolderPreviewKey = getExternalPreviewFolderKey();
        }
        if (isBackgroundExternalScreen() && state.backgroundExternalShowFolders) {
            drawBackgroundPreviewFrame(0);
        }
    };
    img.src = folderDataUrl;
}

// Refresh dynamic SVGs, background images, and visible icon sources after design changes
function updateGlobalDesign() {
    updateDynamicIconUrls();
    refreshVisibleIconSources();
    updateFolderBackground();
    updateBackgroundPreview();
}

// Refresh selected count text and enable/disable export
function updateActionBar() {
    if (state.mode === 'background') {
        const format = getBackgroundExportFormat();
        const webmSupported = isBackgroundVideoSupported();
        const needsWebm = format === 'webm' || format === 'mp4';
        const isExternal = isBackgroundExternalScreen();
        els.countDisplay.textContent = isExternal
            ? 'Background External'
            : format === 'png'
                ? 'Background'
                : 'Background (Looping Video)';
        els.downloadBtn.disabled = isExternal ? false : !getBackgroundTemplate() || (needsWebm && !webmSupported);
        els.downloadBtn.textContent = isExternal
            ? 'Download External PNG'
            : format === 'mp4'
                ? 'Download MP4'
                : format === 'webm'
                    ? 'Download WEBM'
                    : 'Download PNG';
        syncBackgroundExportControls();
        return;
    }

    const count = state.selectedIcons.size;
    els.countDisplay.textContent = `${count} icon${count > 1 ? 's' : ''} selected`;
    els.downloadBtn.disabled = count === 0;
    els.downloadBtn.textContent = 'Download ZIP';
}

// Highlight the active category tab
function syncTabButtons() {
    els.tabBtns.forEach(button => {
        button.classList.toggle('active', button.dataset.tab === state.activeTab);
    });
}

// Highlight the active main mode
function syncMainModeButtons() {
    els.mainTabBtns.forEach(button => {
        button.classList.toggle('active', button.dataset.mode === state.mode);
    });
}

// Return the default Y offset for the current folder style
function getDefaultIconYForCurrentStyle() {
    const defaultYByStyle = {
        border: 8,
        noborder: 5,
        pods: 0,
        icon_only: 0,
        custom: 5
    };

    return defaultYByStyle[els.styleSelect.value] ?? DEFAULTS.icon.y;
}

// Reset icon transform sliders to defaults for the current context
function resetIconPositionControls() {
    state.temporaryScale.active = false;
    state.temporaryScale.previous = null;

    const forcedScaleStyles = ['pods', 'icon_only'];
    const shouldUseTemporaryScale = state.mode === 'generator' && forcedScaleStyles.includes(els.styleSelect.value);

    els.scaleSlider.value = shouldUseTemporaryScale ? state.temporaryScale.value : DEFAULTS.icon.scale;
    els.xSlider.value = DEFAULTS.icon.x;
    els.ySlider.value = getDefaultIconYForCurrentStyle();
    els.rotSlider.value = DEFAULTS.icon.rot;

    applyIconControls();

    if (shouldUseTemporaryScale) {
        state.temporaryScale.active = true;
        state.temporaryScale.previous = String(DEFAULTS.icon.scale);
    }
}

// Legacy alias kept for older calls
function syncIconControls() {
    resetIconPositionControls();
}

// Apply slider values to preview transforms through CSS variables
function applyIconControls() {
    document.getElementById('val-scale').textContent = `${els.scaleSlider.value}%`;
    document.getElementById('val-x').textContent = els.xSlider.value;
    document.getElementById('val-y').textContent = els.ySlider.value;
    document.getElementById('val-rot').textContent = `${els.rotSlider.value}°`;

    setCssVar('--icon-scale', `${Number(els.scaleSlider.value) / 100}`);
    setCssVar('--icon-x', `${els.xSlider.value}%`);
    setCssVar('--icon-y', `${els.ySlider.value}%`);
    setCssVar('--icon-rot', `${els.rotSlider.value}deg`);
}

// Set the Scale slider programmatically and refresh previews
function setIconScale(value) {
    els.scaleSlider.value = String(value);
    applyIconControls();
}

// Pods and Icon Only use a temporary 75% icon scale, then restore the previous scale when leaving those styles
function syncTemporaryIconScale() {
    const forcedScaleStyles = ['pods', 'icon_only'];
    const shouldUseTemporaryScale = state.mode === 'generator' && forcedScaleStyles.includes(els.styleSelect.value);

    if (shouldUseTemporaryScale) {
        if (!state.temporaryScale.active) {
            state.temporaryScale.previous = els.scaleSlider.value || String(DEFAULTS.icon.scale);
            state.temporaryScale.active = true;
        }

        if (els.scaleSlider.value !== String(state.temporaryScale.value)) {
            setIconScale(state.temporaryScale.value);
        }
        return;
    }

    if (!state.temporaryScale.active) return;

    const previousScale = state.temporaryScale.previous || String(DEFAULTS.icon.scale);
    state.temporaryScale.active = false;
    state.temporaryScale.previous = null;

    if (els.scaleSlider.value !== previousScale) {
        setIconScale(previousScale);
    }
}

// Apply the selected folder angle to the preview CSS variable
function applyFolderTilt() {
    setCssVar('--folder-rot', `${els.folderTilt.value}deg`);
    syncChoiceButtons();
}

// Keep style-dependent controls in sync, including custom upload visibility and default Y offset
function updateStyleControls() {
    const style = els.styleSelect.value;

    els.customUploadBtn.style.display = style === 'custom' ? 'block' : 'none';
    els.folderTilt.disabled = style === 'pods' || style === 'icon_only';

    if (style === 'pods' || style === 'icon_only') {
        els.folderTilt.value = '0';
    }

    applyFolderTilt();
    syncChoiceButtons();

    const defaultYByStyle = {
        border: 8,
        noborder: 5,
        pods: 0,
        icon_only: 0,
        custom: 5
    };

    els.ySlider.value = defaultYByStyle[style] ?? DEFAULTS.icon.y;
    applyIconControls();
}

// Show/hide panels and notes depending on the current main mode
function updateModeControls() {
    const isAssetsMode = state.mode === 'assets';
    const isDockMode = state.mode === 'dock';
    const isBackgroundMode = state.mode === 'background';

    const titles = {
        generator: {
            appearance: 'Folder Appearance',
            adjustments: 'Icon Adjustments'
        },
        dock: {
            appearance: 'Dock Icon Colors',
            adjustments: 'Dock Adjustments'
        },
        assets: {
            appearance: 'Logo Export',
            adjustments: 'Logo Adjustments'
        },
        background: {
            appearance: 'Wallpaper Colors',
            adjustments: 'Background Adjustments'
        }
    };

    if (els.appearanceTitle) els.appearanceTitle.textContent = titles[state.mode]?.appearance || 'Appearance';
    if (els.adjustmentsTitle) els.adjustmentsTitle.textContent = titles[state.mode]?.adjustments || 'Adjustments';

    els.dashboard.style.display = isAssetsMode ? 'none' : 'grid';
    els.dashboard.classList.toggle('background-dashboard', isBackgroundMode);
    if (els.dockNote) els.dockNote.hidden = !isDockMode;
    if (els.backgroundNote) els.backgroundNote.hidden = !isBackgroundMode || isBackgroundExternalScreen();
    els.autoColorBtn.style.display = (isDockMode || isBackgroundMode) ? 'none' : 'inline-flex';

    els.folderStyleRow.style.display = (isDockMode || isBackgroundMode) ? 'none' : '';
    els.folderTiltRow.style.display = (isDockMode || isBackgroundMode) ? 'none' : '';
    els.iconControlsGroup.style.display = (isDockMode || isBackgroundMode) ? 'none' : '';
    if (els.backgroundOverlayGroup) els.backgroundOverlayGroup.hidden = !isBackgroundMode || isBackgroundExternalScreen();
    els.subTabsContainer.style.display = state.mode === 'generator' ? 'flex' : 'none';
    if (els.backgroundScreenTabs) els.backgroundScreenTabs.hidden = !isBackgroundMode;

    if (els.backgroundPanel) els.backgroundPanel.hidden = !isBackgroundMode;
    if (isBackgroundMode) {
        if (!state.assets.backgroundPreviewImage) updateBackgroundPreview();
        syncBackgroundPreviewPlayback();
    } else {
        stopBackgroundPreviewAnimation();
    }
    els.grid.hidden = isBackgroundMode;
    els.grid.classList.toggle('assets-mode', isAssetsMode || isDockMode);
    document.body.dataset.mode = state.mode;

    syncBackgroundExportControls();
    syncAutoColorButtonState();
    updateActionBar();
}

// --- MODE SWITCHER LOGIC ---
// Public handler used by the inline HTML mode buttons
window.switchMode = function switchMode(mode) {
    rememberNormalGeneratorStyle();

    state.mode = mode;

    if (state.mode === 'generator') {
        restoreNormalGeneratorStyleIfNeeded();
        applyAppsDefaultStyleIfNeeded();
    }

    syncTemporaryIconScale();
    syncMainModeButtons();
    updateModeControls();
    syncPaletteControls();
    updateGlobalDesign();
    rebuildGrid();
};

// --- GRID ---
// Return only the icons that should be rendered for the current mode/tab
function getVisibleIconsForCurrentMode() {
    if (state.mode === 'background') return [];
    if (state.mode === 'assets') return iconsDatabase.filter(icon => icon.tab === 'logos');
    if (state.mode === 'dock') return iconsDatabase.filter(icon => icon.tab === 'dock');
    return iconsDatabase.filter(icon => icon.tab !== 'logos' && icon.tab !== 'dock' && icon.tab === state.activeTab);
}

// Create or reuse an Auto Color background image for a specific icon
function ensureAutoColorForIcon(icon) {
    if (!state.autoColor.enabled || !Number.isInteger(icon.presetIndex)) return null;
    if (!state.autoColor.cardImages[icon.id]) {
        const folderDataUrl = getColoredFolderDataUrl(els.styleSelect.value, PRESETS[icon.presetIndex]);
        const img = new Image();
        img.src = folderDataUrl;
        state.autoColor.cardImages[icon.id] = img;
    }
    return state.autoColor.cardImages[icon.id];
}

// Create the upload card shown in the Custom tab
function createAddCard() {
    const addCard = document.createElement('div');
    addCard.className = 'card add-card';
    addCard.innerHTML = `<div class="plus-sign">+</div><span class="card-name" style="color:#64748b;">Upload Icon</span>`;
    addCard.addEventListener('click', () => els.iconUploadInput.click());
    return addCard;
}

// Resolve the best preview source for a card, including dynamic SVG replacements
function getIconPreviewSrc(icon) {
    if (icon.tab === 'dock' && state.assets.dynamicDockUrls[icon.displayName]) {
        return state.assets.dynamicDockUrls[icon.displayName];
    }

    if (state.assets.dynamicGenericUrls[icon.displayName]) {
        return state.assets.dynamicGenericUrls[icon.displayName];
    }

    return icon.src;
}

// Select or deselect a card and refresh the action bar
function toggleIconSelection(icon, card) {
    if (state.selectedIcons.has(icon)) {
        state.selectedIcons.delete(icon);
        card.classList.remove('selected');
    } else {
        state.selectedIcons.add(icon);
        card.classList.add('selected');
    }

    updateActionBar();
}

// Replace broken images with a neutral WIP/Missing placeholder
function markMissingAsset(card, img, icon) {
    if (!card || card.classList.contains('has-missing-asset')) return;

    const src = img?.dataset?.src || img?.getAttribute('src') || icon.src;
    state.missingAssets.add(src);
    icon.isMissing = true;
    card.classList.add('has-missing-asset');

    const bg = card.querySelector('.card-bg');
    if (bg) bg.style.display = 'none';

    const preview = card.querySelector('.card-preview');
    if (preview) preview.style.transform = 'none';

    const placeholder = document.createElement('div');
    placeholder.className = 'missing-asset';
    placeholder.setAttribute('aria-label', `${icon.displayName} asset missing`);
    placeholder.innerHTML = '<strong>WIP</strong><span>Missing</span>';

    if (img?.parentNode) {
        img.replaceWith(placeholder);
    } else {
        card.querySelector('.card-preview')?.appendChild(placeholder);
    }
}

// Create one grid card and wire missing-image handling
function createIconCard(icon) {
    const card = document.createElement('div');
    const hasBackground = icon.tab !== 'logos' && icon.tab !== 'dock';

    card.className = 'card';
    card.dataset.tab = icon.tab;
    card.dataset.id = icon.id;
    card.classList.toggle('selected', state.selectedIcons.has(icon));

    const bgHtml = hasBackground ? '<div class="card-bg"></div>' : '';
    const imgSrc = getIconPreviewSrc(icon);
    const name = escapeHtml(icon.displayName);

    card.innerHTML = `
        <div class="card-preview">
            ${bgHtml}
            <img class="card-icon" data-name="${name}" alt="" loading="lazy" decoding="async">
        </div>
        <span class="card-name">${name}</span>
    `;

    const img = card.querySelector('.card-icon');
    img.dataset.src = imgSrc;

    if (state.missingAssets.has(imgSrc) || icon.isMissing) {
        markMissingAsset(card, img, icon);
    } else {
        img.addEventListener('error', () => markMissingAsset(card, img, icon), { once: true });
        img.src = imgSrc;
    }

    const bg = card.querySelector('.card-bg');
    if (bg && icon.tab === 'apps' && shouldUseBrandPaletteForIcon(icon)) {
        const style = getEffectiveStyleForIcon(icon);
        if (style !== 'icon_only' && style !== 'custom') {
            bg.style.backgroundImage = `url("${getColoredFolderDataUrl(style, getEffectivePaletteForIcon(icon))}")`;
        }
    } else {
        const autoColorBackground = hasBackground ? ensureAutoColorForIcon(icon) : null;
        if (autoColorBackground && bg) {
            bg.style.backgroundImage = `url("${autoColorBackground.src}")`;
        }
    }

    card.addEventListener('click', () => toggleIconSelection(icon, card));
    return card;
}

// Render the current visible icon set from scratch
function buildGrid() {
    els.grid.innerHTML = '';

    if (state.mode === 'generator' && state.activeTab === 'custom') {
        els.grid.appendChild(createAddCard());
    }

    getVisibleIconsForCurrentMode().forEach(icon => {
        els.grid.appendChild(createIconCard(icon));
    });
}

// Clear the grid and rebuild it for the current context
function rebuildGrid() {
    buildGrid();
    updateActionBar();
}

// Update category visibility and selection state after tab/mode changes
function filterGrid() {
    document.querySelectorAll('.card').forEach(card => {
        if (card.classList.contains('add-card')) {
            card.classList.toggle('hidden', state.mode !== 'generator' || state.activeTab !== 'custom');
            return;
        }

        const tab = card.dataset.tab;

        if (state.mode === 'generator') {
            card.classList.toggle('hidden', tab === 'logos' || tab === 'dock' || tab !== state.activeTab);
        } else if (state.mode === 'assets') {
            card.classList.toggle('hidden', tab !== 'logos');
        } else if (state.mode === 'dock') {
            card.classList.toggle('hidden', tab !== 'dock');
        } else if (state.mode === 'background') {
            card.classList.add('hidden');
        }
    });
}

// --- CUSTOM UPLOAD LOGIC ---
// Turn uploaded images into custom icon cards using local object URLs
function addCustomIcons(files) {
    Array.from(files).forEach(file => {
        const newIcon = {
            id: `custom_${state.customIconCounter++}`,
            src: URL.createObjectURL(file),
            filename: file.name,
            displayName: fileNameWithoutExtension(file.name),
            tab: 'custom',
            presetIndex: undefined
        };

        iconsDatabase.push(newIcon);
        state.selectedIcons.add(newIcon);
    });

    state.activeTab = 'custom';
    syncTabButtons();
    rebuildGrid();
    els.iconUploadInput.value = '';
}

// Load a user-selected image as the custom folder background
function handleCustomBackgroundUpload(file) {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
        state.assets.customBgDataUrl = event.target.result;
        clearAutoColor();
        updateGlobalDesign();
    };
    reader.readAsDataURL(file);
}

function clearBackgroundOverlay() {
    state.assets.backgroundOverlayDataUrl = null;
    state.assets.backgroundOverlayImage = null;
    state.assets.backgroundOverlayFileName = '';
    if (els.backgroundOverlayUpload) els.backgroundOverlayUpload.value = '';
    resetBackgroundOverlayControls();
    updateBackgroundPreview();
}

function handleBackgroundOverlayUpload(file) {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async event => {
        try {
            const dataUrl = event.target.result;
            const img = await loadImage(dataUrl, 6000);
            state.assets.backgroundOverlayDataUrl = dataUrl;
            state.assets.backgroundOverlayImage = img;
            state.assets.backgroundOverlayFileName = file.name || 'Overlay image';
            if (els.backgroundOverlayUpload) els.backgroundOverlayUpload.value = '';
            resetBackgroundOverlayControls();
            updateBackgroundPreview();
        } catch (error) {
            console.error(error);
            alert(`Overlay image could not be loaded: ${error.message || error}`);
        }
    };
    reader.readAsDataURL(file);
}

// --- DOWNLOAD / EXPORT ---
// Load an image with timeout/error handling so export never hangs forever
function loadImage(src, timeoutMs = 4000) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        let timeout;

        const cleanup = () => {
            window.clearTimeout(timeout);
            img.onload = null;
            img.onerror = null;
        };

        img.decoding = 'async';
        img.onload = () => {
            cleanup();
            resolve(img);
        };
        img.onerror = () => {
            cleanup();
            reject(new Error(`Image could not be loaded: ${src}`));
        };
        timeout = window.setTimeout(() => {
            cleanup();
            reject(new Error(`Image load timed out: ${src}`));
        }, timeoutMs);
        img.src = src;
    });
}

// Convert a canvas to a Blob while preserving async error handling
function canvasToBlob(canvas, type = 'image/png') {
    return new Promise((resolve, reject) => {
        try {
            canvas.toBlob(blob => {
                if (blob) resolve(blob);
                else reject(new Error('Canvas export returned an empty blob.'));
            }, type);
        } catch (error) {
            reject(error);
        }
    });
}

// Fetch a URL as a Blob with a timeout fallback
async function fetchBlobWithTimeout(src, timeoutMs = 3500) {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), timeoutMs);

    try {
        const response = await fetch(src, { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.blob();
    } finally {
        window.clearTimeout(timeout);
    }
}

// Return reliable drawable dimensions for PNG, WebP and SVG images
function getImageDimensions(img, fallbackWidth = 1024, fallbackHeight = 1024) {
    const width = Math.max(1, img.naturalWidth || img.videoWidth || img.width || fallbackWidth);
    const height = Math.max(1, img.naturalHeight || img.videoHeight || img.height || fallbackHeight);
    return { width, height };
}

// Draw an image centered inside a transparent export canvas
function drawContainedImage(ctx, img, canvasWidth, canvasHeight, padding = 0) {
    const { width: sourceWidth, height: sourceHeight } = getImageDimensions(img, canvasWidth, canvasHeight);
    const availableWidth = Math.max(1, canvasWidth - padding * 2);
    const availableHeight = Math.max(1, canvasHeight - padding * 2);
    const ratio = Math.min(availableWidth / sourceWidth, availableHeight / sourceHeight);
    const width = sourceWidth * ratio;
    const height = sourceHeight * ratio;

    ctx.drawImage(
        img,
        (canvasWidth - width) / 2,
        (canvasHeight - height) / 2,
        width,
        height
    );
}

// Load an image through a fetched Blob URL to make SVG canvas export more reliable
async function loadImageFromFetchedBlob(src, fallbackName = 'Asset') {
    const blob = await fetchBlobWithTimeout(src, 5000);
    const objectUrl = URL.createObjectURL(blob);

    try {
        return await loadImage(objectUrl);
    } catch (error) {
        throw new Error(`${fallbackName} could not be rendered from fetched blob: ${error.message}`);
    } finally {
        URL.revokeObjectURL(objectUrl);
    }
}

// Convert text into a compact SVG data URL
function svgTextToDataUrl(svgText) {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgText)}`;
}

// Strip SVG features that can taint canvas export in some browsers, especially Firefox
function sanitizeSvgForCanvas(svgText) {
    return svgText
        .replace(/<\?xml[^>]*>/gi, '')
        .replace(/<!DOCTYPE[\s\S]*?>/gi, '')
        .replace(/\sfilter="url\([^"]+\)"/gi, '')
        .replace(/\sfilter='url\([^']+\)'/gi, '')
        .replace(/<filter\b[\s\S]*?<\/filter>/gi, '')
        .replace(/<script\b[\s\S]*?<\/script>/gi, '')
        .replace(/<foreignObject\b[\s\S]*?<\/foreignObject>/gi, '')
        .replace(/\s+on[a-z]+="[^"]*"/gi, '')
        .replace(/\s+on[a-z]+='[^']*'/gi, '');
}

// Load an SVG as same-origin text, sanitize it, then use a data URL for canvas drawing
async function loadSafeSvgImage(src, fallbackName = 'SVG') {
    const response = await fetch(src, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const svgText = await response.text();
    const safeSvgText = sanitizeSvgForCanvas(svgText);
    const dataUrl = svgTextToDataUrl(safeSvgText);

    try {
        return await loadImage(dataUrl, 6000);
    } catch (error) {
        throw new Error(`${fallbackName} could not be rendered as safe SVG: ${error.message}`);
    }
}

function isSvgSource(src) {
    return /\.svg(?:$|[?#])/i.test(String(src || ''));
}

// Render an image source onto canvas and export it as PNG
async function imageToBlob(src, size = 1024) {
    const img = await loadImage(src);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = size;
    canvas.height = size;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    drawContainedImage(ctx, img, size, size);
    return canvasToBlob(canvas);
}

// Rasterize an asset at its natural size and export it as PNG
async function imageToNativeBlob(src) {
    const img = await loadImage(src);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const { width, height } = getImageDimensions(img, 1024, 1024);

    canvas.width = width;
    canvas.height = height;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, width, height);
    return canvasToBlob(canvas);
}

// Rasterize a logo on a wide transparent canvas before writing it as PNG
async function logoToBlob(src, fallbackName = 'Logo', width = 1024, height = 256) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    if (isSvgSource(src)) {
        const safeSvgImg = await loadSafeSvgImage(src, fallbackName);
        drawContainedImage(ctx, safeSvgImg, width, height);
        return canvasToBlob(canvas);
    }

    const img = await loadImage(src);
    drawContainedImage(ctx, img, width, height);
    return canvasToBlob(canvas);
}

// Resolve any supported image source into a real PNG Blob
async function sourceToBlob(src, fallbackName = 'Asset') {
    if (state.missingAssets.has(src)) {
        throw new Error(`Missing asset: ${fallbackName}`);
    }

    try {
        return await imageToNativeBlob(src);
    } catch (renderError) {
        console.warn(`Canvas export failed for ${fallbackName}. Trying direct fetch fallback.`, renderError);
        return fetchBlobWithTimeout(src, 3500);
    }
}

// Sanitize card names before using them as zip filenames
function getSafeFileName(name) {
    return String(name || 'icon')
        .trim()
        .replace(/[\\/:*?"<>|]+/g, '-')
        .replace(/\s+/g, ' ')
        || 'icon';
}

// Resolve the exact icon image source used during export
function getExportIconSrc(icon) {
    if (icon.tab === 'dock' && state.assets.dynamicDockUrls[icon.displayName]) {
        return state.assets.dynamicDockUrls[icon.displayName];
    }

    if (state.assets.dynamicGenericUrls[icon.displayName]) {
        return state.assets.dynamicGenericUrls[icon.displayName];
    }

    return icon.src;
}

// Return the export filename suffix for the current mode/tab
function getExportSuffix(style) {
    let suffix = style === 'pods' ? '_Pod' : '_Folder';

    if (els.folderTilt.value === '-4' && style !== 'pods') suffix += '_Left';
    if (els.folderTilt.value === '4' && style !== 'pods') suffix += '_Right';

    return suffix;
}

// Resolve the background image used behind an icon during export
async function getFolderBackgroundImage(icon, style) {
    const effectiveStyle = getEffectiveStyleForIcon(icon, style);

    if (effectiveStyle === 'icon_only') {
        return null;
    }

    if (state.autoColor.enabled && icon.tab !== 'apps') {
        const autoColorBackground = state.autoColor.cardImages[icon.id] || ensureAutoColorForIcon(icon);
        if (autoColorBackground) return autoColorBackground;
    }

    if (effectiveStyle === 'custom' && state.assets.customBgDataUrl) {
        return loadImage(state.assets.customBgDataUrl);
    }

    if (icon.tab === 'apps' && shouldUseBrandPaletteForIcon(icon) && effectiveStyle !== 'custom') {
        return loadImage(getColoredFolderDataUrl(effectiveStyle, getEffectivePaletteForIcon(icon)));
    }

    if (state.assets.globalSvgImg && effectiveStyle === els.styleSelect.value) {
        return state.assets.globalSvgImg;
    }

    if (state.assets.globalFolderDataUrl && effectiveStyle === els.styleSelect.value) {
        const img = await loadImage(state.assets.globalFolderDataUrl);
        state.assets.globalSvgImg = img;
        return img;
    }

    if (effectiveStyle !== 'custom') {
        return loadImage(getColoredFolderDataUrl(effectiveStyle, getPalette()));
    }

    return null;
}



// Rasterize the current Background template as a PNG
async function backgroundToBlob(width = 1920, height = 1080) {
    if (isBackgroundExternalScreen()) {
        const img = await loadExternalBackgroundImage();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = BACKGROUND_EXTERNAL_SIZE.width;
        canvas.height = BACKGROUND_EXTERNAL_SIZE.height;
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        drawExternalBackgroundImage(ctx, img, canvas.width, canvas.height);

        return canvasToBlob(canvas);
    }

    const svgText = sanitizeSvgForCanvas(getColoredBackgroundSvg());
    const img = await loadImage(svgTextToDataUrl(svgText), 6000);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    renderStaticBackgroundFrame(ctx, img, width, height);

    return canvasToBlob(canvas);
}


function wait(ms) {
    return new Promise(resolve => window.setTimeout(resolve, ms));
}

function drawRoundedRectPath(ctx, x, y, width, height, radius) {
    const safeRadius = Math.max(0, Math.min(radius, width / 2, height / 2));
    ctx.beginPath();
    ctx.moveTo(x + safeRadius, y);
    ctx.lineTo(x + width - safeRadius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
    ctx.lineTo(x + width, y + height - safeRadius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
    ctx.lineTo(x + safeRadius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
    ctx.lineTo(x, y + safeRadius);
    ctx.quadraticCurveTo(x, y, x + safeRadius, y);
    ctx.closePath();
}

function drawAnimatedBackgroundTile(ctx, x, y, { scale = 1, opacity = 1 } = {}) {
    const alpha = Math.max(0, getBackgroundPatternOpacity() * opacity);
    if (alpha <= 0) return;

    ctx.save();
    ctx.transform(1, 0, -0.5, 0.866025, x, y);
    ctx.translate(98, 95);
    ctx.scale(scale, scale);
    drawRoundedRectPath(ctx, -98, -95, 196, 190, 20);
    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    ctx.fill();
    ctx.restore();
}

function forEachBackgroundTile(width, height, callback, { offsetX = 0, offsetY = 0 } = {}) {
    const columnStep = 241;
    const rowStep = 194;
    const cycleX = columnStep * 2;
    const cycleY = rowStep * 2;
    const baseEvenX = 45;
    const baseOddX = -75;
    const baseStartY = -28.2725;

    const minRow = -3;
    const maxRow = Math.ceil((height + cycleY + 260) / rowStep) + 3;
    const minCol = -4;
    const maxCol = Math.ceil((width + cycleX + 260) / columnStep) + 4;

    for (let row = minRow; row <= maxRow; row++) {
        const isEvenRow = Math.abs(row % 2) === 0;
        const baseX = isEvenRow ? baseEvenX : baseOddX;
        const y = baseStartY + row * rowStep + offsetY;

        for (let col = minCol; col <= maxCol; col++) {
            const x = baseX + col * columnStep + offsetX;
            callback({ x, y, row, col, columnStep, rowStep });
        }
    }
}

function fract(value) {
    return value - Math.floor(value);
}

function pseudoRandom2D(x, y) {
    return fract(Math.sin(x * 127.1 + y * 311.7) * 43758.5453123);
}

function smoothPulse(value, center, width) {
    const distance = Math.abs(value - center);
    if (distance >= width) return 0;
    const normalized = 1 - distance / width;
    return normalized * normalized * (3 - 2 * normalized);
}

function drawDriftBackgroundGrid(ctx, width, height, progress) {
    const columnStep = 241;
    const rowStep = 194;
    const offsetX = -progress * columnStep * 2;
    const offsetY = -progress * rowStep * 2;

    forEachBackgroundTile(width, height, ({ x, y }) => {
        drawAnimatedBackgroundTile(ctx, x, y);
    }, { offsetX, offsetY });
}

function drawRippleBackgroundGrid(ctx, width, height, progress) {
    const centerX = width * 0.52;
    const centerY = height * 0.48;
    const maxDistance = Math.hypot(width * 0.62, height * 0.62);
    const waveHead = progress * 1.18;

    forEachBackgroundTile(width, height, ({ x, y }) => {
        const tileCenterX = x + 98;
        const tileCenterY = y + 95;
        const normalizedDistance = Math.hypot(tileCenterX - centerX, tileCenterY - centerY) / maxDistance;
        const pulse = smoothPulse(normalizedDistance, waveHead, 0.16);
        const trailing = smoothPulse(normalizedDistance, fract(waveHead + 0.45), 0.12) * 0.45;
        const scale = 1 + pulse * 0.1 + trailing * 0.04;
        const opacity = 1 + pulse * 0.45 + trailing * 0.18;
        drawAnimatedBackgroundTile(ctx, x, y, { scale, opacity });
    });
}

function drawEchoBackgroundGrid(ctx, width, height, progress) {
    const echoDuration = 0.22;

    forEachBackgroundTile(width, height, ({ x, y, row, col }) => {
        drawAnimatedBackgroundTile(ctx, x, y);

        const seedA = pseudoRandom2D(row, col);
        const seedB = pseudoRandom2D(row + 17.13, col - 8.41);
        const eventStarts = [];

        if (seedA > 0.58) eventStarts.push(fract(seedA * 1.37));
        if (seedB > 0.72) eventStarts.push(fract(seedB * 1.91 + 0.33));

        eventStarts.forEach(start => {
            const local = fract(progress - start + 1);
            if (local > echoDuration) return;

            const t = local / echoDuration;
            const pulse = 1 - t;
            const scale = 0.15 + pulse * 0.85;
            const opacity = pulse * 0.75;
            drawAnimatedBackgroundTile(ctx, x, y, { scale, opacity });
        });
    });
}

function easeInOutCubic(t) {
    return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function getTapEchoTileSequence(tiles) {
    return tiles
        .map((tile, index) => ({
            index,
            weight: pseudoRandom2D(tile.row * 2.173 + 11.7, tile.col * 3.911 - 8.2)
        }))
        .sort((a, b) => a.weight - b.weight)
        .map(entry => entry.index);
}

function getTapEchoEventTileIndices(sequence, eventStep) {
    if (!sequence.length) return [];
    if (sequence.length === 1) return [sequence[0]];

    const count = sequence.length;
    const tapCountRoll = pseudoRandom2D(eventStep * 1.31 + 4.7, 9.2);
    const tapCount = tapCountRoll > 0.82 ? 3 : tapCountRoll > 0.46 ? 2 : 1;
    const positions = [];

    for (let tapIndex = 0; tapIndex < tapCount; tapIndex += 1) {
        let position = Math.floor(
            pseudoRandom2D(eventStep * 2.73 + 3.1, tapIndex * 7.17 + 1.9) * count
        );
        let guard = 0;

        while (guard < count && positions.includes(position)) {
            const jump = 1 + Math.floor(
                pseudoRandom2D(eventStep * 0.97 + tapIndex * 1.83 + 6.4, guard * 2.11 + 8.7)
                * Math.max(1, count - 1)
            );
            position = (position + jump) % count;
            guard += 1;
        }

        positions.push(position);
    }

    return positions.map(position => sequence[position]);
}

function getTapEchoMotion(t) {
    const pressDuration = 0.14;
    const holdDuration = 0.34;
    const releaseDuration = 0.38;
    const totalActive = pressDuration + holdDuration + releaseDuration;
    const minScale = 0.5;

    if (t < pressDuration) {
        const local = t / pressDuration;
        return 1 - easeInOutCubic(local) * (1 - minScale);
    }

    if (t < pressDuration + holdDuration) {
        return minScale;
    }

    if (t < totalActive) {
        const local = (t - pressDuration - holdDuration) / releaseDuration;
        return minScale + easeInOutCubic(local) * (1 - minScale);
    }

    return 1;
}

function getTapEchoEnvelope(t) {
    const pressDuration = 0.14;
    const holdDuration = 0.34;
    const releaseDuration = 0.38;
    const totalActive = pressDuration + holdDuration + releaseDuration;

    if (t < 0 || t >= totalActive) {
        return 0;
    }

    if (t < pressDuration) {
        return easeInOutCubic(t / pressDuration);
    }

    if (t < pressDuration + holdDuration) {
        return 1;
    }

    const local = (t - pressDuration - holdDuration) / releaseDuration;
    return 1 - easeInOutCubic(local);
}

function drawTapEchoBackgroundGrid(ctx, width, height, progress) {
    const tiles = collectBackgroundTiles(width, height);
    if (!tiles.length) return;

    const sequence = getTapEchoTileSequence(tiles);
    const totalDurationSeconds = getBackgroundVideoDurationMs() / 1000;
    const elapsedSeconds = progress * totalDurationSeconds;
    const eventSpacingSeconds = 0.22;
    const activeDurationSeconds = 0.92;
    const latestEventStep = Math.floor(elapsedSeconds / eventSpacingSeconds);
    const maxConcurrentEvents = Math.ceil(activeDurationSeconds / eventSpacingSeconds) + 1;
    const tileStates = new Map();

    for (let offset = 0; offset < maxConcurrentEvents; offset += 1) {
        const eventStep = latestEventStep - offset;
        if (eventStep < 0) continue;

        const eventStartSeconds = eventStep * eventSpacingSeconds;
        const eventElapsedSeconds = elapsedSeconds - eventStartSeconds;
        if (eventElapsedSeconds < 0 || eventElapsedSeconds > activeDurationSeconds) continue;

        const local = eventElapsedSeconds / activeDurationSeconds;
        const activeIndices = getTapEchoEventTileIndices(sequence, eventStep);
        if (!activeIndices.length) continue;

        const scale = getTapEchoMotion(local);
        const pressedAmount = 1 - Math.min(1, Math.abs(scale - 0.5) / 0.5);
        if (pressedAmount <= 0.01) continue;

        activeIndices.forEach(activeIndex => {
            if (activeIndex < 0) return;

            const current = tileStates.get(activeIndex) || {
                baseOpacity: 1,
                innerOpacity: 0,
                scale: 1,
                strength: 0
            };
            const baseOpacity = 1 - pressedAmount * 0.45;
            const innerOpacity = pressedAmount * 0.34;

            if (pressedAmount >= current.strength) {
                current.scale = scale;
                current.strength = pressedAmount;
            }

            current.baseOpacity = Math.min(current.baseOpacity, baseOpacity);
            current.innerOpacity = Math.max(current.innerOpacity, innerOpacity);
            tileStates.set(activeIndex, current);
        });
    }

    tiles.forEach((tile, index) => {
        const state = tileStates.get(index);
        drawAnimatedBackgroundTile(ctx, tile.x, tile.y, { opacity: state ? state.baseOpacity : 1 });

        if (!state || state.innerOpacity <= 0.01) return;
        drawAnimatedBackgroundTile(ctx, tile.x, tile.y, {
            scale: state.scale,
            opacity: state.innerOpacity
        });
    });
}


function collectBackgroundTiles(width, height) {
    const tiles = [];
    forEachBackgroundTile(width, height, tile => tiles.push(tile));
    return tiles;
}

function tileKey(row, col) {
    return `${row}:${col}`;
}

function drawVerticalSwapBackgroundGrid(ctx, width, height, progress) {
    const tiles = collectBackgroundTiles(width, height);
    const tileMap = new Map(tiles.map(tile => [tileKey(tile.row, tile.col), tile]));
    const swapped = new Set();
    const activePairs = [];
    const duration = 0.34;

    tiles.forEach(tile => {
        if (tile.row % 2 !== 0) return;
        const target = tileMap.get(tileKey(tile.row + 1, tile.col));
        if (!target) return;

        const seed = pseudoRandom2D(tile.row * 0.73 + 5.2, tile.col * 1.31 - 8.8);
        if (seed < 0.72) return;

        const start = fract(seed * 1.47 + pseudoRandom2D(tile.row + 19.4, tile.col - 3.7) * 0.2);
        const local = fract(progress - start + 1);
        if (local > duration) return;

        swapped.add(tileKey(tile.row, tile.col));
        swapped.add(tileKey(target.row, target.col));
        activePairs.push({ a: tile, b: target, t: local / duration });
    });

    tiles.forEach(tile => {
        if (swapped.has(tileKey(tile.row, tile.col))) return;
        drawAnimatedBackgroundTile(ctx, tile.x, tile.y);
    });

    activePairs.forEach(({ a, b, t }) => {
        const motion = 0.5 - Math.cos(t * Math.PI * 2) * 0.5;
        const easeGlow = Math.sin(t * Math.PI);
        const ax = a.x + (b.x - a.x) * motion;
        const ay = a.y + (b.y - a.y) * motion;
        const bx = b.x + (a.x - b.x) * motion;
        const by = b.y + (a.y - b.y) * motion;
        const scale = 1 + easeGlow * 0.04;
        const opacity = 1 + easeGlow * 0.28;

        drawAnimatedBackgroundTile(ctx, ax, ay, { scale, opacity });
        drawAnimatedBackgroundTile(ctx, bx, by, { scale, opacity });
    });
}

function collectVerticalSwapPairs(tiles) {
    const tileMap = new Map(tiles.map(tile => [tileKey(tile.row, tile.col), tile]));
    return tiles
        .filter(tile => tile.row % 2 === 0)
        .map(tile => ({ a: tile, b: tileMap.get(tileKey(tile.row + 1, tile.col)) }))
        .filter(pair => pair.b);
}

function getEchoSwapEventType(step) {
    return pseudoRandom2D(step * 1.137 + 2.1, step * 0.713 + 8.4) > 0.4 ? 'tap' : 'swap';
}

function getEchoSwapTapIndex(sequence, step) {
    if (!sequence.length) return -1;
    if (sequence.length === 1) return sequence[0];

    let rawIndex = Math.floor(pseudoRandom2D(step * 1.913 + 4.2, step * -0.717 + 8.6) * sequence.length);
    const previousRawIndex = Math.floor(pseudoRandom2D((step - 1) * 1.913 + 4.2, (step - 1) * -0.717 + 8.6) * sequence.length);

    if (step > 0 && rawIndex === previousRawIndex) {
        const offset = 1 + Math.floor(pseudoRandom2D(step * 2.771 + 1.3, step * 0.553 - 9.1) * (sequence.length - 1));
        rawIndex = (rawIndex + offset) % sequence.length;
    }

    return sequence[rawIndex];
}

function getEchoSwapPairIndex(sequenceLength, step) {
    if (sequenceLength <= 1) return 0;

    let rawIndex = Math.floor(pseudoRandom2D(step * 1.531 + 6.8, step * -0.881 + 2.4) * sequenceLength);
    const previousRawIndex = Math.floor(pseudoRandom2D((step - 1) * 1.531 + 6.8, (step - 1) * -0.881 + 2.4) * sequenceLength);

    if (step > 0 && rawIndex === previousRawIndex) {
        const offset = 1 + Math.floor(pseudoRandom2D(step * 0.913 + 3.6, step * 1.241 - 5.9) * (sequenceLength - 1));
        rawIndex = (rawIndex + offset) % sequenceLength;
    }

    return rawIndex;
}

function drawEchoSwapBackgroundGrid(ctx, width, height, progress) {
    const tiles = collectBackgroundTiles(width, height);
    if (!tiles.length) return;

    const totalDurationSeconds = getBackgroundVideoDurationMs() / 1000;
    const elapsedSeconds = progress * totalDurationSeconds;

    const tapSequence = getTapEchoTileSequence(tiles);
    const tapCycleDurationSeconds = 0.98;
    const tapStep = Math.floor(elapsedSeconds / tapCycleDurationSeconds);
    const tapLocalSeconds = elapsedSeconds - tapStep * tapCycleDurationSeconds;
    const tapLocal = tapLocalSeconds / tapCycleDurationSeconds;
    const tapEnvelope = getTapEchoEnvelope(tapLocal);

    const pairs = collectVerticalSwapPairs(tiles);
    const pairSequence = pairs
        .map((pair, index) => ({
            index,
            weight: pseudoRandom2D(pair.a.row * 2.37 + 1.8, pair.a.col * 3.17 - 6.2)
        }))
        .sort((a, b) => a.weight - b.weight)
        .map(entry => entry.index);

    let activeSwapPair = null;
    let swapMotion = 0;
    let swapEnvelope = 0;
    let swappedKeys = new Set();

    if (pairSequence.length) {
        const swapCycleDurationSeconds = 2.65;
        const swapActiveDurationSeconds = 0.92;
        const swapStep = Math.floor(elapsedSeconds / swapCycleDurationSeconds);
        const swapLocalSeconds = elapsedSeconds - swapStep * swapCycleDurationSeconds;
        const hasActiveSwap = swapLocalSeconds < swapActiveDurationSeconds;

        if (hasActiveSwap) {
            activeSwapPair = pairs[pairSequence[getEchoSwapPairIndex(pairSequence.length, swapStep)]];
            const swapT = swapLocalSeconds / swapActiveDurationSeconds;
            swapMotion = easeInOutCubic(Math.min(1, swapT));
            const fadeIn = easeInOutCubic(Math.min(1, swapT / 0.18));
            const fadeOut = 1 - easeInOutCubic(Math.max(0, (swapT - 0.7) / 0.3));
            swapEnvelope = Math.max(0, Math.min(1, fadeIn, fadeOut));
            swappedKeys = new Set([
                tileKey(activeSwapPair.a.row, activeSwapPair.a.col),
                tileKey(activeSwapPair.b.row, activeSwapPair.b.col)
            ]);
        }
    }

    let activeTapIndex = getEchoSwapTapIndex(tapSequence, tapStep);
    if (
        activeTapIndex >= 0
        && swappedKeys.size
        && swappedKeys.has(tileKey(tiles[activeTapIndex].row, tiles[activeTapIndex].col))
    ) {
        activeTapIndex = getEchoSwapTapIndex(tapSequence, tapStep + 1);
    }

    tiles.forEach((tile, index) => {
        const key = tileKey(tile.row, tile.col);
        if (swappedKeys.has(key)) return;

        const isActiveTap = index === activeTapIndex;
        const baseOpacity = isActiveTap ? 1 - tapEnvelope * 0.5 : 1;
        drawAnimatedBackgroundTile(ctx, tile.x, tile.y, { opacity: baseOpacity });

        if (!isActiveTap || tapEnvelope <= 0) return;

        const scale = getTapEchoMotion(tapLocal);
        const pressedAmount = 1 - Math.min(1, Math.abs(scale - 0.5) / 0.5);
        const innerOpacity = 0.24 + tapEnvelope * 0.16 + pressedAmount * 0.08;
        drawAnimatedBackgroundTile(ctx, tile.x, tile.y, { scale, opacity: innerOpacity });
    });

    if (!activeSwapPair || swapEnvelope <= 0) return;

    const ax = activeSwapPair.a.x + (activeSwapPair.b.x - activeSwapPair.a.x) * swapMotion;
    const ay = activeSwapPair.a.y + (activeSwapPair.b.y - activeSwapPair.a.y) * swapMotion;
    const bx = activeSwapPair.b.x + (activeSwapPair.a.x - activeSwapPair.b.x) * swapMotion;
    const by = activeSwapPair.b.y + (activeSwapPair.a.y - activeSwapPair.b.y) * swapMotion;
    const scale = 1 + swapEnvelope * 0.04;
    const opacity = 0.72 + swapEnvelope * 0.18;

    drawAnimatedBackgroundTile(ctx, ax, ay, { scale, opacity });
    drawAnimatedBackgroundTile(ctx, bx, by, { scale, opacity });
}


function drawParallaxSwapDriftBackgroundGrid(ctx, width, height, progress) {
    const tiles = collectBackgroundTiles(width, height);
    if (!tiles.length) return;

    const stripes = new Map();
    tiles.forEach(tile => {
        const stripeIndex = tile.col + Math.floor(tile.row / 2);
        if (!stripes.has(stripeIndex)) stripes.set(stripeIndex, []);
        stripes.get(stripeIndex).push(tile);
    });

    const columnDelay = 0.06;
    const restWindow = 0.38;
    const moveWindow = 1 - restWindow;
    const periodOffsetX = -241;
    const periodOffsetY = 388;

    stripes.forEach((stripeTiles, stripeIndex) => {
        const phase = fract(progress - stripeIndex * columnDelay + 1);
        const moveProgress = phase < restWindow
            ? 0
            : easeInOutCubic((phase - restWindow) / moveWindow);
        const xOffset = periodOffsetX * moveProgress;
        const yOffset = periodOffsetY * moveProgress;
        const opacity = 1 + 0.035 * Math.sin(moveProgress * Math.PI);

        stripeTiles.forEach(tile => {
            drawAnimatedBackgroundTile(ctx, tile.x + xOffset, tile.y + yOffset, { opacity });
        });
    });
}


function drawDiagonalColumnFlowContinuousBackgroundGrid(ctx, width, height, progress) {
    const tiles = collectBackgroundTiles(width, height);
    if (!tiles.length) return;

    const stripes = new Map();
    tiles.forEach(tile => {
        const stripeIndex = tile.col + Math.floor(tile.row / 2);
        if (!stripes.has(stripeIndex)) stripes.set(stripeIndex, []);
        stripes.get(stripeIndex).push(tile);
    });

    const stripeIndices = Array.from(stripes.keys());
    const minStripeIndex = Math.min(...stripeIndices);
    const columnDelay = 0.06;
    const initialLead = 0.28;
    const periodOffsetX = -241;
    const periodOffsetY = 388;

    stripes.forEach((stripeTiles, stripeIndex) => {
        const stripeOrder = stripeIndex - minStripeIndex;
        const moveProgress = fract(progress + initialLead - stripeOrder * columnDelay + 1);
        const xOffset = periodOffsetX * moveProgress;
        const yOffset = periodOffsetY * moveProgress;
        const opacity = 1 + 0.035 * Math.sin(moveProgress * Math.PI);

        stripeTiles.forEach(tile => {
            drawAnimatedBackgroundTile(ctx, tile.x + xOffset, tile.y + yOffset, { opacity });
        });
    });
}

function drawDiagonalColumnFlowVariableBackgroundGrid(ctx, width, height, progress) {
    const tiles = collectBackgroundTiles(width, height);
    if (!tiles.length) return;

    const stripes = new Map();
    tiles.forEach(tile => {
        const stripeIndex = tile.col + Math.floor(tile.row / 2);
        if (!stripes.has(stripeIndex)) stripes.set(stripeIndex, []);
        stripes.get(stripeIndex).push(tile);
    });

    const stripeIndices = Array.from(stripes.keys());
    const minStripeIndex = Math.min(...stripeIndices);
    const columnDelay = 0.06;
    const initialLead = 0.28;
    const periodOffsetX = -241;
    const periodOffsetY = 388;
    const speedCycleRange = 7;
    const wrapOffsets = [-1, 0, 1];

    stripes.forEach((stripeTiles, stripeIndex) => {
        const stripeOrder = stripeIndex - minStripeIndex;
        const uniqueSeed = fract((stripeOrder + 1) * 0.61803398875 + 0.17320508076);
        const secondarySeed = fract((stripeOrder + 1) * 0.41421356237 + 0.31783724519);
        const tertiarySeed = fract((stripeOrder + 1) * 0.73205080757 + 0.219543);
        const speedCycles = 1 + ((stripeOrder * 5 + 2) % speedCycleRange);
        const phaseOffset = secondarySeed * 0.94;
        const speedWobble = Math.sin((progress + tertiarySeed) * Math.PI * 2) * 0.055
            + Math.sin((progress * 2 + uniqueSeed) * Math.PI * 2) * 0.025;
        const moveProgress = fract(
            progress * speedCycles
            + speedWobble
            + initialLead
            - stripeOrder * columnDelay
            + phaseOffset
            + 1
        );
        const xOffset = periodOffsetX * moveProgress;
        const yOffset = periodOffsetY * moveProgress;
        const opacity = 1 + 0.035 * Math.sin(moveProgress * Math.PI);

        wrapOffsets.forEach(wrapIndex => {
            const wrapX = xOffset + periodOffsetX * wrapIndex;
            const wrapY = yOffset + periodOffsetY * wrapIndex;

            stripeTiles.forEach(tile => {
                drawAnimatedBackgroundTile(ctx, tile.x + wrapX, tile.y + wrapY, { opacity });
            });
        });
    });
}


function renderBackgroundGrid(ctx, width, height, progress) {
    switch (getBackgroundAnimation()) {
        case 'ripple':
            drawRippleBackgroundGrid(ctx, width, height, progress);
            break;
        case 'echo':
            drawEchoBackgroundGrid(ctx, width, height, progress);
            break;
        case 'tapEcho':
            drawTapEchoBackgroundGrid(ctx, width, height, progress);
            break;
        case 'swap':
            drawVerticalSwapBackgroundGrid(ctx, width, height, progress);
            break;
        case 'swapDrift':
            drawParallaxSwapDriftBackgroundGrid(ctx, width, height, progress);
            break;
        case 'diagonalColumnFlowContinuous':
            drawDiagonalColumnFlowContinuousBackgroundGrid(ctx, width, height, progress);
            break;
        case 'diagonalColumnFlowVariable':
            drawDiagonalColumnFlowVariableBackgroundGrid(ctx, width, height, progress);
            break;
        case 'drift':
        default:
            drawDriftBackgroundGrid(ctx, width, height, progress);
            break;
    }
}

function renderAnimatedBackgroundFrame(ctx, width, height, progress) {
    const palette = getPalette();
    const scaleX = width / BACKGROUND_DESIGN_SIZE.width;
    const scaleY = height / BACKGROUND_DESIGN_SIZE.height;

    ctx.clearRect(0, 0, width, height);

    const backgroundGradient = ctx.createLinearGradient(0, 0, 0, height);
    backgroundGradient.addColorStop(0, palette.top);
    backgroundGradient.addColorStop(1, palette.bottom);
    ctx.fillStyle = backgroundGradient;
    ctx.fillRect(0, 0, width, height);

    ctx.save();
    ctx.scale(scaleX, scaleY);
    renderBackgroundGrid(ctx, BACKGROUND_DESIGN_SIZE.width, BACKGROUND_DESIGN_SIZE.height, progress);
    ctx.restore();

    const highlight = ctx.createLinearGradient(0, 0, width, height);
    highlight.addColorStop(0, 'rgba(255,255,255,0.028)');
    highlight.addColorStop(0.45, 'rgba(255,255,255,0.012)');
    highlight.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = highlight;
    ctx.fillRect(0, 0, width, height);
    drawBackgroundOverlay(ctx, width, height);
}

async function backgroundVideoToBlob({ width, height, fps, durationMs, videoBitsPerSecond } = BACKGROUND_WEBM_SETTINGS) {
    if (!isBackgroundVideoSupported()) {
        throw new Error('WEBM export is not supported in this browser.');
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    renderAnimatedBackgroundFrame(ctx, width, height, 0);

    const stream = canvas.captureStream(fps);
    const track = stream.getVideoTracks()[0];
    const mimeType = getBackgroundVideoMimeType();
    const recorder = new MediaRecorder(stream, {
        mimeType,
        videoBitsPerSecond: videoBitsPerSecond || BACKGROUND_WEBM_SETTINGS.videoBitsPerSecond
    });
    const chunks = [];

    const completed = new Promise((resolve, reject) => {
        recorder.ondataavailable = event => {
            if (event.data?.size) chunks.push(event.data);
        };
        recorder.onerror = () => reject(recorder.error || new Error('MediaRecorder error'));
        recorder.onstop = () => resolve();
    });

    recorder.start();

    const frameCount = Math.max(1, Math.round((durationMs / 1000) * fps));
    const frameDuration = 1000 / fps;

    for (let frame = 0; frame < frameCount; frame++) {
        const progress = frame / frameCount;
        renderAnimatedBackgroundFrame(ctx, width, height, progress);

        if (typeof track?.requestFrame === 'function') {
            track.requestFrame();
        }

        if (frame === 0 || (frame + 1) % 30 === 0 || frame === frameCount - 1) {
            setDownloadButtonLoading(`Rendering ${frame + 1}/${frameCount}`);
        }

        await wait(frameDuration);
    }

    recorder.stop();
    await completed;
    stream.getTracks().forEach(mediaTrack => mediaTrack.stop());

    return new Blob(chunks, { type: mimeType });
}

function waitWithTimeout(promise, timeoutMs, errorMessage) {
    return Promise.race([
        promise,
        new Promise((_, reject) => setTimeout(() => reject(new Error(errorMessage)), timeoutMs))
    ]);
}

function loadExternalScript(src, timeoutMs = 15000) {
    return waitWithTimeout(new Promise((resolve, reject) => {
        const existing = Array.from(document.scripts).find(script => script.src === src);
        if (existing) {
            if (existing.dataset.loaded === 'true') {
                resolve();
                return;
            }

            existing.addEventListener('load', () => resolve(), { once: true });
            existing.addEventListener('error', () => reject(new Error(`Could not load ${src}`)), { once: true });
            return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => {
            script.dataset.loaded = 'true';
            resolve();
        };
        script.onerror = () => reject(new Error(`Could not load ${src}`));
        document.head.appendChild(script);
    }), timeoutMs, `Timed out while loading ${src}`);
}

function resolveFfmpegUrl(url) {
    return new URL(url, document.baseURI).href;
}

async function urlToBlobUrl(url, mimeType) {
    const resolvedUrl = resolveFfmpegUrl(url);
    const response = await waitWithTimeout(fetch(resolvedUrl), 15000, `Timed out while fetching ${resolvedUrl}`);
    if (!response.ok) {
        throw new Error(`Could not fetch ${resolvedUrl}`);
    }

    const blob = await response.blob();
    return URL.createObjectURL(new Blob([blob], { type: mimeType }));
}

async function loadFfmpegFromSource(source) {
    const scriptUrl = resolveFfmpegUrl(source.ffmpeg);
    await loadExternalScript(scriptUrl);

    const ffmpegNamespace = window.FFmpegWASM || window.FFmpeg || {};
    const FFmpegClass = ffmpegNamespace.FFmpeg;
    if (!FFmpegClass) {
        throw new Error(`ffmpeg.js did not expose the FFmpeg class for the ${source.label} source`);
    }

    const ffmpeg = new FFmpegClass();
    ffmpeg.on?.('log', ({ message }) => {
        if (!message) return;
        if (/frame=|time=|video:/i.test(message)) {
            setDownloadButtonLoading('Encoding MP4...');
        }
    });

    // Let ffmpeg.js load its own worker chunk from the same folder as ffmpeg.js
    // Passing classWorkerURL forces a module worker and can break importScripts in some setups
    const coreURL = await urlToBlobUrl(source.coreJs, 'text/javascript');
    const wasmURL = await urlToBlobUrl(source.coreWasm, 'application/wasm');
    const temporaryBlobUrls = [coreURL, wasmURL];

    try {
        await waitWithTimeout(ffmpeg.load({
            coreURL,
            wasmURL
        }), 30000, `Timed out while loading ffmpeg core from the ${source.label} source`);
    } catch (error) {
        temporaryBlobUrls.forEach(url => URL.revokeObjectURL(url));
        const workerHint = source.label === 'local'
            ? ' Make sure vendor/ffmpeg/814.ffmpeg.js exists next to ffmpeg.js, then hard refresh the page.'
            : '';
        throw new Error(`${error.message || error}${workerHint}`);
    }

    return { ffmpeg, temporaryBlobUrls, source };
}

async function ensureFfmpegLoaded() {
    if (state.assets.ffmpegInstance) return state.assets.ffmpegInstance;
    if (state.assets.ffmpegLoadPromise) return state.assets.ffmpegLoadPromise;

    state.assets.ffmpegLoadPromise = (async () => {
        let lastError = null;
        const sources = [FFMPEG_WASM_SOURCES.local, FFMPEG_WASM_SOURCES.cdn];

        for (const source of sources) {
            try {
                setDownloadButtonLoading(source.label === 'local'
                    ? 'Loading MP4 encoder...'
                    : 'Loading MP4 encoder fallback...');

                const loaded = await loadFfmpegFromSource(source);
                state.assets.ffmpegInstance = loaded.ffmpeg;
                state.assets.ffmpegBlobUrls = loaded.temporaryBlobUrls || [];
                state.assets.ffmpegSource = source.label;
                return loaded.ffmpeg;
            } catch (error) {
                console.warn(`Could not initialize ffmpeg from the ${source.label} source`, error);
                lastError = error;
            }
        }

        throw new Error(`Could not load the MP4 encoder. Add the four local ffmpeg files under vendor/ffmpeg/ or check CDN access. ${lastError?.message || ''}`.trim());
    })();

    try {
        return await state.assets.ffmpegLoadPromise;
    } finally {
        state.assets.ffmpegLoadPromise = null;
    }
}

function canvasToPngBytes(canvas) {
    return new Promise((resolve, reject) => {
        canvas.toBlob(async blob => {
            if (!blob) {
                reject(new Error('Could not render a PNG frame.'));
                return;
            }

            try {
                resolve(new Uint8Array(await blob.arrayBuffer()));
            } catch (error) {
                reject(error);
            }
        }, 'image/png');
    });
}

async function writeBackgroundPngFrames(ffmpeg, { width, height, fps, durationMs }, framePrefix) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const frameCount = Math.max(1, Math.round((durationMs / 1000) * fps));

    canvas.width = width;
    canvas.height = height;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    for (let frame = 0; frame < frameCount; frame++) {
        const progress = frame / frameCount;
        const frameName = `${framePrefix}-${String(frame).padStart(4, '0')}.png`;

        renderAnimatedBackgroundFrame(ctx, width, height, progress);
        await ffmpeg.writeFile(frameName, await canvasToPngBytes(canvas));

        if (frame === 0 || (frame + 1) % 15 === 0 || frame === frameCount - 1) {
            setDownloadButtonLoading(`Rendering frames ${frame + 1}/${frameCount}`);
        }
    }

    return frameCount;
}

async function cleanupFfmpegFiles(ffmpeg, files) {
    for (const file of files) {
        try {
            await ffmpeg.deleteFile?.(file);
        } catch (error) {}
    }
}

async function backgroundMp4ToBlob({ width, height, fps, durationMs } = BACKGROUND_MP4_SETTINGS) {
    const ffmpeg = await ensureFfmpegLoaded();
    const runId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const framePrefix = `background-frame-${runId}`;
    const outputName = `background-${runId}.mp4`;
    const writtenFiles = [];

    setDownloadButtonLoading('Preparing PNG frames...');

    try {
        const frameCount = await writeBackgroundPngFrames(ffmpeg, { width, height, fps, durationMs }, framePrefix);
        for (let frame = 0; frame < frameCount; frame++) {
            writtenFiles.push(`${framePrefix}-${String(frame).padStart(4, '0')}.png`);
        }
        writtenFiles.push(outputName);

        setDownloadButtonLoading('Encoding MP4...');
        await ffmpeg.exec([
            '-framerate', String(fps),
            '-i', `${framePrefix}-%04d.png`,
            '-c:v', 'libx264',
            '-preset', 'medium',
            '-crf', '15',
            '-tune', 'animation',
            '-profile:v', 'baseline',
            '-level', '4.0',
            '-g', String(fps),
            '-keyint_min', String(fps),
            '-sc_threshold', '0',
            '-pix_fmt', 'yuv420p',
            '-movflags', '+faststart',
            '-an',
            outputName
        ]);

        const outputData = await ffmpeg.readFile(outputName);
        const bytes = outputData instanceof Uint8Array ? outputData : new Uint8Array(outputData);
        return new Blob([bytes.buffer], { type: 'video/mp4' });
    } finally {
        await cleanupFfmpegFiles(ffmpeg, writtenFiles);
    }
}

// Export the Background mode as either a standalone PNG or a seamless WEBM loop
async function exportBackgroundImage() {
    if (typeof saveAs === 'undefined') {
        alert('FileSaver is still loading or unavailable. If you are opening this file offline, check that FileSaver can load from the CDN.');
        return;
    }

    const format = getBackgroundExportFormat();

    try {
        els.downloadBtn.disabled = true;
        setDownloadButtonLoading('Rendering...');

        if (format === 'mp4') {
            const settings = getBackgroundMp4Settings();
            saveAs(await backgroundMp4ToBlob(settings), settings.fileName);
        } else if (format === 'webm') {
            const settings = getBackgroundWebmSettings();
            saveAs(await backgroundVideoToBlob(settings), settings.fileName);
        } else {
            const fileName = isBackgroundExternalScreen()
                ? `Cocoon_External_${getBackgroundExternalTheme()}_${getBackgroundExternalVariant()}.png`
                : 'Cocoon_Background.png';
            saveAs(await backgroundToBlob(), fileName);
        }
    } catch (error) {
        console.error(error);
        alert(`Background export failed: ${error.message || error}`);
    } finally {
        updateActionBar();
    }
}

// Compose selected icons on canvas, add them to a ZIP, and trigger download
async function exportSelectedIcons() {
    if (state.mode === 'background') {
        await exportBackgroundImage();
        return;
    }

    const selected = Array.from(state.selectedIcons);
    if (!selected.length) return;

    if (typeof JSZip === 'undefined' || typeof saveAs === 'undefined') {
        alert('Export libraries are still loading or unavailable. If you are opening this file offline, check that JSZip and FileSaver can load from the CDN.');
        return;
    }

    els.downloadBtn.disabled = true;
    els.downloadBtn.textContent = 'Preparing...';

    const skipped = [];

    try {
        const zip = new JSZip();
        const style = els.styleSelect.value;
        const scale = Number(els.scaleSlider.value) / 100;

        let exportedCount = 0;

        for (const icon of selected) {
            const targetSrc = getExportIconSrc(icon);
            const safeName = getSafeFileName(icon.displayName);
            const isLogoExport = icon.tab === 'logos';
            const isDockExport = icon.tab === 'dock';

            els.downloadBtn.textContent = `Export ${exportedCount + skipped.length + 1}/${selected.length}`;

            if (!isLogoExport && (state.missingAssets.has(targetSrc) || icon.isMissing)) {
                skipped.push(safeName);
                continue;
            }

            try {
                if (isLogoExport) {
                    state.missingAssets.delete(targetSrc);
                    icon.isMissing = false;

                    zip.file(
                        icon.filename || `${safeName}_Logo.png`,
                        await logoToBlob(targetSrc, icon.displayName)
                    );

                    exportedCount++;
                    continue;
                }

                if (isDockExport) {
                    const iconImg = await loadImage(targetSrc);
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    canvas.width = 256;
                    canvas.height = 256;
                    ctx.imageSmoothingEnabled = true;
                    ctx.imageSmoothingQuality = 'high';
                    ctx.drawImage(iconImg, 0, 0, 256, 256);

                    zip.file(icon.filename || `${safeName}_Dock.png`, await canvasToBlob(canvas));
                    exportedCount++;
                    continue;
                }

                const effectiveStyle = getEffectiveStyleForIcon(icon, style);

                if (effectiveStyle === 'icon_only') {
                    zip.file(icon.filename || `${safeName}.png`, await sourceToBlob(targetSrc, icon.displayName));
                    exportedCount++;
                    continue;
                }

                const iconImg = await loadImage(targetSrc);
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                canvas.width = 1024;
                canvas.height = 1024;
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';

                const effectiveFolderAngle = effectiveStyle === 'pods'
                    ? 0
                    : Number(els.folderTilt.value) * Math.PI / 180;

                ctx.translate(512, 512);
                ctx.rotate(effectiveFolderAngle);

                const background = await getFolderBackgroundImage(icon, style);
                if (background) ctx.drawImage(background, -512, -512, 1024, 1024);

                const maxSize = 1024 * scale;
                const { width: sourceWidth, height: sourceHeight } = getImageDimensions(iconImg, 1024, 1024);
                const ratio = Math.min(maxSize / sourceWidth, maxSize / sourceHeight);
                const width = sourceWidth * ratio;
                const height = sourceHeight * ratio;

                ctx.translate(
                    1024 * (Number(els.xSlider.value) / 100),
                    1024 * (Number(els.ySlider.value) / 100)
                );
                ctx.rotate(Number(els.rotSlider.value) * Math.PI / 180);
                ctx.drawImage(iconImg, -width / 2, -height / 2, width, height);

                zip.file(icon.filename || `${safeName}${getExportSuffix(effectiveStyle)}.png`, await canvasToBlob(canvas));
                exportedCount++;
            } catch (iconError) {
                console.warn(`Skipped ${safeName}:`, iconError);

                const message = iconError?.message || 'export error';
                const isTrueMissingAsset = /could not be loaded|timed out|HTTP 404|HTTP 403|Failed to fetch|NetworkError|AbortError/i.test(message);

                if (isTrueMissingAsset) {
                    state.missingAssets.add(targetSrc);
                    icon.isMissing = true;
                }

                skipped.push(`${safeName} (${message})`);
            }
        }

        if (!exportedCount) {
            alert(`No exportable assets found. ${skipped.length ? `Skipped: ${skipped.slice(0, 8).join(', ')}${skipped.length > 8 ? '…' : ''}` : ''}`);
            return;
        }

        els.downloadBtn.textContent = 'Zipping...';
        saveAs(await zip.generateAsync({ type: 'blob' }), 'Export_Custom.zip');

        if (skipped.length) {
            alert(`${skipped.length} asset${skipped.length > 1 ? 's were' : ' was'} skipped: ${skipped.slice(0, 8).join(', ')}${skipped.length > 8 ? '…' : ''}`);
        }
    } catch (error) {
        console.error(error);
        alert(`Export failed: ${error.message || error}`);
    } finally {
        updateActionBar();
    }
}

// --- EVENTS ---
// Attach all UI event listeners once after DOM references are cached
function bindEvents() {
    els.resetColorBtn?.addEventListener('click', resetColorContext);
    els.resetPositionBtn?.addEventListener('click', resetIconPositionControls);
    els.randomColorBtn?.addEventListener('click', randomizePalette);
    els.autoColorBtn?.addEventListener('click', () => {
        if (!isAutoColorDisabledContext()) applyAutoColor();
    });

    els.styleOptionBtns.forEach(button => {
        button.addEventListener('click', () => {
            if (state.mode === 'generator' && state.activeTab === 'apps') {
                state.defaultStyle.apps = false;
            }
            els.styleSelect.value = button.dataset.style;
            els.styleSelect.dispatchEvent(new Event('change', { bubbles: true }));
        });
    });

    els.tiltOptionBtns.forEach(button => {
        button.addEventListener('click', () => {
            if (button.disabled) return;
            els.folderTilt.value = button.dataset.tilt;
            els.folderTilt.dispatchEvent(new Event('change', { bubbles: true }));
        });
    });

    els.iconUploadInput.addEventListener('change', event => addCustomIcons(event.target.files));
    els.customUploadBtn.addEventListener('click', () => els.customBgUpload.click());
    els.customBgUpload.addEventListener('change', event => handleCustomBackgroundUpload(event.target.files[0]));
    els.backgroundOverlayUploadBtn?.addEventListener('click', () => els.backgroundOverlayUpload?.click());
    els.backgroundOverlayUpload?.addEventListener('change', event => handleBackgroundOverlayUpload(event.target.files[0]));
    els.backgroundOverlayRemoveBtn?.addEventListener('click', clearBackgroundOverlay);
    els.backgroundOverlayResetBtn?.addEventListener('click', resetBackgroundOverlayControls);

    [els.backgroundOverlayScale, els.backgroundOverlayX, els.backgroundOverlayY, els.backgroundOverlayRot].forEach(slider => {
        slider?.addEventListener('input', applyBackgroundOverlayControls);
    });

    els.backgroundDurationSlider?.addEventListener('input', () => {
        state.backgroundVideoDurationMs = Number(els.backgroundDurationSlider.value || 8) * 1000;
        syncBackgroundExportControls();
        if (state.mode === 'background') drawBackgroundPreviewFrame(0);
    });

    els.backgroundAnimationSelect?.addEventListener('change', () => {
        state.backgroundAnimation = els.backgroundAnimationSelect.value || 'drift';
        syncBackgroundExportControls();
        if (state.mode === 'background') {
            updateBackgroundPreview();
        }
    });

    els.backgroundScreenBtns?.forEach(button => {
        button.addEventListener('click', () => {
            state.backgroundScreen = button.dataset.backgroundScreen === 'external' ? 'external' : 'main';
            if (isBackgroundExternalScreen()) {
                state.backgroundExportFormat = 'png';
            }
            state.assets.backgroundExternalPreviewKey = '';
            syncExternalPreviewFolderImage();
            syncBackgroundExportControls();
            updateBackgroundPreview();
            updateActionBar();
        });
    });

    els.backgroundExternalVariantBtns?.forEach(button => {
        button.addEventListener('click', () => {
            state.backgroundExternalVariant = button.dataset.externalVariant || 'margin';
            state.assets.backgroundExternalPreviewKey = '';
            syncExternalPreviewFolderImage();
            syncBackgroundExportControls();
            updateBackgroundPreview();
            updateActionBar();
        });
    });

    els.backgroundExternalDockBtns?.forEach(button => {
        button.addEventListener('click', () => {
            state.backgroundExternalDockPosition = button.dataset.externalDockPosition === 'bottom' ? 'bottom' : 'top';
            state.assets.backgroundExternalPreviewKey = '';
            syncExternalPreviewFolderImage();
            syncBackgroundExportControls();
            updateBackgroundPreview();
            updateActionBar();
        });
    });

    els.backgroundExternalShowFolders?.addEventListener('change', () => {
        state.backgroundExternalShowFolders = Boolean(els.backgroundExternalShowFolders.checked);
        syncExternalPreviewFolderImage();
        syncBackgroundExportControls();
        drawBackgroundPreviewFrame(0);
    });

    els.backgroundExternalPanelResetBtn?.addEventListener('click', () => {
        resetExternalPanelColorsToThemeDefault();
    });

    els.backgroundExternalPanelMatchBtn?.addEventListener('click', () => {
        matchExternalPanelColorsToBackground();
    });

    els.backgroundExternalPanelOpacity?.addEventListener('input', () => {
        setExternalPanelOpacity(els.backgroundExternalPanelOpacity.value, { refresh: false });
        syncBackgroundExportControls();
        updateBackgroundPreview();
        updateActionBar();
    });

    [
        [els.backgroundExternalPanelTop, 'backgroundExternalPanelCustomTop'],
        [els.backgroundExternalPanelBottom, 'backgroundExternalPanelCustomBottom']
    ].forEach(([input, stateKey]) => {
        input?.addEventListener('input', () => {
            state[stateKey] = normalizeHex(input.value) || input.value;
            state.assets.backgroundExternalPreviewKey = '';
            syncExternalPreviewFolderImage();
            syncBackgroundExportControls();
            updateBackgroundPreview();
            updateActionBar();
        });
    });

    els.tabBtns.forEach(button => {
        button.addEventListener('click', () => {
            rememberNormalGeneratorStyle();
            state.activeTab = button.dataset.tab;

            // Apps temporarily force Pods, and the shared temporary scale rule handles 75% and restoration
            if (state.activeTab === 'apps') {
                applyAppsDefaultStyleIfNeeded();
            } else {
                restoreNormalGeneratorStyleIfNeeded();
            }

            syncTemporaryIconScale();
            syncTabButtons();
            syncPaletteControls();
            updateGlobalDesign();
            rebuildGrid();
        });
    });

    els.presetBtns.forEach(button => {
        button.addEventListener('click', () => setPalette(button.dataset.c1, button.dataset.c2, { rebuild: state.mode === 'generator' && state.activeTab === 'apps' }));
    });

    els.backgroundOriginalPresetBtn?.addEventListener('click', () => {
        setPalette(BACKGROUND_DEFAULT_PRESET.top, BACKGROUND_DEFAULT_PRESET.bottom, { userOverride: false });
    });

    els.backgroundExportBtns?.forEach(button => {
        button.addEventListener('click', () => {
            if (button.disabled) return;
            state.backgroundExportFormat = button.dataset.exportFormat || 'png';
            syncBackgroundExportControls();
            updateActionBar();
        });
    });

    [els.colorTop, els.colorBottom].forEach(input => {
        input.addEventListener('input', () => {
            disableBrandColorsForCurrentContext();
            syncPaletteControls();
            rememberFolderPreviewPaletteFromControls();
            clearAutoColor();
            updateGlobalDesign();
        });
    });

    [els.scaleSlider, els.xSlider, els.ySlider, els.rotSlider].forEach(slider => {
        slider.addEventListener('input', applyIconControls);
    });

    els.folderTilt.addEventListener('change', applyFolderTilt);

    els.styleSelect.addEventListener('change', () => {
        if (state.mode === 'generator' && state.activeTab !== 'apps') {
            state.generatorStyle = els.styleSelect.value || DEFAULTS.style;
            state.assets.backgroundExternalFolderPreviewKey = '';
        }

        updateStyleControls();
        syncTemporaryIconScale();
        syncAutoColorButtonState();
        clearAutoColor();
        updateGlobalDesign();
        if (state.mode === 'generator' && state.activeTab === 'apps') rebuildGrid();
    });

    els.downloadBtn.addEventListener('click', exportSelectedIcons);
}

// --- INIT ---
// Initial setup for controls, preview state, event handlers, and the first grid render
function init() {
    syncPaletteControls();
    syncChoiceButtons();
    syncTabButtons();
    syncMainModeButtons();
    updateStyleControls();
    syncTemporaryIconScale();
    updateModeControls();
    applyBackgroundOverlayControls();
    syncBackgroundVideoControls();
    updateGlobalDesign();
    buildGrid();
    updateActionBar();
    bindEvents();
}

init();
