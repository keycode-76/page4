(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const n of d.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function c(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(s){if(s.ep)return;s.ep=!0;const d=c(s);fetch(s.href,d)}})();const Pe=document.createElement("div");Pe.className="fuzzy-overlay";let i={},l={};const dt=()=>{clearInterval(qe),l={sleepy:0,active:0,hunger:0,sanity:10},i={request:"",action:"",window_Max:3e3,window_Min:1e3,computer_normal:7e3,computer_fast:3500,computer_hyper:1e3,staff_work:3e3,play_time:0,complete_request:0,win:!1}};let qe;const rn=()=>{qe=setInterval(()=>{i.play_time+=1},1500)},o={anim:0,language:"English",volume:3,bonus_time:5e3,bonus_value:500,bonus_value_big:2e3,score_1:3400,score_2:4900},dn="/page4/assets/hey-QOcsQIX8.wav",un="/page4/assets/a%20burr%20bour-CgfDoBm-.wav",pn="/page4/assets/machine_1-xPoump-W.wav",_n="/page4/assets/machine_2-DVRlrrFj.wav",mn="/page4/assets/working-2FX-Kuug.wav",vn="/page4/assets/beep-CNWut400.wav",fn="/page4/assets/footStep-D5LEd8rH.wav",hn="/page4/assets/walkRight-BiXRMwZ1.wav",gn="/page4/assets/squeeze-0RLJtapz.wav",wn="/page4/assets/tapeClick_2-DKrG1Yqp.wav",yn="/page4/assets/lock_1-VAm-sLO_.wav",kn="/page4/assets/hover_1-CPU6wXwn.wav",bn="/page4/assets/horror_1-CHzID-B-.wav",Cn="/page4/assets/snooze_2-CnN2-c4k.wav",Ln="/page4/assets/heartbeat_2-D5c8AIz-.wav",Nn="/page4/assets/horror_2-DNL7FeZt.wav",Tn="/page4/assets/tvSnow-DrChzltf.wav",Sn="/page4/assets/pageFlip-DZIzoMZo.wav",En="/page4/assets/unlock-BSHT499Y.wav",Be=new Audio(dn),ut=new Audio(un),W=new Audio(pn),de=new Audio(_n),R=new Audio(mn),ue=new Audio(vn),He=new Audio(fn),$e=new Audio(hn),Fe=new Audio(gn),h=new Audio(wn),pe=new Audio(yn),_e=new Audio(kn),Ie=new Audio(bn),We=new Audio(Cn),z=new Audio(Ln),ze=new Audio(Nn),Xe=new Audio(Tn),X=new Audio(Sn),me=new Audio(En);R.loop=!0;z.loop=!0;Be.pause();ut.pause();W.pause();de.pause();ue.pause();He.pause();$e.pause();Fe.pause();h.pause();pe.pause();_e.pause();Ie.pause();We.pause();ze.pause();Xe.pause();X.pause();me.pause();const Mn=[document.querySelector("#instruct_video_0"),document.querySelector("#instruct_video_1"),document.querySelector("#instruct_video_2"),document.querySelector("#instruct_video_3"),document.querySelector("#disk2_video")],xn=[...Mn,Be,ut,W,R,de,ue,He,$e,Fe,h,pe,_e,Ie,We,z,ze,Xe,X,me],Dn=()=>{xn.forEach(e=>{e.volume=o.volume/5})},k=(e,t,c,r,s,d)=>{const n=document.createElement("div");return n.id=e,n},L=k("viewPort"),An=k("view_lose_cover"),Pn=k("view_lose_up"),qn=k("view_lose_down"),ae=k("view_lose"),Bn=k("view_win"),Hn=k("view_border"),Q=k("screenBtnDiv"),we=k("screenL"),ye=k("screenR");let b=0,Z=220,pt=10,J=80,B=null,De=!1;const ke=e=>{L.innerHTML="",Q.innerHTML="",b=0,B=null,L.append(Hn,Pe),e.appendChild(L)},$n=()=>{Q.append(we,ye),L.appendChild(Q)},nt=()=>{R.pause(),clearInterval(B),L.removeChild(Q),i.win===!1?(ae.innerHTML="",ae.append(Pn,qn),L.appendChild(ae),Ie.play()):i.win===!0&&L.appendChild(Bn)},Fn=()=>{L.innerHTML="",Q.innerHTML="",L.appendChild(Pe);const e=document.querySelector("#gameArea");e.style.transform="translateX(0px)"};window.addEventListener("animationend",e=>{e.animationName==="lose_screenDown_anim"&&ae.appendChild(An)});const _t=()=>{window.innerWidth>960?(Z=360,J=30):window.innerWidth>450&&window.innerWidth<960?(Z=220,J=50):(Z=100,J=100)},mt=()=>{_t(),clearInterval(B),B=setInterval(()=>{if(b<Z){b+=pt;const e=document.querySelector("#gameArea");e.style.transform=`translateX(${b}px)`,De=!1}},J),W.currentTime=0,W.play(),R.play()},vt=()=>{_t(),clearInterval(B),B=setInterval(()=>{if(b>-Z){b-=pt;const e=document.querySelector("#gameArea");e.style.transform=`translateX(${b}px)`}b<-140&&i.request!=""&&De===!1&&(ze.play(),De=!0),console.log(b)},J),W.currentTime=0,W.play(),R.play()},be=()=>{clearInterval(B),R.pause(),de.currentTime=0,de.play()};we.addEventListener("click",()=>{let e;clearInterval(e),mt(),e=setTimeout(()=>{be()},800)});ye.addEventListener("click",()=>{let e;clearInterval(e),vt(),e=setTimeout(()=>{be()},800)});we.addEventListener("mouseenter",()=>{mt()});ye.addEventListener("mouseenter",()=>{vt()});we.addEventListener("mouseleave",()=>{be()});ye.addEventListener("mouseleave",()=>{be()});const u=(e,t,c,r,s,d)=>{const n=document.createElement("div");return e&&(n.id=e),t&&(n.className=t),c&&(n.textContent=c),r&&n.addEventListener("click",r),n},ft=u("level_1_menu","menu_btn",0,()=>{Le("lv1")}),ht=u("level_2_menu","menu_btn",0,()=>{Le("lv2")}),gt=u("volume_menu","menu_btn",0,()=>{Le("volume")}),wt=u("credit_menu","menu_btn",0,()=>{Le("credit")}),Se=u("menu_btns"),In=u("menu_img"),q=u("menuArea"),j=u("menu_bottom"),yt=u("lv2_working"),kt=u("volume_add",0,"+"),bt=u(0,"volume_slot","-"),Ct=u(0,"volume_slot","-"),Lt=u(0,"volume_slot","-"),Nt=u(0,"volume_slot","-"),Tt=u(0,"volume_slot","-"),St=[bt,Ct,Lt,Nt,Tt],Et=u("volume_sub",0,"-"),Ee=u("credit_div");let Wn=[{title:"instruction music",text:"Adolf & The Bohemians - Old Bohemians Dance (1936)",type:"label"},{title:"HMCC Official",text:"HMCC official",type:"a",link:"https://www.instagram.com/hmcc.official?igsh=MW5ybnFuemd3aWxmYg=="},{title:"Video source",text:"Eye eel echo",type:"a",link:"https://www.youtube.com/@eyeeelecho"},{title:"font/fuente",text:"ChakraPetch-Bold",text2:"GochiHand-Regular",type:"label"},{title:"字體",text:"GenJyuuGothicL-Bold",text2:"ChenYuluoyan-Thin",type:"label"},{title:"字体",text:"No.82-ShangShouJianHeiCuTi",text2:"AaTaoTaoWuLongNaiLaoSu",type:"label"}];const ve=u("instruct_div"),Re=u("instruct_yes",0,0,()=>{Rn()}),Ce=u("instruct_pass");u("logo_menu");u("logo_div");let oe=!1;const zn=e=>(q.innerHTML="",Se.innerHTML="",Se.append(ft,ht,gt,wt),q.append(In,Se),oe=!1,Oe(),e.appendChild(q)),Le=e=>{j.innerHTML="",oe?oe=!1:(q.appendChild(j),e==="lv1"?(q.innerHTML="",q.appendChild(ve),ve.append(Re,Ce)):e==="lv2"?j.append(yt):e==="volume"?j.append(Et,bt,Ct,Lt,Nt,Tt,kt):e==="credit"&&Xn(),oe=!0),h.play()},Xn=()=>{Ee.innerHTML="",Wn.forEach(e=>{const t=document.createElement("div");t.textContent=e.title,t.className="credit_title";let c;if(e.type==="a"?(c=document.createElement("a"),c.href=e.link):e.type==="label"&&(c=document.createElement("label")),c.textContent=e.text,t.appendChild(c),e.text2){const r=document.createElement("label");r.textContent=`${e.text2}`,t.appendChild(r)}Ee.appendChild(t)}),j.appendChild(Ee)};kt.addEventListener("click",()=>{o.volume<St.length&&(o.volume+=1,Oe())});Et.addEventListener("click",()=>{o.volume>0&&(o.volume-=1,Oe())});const Oe=()=>{St.forEach((e,t)=>{e.textContent=t<o.volume?"|":"-",Dn(),h.play()})},Rn=()=>{q.remove(ve),h.play()},On=(e,t,c,r,s,d)=>{const n=document.createElement("div");return n.id=e,n},Gn=On("backGround"),O=(e,t,c,r,s,d)=>{const n=document.createElement("div");return n.id=e,n},U=O("face_text"),N=O("face_state"),fe=O("window_blink"),Vn=O("face_rg"),Mt=O("window_outLine"),y=O("windowDiv"),jn=e=>(N.appendChild(U),y.innerHTML="",y.className="window_start",fe.style.opacity=0,N.classList.value="",U.classList.value="",y.append(Vn,N,fe,Mt),xt(),e.appendChild(y)),Yn=()=>{z.pause(),i.win===!1?(y.innerHTML="",y.appendChild(Mt),y.className="window_endLose",Fe.play()):i.win===!0&&(y.className="window_start",N.className="window_endWin",We.play())};let Zn=8e3,it=100;const xt=()=>{fe.style.opacity=0;const e=Math.floor(Math.random()*(Zn-it+1))+it;setTimeout(()=>{fe.style.opacity=1,setTimeout(()=>{xt()},150)},e)},Dt=()=>{if(!(l.sleepy>=5)&&i.request===""){const e=Math.floor(Math.random()*(i.window_Max-i.window_Min+1))+i.window_Min;setTimeout(()=>{Kn()},e)}},Jn=()=>{const e=Math.floor(Math.random()*2);e===0?N.className="paper_1":e===1&&(N.className="paper_2")},st=["active","hunger","sanity"],Kn=()=>{const e=Math.floor(Math.random()*st.length);return y.className="window_state",N.classList.value="",N.className=`window_${e}`,U.className=`face_text_${e}`,i.request=st[e],le(i.request),ce(i.request,i.computer_fast),z.pause(),z.play(),U},Qn=()=>{y.className="window_start",N.classList.value="",U.classList.value="",z.pause(),Dt()},M=(e,t,c,r,s,d)=>{const n=document.createElement("div");return n.id=e,t&&(n.className=t),c&&(n.textContent=c),r&&n.addEventListener("click",r),n},m=M("staff_door"),Un=M("doorFrame"),Y=M("doorDiv"),ei=M("feed_btn","request_btn",0,()=>{Ne("right","hunger")}),ti=M("clean_btn","request_btn",0,()=>{Ne("right","sanity")}),ni=M("play_btn","request_btn",0,()=>{Ne("right","active")}),H=M("door_btns"),Ge=M("request_btns","request_btn"),ii=e=>(Y.innerHTML="",Y.append(m,H,Un),Y.className="door_start",m.style.opacity=1,Ve(),o.anim===0&&(m.className="right_1",setTimeout(()=>{m.className="bennet_jump"},1e3),o.anim+=1),e.appendChild(Y)),si=()=>{H.appendChild(Ge)},ai=e=>{qt(),H.innerHTML="",Y.className="door_black",i.win===!1?e===1?m.className="bennet_1":e===2?m.className="bennet_2":e===3&&(m.className="bennet_3"):m.className="back_1"};let oi=8e3,at=100,At,Pt;const Ve=()=>{m.className="staff_idle";const e=Math.floor(Math.random()*(oi-at+1))+at;Pt=setTimeout(()=>{m.className="staff_blink",At=setTimeout(()=>{Ve()},250)},e)},qt=()=>{clearTimeout(Pt),clearTimeout(At)};Ge.addEventListener("click",()=>{H.innerHTML="",H.append(ei,ti,ni),Be.play()});const Ne=(e,t)=>{t&&(i.action=t),qt(),e==="left"?(m.className="",setTimeout(()=>{m.classList.add(`${e}_1`),He.play()},i.staff_work)):e==="right"&&(m.className=`${e}_1`,$e.play()),H.innerHTML=""},ci=()=>{i.action==="hunger"?(l.hunger-=2,l.sanity+=1):i.action==="sanity"?(l.sanity+=2,l.active-=1):i.action==="active"&&(l.active-=2,l.hunger+=1),i.request===i.action&&(i.request="",l.sleepy+=1,Qn()),Ye(),i.action=""};window.addEventListener("animationend",e=>{if(e.animationName==="staff_right_anim")Ne("left");else if(e.animationName==="staff_left_anim"){if(l.sleepy>=5)return;H.appendChild(Ge),Ve(),ci(),i.complete_request+=1}else e.animationName==="staff_back_anim"?m.style.opacity=0:e.animationName==="bennet_anim"&&(m.className="bennet_jump")});const I=(e,t,c,r,s,d)=>{const n=document.createElement("div");return n.id=e,t&&(n.className=t),n},Bt=I("activeDiv","screen_text"),Ht=I("hungerDiv","screen_text"),$t=I("sanityDiv","screen_text"),Ft=I("sleepyDiv","screen_text"),je=I("click_to_start"),he=I("wallPaper"),E=I("computerDiv"),li=e=>(E.innerHTML="",he.className="wallpaper_start",E.append(he,je),e.appendChild(E));je.addEventListener("click",()=>{E.innerHTML="",he.className="",E.append(he,Bt,Ht,$t,Ft),ce("active",i.computer_normal),ce("hunger",i.computer_normal),ce("sanity",i.computer_normal),Ye(),$n(),Jn(),Dt(),si(),rn()});let It={};const ce=(e,t)=>{It[e]=setInterval(()=>{l.sleepy>=5?te("win",0):(e==="active"?l.active>9?te("lose",1):l.active+=1:e==="hunger"?l.hunger>9?te("lose",2):l.hunger+=1:e==="sanity"&&(l.sanity<1?te("lose",3):l.sanity-=1),Ye())},t)},le=e=>{clearInterval(It[e])},te=(e,t)=>{e==="lose"?(i.win=!1,E.textContent="lose"):e==="win"&&(i.win=!0,E.textContent="Win!!!"),ai(t),Yn(),ri(),clearInterval(qe),E.innerHTML=""},ri=()=>{le("active"),le("hunger"),le("sanity")},ne=e=>{switch(o.language){case"English":return e.english;case"Tradition-CN":return e.traditional;case"Simplified-CN":return e.simplified;case"Spanish":return e.spanish}},Ye=()=>{const e={sleepy:{english:"sleepy:",traditional:"睡意:",simplified:"睡意:",spanish:"sueño:"},active:{english:"active:",traditional:"活耀:",simplified:"活跃:",spanish:"activo:"},hunger:{english:"hunger:",traditional:"飢餓:",simplified:"饥饿:",spanish:"hambre:"},sanity:{english:"sanity:",traditional:"理智:",simplified:"理智:",spanish:"cordura:"}};Ft.textContent=`${ne(e.sleepy)} ${l.sleepy}`,Bt.textContent=`${ne(e.active)} ${l.active}`,Ht.textContent=`${ne(e.hunger)} ${l.hunger}`,$t.textContent=`${ne(e.sanity)} ${l.sanity}`,ue.currentTime=0,ue.play()},Ze=(e,t,c,r,s,d)=>{const n=document.createElement("div");return n.id=e,t&&(n.className=t),c&&(n.textContent=c),n},Wt=Ze("pass_btn","funcBtn","2"),zt=Ze("danger_btn","funcBtn","1"),Me=Ze("buttonsDiv"),di=e=>(Me.innerHTML="",Me.append(zt,Wt),e.appendChild(Me)),Xt=e=>{};Wt.addEventListener("click",()=>Xt());zt.addEventListener("click",()=>Xt());const A=document.createElement("div"),K=document.createElement("div"),Rt=document.createElement("div"),ui=e=>(A.innerHTML="",A.className="",A.id="transDiv",K.id="trans_text",Rt.id="trans_snow",K.style.display="block",A.append(K),pi(),e.appendChild(A)),pi=()=>{setTimeout(()=>{K.style.display="none",A.append(Rt),A.className="trans_fade",Xe.play()},5e3)},ee=(e,t,c,r)=>{const s=document.createElement("div");return s.id=e,t&&(s.className=t),c&&(s.textContent=c),r&&s.addEventListener("click",r),s},xe=ee("languageDiv"),_i=ee("englishBtn","langBtn","English",()=>{Te("English")}),mi=ee("traditionalBtn","langBtn",window.innerWidth,()=>{Te("Tradition-CN")}),vi=ee("simplifiedBtn","langBtn","简体中文",()=>{Te("Simplified-CN")}),fi=ee("spanishBtn","langBtn","Español",()=>{Te("Spanish")}),hi=e=>(xe.innerHTML="",xe.append(mi,vi,fi,_i),e.appendChild(xe)),$=e=>{switch(o.language){case"English":return e.english;case"Tradition-CN":return e.traditional;case"Simplified-CN":return e.simplified;case"Spanish":return e.spanish}},Ot=[document.querySelector("#instruct_video_0"),document.querySelector("#instruct_video_1"),document.querySelector("#instruct_video_2"),document.querySelector("#instruct_video_3")],gi={English:0,"Tradition-CN":1,"Simplified-CN":2,Spanish:3};Re.addEventListener("click",()=>{const e=gi[o.language],t=Ot[e];t.play(),t.style.display="block"});const wi=e=>{e.style.display="none",Ce.click()};Ot.forEach(e=>{e.addEventListener("ended",()=>wi(e))});const V={english:{lvl1:"Chapter 1",lvl2:"Chapter 2",volume:"Volume",instruct_qz:"Would you like to watch instruction?",play:"Play",pass:"Pass",loading:"LOADING",clickStart:"Click to start",backMenu:"Back to menu",stillWork:"Coming in September 2024",pic1:"Lunch time in the monitoring room.",pic2:"The facial features of Bennet with low sanity.",pic3:"The staff playing cards with the active Bennet.",pic4:"This year's eating contest has invited the hungry Bennet.",credit:"Credit"},traditional:{lvl1:"第一章節",lvl2:"第二章節",volume:"音量",instruct_qz:"是否播放教程?",play:"播放",pass:"略過",loading:"載入中",clickStart:"點擊開始",backMenu:"回到首頁",stillWork:"將在2024年9月上線",pic1:"監控室的午餐時間。",pic2:"理智過低的Bennet臉部特徵。",pic3:"執行員和活耀的Bennet打撲克牌。",pic4:"這一屆的大胃王挑戰現場請來了飢餓的Bennet。",credit:"工作人員"},simplified:{lvl1:"第一章节",lvl2:"第二章节",volume:"音量",instruct_qz:"是否播放教程?",play:"播放",pass:"略过",loading:"加载中",clickStart:"点击开始",backMenu:"返回首页",stillWork:"将在2024年9月上线",pic1:"监控室的午餐时间。",pic2:"理智过低的Bennet脸部特征。",pic3:"执行员和活跃的Bennet打扑克牌。",pic4:"这一届的大胃王挑战现场请来了饥饿的Bennet。",credit:"工作人员"},spanish:{lvl1:"Capítulo 1",lvl2:"Capítulo 2",volume:"Volumen",instruct_qz:"¿Te gustaría ver las instrucciones?",play:"Reproducir",pass:"Saltar",loading:"CARGANDO",clickStart:"Haga clic para comenzar",backMenu:"Volver al menú",stillWork:"Llegará en Septiembre de 2024",pic1:"La hora del almuerzo en la sala de monitoreo.",pic2:"Las características faciales de Bennet con baja cordura.",pic3:"El personal jugando a las cartas con Bennet activo.",pic4:"El desafío de comer de este año ha invitado a Bennet hambriento.",credit:"Créditos"}},Te=e=>{switch(o.language=e,ft.textContent=_("lvl1"),ht.textContent=_("lvl2"),gt.textContent=_("volume"),ve.textContent=_("instruct_qz"),Re.textContent=_("play"),Ce.textContent=_("pass"),K.textContent=_("loading"),je.textContent=_("clickStart"),D.textContent=_("backMenu"),yt.textContent=_("stillWork"),Gt.textContent=_("pic1"),Vt.textContent=_("pic2"),jt.textContent=_("pic3"),Yt.textContent=_("pic4"),wt.textContent=_("credit"),o.language){case"English":return document.body.lang="en";case"Tradition-CN":return document.body.lang="cnt";case"Simplified-CN":return document.body.lang="cns";case"Spanish":return document.body.lang="es";default:document.body.lang="en";break}},_=e=>{switch(o.language){case"English":return V.english[e];case"Tradition-CN":return V.traditional[e];case"Simplified-CN":return V.simplified[e];case"Spanish":return V.spanish[e];default:return V.english[e]}},a=(e,t,c,r,s,d,n,G)=>{const T=document.createElement("div");return T.id=e,t&&(T.className=t),c&&(T.textContent=c),r&&T.addEventListener("click",r),s&&T.addEventListener("mouseover",s),d&&T.addEventListener("mouseleave",d),(n||G)&&n&&T.appendChild(n),T};let S=0;const yi=(e,t,c,r)=>{let s=null;const d=n=>{s||(s=n);const G=Math.min((n-s)/r,1);Math.floor(G*(c-t)+t)>0?e.innerHTML=Math.floor(G*(c-t)+t):e.innerHTML=0,G<1&&window.requestAnimationFrame(d)};window.requestAnimationFrame(d)},C=a("endSceneDiv"),ie=a("challengeText"),ot=a("scoreNum"),F=a("end_lock_1",0,0,e=>{ln(e,1)}),ge=a("end_lock_2",0,0,e=>{ln(e,2)}),re=a("end_btns"),f=a("disk_open"),Je=a("disk_name",0),Ke=a("disk_Xbtn",0,"X"),Gt=a(0,"pic_text"),Vt=a(0,"pic_text"),jt=a(0,"pic_text"),Yt=a(0,"pic_text"),ki=a(0,"disk_2 disk_data_5-1"),bi=a(0,"disk_2 disk_data_6-1"),Ci=a(0,"disk_2 disk_data_7-1"),Li=a(0,"disk_2 disk_data_8-1"),p=a("pic_text_detect",0,0,()=>{Si()}),Zt=a("diskPic_1","diskPic",0,()=>{x(1)}),Jt=a("diskPic_2","diskPic",0,()=>{x(2)}),Kt=a("diskPic_3","diskPic",0,()=>{x(3)}),Qt=a("diskPic_4","diskPic",0,()=>{x(4)}),Ut=a("diskPic_5","diskPic",0,()=>{x(5)}),en=a("diskPic_6","diskPic",0,()=>{x(6)}),tn=a("diskPic_7","diskPic",0,()=>{x(7)}),nn=a("diskPic_8","diskPic",0,()=>{x(8)}),Qe=a("diskPic_9","diskPic",0),Ae=a("diskPic_Xbtn",0,"X"),se=a("disk_video_Xbtn",0,"X"),w=a("end_btnText"),D=a("backtomenu_btn",0,0,()=>{qi()}),Ni=a("retry_iconBtn_1","end_btn",0,()=>{Bi()},()=>{Ue({english:"retry",traditional:"再挑戰",simplified:"再挑战",spanish:"reintentar"})}),sn=a("disk_iconBtn_1","end_btn",0,0,()=>{Ue({english:"data: The usual appearance",traditional:"資料: 平日的樣子",simplified:"资料: 平日的样子",spanish:"datos: La apariencia habitual"})},0,F),an=a("disk_iconBtn_2","end_btn",0,0,()=>{Ue({english:"data: True appearance",traditional:"資料: 真實樣貌",simplified:"资料: 真实样貌",spanish:"datos: Apariencia real"})},0,ge),Ti=e=>(C.innerHTML="",re.innerHTML="",F.style.opacity=1,ge.style.opacity=1,F.className="end_lock",ge.className="end_lock",S=0,cn(),on(),e.appendChild(C)),on=()=>{switch(w.textContent=$({english:"Encrypt files",traditional:"加密檔案",simplified:"加密文件",spanish:"Encriptar archivos"}),document.querySelectorAll(".pic_text"),o.language){case"English":return p.setAttribute("lang","en"),w.setAttribute("lang","en");case"Tradition-CN":return p.setAttribute("lang","cnt"),w.setAttribute("lang","cnt");case"Simplified-CN":return p.setAttribute("lang","cns"),w.setAttribute("lang","cns");case"Spanish":return p.setAttribute("lang","es"),w.setAttribute("lang","es");default:w.setAttribute("lang","en");break}},Ue=e=>{w.textContent=$(e),Je.textContent=$(e),_e.currentTime=0,_e.play()},cn=()=>{if(re.append(Ni,sn,an),i.win===!0)if(ie.textContent=$({english:"score",traditional:"分數",simplified:"分数",spanish:"puntuación"}),S===0)C.append(ie);else if(S===1){C.append(ot,re,w,D),D.style.opacity=0,console.log(i.play_time*100,i.complete_request*10);let e=o.bonus_time-i.play_time*80;e<0&&(e=0),e+=i.complete_request*100,console.log(l),l.active<5&&(e+=o.bonus_value),l.hunger<5&&(e+=o.bonus_value),l.sanity>5&&(e+=o.bonus_value),l.active<3&&l.hunger<3&&l.sanity>7&&(e+=o.bonus_value_big),yi(ot,0,e,2e3),e>=o.score_1&&e<o.score_2?(F.className="end_unlock",me.play()):e>o.score_2&&(F.className="end_unlock",ge.className="end_unlock",me.play())}else S===2&&(D.style.opacity=1);else if(i.win===!1)ie.textContent=$({english:"lost connect",traditional:"訊號丟失",simplified:"信号丢失",spanish:"se perdió la conexión"}),S===0?C.append(ie):S===1?(C.append(re,w,D),D.style.opacity=0):S===2&&(D.style.opacity=1);else return;S+=1},ln=(e,t)=>{e.target.parentElement.classList.add("end_lock_click"),t===1?w.textContent=$({english:`unlock for ${o.score_1} score`,traditional:`分數未達${o.score_1}`,simplified:`分数未达${o.score_1}`,spanish:`Desbloquear por ${o.score_1} puntos`}):t===2&&(w.textContent=$({english:`unlock for ${o.score_2} score`,traditional:`分數未達${o.score_2}`,simplified:`分数未达${o.score_2}`,spanish:`Desbloquear por ${o.score_2} puntos`})),setTimeout(()=>{e.target.parentElement.classList.remove("end_lock_click"),on()},1e3),h.pause(),pe.currentTime=0,pe.play()};sn.addEventListener("click",()=>{if(F.className==="end_lock")return;f.innerHTML="",f.append(Je,Ke),f.append(Zt,Jt,Kt,Qt),document.querySelectorAll(".diskPic").forEach(t=>{t.className="diskPic"}),C.appendChild(f),h.play()});an.addEventListener("click",()=>{if(F.className==="end_lock")return;f.innerHTML="",f.append(Je,Ke),f.append(Ut,en,tn,nn,Qe),document.querySelectorAll(".diskPic").forEach(t=>{t.className="diskPic"}),C.appendChild(f),h.play()});Ke.addEventListener("click",()=>{C.removeChild(f),h.play()});let et=0;const x=e=>{const t=document.querySelector(`#diskPic_${e}`);t&&(t.className=`diskPick_click disk_data_${e}`,f.append(Ae,p),et=e,X.currentTime=0,X.play())},Si=()=>{switch(p.innerHTML="",et){case 1:p.appendChild(Gt);break;case 2:p.appendChild(Vt);break;case 3:p.appendChild(jt);break;case 4:p.appendChild(Yt);break;case 5:p.appendChild(ki);break;case 6:p.appendChild(bi);break;case 7:p.appendChild(Ci);break;case 8:p.appendChild(Li);break;default:return}let e;clearInterval(e),e=setTimeout(()=>{Ei()},1e3)},Ei=()=>{p.innerHTML=""};Ae.addEventListener("click",()=>{f.removeChild(Ae),f.removeChild(p),Zt.className="diskPic",Jt.className="diskPic",Kt.className="diskPic",Qt.className="diskPic",Ut.className="diskPic",en.className="diskPic",tn.className="diskPic",nn.className="diskPic",Qe.className="diskPic",et=0,X.currentTime=0,X.play()});Qe.addEventListener("click",()=>{const e=document.querySelector("#disk2_video");e.currentTime=0,e.play(),e.style.display="block",f.appendChild(se),e.addEventListener("ended",()=>{e.style.display="none",se.click()}),se.addEventListener("click",()=>{e.style.display="none",e.pause(),f.removeChild(se)})});window.addEventListener("animationend",e=>{e.animationName==="showEndScene_anim"&&cn()});const g=(e,t,c,r,s,d)=>{const n=document.createElement("div");return n.id=e,n},P=g("gameArea"),Mi=g("gameFilter"),ct=g("doorArea"),lt=g("computerArea"),xi=g("computerShadow"),Di=g("tableArea"),Ai=g("buttonsArea");g("rulesArea");g("lightArea");g("fileArea");const rt=g("windowArea"),Pi=g("windowShadow"),tt=e=>{P.innerHTML="",dt(),li(lt),di(Ai),jn(rt),ii(ct),P.style.transform="translateX(0px)",P.append(ct,xi,lt,Pi,rt,Di),P.append(Gn,Mi),e.append(P),ke(e)};window.addEventListener("animationend",e=>{e.animationName==="bennet_anim"||e.animationName==="staff_back_anim"?nt():e.animationName==="end_screen_anim"&&(Fn(),P.innerHTML="",Ti(P))});const v=document.querySelector("#app");dt();hi(v);document.querySelectorAll(".langBtn").forEach(e=>{e.addEventListener("click",()=>{v.innerHTML="",ke(v),tt(v),h.play()})});Ce.addEventListener("click",()=>{v.innerHTML="",ke(v),tt(v),ui(v),h.play()});const qi=()=>{v.removeChild(gameArea),ke(v),zn(v),h.play()},Bi=()=>{v.removeChild(gameArea),tt(v),h.play()};window.addEventListener("animationend",()=>{event.animationName==="show_logo"?logo_div&&v.removeChild(logo_div):event.animationName==="showtrans_anim"&&v.removeChild(transDiv)});
