//console.log(document.querySelector("#d-day-message"));
const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");
container.style.display = "flex";
messageContainer.innerHTML = `<h3>D-day를 입력해주세요.</h3>`;
//innerHTML은 해당하는 태그에 안쪽에 직접 HTML을 입력해줄 수 있음.

const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  //const dateFormat = inputYear + '-' + inputMonth +'-'+ inputDate;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;

  return dateFormat; //counterMaker함수에서 위 함수를 불러오기 위해 리턴값을 줌.
  //console.log(inputYear, inputMonth, inputDate);
};

const counterMaker = function () {
  const targetDateInput = dateFormMaker(); //dateFormMaker()를 변수에 담음
  const nowDate = new Date(); //현재날짜
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0); //내가 입력한 날짜
  //setHours()는 자정을 기준으로 바꿔줌
  //console.log(targetDate - nowDate);
  const remaining = (targetDate - nowDate) / 1000;

  if (remaining === 0 || remaining < 0) {
    //console.log("타이머가 종료되었습니다.");
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
  } else if (isNaN(remaining)) {
    //만약 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
    //console.log("유효한 시간대가 아닙니다."); //어떠한 데이터가 NaN인지 아닌지 체크할때 데이터===NaN은 되지 않음. isNaN()을 사용함.
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>.</h3>";
  }

  // const remainingDate = Math.floor(remaining / 3600 / 24);
  // const remainingHours = Math.floor(remaining / 3600) % 24;
  // const remainingMin = Math.floor(remaining / 60) % 60;
  // const remainingSec = Math.floor(remaining) % 60;
  //변수로 관리되는 데이터보다 효율적으로 관리를 위해 객체를 생성함.
  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };

  //console.log(remainingObj["remainingDate"]);

  // const days = document.getElementById("days");
  // const hours = document.getElementById("hours");
  // const min = document.getElementById("min");
  // const sec = document.getElementById("sec");
  // console.log(days, hours, min, sec);
  const documentObj = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    min: document.getElementById("min"),
    sec: document.getElementById("sec"),
  };

  documentObj["days"].textContent = remainingObj["remainingDate"];
  documentObj["hours"].textContent = remainingObj["remainingHours"];
  documentObj["min"].textContent = remainingObj["remainingMin"];
  documentObj["sec"].textContent = remainingObj["remainingSec"];

  console.log(remainingDate, remainingHours, remainingMin, remainingSec);
};
