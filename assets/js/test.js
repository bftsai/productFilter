//API url
const apiUrl='https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json';
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
    data:[],
    init(){
        this.getData();
    },
    async getData(){
        try {
            this.data=(await axios.get(`${apiUrl}`)).data.data;
            this.data.forEach(item=>{
                if(item.area==='台北'){
                    item.location_ID=1;
                }else if(item.area==='台中'){
                    item.location_ID=4;
                }else if(item.area==='高雄'){
                    item.location_ID=6;
                }
            });
            console.log(this.data);
            this.sortData();
        } catch (err) {
            console.log(err);
        }
    },
    render(arr){
        let str='';
        arr.forEach(item=>{
            str+=`<div class="col mb-19">
                <div class="card rounded-1 position-relative h-100">
                  <span class="position-absolute translate-middle-y rounded-end-2 bg-primary text-white py-2 py-lg-4 px-5 px-lg-10 fs-7">
                    ${item.area}
                  </span>
                  <div class="card-img-top" style="background: url(${item.imgUrl}) center;height: 180px;background-size: cover;">
                  </div>
                  <div class="card-body position-relative p-lg-10">
                    <span class="position-absolute start-0 top-0 translate-middle-y bg-tertiary py-3 px-4 text-white">${item.rate}</span>
                    <h2 class="card-title fs-6 fs-lg-5 pt-2 pt-lg-0 pb-lg-2 border-bottom border-2 border-green71 mb-0">${item.name}</h2>
                    <p class="card-text text-quaternary mt-4 mt-lg-8">${item.description}</p>
                  </div>
                  <div class="card-footer bg-white border-0 pt-lg-1 px-lg-10 pb-8 pb-lg-7 d-flex align-items-center justify-content-between fw-medium">
                    <p class="d-flex align-items-center">
                      <i class="fa-solid fa-circle-exclamation me-3"></i>
                      ${item.group===0?`限時搶購`:`剩下最後 ${item.group} 組`}
                    </p>
                    <p class="fs-5 fs-lg-3 d-flex align-items-center">
                      <span class="fs-6 me-2">TWD</span>
                      $${item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
            </div>`;
        });
        let num=arr.length;
        filterResultP.textContent=`本次搜尋共 ${num} 筆資料`;
        renderCard.innerHTML=str;
    },
    addData(){
        let obj={};
        obj.id=this.data.length-1;
        obj.location_ID=productSelect.selectedIndex;
        obj.name=productName.value;
        obj.imgUrl=productPicUrl.value;
        obj.area=productSelect.value;
        obj.price=Number(productPrice.value);
        obj.group=Number(productRemain.value);
        obj.rate=Number(productStar.value);
        obj.description=productDescribe.value;
        
        this.data.push(obj);
        this.sortData();
    },
    sortData(){
        this.data.sort((a,b)=>{
          if(a.location_ID>b.location_ID){
            return 1;
          }else if(a.location_ID<b.location_ID){
            return -1;
          }
          else{
            return 0;
          }
        });
        
        this.render(this.data);
    },
    filter(location){
        let filterArr=this.data.filter(item=>{
            if(location!=='全部地區'){
                return location===item.area;
            }else{
                return item;
            }
        });
        if(filterArr.length===0){
            renderCard.innerHTML=`<p class="fw-bold fs-3">查無資料</p>`;
            filterResultP.textContent=`本次搜尋共 0 筆資料`
        }else{
            this.render(filterArr);
        }
    }
};
component.init();

/*
  regular expression 待驗證(ios can't work)
*/
function transformNumber(num){
    let comma=new RegExp("\B(?<!\.\d*)(?=(\d{3})+(?!\d))","g");
    num=String(num).replace(comma, ',');
    return num;
};

//bootstrap
(() => {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')
  function checkStar(){
    if(Number(productStar.value)===0){
      document.querySelector('.productStar+.invalid-feedback').textContent=`請填寫套票星級`;
      document.querySelector('.productStar+.invalid-feedback').setAttribute("style","display: block;width: 100%;margin-top: 0.25rem;font-size: 0.875em;color: var(--bs-form-invalid-color);");
      productStar.classList.add('is-invalid');
      productStar.classList.remove('is-valid');
      productStar.setAttribute("style","border-color: var(--bs-form-invalid-border-color);padding-right: calc(1.5em + 0.75rem);background-image: url('https://i.imgur.com/sjBnbp4.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
    }else if(!(Number(productStar.value)>=1&&Number(productStar.value)<=10)){
      document.querySelector('.productStar+.invalid-feedback').textContent=`請輸入 1~10 分`;
      productStar.classList.add('is-invalid');
      productStar.setAttribute("style","border-color: var(--bs-form-invalid-border-color);padding-right: calc(1.5em + 0.75rem);background-image: url('https://i.imgur.com/sjBnbp4.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
    }

    productStar.addEventListener('keyup',e=>{
      if(Number(productStar.value)!==0){
        if(!(Number(productStar.value)>=1&&Number(productStar.value)<=10)){
          document.querySelector('.productStar+.invalid-feedback').textContent=`請輸入 1~10 分`;
          document.querySelector('.productStar+.invalid-feedback').setAttribute("style","display: block;width: 100%;margin-top: 0.25rem;font-size: 0.875em;color: var(--bs-form-invalid-color);");
          productStar.classList.add('is-invalid');
          productStar.classList.remove('is-valid');
          productStar.setAttribute("style","border-color: var(--bs-form-invalid-border-color);padding-right: calc(1.5em + 0.75rem);background-image: url('https://i.imgur.com/sjBnbp4.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
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
          productStar.setAttribute("style","border-color: var(--bs-form-invalid-border-color);padding-right: calc(1.5em + 0.75rem);background-image: url('https://i.imgur.com/sjBnbp4.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
      }
    })
  }
  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    event.stopPropagation();
      if (!form.checkValidity()) {
          form.classList.add('was-validated');
          
          checkStar();
          
      }else if(!(Number(productStar.value)>=1&&Number(productStar.value)<10)){
          form.classList.add('was-validated');  
        
          checkStar();

      }else{
          form.classList.remove('was-validated');
          
          component.addData();
          
          productName.value='';
          productPicUrl.value='';
          productSelect.value=productSelect[0].value;
          productPrice.value='';
          productRemain.value='';
          productStar.value='';
          productDescribe.value='';
          areaSearch.value=areaSearch[0].value;
      }

      document.getElementById('productSelect').setAttribute("style","appearance:none ;-moz-appearance:none ;-webkit-appearance:none ;background: url(../assets/images/index/caret-upDown.png) no-repeat 98% #FAFAFA;background-size: 5%;");
  }, false);
  });
})();

areaSearch.addEventListener('change',e=>{
    component.filter(areaSearch.value);
});