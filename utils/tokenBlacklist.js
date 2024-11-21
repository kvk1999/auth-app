const blacklistedTokens = new Set();

const blacklistToken = (token) => blacklistedTokens.add(token);

const isTokenBlacklisted = (token) => blacklistedTokens.has(token);

module.exports = { blacklistToken, isTokenBlacklisted };
