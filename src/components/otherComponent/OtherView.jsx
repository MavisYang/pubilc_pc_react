import React,{Component} from 'react'

export const Item=(props)=>{
    return <div>{props.name}</div>

}

export default class TestView extends Component{
    constructor(props) {
        super(props)
        this.state={
            data:1,
            render:'render'

        }
    }

    componentWillMount() { // 组件挂载前触发
        console.log('componentWillMount')

    }
    render(){
        return <div className="wrapper-container">
            <div className='testView divCenter' ref="view">
                testView
                <button onClick={()=>this.refs.view.blur()}>button</button>
            </div>
        </div>
    }
    componentDidMount() { // 组件挂载后触发
        // console.log('componentDidMount')
        // console.log(this.refs.view.scrollHeight)
        // this.refs.view.addEventListener('click',()=>{
        //     console.log('addEventListener--1')
        // })

        //promise

        // let p1 = new Promise((resolve, reject)=>{
        //     resolve('成功了')
        // })
        // let p2 = new Promise((resolve, reject)=>{
        //     resolve('success')
        // })
        //
        // let p3= Promise.reject('失败')


        // Promise.all([p1,p2]).then(res=>{
        //     console.log(res)
        // }).catch(req=>{
        //     console.log(req)
        // })
        //
        //
        // Promise.all([p1,p3,p2]).then(res=>{
        //     console.log(res)
        // }).catch(req=>{
        //     console.log(req)
        // })

        // let initHeaders = new Headers()
        // initHeaders.append('Accept', 'application/json, text/plain, */*')
        // initHeaders.append('Cache-Control', 'no-cache')
        // initHeaders.append('Content-Type', 'application/x-www-form-urlencoded')
        // let data = {uid: 1011}
        // let body = `uid=${data.uid}`
        // const init = {
        //     method: 'POST',
        //     credentials: 'include', // cookies
        //     cache: 'no-cache ', // cookies
        //     headers: initHeaders,
        //     body
        // }
        // let url ='https://www.easy-mock.com/mock/59801fd8a1d30433d84f198c/example/user/all'
        // fetch(url)
        //     .then((res=>res.json())) //注意需要执行一次 res.json() 方法才能获取数据
        //     .then(data=>{
        //         console.log(data,'data')
        // })

        /**
         * fetch
         * 基于promise的ajax请求
         * 兼容性低：IE都不支持，低版本 Safari 兼容问题，Firefox Chrome Opera 如果特性不开的话也会出问题
         * 写法比较麻烦
         */

        //测试一

        // const promise = new Promise((resolve, reject) => {
        //     console.log(1)
        //     resolve()
        //     console.log(2)
        // })
        //
        // promise.then(()=>{
        //     console.log(3)
        // })
        //
        // console.log(4)

        //1、2、4、3


        //测试二 3 7 4 1 2 5

        // const first =()=>(new Promise((resolve,reject) => {
        //     console.log(3)
        //         let p = new Promise((resolve, reject) => {
        //                 console.log(7)
        //                 setTimeout(()=>{
        //                     console.log(5)
        //                     resolve(6)
        //                 },0)
        //                 resolve(1)
        //          })
        //
        //      resolve(2)
        //         p.then(res=>{
        //             console.log(res)//1
        //         })
        //
        // }))
        //
        // first().then(res=>{
        //     console.log(res)//2
        // })
        //
        // console.log(4)




        // let array = [1,2,3]
        // console.log(array.includes(2))
        //
        // var a=[{id:1,name:1},{id:2,name:2}]
        //
        // a.map(item=>{
        //     item.id==1? console.log('true'):console.log('false')
        // })
        // console.log(a)
        //
        // this.asyncFunc()
        // this.asyncAndawaitFunc()

        this.setState({
            data:2
        })
        this.setState({
            data:3
        })
        this.setState({
            data:4
        })
        console.log(this.state.data)


        //====
        for(var i=0;i<5;i++){
            setTimeout(()=>{
                // console.log(new Date,i)
            },1000)
        }
        // console.log(new Date,i) //Tue Apr 09 2019 14:33:38 GMT+0800 (中国标准时间) 5

        // Father.jsx60 Tue Apr 09 2019 14:33:39 GMT+0800 (中国标准时间) 5
        // Fathersx:160 Tue Apr 09 2019 14:33:39 GMT+0800 (中国标准时间) 5
        // Father.jsx60 Tue Apr 09 2019 14:33:39 GMT+0800 (中国标准时间) 5
        // Fathersx:160 Tue Apr 09 2019 14:33:39 GMT+0800 (中国标准时间) 5
        // Fathersx:160 Tue Apr 09 2019 14:33:39 GMT+0800 (中国标准时间) 5


        // var str = 'asdfssaaasasasasaa';
        // var json = {};
        // for (var i = 0; i < str.length; i++) {
        //
        //     console.log(json)
        //     if(!json[str.charAt(i)]){
        //         json[str.charAt(i)] = 1;
        //     }else{
        //         json[str.charAt(i)]++;
        //     }
        // };
        // // console.log(json)
        // var iMax = 0;
        // var iIndex = '';
        // for(var i in json){
        //     if(json[i]>iMax){
        //         iMax = json[i];
        //         iIndex = i;
        //     }
        // }
        // console.log('出现次数最多的是:'+iIndex+'出现'+iMax+'次');

        //
        // function f(x){// 假设为 2级作用域
        //     var temp = x ;//局部变量	 //temp已经没有被使用
        //     return function(x){	// 3级作用域  (function 有了一个执行域 var obj)
        //         temp += x ;		//  又被使用了
        //         console.log(temp);
        //     }
        // }
        // var a = f(50);
        // //alert(a);
        //
        // a(5);//55
        // a(10);//65
        // a(20);//85



    }
    asyncFunc=()=>{
        async function time() {
            try{
                return 'hello time'
            }catch{
                return 'error'
            }

        }
        time().then(res=>{
            console.log(res)
        }).catch(req=>{
            console.log(req)
        })

        console.log(time())
        console.log('虽然在后面，但是我先执行');
    }

     asyncAndawaitFunc=()=>{

        async function timeout(ms){
            await new Promise(resolve => {
                setTimeout(resolve,ms)
            })
        }
        async function asyncPrint(value,ms) {
           await timeout(ms)
            console.log(value)

        }

        asyncPrint('hello word',50)
    }
    componentWillReceivePorps(nextProps) { // 接收到新的props时触发
        console.log('componentWillReceivePorps')
    }
    shouldComponentUpdate(nextProps, nextState) { // 组件Props或者state改变时触发，true：更新，false：不更新
        console.log('shouldComponentUpdate')
        return true
    }
    componentWillUpdate(nextProps, nextState) { // 组件更新前触发
        console.log('componentWillUpdate')
    }
    componentDidUpdate() { // 组件更新后触发
        console.log('componentDidUpdate')
    }
    componentWillUnmount() { // 组件卸载时触发
        console.log('componentWillUnmount')

        this.refs.view.removeEventListener('click',()=>{
            console.log('removeEventListener--2')
        })
    }

}
