document.getElementById('change-password-btn').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const newPassword = document.getElementById('new-password').value;
  
    const res = await fetch('/change-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, newPassword })
    });
  
    const data = await res.json();
    document.getElementById('message').innerText = data.message;
  });