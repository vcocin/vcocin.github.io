var FC_WebFolder = '';
var FC_TableCssModule = '2';

function right(e) {
    if (navigator.appName == 'Netscape' &&
(e.which == 3 || e.which == 2))
        return false;
    else if (navigator.appName == 'Microsoft Internet Explorer' &&
(event.button == 2 || event.button == 3)) {
        var cc = '' + window.location;
        //return false;
        if (cc.indexOf('VM') == -1 && cc.indexOf('vm') == -1 && cc.indexOf('test') == -1 && cc.indexOf('172') == -1) { return false; }
    }
    return true;
}

if (document.layers) window.captureEvents(Event.MOUSEDOWN);
window.onmousedown = right;

document.oncontextmenu = noshowmenu;
function noshowmenu() {
    var cc = '' + window.location;
    //return false;
    if (cc.indexOf('VM') == -1 && cc.indexOf('vm') == -1 && cc.indexOf('test') == -1 && cc.indexOf('172') == -1) { return false; }
}

//去除左邊空白;
function lTrim(str) {
    if (typeof (str) != 'undefined') {
        if (str.charAt(0) == " ") {
            str = str.slice(1);
            str = lTrim(str);
        }
        return str;
    }
}

//去除右邊空白;
function rTrim(str) {
    var iLength;
    if (typeof (str) != 'undefined') {
        iLength = str.length;

        if (str.charAt(iLength - 1) == " ") {
            str = str.slice(0, iLength - 1);
            str = rTrim(str);
        }
        return str;
    }

}

//去除兩邊空白;
function trim(str) {
    return lTrim(rTrim(str));
}
//列印;
function WinPrinter() { window.print(); }
//checkBox 全選;
function AutocheckAll(field) {

    if (field.checked) {
        field.checked = false;
        for (i = 0; i < field.length; i++) {
            field[i].checked = false;
        }
    } else {
        field.checked = true;
        for (i = 0; i < field.length; i++) {
            field[i].checked = true;
        }

    }

}
//checkBox 全選;
function checkAll(field) {


    field.checked = true;
    for (i = 0; i < field.length; i++) {
        field[i].checked = true;
    }



}

function SelectAllCheckboxes(spanChk) {
    elm = document.forms[0];
    for (i = 0; i < elm.length; i++) {
        if (elm[i].type == "checkbox" && elm[i].id != spanChk.id) {
            if (elm.elements[i].checked != spanChk.checked)
                elm.elements[i].click();
        }
    }
}


//checkBox 全不選;
function uncheckAll(field) {
    field.checked = false;
    for (i = 0; i < field.length; i++)
        field[i].checked = false;
}

function checkbox(TxnID) {
    if (typeof (TxnID.checked) == "undefined") {
        var count = 0;
        for (i = 0; i < TxnID.length; i++) {
            if (jQuery(TxnID[i]).is(":visible")) {
                if (TxnID[i].checked == true && TxnID[i].disabled == false) {
                    count++;
                }
            }
        }
        if (count <= 0) {
            return false;
        }
        else {
            return true;
        }
    } else {
        if (!TxnID.checked) {
            return false;
        } else {
            return true;
        }
    }

}
function openwin(p_Url, p_Name, p_Scroll, p_Height, p_Width, p_Top, p_Left) {
    OrderWin = window.open(p_Url, p_Name, "toolbar=no,directories=no,menubar=no,scrollbars=" + p_Scroll + ",height=" + p_Height + ",width=" + p_Width + ",top=" + p_Top + ",left=" + p_Left);
}
function calendar(t) {
    sPath = FC_WebFolder + "include/calendar.htm";
    strFeatures = "dialogWidth=206px;dialogHeight=228px;center=yes;help=no;status: No";
    st = t.value;
    if (st == "")
        st = new Date();


    sDate = showModalDialog(sPath, st, strFeatures);
    t.value = formatDate(sDate);
}
function PF_WindowOpen(sURL, lWidth, lHeight) {
    var win = null;
    var winl = (screen.width - lWidth) / 2;
    var wint = (screen.height - lHeight) / 2;
    if (winl < 0) winl = 0;
    if (wint < 0) wint = 0;
    var settings = 'height=' + lHeight + ',';
    settings += 'width=' + lWidth + ',';
    settings += 'top=' + wint + ',';
    settings += 'left=' + winl + ',';
    settings += 'scrollbars=1,resizable=1';
    var w = window.open(sURL, 'w', settings);
    w.focus();
    return w;

}

// ------------------------------;
// 日期檢核函數;
// ------------------------------;

function PF_IsDate(datestr) {
    var year, month, day;

    if (datestr.length == 5) {
        tmpary = datestr.split("/");
        year = '2000';
        month = tmpary[0];
        day = tmpary[1];
    } else {
        var pattern = /^\d{4}\/\d{1,2}\/\d{1,2}$/;
        var tmpary = new Array()
        if (!pattern.test(datestr)) return false;

        tmpary = datestr.split("/");
        year = tmpary[0];
        month = tmpary[1];
        day = tmpary[2];
    }
    if (month < 1 || month > 12 || day > 31 || day < 1) return false;

    if (month == 2 && day > 28) {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) { // 為閏年 
            if (day > 29) return false;
        }
        else {  // 非閏年 
            return false;
        }
    }
    if (day > 30 && ((month % 2) == Math.floor(month / 8))) return false;

    return true;
}

// ------------------------------;
// 數字檢核函數;
// ------------------------------;

function PF_IsNum(sString) {
    if (isNaN(sString)) {
        return false;
    }

    for (var i = 0; i < sString.length; i++) {
        if (sString.charCodeAt(i) < 48 || sString.charCodeAt(i) > 57) {
            return false;
        }
    }
    return true;
}
function PF_IsFloat(sString) {

    if (isNaN(sString)) {
        return false;
    }

    for (var i = 0; i < sString.length; i++) {
        if ((sString.charCodeAt(i) < 48 || sString.charCodeAt(i) > 57) && sString.charCodeAt(i) != 46) {
            return false;
        }
    }
    return true;
}
// ------------------------------;
// 英文字母檢核函數;
// ------------------------------;

function PF_IsLetter(sString) {
    for (var i = 0; i < sString.length; i++) {
        if (sString.charCodeAt(i) < 65 || sString.charCodeAt(i) > 90) {
            return false;
        }
    }
    return true;
}

// ------------------------------;
// 數字與英文字母檢核函數;
// ------------------------------;

function PF_IsChar(sString) {
    for (var i = 0; i < sString.length; i++) {

        if ((sString.charCodeAt(i) < 48 || sString.charCodeAt(i) > 57) && (sString.charCodeAt(i) < 65 || sString.charCodeAt(i) > 90)) {
            return false;
        }
    }
    return true;
}


function ClientEncrypt(oForm, sString, iKey) {
    var aElement = document.createElement('<INPUT type=hidden id=PwdLen name=PwdLen>');
    var iLength = sString.length;
    aElement.value = iLength;
    oForm.appendChild(aElement);

    return PF_LChar(sString ^ (iKey.substr(0, iLength)), iLength, '0');
}

//檢查空值;
function CheckNull(n, Str) {

    x = '' + trim(n)
    if (x == '') {
        alert(Str + '未填!');

        return false;
    }

}
function TransFromTWDate(sDate) {
    var iTemp;
    iTemp = sDate.indexOf('/');
    return Number(sDate.substr(0, iTemp)) + 1911 + sDate.substr(iTemp);
}

function TransToTWDate(sDate) {
    iDay = sDate.getDate();
    iMon = sDate.getMonth() + 1;
    iYea = sDate.getFullYear();
    if (iDay < 10) iDay = '0' + iDay;
    if (iMon < 10) iMon = '0' + iMon;

    return iYea + '/' + iMon + '/' + iDay;
}



function formatDate(sDate) {
    var sScrap = '';
    var dScrap = new Date(sDate);
    if (dScrap == 'NaN') return sScrap;

    return TransToTWDate(dScrap);
}

function PF_IsNull(Str) {
    x = '' + trim(Str)

    if (x == '')
    { return false; }
    else { return true; }
}
// ------------------------------;
// EMail檢核函數;
// ------------------------------;

function PF_VerifyEMail(strEMail) {
    var charCanUse = '-.0123456789@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
    var intIndex = strEMail.indexOf('@');
    if (strEMail.length < 5) {
        return false;
    }

    if (intIndex < 1) {
        return false;
    }

    if (intIndex != strEMail.lastIndexOf('@')) {
        return false;
    }

    if (strEMail.charAt(intIndex - 1) == '.') {
        return false;
    }

    var strTemp = strEMail.substr(intIndex + 1);
    if (strTemp.indexOf('.') < 1) {
        return false;
    }

    if (strTemp.indexOf('..') != -1) {
        return false;
    }

    var i;
    for (i = 0; i < strEMail.length; i++) {
        if (charCanUse.indexOf(strEMail.charAt(i)) == -1) {
            return false;
        }
    }
    return true;
}



//鎖右鍵;
//document.oncontextmenu=eventfalse;
//鎖左鍵;
//document.onselectstart=eventfalse;
function eventfalse() {
    window.event.returnValue = false;
}

//檢查生日年月日;
function IsLeapyear(Year) {

    if ((Year % 4 == 0) && (Year % 100 != 0)
          || (Year % 400 == 0))
        return true;
    else
        return false;

}

function PF_BirthDay(Year, Month, Day) {
    if (Month > 12)
        return false;
    var lDay = 0
    MonthArray = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
    lDay = MonthArray[Month - 1]
    if (Month == 2 && IsLeapyear(Year))
        lDay = lDay + 1
    if (Day > lDay) {
        return false;
    }
    else
        return true;
}

// ------------------------------
// 檢查UID
// 檢查國民身份證編號、營利事業統一編號、護照號碼
// ------------------------------

function PF_IsUid(strUid) {
    if (strUid.length < 8 || strUid.length == 9) {
        return false;
    }

    if (strUid.length == 8) {
        if (!PF_CheckBAN(strUid)) {
            return false;
        }
    }
    else {
        if (strUid.length == 10) {
            if (!PF_CheckID(strUid)) {
                return false;
            }
        }
        else {
            if (PF_IsLetter(strUid.charAt(0))) {
                if (strUid.charAt(10) != '3') {
                    return false;
                }

                if (!PF_CheckID(strUid.substr(0, 10))) {
                    return false;
                }
            }
            else {
                if (!PF_IsNum(strUid.substr(0, 8))) {
                    strReason = '護照號碼第一碼至第八碼必須全部為數字';
                    return false;
                }

                if (!PF_IsLetter(strUid.substr(8, 2))) {
                    strReason = '護照號碼第九碼和第十碼必須是英文字母';
                    return false;
                }

                if (!PF_IsNum(strUid.charAt(10))) {
                    strReason = '護照號碼最後一碼必須是數字';
                    return false;
                }
            }
        }
    }
    return true;
}

// ------------------------------
// 國民身份證編號驗證
// ------------------------------

function PF_CheckID(strUserID) {
    var intAreaNo;             //區域碼變數
    var intCheckSum;           //檢核碼變數
    var intCount;              //計數變數
    var strAreaCode;           //區域碼變數
    // var blnCheckID = false;    //設定起始值

    strUserID = strUserID.toUpperCase();   //轉換為大寫
    strAreaCode = strUserID.charAt(0);     //取得首碼字母

    //確定身份證有10碼
    if (strUserID.length != 10) {
        strReason = '國民身份證號碼必須是十碼';
        return false;
    }

    //確定首碼在A-Z之間
    if (strAreaCode < 'A' || strAreaCode > 'Z') {
        strReason = '國民身份證號碼第一碼必須是英文字母';
        return false;
    }

    //確定2-10碼是數字
    for (intCount = 1; intCount < 10; intCount++) {
        if (strUserID.charAt(intCount) < '0' || strUserID.charAt(intCount) > '9') {
            strReason = '國民身份證號碼第二碼至第十碼必須全部為數字';
            return false;
        }
    }

    intAreaNo = 'ABCDEFGHJKLMNPQRSTUVXYWZIO'.indexOf(strAreaCode) + 10;           //取得英文字母對應編號，A->10,B->11等等
    strUserID = intAreaNo + strUserID.substr(1, 9);                                //組合字串
    intCheckSum = parseInt(strUserID.charAt(0)) + parseInt(strUserID.charAt(10)); //計算首尾二者之和

    //計算第二碼至第十碼之積
    for (intCount = 1; intCount < 10; intCount++) {
        intCheckSum += parseInt(strUserID.charAt(intCount)) * (10 - intCount);
    }

    //檢查是否為10整除
    if ((intCheckSum % 10) == 0) {
        return true;
    }
    else {
        strReason = '國民身份證號碼輸入錯誤，請再檢查';
        return false;
    }
}

// ------------------------------
// 營利事業統一編號邏輯檢查
// ------------------------------

function PF_CheckBAN(strBAN) {
    var intMod;                            //餘數變數
    var intSum;                            //合計數變數
    var intX = new Array(1, 2, 1, 2, 1, 2, 4, 1);
    var intY = new Array(7);
    // var blnCheckBAN = false;
    var intCount;                          //計數變數

    if (strBAN.length != 8) {
        strReason = '營利事業統一編號必須是八碼';
        return false;
    }

    for (intCount = 0; intCount < 8; intCount++) {
        if (strBAN.charAt(intCount) < '0' || strBAN.charAt(intCount) > '9') {
            strReason = '輸入之營利事業統一編號中有非數字';
            return false;
        }
    }

    for (intCount = 0; intCount < 8; intCount++) {
        intX[intCount] *= parseInt(strBAN.charAt(intCount));
    }

    intY[0] = parseInt(intX[1] / 10);
    intY[1] = intX[1] % 10;
    intY[2] = parseInt(intX[3] / 10);
    intY[3] = intX[3] % 10;
    intY[4] = parseInt(intX[5] / 10);
    intY[5] = intX[5] % 10;
    intY[6] = parseInt(intX[6] / 10);
    intY[7] = intX[6] % 10;

    intSum = intX[0] + intX[2] + intX[4] + intX[7] + intY[0] + intY[1] + intY[2] + intY[3] + intY[4] + intY[5] + intY[6] + intY[7];

    intMod = intSum % 10;

    if (strBAN.charAt(6) == '7') {
        if (intMod == 0) {
            return true;
        }
        else {
            intSum = intSum + 1;
            intMod = intSum % 10;
            if (intMod == 0) {
                return true;
            }
            else {
                strReason = '營利事業統一編號輸入錯誤，請再檢查';
                return false;
            }
        }
    }
    else {
        if (intMod == 0) {
            return true;
        }
        else {
            strReason = '營利事業統一編號輸入錯誤，請再檢查';
            return false;
        }
    }
}

function PF_escape(S) {
    return escape(S)
}


//remove-select
function RemoveOption(oSelect, oindex) {
    oSelect.remove(oindex);
}

//add-select
function AddOption(oSelect, selectText, selectValue) {
    var oOption = document.createElement("OPTION");
    oOption.text = selectText;
    oOption.value = selectValue;
    oOption.slected = true;
    oSelect.add(oOption);
}


// ------------------------------
// 刪除字串前後空白後傳回
// ------------------------------

function PF_Trim(sString) {
    return sString.replace(/(^\s*)|(\s*$)/g, '');
}
// ------------------------------
// 將字串後填滿字元至足夠長度後傳回
// ------------------------------

function PF_RChar(sString, iLen, sChar) {
    sString = sString.toString();
    var iStringLen = sString.length;

    for (var i = 0; i < iLen - iStringLen; i++) {
        sString = sString + sChar;
    }

    return sString;
}

//多層式下拉式(一對一)
function PJ_SelectThird(strconn, KeyValue1, str, Field1, Field2, KeyValue2) {

    if (KeyValue1 == '') { return false; }
    var FieldTitle;
    var url = FC_WebFolder + "PJ_SelectThird.aspx";
    var sendData = "strconn=" + strconn + "&str=" + str + "&Key=" + KeyValue1;
    jQuery(function ($) {

        if (Field1.options.length > 0) {
            FieldTitle = Field1.options[0].text;
        } else {
            FieldTitle = Field1.options.text;
        }

        jQuery.ajax({
            type: "POST",
            url: url,
            data: sendData,
            dataType: "xml",
            error: function (e) {
                alert('Error: url : ' + url + '?' + sendData + '\n' + e);
            },
            beforeSend: function () {
                while (Field1.hasChildNodes()) {
                    anode = Field1.firstChild;
                    Field1.removeChild(anode);
                }
                Field1.options[0] = new Option("Loading", '');

            },
            success: function (xml) {

                property = $(xml).find("Data > Record");

                while (Field1.hasChildNodes()) {
                    anode = Field1.firstChild;
                    Field1.removeChild(anode);
                }
                Field1.options[0] = new Option(FieldTitle, '');

                if (property.length > 0) {
                    for (var i = 0, x = 1; i < property.length; i++, x++) {
                        aname = $("資料", property[i]).text();
                        avalue = $("傳回值", property[i]).text();
                        Field1.options[x] = new Option();
                        Field1.options[x].value = avalue;
                        Field1.options[x].text = aname;
                        if (trim(avalue) == trim(KeyValue2)) {
                            Field1.options.selectedIndex = i + 1;
                        }
                    }
                }

                if (typeof (Field2) != "undefined" && Field2 != '') {
                    Field2.options.length = 0;
                    Field2.options[0] = new Option('請選擇', '');
                }
            }
        });
    });
}



//是否檢查,屬性,form.Kind,'文字'
function PF_FormMulti(S1, S2, Filed, Text) {
    var SS = '';
    var Pform;

    if (typeof (Filed) == "undefined") { return true; }

    if (S1 == '1') {

        switch (Filed.type) {
            case 'hidden':
                break;
            case 'text':
            case 'password':
            case 'textarea':
                if (PF_IsNull(Filed.value) == false) { alert(Text + ' 未填'); try { Filed.focus(); } catch (e) { }; return false; }
                break;
            case 'select-one':
                if (PF_IsNull(Filed.value) == false) { alert('請選擇' + Text); Filed.focus(); return false; }
                break;
            default:

                if (typeof (Filed.name) == "undefined") {

                    if (checkbox(Filed) == false) {
                        alert('請勾取其一' + Text);
                        for (i = 0; i < Filed.length; i++) {
                            if (Filed[i].disabled == false) {
                                Filed[i].focus(); break;
                            }
                        }
                        return false;
                    }
                    SS = "1";
                    break;
                } else {
                    Pform = Filed.form.attributes["name"].value;
                    if (typeof (eval(Pform + '.' + Filed.name + '_year')) != "undefined") {
                        if (eval(Pform + '.' + Filed.name + '_year').value == '') { alert('請選擇' + Text + '日期'); eval(Pform + '.' + Filed.name + '_year').focus(); return false; }
                        if (eval(Pform + '.' + Filed.name + '_month').value == '') { alert('請選擇' + Text + '日期'); eval(Pform + '.' + Filed.name + '_month').focus(); return false; }
                        if (eval(Pform + '.' + Filed.name + '_day').value == '') { alert('請選擇' + Text + '日期'); eval(Pform + '.' + Filed.name + '_day').focus(); return false; }
                        if (PF_IsDate(eval(Pform + '.' + Filed.name + '_year').value + '/' + eval(Pform + '.' + Filed.name + '_month').value + '/' + eval(Pform + '.' + Filed.name + '_day').value) == false) {
                            eval(Pform + '.' + Filed.name + '_day').focus();
                            alert(Text + '  日期輸入錯誤');
                            return false;
                        }
                    } else {
                        if (checkbox(Filed) == false) { alert('請勾取其一' + Text); Filed.focus(); return false; }
                        SS = "1";
                        break;
                    }
                }
        }

    }

    if (SS == '') {
        switch (S2) {
            case 'STOCK':
                if (Filed.value != "") {
                    var validchar01 = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                    Filed.value = Filed.value.toUpperCase();
                    if (Filed.value.length < 4) { alert(Text + "請輸入正確!"); Filed.focus(); return false; }
                    if (Filed.value.charAt(0) == ".") { alert(Text + "請輸入正確!"); Filed.focus(); return false; }                      //檢查是不是空值
                    if (Filed.value == "0") { alert(Text + "請輸入正確!"); Filed.focus(); return false; }                      //檢查是不是空值
                    for (var i = 0; i < Filed.value.length; i++) {
                        var ch = Filed.value.charAt(i);
                        if (validchar01.indexOf(ch) < 0) {
                            alert(Text + "請輸入正確!");
                            Filed.focus();
                            return false;
                        }
                    }
                }
                break;
            case 'INT':                 //數字 
                if (PF_IsNum(Filed.value) == false) { alert(Text + '  請輸入正確數字'); Filed.focus(); return false; }
                break;
            case 'FLOAT':                 //數字 
                if (PF_IsFloat(Filed.value) == false) { alert(Text + '  請輸入正確數字'); Filed.focus(); return false; }
                break;
            case 'DATE':                 //日期               
                if (Filed.type == "text") {
                    if (PF_IsNull(Filed.value) == true) { if (PF_IsDate(Filed.value) == false) { alert(Text + '  日期格式錯誤'); Filed.focus(); return false; } }
                } else {
                    Pform = Filed.form.attributes["name"].value;
                    if (PF_IsDate(eval(Pform + '.' + Filed.name + '_year').value + '/' + eval(Pform + '.' + Filed.name + '_month').value + '/' + eval(Pform + '.' + Filed.name + '_day').value) == false) {
                        alert(Text + '  日期輸入錯誤');
                        return false;
                    }
                }
                break;

            case 'MONTH':                 //日期               
                if (Filed.type == "text") {
                    if (PF_IsNum(Filed.value) == false) { alert(Text + ' 請輸入正確數字'); Filed.focus(); return false; }
                    if (CharInList(Filed.value, "0123456789") == true) {
                        if ((parseInt(Filed.value, 10) >= 13) || (parseInt(Filed.value, 10) <= 0)) {
                            alert(Text + "請輸入(1-12)");
                            Filed.focus();
                            return false;
                        }
                    }
                }
                break;

            case 'FUTINT':                 //期貨口數               
                if (Filed.type == "text") {
                    if (PF_IsNum(Filed.value) == false) { alert(Text + ' 請輸入正確數字'); Filed.focus(); return false; }
                    if (CharInList(Filed.value, "0123456789") == true) {
                        if ((parseInt(Filed.value, 10) > 100) || (parseInt(Filed.value, 10) <= 0)) {
                            alert(Text + "需介於 1 至 100");
                            Filed.focus();
                            return false;
                        }
                    }
                }
                break;

            case 'OPTINT':                 //選擇權口數,現貨整股
                if (Filed.type == "text") {
                    if (PF_IsNum(Filed.value) == false) { alert(Text + ' 請輸入正確數字'); Filed.focus(); return false; }
                    if (CharInList(Filed.value, "0123456789") == true) {
                        if ((parseInt(Filed.value, 10) > 499) || (parseInt(Filed.value, 10) <= 0)) {
                            alert(Text + "需介於 1 至 499");
                            Filed.focus();
                            return false;
                        }
                    }
                }
                break;
            case 'STKINT':                 //現貨零股口數
                if (Filed.type == "text") {
                    if (PF_IsNum(Filed.value) == false) { alert(Text + ' 請輸入正確數字'); Filed.focus(); return false; }
                    if (CharInList(Filed.value, "0123456789") == true) {
                        if ((parseInt(Filed.value, 10) > 999) || (parseInt(Filed.value, 10) <= 0)) {
                            alert(Text + "需介於 1 至 999");
                            Filed.focus();
                            return false;
                        }
                    }
                }
                break;
            case 'PRICE':                 //判斷股票,期貨價格(非組合單//用於價格  非組合單 不可負數與出現兩個.. 可為小數;
                if (Filed.value.charAt(0) == ".") { alert(Text + "請輸入正確!"); Filed.focus(); return false; };    //檢查第一位是不是.
                if (Filed.value == 0) { alert(Text + "請輸入正確!"); Filed.focus(); return false; }     //檢查是不是輸入0
                if (PF_IsFloat(Filed.value) == false) { alert(Text + '  請輸入正確數字'); Filed.focus(); return false; }

                break;

            case 'EMAIL':         //EMAIL
                if (PF_IsNull(Filed.value) == true) {
                    if (PF_VerifyEMail(Filed.value) == false) { alert(Text + ' 格式錯誤'); Filed.focus(); return false; }
                }
                break;
            case 'ACCOUNT': //帳號
                if (PF_FormMulti(S1, 'INT', Filed, Text) == false) { return false; }
                if (Filed.value != '') {
                    if (Filed.value.length > 7) { alert('對不起!' + Text + '長度小於7位.'); Filed.focus(); return false; }
                }
                break;
            case 'MOBILE':  //手機    
                if (PF_IsNull(Filed.value) == true) {
                    if (PF_IsNum(Filed.value) == false) { alert('請勿輸入非數字的 ' + Text); Filed.select(); return false; }
                    if (Filed.value.length != 10) { alert('對不起!' + Text + '長度必須等於十位.'); Filed.focus(); return false; }
                    if ((Filed.value).substring(0, 2) != '09') { alert('對不起!' + Text + ' 格式錯誤'); Filed.focus(); return false; }
                }
                break;
            case 'UID':              //身份証
                if (PF_IsNull(Filed.value) == true) {
                    strReason = '';
                    if (!PF_IsUid(Filed.value)) {
                        if (strReason == '') {
                            alert('請輸入正確的身分證或統編');
                            Filed.focus();
                        } else {
                            alert(strReason);
                            Filed.focus();
                        }
                        return false;
                    }
                }
                break;
        }


    }
}
//if (PF_FormMultiAll(form)==false){return false};
function PF_FormMultiAll(form) {
    var required = 0;
    var requiredstr = "";
    var requiredflag = "";
    var requiredtype = "";
    var controlname = "";
    var title = "";
    var fieldname = "";
    jQuery(form).find("[class^=required]").each(function (i) {

        if (controlname != jQuery(this).attr('name')) {
            fieldname = jQuery(this).attr('name');
            if (typeof (fieldname) != "undefined") {
                title = jQuery(".title_" + fieldname.replace('[]', '')).text();
                if (title == "") { title = jQuery(this).attr('title'); }
                if (jQuery(this).attr('class') == 'required') {
                    if (PF_FormMulti('1', 'TEXT', form.elements[fieldname], title) == false) { required = 1; return false; }
                } else {
                    requiredstr = jQuery(this).attr('class');
                    requiredstr = requiredstr.substring(requiredstr.indexOf('[') + 1, requiredstr.indexOf(']'));
                    if (requiredstr.indexOf(',') > -1) {
                        requiredflag = requiredstr.split(',')[0];
                        requiredtype = requiredstr.split(',')[1];
                        //判斷是否有關聯欄位要檢查
                        if (requiredstr.split(',').length >= 3) {
                            if (requiredstr.split(',')[2].indexOf('=') > 0) {
                                if (PF_SplitCompare(PF_GetFormValue(form.elements[requiredstr.split(',')[2].split('=')[0]]), requiredstr.split(',')[2].split('=')[1])) {
                                    requiredflag = 1;
                                }
                            } else {
                                if (form.elements[requiredstr.split(',')[2]].value != '') {
                                    requiredflag = 1;
                                }
                            }
                        }
                        if (requiredtype == 'DATE') {
                            if (fieldname.slice(-5) == '_year' && typeof (form.elements[fieldname.substring(0, fieldname.indexOf('_year'))]) != "undefined") {
                                if (PF_FormMulti(requiredflag, 'DATE', form.elements[fieldname.substring(0, fieldname.indexOf('_year'))], title) == false) { required = 1; return false; }
                            } 
                        }
                    } else {
                        requiredflag = 1;
                        requiredtype = requiredstr;
                    }
                    if (PF_FormMulti(requiredflag, requiredtype, form.elements[jQuery(this).attr('name')], title) == false) { required = 1; return false; }
                }
            }
        }
        if (typeof (jQuery(this).attr('name')) != "undefined") {
            controlname = jQuery(this).attr('name');
        }
    });
    if (required == 1) {
        return false;
    }
}
//取得控制項的值
function PF_GetFormValue(f) {
    var tmp = '';
    var cc = '';
    switch (f.type) {
        case 'text':
        case 'password':
        case 'textarea':
            tmp = f.value;
            break;
        case 'file':
            break;
        case 'select-one':
        case 'select-multiple':
            tmp = f.value;
            break;
        default:
            for (i = 0; i < f.length; i++) {
                if (f[i].checked == true) {
                    tmp += cc + f[i].value;
                    cc = ";";
                }
            }
            break;
    }

    return tmp;
}
//字串對比PF_SplitCompare(大量值,單一值)
function PF_SplitCompare(SplitValue, CompareValue) {
    var f = SplitValue.replace(';', ',');
    f = f.split(',');
    for (i = 0; i < f.length; i++) {
        if (f[i] == CompareValue) {
            return true;
            break;
        }
    }
    return false;
}

// ------------------------------
// 一筆
// ------------------------------
function move(fbox, tbox) {
    for (var i = 0; i < fbox.options.length; i++) {
        if (fbox.options[i].selected && fbox.options[i].value != "") {
            var no = new Option();
            no.value = fbox.options[i].value;
            no.text = fbox.options[i].text;

            tbox.options[tbox.options.length] = no;

            fbox.options[i].value = ""
            fbox.options[i].text = ""
        }
    }
    BumpUp(fbox);
}

function BumpUp(box) {
    for (var i = 0; i < box.options.length; i++) {
        if (box.options[i].value == "") {
            for (var j = i; j < box.options.length - 1; j++) {
                box.options[j].value = box.options[j + 1].value

                box.options[j].text = box.options[j + 1].text
            }
            var ln = i
            break
        }
    }
    if (ln < box.options.length) {
        box.options.length -= 1;
        BumpUp(box);
    }
}


// ------------------------------
// Mutiple Option 上移
// ------------------------------
function Moveup(dbox) {
    var theObjOptions = dbox.options;
    for (var i = 1; i < theObjOptions.length; i++) {
        if (theObjOptions[i].selected && !theObjOptions[i - 1].selected) {
            swapOption(theObjOptions[i], theObjOptions[i - 1]);
        }
    }
}

// ------------------------------
// Mutiple Option 下移
// ------------------------------
function Movedown(ebox) {
    var theObjOptions = ebox.options;
    for (var i = theObjOptions.length - 2; i > -1; i--) {
        if (theObjOptions[i].selected && !theObjOptions[i + 1].selected) {
            swapOption(theObjOptions[i], theObjOptions[i + 1]);
        }
    }
}

// Swap 
function swapOption(option1, option2) {
    var tempStr = option1.value;
    option1.value = option2.value;
    option2.value = tempStr;
    tempStr = option1.text;
    option1.text = option2.text;
    option2.text = tempStr;
    tempStr = option1.selected;
    option1.selected = option2.selected;
    option2.selected = tempStr;
}


function MM_preloadImages() { //v3.0
    var d = document; if (d.images) {
        if (!d.MM_p) d.MM_p = new Array();
        var i, j = d.MM_p.length, a = MM_preloadImages.arguments; for (i = 0; i < a.length; i++)
            if (a[i].indexOf("#") != 0) { d.MM_p[j] = new Image; d.MM_p[j++].src = a[i]; }
    }
}

function MM_swapImgRestore() { //v3.0
    var i, x, a = document.MM_sr; for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
}

function MM_findObj(n, d) { //v4.01
    var p, i, x; if (!d) d = document; if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
        d = parent.frames[n.substring(p + 1)].document; n = n.substring(0, p);
    }
    if (!(x = d[n]) && d.all) x = d.all[n]; for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
    for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document);
    if (!x && d.getElementById) x = d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
    var i, j = 0, x, a = MM_swapImage.arguments; document.MM_sr = new Array; for (i = 0; i < (a.length - 2); i += 3)
        if ((x = MM_findObj(a[i])) != null) { document.MM_sr[j++] = x; if (!x.oSrc) x.oSrc = x.src; x.src = a[i + 2]; }
}

function MM_showHideLayers() { //v6.0
    var i, p, v, obj, args = MM_showHideLayers.arguments;
    for (i = 0; i < (args.length - 2); i += 3) if ((obj = MM_findObj(args[i])) != null) {
        v = args[i + 2];
        if (obj.style) { obj = obj.style; v = (v == 'show') ? 'visible' : (v == 'hide') ? 'hidden' : v; }
        obj.visibility = v;
    }
}

function setCookie(name, value)		//cookies設置
{
    var argv = setCookie.arguments;
    var argc = setCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    if (expires != null) {
        var LargeExpDate = new Date();
        LargeExpDate.setTime(LargeExpDate.getTime() + (expires * 1000 * 3600 * 24));
    }
    document.cookie = name + "=" + escape(value) + ((expires == null) ? "" : ("; expires=" + LargeExpDate.toGMTString()));
}

function getCookie(Name)			//cookies讀取
{
    var search = Name + "="
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search)
        if (offset != -1) {
            offset += search.length
            end = document.cookie.indexOf(";", offset)
            if (end == -1) end = document.cookie.length
            return unescape(document.cookie.substring(offset, end))
        }
        else return ""
    }
}



// ------------------------------
// 檢查登入密碼
// ------------------------------



function ChkTxnPwd(strPwd) {
    strPwd = PF_Trim(strPwd);



    if (strPwd.length < 6) {
        window.alert('密碼不可少於六位！');
        return false;
    }



    var arrNum = strPwd.match(/\d/g);
    var arrLetter = strPwd.match(/[A-Za-z]/g);



    var intNum = (arrNum ? arrNum.length : 0);
    var intLetter = (arrLetter ? arrLetter.length : 0);



    if (strPwd.length != intNum + intLetter) {
        window.alert('密碼必須為英數字！');
        return false;
    }



    if (intNum == 0 || intLetter < 2) {
        window.alert('密碼必須英數字混合，且至少包含兩個大小寫英文字母！');
        return false;
    }



    return true;
}

function PF_SortoFormClassName() {
    if (jQuery("#lb_" + jQuery("#SortName").val()).length > 0) {
        if (trim(jQuery("#SortType").val()) == 'desc') {
            jQuery("#lb_" + jQuery("#SortName").val()).append('<img src=images/sort2.gif>');
        } else {
            jQuery("#lb_" + jQuery("#SortName").val()).append('<img src=images/sort1.gif>');
        }
    }
}

//將全部button Disabled
function PF_FieldDisabled() {

    $.blockUI({
        message: "Please wait...",
        css: {
            border: 'none',
            padding: '15px',
            backgroundColor: '#000',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            opacity: .5,
            fadeIn: 0,
            color: '#FFFFFF'
        }
    });
}
function PF_ColorBoxOpen(s, url, w, h) {
    if (s) {
        $(s).colorbox({ href: url, width: w, height: h, iframe: true });
    } else {
        parent.$.colorbox({ href: url, width: w, height: h, iframe: true });
    }
}
function PF_ColorBoxClose() {
    parent.$.fn.colorbox.close();
}
function PF_InputCss() {
    if (FC_TableCssModule == 1) {//左右				
        jQuery("#oFormTable tr td:odd").addClass("DataBgcolor1");
        jQuery("#oFormTable tr td:even").addClass("DataBgcolor2");
    } else {//上下
        if (jQuery(".TableBgcolor").length == 0) {
            if (jQuery("#oFormTable").length > 0) {
                jQuery("#oFormTable tr:odd:not(has(th))").each(function (i) {
                    jQuery(this).addClass("DataBgcolor1");
                });
                jQuery("#oFormTable tr:even:not(has(th))").each(function (i) {
                    jQuery(this).addClass("DataBgcolor2");
                });
            } else {
                jQuery("table.oFormTable tr:has(td)").mouseover(function () {
                    jQuery(this).addClass("DataBgcolor3");
                }).mouseout(function () {
                    jQuery(this).removeClass("DataBgcolor3");
                });
                $('table.oFormTable tr:has(td):odd').addClass('DataBgcolor1');
                $('table.oFormTable  tr:has(td):even').addClass('DataBgcolor2');
            }
        }
    }
    $('.oFormTable th:empty td:empty').html('&nbsp;');
}
//HTML載入就執行
jQuery(document).ready(function () {

    PF_InputCss();
    PF_SortoFormClassName();

    jQuery('.colorbox').each(function (i) {
        //Default Height and Width 
        var w = "90%"; var h = "90%";
        var wsize = $(this).attr('rel');
        if (typeof (wsize) != "undefined") {
            if (wsize.indexOf('x') > -1) {
                var xy = wsize.split('x');
                if (xy.length == 2) { w = xy[0]; h = xy[1]; }
            }
        }
        jQuery(this).click(function () {
            try {
                $.colorbox({ href: $(this).attr('href'), width: w, height: h, iframe: true, overlayClose: false, slideshow: false, current: '' }); return false;
            } catch (e) {
                parent.$.colorbox({ href: $(this).attr('href'), width: w, height: h, iframe: true, overlayClose: false, slideshow: false, current: '' }); return false;
            }
        });
    });
    //jQuery("input[rel='datepicker']").datepicker({ dateFormat: 'yy/mm/dd', showOn: 'both',
    //    buttonImageOnly: true, buttonImage: 'images/calendar.gif'
    //});
    $("#loading").hide();
});
//暫存密碼
function SavePassword(pwd) {
    if ((document.getElementById('JSavePassword').src).indexOf("luck.gif") > 0) {
        pwd = "";
        document.getElementById('JSavePassword').src = 'Images/luck2.gif';
    } else {
        document.getElementById('JSavePassword').src = 'Images/luck.gif';
    }

    jQuery.ajax({
        type: 'POST',
        url: 'SavePassword.ashx?',
        data: 'PWD=' + pwd,
        dataType: "text",
        async: false,
        error: function (e) {
            alert('Error: url : SavePassword.ashx?' + e);
        },
        success: function (text) {
            //alert(text);
        }
    });
} 