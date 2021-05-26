const getEvolutions = (evoData, evoChain) => {
  do {
    let numberOfEvolutions = evoData.evolves_to.length;

    evoChain.push({
      species_name: evoData.species.name,
      min_level: !evoData ? 1 : evoData.min_level,
      trigger_name: !evoData ? null : evoData.trigger.name,
      item: !evoData ? null : evoData.item,
    });

    if (numberOfEvolutions > 1) {
      for (let i = 1; i < numberOfEvolutions; i++) {
        evoChain.push({
          species_name: evoData.evolves_to[i].species.name,
          min_level: !evoData.evolves_to[i]
            ? 1
            : evoData.evolves_to[i].min_level,
          trigger_name: !evoData.evolves_to[i]
            ? null
            : evoData.evolves_to[i].trigger.name,
          item: !evoData.evolves_to[i] ? null : evoData.evolves_to[i].item,
        });
      }
    }

    evoData = evoData.evolves_to[0];
  } while (evoData !== undefined && evoData.hasOwnProperty("evolves_to"));

  return evoChain;
};

export default getEvolutions;
