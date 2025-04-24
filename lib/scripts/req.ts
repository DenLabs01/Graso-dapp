(() => {
  fetch(String(process.argv[3]), {
    method: process.argv[2],
    headers: {
      "Content-Type": "application/json",
    },
    ...(process.argv[2] === "POST"
      ? { body: JSON.stringify({ name: "Mazi Chisco" }) }
      : {}),
  })
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log("Response data:", data);
        });
      } else {
        console.error("Error:", response.statusText);
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
})();
