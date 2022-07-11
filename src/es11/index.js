const button = document.getElementById("btn");

button.addEventListener("click", async () => {
  const module = await import("./file.js");
  module.hello();
});

// allSettled

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo")
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status))
);

// expected output:
// "fulfilled"
// "rejected"
