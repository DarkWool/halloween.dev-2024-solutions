function escapePyramidHead(room) {
  let start;
  for (let y = 0; y < room.length; y++) {
    const x = room[y].indexOf("▲");

    if (x !== -1) {
      start = [y, x];
      break;
    }
  }

  const queue = [{ level: 0, coords: start }];
  let pointer = 0;

  while (pointer < queue.length) {
    const node = queue[pointer];
    const [y, x] = node.coords;

    pointer++;

    if (!room[y]?.[x] || room[y][x] === "#") continue;

    if (room[y][x] === "T") return node.level;

    room[y][x] = "#"; // mark node as "visited"

    let nextLevel = node.level + 1;
    queue.push(
      ...[
        { level: nextLevel, coords: [y - 1, x] },
        { level: nextLevel, coords: [y, x + 1] },
        { level: nextLevel, coords: [y + 1, x] },
        { level: nextLevel, coords: [y, x - 1] },
      ]
    );
  }

  return -1;
}
