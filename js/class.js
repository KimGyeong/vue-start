var c = new Vue({
    el: '.static',
    data: {
        isActive: true,
        hasError: false
    }
})

var inlineBinding = new Vue({
    el: '#inlineBinding',
    data: {
        classObject: {
            active: true,
            'text-danger': false
        }
    }
})

var calculated = new Vue({
    el: '#calculated',
    data: {
        isActive: true,
        error: null
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
})

var arrayClass = new Vue({
    el: '#arrayClass',
    data: {
        activeClass: 'active',
        errorClass: 'text-danger'
    }
})

var condition = new Vue({
    el: '#condition',
    data: {
        isActive: true,
        activeClass: 'active',
        errorClass: 'text-danger'
    }
})

var style = new Vue({
    el: '#style',
    data: {
        activeColor: 'red',
        fontSize: 30,
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    }
})

var arrStyle = new Vue({
    el: '#arrStyle',
    data: {
        baseStyles: {
            color: 'yellow'
        },
        overridingStyles: {
            fontSize: '20px'
        }
    }
})