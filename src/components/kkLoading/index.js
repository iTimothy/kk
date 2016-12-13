import Vue from 'vue'
import indexVue from './index.vue'

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
let defaultOption = {
    type: 'full',
    showLoading: false,
    loadingStr: '..正在加载..',
    oneLine: 'no'
}
let _defaultOption = Object.assign({},defaultOption)

let LoadingConstructor = Vue.extend(indexVue)
let instance;

let getInstance = _ =>{
    if(instance){
        return instance
    }
    instance = new LoadingConstructor({
        el:document.createElement('div')
    })
    return instance
}

let mount = _ =>{
    document.body.appendChild(instance.$el)
}

let Loading = ()=>{
    mount()
}

Loading.show = option =>{
    let instance = getInstance()
    Object.assign(instance,option)
    instance.showLoading = true
    if(typeof option === 'string'){
        instance.loadingStr = option
    }
    if(typeof option === 'object'){
        Object.assign(instance,option)
    }
    return Loading()
}

Loading.close = _ =>{
    merge(getInstance(),_defaultOption)
}

export default Loading
