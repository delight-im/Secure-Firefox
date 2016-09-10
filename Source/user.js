// https://github.com/delight-im/Secure-Firefox

// Do not accept cookies from third-party servers, i.e. cookies requested in the background by sites outside of the current domain. These cookies are frequently used for tracking across a multitude of sites, e.g. by ad networks. Disabling third-party cookies may break *some* sites which rely on embedded content (usually iframes) requiring cookies.
user_pref("network.cookie.cookieBehavior", 1);
// Prevent the "Referer" header from being sent when transitioning between different domains. Actually, disabling the "Referer" completely would be best for privacy. But many sites use that header field for anti-spam checks, bot detection, hotlinking detection, etc. So blocking the header only when transitioning to a *new* domain is a pretty good trade-off ensuring that sites don't break.
user_pref("network.http.referer.XOriginPolicy", 1);
// Prevent private or internal IP addresses from being leaked through WebRTC. The address leak is prevented by using only the default interface for ICE candidate generation.
user_pref("media.peerconnection.ice.default_address_only", true);
// Block active content (e.g. JavaScript, CSS, XHR requests and iframes) served over insecure HTTP on (otherwise) HTTPS sites. If this type of content wasn't blocked, the HTTP portion could be read or modified by attackers, and the site would be only partially encrypted.
user_pref("security.mixed_content.block_active_content", true);
// Block passive content (e.g. images, video and audio) served over insecure HTTP on (otherwise) HTTPS sites. If this type of content wasn't blocked, the HTTP portion could be read or modified by attackers, and the site would be only partially encrypted.
user_pref("security.mixed_content.block_display_content", true);
// Prevent the asynchronous and non-blocking transfer of small HTTP data in the background via beacons. These are rarely used for anything else than analytics and tracking and blocking them thus tends to improve your privacy.
user_pref("beacon.enabled", false);
// Force automatic download and installation of software updates for the browser because this is absolutely critical for security.
user_pref("app.update.auto", true);
// Enabling the same-origin policy for local files offers the highest security. This ensures that local documents can only access other documents if they are in the same folder or in a subfolder thereof. Directory listings will never be available to local documents.
user_pref("security.fileuri.strict_origin_policy", true);
// Require proper content types for JAR archives in order to be loaded. By preventing JARs (or files therein) from being opened with unsafe content types, XSS attacks via JAR archives are mitigated against and security is consequently increased.
user_pref("network.jar.open-unsafe-types", false);
// Refrain from sending the "Do not track" headers. Being a standard with voluntary participation only, "DNT" is *not* effective. It is not honored by most sites, who either don't know about it or happily ignore it, and may instead *increase* browser fingerprintability.
user_pref("privacy.donottrackheader.enabled", false);
// Use local blacklists and optionally also look-ups via remote servers for phishing protection. Phishing is an important threat that a  browser should protect against, in addition to some required education for the user.
user_pref("browser.safebrowsing.enabled", true);
// Keep a list of known malware to compare downloads against. This allows for warnings to be shown when you happen to actually download such malware inadvertently.
user_pref("browser.safebrowsing.malware.enabled", true);
// Send download metadata to remote servers as part of the phishing protection.
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
// Use a preloaded list of sites that use HTTP Strict Transport Security (HSTS) so that the browser knows, even before the very first request, whether it is required to use a secure connection when communicating with the target server.
user_pref("network.stricttransportsecurity.preloadlist", true);
// Do not provide high-precision timing data via the Navigation Timing API, which is otherwise accessible via `window.performance.timing.*`.
user_pref("dom.enable_performance", false);
// Disable all device sensors for privacy reasons. Desktop computers usually have few sensors, anyway. If you, however, need some of the sensors, you have to toggle this option.
user_pref("device.sensors.enabled", false);
// Disable face detection for video captured via the device's camera for privacy reasons.
user_pref("camera.control.face_detection.enabled", false);
// Prevent screen sharing via WebRTC which can be *very* dangerous, especially to people not understanding how it works exactly.
user_pref("media.getusermedia.screensharing.enabled", false);
// Disable hyperlink auditing which otherwise allows sites to notify a set of pre-defined target endpoints about each click on a prepared link. This is well-suited for tracking and analytics and not suited for much else, so disabling it improves privacy.
user_pref("browser.send_pings", false);
// Do not retrieve and display suggestions of similar search queries while typing search terms into the *search bar*. Enabling these suggestions causes all text typed into the search bar to be transmitted to remote servers. When there is a need or strong preference for these suggestions to be shown, this option must be toggled.
user_pref("browser.search.suggest.enabled", false);
// Do not retrieve and display suggestions of similar search queries while typing search terms into the *location bar* or *URL bar*. Enabling these suggestions causes all text typed into the search bar to be transmitted to remote servers. When there is a need or strong preference for these suggestions to be shown, this option must be toggled.
user_pref("browser.urlbar.suggest.searches", false);
// Don't let the browser receive hints that certain pages are likely to be visited next, which would cause it to download those pages immediately -- in hope for improved speed when that page is indeed visited afterwards.
user_pref("network.prefetch-next", false);
// Do not speculatively pre-connect to sites when interacting with the user interface or the current site in a way which indicates that the respective site could be visited next. If you really feel the need to speed up your browsing experience another bit, toggle this option.
user_pref("network.http.speculative-parallel-limit", 0);
// Do not save text entered into forms for later suggestions. This is to protect your data, also against other people using the same device, whose data will obviously be protected with regard to this aspect as well.
user_pref("browser.formfill.enable", false);
// Do not show previously (and frequently) visited sites and perhaps even suggested sites on the empty page when opening a new tab. When there is a preference for that history and the recommendations to be shown, this option must be toggled.
user_pref("browser.newtabpage.enabled", false);
// Disable any regular data reporting to Mozilla. This reporting is not required and thus, even though it's only a small improvement and although you probably trust Mozilla, strengthens your privacy a little bit. If you want to support Firefox with usage and health data instead, this option must be toggled. (Part 1)
user_pref("datareporting.healthreport.uploadEnabled", false);
// Disable any regular data reporting to Mozilla. This reporting is not required and thus, even though it's only a small improvement and although you probably trust Mozilla, strengthens your privacy a little bit. If you want to support Firefox with usage and health data instead, this option must be toggled. (Part 2)
user_pref("datareporting.policy.dataSubmissionEnabled", false);
// Disable the "WebIDE", a tool for software developers, which the large majority of users doesn't need, anyway. If this component is required for software development, this option must be toggled. (Part 1)
user_pref("devtools.webide.enabled", false);
// Disable the "WebIDE", a tool for software developers, which the large majority of users doesn't need, anyway. If this component is required for software development, this option must be toggled. (Part 2)
user_pref("devtools.webide.autoinstallADBHelper", false);
// Disable the "WebIDE", a tool for software developers, which the large majority of users doesn't need, anyway. If this component is required for software development, this option must be toggled. (Part 3)
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
// Disable remote debugging, a utility for software developers, which the large majority of users doesn't need, anyway. If this component is required for software development, this option must be toggled.
user_pref("devtools.debugger.remote-enabled", false);
// Expand punycode in internationalized domain names (IDNs) to its "raw" form in order to prevent phishing attacks using Unicode look-alikes of other characters. If you visit internationalized domain names (IDNs) frequently, you should probably toggle this option for your convenience.
user_pref("network.IDN_show_punycode", true);
