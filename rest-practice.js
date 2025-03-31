// Practice various rest calls

const priamryURL = "https://jsonplaceholder.typice.com/users";

const statusCodeURL = "https://httpstat.us/{404}";

const postCallURL = "https://jsonplaceholder.typicode.com/posts";
const getDataArrayOfUsers = async () => {
  try {
    const dataResponse = await fetch(statusCodeURL);
    console.log(dataResponse);
    let responseMessage =
      dataResponse.status == 404 ? "404 status" : "Not 404 status";
    console.log(responseMessage);
  } catch (error) {
    console.log(error);
  }
};


getDataArrayOfUsers();

async function makePostCall() {
  const request = await fetch(postCallURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }),
  });

  const response = await request.json();

  console.log(response);
}

makePostCall();
