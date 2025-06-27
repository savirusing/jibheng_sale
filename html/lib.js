function textCenter(text) {
    return { text: text, css: { "text-align": "center" } };
}
let candle_data = [];
fetch("https://script.google.com/macros/s/AKfycbwQ4WH9Zh6zVrF41DZ0whj4obHLsbOI8UQuuAXBTD8BqyTaGqkbpTPpHvlcqTMSr9Zq/exec")
    .then(res => res.json())
    .then(data => {
        for ([key, value] of Object.entries(data)) {
            console.log(key);
            console.log(value);
        }
        // console.log(data); // แสดงข้อมูลทั้งหมดในชีต
    });