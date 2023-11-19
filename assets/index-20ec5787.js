(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=c(o);fetch(o.href,i)}})();const S="https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json",b=document.getElementById("productName"),f=document.getElementById("productPicUrl"),d=document.getElementById("productSelect"),v=document.getElementById("productPrice"),h=document.getElementById("productRemain"),t=document.getElementById("productStar"),y=document.getElementById("productDescribe");document.querySelector(".submit");const p=document.querySelector(".renderCard"),u=document.querySelector(".areaSearch");let g=document.querySelector(".filterResultP");const m={data:[],init(){this.getData()},async getData(){try{this.data=(await axios.get(`${S}`)).data.data,this.data.forEach(e=>{e.area==="台北"?e.location_ID=1:e.area==="台中"?e.location_ID=4:e.area==="高雄"&&(e.location_ID=6)}),console.log(this.data),this.sortData()}catch(e){console.log(e)}},render(e){let a={};this.data.forEach(r=>{a[r.area]===void 0?a[r.area]=1:a[r.area]++});let c=[];const n=Object.keys(a);n.forEach((r,l)=>{c.push([r,Object.values(a)[l]])});let o={},i=["#5151D3","#26C0C7","#E68618"];n.forEach((r,l)=>{o[r]=i[l]}),c3.generate({bindto:"#chart",data:{columns:c,type:"donut",colors:o,onclick:function(r,l){console.log("onclick",r,l)},onmouseover:function(r,l){console.log("onmouseover",r,l)},onmouseout:function(r,l){console.log("onmouseout",r,l)}},donut:{title:"套票地區比重",width:15,label:{show:!1,expand:!1}},axis:{x:{label:{text:"台北",position:"outer-left"}}}});let s="";e.forEach(r=>{s+=`<div class="col mb-19">
                <div class="card rounded-1 position-relative h-100">
                  <span class="position-absolute translate-middle-y rounded-end-2 bg-primary text-white py-2 py-lg-4 px-5 px-lg-10 fs-7">
                    ${r.area}
                  </span>
                  <div class="card-img-top" style="background: url(${r.imgUrl}) center;height: 180px;background-size: cover;">
                  </div>
                  <div class="card-body position-relative p-lg-10">
                    <span class="position-absolute start-0 top-0 translate-middle-y bg-tertiary py-3 px-4 text-white">${r.rate}</span>
                    <h2 class="card-title fs-6 fs-lg-5 pt-2 pt-lg-0 pb-lg-2 border-bottom border-2 border-green71 mb-0">${r.name}</h2>
                    <p class="card-text text-quaternary mt-4 mt-lg-8">${r.description}</p>
                  </div>
                  <div class="card-footer bg-white border-0 pt-lg-1 px-lg-10 pb-8 pb-lg-7 d-flex align-items-center justify-content-between fw-medium">
                    <p class="d-flex align-items-center">
                      <i class="fa-solid fa-circle-exclamation me-3"></i>
                      ${r.group===0?"限時搶購":`剩下最後 ${r.group} 組`}
                    </p>
                    <p class="fs-5 fs-lg-3 d-flex align-items-center">
                      <span class="fs-6 me-2">TWD</span>
                      $${r.price.toLocaleString()}
                    </p>
                  </div>
                </div>
            </div>`});let k=e.length;g.textContent=`本次搜尋共 ${k} 筆資料`,p.innerHTML=s},addData(){let e={};e.id=this.data.length-1,e.location_ID=d.selectedIndex,e.name=b.value,e.imgUrl=f.value,e.area=d.value,e.price=Number(v.value),e.group=Number(h.value),e.rate=Number(t.value),e.description=y.value,this.data.push(e),this.sortData()},sortData(){this.data.sort((e,a)=>e.location_ID>a.location_ID?1:e.location_ID<a.location_ID?-1:0),this.render(this.data)},filter(e){let a=this.data.filter(c=>e!=="全部地區"?e===c.area:c);a.length===0?(p.innerHTML='<p class="fw-bold fs-3">查無資料</p>',g.textContent="本次搜尋共 0 筆資料"):this.render(a)}};m.init();(()=>{const e=document.querySelectorAll(".needs-validation");function a(){Number(t.value)===0?(document.querySelector(".productStar+.invalid-feedback").textContent="請填寫套票星級",document.querySelector(".productStar+.invalid-feedback").setAttribute("style","display: block;width: 100%;margin-top: 0.25rem;font-size: 0.875em;color: var(--bs-form-invalid-color);"),t.classList.add("is-invalid"),t.classList.remove("is-valid"),t.setAttribute("style","border-color: var(--bs-form-invalid-border-color);padding-right: calc(1.5em + 0.75rem);background-image: url('https://i.imgur.com/sjBnbp4.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);")):Number(t.value)>=1&&Number(t.value)<=10||(document.querySelector(".productStar+.invalid-feedback").textContent="請輸入 1~10 分",t.classList.add("is-invalid"),t.setAttribute("style","border-color: var(--bs-form-invalid-border-color);padding-right: calc(1.5em + 0.75rem);background-image: url('https://i.imgur.com/sjBnbp4.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);")),t.addEventListener("keyup",c=>{Number(t.value)!==0?Number(t.value)>=1&&Number(t.value)<=10?(document.querySelector(".productStar+.invalid-feedback").setAttribute("style","display: none;width: 100%;margin-top: 0.25rem;font-size: 0.875em;color: var(--bs-form-invalid-color);"),t.classList.remove("is-invalid"),t.classList.add("is-valid"),t.setAttribute("style","border-color: var(--bs-form-valid-border-color);padding-right: calc(1.5em + 0.75rem);background-image: url('../assets/images/index/valid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);")):(document.querySelector(".productStar+.invalid-feedback").textContent="請輸入 1~10 分",document.querySelector(".productStar+.invalid-feedback").setAttribute("style","display: block;width: 100%;margin-top: 0.25rem;font-size: 0.875em;color: var(--bs-form-invalid-color);"),t.classList.add("is-invalid"),t.classList.remove("is-valid"),t.setAttribute("style","border-color: var(--bs-form-invalid-border-color);padding-right: calc(1.5em + 0.75rem);background-image: url('https://i.imgur.com/sjBnbp4.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);")):(document.querySelector(".productStar+.invalid-feedback").textContent="請填寫套票星級",document.querySelector(".productStar+.invalid-feedback").setAttribute("style","display: block;width: 100%;margin-top: 0.25rem;font-size: 0.875em;color: var(--bs-form-invalid-color);"),t.classList.add("is-invalid"),t.classList.remove("is-valid"),t.setAttribute("style","border-color: var(--bs-form-invalid-border-color);padding-right: calc(1.5em + 0.75rem);background-image: url('https://i.imgur.com/sjBnbp4.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"))})}Array.from(e).forEach(c=>{c.addEventListener("submit",n=>{n.preventDefault(),n.stopPropagation(),c.checkValidity()&&Number(t.value)>=1&&Number(t.value)<=10?(c.classList.remove("was-validated"),m.addData(),b.value="",f.value="",d.value=d[0].value,v.value="",h.value="",t.value="",y.value="",u.value=u[0].value):(c.classList.add("was-validated"),a()),document.getElementById("productSelect").setAttribute("style","appearance:none ;-moz-appearance:none ;-webkit-appearance:none ;background: url(../assets/images/index/caret-upDown.png) no-repeat 98% #FAFAFA;background-size: 5%;")},!1)})})();u.addEventListener("change",e=>{m.filter(u.value)});