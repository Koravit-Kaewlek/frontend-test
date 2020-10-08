# Front-end test

## Setup
`npm install`

## Start project
`npm start`

## Front-end Questions

1. Explain the what's similar & difference between `cookie` / `localStorage` / `sessionStorage`.

```
- cookie ทุกครั้งที่เกิด HTTP request ข้อมูล cookie จะต้องถูกส่งไปด้วย สามารถเก็บข้อมูลได้ 4KB
- localStorage เมื่อผู้ใช้ปิดบราวเซอร์ ข้อมูลใน localStorage จะยังคงอยู่ สามารถเก็บข้อมูลได้ 5MB
- sessionStorage เมื่อผู้ใช้ปิดบราวเซอร์ ข้อมูลใน sessionStorage จะหายไป สามารถเก็บข้อมูลได้ 10MB
```

2. Today React have hooks. Do we still need a class component? If your answer is yes then which case that we still need to use class component.
```
- ไม่
```

3. Breifly describe how *Virtual DOM* works.
```
- Virtual DOM การทำงานคือ ตัว react จะสร้าง DOM ที่ไม่ใช่ HTML มาเก็บไว้ในหน่วยความจำเพื่อไว้สำหรับเปรียบเทียบกับค่าใน state 
ถ้าค่า state ใน component ไหนมีการเปลี่ยนแปลง react จะทำการ render เฉพาะ compoenent นั้น ๆ
```

4. Consider this React's components tree

```
Apps > ComponentA > ComponentB > ComponentC > ComponentD > ComponentE
```

If we have a state at `Apps` component, and `ComponentE` component want to access that state value. How do you implements this?
```
- ถ้าเป็น class component จะต้องใช้ redux เข้ามาช่วยในส่วนของการทำ global state เพื่อให้ทุกๆ component สามารถเข้าถึงได้
- ถ้าเป็น function component สามารถใช้ redux ได้เหมือนกัน แต่อีกทางเลือกนึงคือ context api มีความสามารถในการทำ  global state ได้เช่นกัน
```
5. What different between using `relative` / `absolute` / `fixed` to position the element.
```
- relative จะสามารถกำหนดพิกัดจากจุดที่ตำแหน่งเดิมที่อยู่ได้ เช่น top:10px คือให้อยู่ห่างจากข้างบนที่เคยอยู่ 10 pixel
- absolute จะทำให้ element สามารถขยับไปตำแหน่งต่างๆได้อย่างอิสระ
- fixed จะทำให้ element นั้นถูกผูกติดอยู่กับหน้าจอ
```
6. Explain the different between using `callback` / `Promise` / `async await`. When to use and when not to.
```
callback 
  ใช้เมื่อต้องการ เขียนโปรแกรมให้สามารถทำงานต่อเนื่องกัน โดยให้อยู่ในรูปแบบ synchronous 
  ไม่ควรใช้เมื่อ เรามีการทำงานหรือเรียก function callback หลายขั้นตอนเกินไป 

Promise
  ใช้เมื่อต้องการเขียนแบบ asynchronous โดยที่จะต้องรอให้ข้อมูลประมวลผลเสร็จก่อนถึงจะทำต่อได้ คำสั่งที่ใช้ร่วมคือ then, catch
  ไม่ควรใช้เมื่อ มีการใช้ then มากๆ เวลาเราใช้ catch เราจะไม่รู้ว่า error ที่เกิดมันมาจาก then ตัวไหน

async/await 
  ใช้เมื่อต้องการเขียน asynchronous ให้อยู่ในรูปแบบ synchronous ซึ่งจะทำให้การเขียนโปรแกรมนั้นอ่านง่ายขึ้นด้วย คำสั่ง await ซึ่งมาใช้ในการรอให้ข้อมูลประมวณผลเสร็จ
  ไม่ควรใช้เมื่อ function ที่เรียกใช้นั้นไม่ได้ return promise ออกมาให้
```
