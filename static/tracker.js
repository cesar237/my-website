(async function () {

  const supabase_url = "https://rejkprkdlqchwbwbhjsb.supabase.co/functions/v1/log-text-payload";
  const worker_url = "https://analytics.cesairemh.workers.dev/";

  const SUPABASE_TOKEN = "sb_publishable_yd_xHi34P2hurDRKs2Ah3Q_WryfzO1H";

  const discovery = {

  // === DEVICE & CAPABILITY ===
  touchDevice:     navigator.maxTouchPoints > 0,       // better than screen size for "is mobile"
  cores:           navigator.hardwareConcurrency,       // CPU cores — rough device power
  memory:          navigator.deviceMemory,              // RAM in GB (Chrome only, undefined elsewhere)

  // === NETWORK ===
  connectionType:  navigator.connection?.effectiveType,  // "4g", "3g", "2g", "slow-2g"
  downlink:        navigator.connection?.downlink,       // estimated Mbps
  saveData:        navigator.connection?.saveData,       // user opted for reduced data

  // === LOCATION (without IP!) ===
  timezone:        Intl.DateTimeFormat().resolvedOptions().timeZone,  // "Europe/Paris"
  language:        navigator.language,                    // "fr-FR"

  // === BROWSER & OS (modern way) ===
  platform:        navigator.userAgentData?.platform,     // "Linux", "macOS", "Windows"
  mobile:          navigator.userAgentData?.mobile,       // true/false — the browser tells you directly
  userAgent:       navigator.userAgent,                   // the classic blob (being frozen/deprecated)

  // === PAGE ===
  title:           document.title,                        // human-readable page label
  path:            location.pathname,
  referrer:        document.referrer,

  // === PERFORMANCE (the goldmine) ===
  pageLoadMs:      Math.round(performance.now()),         // ms since navigation started

  geolocation:     navigator.geolocation,

  // === USER PREFERENCES ===
  darkMode:        matchMedia("(prefers-color-scheme: dark)").matches,
  reducedMotion:   matchMedia("(prefers-reduced-motion: reduce)").matches,
  };

  // const res = await fetch(worker_url, {
  //   method: "POST",
  //   headers: {
  //     // "Authorization": "Bearer " + SUPABASE_TOKEN,
  //     "Content-Type": "text/plain",
  //   },
  //   body: JSON.stringify(discovery),
  // });

  // const data = await res.json();
  // console.log(data);
  console.log("[tracker infos:]", discovery);
})();