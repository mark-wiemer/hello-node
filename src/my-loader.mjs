// Mocha's test loader
// https://github.com/mochajs/mocha/issues/5361#issuecomment-3365374155

import path from "path";
import { fileURLToPath } from "url";

/**
 * @param {string} specifier
 * @param {{
 *   conditions: !Array<string>,
 *   parentURL: !(string | undefined),
 * }} context
 * @param {Function} defaultResolve
 * @returns {Promise<{ url: string }>}
 */
export async function resolve(specifier, context, defaultResolve) {
    console.log("Resolving via custom loader");
    console.log(specifier);
    console.log(context);
    const extension = path.extname(
        fileURLToPath(/**@type {import('url').URL}*/ (new URL(specifier, context.parentURL))),
    );
    return await defaultResolve(specifier.replace(".ts", ".mjs"), context, defaultResolve);
}
