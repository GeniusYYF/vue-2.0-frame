// 格式化时间
export const dateFormat = function (date = new Date(), ch = '/') {
    console.log(date instanceof Date)
    if (!(date instanceof Date)) return date

    let formatNumber = n => {
        n = n.toString()
        return n[1] ? n : '0' + n
    }
    let year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate(), hour = date.getHours(), minute = date.getMinutes(), second = date.getSeconds()
    return [[year, month, day].map(formatNumber).join(ch), [hour, minute, second].map(formatNumber).join(':')]
}

// 封装操作localstorage本地存储的方法  模块化
export const storage = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value || ''));
        // localStorage.key = value;
        // localStorage[key] = value;
    },
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    getForIndex(index) {
        return localStorage.key(index);
    },
    getKeys() {
        let items = this.getAll();
        let keys = [];
        for (let index = 0; index < items.length; index++) {
            keys.push(items[index].key);
        }
        return keys;
    },
    getLength() {
        return localStorage.length;
    },
    getSupport() {
        return (typeof (Storage) !== "undefined") ? true : false;
    },
    remove(key) {
        localStorage.removeItem(key);
    },
    removeAll() {
        localStorage.clear();
    },
    getAll() {
        let len = localStorage.length;  // 获取长度
        let arr = new Array(); // 定义数据集
        for (var i = 0; i < len; i++) {
            // 获取key 索引从0开始
            var getKey = localStorage.key(i);
            // 获取key对应的值
            var getVal = localStorage.getItem(getKey);
            // 放进数组
            arr[i] = {
                'key': getKey,
                'val': getVal,
            }
        }
        return arr;
    }
}