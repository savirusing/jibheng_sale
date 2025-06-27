function textCenter(text) {
    return { text: text, css: { "text-align": "center" } };
}

fetch("https://script.google.com/macros/s/AKfycbwQ4WH9Zh6zVrF41DZ0whj4obHLsbOI8UQuuAXBTD8BqyTaGqkbpTPpHvlcqTMSr9Zq/exec")
    .then(res => res.json())
    .then(data => {
        console.log(data); // แสดงข้อมูลทั้งหมดในชีต
    });