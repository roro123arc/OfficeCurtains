// smartCurtains.js

function getAutoDirection() {
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 12) return "east";
  if (hour >= 12 && hour < 18) return "south";
  if (hour >= 18 && hour < 21) return "west";
  return "north";
}

function getCurtainSuggestion(direction) {
  const hour = new Date().getHours();

  if (direction === "south" && hour >= 12) {
    return "Close curtains ☀️";
  }

  if (direction === "east" && hour < 12) {
    return "Close curtains 🌅";
  }

  return "Open curtains 🌤";
}

function applySmartLogic() {
  const direction = getAutoDirection();
  const suggestion = getCurtainSuggestion(direction);

  const suggestionEl = document.getElementById("suggestion");
  if (suggestionEl) {
    suggestionEl.innerText = `Recommended: ${suggestion}`;
  }
}

function toggleCurtains() {
  const curtain = document.querySelector(".curtain");

  if (!curtain) return;

  if (curtain.classList.contains("open")) {
    curtain.classList.remove("open");
    curtain.classList.add("closed");
  } else {
    curtain.classList.remove("closed");
    curtain.classList.add("open");
  }
}

window.onload = applySmartLogic;
