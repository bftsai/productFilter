(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function t(r){if(r.ep)return;r.ep=!0;const c=i(r);fetch(r.href,c)}})();const p=document.getElementById("productName"),u=document.getElementById("productPicUrl"),m=document.getElementById("productSelect"),d=document.getElementById("productPrice"),g=document.getElementById("productRemain"),f=document.getElementById("productStar"),y=document.getElementById("productDescribe"),b=document.querySelector(".submit"),v=document.querySelector(".renderCard"),o=document.querySelector(".areaSearch");let h=document.querySelector(".filterResultP");const l={data:[{title:"綠島自由行套裝行程",picUrl:"../assets/images/index/travel_1.png",location:"台北",currency:"TWD",price:1280,remain:8,star:8.6,content:"嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。"},{title:"清境高空觀景步道二日遊",picUrl:"../assets/images/index/travel_2.png",location:"台北",currency:"TWD",price:2580,remain:12,star:8.2,content:"清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。"},{title:"南庄度假村露營車二日遊",picUrl:"../assets/images/index/travel_3.png",location:"台中",currency:"TWD",price:2480,remain:2,star:9.2,content:"南庄雲水豪華露營車，快來擁有最愜意的露營體驗吧！ 一泊一食，輕鬆享受露營車樂趣。 獨立衛浴與私人戶外露臺。 入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。"},{title:"山林悠遊雙人套票",picUrl:"../assets/images/index/travel_4.png",location:"台中",currency:"TWD",price:880,remain:0,star:9.3,content:"山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。 （含雙龍瀑布入場券 x2）"},{title:"漁樂碼頭釣魚體驗套票",picUrl:"../assets/images/index/travel_5.png",location:"台中",currency:"TWD",price:1280,remain:5,star:8.2,content:"台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！"},{title:"熊森公園親子二日遊套票",picUrl:"../assets/images/index/travel_6.png",location:"高雄",currency:"TWD",price:2480,remain:3,star:8.6,content:"來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！"}],render(e){let a="";e.forEach(t=>{t.remain===0?a+=`<div class="col mb-lg-19">
                <div class="card rounded-1 position-relative h-100">
                  <span class="position-absolute translate-middle-y rounded-end-2 bg-primary text-white py-lg-4 px-lg-10 fs-lg-7">
                    ${t.location}
                  </span>
                  <div class="card-img-top" style="background: url(${t.picUrl}) center;height: 180px;background-size: cover;">
                  </div>
                  <div class="card-body position-relative p-lg-10">
                    <span class="position-absolute start-0 top-0 translate-middle-y bg-tertiary py-3 px-4 text-white">${t.star}</span>
                    <h2 class="card-title fs-lg-5 pb-lg-2 border-bottom border-2 border-green71 mb-0">${t.title}</h2>
                    <p class="card-text text-quaternary mt-lg-8">${t.content}</p>
                  </div>
                  <div class="card-footer bg-white border-0 pt-lg-1 px-lg-10 pb-lg-7 d-flex align-items-center justify-content-between fw-medium">
                    <p class="d-flex align-items-center">
                      <i class="fa-solid fa-circle-exclamation me-3"></i>
                      限時搶購
                    </p>
                    <p class="fs-lg-3 d-flex align-items-center">
                      <span class="fs-6 me-2">${t.currency}</span>
                      $${s(t.price)}
                    </p>
                  </div>
                </div>
              </div>`:a+=`<div class="col mb-lg-19">
                <div class="card rounded-1 position-relative h-100">
                  <span class="position-absolute translate-middle-y rounded-end-2 bg-primary text-white py-lg-4 px-lg-10 fs-lg-7">
                    ${t.location}
                  </span>
                  <div class="card-img-top" style="background: url(${t.picUrl}) center;height: 180px;background-size: cover;">
                  </div>
                  <div class="card-body position-relative p-lg-10">
                    <span class="position-absolute start-0 top-0 translate-middle-y bg-tertiary py-3 px-4 text-white">${t.star}</span>
                    <h2 class="card-title fs-lg-5 pb-lg-2 border-bottom border-2 border-green71 mb-0">${t.title}</h2>
                    <p class="card-text text-quaternary mt-lg-8">${t.content}</p>
                  </div>
                  <div class="card-footer bg-white border-0 pt-lg-1 px-lg-10 pb-lg-7 d-flex align-items-center justify-content-between fw-medium">
                    <p class="d-flex align-items-center">
                      <i class="fa-solid fa-circle-exclamation me-3"></i>
                      剩下最後 ${t.remain} 組
                    </p>
                    <p class="fs-lg-3 d-flex align-items-center">
                      <span class="fs-6 me-2">TWD</span>
                      $${s(t.price)}
                    </p>
                  </div>
                </div>
              </div>`});let i=e.length;h.textContent=`本次搜尋共 ${i} 筆資料`,v.innerHTML=a},addData(){let e={};e.title=p.value,e.picUrl=u.value,e.location=m.value,e.currency="TWD",e.price=d.value,e.remain=g.value,e.star=f.value,e.content=y.value,console.log(e),this.data.push(e),this.render(this.data)},filter(e){let a=this.data.filter(i=>e!=="全部地區"&&e!=="地區搜尋"?e===i.location:i);this.render(a)},init(e){this.render(e)}};l.init(l.data);function s(e){let a=new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g");return e=String(e).replace(a,","),`${e}`}b.addEventListener("click",e=>{(()=>{const a=document.querySelectorAll(".needs-validation");Array.from(a).forEach(i=>{i.addEventListener("submit",t=>{if(!i.checkValidity())t.preventDefault(),t.stopPropagation(),document.getElementById("productSelect").value==="請選擇景點地區"&&document.querySelector(".productSelect+.invalid-feedback").setAttribute("style","display: block;width: 100%;margin-top: 0.25rem;font-size: 0.875em;color: var(--bs-form-invalid-color);");else if(document.getElementById("productSelect").value==="請選擇景點地區")t.preventDefault(),t.stopPropagation(),document.querySelector(".productSelect+.invalid-feedback").setAttribute("style","display: block;width: 100%;margin-top: 0.25rem;font-size: 0.875em;color: var(--bs-form-invalid-color);");else{t.preventDefault(),t.stopPropagation(),document.querySelector(".productSelect+.invalid-feedback").setAttribute("style","display: none;width: 100%;margin-top: 0.25rem;font-size: 0.875em;color: var(--bs-form-invalid-color);");let r=s(d.value);l.addData(r)}i.classList.add("was-validated"),document.getElementById("productSelect").setAttribute("style","background: url(../assets/images/index/caret-upDown.png) no-repeat 98% #FAFAFA;background-size: 10%;")},!1)})})()});o.addEventListener("change",e=>{l.filter(o.value)});
