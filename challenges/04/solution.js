function findTheKiller(whisper, suspects) {
  const str = whisper.replaceAll("~", "\\w");
  const regExp = new RegExp("^" + str, "i");

  const filteredSuspects = suspects.filter((suspect) => {
    return regExp.test(suspect);
  });

  return filteredSuspects.join(",");
}
