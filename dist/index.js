export function mount({ containerId, container, params }) {
  let count = params.startAt || 0;

  container.innerHTML = `
    <div class="vanilla-counter">
      <h1>Vanilla Counter</h1>
      <p>No framework, no iframe. The shell prepared this container.</p>
      <button class="vc-btn">${count}</button>
      <p class="vc-hint">container id: <code>${containerId}</code></p>
    </div>
  `;

  const btn = container.querySelector('.vc-btn');
  btn.addEventListener('click', () => {
    count++;
    btn.textContent = count;
  });
}

export function unmount({ containerId }) {
  const el = document.getElementById(containerId);
  if (el) el.innerHTML = '';
}
