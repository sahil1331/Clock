const clock=document.querySelector('.clock');


const tick =()=>{
    const now =new Date();
    // console.log(now.getSeconds());
    const h =now.getHours();
    const m =now.getMinutes();
    const s =now.getSeconds();
    // console.log(h,m,s);

    const html =`
    
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>

    `;

    clock.innerHTML=html;
}


setInterval(tick,1000);