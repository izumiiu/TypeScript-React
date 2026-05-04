"use strict";
// Type Guards----------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
function convert(value) {
    if (typeof value === "string") {
        //แปลงตัวอักษรเป็นตัวพิมใหญ่
        console.log(value.toUpperCase());
    }
    else {
        //แปลงเป็นทศนิยม2ตำแหน่ง
        console.log(value.toFixed(2));
    }
}
convert("Tjay");
convert(29);
// Generic---------------------------------------------------------------------------------------
// แบบไม่ใช้ Generic | ถ้าต้องการสร้าง function ที่ทำงานกับ Array ที่มีการกำหนดประเภทข้อมูลต่างกัน จะต้องสร้างหลาย function(เขียนโค้ดซ้ำซ้อนหลายจุด)
function getItemString(arr) {
    return arr[0];
}
function getItemNumber(arr) {
    return arr[0];
}
function getItemBoolean(arr) {
    return arr[0];
}
// เรียกใช้งาน 
getItemString(["hello", "world"]);
getItemNumber([1, 2, 3]);
getItemBoolean([true, false]);
console.log(getItemString(["hello", "world"]));
// แบบใช้ Generic ---------------------------------------------------------------------
// ระบุว่าเป็น Generic โดยไห้ T เป็น ตัวแทนของชนิดข้อมูลที่เราสนใจ
function getItem(arr) {
    return arr[0];
}
// เรียกใช้งาน
const word = getItem(["hello", "world"]);
getItem([1, 2, 3]);
getItem([true, false]);
console.log(word);
//# sourceMappingURL=app.js.map