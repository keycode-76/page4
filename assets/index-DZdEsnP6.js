(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&c(t)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const de=document.createElement("div");de.className="fuzzy-overlay";let s={},o={};const ct=()=>{o={sleepy:0,active:0,hunger:0,sanity:10},s={request:"",action:"",window_Max:2e3,window_Min:1e3,computer_normal:7e3,computer_fast:3e3,computer_hyper:1e3,staff_work:2e3,play_time:0,win:!1}},lt="/page4/assets/hey-QOcsQIX8.wav",dt="/page4/assets/a%20burr%20bour-CgfDoBm-.wav",pt="/page4/assets/machine_1-xPoump-W.wav",ut="/page4/assets/machine_2-DVRlrrFj.wav",mt="/page4/assets/working-2FX-Kuug.wav",_t="/page4/assets/beep-CNWut400.wav",ft="/page4/assets/footStep-DuEQjxwd.wav",wt="/page4/assets/walkRight-jy2YQfhD.wav",vt="/page4/assets/squeeze-0RLJtapz.wav",yt="/page4/assets/tapeClick_2-DKrG1Yqp.wav",ht="/page4/assets/lock_1-VAm-sLO_.wav",gt="/page4/assets/hover_1-CPU6wXwn.wav",Lt="/page4/assets/horror_1-CHzID-B-.wav",bt="/page4/assets/snooze_2-CnN2-c4k.wav",kt="/page4/assets/heartbeat_2-D5c8AIz-.wav",Dt="/page4/assets/horror_2-DNL7FeZt.wav",Se=new Audio(lt),Mt=new Audio(dt),O=new Audio(pt),W=new Audio(ut),I=new Audio(mt),ce=new Audio(_t),qe=new Audio(ft),He=new Audio(wt),Fe=new Audio(vt),y=new Audio(yt),le=new Audio(ht),N=new Audio(gt),Ie=new Audio(Lt),$e=new Audio(bt),U=new Audio(kt),Be=new Audio(Dt);I.loop=!0;U.loop=!0;Se.pause();Mt.pause();O.pause();W.pause();I.pause();ce.pause();qe.pause();He.pause();Fe.pause();y.pause();le.pause();N.pause();Ie.pause();$e.pause();Be.pause();const f=(e,n,r,c,a,i)=>{const t=document.createElement("div");return t.id=e,t},w=f("viewPort"),Nt=f("view_lose_cover"),Tt=f("view_lose_up"),Ct=f("view_lose_down"),j=f("view_lose"),At=f("view_win"),Et=f("view_border"),X=f("screenBtnDiv"),pe=f("screenL"),ue=f("screenR"),me=e=>{w.innerHTML="",X.innerHTML="",w.append(Et,de),e.appendChild(w)},xt=()=>{X.append(pe,ue),w.appendChild(X)};let M=0,S=220,Pe=10,q=80,H=null;const be=()=>{w.removeChild(X),s.win===!1?(j.innerHTML="",j.append(Tt,Ct),w.appendChild(j),Ie.play()):s.win===!0&&w.appendChild(At)},St=()=>{w.innerHTML="",X.innerHTML="",w.appendChild(de);const e=document.querySelector("#gameArea");e.style.transform="translateX(0px)"};window.addEventListener("animationend",e=>{e.animationName==="lose_screenDown_anim"&&j.appendChild(Nt)});pe.addEventListener("mouseenter",()=>{window.innerWidth>960?(S=360,q=30):(S=220,q=50),clearInterval(H),H=setInterval(()=>{if(M<S){M+=Pe;const e=document.querySelector("#gameArea");e.style.transform=`translateX(${M}px)`}},q),O.currentTime=0,O.play(),I.play()});pe.addEventListener("mouseleave",()=>{clearInterval(H),I.pause(),W.currentTime=0,W.play()});ue.addEventListener("mouseenter",()=>{window.innerWidth>960?(S=360,q=30):(S=220,q=50),clearInterval(H),H=setInterval(()=>{M>-S&&(M-=Pe,gameArea.style.transform=`translateX(${M}px)`),M<-140&&s.request!=""&&Be.play()},q),O.currentTime=0,O.play(),I.play()});ue.addEventListener("mouseleave",()=>{clearInterval(H),I.pause(),W.currentTime=0,W.play()});const d=(e,n,r,c,a,i)=>{const t=document.createElement("div");return t.id=e,n&&(t.className=n),r&&(t.textContent=r),c&&t.addEventListener("click",c),t},Z=document.querySelector("#instruct_video"),qt=d("choice_menu"),Ht=d("setup_menu","menu_btn","setup"),ze=d("play_menu","menu_btn","play"),ke=d("menu_btns"),Ft=d("menu_img"),T=d("menuArea"),ee=d("instruct_div"),It=d("instruct_yes",0,"Play",()=>{Pt()}),_e=d("instruct_pass",0,"Pass"),oe=d("warning_logo");d("logo_1");const De=d("logoArea"),$t=d("tutorialArea"),Bt=e=>(ke.append(ze,Ht,qt),T.append(Ft,ke),ee.innerHTML="Would you like to watch instruction ?",e.appendChild(T));ze.addEventListener("click",()=>{T.innerHTML="",T.appendChild(ee),ee.append(It,_e),y.play()});const Pt=()=>{T.remove(ee),Z.play(),Z.style.display="block",y.play()};Z.addEventListener("ended",()=>{Z.style.display="none",_e.click()});let B=0;window.addEventListener("animationend",e=>{e.animationName==="show_anim"?B===0?e.target.className="disappear_menu":B===1&&(oe.className="disappear_menu"):e.animationName==="disappear_anim"&&(B===0?(e.target.className="",De.innerHTML="",De.appendChild(oe),oe.className="show_menu",B=1):B===1&&(T.innerHTML="",T.appendChild($t)))});const zt=(e,n,r,c,a,i)=>{const t=document.createElement("div");return t.id=e,t},Ot=zt("backGround"),$=(e,n,r,c,a,i)=>{const t=document.createElement("div");return t.id=e,t},R=$("face_text"),v=$("face_state"),te=$("window_blink"),Wt=$("face_rg"),Oe=$("window_outLine"),_=$("windowDiv"),Xt=e=>(v.appendChild(R),_.innerHTML="",_.className="window_start",te.style.opacity=0,v.classList.value="",R.classList.value="",_.append(Wt,v,te,Oe),We(),e.appendChild(_)),Rt=()=>{s.win===!1?(_.innerHTML="",_.appendChild(Oe),_.className="window_endLose",Fe.play()):s.win===!0&&(_.className="window_start",v.className="window_endWin",$e.play())};let Gt=8e3,Me=100;const We=()=>{te.style.opacity=0;const e=Math.floor(Math.random()*(Gt-Me+1))+Me;setTimeout(()=>{te.style.opacity=1,setTimeout(()=>{We()},150)},e)},Xe=()=>{if(!(o.sleepy>=5)&&s.request===""){const e=Math.floor(Math.random()*(s.window_Max-s.window_Min+1))+s.window_Min;setTimeout(()=>{jt()},e)}},Qt=()=>{const e=Math.floor(Math.random()*2);e===0?v.className="paper_1":e===1&&(v.className="paper_2")},Ne=["active","hunger","sanity"],jt=()=>{const e=Math.floor(Math.random()*Ne.length);return _.className="window_state",v.classList.value="",v.className=`window_${e}`,R.className=`face_text_${e}`,s.request=Ne[e],V(s.request),K(s.request,s.computer_fast),U.pause(),U.play(),R},Kt=()=>{_.className="window_start",v.classList.value="",R.classList.value="",U.pause(),Xe()},k=(e,n,r,c,a,i)=>{const t=document.createElement("div");return t.id=e,n&&(t.className=n),r&&(t.textContent=r),c&&t.addEventListener("click",c),t},l=k("staff_door"),Vt=k("doorFrame"),P=k("doorDiv"),Yt=k("feed_btn","request_btn",0,()=>{ae("right","hunger")}),Jt=k("clean_btn","request_btn",0,()=>{ae("right","sanity")}),Ut=k("play_btn","request_btn",0,()=>{ae("right","active")}),C=k("door_btns"),fe=k("request_btns","request_btn"),Zt=e=>(P.innerHTML="",P.append(l,C,Vt),P.className="door_start",l.style.opacity=1,we(),e.appendChild(P)),en=()=>{C.appendChild(fe)},tn=e=>{Qe(),C.innerHTML="",P.className="door_black",s.win===!1?e===1?l.className="bennet_1":e===2?l.className="bennet_2":e===3&&(l.className="bennet_3"):l.className="back_1"};let nn=8e3,Te=100,Re,Ge;const we=()=>{l.className="staff_idle";const e=Math.floor(Math.random()*(nn-Te+1))+Te;Ge=setTimeout(()=>{l.className="staff_blink",Re=setTimeout(()=>{we()},250)},e)},Qe=()=>{clearTimeout(Ge),clearTimeout(Re)};fe.addEventListener("click",()=>{C.innerHTML="",C.append(Yt,Jt,Ut),Se.play()});const ae=(e,n)=>{n&&(s.action=n),Qe(),e==="left"?(l.className="",setTimeout(()=>{l.classList.add(`${e}_1`),qe.play()},s.staff_work)):e==="right"&&(l.className=`${e}_1`,He.play()),C.innerHTML=""},sn=()=>{s.action==="hunger"?(o.hunger-=2,o.sanity+=1):s.action==="sanity"?(o.sanity+=2,o.active-=1):s.action==="active"&&(o.active-=2,o.hunger+=1),s.request===s.action&&(s.request="",o.sleepy+=1,Kt()),ve(),s.action=""};window.addEventListener("animationend",e=>{if(e.animationName==="staff_right_anim")ae("left");else if(e.animationName==="staff_left_anim"){if(o.sleepy>=5)return;C.appendChild(fe),we(),sn()}else e.animationName==="staff_back_anim"?l.style.opacity=0:e.animationName==="bennet_anim"&&(l.className="bennet_jump")});const A=(e,n,r,c,a,i)=>{const t=document.createElement("div");return t.id=e,n&&(t.className=n),r&&(t.textContent=r),t},je=A("activeDiv","screen_text"),Ke=A("hungerDiv","screen_text"),Ve=A("sanityDiv","screen_text"),Ye=A("sleepyDiv","screen_text"),Je=A("click_to_start",0,"click to start"),ne=A("wallPaper"),L=A("computerDiv"),an=e=>(L.innerHTML="",ne.className="wallpaper_start",L.append(ne,Je),clearInterval(Ue),e.appendChild(L));Je.addEventListener("click",()=>{L.innerHTML="",ne.className="",L.append(ne,je,Ke,Ve,Ye),K("active",s.computer_normal),K("hunger",s.computer_normal),K("sanity",s.computer_normal),ve(),xt(),Qt(),Xe(),en(),on()});let Ue;const on=()=>{Ue=setInterval(()=>{s.play_time+=15},1e3)};let Ze={};const K=(e,n)=>{Ze[e]=setInterval(()=>{o.sleepy>=5?G("win",0):(e==="active"?o.active>9?G("lose",1):o.active+=1:e==="hunger"?o.hunger>9?G("lose",2):o.hunger+=1:e==="sanity"&&(o.sanity<1?G("lose",3):o.sanity-=1),ve())},n)},V=e=>{clearInterval(Ze[e])},G=(e,n)=>{e==="lose"?(s.win=!1,L.textContent="lose"):e==="win"&&(s.win=!0,L.textContent="Win!!!"),tn(n),Rt(),rn(),L.innerHTML=""},rn=()=>{V("active"),V("hunger"),V("sanity")},ve=()=>{Ye.textContent="sleepy:"+o.sleepy,je.textContent="active: "+o.active,Ke.textContent="hunger: "+o.hunger,Ve.textContent="sanity: "+o.sanity,ce.currentTime=0,ce.play()},ye=(e,n,r,c,a,i)=>{const t=document.createElement("div");return t.id=e,n&&(t.className=n),r&&(t.textContent=r),t},et=ye("pass_btn","funcBtn","2"),tt=ye("danger_btn","funcBtn","1"),re=ye("buttonsDiv"),cn=e=>(re.innerHTML="",re.append(tt,et),e.appendChild(re)),nt=e=>{};et.addEventListener("click",()=>nt());tt.addEventListener("click",()=>nt());const p=(e,n,r,c,a,i)=>{const t=document.createElement("div");return t.id=e,n&&(t.className=n),r&&(t.textContent=r),c&&t.addEventListener("click",c),(a||i)&&a&&t.appendChild(a),t};let h=0;const ln=(e,n,r,c)=>{let a=null;const i=t=>{a||(a=t);const ie=Math.min((t-a)/c,1);Math.floor(ie*(r-n)+n)>0?e.innerHTML=Math.floor(ie*(r-n)+n):e.innerHTML=0,ie<1&&window.requestAnimationFrame(i)};window.requestAnimationFrame(i)},g=p("endSceneDiv"),Q=p("challengeText"),Ce=p("scoreNum"),F=p("end_lock_1",0,0,e=>{it(e,1)}),se=p("end_lock_2",0,0,e=>{it(e,2)}),Y=p("end_btns"),st=p("retry_endBtn_1","end_btn",0,()=>{hn()}),he=p("disk_endBtn_1","end_btn",0,0,F),ge=p("next_endBtn_1","end_btn",0,0,se),J=p("diskDiv_1"),at=p("disk_Xbtn",0,"X"),b=p("end_btnText",0,"encrypt files"),E=p("backtomenu_btn",0,"back to menu",()=>{yn()}),dn=e=>(g.innerHTML="",Y.innerHTML="",F.style.opacity=1,se.style.opacity=1,F.className="end_lock",se.className="end_lock",h=0,ot(),e.appendChild(g));st.addEventListener("mouseover",()=>{b.textContent="retry",N.currentTime=0,N.play()});he.addEventListener("mouseover",()=>{b.textContent="disk of bennet",N.currentTime=0,N.play()});he.addEventListener("click",()=>{F.className!=="end_lock"&&(J.innerHTML="",J.appendChild(at),g.appendChild(J),y.play())});at.addEventListener("click",()=>{g.removeChild(J),y.play()});ge.addEventListener("mouseover",()=>{b.textContent="one time ticket to challenge 2",N.currentTime=0,N.play()});ge.addEventListener("click",()=>{});const it=(e,n)=>{e.target.parentElement.classList.add("end_lock_click"),n===1?b.textContent="unlock for 1000 score":n===2&&(b.textContent="unlock for 1500 score"),setTimeout(()=>{e.target.parentElement.classList.remove("end_lock_click"),b.textContent="encrypt files"},1e3),y.pause(),le.currentTime=0,le.play()},ot=()=>{if(Y.append(st,he,ge),s.win===!0)if(Q.textContent="score",h===0)g.append(Q);else if(h===1){g.append(Ce,Y,b,E),E.style.opacity=0;let e=2e3-s.play_time;o.active<5&&(e+=100),o.hunger<5&&(e+=100),o.sanity>5&&(e+=100),ln(Ce,0,e,2e3),e>=1e3&&e<1500?F.className="end_unlock":e>=1500&&(F.className="end_unlock",se.className="end_unlock")}else h===2&&(E.style.opacity=1);else if(s.win===!1)Q.textContent="lost connect",h===0?g.append(Q):h===1?(g.append(Y,b,E),E.style.opacity=0):h===2&&(E.style.opacity=1);else return;h+=1};window.addEventListener("animationend",e=>{e.animationName==="showEndScene_anim"?ot():e.animationName==="end_unlock_anim"&&(e.target.style.opacity=0)});const u=(e,n,r,c,a,i)=>{const t=document.createElement("div");return t.id=e,t},x=u("gameArea"),pn=u("gameFilter"),Ae=u("doorArea"),Ee=u("computerArea"),un=u("computerShadow"),mn=u("tableArea"),_n=u("buttonsArea");u("rulesArea");u("lightArea");u("fileArea");const xe=u("windowArea"),fn=u("windowShadow"),Le=e=>{x.innerHTML="",ct(),an(Ee),cn(_n),Xt(xe),Zt(Ae),x.append(Ae,un,Ee,fn,xe,mn),x.append(Ot,pn),e.append(x),me(e)};window.addEventListener("animationend",e=>{e.animationName==="bennet_anim"||e.animationName==="staff_back_anim"?be():e.animationName==="end_screen_anim"&&(St(),x.innerHTML="",dn(x))});const D=document.createElement("div"),z=document.createElement("div"),rt=document.createElement("div"),wn=e=>(D.innerHTML="",D.className="",z.textContent="LOADING",D.id="transDiv",z.id="trans_text",rt.id="trans_snow",z.style.display="block",D.append(z),vn(),e.appendChild(D)),vn=()=>{setTimeout(()=>{z.style.display="none",D.append(rt),D.className="trans_fade"},5e3)},m=document.querySelector("#app");me(m);Le(m);_e.addEventListener("click",()=>{m.removeChild(menuArea),Le(m),wn(m),y.play()});const yn=()=>{m.removeChild(gameArea),me(m),Bt(m),y.play()},hn=()=>{m.removeChild(gameArea),Le(m),y.play()};window.addEventListener("animationend",()=>{event.animationName==="showtrans_anim"&&m.removeChild(transDiv)});
