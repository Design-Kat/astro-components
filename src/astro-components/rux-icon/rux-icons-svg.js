// import './rux-icon-library.js';
// import './rux-icon.js';
const $_documentContainer = document.createElement("div");
$_documentContainer.setAttribute("style", "display: none;");

$_documentContainer.innerHTML = `
<rux-icon-library name="default" size="114">
	<svg>
		<defs>
				<g id="notifications">
					<path d="M20.667 60.167v-19c0-15.527 12.291-28.444 28.511-31.147a11.58 11.58 0 0 1-.011-.52c0-5.247 3.544-9.5 7.916-9.5C61.456 0 65 4.253 65 9.5c0 .398-.02.791-.06 1.177 14.651 3.74 25.393 15.975 25.393 30.49v19c0 12.242 5.671 22.166 12.667 22.166v15.834H8V82.333c6.996 0 12.667-9.924 12.667-22.166zM70.835 104.5c-1.758 5.463-7.957 9.5-15.335 9.5-7.378 0-13.577-4.037-15.335-9.5h30.67z"></path>
				</g>
				<g id="settings">
						<path d="M42.384 114a58.481 58.481 0 0 1-16.12-6.821 14.654 14.654 0 0 0 1.303-6.06c0-8.123-6.584-14.707-14.705-14.707-2.16 0-4.212.466-6.06 1.303A58.49 58.49 0 0 1 0 71.669c7.63-.54 13.653-6.9 13.653-14.669 0-7.768-6.023-14.13-13.653-14.67a58.49 58.49 0 0 1 6.802-16.045c1.848.837 3.9 1.303 6.06 1.303 8.121 0 14.705-6.584 14.705-14.706 0-2.16-.466-4.213-1.303-6.06A58.481 58.481 0 0 1 42.384 0c.898 7.261 7.09 12.882 14.593 12.882C64.481 12.882 70.672 7.26 71.57 0a58.481 58.481 0 0 1 16.12 6.821 14.654 14.654 0 0 0-1.303 6.06c0 8.123 6.584 14.707 14.705 14.707 2.16 0 4.213-.466 6.06-1.303A58.488 58.488 0 0 1 114 42.511c-6.914 1.2-12.172 7.23-12.172 14.489 0 7.258 5.258 13.288 12.172 14.489a58.488 58.488 0 0 1-6.848 16.226 14.651 14.651 0 0 0-6.06-1.303c-8.121 0-14.705 6.584-14.705 14.706 0 2.16.466 4.213 1.303 6.06A58.481 58.481 0 0 1 71.57 114c-.898-7.261-7.09-12.882-14.593-12.882-7.504 0-13.695 5.621-14.593 12.882zm14.593-27.588c16.243 0 29.41-13.168 29.41-29.412S73.22 27.588 56.977 27.588c-16.243 0-29.41 13.168-29.41 29.412s13.167 29.412 29.41 29.412z"></path>
				</g>
				<g id="caution">
					<path d="M57.03 4c7.535 0 61.347 95.516 56.688 101.698-4.66 6.182-107.595 4.878-113.302 0C-5.291 100.82 49.494 4 57.03 4zm3.072 67.595l1.622-31.077H50.718l1.623 31.077h7.761zm-9.51 10.879c0 1.717.487 3.048 1.462 3.992.976.943 2.354 1.415 4.136 1.415 1.738 0 3.096-.482 4.071-1.447.976-.965 1.463-2.285 1.463-3.96 0-1.74-.482-3.075-1.447-4.008-.965-.933-2.327-1.4-4.087-1.4-1.824 0-3.213.456-4.167 1.368-.955.912-1.432 2.258-1.432 4.04z"></path>
				</g>

		</defs>
	</svg>
</rux-icon-library>
<rux-icon-library name="advanced-status" size="114">
  <svg>
    <defs>
			<g id="propulsion-power">
				<path d="M28 0h58a5 5 0 0 1 5 5v104a5 5 0 0 1-5 5H28a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5zm43.345 9.89L33.303 55.08l20.606 5.55-16.247 44 42.005-49.154-19.814-6.342L71.345 9.89z"></path>
			</g>

			<g id="netcom">
				<path d="M36.976 69.715a22.698 22.698 0 0 1-4.039-12.962c0-12.593 10.21-22.802 22.803-22.802 2.618 0 5.132.44 7.474 1.253l4.817-11.35a12.666 12.666 0 0 1-6.717-11.186C61.314 5.672 66.986 0 73.982 0 80.978 0 86.65 5.672 86.65 12.668c0 6.997-5.672 12.668-12.668 12.668-1.088 0-2.145-.137-3.153-.395l-4.852 11.431c7.453 3.75 12.566 11.469 12.566 20.381 0 .836-.045 1.662-.133 2.475l9.801 2.443c1.582-5.193 6.41-8.971 12.12-8.971 6.998 0 12.669 5.67 12.669 12.668 0 6.996-5.672 12.668-12.668 12.668-6.997 0-12.668-5.672-12.668-12.668 0-.247.007-.493.02-.736L77.89 62.19a22.831 22.831 0 0 1-9.293 13.398l5.404 12.732a12.654 12.654 0 0 1 4.035-.656c6.996 0 12.668 5.671 12.668 12.668 0 6.996-5.672 12.668-12.668 12.668-6.997 0-12.668-5.672-12.668-12.668a12.66 12.66 0 0 1 5.921-10.724l-5.298-12.48a22.707 22.707 0 0 1-10.251 2.428c-6.7 0-12.726-2.89-16.898-7.491L23.416 85.009a12.609 12.609 0 0 1 1.92 6.708c0 6.997-5.671 12.669-12.668 12.669C5.672 104.386 0 98.714 0 91.717 0 84.721 5.672 79.05 12.668 79.05c3.453 0 6.583 1.382 8.868 3.622l15.44-12.956z"></path>
			</g>

			<g id="thermal" transform="translate(27 8)">
				<path d="M10.915 61.222C4.448 64.387 0 70.986 0 78.613 0 89.32 8.765 98 19.576 98c10.812 0 19.577-8.68 19.577-19.387 0-7.627-4.448-14.226-10.915-17.39a8.664 8.664 0 0 0 .237-2.017V8.64A8.64 8.64 0 0 0 19.834 0h-.515a8.64 8.64 0 0 0-8.641 8.64v50.566c0 .694.082 1.37.237 2.016zm-7.237-3.757V8.64C3.678.003 10.68-7 19.318-7h.516c8.638 0 15.64 7.003 15.64 15.64v48.825c6.599 4.891 10.679 12.654 10.679 21.148C46.153 93.201 34.239 105 19.576 105 4.914 105-7 93.201-7 78.613c0-8.494 4.08-16.257 10.678-21.148z" id="container"></path>
				<path d="M15.763 65.874V21.108h7.627v44.766c5.584 1.626 9.66 6.731 9.66 12.777 0 7.356-6.032 13.318-13.474 13.318S6.102 86.007 6.102 78.651c0-6.046 4.076-11.151 9.66-12.777z" id="mercury"></path>
				<path d="M41.695 5.528H60v6.031H41.695v-6.03zm0 10.051h13.22v6.031h-13.22v-6.03zm0 10.052H60v6.03H41.695v-6.03zm0 10.051h13.22v6.03h-13.22v-6.03zm0 10.051H60v6.031H41.695v-6.03z" id="text"></path>
			</g>

    </defs>
  </svg>
</rux-icon-library><rux-icon-library name="status" size="12">
	<svg>
		<defs>
				<g id="emergency">
					<path fill="#F72501" d="M12 12H0L6 0z"></path>
				</g>
				<g id="caution">
					<path fill="#F8E81C" d="M1 1h10v10H1z"></path>
				</g>
				<g id="error">
					<circle fill="#C05846" cx="6" cy="6" r="6"></circle>
				</g>
				<g id="ok">
					<path fill="#7ED321" d="M1 3h10v5H1z"></path>
				</g>
				<g id="standby">
					<path fill="#A1DCFB" d="M6 12A6 6 0 1 1 6 0a6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
				</g>
				<g id="off">
					<path fill="#C6CCD1" d="M3 3h6v6H3z"></path>
				</g>

		</defs>
	</svg>
</rux-icon-library>`;

document.head.appendChild($_documentContainer);