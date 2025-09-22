export default function handler(req, res) {
  const isShutdown = process.env.SHUTDOWN === "true";
  res.status(200).json({ shutdown: isShutdown });
}
