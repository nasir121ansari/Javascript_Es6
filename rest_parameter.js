function sum(...values) {
  console.log(values);
  let sum = 0;
  values.map((d) => (sum += d));
  console.log(sum);
}

sum(2, 3);
sum(3, 4, 5);
