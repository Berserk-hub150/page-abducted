<div align="center">

# 👽 404 — Page Abducted

**A perfectly normal website. An extremely abnormal visitor.**

A tiny UFO steals words, lifts images out of their frames, and chases your cursor.
When it tries to abduct the entire page, it overloads and sneezes everything back out.

Vanilla JavaScript · Canvas · No dependencies · Chrome extension + standalone demo

**[Download the extension](https://github.com/Berserk-hub150/page-abducted/raw/refs/heads/main/downloads/page-abducted-chrome.zip)**

</div>

## Try it on a real website

1. Download and extract **[page-abducted-chrome.zip](https://github.com/Berserk-hub150/page-abducted/raw/refs/heads/main/downloads/page-abducted-chrome.zip)**.
2. Open `chrome://extensions` in desktop Chrome.
3. Enable **Developer mode** in the top-right corner.
4. Click **Load unpacked** and select the extracted `page-abducted` folder containing `manifest.json`.
5. Visit a regular web page, for example [Wikipedia — Earth](https://en.wikipedia.org/wiki/Earth).
6. Click the Extensions puzzle icon, then **404 — Page Abducted**. Pin it for easier access.

The UFO starts its automatic sequence on the visible part of the page.
Clicking the extension icon again closes it and restores the page.

If you cloned or downloaded this repository instead, load the **`extension/`** folder.

## Controls

| Control | What happens |
| --- | --- |
| **Restart** | Restore the page and start another automatic abduction. |
| **Select** | Click a visible word or image to choose the next target. |
| **Cursor** | Let the UFO chase your pointer. |
| **Finale** | Watch it abduct the entire page and sneeze it back out. |
| **Restore** | Return the missing elements and stop the effect. |
| **Cinema** | Hide the controls for recording a clean video. |
| **×** | Close the overlay and restore the page. |
| **Escape** | Exit Cinema mode and leave Select/Cursor mode. |

In Select mode, a click on an eligible target is used for the abduction instead of opening its link.
Wait for the current abduction to finish before selecting another target.
Refreshing the tab removes the effect completely.

## Standalone demo

Open **[`demo/index.html`](demo/index.html)** in a browser. No build step or package installation is needed.

This includes a self-contained editorial page, an illustrated landscape, a cookie gag and the full abduction sequence.
The demo also supports **C** for Cinema mode and **Space** to pause/resume the animation.

## How it works

- A Canvas overlay draws the UFO, tractor beam, scanning rings and particles.
- The extension temporarily wraps a bounded amount of visible text in word spans.
- Selected words and images are cloned into an isolated Shadow DOM overlay.
- Originals are hidden while their clones float toward the UFO.
- The finale animates the page body; the overlay stays outside it.
- Restore and Close cancel animations, restore visibility, and unwrap the text.

The source contains no third-party libraries and no build tooling.

## Permissions and limitations

The extension requests **`activeTab`** and **`scripting`**. It runs only when you click its toolbar action; it does not request permanent access to all websites.

It makes no network requests of its own and does not collect, store or transmit page content. Effects are local to your current tab; they do not change the website for other visitors.

- Chrome internal pages, the Chrome Web Store and other browser-protected pages do not allow injection.
- Only the main page is supported; content inside iframes and site Shadow DOM is not targeted.
- Dynamically rendered websites may react to temporary DOM changes. If the layout behaves unexpectedly, use Restore or reload the page.
- The initial automatic sequence targets visible content. After scrolling, use Restart to discover the new visible words.
- This is an experimental first version. Syntax and package structure have been checked; browser compatibility has not yet been fully tested.

## Repository layout

```text
extension/   Chrome Manifest V3 extension: load this folder in Chrome
demo/        Self-contained interactive demo
downloads/   Ready-to-extract extension ZIP
```

Created by **[Luca Magrini](https://github.com/Berserk-hub150)**.

## License

MIT — see [LICENSE](LICENSE).
