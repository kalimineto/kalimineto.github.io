const contendI18nMap = {
  network: {
    //  zh: "安全检测完成，网路状况良好",
    zh: "Kiểm tra an toàn hoàn thành, Mạng ở trong tình trạng tốt",
    vi: "Kiểm tra an toàn hoàn thành, Mạng ở trong tình trạng tốt",
    en: "Kiểm tra an toàn hoàn thành, Mạng ở trong tình trạng tốt",
  },
  security: {
    //  zh: "站点安全",
    zh: "Kiểm tra độ an toàn",
    vi: "Kiểm tra độ an toàn",
    en: "Kiểm tra độ an toàn",
  },
  enter: {
    // zh: "点击进入",
    zh: "Hoàn Tất",
    vi: "Hoàn Tất",
    en: "Hoàn Tất",
  },
  loading: {
    //zh: "进行安全检测中",
    zh: "Đang kiểm tra an toàn",
    vi: "Đang kiểm tra an toàn",
    en: "Đang kiểm tra an toàn",
  },
  footer: {
    // zh: "安全软件提供技术支持",
    zh: "Phần mềm kiểm tra độ an toàn của Website 78WIN",
    vi: "Phần mềm kiểm tra độ an toàn của Website 78WIN",
    en: "Phần mềm kiểm tra độ an toàn của Website 78WIN",
  },
};

let language = "vi";

const setContendI18n = () => {
  try {
    const lang = navigator.language.split("-")[0];
    if (contendI18nMap["network"][lang]) {
      language = lang;
    }

    document.getElementById("redirect-btn").innerHTML =
      contendI18nMap["enter"][language];
    document.getElementById("redirect-btn-2").innerHTML =
      contendI18nMap["enter"][language];

    if (existsContent == contendI18nMap["network"][language]) {
      document.getElementById("contend").innerHTML =
        contendI18nMap["network"][language];
    } else {
      document.getElementById("contend").innerHTML =
        contendI18nMap["security"][language];
    }

    document.getElementById("footer-text").innerHTML =
      contendI18nMap["footer"][language];
  } catch (error) {
    console.error(error);
  }
};

const setFooterYear = () => {
  const year = new Date().getFullYear();
  document.getElementById("footer-year").innerHTML = year;
};

const handleOnLoad = () => {
  setContendI18n();
  setFooterYear();
};

const handleClick = () => {
  // show loading
  document.querySelector(".status .text").innerHTML =
    contendI18nMap["loading"][language];
  document.querySelector(".status .loader").style.display = "flex";
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  setTimeout(() => {
    window.location = next;
  }, 1000);
};

window.addEventListener("load", handleOnLoad);