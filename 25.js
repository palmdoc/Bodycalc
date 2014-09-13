
frmResult.innerHTML=[  "<div id='lblBSA' class='graytitle' data-nsb-type=Label style='text-align:left; text-shadow:none; font-size:16px; font-family:helvetica; font-style:normal; font-weight:bold; color:black; background-color:transparent; border-style:;border-color:transparent;border-width:1px; ' >BSA (m2)</div>",
  "<div id='lblBMI' class='graytitle' data-nsb-type=Label style='text-align:left; text-shadow:none; font-size:16px; font-family:helvetica; font-style:normal; font-weight:bold; color:black; background-color:transparent; border-style:;border-color:transparent;border-width:1px; ' >BMI (kg/m2)</div>",
  "<div id='lblIBW' class='graytitle' data-nsb-type=Label style='text-align:left; text-shadow:none; font-size:16px; font-family:helvetica; font-style:normal; font-weight:bold; color:black; background-color:transparent; border-style:;border-color:transparent;border-width:1px; ' >IBW (kg)</div>",
  NSB.HeaderBar_jqm14('hdrResults', 'Results', 'Back', 'back', 'left', 'Info', 'info', 'right', ' style="" class=" "', '', ''),
  "<div id='txtBSA_wrapper'><input id='txtBSA' type='text' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength=32 step=any value='' placeholder='' data-nsb-type='TextBox_jqm'  class='ui-mini ui-btn-  ' readonly=\"readonly\"></div>",
  NSB.Select_jqm('selBSA', 'Dubois, Haycock, Mosteller', '1,2,3', 0, 1, '', '','', 'arrow-d', 'right', 'false', 'true', '', '', '', '', '','', ''),
  "<div id='txtBMI_wrapper'><input id='txtBMI' type='text' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength=32 step=any value='' placeholder='' data-nsb-type='TextBox_jqm'  class='ui-mini ui-btn-  ' readonly=\"readonly\"></div>",
  "<button id='btnInterp' class='ui-btn ui-mini  ui-btn-inline ui-icon-false ui-btn-icon-none  ' style='margin:0px; overflow:visible; font-size:16px; font-family:; font-style:; font-weight:; ;  ' data-nsb-type=Button_jqm>Interpretation</button>",
  "<div id='txtIBW_wrapper'><input id='txtIBW' type='text' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength=32 step=any value='' placeholder='' data-nsb-type='TextBox_jqm'  class='ui-mini ui-btn-  ' readonly=\"readonly\"></div>",
  NSB.RadioButton_jqm('radSex', '131', '&#9794;, &#9792;', '1', style="", 'data-type=horizontal ', '', ' ', '', 'left'),
  ].join('');
