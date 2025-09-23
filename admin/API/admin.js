// This API endpoint checks an admin key, then responds with instructions.
// Updating environment variables requires a redeploy to take effect.

export default function handler(req, res) {
  const adminKey = process.env.ADMIN_KEY;
  const providedKey = req.query.key;
  const action = req.query.action; // "on" or "off"

  if (!providedKey || providedKey !== adminKey) {
    return res.status(403).json({ error: "Access Denied" });
  }

  if (action !== "on" && action !== "off") {
    return res.status(400).json({ error: "Invalid action. Use ?action=on or ?action=off" });
  }

  res.status(200).json({
    message: `Admin requested to turn site ${action === "off" ? "OFF (Maintenance)" : "ON (Live)"}.`,
    note: "To finalize, update SHUTDOWN in Vercel Environment Variables and redeploy."
  });
}
