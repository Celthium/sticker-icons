/*
 * Sticker Icons
 * ------------------------
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
        dynamicGenericUrls: {},
        dynamicDockUrls: {}
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
    tabBtns: document.querySelectorAll('.tab-btn'),
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
    adjustmentsTitle: document.getElementById('adjustments-title'),
    iconControlsGroup: document.getElementById('icon-controls-group') || document.querySelectorAll('.control-group')[1],
    subTabsContainer: document.getElementById('sub-tabs') || document.querySelectorAll('.tabs')[1]
};

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
    return isAppsTabContext() || isCustomStyleContext();
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
    };
    img.src = folderDataUrl;
}

// Refresh dynamic SVGs, background images, and visible icon sources after design changes
function updateGlobalDesign() {
    updateDynamicIconUrls();
    refreshVisibleIconSources();
    updateFolderBackground();
}

// Refresh selected count text and enable/disable export
function updateActionBar() {
    const count = state.selectedIcons.size;
    els.countDisplay.textContent = `${count} icon${count > 1 ? 's' : ''} selected`;
    els.downloadBtn.disabled = count === 0;
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
        }
    };

    if (els.appearanceTitle) els.appearanceTitle.textContent = titles[state.mode]?.appearance || 'Appearance';
    if (els.adjustmentsTitle) els.adjustmentsTitle.textContent = titles[state.mode]?.adjustments || 'Adjustments';

    els.dashboard.style.display = isAssetsMode ? 'none' : 'grid';
    if (els.dockNote) els.dockNote.hidden = !isDockMode;
    els.autoColorBtn.style.display = isDockMode ? 'none' : 'inline-flex';

    els.folderStyleRow.style.display = isDockMode ? 'none' : '';
    els.folderTiltRow.style.display = isDockMode ? 'none' : '';
    els.iconControlsGroup.style.display = isDockMode ? 'none' : '';
    els.subTabsContainer.style.display = state.mode === 'generator' ? 'flex' : 'none';

    els.grid.classList.toggle('assets-mode', isAssetsMode || isDockMode);
    document.body.dataset.mode = state.mode;

    syncAutoColorButtonState();
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

// Compose selected icons on canvas, add them to a ZIP, and trigger download
async function exportSelectedIcons() {
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
        els.downloadBtn.textContent = 'Download Custom .zip';
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

    [els.colorTop, els.colorBottom].forEach(input => {
        input.addEventListener('input', () => {
            disableBrandColorsForCurrentContext();
            syncPaletteControls();
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
    updateGlobalDesign();
    buildGrid();
    updateActionBar();
    bindEvents();
}

init();
