function createMagicPotion(potions, target) {
  const map = new Map();

  for (let i = 0; i < potions.length; i++) {
    if (map.has(target - potions[i])) return [map.get(target - potions[i]), i];

    map.set(potions[i], i);
  }
}
