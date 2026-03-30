module.exports = function handler(req, res) {
  const flag = process.env.ECHO_FLAG || "MMDC{D0m1n4t10n}";

  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ flag });
};
