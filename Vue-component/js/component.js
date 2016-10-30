(function(){
////////////////////

//1
Vue.component("selecttb",{
	template:'#tpl1',
	props://['ths','tbdatas','tdnames','filterkey']
	{
		ths:Array,
		tbdatas:Array,
		tdnames:Array,
		filt:String
	}
})
var ex1=new Vue({
	el:'#w1',
	data:{
		searchQuery: '',
		tableHead: ['姓名', '性别', '年龄'],
        tableName:['name','sex','age'],
        tableData: [
            {
                name: '庞永胜',
                sex: 'Male',
                age: 23
            }, 
            {
                name: '刘雨奇',
                sex: 'Male',
                age: 22
            }, 
            {
                name: '班小班',
                sex: 'Male',
                age: 25
            }, 
            {
                name: '姜姜',
                sex: 'Female',
                age: 23
            }
        ]
	}
})
//2
Vue.component('dialog', {
    template: '#tpl-dialog',
    props: ['show'],
    methods: {
        close: function() {
            this.show = false;
        }
    }
})

 var ex2=new Vue({
    el: '#w2',
    data: {
        show: false
    },
    methods: {
        openDialog: function() {
            this.show = true;
            var a=this.show;
            console.log(a);
        },
        closeDialog: function() {
            this.show = false
        }
    }
})



///////////
})()