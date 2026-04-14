# Workspace Instructions

This workspace contains multiple static website examples. For the current project, focus on:

- `final-project/html5-boilerplate-main/html5-boilerplate-main/`
- This folder uses HTML5 Boilerplate as the base structure.
- Bootstrap is included in the published output via CDN links in `dist/index.html`.

## Primary working paths

- Source files: `final-project/html5-boilerplate-main/html5-boilerplate-main/src/`
- Published output: `final-project/html5-boilerplate-main/html5-boilerplate-main/dist/`
- Project config: `final-project/html5-boilerplate-main/html5-boilerplate-main/package.json`
- Build tools: `gulpfile.mjs`, `src/webpack.common.js`, `src/webpack.config.dev.js`, `src/webpack.config.prod.js`

## Recommended workflow

- Prefer editing source files in `src/` rather than generated output in `dist/`.
- Use `npm install` first, then `npm run build`, `npm test`, or `npm run prettier` as needed.
- Keep changes scoped to the `final-project/html5-boilerplate-main/html5-boilerplate-main/` folder unless the user asks to modify another project.

## Project commands

```bash
cd final-project/html5-boilerplate-main/html5-boilerplate-main
npm install
npm run build
npm test
npm run prettier
```

## Notes for Bootstrap work

- The current Bootstrap integration is in `dist/index.html` via CDN.
- For new Bootstrap-based UI changes, update the HTML/CSS in `src/` and then rebuild the project.
- If the user asks to add Bootstrap components or layout, keep the solution simple and aligned with HTML5 Boilerplate conventions.

## Important context

- The workspace is not a single monorepo; it contains many separate student/example sites.
- Use `final-project/html5-boilerplate-main/html5-boilerplate-main/` as the canonical project folder for HTML5 Boilerplate + Bootstrap.
- Ask for clarification if the user wants to work in a different folder or if they want to edit generated output directly.