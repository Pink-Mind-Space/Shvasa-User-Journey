# Shvasa cancel flow (first draft)

A clickable prototype and a mind map for a self-serve cancellation flow with retention. It replaces the manual "someone will be in touch" step. First draft, not final.

## Files

| File | What it is |
|---|---|
| `index.html` | Clickable prototype, website and app views, with sample personas |
| `mindmap.html` | Mind map of every reason, sub-reason and solution, with filters |
| `mindmap.md` | The same mind map as text |
| `mindmap-source/mm_data.js` | Source data for the mind map |
| `mindmap-source/build_mm.js` | Builds `mindmap.html` and `mindmap.md` from the data (`node build_mm.js`) |

The prototype and `mindmap.html` here have a standard `<!doctype html>` wrapper added so they open as normal web pages. `build_mm.js` writes `mindmap.html` without that wrapper.

## Flow

Manage plan, then reason (one tap), then one page for that reason with matched solutions, then how to end (stop auto-renew or end today), then done with a comeback offer.

Reasons: not using it enough, renewed unexpectedly, service was not up to the mark (star rating and free text), cost, personal, something else.

## Rules used in the prototype

- Refund only within 7 days of renewal, with nothing attended or booked on the renewed plan (10% third-party fee). The other refund is the price difference on a retention downgrade to a lighter plan, with the plan duration unchanged. Unused time is never refunded.
- Maximum discount 25% ("up to"), with a lower limit per reason. The one-time discount is shown only to members with no practice in the last 30 days or more.
- Private-plan members get a new dedicated teacher with 2 free 60-minute classes. Group-plan members get no teacher-change option.

## Not decided yet (shown as [bracketed] in the prototype)

- Whether the 10% fee applies to the downgrade difference.
- The exact discount % per reason.
- Whether the 2 free classes count within the 15% thank-you cap.
- Escalation owner and response time.
- Prices for Shvasa Daily, single-focus plans and added accounts are illustrative. Other plan prices were read from app.shvasa.com/pricing on 22 Oct 2026.

## Notes

- All member data in the prototype is sample data, not real users.
- Backend actions need sign-off from engineering. Refund and auto-renew rules need legal review.
- The ideas are proposals. Items tagged NEW would need building; TO CHECK means it is not known whether it exists today.
