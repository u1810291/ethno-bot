function isJSONParsable(str) {
  try {
      JSON.parse(str);
      return true;
  } catch (e) {
      return false;
  }
}

function omit(obj, str) {
  const { [str]: omitted, ...rest } = obj;
  return rest;
}

function pick(obj, str) {
  const { [str]: picked } = obj;
  return picked;
}

module.exports = { isJSONParsable, omit, pick }
