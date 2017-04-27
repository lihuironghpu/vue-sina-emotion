import Vue from 'vue';
import axios from 'axios';
import VueSinaEmotion from '../src/vue-sina-emotion.vue';

Vue.component('vue-sina-emotion', VueSinaEmotion);

axios
    //get emotions in https://api.weibo.com/2/emotions.json?callback=?
    .get('//localhost:8881/emotions', {params:{
        source: '1362404091',
        language: 'cnname'
    }})
    .then(function(xhr){
        vm.emotions = xhr.data.data;
    })
    .catch(function(e){
        throw e;
    });

var vm = new Vue({
    el: '#app',
    data: function(){
        return {
            test: 0,
            title: 'VueSinaEmotion',
            emotions: ''
        }
    },
    methods: {
        testA: function(){
            this.emotions = '222'
        }
    }
})