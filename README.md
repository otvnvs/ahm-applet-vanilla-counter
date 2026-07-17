# ahm-applet-vanilla-counter

A vanilla JS applet that mounts into a DOM container prepared by the shell.

## File layout

```
.
├── app.json
├── dist/
│   ├── index.js
│   └── style.css
└── README.md
```

## How it works

- `app.json` declares `"type": "dom-module"`.
- The shell creates a full-size `<div>` and calls `mount({ containerId, container, params })`.
- `params.startAt` (from `app.json`) seeds the counter.
- CSS listed in `app.json["files"]` is injected by the shell.

## Publish

1. Push this repo to GitHub.
2. Add the topic `ahm-applet`.
3. Ensure `dist/` is committed.

No build step is required — `dist/` is hand-written vanilla JS.
