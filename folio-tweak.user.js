// ==UserScript==
// @name         FOLIO Tweak
// @namespace    http://library.covenantseminary.edu/
// @version      2024-03-28
// @description  Make modifications to the FOLIO UI
// @author       Steve Jamieson
// @match        https://mobius.folio.ebsco.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=folio.org
// @grant        GM_addStyle
// @run-at       document-start
// @updateURL    https://github.com/covenant-library/folio-tweak-userjs/raw/main/folio-tweak.user.js
// @downloadURL  https://github.com/covenant-library/folio-tweak-userjs/raw/main/folio-tweak.user.js
// ==/UserScript==

(function() {
    'use strict';

    if (window.location.href.startsWith("https://mobius.folio.ebsco.com/checkout")) {
        // Tweaks the checkout UI. Makes the user's name larger and styles the links for open loans, fines/fees, and requests as buttons, which makes them better click targets.
        GM_addStyle ( `
#patron-detail div[data-testid="loans"] .kvValue---kU4It a {
    border: 1px solid #1960a4;
    padding: 0 15px;
    border-radius: 999px;
    font-weight: bold;
    color: #1960a4;
    line-height: 1.5;
    min-width: 5em;
    display: inline-block;
    text-align: center;
}
#patron-detail div[data-testid="loans"] .kvValue---kU4It a:hover {
    background-color: rgba(37, 118, 195, .2);
}
#patron-detail .active---hPrmG .kvValue---kU4It a {
    color: #1960a4;
}
#patron-detail .active---hPrmG .kvValue---kU4It a strong {
    font-size: 1.5rem;
}
` );
    } else if (window.location.href.startsWith("https://mobius.folio.ebsco.com/settings/users/perms/")) {
        // Adds alternate row colors to the list of permissions in a permission set. Particularly handy when removing individual permissions from a set.
        GM_addStyle ( `
#assignedPermissions ul.listStyleDefault---VXvtB,
#permSection ul.listStyleDefault---VXvtB {
    background-color: transparent;
}
#assignedPermissions ul.listStyleDefault---VXvtB li,
#permSection ul.listStyleDefault---VXvtB li {
    padding-left: 5px;
    padding-right: 5px;
}
#assignedPermissions ul.listStyleDefault---VXvtB li:nth-child(odd),
#permSection ul.listStyleDefault---VXvtB li:nth-child(odd) {
    background-color: #00000008;
}
` );
    }

})();
