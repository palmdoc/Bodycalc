if(!navigator.cookieEnabled)NSB.MsgBox('Please turn cookies on.');(function(){var all=document.getElementsByTagName('*');for(var i=0;i<all.length;i++)if(typeof all[i].id!='undefined'&&typeof window[all[i].id]=='undefined')window[all[i].id]=all[i];})()
window.addEventListener('load',function(){frmMain.style.display='block';google_ad_client='ca-mb-pub-9410114013600884';google_ad_slot='0977340468';google_ad_width='100%';google_ad_height='50';NSB.addDisableProperty(btnHeight);NSB.addProperties(btnHeight);if(typeof(selHeight)=='undefined')selHeight={id:'selHeight'};NSB.Select_jqm_init(selHeight,'','');if(typeof txtHeight==='undefined')txtHeight=document.getElementById('txtHeight')
txtHeight.addEventListener('touchmove',function(e){e.stopPropagation();},false);NSB.addProperties(txtHeight,$('#txtHeight_wrapper > div')[0]);NSB.addDisableProperty(txtHeight)
NSB.addDisableProperty(btnWeight);NSB.addProperties(btnWeight);NSB.addProperties(hdrMain);NSB.addDisableProperty(hdrMain);if(typeof(hdrMain.onclick)=='function'){if(typeof(hdrMain_left)!='undefined')hdrMain_left.onclick=function(){hdrMain.onclick(hdrMain_left.getAttribute('nsbvalue'))};if(typeof(hdrMain_right)!='undefined')hdrMain_right.onclick=function(){hdrMain.onclick(hdrMain_right.getAttribute('nsbvalue'))}};if(typeof txtWeight==='undefined')txtWeight=document.getElementById('txtWeight')
txtWeight.addEventListener('touchmove',function(e){e.stopPropagation();},false);NSB.addProperties(txtWeight,$('#txtWeight_wrapper > div')[0]);NSB.addDisableProperty(txtWeight)
if(typeof(selWeight)=='undefined')selWeight={id:'selWeight'};NSB.Select_jqm_init(selWeight,'','');NSB.addDisableProperty(btnGo);NSB.addProperties(btnGo);NSB.addDisableProperty(btnClear);NSB.addProperties(btnClear);frmMain.style.display='none';},false);frmMain.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmMain);btnHeight.onclick=function(){savethefunction_rvar="";NSB.InputBox(btnHeightdone,"Numeric Input Only","Enter Height");return savethefunction_rvar;}
function btnHeightdone(result,value){if(result==1&&IsNumeric(value)){txtHeight.value=value;}}
txtHeight.onclick=function(){savethefunction_rvar="";selectedinput=1;txtKeypad.value="";nsbDOMAttr(frmMain,'style.display',"none");nsbDOMAttr(frmKeypad,'style.display',"block");return savethefunction_rvar;}
btnWeight.onclick=function(){savethefunction_rvar="";NSB.InputBox(btnWeightdone,"Numeric Input Only","Enter Weight");return savethefunction_rvar;}
function btnWeightdone(result,value){if(result==1&&IsNumeric(value)){txtWeight.value=value;}}
txtWeight.onclick=function(){savethefunction_rvar="";selectedinput=2;txtKeypad.value="";nsbDOMAttr(frmMain,'style.display',"none");nsbDOMAttr(frmKeypad,'style.display',"block");return savethefunction_rvar;}
btnGo.onclick=function(){savethefunction_rvar="";if(txtHeight.value==0||txtWeight.value==0){_msgbox_confirm("Please fill in all values");return savethefunction_rvar;}
localStorage.lastheight=txtHeight.value;localStorage.lastweight=txtWeight.value;Height=txtHeight.value*selHeight.selectedValue();Weight=txtWeight.value*selWeight.selectedValue();function bsacalcdubois(Height,Weight){bsavalue=0.007184*Math.pow(Height,0.725)*Math.pow(Weight,0.425);bsavalue=Math.round(bsavalue*100)/100;return bsavalue;}
function bsacalchaycock(height,weight){bsavalue=0.024265*Math.pow(Height,0.3964)*Math.pow(Weight,0.5378);bsavalue=Math.round(bsavalue*100)/100;return bsavalue;}
function bsacalcmosteller(height,weight){bsavalue=Math.sqrt((Weight*Height)/3600);bsavalue=Math.round(bsavalue*100)/100;return bsavalue;}
bsadubois=bsacalcdubois(Height,Weight);bsahaycock=bsacalchaycock(Height,Weight);bsamosteller=bsacalcmosteller(Height,Weight);switch(True){case((selBSA.selectedItem())=="Dubois"):txtBSA.value=bsadubois;break;case((selBSA.selectedItem())=="Haycock"):txtBSA.value=bsahaycock;break;case((selBSA.selectedItem())=="Mosteller"):txtBSA.value=bsamosteller;}
bmi=Weight/((Height/100)*(Height/100));bmi=Math.round(bmi*100)/100;if(bmi<16)
{interp="Severely Underweight";}
if(bmi>=16&&bmi<18.5)
{interp="Underweight";}
if(bmi>=18.5&&bmi<25)
{interp="This is Normal";}
if(bmi>=25&&bmi<30)
{interp="Overweight";}
if(bmi>=30&&bmi<35)
{interp="Obese Class I";}
if(bmi>=35&&bmi<40)
{interp="Obese Class II";}
if(bmi>=40)
{interp="Obese Class III";}
txtBMI.value=bmi;ibwheight=Height/2.54;ibwmale=51.65+1.85*(ibwheight-60);ibwfemale=48.67+1.65*(ibwheight-60);ibwmale=Math.round(ibwmale);ibwfemale=Math.round(ibwfemale);if(radSex.getValue(1)==True){txtIBW.value=ibwmale;}else{txtIBW.value=ibwfemale;}
if(ibwheight<60){txtIBW.value="N/A";}
nsbDOMAttr(frmMain,'style.display',"none");nsbDOMAttr(frmResult,'style.display',"block");return savethefunction_rvar;}
btnClear.onclick=function(){savethefunction_rvar="";txtHeight.value="";txtWeight.value="";return savethefunction_rvar;}
hdrMain.onclick=function(choice){savethefunction_rvar="";if(choice=="Pref"){nsbDOMAttr(frmMain,'style.display',"none");nsbDOMAttr(frmPref,'style.display',"block");}
if(choice=="About"){HTMLAbout.refresh();nsbDOMAttr(frmMain,'style.display',"none");nsbDOMAttr(frmAbout,'style.display',"block");}
return savethefunction_rvar;}
window.addEventListener('load',function(){frmKeypad.style.display='block';if(typeof txtKeypad==='undefined')txtKeypad=document.getElementById('txtKeypad')
txtKeypad.addEventListener('touchmove',function(e){e.stopPropagation();},false);NSB.addProperties(txtKeypad,$('#txtKeypad_wrapper > div')[0]);NSB.addDisableProperty(txtKeypad)
NSB.addDisableProperty(btn1);NSB.addProperties(btn1);NSB.addDisableProperty(btn2);NSB.addProperties(btn2);NSB.addDisableProperty(btn3);NSB.addProperties(btn3);NSB.addDisableProperty(btn4);NSB.addProperties(btn4);NSB.addDisableProperty(btn5);NSB.addProperties(btn5);NSB.addDisableProperty(btn6);NSB.addProperties(btn6);NSB.addDisableProperty(btn7);NSB.addProperties(btn7);NSB.addDisableProperty(btn8);NSB.addProperties(btn8);NSB.addDisableProperty(btn9);NSB.addProperties(btn9);NSB.addDisableProperty(btnClr);NSB.addProperties(btnClr);NSB.addDisableProperty(btnDot);NSB.addProperties(btnDot);NSB.addDisableProperty(btn0);NSB.addProperties(btn0);NSB.addDisableProperty(btnEnter);NSB.addProperties(btnEnter);frmKeypad.style.display='none';},false);frmKeypad.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmKeypad);btn1.onclick=function(){savethefunction_rvar="";txtKeypad.value=txtKeypad.value+"1";return savethefunction_rvar;}
btn2.onclick=function(){savethefunction_rvar="";txtKeypad.value=txtKeypad.value+"2";return savethefunction_rvar;}
btn3.onclick=function(){savethefunction_rvar="";txtKeypad.value=txtKeypad.value+"3";return savethefunction_rvar;}
btn4.onclick=function(){savethefunction_rvar="";txtKeypad.value=txtKeypad.value+"4";return savethefunction_rvar;}
btn5.onclick=function(){savethefunction_rvar="";txtKeypad.value=txtKeypad.value+"5";return savethefunction_rvar;}
btn6.onclick=function(){savethefunction_rvar="";txtKeypad.value=txtKeypad.value+"6";return savethefunction_rvar;}
btn7.onclick=function(){savethefunction_rvar="";txtKeypad.value=txtKeypad.value+"7";return savethefunction_rvar;}
btn8.onclick=function(){savethefunction_rvar="";txtKeypad.value=txtKeypad.value+"8";return savethefunction_rvar;}
btn9.onclick=function(){savethefunction_rvar="";txtKeypad.value=txtKeypad.value+"9";return savethefunction_rvar;}
btn0.onclick=function(){savethefunction_rvar="";txtKeypad.value=txtKeypad.value+"0";return savethefunction_rvar;}
btnClr.onclick=function(){savethefunction_rvar="";txtKeypad.value="";return savethefunction_rvar;}
btnDot.onclick=function(){savethefunction_rvar="";txtKeypad.value=txtKeypad.value+".";return savethefunction_rvar;}
btnEnter.onclick=function(){savethefunction_rvar="";if(selectedinput==1&&txtKeypad.value!=""){txtHeight.value=parseFloat(txtKeypad.value);}
if(selectedinput==2&&txtKeypad.value!=""){txtWeight.value=parseFloat(txtKeypad.value);}
nsbDOMAttr(frmKeypad,'style.display',"none");nsbDOMAttr(frmMain,'style.display',"block");return savethefunction_rvar;}
window.addEventListener('load',function(){frmResult.style.display='block';NSB.addProperties(lblBSA);NSB.addProperties(lblBMI);NSB.addProperties(lblIBW);NSB.addProperties(hdrResults);NSB.addDisableProperty(hdrResults);if(typeof(hdrResults.onclick)=='function'){if(typeof(hdrResults_left)!='undefined')hdrResults_left.onclick=function(){hdrResults.onclick(hdrResults_left.getAttribute('nsbvalue'))};if(typeof(hdrResults_right)!='undefined')hdrResults_right.onclick=function(){hdrResults.onclick(hdrResults_right.getAttribute('nsbvalue'))}};if(typeof txtBSA==='undefined')txtBSA=document.getElementById('txtBSA')
txtBSA.addEventListener('touchmove',function(e){e.stopPropagation();},false);NSB.addProperties(txtBSA,$('#txtBSA_wrapper > div')[0]);NSB.addDisableProperty(txtBSA)
if(typeof(selBSA)=='undefined')selBSA={id:'selBSA'};NSB.Select_jqm_init(selBSA,'','');if(typeof txtBMI==='undefined')txtBMI=document.getElementById('txtBMI')
txtBMI.addEventListener('touchmove',function(e){e.stopPropagation();},false);NSB.addProperties(txtBMI,$('#txtBMI_wrapper > div')[0]);NSB.addDisableProperty(txtBMI)
NSB.addDisableProperty(btnInterp);NSB.addProperties(btnInterp);if(typeof txtIBW==='undefined')txtIBW=document.getElementById('txtIBW')
txtIBW.addEventListener('touchmove',function(e){e.stopPropagation();},false);NSB.addProperties(txtIBW,$('#txtIBW_wrapper > div')[0]);NSB.addDisableProperty(txtIBW)
NSB.RadioButton_jqm_init('radSex','131');if(0>0)$('#radSex .ui-btn-text').css('font-size','0px');NSB.defineProperty(radSex,'Height',{set:function(h){if('data-type=horizontal'==''){$('#radSex .ui-btn').css('height',h/radSex.getItemCount())}
else $('#radSex .ui-btn').css('height',h)},get:function(){return $('#radSex .ui-btn').css('height')}})
try{NSB.addProperties(radSex,undefined,true);}catch(e){console.log('error:'+e.message)}
frmResult.style.display='none';},false);frmResult.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmResult);hdrResults.onclick=function(choice){savethefunction_rvar="";if(choice=="Back"){nsbDOMAttr(frmResult,'style.display',"none");nsbDOMAttr(frmMain,'style.display',"block");}
if(choice=="Info"){nsbDOMAttr(frmResult,'style.display',"none");nsbDOMAttr(frmInfo,'style.display',"block");}
return savethefunction_rvar;}
selBSA.onchange=function(){savethefunction_rvar="";switch(True){case((selBSA.selectedItem())=="Dubois"):txtBSA.value=bsadubois;break;case((selBSA.selectedItem())=="Haycock"):txtBSA.value=bsahaycock;break;case((selBSA.selectedItem())=="Mosteller"):txtBSA.value=bsamosteller;}
return savethefunction_rvar;}
btnInterp.onclick=function(){savethefunction_rvar="";NSB.MsgBox(interp);return savethefunction_rvar;}
radSex.onchange=function(){savethefunction_rvar="";if(radSex.getValue(1)==True){txtIBW.value=ibwmale;}else{txtIBW.value=ibwfemale;}
if(ibwheight<60){txtIBW.value="N/A";}
return savethefunction_rvar;}
window.addEventListener('load',function(){frmPref.style.display='block';NSB.addProperties(lblUnits);NSB.addProperties(hdrPref);NSB.addDisableProperty(hdrPref);if(typeof(hdrPref.onclick)=='function'){if(typeof(hdrPref_left)!='undefined')hdrPref_left.onclick=function(){hdrPref.onclick(hdrPref_left.getAttribute('nsbvalue'))};if(typeof(hdrPref_right)!='undefined')hdrPref_right.onclick=function(){hdrPref.onclick(hdrPref_right.getAttribute('nsbvalue'))}};NSB.RadioButton_jqm_init('radUnits','122');if(0>0)$('#radUnits .ui-btn-text').css('font-size','0px');NSB.defineProperty(radUnits,'Height',{set:function(h){if('data-type=horizontal'==''){$('#radUnits .ui-btn').css('height',h/radUnits.getItemCount())}
else $('#radUnits .ui-btn').css('height',h)},get:function(){return $('#radUnits .ui-btn').css('height')}})
try{NSB.addProperties(radUnits,undefined,true);}catch(e){console.log('error:'+e.message)}
frmPref.style.display='none';},false);frmPref.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmPref);radUnits.onchange=function(){savethefunction_rvar="";if(radUnits.getValue(1)==True){localStorage.units="SI";selHeight.setIndex(0);selWeight.setIndex(0);}else{localStorage.units="US";selHeight.setIndex(1);selWeight.setIndex(1);}
return savethefunction_rvar;}
hdrPref.onclick=function(choice){savethefunction_rvar="";if(choice=="Back"){nsbDOMAttr(frmPref,'style.display',"none");nsbDOMAttr(frmMain,'style.display',"block");}
return savethefunction_rvar;}
window.addEventListener('load',function(){frmAbout.style.display='block';if(true){HTMLAbout_ref=new IScroll(HTMLAbout_scroller,{bounce:false,zoom:true,click:iScrollClick()});HTMLAbout.refresh=function(){setTimeout(HTMLAbout_ref.refresh(),100)}}
NSB.addProperties(HTMLAbout,HTMLAbout_scroller);NSB.addProperties(hdrHelp);NSB.addDisableProperty(hdrHelp);if(typeof(hdrHelp.onclick)=='function'){if(typeof(hdrHelp_left)!='undefined')hdrHelp_left.onclick=function(){hdrHelp.onclick(hdrHelp_left.getAttribute('nsbvalue'))};if(typeof(hdrHelp_right)!='undefined')hdrHelp_right.onclick=function(){hdrHelp.onclick(hdrHelp_right.getAttribute('nsbvalue'))}};NSB.List_jqm_init14('lsMenu','Email, Contact form',false,'320',false,false);lsMenu.refresh=function(){if(typeof lsMenu_ref!='undefined')setTimeout(NSB.refresh,100,lsMenu_ref)};NSB.addProperties(lsMenu);(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lsMenu_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
frmAbout.style.display='none';},false);frmAbout.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmAbout);hdrHelp.onclick=function(choice){savethefunction_rvar="";if(choice=="Back"){nsbDOMAttr(frmAbout,'style.display',"none");nsbDOMAttr(frmMain,'style.display',"block");}
return savethefunction_rvar;}
window.addEventListener('load',function(){frmInfo.style.display='block';if(true){HTMLInfo_ref=new IScroll(HTMLInfo_scroller,{bounce:false,zoom:true,click:iScrollClick()});HTMLInfo.refresh=function(){setTimeout(HTMLInfo_ref.refresh(),100)}}
NSB.addProperties(HTMLInfo,HTMLInfo_scroller);NSB.addProperties(hdrInfo);NSB.addDisableProperty(hdrInfo);if(typeof(hdrInfo.onclick)=='function'){if(typeof(hdrInfo_left)!='undefined')hdrInfo_left.onclick=function(){hdrInfo.onclick(hdrInfo_left.getAttribute('nsbvalue'))};if(typeof(hdrInfo_right)!='undefined')hdrInfo_right.onclick=function(){hdrInfo.onclick(hdrInfo_right.getAttribute('nsbvalue'))}};frmInfo.style.display='none';},false);frmInfo.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmInfo);hdrInfo.onclick=function(choice){savethefunction_rvar="";if(choice=="Back"){nsbDOMAttr(frmInfo,'style.display',"none");nsbDOMAttr(frmResult,'style.display',"block");}
return savethefunction_rvar;}
window.addEventListener('orientationchange',function(){window.scrollTo(0,0)});window.addEventListener('load',function(){browserWarningMessage('Please use Google Chrome, Apple Safari or another supported browser.');frmMain.style.display='block';Main();if(typeof(frmMain.onshow)=='function')frmMain.onshow();},false);var NSBCurrentForm=frmMain;var Height;var Weight;var Age;var Sex;var bsadubois;var bsahaycock;var bsamosteller;var bmi;var ibwheight;var interp;var ibwmale;var ibwfemale;var selectedinput;var trycount=0;var lstInnerHeight=0;var lstInnerWidth=0;function Main(){if(localStorage.lastheight!=undefined){txtHeight.value=localStorage.lastheight;}
if(localStorage.units!=undefined){switch(True){case((localStorage.units)=="SI"):radUnits.setValue(1,True);radUnits.setValue(2,False);selHeight.setIndex(0);selWeight.setIndex(0);break;case((localStorage.units)=="US"):radUnits.setValue(1,False);radUnits.setValue(2,True);selHeight.setIndex(1);selWeight.setIndex(1);}}
if(localStorage.lastweight!=undefined){txtWeight.value=localStorage.lastweight;}}