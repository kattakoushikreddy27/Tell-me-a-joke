// popup.js

document.getElementById('sortByAge').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        func: () => {
          chrome.runtime.sendMessage({action: "sortCommentsByAge"});
        }
      }, (results) => {
        if (chrome.runtime.lastError) {
          console.error('Failed to sort comments:', chrome.runtime.lastError.message);
        } else {
          console.log('Comments sorting initiated.');
        }
      });
    });
  });
  