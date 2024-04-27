var xmlhttp;
//If, the activexobject is available, we must be using IE.
if (window.ActiveXObject)
{
xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
else
{
//Else, we can use the native Javascript handler.
xmlhttp = new XMLHttpRequest();
}
////////////////////////////////////////
function ShowLoad(objID)
{
document.getElementById(objID).innerHTML = 
"<div align='center'class='popalign2'><div style='margin-top:25%;'><img src='images/holdon.gif'border='0'/></div></div>";
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function GetPage(Page, objID)
{
ShowLoad(objID);
var obj = document.getElementById(objID);
xmlhttp.open("GET", Page);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.onreadystatechange = 
    function()
    {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
        obj.innerHTML = xmlhttp.responseText;
        }
	}
xmlhttp.send(null);
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function GetPageTwo(Page, objID)
{
document.getElementById(objID).innerHTML = "<img src='images/holdon.gif' border='0'/>";
var obj = document.getElementById(objID);
xmlhttp.open("GET", Page);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.onreadystatechange = 
    function()
    {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
        obj.innerHTML = xmlhttp.responseText;
        }
	}
xmlhttp.send(null);
}
//////////////////////////////////////////
function GetPageThree(Page, objID)
{
var obj = document.getElementById(objID);
xmlhttp.open("GET", Page);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.onreadystatechange = 
    function()
    {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
        obj.innerHTML = xmlhttp.responseText;
        }
	}
xmlhttp.send(null);
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function animateFade(lastTick, eid)
{
var curTick = new Date().getTime();
var elapsedTicks = curTick - lastTick;
var element = document.getElementById(eid);
if(element.FadeTimeLeft <= elapsedTicks)
    {
    element.style.opacity = element.FadeState == 1 ? '1' : '0';
    element.style.filter = 'alpha(opacity = ' + (element.FadeState == 1 ? '100' : '0') + ')';
    element.FadeState = element.FadeState == 1 ? 2 : -2;
    return;
    }
element.FadeTimeLeft -= elapsedTicks;
var newOpVal = element.FadeTimeLeft/TimeToFade;
if(element.FadeState == 1)
    newOpVal = 1 - newOpVal;
if(newOpVal < 0.3)
    {
    element.style.display='none';
    document.getElementById(eid).style.display='none';
    document.getElementById(eid).style.display='hidden';
    document.getElementById("popcover").innerHTML = "";
    element.innerHTML = "";
    exit;
	}
element.style.opacity = newOpVal;
element.style.filter = 'alpha(opacity = ' + (newOpVal*100) + ')';
setTimeout("animateFade(" + curTick + ",'" + eid + "')", 33);
}

var TimeToFade = 900.0;
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function fade(eid)
{
var element = document.getElementById(eid);
if(element == null)
    return;
if(element.FadeState == null)
    {
    if(element.style.opacity == null || element.style.opacity == '' || element.style.opacity == '1')
        {
        element.FadeState = 2;
        }
    else
        {
        element.FadeState = -2;
        }
    }
    if(element.FadeState == 1 || element.FadeState == -1)
    {
    element.FadeState = element.FadeState == 1 ? -1 : 1;
    element.FadeTimeLeft = TimeToFade - element.FadeTimeLeft;
    }
else
    {
    element.FadeState = element.FadeState == 2 ? -1 : 1;
    element.FadeTimeLeft = TimeToFade;
    setTimeout("animateFade(" + new Date().getTime() + ",'" + eid + "')", 33);
    }  
}

function showYearService(year, objID)
{
    document.getElementById(objID).innerHTML = "<form action='services.php' method='POST' style='margin-top:-10px' >" + 
    "<input type='text' name='year' value='" + year + "' style='border:1px solid #5F9DD6; width:103px; " + 
    "margin-bottom:0px; padding:10px; font-size:16px;' /></form>";
}

function showYear(year, objID, link)
{
    document.getElementById(objID).innerHTML = "<form action='"+ link + "' method='POST' class='yearchange'" + 
    " style='margin-top:-10px' ><input type='text' name='year' value='" + year + 
    "' style='border:1px solid #5F9DD6; width:103px; " +
    "margin-bottom:0px; padding:10px; font-size:16px;' /> " + 
    "<p /><input type='submit' value='Change' /></form>";
}

function showYear2(year, objID, memberID)
{
    document.getElementById(objID).innerHTML = "<form action='profile.php?view=member&&member_id=" + memberID + 
        "' method='POST'>" + 
    "<input type='text' name='year' value='" + year + "' style='border:1px solid #5F9DD6; width:103px; " + 
    " margin-bottom:0px; padding:10px; font-size:16px;' /></form>";
}

function showYearExpense(year, objID)
{
    document.getElementById(objID).innerHTML = "<form action='expenses.php' method='POST'>" + 
    "<input type='text' name='year' value='" + year + "'style='border:1px solid #5F9DD6; width:103px; " + 
    "margin-bottom:0px; padding:10px; font-size:16px;' /></form>";
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function CountSms(ThePage, Text, objID)
{
var smstext = document.getElementById(Text).value;
var smslength = smstext.length;
if(smslength < 161)
	{
	document.getElementById(ThePage).innerHTML = "Page: [1]";
	}
if(smslength > 160 && smslength < 307)
	{
	document.getElementById(ThePage).innerHTML = "Page: [2]";
	}
if(smslength > 306 && smslength < 460)
	{
	document.getElementById(ThePage).innerHTML = "Page: [3]";
	}
if(smslength > 459 )
	{
	document.getElementById(ThePage).innerHTML = "<span style='color:#FF440D;'>sms too long! sms will not be sent</span>";
	}
document.getElementById(objID).innerHTML = "count:&nbsp;" + smslength;
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function Flicker(objID, state)
{
    if(state == "1")
    {
        document.getElementById(objID).style.display='block';
        document.getElementById(objID).style.display='show';
    }
    else
    {
        document.getElementById(objID).style.display='none';
    }
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function check_shed()
{
    if(smsbox.schedule.checked)
	{
	document.getElementById("screenshed").style.display='block';
	}
	else
	{
	document.getElementById("screenshed").style.display='none';
	}
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function ToggleOn(ojbID)
{
//    document.getElementById(ojbID).style.display='block';
    document.getElementById(objID).style.display='show';
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function ToggleOff(ojbID)
{
    document.getElementById(objID).style.display='none';
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function SetTheSession(objID)
{
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var all = "calls.php?calls=settithe&&month=" + month + "&&year=" + year;
    GetPageThree(all, objID);
}
///////////////////////////
function SetTheSessionTwo(objID)
{
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var all = "calls.php?calls=setschool&&month=" + month + "&&year=" + year;
    GetPageThree(all, objID);
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function GetMembers(objID)
{
	var theMember = document.getElementById("theMember").value;
    if(theMember.length < 2)
    {
        theObject.style.visibility = "hidden";
    }
    else
    {
        theObject = document.getElementById("autocompletediv");
        theObject.style.visibility = "visible";
        theObject.style.border = "1px solid #C0C0C0";
        var posx = 0;
        var posy = 0;
        var all = "auto.php?get=member&&name=" + theMember;
        GetPageThree(all, objID);
    }
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function GetMergers(objID)
{
	var theMerge = document.getElementById("theMerge").value;
    var member_id = document.getElementById("member_id").value;
    var year = document.getElementById("year").value;
    if(theMerge.length < 2)
    {
        theObject.style.visibility = "hidden";
    }
    else
    {
        theObject = document.getElementById("theMergediv");
        theObject.style.visibility = "visible";
        theObject.style.border = "1px solid #C0C0C0";
        var posx = 0;
        var posy = 0;
        var all = "auto.php?get=mergers&&name=" + theMerge + "&&member_id=" + member_id + "&&year=" + year;
        GetPageThree(all, objID);
    }
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function GetThemes(objID)
{
    theObject = document.getElementById("auto");
    if(theObject.style.visibility == "visible")
    {
        theObject.style.visibility = "hidden";
    }
    else
    {
        theObject.style.visibility = "visible";
        theObject.style.border = "1px solid #C0C0C0";
        var all = "auto.php?get=themes";
        GetPageTwo(all, objID);
    }
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function Flash(objID, state)
{
    if(state == 1)
    {
        document.getElementById(objID).style.display='block';
        document.getElementById(objID).style.display='show';
    }
    else
    {
        document.getElementById(objID).style.display='none';
    }
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function Flash2(objID, state)
{
    if(state == 1)
    {
        document.getElementById(objID).style.display='show';
    }
    else
    {
        document.getElementById(objID).style.display='none';
    }
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function PrintPage(hide, show)
{
// hide panels
    document.getElementById("main_header").style.display='none';
    document.getElementById("bar").style.display='none';
    document.getElementById("leftpanel").style.display='none';
    document.getElementById("rightpanel").style.display='none';
    
    theObject1 = document.getElementById("body");
    theObject1.style.background = "#FFFFFF";
// whiten background
    theObject = document.getElementById("mainpanel");
    theObject.style.paddingTop='0px';
    theObject.style.background = "#FFFFFF";
    
    
// hide the area being clicked
    document.getElementById(hide).style.display='none';
// show the header of the page - ministry details
    document.getElementById(show).style.display='block';
    document.getElementById(show).style.display='show';
    print();
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function PrintPage2(hide, show)
{
// hide panels
    document.getElementById("main_header").style.display='none';
    document.getElementById("bar").style.display='none';
    document.getElementById("leftpanel").style.display='none';
    
    theObject1 = document.getElementById("body");
    theObject1.style.background = "#FFFFFF";
// whiten background
    theObject = document.getElementById("mainpanel");
    theObject.style.paddingTop='0px';
    theObject.style.background = "#FFFFFF";
    
    
// hide the area being clicked
    document.getElementById(hide).style.display='none';
// show the header of the page - ministry details
    document.getElementById(show).style.display='block';
    document.getElementById(show).style.display='show';
    print();
}
function LoadDate(state)
{
    if(state == "1")
        setCibulCalendar('datepicker1');
    else if(state == "2")
        setCibulCalendar('datepicker2');
    else if(state == "7")
    {
        setCibulCalendar('datepicker3');
        setCibulCalendar('datepicker4');
    }
    else if(state == "4")
        setCibulCalendar('datepicker4');
    else
    {
        setCibulCalendar('datepicker');
    }
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function AddPledger(Page, objID)
{
    ShowLoad(objID);
    var obj = document.getElementById(objID);
    xmlhttp.open("GET", Page);
    xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
        obj.innerHTML = xmlhttp.responseText;
        }
	}
xmlhttp.send(null);
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function ChangeYearly(objID)
{
    ShowLoad(objID);
    var obj = document.getElementById("yearly");
    if(obj.checked)
    {
        document.getElementById("yearlylabel").style.display='block';
        document.getElementById("yearlylabel").style.display='show';
        GetPageThree("calls.php?calls=yearly_givings&&yearly=1", objID);
    }
    else
    {
        document.getElementById("yearlylabel").style.display='none';
        document.getElementById("yearly");
        GetPageThree("calls.php?calls=yearly_givings&&yearly=0", objID);
    }
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function Switch(show, hide_one, hide_two)
{
    document.getElementById(show).style.display='block';
    document.getElementById(show).style.display='show';
    document.getElementById(hide_one).style.display='none';
    document.getElementById(hide_two).style.display='none';
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function SMSFlip(type)
{
    if(type == "load_num")
    {
        document.getElementById(type).style.display='block';
        document.getElementById(type).style.display='show';
// hide the others
        document.getElementById("load_dept").style.display='none';
        document.getElementById("load_house").style.display='none';
        document.getElementById("load_file").style.display='none';
    }
    if(type == "load_dept")
    {
        document.getElementById(type).style.display='block';
        document.getElementById(type).style.display='show';
// hide the others
        document.getElementById("load_num").style.display='none';
        document.getElementById("load_house").style.display='none';
        document.getElementById("load_file").style.display='none';
    }
    if(type == "load_house")
    {
        document.getElementById(type).style.display='block';
        document.getElementById(type).style.display='show';
// hide the others
        document.getElementById("load_num").style.display='none';
        document.getElementById("load_dept").style.display='none';
        document.getElementById("load_file").style.display='none';
    }
    if(type == "load_file")
    {
        document.getElementById(type).style.display='block';
        document.getElementById(type).style.display='show';
// hide the others
        document.getElementById("load_num").style.display='none';
        document.getElementById("load_house").style.display='none';
        document.getElementById("load_dept").style.display='none';
    }
    if(type == "show_more")
    {
        theObject = document.getElementById("show_more");
        if(theObject.style.visibility == "visible") {
            theObject.style.visibility = "hidden";
            document.getElementById("show_more").style.display='none';
            document.getElementById("show_holder").innerHTML = "View Details";
        }
        else {
            theObject.style.visibility = "visible";
            document.getElementById("show_more").style.display='block';
            document.getElementById("show_more").style.display='show';
            document.getElementById("show_holder").innerHTML = "Hide Details";
        }
    }
}

function JustHide(hide) {
    document.getElementById(hide).style.visibility='invisible';
    document.getElementById(hide).style.display='none';
}

function JustShow(show) {
    document.getElementById(show).style.display='block';
    document.getElementById(show).style.visibility='visible';
    document.getElementById(show).style.display='show';
};