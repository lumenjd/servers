function  Book_Search(ParamSearchWord)
{
  var  Results = null;


  if (ParamSearchWord == "assuming")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "result")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign7.html","jdbcsqlsrv3.html","jdbcsqlsrv8.html","usejdbc4.html");
  else if (ParamSearchWord == "validating")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "appropriate")
    Results = new Array("jdbcdesign5.html","jdbcdesign8.html");
  else if (ParamSearchWord == "practice")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "wsrowid")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "nested")
    Results = new Array("scalarfn4.html");
  else if (ParamSearchWord == "getreference")
    Results = new Array("jdbcsupp10.html");
  else if (ParamSearchWord == "updatetimestamp")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "setnull")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "getmaxcolumnnamelength")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "bit")
    Results = new Array("getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "image")
    Results = new Array("getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "examples")
    Results = new Array("usejdbc3.html","usejdbc5.html","Preface2.html");
  else if (ParamSearchWord == "moved")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "timeout")
    Results = new Array("usejdbc7.html");
  else if (ParamSearchWord == "application")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html","jdbcsupp8.html","jdbcsupp.html","usejdbc.html","jdbcdesign.html","jdbcsqlsrv3.html","Preface.html","usejdbc4.html","usejdbc6.html","usejdbc7.html");
  else if (ParamSearchWord == "locate")
    Results = new Array("jquikstart2.html","jdbcdesign7.html","scalarfn3.html");
  else if (ParamSearchWord == "user1")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "values")
    Results = new Array("jquikstart2.html","jdbcdesign5.html","jdbcsqlsrv3.html","usejdbc3.html","Preface2.html");
  else if (ParamSearchWord == "case")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign5.html","getinfoapp.html");
  else if (ParamSearchWord == "join")
    Results = new Array("jdbcdesign2.html","scalarfn4.html");
  else if (ParamSearchWord == "significantly")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "reuse")
    Results = new Array("jdbcdesign6.html","usejdbc4.html");
  else if (ParamSearchWord == "intervals")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "getsqlkeywords")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "scale")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "4000")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "utility")
    Results = new Array("jdbcsqlsrv9.html");
  else if (ParamSearchWord == "policy")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "grant")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "port")
    Results = new Array("jquikstart2.html","jdbcsqlsrv3.html","usejdbc3.html","usejdbc4.html");
  else if (ParamSearchWord == "specification")
    Results = new Array("jdbcdesign2.html","usejdbc2.html","usejdbc6.html","usejdbc7.html");
  else if (ParamSearchWord == "choose")
    Results = new Array("jdbcdesign2.html","jdbcdesign3.html","jdbcdesign5.html");
  else if (ParamSearchWord == "efficient")
    Results = new Array("jdbcdesign3.html","jdbcdesign6.html");
  else if (ParamSearchWord == "reducing")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "character")
    Results = new Array("jdbcdesign4.html","jdbcdesign5.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html");
  else if (ParamSearchWord == "procedure")
    Results = new Array("jdbcdesign5.html","scalarfn5.html","jdbcsqlsrv9.html","scalarfn.html");
  else if (ParamSearchWord == "rpc")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "called")
    Results = new Array("jdbcdesign5.html","jdbcdesign7.html","usejdbc4.html");
  else if (ParamSearchWord == "city")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "repeat")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "getresultsettype")
    Results = new Array("jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "gettabletypes")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "nullsaresortedlow")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "othersdeletesarevisible")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "storesmixedcasequoted")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "problem")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "described")
    Results = new Array("jdbcsqlsrv4.html");
  else if (ParamSearchWord == "repeatable")
    Results = new Array("jdbcsqlsrv7.html");
  else if (ParamSearchWord == "permission")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "sqlstate")
    Results = new Array("usejdbc7.html");
  else if (ParamSearchWord == "structure")
    Results = new Array("usejdbc8.html");
  else if (ParamSearchWord == "dbmss")
    Results = new Array("scalarfn.html");
  else if (ParamSearchWord == "two")
    Results = new Array("jquikstart2.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign6.html");
  else if (ParamSearchWord == "mssqlserver.jar")
    Results = new Array("jquikstart2.html","usejdbc8.html");
  else if (ParamSearchWord == "column")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign7.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "note")
    Results = new Array("jdbcdesign2.html","jdbcsqlsrv.html","jdbcsupp2.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","jdbcsqlsrv8.html","jquikstart.html","usejdbc3.html","usejdbc4.html");
  else if (ParamSearchWord == "users")
    Results = new Array("jdbcdesign4.html","jdbcdesign6.html");
  else if (ParamSearchWord == "integer")
    Results = new Array("jdbcdesign4.html","jdbcdesign5.html","getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "decompressed")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "protocol")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "flush")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "transaction")
    Results = new Array("jdbcdesign6.html","jdbcsupp4.html","jdbcsqlsrv3.html","jdbcsqlsrv9.html","usejdbc4.html");
  else if (ParamSearchWord == "thoughtful")
    Results = new Array("jdbcdesign8.html");
  else if (ParamSearchWord == "date")
    Results = new Array("scalarfn2.html","jdbcsupp11.html","jdbcsupp3.html","jdbcsupp9.html","scalarfn.html");
  else if (ParamSearchWord == "classes")
    Results = new Array("jdbcsupp10.html","jdbcsupp14.html","jdbcsupp.html","jdbcsqlsrv2.html","usejdbc4.html","usejdbc8.html");
  else if (ParamSearchWord == "updateobject")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "isreadonly")
    Results = new Array("jdbcsupp12.html","jdbcsupp4.html","jdbcsupp6.html");
  else if (ParamSearchWord == "isclosed")
    Results = new Array("jdbcsupp4.html");
  else if (ParamSearchWord == "printwriter")
    Results = new Array("jdbcsupp5.html","jdbcsupp7.html");
  else if (ParamSearchWord == "subset")
    Results = new Array("usejdbc2.html");
  else if (ParamSearchWord == "otherwise")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "numeric")
    Results = new Array("jquikstart2.html","scalarfn3.html","getinfoapp.html","jdbcsqlsrv5.html","scalarfn.html");
  else if (ParamSearchWord == "applications")
    Results = new Array("jdbcdesign2.html","jdbcdesign3.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html","jdbcdesign8.html","jdbcdesign.html","usejdbc4.html");
  else if (ParamSearchWord == "cases")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html");
  else if (ParamSearchWord == "does")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html","jdbcsupp8.html","jdbcsupp.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "though")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "based")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "comes")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "exhausted")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "significant")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "easily")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "work")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "typically")
    Results = new Array("jdbcdesign7.html","jdbcsqlsrv3.html","usejdbc4.html");
  else if (ParamSearchWord == "dayname")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "joins")
    Results = new Array("scalarfn4.html","scalarfn.html");
  else if (ParamSearchWord == "getcolumndisplaysize")
    Results = new Array("jdbcsupp12.html");
  else if (ParamSearchWord == "getdrivermajorversion")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "nullsaresortedhigh")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsorderbyunrelated")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportssubqueriesinexists")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "getminorversion")
    Results = new Array("jdbcsupp8.html");
  else if (ParamSearchWord == "1.22")
    Results = new Array("jdbcsupp.html");
  else if (ParamSearchWord == "copy")
    Results = new Array("jdbcsqlsrv9.html","Preface2.html");
  else if (ParamSearchWord == "itself")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "java.net.socketpermission")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "unable")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "typographical")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "call")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html","scalarfn5.html","jdbcsupp3.html","jdbcsupp9.html","usejdbc4.html","usejdbc7.html");
  else if (ParamSearchWord == "packet")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "getcustname")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "wss.executequery")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "timestamp")
    Results = new Array("scalarfn2.html","jdbcsupp11.html","jdbcsupp3.html","jdbcsupp9.html","getinfoapp.html","jdbcsqlsrv5.html","scalarfn.html");
  else if (ParamSearchWord == "literals")
    Results = new Array("scalarfn2.html","scalarfn.html");
  else if (ParamSearchWord == "concat")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "2.0")
    Results = new Array("jdbcsupp10.html","jdbcsupp11.html","jdbcsupp12.html","jdbcsupp13.html","jdbcsupp15.html","jdbcsupp16.html","jdbcsupp17.html","jdbcsupp18.html","jdbcsupp2.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp5.html","jdbcsupp6.html","jdbcsupp7.html","jdbcsupp8.html","jdbcsupp9.html","jdbcsupp.html","usejdbc2.html","usejdbc4.html");
  else if (ParamSearchWord == "clearwarnings")
    Results = new Array("jdbcsupp11.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "updatebinarystream")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "xadatasource")
    Results = new Array("jdbcsupp18.html");
  else if (ParamSearchWord == "setclob")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "setshort")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "getdatabaseproductversion")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "getmaxtablesinselect")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "created")
    Results = new Array("jdbcsupp8.html","usejdbc4.html");
  else if (ParamSearchWord == "radix")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "real")
    Results = new Array("getinfoapp.html","jdbcsqlsrv5.html","usejdbc4.html");
  else if (ParamSearchWord == "own")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "concurrently")
    Results = new Array("jdbcsqlsrv4.html");
  else if (ParamSearchWord == "immediately")
    Results = new Array("jquikstart.html","Preface2.html");
  else if (ParamSearchWord == "package")
    Results = new Array("usejdbc2.html","usejdbc4.html");
  else if (ParamSearchWord == "wwf")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "following")
    Results = new Array("jquikstart2.html","jdbcdesign6.html","jdbcdesign7.html","scalarfn2.html","scalarfn3.html","jdbcsupp2.html","getinfoapp.html","jdbcdesign.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","jdbcsqlsrv9.html","jquikstart.html","usejdbc2.html","usejdbc3.html","usejdbc4.html","usejdbc6.html","usejdbc7.html","usejdbc8.html","scalarfn.html","Preface2.html");
  else if (ParamSearchWord == "system")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcdesign3.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html","scalarfn3.html","jdbcsqlsrv.html","usejdbc.html","jdbcdesign.html","jdbcsqlsrv9.html","Preface.html");
  else if (ParamSearchWord == "elements")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "getmetadata")
    Results = new Array("jdbcdesign2.html","jdbcsupp11.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp9.html");
  else if (ParamSearchWord == "model")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html","jdbcdesign6.html","usejdbc6.html");
  else if (ParamSearchWord == "clause")
    Results = new Array("jdbcdesign2.html","jdbcdesign7.html");
  else if (ParamSearchWord == "manageable")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "smallest")
    Results = new Array("jdbcdesign4.html","jdbcdesign7.html");
  else if (ParamSearchWord == "either")
    Results = new Array("jdbcdesign5.html","Preface2.html");
  else if (ParamSearchWord == "used")
    Results = new Array("jdbcdesign5.html","jdbcdesign7.html","jdbcsupp.html","jdbcsqlsrv3.html","usejdbc3.html","usejdbc4.html","usejdbc8.html","scalarfn.html","Preface2.html");
  else if (ParamSearchWord == "insensitive")
    Results = new Array("jdbcdesign5.html","jdbcsupp4.html","jdbcsqlsrv3.html","usejdbc6.html");
  else if (ParamSearchWord == "management")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "storage")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "manage")
    Results = new Array("jdbcdesign6.html","usejdbc4.html");
  else if (ParamSearchWord == "turn")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "run")
    Results = new Array("jdbcdesign6.html","jdbcdesign8.html","jdbcsqlsrv9.html","usejdbc6.html");
  else if (ParamSearchWord == "pointer")
    Results = new Array("jdbcdesign7.html");

  return Results;
}
