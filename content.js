// content.js

// Function to sort comments by age (newest first)
function sortCommentsByAge() {
    let comments = document.querySelectorAll('#contents #comment');
    let commentArray = Array.from(comments);
  
    commentArray.sort((a, b) => {
      let timeA = new Date(a.querySelector('#header-author time').getAttribute('datetime'));
      let timeB = new Date(b.querySelector('#header-author time').getAttribute('datetime'));
      return timeB - timeA;
    });
  
    let container = document.querySelector('#contents #comment-section-renderer-items');
    commentArray.forEach(comment => container.appendChild(comment));
  }
  
  // Listen for messages from the popup script
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "sortCommentsByAge") {
      sortCommentsByAge();
      sendResponse({result: "Comments sorted by age"});
    }
  });
  