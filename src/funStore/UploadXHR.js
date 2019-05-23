/**
 * 上传图片
 */

const promiseFile = (url, formData) => {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.send(formData);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.response))
                } else {
                    reject(JSON.parse(xhr.response))
                }
            }
        }
    })
}

export default promiseFile



/**
 *
 * // 上传背景图片
 uploadHandle = (e) => {
        let {params,uploadstate} = this.state
        let {taskId} = this.props
        if(uploadstate == '1'||taskId) return
        let fileContainer = document.createElement("input")
        fileContainer.type = 'file'
        fileContainer.onchange = (e) => {
          this.uploadEvent(e.target.files[0],e.target.value)
        }
        fileContainer.click()
    }
 uploadEvent = (file,value) => {
        const index = value.lastIndexOf('.')
        const finalName = value.substr(index+1)
        const format = ["jpg","png","jpeg"]
        const size = file.size
        const formData = new FormData();//new 一个提交的对象 把需要提交的数据添加到这个FormData对象中
        formData.append('file',file)
        if(size>4194304){
            // 图片格式错误或大小超过限制
            this.setState({uploadstate:3})
            sendEvent('message', {txt: "上传背景图片大小不能超过1MB",code: 1004})
            return
        }
        if(!format.includes(finalName.toLowerCase())){
            this.setState({uploadstate:3})
            sendEvent('message', {txt: "上传背景图片格式错误",code: 1004})
            return
        }
        this.successHandle(formData).then(res => {
            let params = this.state.params
            params.backgroundPicUrl = res.url
            this.setState({params,uploadstate:2})
            sendEvent('message', {txt: "上传背景图片成功",code: 1000})
        })
        // this.getImageSize(file, (w,h,data)=>{
        //     if(w==750&&h==1334){
        //         this.successHandle(formData).then(res => {
        //             let params = this.state.params
        //             params.backgroundPicUrl = res.url
        //             this.setState({params,uploadstate:2})
        //             sendEvent('message', {txt: "上传背景图片成功",code: 1000})
        //         })
        //     }else{
        //         // 图片大小错误
        //         this.setState({uploadstate:3})
        //         sendEvent('message', {txt: "上传背景图片尺寸仅支持750*1334px",code: 1004})
        //         return
        //     }
        // })
    }
 successHandle=(formData)=>{
        const self = this
        this.setState({uploadstate: 1})
        const url = API_PATH+'/gridfs-api/noauth/media'
          return promiseFile(url,formData)
          .then(res => {
            return res.resultContent
          })
    }
 * */
