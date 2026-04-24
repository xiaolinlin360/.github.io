// 当本地存储为null时，代入默认的data
!function () {
  //朋友圈
  if (JSON.parse(localStorage.getItem('data')) === null) {
    const data = [
      { pyq: '元旦快乐哦', shijian: '2026/1/1 00:00:00' },
      { pyq: '起飞吧~前端', shijian: '2025/11/11 00:00:00' },
      { pyq: '计算机梦开始的地方', shijian: '1970/1/1 00:00:00' },
    ]
    localStorage.setItem('data', JSON.stringify(data))
  }
  //任务
  if (JSON.parse(localStorage.getItem('datas')) === null) {
    const datas = [
      { rw: '元旦节要交数模考核，不要忘了', shijian: '2026年1月1日' },
    ]
    localStorage.setItem('datas', JSON.stringify(datas))
  }
  //收藏音乐
  if (JSON.parse(localStorage.getItem('datass')) === null) {
    const datass = [
      { id: 2097826775, geming: '慢慢', geshou: '岳燃', zhuanji: '慢慢' },
      { id: 1999956412, geming: '在你的身边', geshou: '盛哲', zhuanji: '哲' },
      { id: 1330348068, geming: '起风了', geshou: '买辣椒也用券', zhuanji: '起风了' },
      { id: 1413585838, geming: '与我无关', geshou: '阿冗', zhuanji: '与我无关' },
      { id: 1403318151, geming: '把回忆拼好给你', geshou: '王贰浪', zhuanji: '把回忆拼好给你' },
    ]
    localStorage.setItem('datass', JSON.stringify(datass))
  }

}()


//导航栏
!function () {
  //滑块，top栏，右侧文字，看看项目跳转
  const head_right_box = document.querySelector('.head-right .box')
  const head_right_ul = document.querySelector('.head-right ul')
  const head_left_p = document.querySelector('.head-left p')
  const ho_right6 = document.querySelector('.ho-right6')
  //复原
  function fuyuan() {
    document.documentElement.scrollTop = 0
    document.querySelector('.homepage').style.display = 'none'  //首页
    document.querySelector('.calendar').style.display = 'none'  //日历
    document.querySelector('.project').style.display = 'none'   //项目
    document.querySelector('.moments').style.display = 'none'   //朋友圈
  }

  head_right_ul.addEventListener('click', (e) => {
    //滑块位置
    head_right_box.style.left = `${e.target.offsetLeft}px`
    //修改左侧
    head_left_p.innerHTML = e.target.innerHTML
    if (e.target === head_right_ul.children[0]) {
      fuyuan()
      document.querySelector('.homepage').style.display = 'flex'
    }
    if (e.target === head_right_ul.children[1]) {
      fuyuan()
      document.querySelector('.calendar').style.display = 'flex'
    }
    if (e.target === head_right_ul.children[2]) {
      fuyuan()
      document.querySelector('.project').style.display = 'flex'
    }
    if (e.target === head_right_ul.children[3]) {
      fuyuan()
      document.querySelector('.moments').style.display = 'flex'
    }
  })
  //点击 看看项目咯~~ 跳转
  ho_right6.addEventListener('click', () => {
    fuyuan()
    document.querySelector('.project').style.display = 'flex'
    head_right_box.style.left = `${head_right_ul.children[2].offsetLeft}px`
  })
}()


//首页渲染
!function () {
  //首页了解一下我
  !function () {
    const lxw = document.querySelector('.ho-right1 div')
    lxw.addEventListener('click', () => {
      //平滑滚动
      window.scrollTo({
        top: 260,
        behavior: 'smooth'
      });
    })
  }()

  //首页-彩蛋
  !function () {
    const caidan = document.querySelectorAll('.homepage .body-left4 .box i')
    const left = document.querySelector('.homepage .body-left4 .left')      //左按钮
    const right = document.querySelector('.homepage .body-left4 .right')    //右按钮
    const ul = document.querySelector('.homepage .body-left4 .left ul')
    caidan[0].parentNode.parentNode.style.marginLeft = '-270px'
    left.style.opacity = '0'

    caidan[0].addEventListener('click', function () {
      caidan[1].parentNode.parentNode.style.marginLeft = '25px'
      caidan[1].style.cursor = 'pointer'
      caidan[0].style.cursor = 'not-allowed'
      left.style.opacity = '1'
      right.style.opacity = '0'
    })
    caidan[1].addEventListener('click', function () {
      caidan[0].parentNode.parentNode.style.marginLeft = '-270px'
      caidan[0].style.cursor = 'pointer'
      caidan[1].style.cursor = 'not-allowed'
      right.style.opacity = '1'
      left.style.opacity = '0'
    })
    let i = 0
    //嵌套轮播图
    setInterval(() => {
      ul.style.marginTop = `-${(ul.children[2].offsetTop - ul.children[1].offsetTop) * i}px`
      if (i === 5) {
        i = -1
      }
      i++
    }, 2000)
  }()

  //首页-技术-小项目-追逐小球
  !function () {
    const div = document.querySelector('.ho-right5 .box4 .div')
    const box = document.querySelector('.ho-right5 .box4 .div .boxx')
    let ex = 0
    let ey = 0
    div.addEventListener('mousemove', (e) => {
      ex = e.x - 4 - div.getBoundingClientRect().x
      ey = e.y - 4 - div.getBoundingClientRect().y
    })
    function shufu() {
      box.style.marginTop = ey + 'px'
      box.style.marginLeft = ex + 'px'
    }
    setInterval(shufu, 120)//适应60HZ分辨率
  }()

  //首页-技术-小项目-透镜
  !function () {
    const box0 = document.querySelectorAll('.ho-right5 .box3 .boxx0')
    const box1 = document.querySelector('.ho-right5 .box3 .boxx1')
    const style = document.querySelectorAll('style')
    let x
    let y
    for (let i = 0; i < box0.length; i++) {
      box0[i].addEventListener("mousemove", e => {
        //获得鼠标位置相对于盒子的百分比大小
        x = (e.x - box1.getBoundingClientRect().x) * 100 / box1.getBoundingClientRect().width
        y = (e.y - box1.getBoundingClientRect().y) * 100 / box1.getBoundingClientRect().height
        style[1].innerHTML = `:root{
                                        --x:${x}%;
                                        --y:${y}%;
                                    }`
      })
    }
  }()

  //首页-关于我
  !function () {
    //左侧轮播效果
    !function () {
      const body2_c = document.querySelector('.ho-right7 .box1 .ul ul')
      const li = document.querySelectorAll('.box1 .ul li')

      let i = 0  //i是左侧的跳转
      //a函数是为了防止计时器2s的延迟
      function a() {
        i++
        body2_c.style.marginTop = `-${(body2_c.children[2].offsetTop - body2_c.children[1].offsetTop) * i}px`

        //最上和最下透明度小
        for (let ii = 0; ii < li.length; ii++) {
          li[ii].style.opacity = '1'
        }
        li[i - 1].style.opacity = '0.3'
        li[i].style.opacity = '0.3'
        li[(i === 11) ? 6 : (i + 6)].style.opacity = '0.3'

        //i===10时达最末尾，为了先得平滑，先让过渡时间为0
        if (i === 11) {
          i = 0
          body2_c.style.marginTop = `0px`
          body2_c.style.transition = 'all 0s'
        } else {
          body2_c.style.transition = 'all 1s'
        }
      }
      a()
      setInterval(a, 2000)

    }()


    //轮播图部分
    !function () {
      const ul = document.querySelector('.ho-right7 .box2 ul')
      const div = document.querySelectorAll('.ho-right7 .box2 .lbt div')
      const li = document.querySelectorAll('.box1 .ul li')
      const l = ul.children[1].offsetLeft - ul.children[0].offsetLeft

      let i = 0 //i是右侧轮播图的跳转
      //轮播效果
      function lunbo() {
        ul.style.transition = 'all 0.5s'//先添加过渡效果
        if (i === 11) {//到最后面用障眼法取消掉最后面的空白
          i = 0
          ul.style.marginLeft = `0`
        } else {
          ul.style.marginLeft = `-${l * i}px`//偏移lu位置达到轮播效果
        }

        for (let j = 0; j < div.length; j++) {
          div[j].style.background = 'var(--bg-hei0)'
        }
        div[i === 10 ? 0 : i].style.background = '#ffa500'
      }


      //左侧点击事件对应右侧效果
      !function () {
        for (let ii = 0; ii < li.length; ii++) {
          li[ii].addEventListener('click', () => {
            //如果点击对应的li是多出来补充的则进行i--
            if (ii >= 10) {
              for (let iii = 0; iii < li.length - div.length + 3; iii++) {
                ii--
              }
            }
            i = ii
            for (let iii = 0; iii < div.length; iii++) {
              div[iii].style.background = 'var(--bg-hei0)'
            }
            ul.style.marginLeft = `-${l * i}px`//偏移lu位置达到轮播效果
            div[i].style.background = '#ffa500'
          })
        }

        for (let ii = 0; ii < div.length; ii++) {
          div[ii].addEventListener('click', () => {
            i = ii
            for (let iii = 0; iii < div.length; iii++) {
              div[iii].style.background = 'var(--bg-hei0)'
            }
            ul.style.marginLeft = `-${l * i}px`//偏移lu位置达到轮播效果
            div[i].style.background = '#ffa500'
          })
          div[ii].style.background = 'var(--bg-hei0)'
        }
        div[i].style.background = '#ffa500'
      }()


      //鼠标进入暂停计时器，离开开启
      !function () {
        let jishiqi = setInterval(() => { i++; lunbo() }, 3000)//定义计时器
        if (i === 10) {
          clearInterval(jishiqi)
        }
        ul.addEventListener('mouseenter', () => clearInterval(jishiqi))
        li[0].parentNode.addEventListener('mouseenter', () => clearInterval(jishiqi))
        ul.addEventListener('mouseleave', () => {
          jishiqi = setInterval(() => { i++; lunbo() }, 3000)
        })
        li[0].parentNode.addEventListener('mouseleave', () => {
          jishiqi = setInterval(() => { i++; lunbo() }, 3000)
        })
      }()


      //拖动效果 (虽然略有卡顿)
      !function () {
        // 获取鼠标相对于盒子的位置
        let x1
        let x2
        let x
        let m = false  //仅按下时才触发mousemove的内容
        let t = new Date() //节流
        //鼠标离开时让 m=false 防止鼠标不是按下状态时仍然能拖拽
        ul.addEventListener('mouseleave', () => m = false)

        ul.addEventListener('mousedown', (e) => {//按下
          m = true
          x1 = e.x - ul.getBoundingClientRect().x
        })
        ul.addEventListener('mousemove', (e) => {//按下时滑动
          if (m && new Date() - t > 32) {
            ul.style.marginLeft = `${-l * i + (e.x - x1 - ul.getBoundingClientRect().x)}px`
            t = new Date()
          }
        })
        ul.addEventListener('mouseup', (e) => {//鼠标弹起
          m = false
          x2 = e.x - ul.getBoundingClientRect().x;
          x = x1 - x2
          // 处理边界情况的平滑过渡
          if (x > 100) {//鼠标向右位移>100即切换到下一张
            if (i === 9) { // 最后一张
              // 先平滑移动到视觉上的第一张位置
              ul.style.transition = 'all 0.5s'
              ul.style.marginLeft = `-${l * 10}px`
              // 过渡结束后重置位置
              setTimeout(() => {
                ul.style.transition = 'none'
                ul.style.marginLeft = `0px`
                i = 0
                // 更新指示器
                for (let j = 0; j < div.length; j++) {
                  div[j].style.background = 'var(--bg-hei0)'
                }
                div[0].style.background = '#ffa500'
              }, 500)
            } else {
              i++
              lunbo()
            }
          } else if (x > 0 && x <= 100) {
            lunbo()
          }

          if (x < -100) { // 鼠标向左位移>100即切换到上一张
            if (i === 0) { // 第一张
              // 先平滑移动到视觉上的最后一张位置
              ul.style.transition = 'all 0.5s'
              ul.style.marginLeft = `0px`
              // 过渡结束后重置位置
              setTimeout(() => {
                ul.style.transition = 'none'
                ul.style.marginLeft = `-${l * 9}px`
                i = 9
                // 更新指示器
                for (let j = 0; j < div.length; j++) {
                  div[j].style.background = 'var(--bg-hei0)'
                }
                div[9].style.background = '#ffa500'
              }, 500)
            } else {
              i--
              lunbo()
            }
          } else if (x >= -100 && x <= 0) {
            lunbo()
          }
        });
      }()
    }()
  }()

  //首页-听听音乐
  !function () {
    //获取搜索框，搜索结果ul1,收藏项目ul2,评论区ul3,轮播图img
    const input = document.querySelector('.homepage .ho-right8 .box1 .boxx1 input')
    const button = document.querySelector('.homepage .ho-right8 .box1 .boxx1 button')
    const ul1 = document.querySelector('.homepage .ho-right8 .box1 .boxx2 ul')
    const ul2 = document.querySelector('.homepage .ho-right9 ul')
    const ul3 = document.querySelector('.homepage .ho-right9 ul:nth-child(2)')
    const img = document.querySelector('.homepage .ho-right8 .box2 .boxx1 img')
    //定义空数组装搜索结果
    let data = []
    //API函数调用后带出data【】，以及渲染搜索结果
    function API() {
      fetch(`http://api.zhyunxi.com/api.php?api=10&key=75929ac7e216b9de760c7431bee042fe&search=${input.value}&type=so&num=10`)
        .then((e) => e.json()).then((e) => {
          data = e.data[0].list
          ul1.innerHTML = ''
          for (let i = 0; i < data.length; i++) {
            ul1.appendChild(document.createElement('li'))
          }
          const li = ul1.querySelectorAll('li')
          for (let i = 0; i < li.length; i++) {
            li[i].setAttribute('data-id', i)
            li[i].innerHTML = `<p>${data[i].name}</p><samp>${data[i].artist}</samp><samp>${data[i].time}</samp>`
          }
        });
    }
    button.addEventListener('click', e => {
      if (input.value !== '') {
        API()
      } else {
        alert('不能搜索空的音乐哦')
      }
    })
    input.addEventListener('keyup', e => {
      if (e.key === 'Enter') {
        if (input.value !== '') {
          API()
        } else {
          alert('不能搜索空的音乐哦')
        }
      }
    })

    //用事件委托，点击搜索到的某个data-id，对应获取data【】的id数据，访问得到对应音乐地址
    ul1.addEventListener('click', e => {
      //记录点击的对应li的id
      let j = e.target.dataset.id || e.target.parentNode.dataset.id
      if (j) {
        //音乐地址ex.data[0].url
        fetch(`http://api.zhyunxi.com/api.php?api=10&key=75929ac7e216b9de760c7431bee042fe&search=${data[j].id}&type=song`)
          .then((e) => e.json()).then(ex => {
            document.querySelector('.homepage .ho-right8 .box2 .boxx2 p:nth-child(1)').innerHTML = `歌名:${data[j].name}`
            document.querySelector('.homepage .ho-right8 .box2 .boxx2 p:nth-child(2)').innerHTML = `作者:${data[j].artist}`
            document.querySelector('.homepage .ho-right8 .box2 .boxx2 p:nth-child(3)').innerHTML = `专辑:${data[j].album}`
            //判断返回的音乐地址是否404
            if (ex.data[0].url === 'http://music.163.com/404') {
              document.querySelector('.homepage .ho-right8 .box2 .boxx2 p:nth-child(1)').innerHTML = `歌名:${data[j].name}`
              document.querySelector('.homepage .ho-right8 .box2 .boxx2 p:nth-child(2)').innerHTML = `emmmm,这首歌我没有版权嗷嗷嗷`
              document.querySelector('.homepage .ho-right8 .box2 .boxx2 p:nth-child(3)').innerHTML = ``
            }
            document.querySelector('.homepage .ho-right8 .box2 .boxx2 audio').src = ex.data[0].url
          })
        //对应音乐评论
        fetch(`http://api.zhyunxi.com/api.php?api=10&key=75929ac7e216b9de760c7431bee042fe&search=${data[j].id}&type=comment`)
          .then((e) => e.json()).then(ex => {
            ul3.innerHTML = ''
            for (let i = 0; i < Math.min(14, ex.data.length); i++) {
              ul3.appendChild(document.createElement('li'))
            }
            const li = ul3.querySelectorAll('li')
            for (let i = 0; i < li.length; i++) {
              //诺访问的为空则跳过本次循环
              if (ex.data[i] === null || !ex.data[i]) {
                continue;
              }
              li[i].innerHTML = `<b>${ex.data[i].name}</b>：${ex.data[i].msg}`
            }
            //诺没有评论则显示(゜-゜)つロ
            if (ul3.innerText === '') {
              ul3.innerHTML = '<div>这里是评论区，不是无人区(゜-゜)つロ </div>'
            }
          })
      }
    })

    //用arr储存默认数据
    const arr = JSON.parse(localStorage.getItem('datass')) || []
    //单击后通过arr内的id得到歌曲地址url
    ul2.addEventListener('click', e => {
      let j = e.target.dataset.id || e.target.parentNode.dataset.id
      if (e.target.tagName !== 'I' && (j)) {
        fetch(`http://api.zhyunxi.com/api.php?api=10&key=75929ac7e216b9de760c7431bee042fe&search=${arr[j].id}&type=song`)
          .then((e) => e.json()).then(ex => {
            document.querySelector('.homepage .ho-right8 .box2 .boxx2 p:nth-child(1)').innerHTML = `歌名:${arr[j].geming}`
            document.querySelector('.homepage .ho-right8 .box2 .boxx2 p:nth-child(2)').innerHTML = `作者:${arr[j].geshou}`
            document.querySelector('.homepage .ho-right8 .box2 .boxx2 p:nth-child(3)').innerHTML = `专辑:${arr[j].zhuanji}`
            if (ex.data[0].url === 'http://music.163.com/404') {
              document.querySelector('.homepage .ho-right8 .box2 .boxx2 p:nth-child(2)').innerHTML = `emmmm,这首歌我没有版权嗷嗷嗷`
              document.querySelector('.homepage .ho-right8 .box2 .boxx2 p:nth-child(3)').innerHTML = ``
            }
            document.querySelector('.homepage .ho-right8 .box2 .boxx2 audio').src = ex.data[0].url
          })
        //评论同理
        fetch(`http://api.zhyunxi.com/api.php?api=10&key=75929ac7e216b9de760c7431bee042fe&search=${arr[j].id}&type=comment`)
          .then((e) => e.json()).then(ex => {
            ul3.innerHTML = ''
            for (let i = 0; i < Math.min(14, ex.data.length); i++) {
              ul3.appendChild(document.createElement('li'))
            }
            const li = ul3.querySelectorAll('li')
            for (let i = 0; i < li.length; i++) {
              if (ex.data[i] === null || !ex.data[i]) {
                continue;
              }
              li[i].innerHTML = `<b>${ex.data[i].name}</b>：${ex.data[i].msg}`
            }
            if (ul3.innerText === '') {
              ul3.innerHTML = '<div>这里是评论区，不是无人区(゜-゜)つロ </div>'
            }
          })
      }
    })

    //右键收藏存入arr，并存入内存
    function shoucang() {
      ul1.addEventListener('contextmenu', e => {
        e.preventDefault()
        let j = e.target.dataset.id || e.target.parentNode.dataset.id
        arr.push(
          {
            id: data[j].id,
            geming: data[j].name,
            geshou: data[j].artist,
            zhuanji: data[j].album
          }
        )
        xuanran()
        localStorage.setItem('datass', JSON.stringify(arr))
      })
    }
    shoucang()

    //渲染对应收藏夹ul2
    function xuanran() {
      ul2.innerHTML = arr.map(function (arr, i) {
        return `<li data-id="${i}">
            <p data-id="${i}"><b class="iconfont icon-shoucang" data-id="${i}"></b>${arr.geming}</p><i class="iconfont icon-lajitong i" data-ids="${i}"></i>
          </li>`
      }).join('')
    }
    xuanran()

    //单击垃圾桶删除部分
    function shan() {
      ul2.addEventListener('click', e => {
        if (e.target.tagName === 'I') {
          arr.splice(e.target.dataset.ids, 1)
          xuanran()
          localStorage.setItem('datass', JSON.stringify(arr))
        }
      })
    }
    shan()



    //背景歌手自动轮播图
    setInterval(() => {
      fetch(`http://api.zhyunxi.com/api.php?api=9&key=75929ac7e216b9de760c7431bee042fe&lx=fengjing`).then(e => e.json()).then(e => {
        img.src = e.data[0].imgurl
      })
    }, 3000)
  }()
}()



// 日历渲染    有辅助函数rili1 默认渲染函数 api函数 日程管理函数 用户输入年月部分以及左右月份跳转按钮函数
!function () {
  //部署结构
  const ul = document.querySelector('.ca-right .box3 ul')
  for (let i = 0; i < 42; i++) {
    //在ul中创造42个li>div*3+i
    ul.appendChild(document.createElement('li'))
  }
  const li = document.querySelectorAll('.ca-right .box3 ul li')
  for (let i = 0; i < 42; i++) {
    li[i].setAttribute('data-id', i)
    li[i].appendChild(document.createElement('div'))
    li[i].appendChild(document.createElement('div'))
    li[i].appendChild(document.createElement('div'))
    //五角星
    li[i].appendChild(document.createElement('i'))
  }
  //获取元素
  //div 对应日历右侧的号数、农历、节日
  const div1 = document.querySelectorAll('.ca-right .box3 ul li div:nth-child(1)')
  const div2 = document.querySelectorAll('.ca-right .box3 ul li div:nth-child(2)')
  const div3 = document.querySelectorAll('.ca-right .box3 ul li div:nth-child(3)')
  //五角星
  const li_i = document.querySelectorAll('.ca-right .box3 ul li i')
  //左侧的基本信息 宜 忌 其他-五行...
  const jbxx = document.querySelectorAll('.calendar .body-left1 p')
  const yi = document.querySelectorAll('.calendar .body-left2 .box1 p')
  const ji = document.querySelectorAll('.calendar .body-left2 .box2 p')
  const qita = document.querySelectorAll('.calendar .body-left3 .box p:nth-child(2)')
  //得到当前年月
  const yuefenzhuanhuan = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  document.querySelector('.calendar .body-right .ca-right .boxxx1 b').innerHTML = new Date().getFullYear()
  document.querySelector('.calendar .body-right .ca-right .boxxx2 p').innerHTML = yuefenzhuanhuan[new Date().getMonth()]


  //函数rili1：输入年n和月y返回【这个月天数r，对应的第一天的星期xq】
  function rili1(n, y) {
    const yuetianshu = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let r
    //如果二月且闰年
    if (y === 2 && ((n % 4 === 0 && n % 100 !== 0) || (n % 400 === 0))) {
      r = 29;
    } else {
      r = yuetianshu[y - 1]
    }
    // 获取当月第一天是星期几  0=星期日
    const xq = new Date(n, y - 1, 1).getDay()
    return [r, xq]
  }

  //默认渲染 左侧的“今天”信息
  !function () {
    fetch(`http://api.zhyunxi.com/api.php?api=129&key=9542b0cb75af833eb55e139d4955a69b&date=${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`)
      .then(e => e.json()).then(e => {
        const data = e.data
        //点击后渲染左侧基本信息
        yi[0].innerHTML = data[0].Yi
        ji[0].innerHTML = data[0].Ji
        jbxx[0].innerHTML = `${data[0].GregorianDateTime}&nbsp;&nbsp;&nbsp;&nbsp;${data[0].Day}`
        jbxx[1].innerHTML = new Date().getDate()
        jbxx[2].innerHTML = `【${data[0].LYear}】&nbsp;&nbsp农历${data[0].LMonth}${data[0].LDay}`
        jbxx[3].innerHTML = `${data[0].TianGanDiZhiYear}&nbsp;&nbsp${data[0].TianGanDiZhiMonth}&nbsp;&nbsp${data[0].TianGanDiZhiDay}`
        jbxx[4].innerHTML = `节日：${data[0].GJie || '无'}&nbsp;&nbsp;&nbsp;&nbsp;节气：${data[0].SolarTermName || '无'}`
        qita[0].innerHTML = data[0].JianShen
        qita[1].innerHTML = `${data[0].WuxingJiazi}<br>${data[0].WuxingNaDay}`
        qita[2].innerHTML = data[0].XingWest
        qita[3].innerHTML = data[0].XingEast
        qita[4].innerHTML = data[0].Taishen
        qita[5].innerHTML = data[0].PengZu
      })
  }()


  // //函数API,输入年月日得到数组e.data 日历渲染部分这里完成
  //开关用于解决事件监听器问题
  function API(n, y) {
    const tian_xingqi = rili1(n, y)
    //标记现在
    for (let i = 0; i < li.length; i++) {
      li[i].classList.remove('li-boxShadow')
    }
    //给当前时间的li添加标记
    if (new Date().getFullYear() === n) {
      if (new Date().getMonth() === y - 1) {
        console.log(li[tian_xingqi[1] + new Date().getDate() - 1]);
        li[tian_xingqi[1] + new Date().getDate() - 1].classList.add('li-boxShadow')
      }
    }

    //记录星星
    !function () {
      const arrr = JSON.parse(localStorage.getItem('datas')) || []//防止无数据
      let jiluarr = [] //将任务数据暂时存入其中，【 [年，月，日]，[年，月，日]，.... 】
      //遍历去除每个li里面的原来的星星

      for (let i = 0; i < li.length; i++) {
        li_i[i].classList.remove('iconfont')
        li_i[i].classList.remove('icon-shoucang')
      }
      //遍历记录存入
      for (let i = 0; i < arrr.length; i++) {
        jiluarr.push(arrr[i].shijian.match(/\d+/g))
      }

      //检测年月是否对的上，然后添加星星
      for (let i = 0; i < arrr.length; i++) {
        if (+jiluarr[i][0] === +n) {
          if (+jiluarr[i][1] === +y) {
            li_i[+jiluarr[i][2] + tian_xingqi[1] - 1].classList.add('iconfont')
            li_i[+jiluarr[i][2] + tian_xingqi[1] - 1].classList.add('icon-shoucang')
          }
        }
      }
    }()

    //还原右侧基本信息 移除上一次调用的事件监听器！！！（目前没有做到）
    fetch(`http://api.zhyunxi.com/api.php?api=129&key=9542b0cb75af833eb55e139d4955a69b&date=${n}/${y}`)
      .then(e => e.json()).then(e => {

        const data = e.data

        for (let i = 0; i < li.length; i++) {
          div1[i].innerHTML = ''
          div2[i].innerHTML = ''
          div3[i].innerHTML = ''
        }

        for (let j = 0; j < tian_xingqi[0]; j++) {
          //渲染右侧基本信息
          div1[tian_xingqi[1] + j].innerHTML = j + 1
          div2[tian_xingqi[1] + j].innerHTML = data[j].LDay
          div3[tian_xingqi[1] + j].innerHTML = data[j].GJie
        }

        //用事件委托增加性能
        ul.addEventListener('click', e => {
          //点击后对应的li添加阴影标记
          if ((e.target.dataset.id >= 0 && e.target.dataset.id < 42) || (e.target.parentNode.dataset.id >= 0 && e.target.parentNode.dataset.id < 42)) {
            for (let i = 0; i < li.length; i++) {
              li[i].style.boxShadow = 'none'
            }
            li[e.target.dataset.id || e.target.parentNode.dataset.id].style.boxShadow = ' 0 0 15px var(--bg-hei9) inset'
          }
          //当点击到空日程时，左侧记为空
          if (e.target.dataset.id < tian_xingqi[1] || e.target.dataset.id >= tian_xingqi[0] + tian_xingqi[1] || e.target.parentNode.dataset.id < tian_xingqi[1] || e.target.parentNode.dataset.id >= tian_xingqi[0] + tian_xingqi[1]) {
            for (let ii = 0; ii < jbxx.length; ii++) {
              jbxx[ii].innerHTML = ''
              qita[ii].innerHTML = ''
            }
            yi[0].innerHTML = ''
            ji[0].innerHTML = ''
            qita[5].innerHTML = ''
            jbxx[0].innerHTML = '当天无日程哦，去别处看看吧~'
          }
          //当点击到有对应日程时，渲染右侧
          if ((e.target.dataset.id >= tian_xingqi[1] && e.target.dataset.id < tian_xingqi[0] + tian_xingqi[1]) || (e.target.parentNode.dataset.id >= tian_xingqi[1] && e.target.parentNode.dataset.id < tian_xingqi[0] + tian_xingqi[1])) {
            //对应li的当天号数
            let j = (e.target.dataset.id || e.target.parentNode.dataset.id) - tian_xingqi[1]
            yi[0].innerHTML = data[j].Yi
            ji[0].innerHTML = data[j].Ji
            jbxx[0].innerHTML = `${data[j].GregorianDateTime}&nbsp;&nbsp;&nbsp;&nbsp;${data[j].Day}`
            jbxx[1].innerHTML = li[j + tian_xingqi[1]].children[0].innerHTML
            jbxx[2].innerHTML = `【${data[j].LYear}】&nbsp;&nbsp农历${data[j].LMonth}${data[j].LDay}`
            jbxx[3].innerHTML = `${data[j].TianGanDiZhiYear}&nbsp;&nbsp${data[j].TianGanDiZhiMonth}&nbsp;&nbsp${data[j].TianGanDiZhiDay}`
            jbxx[4].innerHTML = `节日：${data[j].GJie || '无'}&nbsp;&nbsp;&nbsp;&nbsp;节气：${data[j].SolarTermName || '无'}`
            qita[0].innerHTML = data[j].JianShen
            qita[1].innerHTML = `${data[j].WuxingJiazi}<br>${data[j].WuxingNaDay}`
            qita[2].innerHTML = data[j].XingWest
            qita[3].innerHTML = data[j].XingEast
            qita[4].innerHTML = data[j].Taishen
            qita[5].innerHTML = data[j].PengZu
          }
        })
      })
  }


  //日程管理 包括右键添加日程 文本域 内容计入内存
  !function () {
    //获取文本框
    const textarea = document.querySelector('.ca-right .box1 textarea')
    let n  //年
    let y  //月
    let r  //日
    //创建arr储存添加的日程的数据
    const arr = JSON.parse(localStorage.getItem('datas')) || []//防止无数据

    //右键添加日程
    let biaojiwujiaoxing  //用于放五角星
    ul.addEventListener('contextmenu', e => {
      e.preventDefault()
      if ((e.target.dataset.id >= 0 && e.target.dataset.id < 42) || (e.target.parentNode.dataset.id >= 0 && e.target.parentNode.dataset.id < 42)) {
        if (li[e.target.dataset.id || e.target.parentNode.dataset.id].innerText === '') {
          alert('不能为空的时间添加日程哦')
        } else {
          n = document.querySelector('.calendar .body-right .box1 .boxx1 .boxxx1 p b').innerHTML
          y = document.querySelector('.calendar .body-right .box1 .boxx1 .boxxx2 p').innerHTML
          r = li[e.target.dataset.id || e.target.parentNode.dataset.id].children[0].innerHTML
          textarea.style.display = 'block'
          document.querySelector('.ca-right .box1 .boxx3 i').style.display = 'block'
          textarea.placeholder = `请输入${y}${r}号的任务吧~`
          biaojiwujiaoxing = li_i[e.target.dataset.id || e.target.parentNode.dataset.id]  //记录添加的位置i
        }
      }
    })

    //给取消添加事件
    document.querySelector('.ca-right .box1 .boxx3 i').addEventListener('click', () => {
      textarea.value = ''
      textarea.style.display = 'none'
      document.querySelector('.ca-right .box1 .boxx3 i').style.display = 'none'
    })

    //给文本域添加键盘事件 记录任务
    textarea.addEventListener('keyup', e => {
      if (e.key === 'Enter') {
        console.log(textarea.value);
        if (textarea.value.trim() === '') {
          alert('不能发布空的任务哦')
        } else {
          // 将月转换成数字
          for (let i = 0; i < yuefenzhuanhuan.length; i++) {
            if (yuefenzhuanhuan[i] === y) {
              y = i + 1
            }
          }
          arr.push({
            rw: textarea.value.replace(/[&<>]/g, (f) => { return { '<': '&lt;', '>': '&gt;', '&': '&amp;', }[f] }), shijian: `${n}年${y}月${r}日`
          })
          xuanran()
          textarea.value = ''
          textarea.style.display = 'none'
          document.querySelector('.ca-right .box1 .boxx3 i').style.display = 'none'
          biaojiwujiaoxing.classList.add('iconfont')
          biaojiwujiaoxing.classList.add('icon-shoucang')
        }
      }
    })
    //计入任务部分
    //渲染
    function xuanran() {
      document.querySelector('.mo-right1-rw').innerHTML = arr.map(function (arr, index) {
        return `<div class="rw">
                            <p>${arr.shijian}的任务是：${arr.rw}</p>
                            <samp class="iconfont icon-lajitong" data-id="${index}"></samp>
                            <i class="iconfont icon-edit-fill" data-ids="${index}"></i>
                            <textarea name="" id="">${arr.rw}</textarea>
                        </div>`
      }).join('')
      //保存arr到内存datas
      localStorage.setItem('datas', JSON.stringify(arr))
      //记录
      const renwu = document.querySelectorAll('.moments .box0 samp')
      renwu[1].innerHTML = arr.length
    }
    xuanran()

    //删除
    function shan() {
      const samp = document.querySelector('.moments .mo-right1-rw')
      samp.addEventListener('mouseup', e => {
        if (e.target.tagName === 'SAMP') {
          arr.splice(e.target.dataset.id, 1)
          xuanran()
          //保存最新的arr
          localStorage.setItem('datas', JSON.stringify(arr))
          //重新刷新一遍api函数，防止星星删了还在
          for (let i = 0; i < yuefenzhuanhuan.length; i++) {
            if (document.querySelector('.calendar .body-right .ca-right .boxxx2 p').innerHTML === yuefenzhuanhuan[i]) {
              API(document.querySelector('.calendar .body-right .ca-right .boxxx1 b').innerHTML, i + 1)
            }
          }

        }
      })
    }
    shan()

    //改
    function gai() {
      const textarea = document.querySelector('.moments .mo-right1-rw')
      //事件委托点击切换文本框，修改后Enter修改
      textarea.addEventListener('mouseup', function (e) {
        if (e.target.tagName === 'I') {
          e.target.nextElementSibling.style.display = 'block'
          e.target.nextElementSibling.focus()
          e.target.nextElementSibling.value = arr[e.target.dataset.ids].rw
          e.target.nextElementSibling.addEventListener('keyup', function keyup(ex) {
            if (ex.key === "Enter") {
              if (this.value.trim() === '') {
                alert('不能发布空的东西哦')
              } else {
                arr[e.target.dataset.ids].rw = this.value.replace(/[&<>]/g, (f) => { return { '<': '&lt;', '>': '&gt;', '&': '&amp;', }[f] })
                this.style.display = 'none'
                localStorage.setItem('datas', JSON.stringify(arr))
                xuanran()
                this.removeEventListener('keyup', keyup)
              }
            }
          })
        }
      })
    }
    gai()
  }()


  //用户输入年月部分以及左右月份跳转按钮
  !function () {
    const chufa = document.querySelector('.ca-right .box1 .boxx2 p:nth-child(3)')
    const nian = document.querySelector('.ca-right .box1 .boxx1 .boxxx1 p b')
    const yue = document.querySelector('.ca-right .box1 .boxx1 .boxxx2 p')
    //当前的时间
    API(new Date().getFullYear(), new Date().getMonth() + 1)

    //月份转换
    let time = new Date().getFullYear()

    //输入部分
    !function () {
      const input = document.querySelectorAll('.ca-right .box1 .boxx2 input')
      //函数a为 输入验证函数
      function a() {
        //输入验证
        if (!(1969 < +input[0].value && +input[0].value < 2100 && +input[1].value > 0 && +input[1].value < 13)) {
          alert('输入有误或这个年月有点久远暂无数据哦')
          input[0].value = ''
          input[1].value = ''
          return
        } else {
          if (+input[0].value % 1 !== 0 || +input[1].value % 1 !== 0) {
            alert('输入有误或这个年月有点久远暂无数据哦')
            input[0].value = ''
            input[1].value = ''
            return
          }
        }
        //改变年月
        nian.innerHTML = `${input[0].value}`
        yue.innerHTML = yuefenzhuanhuan[+input[1].value - 1]
        time = input[0].value

        API(input[0].value, input[1].value)
        input[0].value = ''
        input[1].value = ''
      }
      chufa.addEventListener('click', a)
      input[0].addEventListener('keyup', e => {
        if (e.key === 'Enter') {
          input[1].focus()
        }
      })
      input[1].addEventListener('keyup', e => {
        if (e.key === 'Enter') {
          a()
        }
      })
    }()


    //左右按钮部分
    !function () {
      const anniu = document.querySelectorAll('.ca-right .box1 .boxx1 i')
      anniu[0].addEventListener('click', () => {
        for (let i = 0; i < yuefenzhuanhuan.length; i++) {
          if (yue.innerText === yuefenzhuanhuan[i]) {
            let yuefen = i // 当前月份（索引号，后面+1）
            if (yuefen === 0) {
              yuefen = 11 //12月
            } else {
              yuefen -= 1 //其他月份
            }
            yue.innerText = yuefenzhuanhuan[yuefen]
            API(time, yuefen + 1)
            break        //防止继续循环使其跳转两次
          }
        }
      })

      anniu[1].addEventListener('click', () => {
        for (let ii = yuefenzhuanhuan.length - 1; ii > -1; ii--) {
          if (yue.innerText === yuefenzhuanhuan[ii]) {
            let yuefen = ii
            if (yuefen === 11) {
              yuefen = 0       //一月
            } else {
              yuefen += 1  //其他月份
            }
            yue.innerText = yuefenzhuanhuan[yuefen];
            API(time, yuefen + 1)
            break
          }
        }
      })
    }()
  }()
}()


//发布小随笔/朋友圈
!function () {
  const pyq = document.querySelector('.mo-right2')
  //arr里存储的是每一个data构成的数组，后面会一个个追加
  const arr = JSON.parse(localStorage.getItem('data')) || []//防止无数据

  //发布 清空发布框 补全arr
  function fabu() {
    function fabu1() {
      //去掉左右空格
      if (document.querySelector('.box2 textarea').value.trim() === '') {
        alert('不能发布空的东西哦')
        return
      }
      arr.push({
        pyq: document.querySelector('.box2 textarea').value.replace(/[&<>]/g, (f) => { return { '<': '&lt;', '>': '&gt;', '&': '&amp;', }[f] }),
        shijian: new Date().toLocaleString()
      })
      document.querySelector('.box2 textarea').value = ''
      xuanran()
    }

    //点击发布
    document.querySelector('.box3 button').addEventListener('click', fabu1)
    //回车发布
    document.querySelector('.box2 textarea').addEventListener('keyup', function (e) {
      if (e.key === 'Enter') {
        fabu1()
      }
    })
  }
  fabu()

  //渲染
  function xuanran() {
    //得到数组元素并渲染
    pyq.innerHTML = arr.map(function (arr, index) {
      return `
                <div class="pyq">
                    <div class="pyq1">
                        <img src="./图片库/logo.jpg" alt="">
                        <div>
                            <p>喵呜</p>
                            <p>发表的内容</p>
                        </div>
                        <i class="iconfont icon-lajitong"><div>真的要删掉我吗<samp data-id="${index}">嗯</samp></div></i>
                    </div>
                    <div class="pyq2">
                        ${arr.pyq}
                        <b class="iconfont icon-edit-fill" data-ids="${index}"></b>
                        <textarea name="" id=""  data-ids="${index}">${arr.pyq}</textarea>
                    </div>
                    <samp>${arr.shijian}</samp>
                </div>`
    }).join('')
    //存储到本地的data
    localStorage.setItem('data', JSON.stringify(arr))
    //记录
    const pengyouquan = document.querySelectorAll('.moments .box0 samp')
    pengyouquan[0].innerHTML = arr.length
  }
  xuanran()

  //删除事件
  function shan() {
    const samp = document.querySelector('.moments .body-right .mo-right2')

    samp.addEventListener('mouseup', e => {
      if (e.target.tagName === 'SAMP') {
        arr.splice(e.target.dataset.id, 1)
        xuanran()
        //保存最新的arr
        localStorage.setItem('data', JSON.stringify(arr))
      }
    })
  }
  shan()

  // 修改部分
  function gai() {
    const textarea = document.querySelector('.moments .body-right .mo-right2')
    //事件委托点击切换文本框，修改后Enter修改
    textarea.addEventListener('mouseup', function (e) {
      if (e.target.tagName === 'B') {
        e.target.nextElementSibling.style.display = 'block'
        e.target.nextElementSibling.focus()
        e.target.nextElementSibling.value = arr[e.target.dataset.ids].pyq
        e.target.nextElementSibling.addEventListener('keyup', function keyup(ex) {
          if (ex.key === "Enter") {
            if (this.value.trim() === '') {
              alert('不能发布空的东西哦')
            } else {
              arr[e.target.dataset.ids].pyq = this.value.replace(/[&<>]/g, (f) => { return { '<': '&lt;', '>': '&gt;', '&': '&amp;', }[f] })
              this.style.display = 'none'
              localStorage.setItem('data', JSON.stringify(arr))
              xuanran()
              this.removeEventListener('keyup', keyup);
            }
          }
        })
      }
    })
  }
  gai()

}()


//朋友圈与任务栏的切换
!function () {
  const pyq = document.querySelector('.moments .body-left3 .pyq')
  const pyq_ = document.querySelector('.moments .body-right:nth-child(2)')
  const rw = document.querySelector('.moments .body-left3 .rw')
  const rw_ = document.querySelector('.moments .body-right:nth-child(3)')
  const textarea = document.querySelector('.moments .mo-right1 .box2 textarea')
  rw.classList.remove('pyq-rw')
  pyq.classList.add('pyq-rw')
  //实时监测任务和朋友圈数量的和
  setInterval(() => {
    document.querySelector('.moments .body-left3 .zj samp').innerText = (+document.querySelector('.moments .body-left3 .rw samp').innerText) + (+document.querySelector('.moments .body-left3 .pyq samp').innerText)
  }, 10)
  //点击对应出现对应的右侧
  document.querySelector('.moments .body-left4 .box0').addEventListener('click', () => {
    rw.classList.remove('pyq-rw')
    pyq.classList.add('pyq-rw')
    rw_.style.display = 'none'
    pyq_.style.display = 'block'
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    textarea.focus()
  })
  pyq.addEventListener('click', () => {
    rw.classList.remove('pyq-rw')
    pyq.classList.add('pyq-rw')
    rw_.style.display = 'none'
    pyq_.style.display = 'block'
  })
  rw.addEventListener('click', () => {
    rw.classList.add('pyq-rw')
    pyq.classList.remove('pyq-rw')
    rw_.style.display = 'block'
    pyq_.style.display = 'none'
  })
}()


//固定定位
!function () {
  const popup = document.querySelectorAll('.popup0')
  const homepage = document.querySelector('.homepage')
  const calendar = document.querySelector('.calendar')
  const project = document.querySelector('.project')
  const moments = document.querySelector('.moments')
  const head_right_box = document.querySelector('.head-right .box')
  //回到顶部
  popup[0].addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })
  //回到首页
  popup[1].addEventListener('click', () => {
    calendar.style.display = 'none'
    project.style.display = 'none'
    moments.style.display = 'none'
    homepage.style.display = 'flex'
    head_right_box.style.left = 0
  })
  //刷新页面
  popup[2].addEventListener('click', () => {
    location.reload()
  })
  //神秘链接
  popup[3].addEventListener('click', () => {
    location.href = 'https://www.bilibili.com/video/BV1UT42167xb?t=12.0'
  })
}()


// 背景切换
!function () {
  const head_right1 = document.querySelector('.head-right1')
  //通过切换样式表style的css变量来达到白天黑夜切换效果
  const style = document.querySelector('style')
  //太阳月亮的字体图标切换
  const zttb = document.querySelectorAll('.head-right1 i')
  const shumo = document.querySelector('.homepage .body-left4 .left img')
  //ii为奇数则为白天，偶数为黑夜
  let ii = 0
  head_right1.addEventListener('click', function () {
    ii++
    if (ii % 2 === 1) {
      style.innerHTML = ` :root{
                                --bg-hei0:#eee;
                                --bg-hei1:#f8f8f8;
                                --bg-hei2:#eee;
                                --bg-hei3:#444;
                                --bg-hei4:#f8f8f8;
                                --bg-hei5:#e8e8e8;
                                --bg-hei6:#ddd;
                                --bg-hei7:#000;
                                --bg-hei8:rgba(0, 0, 0, 0.2);
                                --bg-hei9:rgba(0, 0, 0, 0.5);
                            }`
      zttb[0].style.display = 'block'
      zttb[1].style.display = 'none'
      shumo.src = `./图片库/数模logo2.jpg`
    } else {
      style.innerHTML = ` :root{
                                --bg-hei0:#02152c;
                                --bg-hei1:#00263c;
                                --bg-hei2:#021825;
                                --bg-hei3:#444;
                                --bg-hei4:#222;
                                --bg-hei5:#111;
                                --bg-hei6:#000;
                                --bg-hei7:#fff;
                                --bg-hei8:rgba(225, 225, 225, 0.2);
                                --bg-hei9:rgba(225, 225, 225, 0.5);
                            }`
      zttb[1].style.display = 'block'
      zttb[0].style.display = 'none'
      shumo.src = `./图片库/数模logo1.jpg`
    }
  })
}()

//背景雪花与背景图
!function () {
  //获取进度条、画布、画笔
  const input = document.querySelectorAll('.head-left input')
  let huabu = document.querySelector('canvas')
  let huabi = huabu.getContext('2d')
  huabu.width = window.innerWidth
  huabu.height = window.innerHeight
  //储存雪花位置，大小
  let xy = []
  for (let i = 0; i < input[0].value * 6; i++) {
    xy.push({
      x: Math.random() * huabu.width,
      y: Math.random() * huabu.height,
      r: Math.random() * 10 + 1
    })
  }
  //运动函数，16毫秒刷新一次
  function yundong() {
    //xy方向上位置用随机数叠加
    for (let i = 0; i < input[0].value * 3; i++) {
      xy[i].x += Math.random() * (input[1].value / 33) + 0.7
      xy[i].y += Math.random() * (input[1].value / 33) + 0.7
      //溢出画布则：
      //诺画布横向x超过宽度，那么宽度为0，即：(末尾，y)=>(0，y)
      //诺画布横向y超过高度，那么宽度为0，即：(x,末尾)=>(x，0)
      if (xy[i].x > huabu.width) {
        xy[i].x = 0
      }
      if (xy[i].y > huabu.height) {
        xy[i].y = 0
      }
    }
  }

  setInterval(() => {
    //在画布上画圆
    huabi.clearRect(0, 0, huabu.width, huabu.height)
    huabi.fillStyle = '#fff'//填充颜色
    huabi.shadowColor = '#fff'//阴影样式
    huabi.shadowBlur = 10//模糊半径
    huabi.beginPath()//绘制

    for (let i = 0; i < input[0].value * 3; i++) {
      //移动画笔位置
      huabi.moveTo(xy[i].x, xy[i].y)
      //画一个圆
      huabi.arc(xy[i].x, xy[i].y, xy[i].r, 0, Math.PI * 2)
    }
    huabi.fill()//在画布上绘制圆（渲染）
    yundong()
  }, 15)

  //总背景图，10s切换一次
  const bg = document.querySelector('.bg')
  let i = 0
  setInterval(() => {
    i++
    if (i > 4) {
      i = 1
    }
    bg.style.background = `url(./图片库/bg${i}.jpg) no-repeat center`
    bg.style.backgroundSize = 'cover'
  }, 10000)

  //雪花数量、速度设置
  let ii = 0
  document.querySelector('.head-left i').addEventListener('click', () => {
    ii++
    if (ii % 2 === 1) {
      document.querySelector('.head-left .box').style.display = 'block'
    } else {
      document.querySelector('.head-left .box').style.display = 'none'
    }
  })

}()
