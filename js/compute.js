var example = new Vue({
    el: '#example',
    data: {
        message: '안녕하세요'
    },
    computed: {
        // 계산된 getter
        reversedMessage: function () {
            // 'this'는 example 인스턴스를 가리킵니다.
            return this.message.split('').reverse().join('')
        }
    }
})

var compute = new Vue({
    el: '#compute',
    data: {
        message: 'hi hello ola'
    },
    methods: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }
})

var demo = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        // fullName: 'Foo Bar'
    },
    // watch: {
    //     firstName: function (val) {
    //         this.fullName = val + ' ' + this.lastName
    //     },
    //     lastName: function (val) {
    //         this.fullName = this.firstName + ' ' + val
    //     }
    // }
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        },
        /**
         * 기본적으로 getter 함수만 가지고 있지만,
         * 필요한 경우 setter 함수를 만들어 쓸 수 있습니다.
         */

        set: function (newValue) {
            var names = newValue.split(' ')
            this.firstName = names[0]
            this.lastName = names[names.length - 1]
        }
    }
})

var watchExample = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: '질문을 하기 전까지는 대답할 수 없습니다.'
    },
    watch: {
        // 질문이 변경될 때 마다 이 기능이 실행됩니다.
        question: function (newQuestion) {
            this.answer = '입력을 기다리는 중...'
            this.getAnswer()
        }
    },
    methods: {
        /**
         * _.debounce는 lodash가 제공하는 기능으로
         * 특히 시간이 많이 소요되는 작업을 실행할 수 있는 빈도를 제한합니다.
         */
        getAnswer: _.debounce(
            function () {
                if (this.question.indexOf('?') === -1) {
                    this.answer = '질문에는 물음표를 포함해주세요.'
                    return
                }
                this.answer = '생각중...'
                var vm = this
                axios.get('https://yesno.wtf/api')
                    .then(function (response) {
                        vm.answer = _.capitalize(response.data.answer)
                    })
                    .catch(function (error) {
                        vm.answer = '에러가 발생했습니다. ' + error
                    })
            },
            // 사용자가 입력을 기다리는 시간입니다.
            500
        )
    }
})