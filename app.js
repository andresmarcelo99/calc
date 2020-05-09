const calc = (n1, n2) => {
  const sum = n1 + n2;
  const sub = n1 - n2;
  const mult = n1 * n2;
  let div = 0;
  if (n2 != 0) {
    div = n1 / n2;
  }
  console.log("Sum:", sum);
  console.log("Sub:", sub);
  console.log("Mult:", mult);
  console.log("Div:", div);
};

calc(5, 10);
