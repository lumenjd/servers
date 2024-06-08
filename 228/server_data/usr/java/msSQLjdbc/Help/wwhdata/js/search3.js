function  Book_Search(ParamSearchWord)
{
  var  Results = null;


  if (ParamSearchWord == "supportscorrelatedsubqueries")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "sqlwarnings")
    Results = new Array("jdbcsqlsrv8.html");
  else if (ParamSearchWord == "jar")
    Results = new Array("usejdbc4.html","usejdbc8.html");
  else if (ParamSearchWord == "add")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "granted")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "menu")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "network")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign8.html","jdbcdesign.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "frequent")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "results")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html","getinfoapp.html","Preface2.html");
  else if (ParamSearchWord == "due")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign6.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "johng")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "unless")
    Results = new Array("jdbcdesign4.html","jdbcdesign6.html");
  else if (ParamSearchWord == "according")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "assume")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "validate")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "keyset-driven")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "leaving")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "radians")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "getdate")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html");
  else if (ParamSearchWord == "calendar")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "float")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html","jdbcsupp9.html","getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "updatestring")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "wasnull")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html");
  else if (ParamSearchWord == "supportstablecorrelationnames")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "databasemetadata.gettypeinfo")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "identity")
    Results = new Array("getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "simple")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "isolation")
    Results = new Array("jdbcsqlsrv7.html");
  else if (ParamSearchWord == "requested")
    Results = new Array("jdbcsqlsrv8.html");
  else if (ParamSearchWord == "guide")
    Results = new Array("jquikstart.html");
  else if (ParamSearchWord == "initialized")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "remove")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "check")
    Results = new Array("usejdbc7.html");
  else if (ParamSearchWord == "placeholders")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "url")
    Results = new Array("jquikstart2.html","jdbcsqlsrv4.html","usejdbc3.html","usejdbc5.html");
  else if (ParamSearchWord == "jdbc")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcdesign3.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign8.html","scalarfn3.html","scalarfn4.html","jdbcsqlsrv.html","jdbcsupp10.html","jdbcsupp2.html","jdbcsupp.html","getinfoapp.html","usejdbc.html","jdbcdesign.html","jdbcsqlsrv2.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","jdbcsqlsrv5.html","jdbcsqlsrv6.html","jdbcsqlsrv9.html","jquikstart.html","usejdbc2.html","usejdbc3.html","usejdbc4.html","usejdbc5.html","usejdbc6.html","usejdbc7.html","usejdbc8.html","scalarfn.html");
  else if (ParamSearchWord == "registering")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "resolves")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "depends")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "time-consuming")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "traffic")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign8.html","jdbcdesign.html");
  else if (ParamSearchWord == "wsrc")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "false")
    Results = new Array("jdbcdesign2.html","jdbcdesign6.html","getinfoapp.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "remember")
    Results = new Array("jdbcdesign4.html","jdbcdesign5.html");
  else if (ParamSearchWord == "parse")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "asin")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "log10")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "throws")
    Results = new Array("jdbcsupp11.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "blob")
    Results = new Array("jdbcsupp11.html","jdbcsupp2.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "rowupdated")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "settime")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "resultset.type")
    Results = new Array("jdbcsupp4.html");
  else if (ParamSearchWord == "getlogwriter")
    Results = new Array("jdbcsupp5.html","jdbcsupp7.html");
  else if (ParamSearchWord == "datadefinitionignoredintransactions")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "getdriverminorversion")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "storeslowercaseidentifiers")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "features")
    Results = new Array("jdbcsupp.html","jquikstart.html","scalarfn.html");
  else if (ParamSearchWord == "tcp")
    Results = new Array("jdbcsqlsrv3.html","usejdbc3.html");
  else if (ParamSearchWord == "large")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "fails")
    Results = new Array("jdbcsqlsrv9.html");
  else if (ParamSearchWord == "ctx.lookup")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "domains")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "recommended")
    Results = new Array("usejdbc7.html");
  else if (ParamSearchWord == "syntaxes")
    Results = new Array("scalarfn.html");
  else if (ParamSearchWord == "test")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcsqlsrv4.html","usejdbc3.html");
  else if (ParamSearchWord == "defaults")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "high")
    Results = new Array("jdbcdesign4.html","jdbcdesign5.html");
  else if (ParamSearchWord == "true")
    Results = new Array("jdbcdesign4.html","getinfoapp.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "processed")
    Results = new Array("jdbcdesign4.html","jdbcdesign5.html");
  else if (ParamSearchWord == "byte")
    Results = new Array("jdbcdesign4.html","jdbcsupp11.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "directly")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "1,12345")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "summarizes")
    Results = new Array("jdbcdesign5.html","jdbcdesign.html");
  else if (ParamSearchWord == "pooling")
    Results = new Array("jdbcdesign6.html","usejdbc2.html","usejdbc4.html");
  else if (ParamSearchWord == "locks")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "fetchdata")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "specified")
    Results = new Array("jdbcdesign7.html","jdbcsqlsrv3.html","usejdbc6.html");
  else if (ParamSearchWord == "mod")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "getcolumnprivileges")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "requires")
    Results = new Array("jdbcsupp.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "num")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "examining")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "pcon")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "bracket")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "jvm")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "path")
    Results = new Array("jquikstart2.html","jdbcsqlsrv9.html");
  else if (ParamSearchWord == "name")
    Results = new Array("jquikstart2.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign7.html","scalarfn3.html","scalarfn4.html","scalarfn5.html","getinfoapp.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","jdbcsqlsrv9.html","usejdbc3.html","usejdbc4.html","usejdbc6.html","usejdbc7.html","Preface2.html");
  else if (ParamSearchWord == "slow")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign.html");
  else if (ParamSearchWord == "guidelines")
    Results = new Array("jdbcdesign2.html","jdbcdesign3.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html","jdbcdesign.html");
  else if (ParamSearchWord == "unlikely")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "maintain")
    Results = new Array("jdbcdesign2.html","usejdbc4.html");
  else if (ParamSearchWord == "possibly")
    Results = new Array("jdbcdesign2.html","jdbcdesign7.html");
  else if (ParamSearchWord == "wsrsmd.getcolumncount")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "faster")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "stored")
    Results = new Array("jdbcdesign5.html","scalarfn5.html","jdbcsqlsrv.html","jdbcsqlsrv3.html","jdbcsqlsrv9.html","usejdbc8.html");
  else if (ParamSearchWord == "rowid")
    Results = new Array("jdbcdesign5.html","jdbcdesign7.html");
  else if (ParamSearchWord == "wide")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "operation")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "maintainable")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "definition")
    Results = new Array("jdbcdesign7.html","Preface.html");
  else if (ParamSearchWord == "getstatement")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "getmaxrows")
    Results = new Array("jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "functionality")
    Results = new Array("jdbcsupp2.html","usejdbc.html","usejdbc2.html");
  else if (ParamSearchWord == "supportsunion")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "poolmanager")
    Results = new Array("jdbcsupp8.html");
  else if (ParamSearchWord == "common")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "connects")
    Results = new Array("jdbcsqlsrv4.html");
  else if (ParamSearchWord == "ran")
    Results = new Array("jdbcsqlsrv9.html");
  else if (ParamSearchWord == "familiar")
    Results = new Array("Preface.html","Preface2.html");
  else if (ParamSearchWord == "outside")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "infrastructure")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "context.lookup")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "forward")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "addresses")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "performance")
    Results = new Array("jdbcdesign2.html","jdbcdesign3.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html","jdbcdesign8.html","usejdbc.html","jdbcdesign.html","jdbcsqlsrv3.html","usejdbc4.html");
  else if (ParamSearchWord == "gettypeinfo")
    Results = new Array("jdbcdesign2.html","jdbcsupp6.html","getinfoapp.html");
  else if (ParamSearchWord == "conversion")
    Results = new Array("jdbcdesign4.html","scalarfn.html");
  else if (ParamSearchWord == "identifiers")
    Results = new Array("jdbcdesign5.html","jdbcsupp6.html");
  else if (ParamSearchWord == "returning")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "changed")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "char")
    Results = new Array("scalarfn3.html","getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "soundex")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "abs")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "floor")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "sin")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "minute")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "rowinserted")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "iscasesensitive")
    Results = new Array("jdbcsupp12.html");
  else if (ParamSearchWord == "cancel")
    Results = new Array("jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "closed")
    Results = new Array("jdbcsupp4.html");
  else if (ParamSearchWord == "someone")
    Results = new Array("jdbcsupp8.html");
  else if (ParamSearchWord == "numerous")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "materials")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "communication")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "manual")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "enables")
    Results = new Array("jquikstart.html","usejdbc4.html");
  else if (ParamSearchWord == "untrusted")
    Results = new Array("usejdbc3.html");
  else if (ParamSearchWord == "ends")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "books")
    Results = new Array("usejdbc8.html");
  else if (ParamSearchWord == "virtual")
    Results = new Array("jquikstart2.html","jdbcsupp.html","usejdbc6.html");
  else if (ParamSearchWord == "perform")
    Results = new Array("jdbcdesign2.html","jdbcdesign6.html","usejdbc6.html");
  else if (ParamSearchWord == "requesting")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "avoid")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html","jdbcdesign6.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "getstring")
    Results = new Array("jdbcdesign2.html","jdbcsupp11.html","jdbcsupp3.html");
  else if (ParamSearchWord == "average")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "limit")
    Results = new Array("jdbcdesign4.html","jdbcdesign.html");
  else if (ParamSearchWord == "argument")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "component")
    Results = new Array("jdbcdesign6.html","usejdbc7.html");
  else if (ParamSearchWord == "maintainability")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "logging")
    Results = new Array("jdbcdesign6.html");

  return Results;
}
