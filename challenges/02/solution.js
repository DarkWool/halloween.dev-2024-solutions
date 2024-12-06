function battleHorde(zombies, humans) {
  let z = 0;
  let h = 0;

  for (let i = 0; i < zombies.length; i++) {
    z += +zombies[i];
    h += +humans[i];
  }

  const roundRemainder = Math.abs(z - h);

  return roundRemainder ? `${roundRemainder}${z > h ? "z" : "h"}` : "x";
}
