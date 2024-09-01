/**
 * Adds an onclick event to the provided element
 * @param {string} suggestionElemId 
 * @param {function} suggestionClickEvent 
 * @example suggestionElementPreperation('.main-container', () => console.log('Clicked element'))
 */
function suggestionElementPreperation(
    suggestionElemClass,
    suggestionClickEvent
) {
    const suggestionElem = document.querySelector(suggestionElemClass);
    suggestionElem.onclick = suggestionClickEvent;
}

/**
 * Initial example function call: 
 * suggestionElementPreparation( "mf-web-suggestionicon-text-mobile", "webURLPreparation( true, false )" );
 **/