/*
* 以分号开头是为了以防此示例上方的代码行依赖于自动分号插入（ASI）。
* 浏览器可能会意外地认为整个示例从上一行继续。
* 如果前一行不为空或终止，则前面的分号标志着新行的开始。
*/

;(() => {
    function main(){
        window.requestAnimationFrame(main);

        // 你的主循环内容。
    }

    main(); // 开始循环
})();
