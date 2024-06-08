function  Book_Search(ParamSearchWord)
{
  var  Results = null;


  if (ParamSearchWord == "comments")
    Results = new Array("jdbcsupp10.html","jdbcsupp11.html","jdbcsupp12.html","jdbcsupp13.html","jdbcsupp14.html","jdbcsupp15.html","jdbcsupp16.html","jdbcsupp17.html","jdbcsupp18.html","jdbcsupp2.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp5.html","jdbcsupp6.html","jdbcsupp7.html","jdbcsupp8.html","jdbcsupp9.html","jdbcsupp.html");
  else if (ParamSearchWord == "supportsunionall")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "1.3")
    Results = new Array("jdbcsupp.html");
  else if (ParamSearchWord == "2147483647")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "max")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "determining")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "enough")
    Results = new Array("jdbcsqlsrv9.html");
  else if (ParamSearchWord == "implements")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "indicating")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "commonly")
    Results = new Array("scalarfn.html");
  else if (ParamSearchWord == "receive")
    Results = new Array("jquikstart2.html","Preface2.html");
  else if (ParamSearchWord == "dir")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "chapter")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "may")
    Results = new Array("jdbcdesign2.html","usejdbc6.html","usejdbc7.html","Preface2.html");
  else if (ParamSearchWord == "particular")
    Results = new Array("jdbcdesign2.html","jdbcsupp8.html");
  else if (ParamSearchWord == "wsrs")
    Results = new Array("jdbcdesign2.html","jdbcdesign7.html");
  else if (ParamSearchWord == "cannot")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html","jdbcdesign7.html","jdbcsqlsrv3.html","jdbcsqlsrv8.html","usejdbc3.html");
  else if (ParamSearchWord == "define")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "different")
    Results = new Array("jdbcdesign4.html","jdbcsqlsrv3.html","usejdbc4.html");
  else if (ParamSearchWord == "advantage")
    Results = new Array("jdbcdesign5.html","jdbcdesign7.html","jquikstart.html","usejdbc4.html");
  else if (ParamSearchWord == "reads")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "unique")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "specifies")
    Results = new Array("scalarfn5.html","usejdbc3.html");
  else if (ParamSearchWord == "deleterow")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "getbytes")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html");
  else if (ParamSearchWord == "getunicodestream")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "movetoinsertrow")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "updatebyte")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "setcursorname")
    Results = new Array("jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "setstring")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "getmaxcursornamelength")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "whether")
    Results = new Array("jdbcsupp.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "longvarchar")
    Results = new Array("getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "high-performance")
    Results = new Array("usejdbc.html");
  else if (ParamSearchWord == "unicode")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "parsed")
    Results = new Array("scalarfn.html");
  else if (ParamSearchWord == "succession")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "ways")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "unix")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "almost")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "language")
    Results = new Array("jdbcdesign2.html","scalarfn.html");
  else if (ParamSearchWord == "characteristics")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "instead")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html");
  else if (ParamSearchWord == "accessing")
    Results = new Array("jdbcdesign2.html","jdbcdesign6.html","Preface.html");
  else if (ParamSearchWord == "reduce")
    Results = new Array("jdbcdesign4.html","jdbcdesign6.html","jdbcdesign.html","usejdbc4.html");
  else if (ParamSearchWord == "decreased")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "twice")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "stores")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "requests")
    Results = new Array("jdbcdesign5.html","jdbcdesign6.html","usejdbc4.html");
  else if (ParamSearchWord == "row")
    Results = new Array("jdbcdesign5.html","jdbcdesign7.html");
  else if (ParamSearchWord == "designers")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "step")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "replace")
    Results = new Array("jdbcdesign6.html","scalarfn3.html");
  else if (ParamSearchWord == "index")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "jdbcsupp10")
    Results = new Array("jdbcsupp10.html");
  else if (ParamSearchWord == "ignored")
    Results = new Array("jdbcsupp11.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp9.html","jdbcsqlsrv9.html");
  else if (ParamSearchWord == "getupdatecount")
    Results = new Array("jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "settypemap")
    Results = new Array("jdbcsupp4.html");
  else if (ParamSearchWord == "getlogintimeout")
    Results = new Array("jdbcsupp5.html","jdbcsupp7.html");
  else if (ParamSearchWord == "getidentifierquotestring")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "nchar")
    Results = new Array("getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "1073741823")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "smallint")
    Results = new Array("getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "solutions")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "interaction")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "servername")
    Results = new Array("jdbcsqlsrv3.html","jdbcsqlsrv4.html");
  else if (ParamSearchWord == "detailed")
    Results = new Array("jdbcsqlsrv8.html");
  else if (ParamSearchWord == "con")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "capitalization")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "directory")
    Results = new Array("jquikstart2.html","jdbcsqlsrv9.html","usejdbc2.html","usejdbc4.html","usejdbc6.html","usejdbc8.html");
  else if (ParamSearchWord == "section")
    Results = new Array("jdbcdesign2.html","jdbcdesign3.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html");
  else if (ParamSearchWord == "returned")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html","jdbcdesign7.html","getinfoapp.html","jdbcsqlsrv3.html","usejdbc4.html");
  else if (ParamSearchWord == "cat1")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "bind")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "types")
    Results = new Array("jdbcdesign4.html","jdbcdesign5.html","jdbcdesign7.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "internal")
    Results = new Array("jdbcdesign4.html","jdbcdesign7.html");
  else if (ParamSearchWord == "compressed")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "format")
    Results = new Array("jdbcdesign4.html","scalarfn2.html","jdbcsqlsrv4.html","usejdbc3.html","usejdbc7.html");
  else if (ParamSearchWord == "handling")
    Results = new Array("jdbcdesign6.html","usejdbc7.html");
  else if (ParamSearchWord == "tid")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "exp")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "customers")
    Results = new Array("scalarfn4.html");
  else if (ParamSearchWord == "jdbcsupp11")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "getbigdecimal")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html");
  else if (ParamSearchWord == "getbinarystream")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "getcharacterstream")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "gettablename")
    Results = new Array("jdbcsupp12.html");
  else if (ParamSearchWord == "setasciistream")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "supportsmixedcaseidentifiers")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "variant")
    Results = new Array("getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "cursor-when")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "scan")
    Results = new Array("jdbcsqlsrv9.html");
  else if (ParamSearchWord == "changes")
    Results = new Array("jdbcsqlsrv9.html");
  else if (ParamSearchWord == "socket")
    Results = new Array("usejdbc3.html");
  else if (ParamSearchWord == "closes")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "uninstalls")
    Results = new Array("usejdbc8.html");
  else if (ParamSearchWord == "filename")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "keyword")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "performance-expensive")
    Results = new Array("jdbcdesign2.html","jdbcdesign7.html");
  else if (ParamSearchWord == "calling")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign7.html","scalarfn5.html","usejdbc4.html","usejdbc7.html");
  else if (ParamSearchWord == "ordering")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html");
  else if (ParamSearchWord == "initial")
    Results = new Array("jdbcdesign5.html","jdbcdesign6.html","usejdbc4.html");
  else if (ParamSearchWord == "cursor")
    Results = new Array("jdbcdesign5.html","jdbcdesign7.html","jdbcsqlsrv3.html","jdbcsqlsrv8.html","usejdbc6.html");
  else if (ParamSearchWord == "important")
    Results = new Array("jdbcdesign6.html","Preface2.html");
  else if (ParamSearchWord == "programmatic")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "simply")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "positional")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "explicit")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "databasemetadata")
    Results = new Array("jdbcdesign8.html","jdbcsupp4.html","jdbcsupp6.html","usejdbc6.html");
  else if (ParamSearchWord == "acos")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "truncate")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "afterlast")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "gettype")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "jdbcsupp12")
    Results = new Array("jdbcsupp12.html");
  else if (ParamSearchWord == "jdbcsupp3")
    Results = new Array("jdbcsupp3.html");
  else if (ParamSearchWord == "getmaxcolumnsinindex")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "getsystemfunctions")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "purpose")
    Results = new Array("jdbcsupp8.html");
  else if (ParamSearchWord == "capability")
    Results = new Array("jdbcsupp8.html");
  else if (ParamSearchWord == "case-insensitive")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "impact")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "works")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "notified")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "emphasis")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "steps")
    Results = new Array("jquikstart2.html","jdbcdesign6.html");
  else if (ParamSearchWord == "prepare")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "executed")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html");
  else if (ParamSearchWord == "rows")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign6.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "client")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html","jdbcsqlsrv3.html","usejdbc4.html");
  else if (ParamSearchWord == "driver-specific")
    Results = new Array("jdbcdesign4.html","jdbcsupp4.html","usejdbc8.html");
  else if (ParamSearchWord == "floating-point")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "conn.preparecall")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "code")
    Results = new Array("jdbcdesign7.html","jdbcdesign.html","usejdbc6.html","usejdbc7.html");
  else if (ParamSearchWord == "ceiling")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "reference")
    Results = new Array("jdbcsupp10.html","usejdbc4.html");
  else if (ParamSearchWord == "getarray")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html");
  else if (ParamSearchWord == "gettime")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html");
  else if (ParamSearchWord == "refreshrow")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "setfetchdirection")
    Results = new Array("jdbcsupp11.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "getcolumncount")
    Results = new Array("jdbcsupp12.html");
  else if (ParamSearchWord == "getcolumnname")
    Results = new Array("jdbcsupp12.html");
  else if (ParamSearchWord == "iscurrency")
    Results = new Array("jdbcsupp12.html");
  else if (ParamSearchWord == "jdbcsupp13")
    Results = new Array("jdbcsupp13.html");
  else if (ParamSearchWord == "serializable")
    Results = new Array("jdbcsupp14.html","jdbcsqlsrv7.html");
  else if (ParamSearchWord == "invalid")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html","usejdbc7.html");
  else if (ParamSearchWord == "jdbcsupp4")
    Results = new Array("jdbcsupp4.html");
  else if (ParamSearchWord == "supportssubqueriesin")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "hostname")
    Results = new Array("jdbcsqlsrv3.html","jdbcsqlsrv4.html","usejdbc3.html");
  else if (ParamSearchWord == "ctx")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "end")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "enable")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "reports")
    Results = new Array("usejdbc7.html");
  else if (ParamSearchWord == "replaces")
    Results = new Array("scalarfn.html");
  else if (ParamSearchWord == "case-sensitive")
    Results = new Array("Preface2.html");

  return Results;
}
