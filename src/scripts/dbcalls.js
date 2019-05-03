const apiBaseURL = "http://localhost:3000";

const getAllChicken = () => {
  return fetch(`${apiBaseURL}/chicken`)
    .then(Response => Response.json())
    .then(parsedResult => {
      // console.log("all the chickens", parsedResult);
      return parsedResult;
    });
};
const getOneChicken = chickenId => {
  fetch(`${apiBaseURL}/chicken/${chickenId}`)
    .then(res => res.json())
    .then(parsedResult => {
      console.log("one chicken", parsedResult);
    });
};
const updateChicken = (chickenId, chickenObj) => {
  fetch(`${apiBaseURL}/chicken/${chickenId}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(chickenObj)
  })
    .then(Response => Response.json())
    .then(parsedResult => {
      console.log("update chickens", parsedResult);
    });
};

const makeChicken = chickenObj => {
  fetch(`${apiBaseURL}/chicken/`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(chickenObj)
  })
    .then(Response => Response.json())
    .then(parsedResult => {
      console.log("update chickens", parsedResult);
    });
};

const deleteChicken = chickenId => {
  fetch(`${apiBaseURL}/chicken/${chickenId}`, {
    method: "DELETE"
  })
    .then(Response => Response.json())
    .then(parsedResult => {
      console.log("Delete is done", parsedResult);
    });
};

// getAllChicken();
// getOneChicken(3);
// const testChickenObj = {
//   name: "Joe Thighsmen",
//   color: "red",
//   gender: "male",
//   spicelevel: "3"
// };
// updateChicken(1, testChickenObj);

// const newChickenObj = {
//   name: "Cluck Norris",
//   color: "black",
//   gender: "male",
//   spicelevel: "5"
// };
// makeChicken(newChickenObj);

// deleteChicken(2);
