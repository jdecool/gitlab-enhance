document.querySelectorAll('.issuable-meta li[title*=approver]').forEach((e) => {
  const content = e.textContent.trim().toLowerCase();
  if (content !== 'approved' || e.hasAttribute('title') === false) {
    return;
  }

  const numberOfApprovals = parseInt(e.getAttribute('title').split(' ')[0] ?? 0);
  e.innerHTML = e.innerHTML.replace("Approved", "Approved (<b>" + numberOfApprovals + "</b>)");
});
