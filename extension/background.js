chrome.action.onClicked.addListener(async tab => {
  if (!tab.id) return;
  try {
    await chrome.scripting.executeScript({target: {tabId: tab.id}, files: ['content.js']});
    await chrome.action.setBadgeText({tabId: tab.id, text: ''});
    await chrome.action.setTitle({tabId: tab.id, title: 'Abduct this page (click again to close)'});
  } catch (error) {
    await chrome.action.setBadgeText({tabId: tab.id, text: '!'});
    await chrome.action.setBadgeBackgroundColor({tabId: tab.id, color: '#bd4236'});
    await chrome.action.setTitle({tabId: tab.id, title: 'Extensions cannot run on this page. Try a regular website, such as Wikipedia.'});
    console.warn('Page Abducted: cannot start on the selected tab.', error.message);
  }
});
