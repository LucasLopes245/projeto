import { EVENT_DATE } from "./config.js";
export function getCountdown(
  now = Date.now(),
  target = new Date(EVENT_DATE).getTime(),
) {
  const remaining = Math.max(0, Math.ceil((target - now) / 1000));
  return {
    days: Math.floor(remaining / 86400),
    hours: Math.floor(remaining / 3600) % 24,
    minutes: Math.floor(remaining / 60) % 60,
    seconds: remaining % 60,
    released: now >= target,
  };
}
