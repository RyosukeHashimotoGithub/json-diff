const tryCatch = (f: any) => {
  try {
    return f();
  } catch (e) {
    return [e.name, e.message];
  }
}

const input: string = "{\"correct\": \"json\"}";
// const input: string = "{bad json}";
const isJson = () => JSON.parse(input);

console.log(tryCatch(isJson));