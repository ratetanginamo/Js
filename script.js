async function checkStatus() {
  const res = await fetch('/api/status');
  const data = await res.json();
  const content = document.getElementById('content');

  if (data.shutdown) {
    content.innerHTML = `
      <div class="maintenance">
        <h2>🚧 Maintenance Mode</h2>
        <p>The server is currently offline. Please check back later.</p>
      </div>
    `;
  } else {
    content.innerHTML = `
      <p>✅ The site is currently <strong>LIVE</strong>.</p>
      <button id="checkStatus">Check Status</button>
    `;
    document.getElementById('checkStatus').addEventListener('click', checkStatus);
  }
}

document.addEventListener('DOMContentLoaded', checkStatus);
document.getElementById('checkStatus')?.addEventListener('click', checkStatus);
