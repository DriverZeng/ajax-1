console.log('我是曾老湿main.js页面')

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/style.css')
    request.onreadystatechange = () => {
        console.log(request.readyState)
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <300){
                //创建style标签
                const style = document.createElement('style')
                //填写style内容
                style.innerHTML = request.response
                //插入头部
                document.head.appendChild(style)
            }else{
                alert('兄dei，你的 CSS 加载失败惹...')
            }
        } 
    }
    request.send()
}

getJS.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/zls.js')
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log('阿西吧，JS失败了')
    }
    request.send()
}

getHTML.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/zls.html')
    request.onload = () =>{
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () =>{}
    request.send()
}

getXML.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/zls.xml')
    request.onreadystatechange = () =>{
        if(request.readyState === 4 ){
            if(request.status >= 200 && request.status < 300){
                const dom = request.responseXML
                const text  = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }
        }
    }
    request.send()
}

getJSON.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/zls.json')
    request.onreadystatechange = () =>{
        if(request.readyState === 4 ){
            if(request.status >= 200 && request.status < 300){
                console.log(request.response)
                const object = JSON.parse(request.response)
                myName.textContent = object.name
            }
        }
    }
    request.send()
}

let n = 1
getPage.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange = () =>{
        if(request.readyState === 4 ){
            if(request.status >= 200 && request.status < 300){
                const array = JSON.parse(request.response)
                array.forEach(item=>{
                    const li = document.createElement('li')
                    li.textContent = item.id
                    zls.appendChild(li)
                })
                    n+=1
            }
        }
    }
    request.send()
}