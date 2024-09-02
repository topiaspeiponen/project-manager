/**
 * Adds an onclick event to the provided element
 * @param {string} suggestionElemId 
 * @param {function} suggestionClickEvent 
 * @example suggestionElementPreperation('main-container', () => console.log('Clicked element'))
 */
function suggestionElementPreperation(
    suggestionElemId,
    suggestionClickEvent
) {
    const suggestionElem = document.getElementById(suggestionElemId);
    suggestionElem.onclick = suggestionClickEvent;
}

/**
 * Initial example function call: 
 * suggestionElementPreparation( "mf-web-suggestionicon-text-mobile", "webURLPreparation( true, false )" );
 **/