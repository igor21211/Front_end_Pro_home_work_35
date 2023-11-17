function getData() {
  const request = new XMLHttpRequest();
  request.open("GET", "data.json");
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const { children } = JSON.parse(request.responseText);

      const request1 = new XMLHttpRequest();
      request1.open("GET", "data.json");
      request1.onload = function () {
        if (request1.status >= 200 && request1.status < 400) {
          const { children: children1 } = JSON.parse(request1.responseText);
          const mergeArray = [...children, ...children1];
          console.log(mergeArray);
        }
      };
      request1.send();
    }
  };
  request.send();
}

getData();
