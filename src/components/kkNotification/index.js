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
    cancelFn: null,
    duration: 0
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
        if(instance.type === 'toast'){
            if(instance.duration !=0 ){
                setTimeout(()=>{
                    defaultCallBack();
                },instance.duration)
            }else{
                setTimeout(()=>{
                    defaultCallBack();
                },1800)
            }
        }
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
    return Notify(merge(Notify.getDefaultOptions(),options))
}

Notify.toast = (msg,...argvs) => {

    let option = {
        type: 'toast',
        okButtonShow: false,
        cancelButtonShow: false,
    }

    if(typeof msg === 'string'){
        option.msg = msg
    }
    if(typeof msg === 'object'){
        option = merge(option,msg)
    }
    if(typeof argvs[0] === 'number'){
        option.duration = argvs[0]
    }
    option = merge(Notify.getDefaultOptions(),option)
    return Notify(option)
}

Notify.comfirm = (msg,...argvs) => {
    let _options = {
        type: 'comfirm',
        okButtonShow: true,
        cancelButtonShow: true
    }
    if(typeof msg === 'string'){
        _options.msg = msg
    }
    if(typeof msg === 'object'){
        _options = merge(_options,msg)
    }
    if(typeof argvs[0] === 'function'){
        _options.okFn = argvs[0]
    }
    if(typeof argvs[0] === 'object'){
        _options = merge(_options,title)
    }
    if(typeof argvs[0] === 'string'){
        _options.title = title
    }
    if(typeof argvs[1] === 'object'){
        _options = merge(_options,options)
    }
    if(typeof argvs[1] === 'function'){
        _options.cancelFn = argvs[1]
    }
    return Notify(merge(Notify.getDefaultOptions(),_options))
}

Notify.getDefaultOptions = ()=>{
    let copyDefaultOptions = Object.assign({},defaultOptions)
    return copyDefaultOptions;
}

Notify.close = ()=>{
    instance.show = false
}

export default Notify
