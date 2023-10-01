console.log(((s, wrapEvery) => {
  for (let i = 0; i < 128; i++) {
    s += '\x1b[0;' + i + 'm' + i.toString().padEnd(5, ' ').replace(i.toString(), i + '\x1b[0m');
    if (i % wrapEvery === wrapEvery - 1)
      s = s.trim() + '\n';
  };
  return s;
})('', 8));
