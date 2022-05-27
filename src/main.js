let demo = document.querySelector('#demo');  //通过css选择器找到某元素
let string =`
你好，我是一名前端新人
接下来我要加样式了
这个样式是
body{
color:red;
}
`;
// string = string.replace(/\n/g, "<br>")
//用正则表达式替换所有回车
let string2 = "";
let n = -1;

let step = () => {
    
    setTimeout(() => {
        n = n + 1;
        if (string[n] === "\n") {
            string2 += "<br>";
            
        } else {
            
            string2 += string[n];
            
        }
        demo.innerHTML = string2;
        // demo.innerHTML = string.substring(0,n)
        //返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集
      
        if (n < string.length) {
            step();
        } 
        
    }, 400);
};

step();
  