(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const n of d.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(s){if(s.ep)return;s.ep=!0;const d=o(s);fetch(s.href,d)}})();const De=document.createElement("div");De.className="fuzzy-overlay";let i={},l={};const lt=()=>{clearInterval(Ae),l={sleepy:0,active:0,hunger:0,sanity:10},i={request:"",action:"",window_Max:3e3,window_Min:1e3,computer_normal:7e3,computer_fast:3500,computer_hyper:1e3,staff_work:3e3,play_time:0,complete_request:0,win:!1}};let Ae;const cn=()=>{Ae=setInterval(()=>{i.play_time+=1},1500)},a={anim:0,language:"English",volume:3,bonus_time:5e3,bonus_value:500,bonus_value_big:2e3,score_1:3500,score_2:5e3},ln="/page4/assets/hey-QOcsQIX8.wav",rn="/page4/assets/a%20burr%20bour-CgfDoBm-.wav",dn="/page4/assets/machine_1-xPoump-W.wav",un="/page4/assets/machine_2-DVRlrrFj.wav",pn="/page4/assets/working-2FX-Kuug.wav",mn="/page4/assets/beep-CNWut400.wav",_n="/page4/assets/footStep-D5LEd8rH.wav",vn="/page4/assets/walkRight-BiXRMwZ1.wav",hn="/page4/assets/squeeze-0RLJtapz.wav",fn="/page4/assets/tapeClick_2-DKrG1Yqp.wav",gn="/page4/assets/lock_1-VAm-sLO_.wav",wn="/page4/assets/hover_1-CPU6wXwn.wav",yn="/page4/assets/horror_1-CHzID-B-.wav",kn="/page4/assets/snooze_2-CnN2-c4k.wav",bn="/page4/assets/heartbeat_2-D5c8AIz-.wav",Cn="/page4/assets/horror_2-DNL7FeZt.wav",Ln="/page4/assets/tvSnow-DrChzltf.wav",Nn="/page4/assets/pageFlip-DZIzoMZo.wav",Sn="/page4/assets/unlock-BSHT499Y.wav",Pe=new Audio(ln),rt=new Audio(rn),z=new Audio(dn),re=new Audio(un),R=new Audio(pn),de=new Audio(mn),qe=new Audio(_n),He=new Audio(vn),Be=new Audio(hn),v=new Audio(fn),ue=new Audio(gn),pe=new Audio(wn),$e=new Audio(yn),Fe=new Audio(kn),W=new Audio(bn),Ie=new Audio(Cn),ze=new Audio(Ln),X=new Audio(Nn),me=new Audio(Sn);R.loop=!0;W.loop=!0;Pe.pause();rt.pause();z.pause();re.pause();de.pause();qe.pause();He.pause();Be.pause();v.pause();ue.pause();pe.pause();$e.pause();Fe.pause();Ie.pause();ze.pause();X.pause();me.pause();const En=[document.querySelector("#instruct_video_0"),document.querySelector("#instruct_video_1"),document.querySelector("#instruct_video_2"),document.querySelector("#instruct_video_3"),document.querySelector("#disk2_video")],Tn=[...En,Pe,rt,z,R,re,de,qe,He,Be,v,ue,pe,$e,Fe,W,Ie,ze,X,me],Mn=()=>{Tn.forEach(e=>{e.volume=a.volume/5})},k=(e,t,o,r,s,d)=>{const n=document.createElement("div");return n.id=e,n},C=k("viewPort"),xn=k("view_lose_cover"),Dn=k("view_lose_up"),An=k("view_lose_down"),se=k("view_lose"),Pn=k("view_win"),qn=k("view_border"),U=k("screenBtnDiv"),_e=k("screenL"),ve=k("screenR");let E=0,Z=220,dt=10,J=80,H=null,xe=!1;const ke=e=>{C.innerHTML="",U.innerHTML="",E=0,H=null,C.append(qn,De),e.appendChild(C)},Hn=()=>{U.append(_e,ve),C.appendChild(U)},et=()=>{R.pause(),clearInterval(H),C.removeChild(U),i.win===!1?(se.innerHTML="",se.append(Dn,An),C.appendChild(se),$e.play()):i.win===!0&&C.appendChild(Pn)},Bn=()=>{C.innerHTML="",U.innerHTML="",C.appendChild(De);const e=document.querySelector("#gameArea");e.style.transform="translateX(0px)"};window.addEventListener("animationend",e=>{e.animationName==="lose_screenDown_anim"&&se.appendChild(xn)});_e.addEventListener("mousemove",()=>{console.log("e"),$n()});ve.addEventListener("mousemove",()=>{Fn()});_e.addEventListener("mouseup",()=>{pt(),_e.onmouseleave});ve.addEventListener("mouseup",()=>{pt(),ve.onmouseleave});const ut=()=>{window.innerWidth>960?(Z=360,J=30):window.innerWidth>450&&window.innerWidth<960?(Z=220,J=50):(Z=110,J=100)},$n=()=>{ut(),clearInterval(H),H=setInterval(()=>{if(E<Z){E+=dt;const e=document.querySelector("#gameArea");e.style.transform=`translateX(${E}px)`,xe=!1}},J),z.currentTime=0,z.play(),R.play()},Fn=()=>{ut(),clearInterval(H),H=setInterval(()=>{if(E>-Z){E-=dt;const e=document.querySelector("#gameArea");e.style.transform=`translateX(${E}px)`}E<-140&&i.request!=""&&xe===!1&&(Ie.play(),xe=!0)},J),z.currentTime=0,z.play(),R.play()},pt=()=>{clearInterval(H),R.pause(),re.currentTime=0,re.play()},u=(e,t,o,r,s,d)=>{const n=document.createElement("div");return e&&(n.id=e),t&&(n.className=t),o&&(n.textContent=o),r&&n.addEventListener("click",r),n},mt=u("level_1_menu","menu_btn",0,()=>{Ce("lv1")}),_t=u("level_2_menu","menu_btn",0,()=>{Ce("lv2")}),vt=u("volume_menu","menu_btn",0,()=>{Ce("volume")}),ht=u("credit_menu","menu_btn",0,()=>{Ce("credit")}),Se=u("menu_btns"),In=u("menu_img"),q=u("menuArea"),j=u("menu_bottom"),ft=u("lv2_working"),gt=u("volume_add",0,"+"),wt=u(0,"volume_slot","-"),yt=u(0,"volume_slot","-"),kt=u(0,"volume_slot","-"),bt=u(0,"volume_slot","-"),Ct=u(0,"volume_slot","-"),Lt=[wt,yt,kt,bt,Ct],Nt=u("volume_sub",0,"-"),Ee=u("credit_div");let zn=[{title:"instruction music",text:"Adolf & The Bohemians - Old Bohemians Dance (1936)",type:"label"},{title:"HMCC Official",text:"HMCC official",type:"a",link:"https://www.instagram.com/hmcc.official?igsh=MW5ybnFuemd3aWxmYg=="},{title:"Video source",text:"Eye eel echo",type:"a",link:"https://www.youtube.com/@eyeeelecho"},{title:"font/fuente",text:"ChakraPetch-Bold",text2:"GochiHand-Regular",type:"label"},{title:"字體",text:"GenJyuuGothicL-Bold",text2:"ChenYuluoyan-Thin",type:"label"},{title:"字体",text:"No.82-ShangShouJianHeiCuTi",text2:"AaTaoTaoWuLongNaiLaoSu",type:"label"}];const he=u("instruct_div"),We=u("instruct_yes",0,0,()=>{Rn()}),be=u("instruct_pass");u("logo_menu");u("logo_div");let ae=!1;const Wn=e=>(q.innerHTML="",Se.innerHTML="",Se.append(mt,_t,vt,ht),q.append(In,Se),ae=!1,Xe(),e.appendChild(q)),Ce=e=>{j.innerHTML="",ae?ae=!1:(q.appendChild(j),e==="lv1"?(q.innerHTML="",q.appendChild(he),he.append(We,be)):e==="lv2"?j.append(ft):e==="volume"?j.append(Nt,wt,yt,kt,bt,Ct,gt):e==="credit"&&Xn(),ae=!0),v.play()},Xn=()=>{Ee.innerHTML="",zn.forEach(e=>{const t=document.createElement("div");t.textContent=e.title,t.className="credit_title";let o;if(e.type==="a"?(o=document.createElement("a"),o.href=e.link):e.type==="label"&&(o=document.createElement("label")),o.textContent=e.text,t.appendChild(o),e.text2){const r=document.createElement("label");r.textContent=`${e.text2}`,t.appendChild(r)}Ee.appendChild(t)}),j.appendChild(Ee)};gt.addEventListener("click",()=>{a.volume<Lt.length&&(a.volume+=1,Xe())});Nt.addEventListener("click",()=>{a.volume>0&&(a.volume-=1,Xe())});const Xe=()=>{Lt.forEach((e,t)=>{e.textContent=t<a.volume?"|":"-",Mn(),v.play()})},Rn=()=>{q.remove(he),v.play()},On=(e,t,o,r,s,d)=>{const n=document.createElement("div");return n.id=e,n},Gn=On("backGround"),O=(e,t,o,r,s,d)=>{const n=document.createElement("div");return n.id=e,n},Q=O("face_text"),L=O("face_state"),fe=O("window_blink"),Vn=O("face_rg"),St=O("window_outLine"),y=O("windowDiv"),jn=e=>(L.appendChild(Q),y.innerHTML="",y.className="window_start",fe.style.opacity=0,L.classList.value="",Q.classList.value="",y.append(Vn,L,fe,St),Et(),e.appendChild(y)),Yn=()=>{W.pause(),i.win===!1?(y.innerHTML="",y.appendChild(St),y.className="window_endLose",Be.play()):i.win===!0&&(y.className="window_start",L.className="window_endWin",Fe.play())};let Zn=8e3,tt=100;const Et=()=>{fe.style.opacity=0;const e=Math.floor(Math.random()*(Zn-tt+1))+tt;setTimeout(()=>{fe.style.opacity=1,setTimeout(()=>{Et()},150)},e)},Tt=()=>{if(!(l.sleepy>=5)&&i.request===""){const e=Math.floor(Math.random()*(i.window_Max-i.window_Min+1))+i.window_Min;setTimeout(()=>{Kn()},e)}},Jn=()=>{const e=Math.floor(Math.random()*2);e===0?L.className="paper_1":e===1&&(L.className="paper_2")},nt=["active","hunger","sanity"],Kn=()=>{const e=Math.floor(Math.random()*nt.length);return y.className="window_state",L.classList.value="",L.className=`window_${e}`,Q.className=`face_text_${e}`,i.request=nt[e],ce(i.request),oe(i.request,i.computer_fast),W.pause(),W.play(),Q},Un=()=>{y.className="window_start",L.classList.value="",Q.classList.value="",W.pause(),Tt()},M=(e,t,o,r,s,d)=>{const n=document.createElement("div");return n.id=e,t&&(n.className=t),o&&(n.textContent=o),r&&n.addEventListener("click",r),n},m=M("staff_door"),Qn=M("doorFrame"),Y=M("doorDiv"),ei=M("feed_btn","request_btn",0,()=>{Le("right","hunger")}),ti=M("clean_btn","request_btn",0,()=>{Le("right","sanity")}),ni=M("play_btn","request_btn",0,()=>{Le("right","active")}),B=M("door_btns"),Re=M("request_btns","request_btn"),ii=e=>(Y.innerHTML="",Y.append(m,B,Qn),Y.className="door_start",m.style.opacity=1,Oe(),a.anim===0&&(m.className="right_1",setTimeout(()=>{m.className="bennet_jump"},1e3),a.anim+=1),e.appendChild(Y)),si=()=>{B.appendChild(Re)},ai=e=>{Dt(),B.innerHTML="",Y.className="door_black",i.win===!1?e===1?m.className="bennet_1":e===2?m.className="bennet_2":e===3&&(m.className="bennet_3"):m.className="back_1"};let oi=8e3,it=100,Mt,xt;const Oe=()=>{m.className="staff_idle";const e=Math.floor(Math.random()*(oi-it+1))+it;xt=setTimeout(()=>{m.className="staff_blink",Mt=setTimeout(()=>{Oe()},250)},e)},Dt=()=>{clearTimeout(xt),clearTimeout(Mt)};Re.addEventListener("click",()=>{B.innerHTML="",B.append(ei,ti,ni),Pe.play()});const Le=(e,t)=>{t&&(i.action=t),Dt(),e==="left"?(m.className="",setTimeout(()=>{m.classList.add(`${e}_1`),qe.play()},i.staff_work)):e==="right"&&(m.className=`${e}_1`,He.play()),B.innerHTML=""},ci=()=>{i.action==="hunger"?(l.hunger-=2,l.sanity+=1):i.action==="sanity"?(l.sanity+=2,l.active-=1):i.action==="active"&&(l.active-=2,l.hunger+=1),i.request===i.action&&(i.request="",l.sleepy+=1,Un()),Ve(),i.action=""};window.addEventListener("animationend",e=>{if(e.animationName==="staff_right_anim")Le("left");else if(e.animationName==="staff_left_anim"){if(l.sleepy>=5)return;B.appendChild(Re),Oe(),ci(),i.complete_request+=1}else e.animationName==="staff_back_anim"?m.style.opacity=0:e.animationName==="bennet_anim"&&(m.className="bennet_jump")});const I=(e,t,o,r,s,d)=>{const n=document.createElement("div");return n.id=e,t&&(n.className=t),n},At=I("activeDiv","screen_text"),Pt=I("hungerDiv","screen_text"),qt=I("sanityDiv","screen_text"),Ht=I("sleepyDiv","screen_text"),Ge=I("click_to_start"),ge=I("wallPaper"),T=I("computerDiv"),li=e=>(T.innerHTML="",ge.className="wallpaper_start",T.append(ge,Ge),e.appendChild(T));Ge.addEventListener("click",()=>{T.innerHTML="",ge.className="",T.append(ge,At,Pt,qt,Ht),oe("active",i.computer_normal),oe("hunger",i.computer_normal),oe("sanity",i.computer_normal),Ve(),Hn(),Jn(),Tt(),si(),cn()});let Bt={};const oe=(e,t)=>{Bt[e]=setInterval(()=>{l.sleepy>=5?te("win",0):(e==="active"?l.active>9?te("lose",1):l.active+=1:e==="hunger"?l.hunger>9?te("lose",2):l.hunger+=1:e==="sanity"&&(l.sanity<1?te("lose",3):l.sanity-=1),Ve())},t)},ce=e=>{clearInterval(Bt[e])},te=(e,t)=>{e==="lose"?(i.win=!1,T.textContent="lose"):e==="win"&&(i.win=!0,T.textContent="Win!!!"),ai(t),Yn(),ri(),clearInterval(Ae),T.innerHTML=""},ri=()=>{ce("active"),ce("hunger"),ce("sanity")},ne=e=>{switch(a.language){case"English":return e.english;case"Tradition-CN":return e.traditional;case"Simplified-CN":return e.simplified;case"Spanish":return e.spanish}},Ve=()=>{const e={sleepy:{english:"sleepy:",traditional:"睡意:",simplified:"睡意:",spanish:"sueño:"},active:{english:"active:",traditional:"活耀:",simplified:"活跃:",spanish:"activo:"},hunger:{english:"hunger:",traditional:"飢餓:",simplified:"饥饿:",spanish:"hambre:"},sanity:{english:"sanity:",traditional:"理智:",simplified:"理智:",spanish:"cordura:"}};Ht.textContent=`${ne(e.sleepy)} ${l.sleepy}`,At.textContent=`${ne(e.active)} ${l.active}`,Pt.textContent=`${ne(e.hunger)} ${l.hunger}`,qt.textContent=`${ne(e.sanity)} ${l.sanity}`,de.currentTime=0,de.play()},je=(e,t,o,r,s,d)=>{const n=document.createElement("div");return n.id=e,t&&(n.className=t),o&&(n.textContent=o),n},$t=je("pass_btn","funcBtn","2"),Ft=je("danger_btn","funcBtn","1"),Te=je("buttonsDiv"),di=e=>(Te.innerHTML="",Te.append(Ft,$t),e.appendChild(Te)),It=e=>{};$t.addEventListener("click",()=>It());Ft.addEventListener("click",()=>It());const A=document.createElement("div"),K=document.createElement("div"),zt=document.createElement("div"),ui=e=>(A.innerHTML="",A.className="",A.id="transDiv",K.id="trans_text",zt.id="trans_snow",K.style.display="block",A.append(K),pi(),e.appendChild(A)),pi=()=>{setTimeout(()=>{K.style.display="none",A.append(zt),A.className="trans_fade",ze.play()},5e3)},ee=(e,t,o,r)=>{const s=document.createElement("div");return s.id=e,t&&(s.className=t),o&&(s.textContent=o),r&&s.addEventListener("click",r),s},Me=ee("languageDiv"),mi=ee("englishBtn","langBtn","English",()=>{Ne("English")}),_i=ee("traditionalBtn","langBtn","繁體中文",()=>{Ne("Tradition-CN")}),vi=ee("simplifiedBtn","langBtn","简体中文",()=>{Ne("Simplified-CN")}),hi=ee("spanishBtn","langBtn","Español",()=>{Ne("Spanish")}),fi=e=>(Me.innerHTML="",Me.append(_i,vi,hi,mi),e.appendChild(Me)),$=e=>{switch(a.language){case"English":return e.english;case"Tradition-CN":return e.traditional;case"Simplified-CN":return e.simplified;case"Spanish":return e.spanish}},Wt=[document.querySelector("#instruct_video_0"),document.querySelector("#instruct_video_1"),document.querySelector("#instruct_video_2"),document.querySelector("#instruct_video_3")],gi={English:0,"Tradition-CN":1,"Simplified-CN":2,Spanish:3};We.addEventListener("click",()=>{const e=gi[a.language],t=Wt[e];t.play(),t.style.display="block"});const wi=e=>{e.style.display="none",be.click()};Wt.forEach(e=>{e.addEventListener("ended",()=>wi(e))});const V={english:{lvl1:"Chapter 1",lvl2:"Chapter 2",volume:"Volume",instruct_qz:"Would you like to watch instruction?",play:"Play",pass:"Pass",loading:"LOADING",clickStart:"Click to start",backMenu:"Back to menu",stillWork:"Coming in September 2024",pic1:`ID Photo Session: A furry creature is having its ID photo taken.
        It looks somewhat nervous, seeming a bit unfamiliar with the process. 
        The background is a standard blue backdrop.`,pic2:`Nighttime Incident: The creature is holding up a chair defensively, appearing startled.
        Two staff members are attempting to calm it down. The background is a blue room, 
        with windows on the wall indicating it's nighttime.`,pic3:`In the Laboratory: In a bright room, the creature is seated on a chair.
        Two researchers are facing it, and it appears calm, cooperating well with the researchers.
        There is a black window on the wall of the room, which has soft-textured walls.`,pic4:`Document Snapshot:
        Name: Bennet
        Height: 2 meters
        Weight: 160 kilograms
        Species: Unknown
        Physical Features: Furry light-colored fur, two tentacles on each side of the face, red nose.
        Important body structures resemble those of humans.
        Emotionally unstable at night, caution advised due to its strength and potential for aggression.
        Currently observed to have three types of emotions... [Not passed security clearance]`,credit:"Credit"},traditional:{lvl1:"第一章節",lvl2:"第二章節",volume:"音量",instruct_qz:"是否播放教程?",play:"播放",pass:"略過",loading:"載入中",clickStart:"點擊開始",backMenu:"回到首頁",stillWork:"將在2024年9月上線",pic1:`證件照拍攝中: 一隻毛茸茸的人正在拍攝證件照。
        牠神情有些緊張，似乎有些不習慣。背景是一面標準的藍色背景布。`,pic2:"夜晚突發事件: 那傢伙舉起椅子防身，似乎受到了驚嚇。旁邊兩個工作人員正在努力安撫，讓牠不要激動。背景是一個藍色的房間，牆上的窗戶顯示出已經是黑夜。",pic3:`研究室中: 一個明亮的房間內，那傢伙坐在椅子上。
        兩位研究人員面對著牠，牠看起來情緒平穩，十分配合研究員。
        房間牆上有一面黑色的窗戶，牆壁是柔軟的質地組成。`,pic4:`文件側拍:
        名字-Bennet
        身高-2米
        體重-160公斤
        物種-不清楚
        外表特徵-毛茸茸的淺色毛皮、左右臉上各兩支觸手、紅色的鼻子。
        身體重要構造與人類相似
        情緒在夜晚時特別不穩定，需留意其強大力量，具備攻擊危險
        目前觀測到的情緒有三種...[未通過安全審核]`,credit:"工作人員"},simplified:{lvl1:"第一章节",lvl2:"第二章节",volume:"音量",instruct_qz:"是否播放教程?",play:"播放",pass:"略过",loading:"加载中",clickStart:"点击开始",backMenu:"返回首页",stillWork:"将在2024年9月上线",pic1:`证件照拍摄中: 一只毛茸茸的人正在拍摄证件照。 
        它神情有些紧张，似乎有些不习惯。背景是一面标准的蓝色背景布。`,pic2:`夜晚突发事件: 那家伙举起椅子防身，似乎受到了惊吓。 
        旁边两个工作人员正在努力安抚，让它不要激动。背景是一个蓝色的房间，墙上的窗户显示出已经是黑夜。`,pic3:`研究室中: 一个明亮的房间内，那家伙坐在椅子上。
        两位研究人员面对着它，它看起来情绪平稳，十分配合研究员。房间墙上有一面黑色的窗户，墙壁是柔软的质地组成。`,pic4:`文件侧拍: 名字-Bennet 
        身高-2米 
        体重-160公斤 
        物种-不清楚 
        外表特征-毛茸茸的浅色毛皮、左右脸上各两支触手、红色的鼻子。 
        身体重要构造与人类相似 情绪在夜晚时特别不稳定，需留意其强大力量，具备攻击危险 
        目前观测到的情绪有三种...[未通过安全审核]`,credit:"工作人员"},spanish:{lvl1:"Capítulo 1",lvl2:"Capítulo 2",volume:"Volumen",instruct_qz:"¿Te gustaría ver las instrucciones?",play:"Reproducir",pass:"Saltar",loading:"CARGANDO",clickStart:"Haga clic para comenzar",backMenu:"Volver al menú",stillWork:"Llegará en Septiembre de 2024",pic1:`Sesión de foto de identificación: 
        Una criatura peluda está siendo fotografiada para su identificación.
        Parece algo nerviosa, mostrándose un poco desconocida con el proceso.
        El fondo es un telón azul estándar.`,pic2:`Incidente nocturno: La criatura sostiene una silla defensivamente, pareciendo sorprendida.
        Dos miembros del personal están tratando de calmarla. El fondo es una habitación azul,
        con ventanas en la pared que indican que es de noche.`,pic3:`En el laboratorio: En una habitación luminosa, la criatura está sentada en una silla.
        Dos investigadores la están observando, y parece tranquila, cooperando bien con los investigadores.
        Hay una ventana negra en la pared de la habitación, que tiene paredes de textura suave.`,pic4:`Instantánea del documento:
        Nombre: Bennet
        Altura: 2 metros
        Peso: 160 kilogramos
        Especie: Desconocida
        Características físicas: Pelaje peludo de color claro, dos tentáculos a cada lado de la cara, nariz roja.
        Estructuras corporales importantes se asemejan a las de los humanos.
        Emocionalmente inestable por la noche, se recomienda precaución debido a su fuerza y potencial agresivo.
        Actualmente se observan tres tipos de emociones... [No ha pasado el control de seguridad]`,credit:"Créditos"}},Ne=e=>{switch(a.language=e,mt.textContent=p("lvl1"),_t.textContent=p("lvl2"),vt.textContent=p("volume"),he.textContent=p("instruct_qz"),We.textContent=p("play"),be.textContent=p("pass"),K.textContent=p("loading"),Ge.textContent=p("clickStart"),D.textContent=p("backMenu"),ft.textContent=p("stillWork"),Xt.textContent=p("pic1"),Rt.textContent=p("pic2"),Ot.textContent=p("pic3"),Gt.textContent=p("pic4"),ht.textContent=p("credit"),a.language){case"English":return document.body.lang="en";case"Tradition-CN":return document.body.lang="cnt";case"Simplified-CN":return document.body.lang="cns";case"Spanish":return document.body.lang="es";default:document.body.lang="en";break}},p=e=>{switch(a.language){case"English":return V.english[e];case"Tradition-CN":return V.traditional[e];case"Simplified-CN":return V.simplified[e];case"Spanish":return V.spanish[e];default:return V.english[e]}},c=(e,t,o,r,s,d,n,G)=>{const N=document.createElement("div");return N.id=e,t&&(N.className=t),o&&(N.textContent=o),r&&N.addEventListener("click",r),s&&N.addEventListener("mouseover",s),d&&N.addEventListener("mouseleave",d),(n||G)&&n&&N.appendChild(n),N};let S=0;const yi=(e,t,o,r)=>{let s=null;const d=n=>{s||(s=n);const G=Math.min((n-s)/r,1);Math.floor(G*(o-t)+t)>0?e.innerHTML=Math.floor(G*(o-t)+t):e.innerHTML=0,G<1&&window.requestAnimationFrame(d)};window.requestAnimationFrame(d)},b=c("endSceneDiv"),ie=c("challengeText"),st=c("scoreNum"),F=c("end_lock_1",0,0,e=>{an(e,1)}),we=c("end_lock_2",0,0,e=>{an(e,2)}),le=c("end_btns"),f=c("disk_open"),Ye=c("disk_name",0),Ze=c("disk_Xbtn",0,"X"),Xt=c(0,"pic_text"),Rt=c(0,"pic_text"),Ot=c(0,"pic_text"),Gt=c(0,"pic_text"),h=c("pic_text_detect",0,0,0,()=>{on()},()=>{Ci()}),Vt=c("diskPic_1","diskPic",0,()=>{x(1)}),jt=c("diskPic_2","diskPic",0,()=>{x(2)}),Yt=c("diskPic_3","diskPic",0,()=>{x(3)}),Zt=c("diskPic_4","diskPic",0,()=>{x(4)}),Jt=c("diskPic_5","diskPic",0,()=>{x(5)}),Kt=c("diskPic_6","diskPic",0,()=>{x(6)}),Ut=c("diskPic_7","diskPic",0,()=>{x(7)}),Qt=c("diskPic_8","diskPic",0,()=>{x(8)}),Je=c("diskPic_9","diskPic",0),ye=c("diskPic_Xbtn",0,"X"),w=c("end_btnText"),D=c("backtomenu_btn",0,0,()=>{Mi()}),ki=c("retry_iconBtn_1","end_btn",0,()=>{xi()},()=>{Ke({english:"retry",traditional:"再挑戰",simplified:"再挑战",spanish:"reintentar"})}),en=c("disk_iconBtn_1","end_btn",0,0,()=>{Ke({english:"picture: check-in record",traditional:"照片: 報到紀錄",simplified:"照片: 报到记录",spanish:"imagen: registro de entrada"})},0,F),tn=c("disk_iconBtn_2","end_btn",0,0,()=>{Ke({english:"data: background investigation",traditional:"資料: 背景調查",simplified:"资料: 背景调查",spanish:"datos: investigación de antecedentes"})},0,we),bi=e=>(b.innerHTML="",le.innerHTML="",F.style.opacity=1,we.style.opacity=1,F.className="end_lock",we.className="end_lock",S=0,sn(),nn(),e.appendChild(b)),nn=()=>{switch(w.textContent=$({english:"Encrypt files",traditional:"加密檔案",simplified:"加密文件",spanish:"Encriptar archivos"}),document.querySelectorAll(".pic_text"),a.language){case"English":return h.setAttribute("lang","en"),w.setAttribute("lang","en");case"Tradition-CN":return h.setAttribute("lang","cnt"),w.setAttribute("lang","cnt");case"Simplified-CN":return h.setAttribute("lang","cns"),w.setAttribute("lang","cns");case"Spanish":return h.setAttribute("lang","es"),w.setAttribute("lang","es");default:w.setAttribute("lang","en");break}},Ke=e=>{w.textContent=$(e),Ye.textContent=$(e),pe.currentTime=0,pe.play()},sn=()=>{if(le.append(ki,en,tn),i.win===!0)if(ie.textContent=$({english:"score",traditional:"分數",simplified:"分数",spanish:"puntuación"}),S===0)b.append(ie);else if(S===1){b.append(st,le,w,D),D.style.opacity=0,console.log(i.play_time*100,i.complete_request*10);let e=a.bonus_time-i.play_time*80;e<0&&(e=0),e+=i.complete_request*100,console.log(l),l.active<5&&(e+=a.bonus_value),l.hunger<5&&(e+=a.bonus_value),l.sanity>5&&(e+=a.bonus_value),l.active<3&&l.hunger<3&&l.sanity>7&&(e+=a.bonus_value_big),yi(st,0,e,2e3),e>=a.score_1&&e<a.score_2?(F.className="end_unlock",me.play()):e>a.score_2&&(F.className="end_unlock",we.className="end_unlock",me.play())}else S===2&&(D.style.opacity=1);else if(i.win===!1)ie.textContent=$({english:"lost connect",traditional:"訊號丟失",simplified:"信号丢失",spanish:"se perdió la conexión"}),S===0?b.append(ie):S===1?(b.append(le,w,D),D.style.opacity=0):S===2&&(D.style.opacity=1);else return;S+=1},an=(e,t)=>{e.target.parentElement.classList.add("end_lock_click"),t===1?w.textContent=$({english:`unlock for ${a.score_1} score`,traditional:`分數未達${a.score_1}`,simplified:`分数未达${a.score_1}`,spanish:`Desbloquear por ${a.score_1} puntos`}):t===2&&(w.textContent=$({english:`unlock for ${a.score_2} score`,traditional:`分數未達${a.score_2}`,simplified:`分数未达${a.score_2}`,spanish:`Desbloquear por ${a.score_2} puntos`})),setTimeout(()=>{e.target.parentElement.classList.remove("end_lock_click"),nn()},1e3),v.pause(),ue.currentTime=0,ue.play()};en.addEventListener("click",()=>{if(F.className==="end_lock")return;f.innerHTML="",f.append(Ye,Ze),f.append(Vt,jt,Yt,Zt),document.querySelectorAll(".diskPic").forEach(t=>{t.className="diskPic"}),b.appendChild(f),v.play()});tn.addEventListener("click",()=>{if(F.className==="end_lock")return;f.innerHTML="",f.append(Ye,Ze),f.append(Jt,Kt,Ut,Qt,Je),document.querySelectorAll(".diskPic").forEach(t=>{t.className="diskPic"}),b.appendChild(f),v.play()});Ze.addEventListener("click",()=>{b.removeChild(f),v.play()});let Ue=0;const x=e=>{const t=document.querySelector(`#diskPic_${e}`);t&&(t.className=`diskPick_click disk_data_${e}`,f.append(ye,h),Ue=e,on(),X.currentTime=0,X.play())},on=()=>{switch(h.innerHTML="",Ue){case 1:h.appendChild(Xt);break;case 2:h.appendChild(Rt);break;case 3:h.appendChild(Ot);break;case 4:h.appendChild(Gt);break;default:return}},Ci=()=>{h.innerHTML=""};ye.addEventListener("click",()=>{f.removeChild(ye),f.removeChild(h),Vt.className="diskPic",jt.className="diskPic",Yt.className="diskPic",Zt.className="diskPic",Jt.className="diskPic",Kt.className="diskPic",Ut.className="diskPic",Qt.className="diskPic",Je.className="diskPic",Ue=0,X.currentTime=0,X.play()});Je.addEventListener("click",()=>{const e=document.querySelector("#disk2_video");e.play(),e.style.display="block",e.addEventListener("ended",()=>{e.style.display="none",ye.click()})});window.addEventListener("animationend",e=>{e.animationName==="showEndScene_anim"&&sn()});const g=(e,t,o,r,s,d)=>{const n=document.createElement("div");return n.id=e,n},P=g("gameArea"),Li=g("gameFilter"),at=g("doorArea"),ot=g("computerArea"),Ni=g("computerShadow"),Si=g("tableArea"),Ei=g("buttonsArea");g("rulesArea");g("lightArea");g("fileArea");const ct=g("windowArea"),Ti=g("windowShadow"),Qe=e=>{P.innerHTML="",lt(),li(ot),di(Ei),jn(ct),ii(at),P.style.transform="translateX(0px)",P.append(at,Ni,ot,Ti,ct,Si),P.append(Gn,Li),e.append(P),ke(e)};window.addEventListener("animationend",e=>{e.animationName==="bennet_anim"||e.animationName==="staff_back_anim"?et():e.animationName==="end_screen_anim"&&(Bn(),P.innerHTML="",bi(P))});const _=document.querySelector("#app");lt();fi(_);document.querySelectorAll(".langBtn").forEach(e=>{e.addEventListener("click",()=>{_.innerHTML="",ke(_),Qe(_),v.play()})});be.addEventListener("click",()=>{_.innerHTML="",ke(_),Qe(_),ui(_),v.play()});const Mi=()=>{_.removeChild(gameArea),ke(_),Wn(_),v.play()},xi=()=>{_.removeChild(gameArea),Qe(_),v.play()};window.addEventListener("animationend",()=>{event.animationName==="show_logo"?logo_div&&_.removeChild(logo_div):event.animationName==="showtrans_anim"&&_.removeChild(transDiv)});
