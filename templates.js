var string = new Vue({
    el: '#string',
    data: {
        msg: 'Hello World!'
    }
})

var primitive = new Vue({
    el: '#primitive',
    data: {
        rawHtml: '<span style="color:red">This should be red.</span>'
    }
})

var use = new Vue({
    el: '#use',
    data: {
        number: 1,
        ok: 'YES',
        message: '안녕 하지 못해요.',
        id: 1
    }
})

var param = new Vue({
    el: '#param',
    data: {
        url: 'https://github.com'
    },
    methods: {
        doSomething: function () {
            console.log("hi")
        }
    }
})

// var dynamic = new Vue({
//     el: '#dynamic',
//     data: {
//         url: attrubuteName
//     },
//     attributeName: {
//         href: 'https://kr.vuejs.org'
//     }
// })