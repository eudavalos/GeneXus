gx.evt.autoSkip=!1;gx.define("rwdrecentlinks",!0,function(n){var t,i;this.ServerClass="rwdrecentlinks";this.PackageName="com.mystore";this.ServerFullClass="com.mystore.rwdrecentlinks";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV6FormCaption=gx.fn.getControlValue("vFORMCAPTION");this.AV7FormPgmName=gx.fn.getControlValue("vFORMPGMNAME");this.AV6FormCaption=gx.fn.getControlValue("vFORMCAPTION")};this.e11051_client=function(){return this.clearMessages(),gx.text.compare(gx.fn.getCtrlProperty("MAINTABLE","Class"),"RecentLinksMainTable")==0?gx.fn.setCtrlProperty("MAINTABLE","Class","RecentLinksMainTable RecentLinksMainTableExpanded"):gx.fn.setCtrlProperty("MAINTABLE","Class","RecentLinksMainTable"),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("MAINTABLE","Class")',ctrl:"MAINTABLE",prop:"Class"}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e13052_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e14052_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,9,10,11,12];this.GXLastCtrlId=12;this.LinksContainer=new gx.grid.grid(this,2,"WbpLvl2",8,"Links","Links","LinksContainer",this.CmpContext,this.IsMasterPage,"rwdrecentlinks",[],!0,9999,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","New row",!1,!1,!1,null,null,!1,"",!0,[1,0,0,0],!1,0,!1,!1);i=this.LinksContainer;i.startDiv(9,"Linkstable","0px","0px");i.startDiv(10,"","0px","0px");i.startDiv(11,"","0px","0px");i.addTextBlock("PLACE",null,12);i.endDiv();i.endDiv();i.endDiv();this.LinksContainer.emptyText="";this.setGrid(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"MAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"RECENTTEXT",format:0,grid:0,evt:"e11051_client",ctrltype:"textblock"};t[7]={id:7,fld:"",grid:0};t[9]={id:9,fld:"LINKSTABLE",grid:8};t[10]={id:10,fld:"",grid:8};t[11]={id:11,fld:"",grid:8};t[12]={id:12,fld:"PLACE",format:0,grid:8,ctrltype:"textblock"};this.AV6FormCaption="";this.AV7FormPgmName="";this.Events={e13052_client:["ENTER",!0],e14052_client:["CANCEL",!0],e11051_client:["RECENTTEXT.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"LINKS_nFirstRecordOnPage"},{av:"LINKS_nEOF"},{av:"AV6FormCaption",fld:"vFORMCAPTION",pic:""},{av:"sPrefix"}],[]];this.EvtParms["RECENTTEXT.CLICK"]=[[{av:'gx.fn.getCtrlProperty("MAINTABLE","Class")',ctrl:"MAINTABLE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("MAINTABLE","Class")',ctrl:"MAINTABLE",prop:"Class"}]];this.EvtParms["LINKS.LOAD"]=[[{av:"AV6FormCaption",fld:"vFORMCAPTION",pic:""}],[{av:'gx.fn.getCtrlProperty("PLACE","Caption")',ctrl:"PLACE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("PLACE","Link")',ctrl:"PLACE",prop:"Link"}]];this.EvtParms.ENTER=[[],[]];this.setVCMap("AV6FormCaption","vFORMCAPTION",0,"char",100,0);this.setVCMap("AV7FormPgmName","vFORMPGMNAME",0,"svchar",256,0);this.setVCMap("AV6FormCaption","vFORMCAPTION",0,"char",100,0);this.setVCMap("AV6FormCaption","vFORMCAPTION",0,"char",100,0);i.addRefreshingVar({rfrVar:"AV6FormCaption"});i.addRefreshingParm({rfrVar:"AV6FormCaption"});this.Initialize()})