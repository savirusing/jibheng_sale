function textCenter(text) {
    return { text: text, css: { "text-align": "center" } };
}
let candle_data = [];
fetch("https://script.google.com/macros/s/AKfycbwQ4WH9Zh6zVrF41DZ0whj4obHLsbOI8UQuuAXBTD8BqyTaGqkbpTPpHvlcqTMSr9Zq/exec")
    .then(res => res.json())
    .then(data => {
        let column = [];
        for ([key, value] of Object.entries(data)) {
            if (key == 0) {
                column = value;
            }
            else {
                let row_data = {};
                for ([k,v] of Object.entries(row_rec)){
                    row_data[k] = v
                }
                candle_data.push(row_data)
            }
        }
        console.log(candle_data); // แสดงข้อมูลทั้งหมดในชีต
    });