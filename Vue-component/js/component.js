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
Vue.component('curd-table', {
        template: '#curd-table',
        data:{
            function(){
                return{
                    mode:0,
                    title:'',
                    itme:{}
                }
            }       
        },
        props: ['dataList', 'columns'],
        methods: {
            deleteItem: function(index) {
                this.dataList.splice(index, 1);
            },
            openNewItemDialog: function(title) {
                this.title = title;
                this.mode = 1;
                //this.item = {};
                this.$broadcast('showDialog', true);
            },
            openEditItemDialog: function(key) {
                this.key=key;
                this.title =this.dataList[key]['姓名'];
                this.mode = 2
                this.item = this.initItemForUpdate(this.dataList[key]);
                this.$broadcast('showDialog', true)
            },
            createItem: function() {
                // 将item追加到dataList
                this.dataList.push(this.item)
                    // 广播事件，传入参数false表示隐藏对话框
                this.$broadcast('showDialog', false)
                    // 新建完数据后，重置item对象
                this.item = {}
            },
            updateItem:function(){
                //this.dataList[this.key]=this.initItemForUpdate(this.itme);
                console.log(this.item);
                console.log(this.key);
                var a=this.dataList[this.key];
                var b=this.item;
                for(i in a){
                    a[i]=b[i];
                };
                this.$broadcast('showDialog', false);
                this.item = {}
            },
            //对象的深拷贝
            initItemForUpdate: function(p) {
                var c = c || {};
                for(var i in p) {
                    // 属性i是否为p对象的自有属性
                    if(p.hasOwnProperty(i)) {
                        if(typeof p[i] === 'object') {
                            c[i] = Array.isArray(p[i]) ? [] : {}
                            initItemForUpdate(p[i], c[i])
                        } else {
                            // 属性是基础类型时，直接拷贝
                            c[i] = p[i]
                        }
                    }
                }
                return c;
            },
        },
        components:{
            'curd-table-dialog':{
                template:'#curd-table-dialog',
                props: ['mode', 'title', 'fields', 'item'],
                data:function(){
                    return{
                        show:false
                    }
                },
                methods: {
                    close: function() {
                        this.show = false
                    },
                    save: function() {
                        //新建模式
                        if (this.mode==1){
                            // 使用$dispatch调用simple-grid的create-item方法
                            this.$dispatch('create-item');
                        }
                        else if(this.mode==2){
                            this.$dispatch('update-item');
                        }
                    }
                },
                events:{
                    //设置对话框状态
                    'showDialog':function(show){
                        this.title=this.$parent.title;
                        this.mode=this.$parent.mode;
                        if(this.mode==1){
                            this.item={};
                        }
                        else if(this.mode==2){
                            this.item=this.$parent.item;
                        }
                        this.show=show;
                    }
                }
            }
        }
    })
    
var ex3=new Vue({
    el: '#w3',
    data: {
        searchQuery: '',
        columns: [{
            name: '姓名',
            key:true
        }, {
            name: '性别',
            dataSource:['Male','Female']
        }, {
            name: '年龄'
        }],
        people: [{
            姓名: '庞永胜',
            年龄: 23,
            性别: 'Male'
        }, {
            姓名: '刘雨奇',
            年龄: 22,
            性别: 'Male'
        }, {
            姓名: '班小班',
            年龄: 25,
            性别: 'male'
        }, {
            姓名: '姜姜',
            年龄: 23,
            性别: 'Female'
        }]
    }
})

///////////
})()