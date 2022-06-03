let html = document.querySelector('#html');  //通过css选择器找到某元素
let style = document.querySelector('#style');

let string =`
/*你好，我是一名前端新人
 *首先要先准备一个div
 */
#div1{
  border:2px solid red;
  width:200px;
  height:200px; 
}
/*接下来我把div变成一个八卦图
 *先把div变成一个圆
 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳结合
 *也就是一半黑一半白
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/*再画上两个小球
 *先画一个黑球，中间抠出白色的圆
 */
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%);
}
/*同样的操作，画一个白球
 */
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}
`;
// string = string.replace(/\n/g, "<br>")
//用正则表达式替换所有回车
let string2 = "";
let n = 0;

let step = () => {
    
    setTimeout(() => {
        if (string[n] === "\n") { //如果是回车，就替换成<br>
            string2 += "<br>";
            
        } else if(string[n]===" "){
            string2 += "&nbsp;";
        }
        else {// 如果不是回车，直接加上
            
            string2 += string[n];
            
        } 
        // string2 += string[n] === "\n" ? "<br>" : string[n];//可以简写（不包括else if）
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);//返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集
        window.scrollTo(0, 99999);
        html.scrollTo(0,9999)
        //自动滚动到底部
       
        
      
        if (n < string.length - 1) {
            n += 1;
            step();
        } 
        
    }, 50);
};
step();





  