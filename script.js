const copyButton = document.getElementById('copy-code');
if (copyButton && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText(document.getElementById('invite-code').textContent);
      status.textContent = 'Copied';
    } catch {
      status.textContent = 'Select and copy the code above.';
    }
  });
}
