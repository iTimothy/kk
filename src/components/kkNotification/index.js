import Vue from 'vue'
import indexVue from './index.vue'

let defaultOptions = {
    title: '',
    msg: '',
    type: '',
    shadeClose: false,
    okButtonText: 'ok',
    cancelButtonText: 'cancel',
    okButtonShow: false,
    cancelButtonShow: false,
    callback: null,
    show: false,
    okFn: null,
    cancelFn: null
}

var merge = function(target) {
	for (var i = 1, j = arguments.length; i < j; i++) {
		var source = arguments[i];
		for (var prop in source) {
			if (source.hasOwnProperty(prop)) {
				var value = source[prop]
				if (value !== undefined) {
					target[prop] = value
				}
			}
		}
	}
	return target
}

let notifyConstructor = Vue.extend(indexVue)
let instance;

let defaultCallBack = _ => {
    Notify.close()
}

let init = () => {
	instance = new notifyConstructor({
		el: document.createElement('div')
	})
	instance.defaultCallBack = defaultCallBack
}

let showModal = options => {
	if (!instance) {
		init()
	}
	document.body.appendChild(instance.$el)
    merge(instance,defaultOptions,options)
	Vue.nextTick(_ => {
        instance.show = true
	})
}

let Notify = (options, callback) => {
	showModal(options)
}

Notify.alert = (msg,title) => {
    let options = {
        okButtonShow: true,
        cancelButtonShow: false
    }
    if(typeof msg === 'string'){
        options.msg = msg
    }
    if(typeof msg === 'object'){
        options = merge(options,msg)
    }
    if(typeof title === 'object'){
        options = merge(options,title)
    }
    if(typeof title === 'string'){
        options.title = title
    }
    return Notify(merge(defaultOptions,options))
}

Notify.toast = (msg) => {
    let config = merge(defaultOptions,{
        msg: msg,
        type: 'toast',
        okButtonShow: false,
        cancelButtonShow: false,
    })
    return Notify(config);
}

Notify.comfirm = (msg,title,options) => {
    let _options = {
        msg: msg,
        type: 'comfirm',
        okButtonShow: true,
        cancelButtonShow: true
    }
    if(typeof title === 'object'){
        _options = merge(_options,title)
    }
    if(typeof title === 'string'){
        _options.title = title
    }
    if(typeof options !== 'object'){
        _options = merge(_options,options)
    }
    return Notify(merge(defaultOptions,_options))
}
Notify.resetOptions = ()=>{
    let _defaultOption = {
        title: '',
        msg: '',
        type: '',
        shadeClose: false,
        okButtonText: 'ok',
        cancelButtonText: 'cancel',
        okButtonShow: false,
        cancelButtonShow: false,
        callback: null,
        show: false,
        okFn: null,
        cancelFn: null
    }

    merge(instance,_defaultOption)
    console.log(instance.okButtonText)
}

export default Notify
export { Notify }
