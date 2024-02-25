export default function RevString({ name }) {
  const reversed_name = (str) => {
    let res = ""
    if (!str.length) {
      return str
    }
    for (let i = str.length - 1; i >= 0; i--) {
      res += str[i]
    }
    return res
  }
  let result = reversed_name(name)
  return (
    <h1> Hello {name} and your flipped name is: {result} </h1>
  );
}
