// 1) getWeather() 함수 (lat/lon 테스트용)

async function getWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&lang=kr&appid=02acd38c89ec47f71113c1ceec059798`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("날씨 정보를 불러올 수 없습니다!");
    }

    const weather = await response.json();

    console.log("현재 날씨(고정 좌표):", weather);
    return weather;
  } catch (error) {
    console.error("에러 발생:", error.message);
  }
}

// 페이지 로드 시 한 번 테스트용으로 실행
getWeather();



// 2) HTML 요소들 가져오기 (현재 HTML 구조 기준)

// 가장 바깥 div (h1, 나머지 div 감싸고 있는 div)
const appDiv = document.querySelector("body > div");

// appDiv 바로 아래에 있는 div들 (검색, 로딩, 에러, 날씨 정보)
const innerDivs = appDiv.querySelectorAll(":scope > div");

// 순서대로 할당: 0=검색, 1=로딩, 2=에러, 3=날씨 정보
const searchDiv  = innerDivs[0];
const loadingDiv = innerDivs[1];
const errorDiv   = innerDivs[2];
const weatherDiv = innerDivs[3];

// 검색 영역 안의 input, button
const cityInput = searchDiv.querySelector("input");
const searchBtn = searchDiv.querySelector("button");

// 날씨 정보 영역 안 요소들
const cityNameEl   = weatherDiv.querySelector("h2");   // "도시 이름"
const regionNameEl = weatherDiv.querySelector("p");    // "지역 이름"
const iconImg      = weatherDiv.querySelector("img");  // 날씨 아이콘
const tempDiv      = weatherDiv.querySelector("img + div"); // 아이콘 바로 뒤 div (온도)

// 체감온도·습도·풍속·기압은 id가 있으니 그대로 사용
const feelsLikeSpan = document.getElementById("feelsLike");
const humiditySpan  = document.getElementById("humidity");
const windSpan      = document.getElementById("windSpeed");
const pressureSpan  = document.getElementById("pressure");

// 처음에는 로딩, 에러, 날씨 정보 숨기기
loadingDiv.style.display = "none";
errorDiv.style.display   = "none";
weatherDiv.style.display = "none";



// 3) 도시 이름으로 날씨 가져오는 함수
async function getWeatherByCity(city) {
  const trimmed = city.trim();
  if (!trimmed) {
    showError("도시 이름을 입력하세요.");
    return;
  }

  showLoading(true);
  showError("");           // 에러 숨기기
  weatherDiv.style.display = "none";

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      trimmed
    )}&units=metric&lang=kr&appid=02acd38c89ec47f71113c1ceec059798`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("도시를 찾을 수 없습니다.");
    }

    const data = await response.json();
    console.log("검색한 도시 현재 날씨:", data);

    renderWeather(data);
  } catch (err) {
    showError(err.message || "날씨 정보를 불러오는 중 오류가 발생했습니다.");
  } finally {
    showLoading(false);
  }
}



// 4) 화면에 날씨 정보 채우기
function renderWeather(data) {
  // 도시, 지역(국가 코드)
  cityNameEl.textContent   = data.name;          
  regionNameEl.textContent = data.sys.country;   

  // 온도
  tempDiv.textContent = `${Math.round(data.main.temp)} °C`;

  // 아이콘
  const iconCode = data.weather[0].icon;
  iconImg.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  iconImg.alt = data.weather[0].description;

  // 체감 온도, 습도, 풍속, 기압
  feelsLikeSpan.textContent = Math.round(data.main.feels_like);
  humiditySpan.textContent  = data.main.humidity;
  windSpan.textContent      = data.wind.speed;
  pressureSpan.textContent  = data.main.pressure;

  // 날씨 정보 영역 보여주기
  weatherDiv.style.display = "block";
}



// 5) 로딩/에러 표시 함수
function showLoading(isLoading) {
  loadingDiv.style.display = isLoading ? "block" : "none";
}

function showError(message) {
  if (!message) {
    errorDiv.style.display = "none";
    errorDiv.textContent = "";
    return;
  }
  errorDiv.style.display = "block";
  errorDiv.textContent = message;
}



// 6) 이벤트 등록 (버튼 + 엔터)
searchBtn.addEventListener("click", () => {
  getWeatherByCity(cityInput.value);
});

cityInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    getWeatherByCity(cityInput.value);
  }
});
