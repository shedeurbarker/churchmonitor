//////////////////////////////////////////
function AdmGetThemes(objID, page)
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
        var all = "adm__auto.php?get=themes&&page=" + page;
        GetPageTwo(all, objID);
    }
}
//////////////////////////////////////////
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
////////////////////////////////////////