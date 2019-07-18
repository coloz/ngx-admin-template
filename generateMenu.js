var fs = require("fs");
var path = require('path');

var MenuList = []

fs.readdir("src/docs", function (err, files) {
    files.forEach(function (file) {
        let item = {
            title: file,
            icon: 'fas fa-home',
            page: '/' + file,
        }

        if (path.extname(file) != '.md') {
            let submenu = []
            fs.readdir("src/docs/" + file, function (err, subfiles) {
                // console.log(subfiles)
                subfiles.forEach(function (subfile) {
                    let subitem = {
                        title: subfile,
                        icon: 'fas fa-home',
                        page: '/' + file + '/' + subfile,
                    }
                    // console.log('subitem:')
                    // console.log(subitem)
                    submenu.push(subitem);
                })
                item['submenu'] = submenu;
            })

        }
        MenuList.push(item);
    });

});


setTimeout(function () {
    console.log(MenuList);
    // fs.open('menu.ts', 'w+', function (err, fd) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log("文件打开成功！");
    // });
    fs.writeFile('menu.ts', JSON.stringify(MenuList), function (err) {
        // if (err) {
        //     return console.error(err);
        // }
        // console.log("数据写入成功！");
        // console.log("--------我是分割线-------------")
        // console.log("读取写入的数据！");
        // fs.readFile('input.txt', function (err, data) {
        //     if (err) {
        //         return console.error(err);
        //     }
        //     console.log("异步读取文件数据: " + data.toString());
        // });

    })

}, 1000)