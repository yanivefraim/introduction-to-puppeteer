(async () => {
  document.querySelector('button').addEventListener('click', async () => {
    const res = await fetch('/data.json');
    const list = await res.json();
    const search = document.querySelector('input').value;
    const ul = document.querySelector('ul');
    ul.innerHTML = list
      .filter(
        el => el.first_name.includes(search) || el.last_name.includes(search),
      )
      .reduce(
        (prev, cur) => `${prev}<li>${cur.first_name} ${cur.last_name}</li>`,
        '',
      );
  });
})();
