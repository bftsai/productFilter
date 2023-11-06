//data collect
const productName=document.getElementById('productName');
const productPicUrl=document.getElementById('productPicUrl');
const productSelect=document.getElementById('productSelect');
const productPrice=document.getElementById('productPrice');
const productRemain=document.getElementById('productRemain');
const productStar=document.getElementById('productStar');
const productDescribe=document.getElementById('productDescribe');
const submit=document.querySelector('.submit');
//render
const renderCard=document.querySelector('.renderCard');
const areaSearch=document.querySelector('.areaSearch');
let filterResultP=document.querySelector('.filterResultP');
const component={
    data:[
        {
            title: '綠島自由行套裝行程',
            picUrl: '../assets/images/index/travel_1.png',
            location: '台北',
            currency: 'TWD',
            price: 1280,
            remain: 8,
            star: 8.6,
            content: '嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。'
        },
        {
            title: '清境高空觀景步道二日遊',
            picUrl: '../assets/images/index/travel_2.png',
            location: '台北',
            currency: 'TWD',
            price: 2580,
            remain: 12,
            star: 8.2,
            content: '清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。'
        },
        {
            title: '南庄度假村露營車二日遊',
            picUrl: '../assets/images/index/travel_3.png',
            location: '台中',
            currency: 'TWD',
            price: 2480,
            remain: 2,
            star: 9.2,
            content: '南庄雲水豪華露營車，快來擁有最愜意的露營體驗吧！ 一泊一食，輕鬆享受露營車樂趣。 獨立衛浴與私人戶外露臺。 入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。'
        },
        {
            title: '山林悠遊雙人套票',
            picUrl: '../assets/images/index/travel_4.png',
            location: '台中',
            currency: 'TWD',
            price: 880,
            remain: 0,
            star: 9.3,
            content: '山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。 （含雙龍瀑布入場券 x2）'
        },
        {
            title: '漁樂碼頭釣魚體驗套票',
            picUrl: '../assets/images/index/travel_5.png',
            location: '台中',
            currency: 'TWD',
            price: 1280,
            remain: 5,
            star: 8.2,
            content: '台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！'
        },
        {
            title: '熊森公園親子二日遊套票',
            picUrl: '../assets/images/index/travel_6.png',
            location: '高雄',
            currency: 'TWD',
            price: 2480,
            remain: 3,
            star: 8.6,
            content: '來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！'
        }
    ],
    render(arr){
        let str='';
        arr.forEach(item=>{
            if(item.remain===0){
                str+=`<div class="col mb-lg-19">
                <div class="card rounded-1 position-relative h-100">
                  <span class="position-absolute translate-middle-y rounded-end-2 bg-primary text-white py-lg-4 px-lg-10 fs-lg-7">
                    ${item.location}
                  </span>
                  <div class="card-img-top" style="background: url(${item.picUrl}) center;height: 180px;background-size: cover;">
                  </div>
                  <div class="card-body position-relative p-lg-10">
                    <span class="position-absolute start-0 top-0 translate-middle-y bg-tertiary py-3 px-4 text-white">${item.star}</span>
                    <h2 class="card-title fs-lg-5 pb-lg-2 border-bottom border-2 border-green71 mb-0">${item.title}</h2>
                    <p class="card-text text-quaternary mt-lg-8">${item.content}</p>
                  </div>
                  <div class="card-footer bg-white border-0 pt-lg-1 px-lg-10 pb-lg-7 d-flex align-items-center justify-content-between fw-medium">
                    <p class="d-flex align-items-center">
                      <i class="fa-solid fa-circle-exclamation me-3"></i>
                      限時搶購
                    </p>
                    <p class="fs-lg-3 d-flex align-items-center">
                      <span class="fs-6 me-2">${item.currency}</span>
                      $${transformNumber(item.price)}
                    </p>
                  </div>
                </div>
              </div>`;
            }else{
                str+=`<div class="col mb-lg-19">
                <div class="card rounded-1 position-relative h-100">
                  <span class="position-absolute translate-middle-y rounded-end-2 bg-primary text-white py-lg-4 px-lg-10 fs-lg-7">
                    ${item.location}
                  </span>
                  <div class="card-img-top" style="background: url(${item.picUrl}) center;height: 180px;background-size: cover;">
                  </div>
                  <div class="card-body position-relative p-lg-10">
                    <span class="position-absolute start-0 top-0 translate-middle-y bg-tertiary py-3 px-4 text-white">${item.star}</span>
                    <h2 class="card-title fs-lg-5 pb-lg-2 border-bottom border-2 border-green71 mb-0">${item.title}</h2>
                    <p class="card-text text-quaternary mt-lg-8">${item.content}</p>
                  </div>
                  <div class="card-footer bg-white border-0 pt-lg-1 px-lg-10 pb-lg-7 d-flex align-items-center justify-content-between fw-medium">
                    <p class="d-flex align-items-center">
                      <i class="fa-solid fa-circle-exclamation me-3"></i>
                      剩下最後 ${item.remain} 組
                    </p>
                    <p class="fs-lg-3 d-flex align-items-center">
                      <span class="fs-6 me-2">TWD</span>
                      $${transformNumber(item.price)}
                    </p>
                  </div>
                </div>
              </div>`;
            }
        });
        let num=arr.length;
        filterResultP.textContent=`本次搜尋共 ${num} 筆資料`
        renderCard.innerHTML=str;
    },
    addData(){
        let obj={};
        obj.title=productName.value;
        obj.picUrl=productPicUrl.value;
        obj.location=productSelect.value;
        obj.currency= 'TWD';
        obj.price=productPrice.value;
        obj.remain=productRemain.value;
        obj.star=productStar.value;
        obj.content=productDescribe.value;
        console.log(obj);
        this.data.push(obj);
        this.render(this.data);
    },
    filter(location){
        let filterArr=this.data.filter(item=>{
            if(location!=='全部地區'&&location!=='地區搜尋'){
                return location===item.location;
            }else{
                return item
            }
        });
        this.render(filterArr);
    },
    init(arr){
        this.render(arr);
    }
};

component.init(component.data);

function transformNumber(num){
    let comma=/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;
    num=String(num).replace(comma, ',');
    return `${num}`;
};
//bootstrap
(() => {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')
  function checkStar(){
    if(Number(productStar.value)===0){
      document.querySelector('.productStar+.invalid-feedback').textContent=`請填寫套票星級`;
      productStar.classList.add('is-invalid');
      productStar.setAttribute("style","border-color: var(--bs-form-invalid-border-color);padding-right: calc(1.5em + 0.75rem);background-image: url('../assets/images/index/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
    }else if(!(Number(productStar.value)>=1&&Number(productStar.value)<=10)){
      document.querySelector('.productStar+.invalid-feedback').textContent=`請輸入 1~10 分`;
      productStar.classList.add('is-invalid');
      productStar.setAttribute("style","border-color: var(--bs-form-invalid-border-color);padding-right: calc(1.5em + 0.75rem);background-image: url('../assets/images/index/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
    }

    productStar.addEventListener('keyup',e=>{
      if(Number(productStar.value)!==0){
        if(!(Number(productStar.value)>=1&&Number(productStar.value)<=10)){
          document.querySelector('.productStar+.invalid-feedback').textContent=`請輸入 1~10 分`;
          document.querySelector('.productStar+.invalid-feedback').setAttribute("style","display: block;width: 100%;margin-top: 0.25rem;font-size: 0.875em;color: var(--bs-form-invalid-color);");
          productStar.classList.add('is-invalid');
          productStar.classList.remove('is-valid');
          productStar.setAttribute("style","border-color: var(--bs-form-invalid-border-color);padding-right: calc(1.5em + 0.75rem);background-image: url('../assets/images/index/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
        }else{
          document.querySelector('.productStar+.invalid-feedback').setAttribute("style","display: none;width: 100%;margin-top: 0.25rem;font-size: 0.875em;color: var(--bs-form-invalid-color);");
          productStar.classList.remove('is-invalid');
          productStar.classList.add('is-valid');
          productStar.setAttribute("style","border-color: var(--bs-form-valid-border-color);padding-right: calc(1.5em + 0.75rem);background-image: url('../assets/images/index/valid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
        }
      }else{
          document.querySelector('.productStar+.invalid-feedback').textContent=`請填寫套票星級`;
          document.querySelector('.productStar+.invalid-feedback').setAttribute("style","display: block;width: 100%;margin-top: 0.25rem;font-size: 0.875em;color: var(--bs-form-invalid-color);");
          productStar.classList.add('is-invalid');
          productStar.classList.remove('is-valid');
          productStar.setAttribute("style","border-color: var(--bs-form-invalid-border-color);padding-right: calc(1.5em + 0.75rem);background-image: url('../assets/images/index/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
      }
    })
  }
  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          if(document.getElementById('productSelect').value==='請選擇景點地區'){
              document.querySelector('.productSelect+.invalid-feedback').setAttribute("style","display: block;width: 100%;margin-top: 0.25rem;font-size: 0.875em;color: var(--bs-form-invalid-color);");
          }
          
          checkStar();
          
      }else if(document.getElementById('productSelect').value==='請選擇景點地區'){
          event.preventDefault();
          event.stopPropagation();
          document.querySelector('.productSelect+.invalid-feedback').setAttribute("style","display: block;width: 100%;margin-top: 0.25rem;font-size: 0.875em;color: var(--bs-form-invalid-color);");
          
          checkStar();

      }else if(!(Number(productStar.value)>=1&&Number(productStar.value)<10)){
        event.preventDefault();
        event.stopPropagation();
        
        checkStar();

      }else{
          event.preventDefault();
          event.stopPropagation();
          document.querySelector('.productSelect+.invalid-feedback').setAttribute("style","display: none;width: 100%;margin-top: 0.25rem;font-size: 0.875em;color: var(--bs-form-invalid-color);");

          component.addData();
      }

      form.classList.add('was-validated');

      document.getElementById('productSelect').setAttribute("style","background: url(../assets/images/index/caret-upDown.png) no-repeat 98% #FAFAFA;background-size: 10%;");
  }, false);
  });
})();

areaSearch.addEventListener('change',e=>{
    component.filter(areaSearch.value);
});