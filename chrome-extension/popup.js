const SUPABASE_URL = 'YOUR_SUPABASE_URL'; // Replace with your actual URL
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your actual key
const APP_URL = 'http://localhost:3000'; // Change to your deployed URL

async function getCurrentTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

async function checkAuth() {
  const { session } = await chrome.storage.local.get('session');
  return session;
}

async function saveBookmark(title, url, session) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/bookmarks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${session.access_token}`,
      'Prefer': 'return=representation'
    },
    body: JSON.stringify({
      user_id: session.user.id,
      title: title,
      url: url
    })
  });

  if (!response.ok) {
    throw new Error('Failed to save bookmark');
  }

  return await response.json();
}

async function renderApp() {
  const app = document.getElementById('app');
  const session = await checkAuth();
  const tab = await getCurrentTab();

  if (!session) {
    app.innerHTML = `
      <div class="login-required">
        <p>Please <a href="${APP_URL}/signin" target="_blank" class="login-link">sign in</a> to save bookmarks</p>
      </div>
    `;
    return;
  }

  app.innerHTML = `
    <div class="container">
      <h2>Save to my mind</h2>
      <input type="text" id="title" value="${tab.title}" placeholder="Bookmark title">
      <input type="url" id="url" value="${tab.url}" placeholder="URL" readonly>
      <button id="saveBtn">Save Bookmark</button>
      <div id="status"></div>
    </div>
  `;

  document.getElementById('saveBtn').addEventListener('click', async () => {
    const title = document.getElementById('title').value;
    const url = document.getElementById('url').value;
    const saveBtn = document.getElementById('saveBtn');
    const status = document.getElementById('status');

    if (!title || !url) {
      status.className = 'status error';
      status.textContent = 'Please fill in all fields';
      return;
    }

    saveBtn.disabled = true;
    saveBtn.textContent = 'Saving...';

    try {
      await saveBookmark(title, url, session);
      status.className = 'status success';
      status.textContent = '✓ Saved successfully!';
      setTimeout(() => window.close(), 1500);
    } catch (error) {
      status.className = 'status error';
      status.textContent = 'Failed to save bookmark';
      saveBtn.disabled = false;
      saveBtn.textContent = 'Save Bookmark';
    }
  });
}

renderApp();

// Listen for auth updates from the main app
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'AUTH_UPDATE') {
    chrome.storage.local.set({ session: message.session });
    renderApp();
  }
});