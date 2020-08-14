const input: string = "{\"key: \"value\"}";

const isJson = (str: string) => {
  try {
    const json = JSON.parse(str);
    console.log(json);
  } catch (e) {
    console.log(e);
    return false;
  }
  return true;
};

isJson(input);