if (window.matchMedia("(max-width: 947px)").matches) {
    // El viewport tiene 768px de ancho o menos, por lo que se asume que es un dispositivo táctil
    let stylesheets = document.styleSheets;
    for (let i = 0; i < stylesheets.length; i++) {
        let rules = stylesheets[i].cssRules || stylesheets[i].rules;
        for (let r = rules.length - 1; r >= 0; r--) {
            if (rules[r].selectorText && rules[r].selectorText.includes(':hover')) {
                stylesheets[i].deleteRule(r);
            }
        }
    }
}