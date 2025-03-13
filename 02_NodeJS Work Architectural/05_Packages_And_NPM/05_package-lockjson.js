/**
 * @package_Lock_Json
 *  This file locks dependency versions to ensure consistency across environments.Generated automatically
 *  by npm, it records the exact versions installed, preventing discrepancies between developers or deployments.
 * 
 **  Key Points:
 *      - Overrides version ranges in package.json to use exact versions.
 *      - Ensures identical node_modules structure on every `npm install`.
 *      - Prioritized by npm during installation (if present, uses locked versions).
 * 
 **  Version Range Symbols:
 *?     ^ (caret): Allows minor/patch updates (e.g., ^3.4.0 → 3.5.0 allowed, 4.0.0 blocked).
 *?     ~ (tilde): Allows patch updates only (e.g., ~3.3.0 → 3.3.4 allowed, 3.4.0 blocked).
 * 
 **  Example:
 *      - package.json: "lodash": "^4.17.0"
 *      - package-lock.json: "lodash": "4.17.0"
 *      - Even if 4.18.0 exists, npm installs 4.17.0. Update via `npm update` to refresh.
 * 
 **  Important:
 *      If package-lock.json's version falls outside package.json's range,
 *      npm will update dependencies and overwrite package-lock.json. Always review
 *      changes to avoid unintended version upgrades!
 */