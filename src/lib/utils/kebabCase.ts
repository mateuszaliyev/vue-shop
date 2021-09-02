export default function kebabCase(str: string): string {
  const match = str.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
  );
  return match ? match.map((x) => x.toLowerCase()).join("-") : "";
}
