var page = 0;
const fetchData = async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?20=20&offset=${20 * page++}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  var result = [];

  for (const value of data.results) {
    const resp = await fetch(value.url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const completeData = await resp.json();
    result.push(completeData);
  }
  return result;
};

export default fetchData;
