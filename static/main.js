const steamHtmlInput = document.querySelector('#steam-games-html-input')
const reader = new FileReader()

// TODO: Think about architecture of this application

function extractSteamGamesFromHtml() {
  reader.readAsText(steamHtmlInput.files[0])
}

function extractData() {
  const domParser = new DOMParser()
  // TODO: Add error handling
  const steamHtml = domParser.parseFromString(reader.result, 'text/html')
  // Get the script element with an `language` attribute
  // TODO: Check for the correct `script` tag?
  const result = steamHtml.querySelector('script[language]')
  // Get the correct line of the game list definition
  // TODO: Check for the correct line?
  .text.split('\n')[1]
  // Cut off everything that is **not** the array of games
  // TODO: Use regex to extract array (avoiding additional `slice`)
  .split('rgGames = ')[1]
  // Removing the trailing `;`
  .slice(0, -1)
  // Returning the raw array of objects
  return JSON.parse(result)
}

// Will-be code beyond this point

// showFileSelectorForX
// (On Drag & Drop) show different areas for different libraries
// Maybe multiple and maybe detect library type automatically

// readData (async and with progress bar)

// showGameList
