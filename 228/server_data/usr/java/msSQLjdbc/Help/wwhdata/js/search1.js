function  Book_Search(ParamSearchWord)
{
  var  Results = null;


  if (ParamSearchWord == "improve")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign6.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "arguments")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html");
  else if (ParamSearchWord == "ability")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "components")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "apply")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "optimal")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "atan2")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "void")
    Results = new Array("jdbcsupp11.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp5.html","jdbcsupp7.html","jdbcsupp8.html","jdbcsupp9.html");
  else if (ParamSearchWord == "sqlwarning")
    Results = new Array("jdbcsupp11.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp9.html");
  else if (ParamSearchWord == "isafterlast")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "java.util.hashmap")
    Results = new Array("jdbcsupp4.html");
  else if (ParamSearchWord == "rollback")
    Results = new Array("jdbcsupp4.html","jdbcsupp6.html");
  else if (ParamSearchWord == "getmaxcolumnsintable")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "storesuppercasequoted")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsexpressionsin")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsopencursorsacross")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "comparisons")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "sub")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "bases")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "action")
    Results = new Array("usejdbc7.html");
  else if (ParamSearchWord == "user")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcdesign4.html","jdbcdesign7.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","usejdbc3.html","usejdbc4.html");
  else if (ParamSearchWord == "prepared")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "execute")
    Results = new Array("jdbcdesign2.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "converting")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "situations")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "addressed")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "searched")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "updaterow")
    Results = new Array("jdbcdesign7.html","jdbcsupp11.html");
  else if (ParamSearchWord == "getint")
    Results = new Array("jdbcdesign7.html","jdbcsupp11.html","jdbcsupp3.html");
  else if (ParamSearchWord == "zip")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "tan")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "tables")
    Results = new Array("scalarfn4.html","jdbcsupp2.html");
  else if (ParamSearchWord == "referenceable")
    Results = new Array("jdbcsupp10.html");
  else if (ParamSearchWord == "datasource")
    Results = new Array("jdbcsupp10.html","jdbcsupp14.html","jdbcsupp7.html","jdbcsqlsrv3.html","usejdbc4.html","usejdbc6.html");
  else if (ParamSearchWord == "double")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "setobject")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "setcatalog")
    Results = new Array("jdbcsupp4.html");
  else if (ParamSearchWord == "reclaiming")
    Results = new Array("jdbcsupp8.html");
  else if (ParamSearchWord == "refers")
    Results = new Array("jdbcsupp.html");
  else if (ParamSearchWord == "wsid")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "creates")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "enabled")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "current")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "uses")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","usejdbc3.html","usejdbc4.html","Preface2.html");
  else if (ParamSearchWord == "set")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign7.html","scalarfn2.html","jdbcsqlsrv.html","jdbcsqlsrv3.html","jdbcsqlsrv8.html","usejdbc4.html","usejdbc6.html");
  else if (ParamSearchWord == "reply")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "cache")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html","jdbcsqlsrv3.html","usejdbc6.html");
  else if (ParamSearchWord == "generating")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "wsc.getcolumns")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "cname")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "database-specific")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "remote")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "last")
    Results = new Array("jdbcdesign7.html","jdbcsupp11.html","jdbcsqlsrv9.html","usejdbc7.html");
  else if (ParamSearchWord == "ssn")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "sequences")
    Results = new Array("scalarfn2.html","scalarfn4.html","scalarfn5.html","jdbcsqlsrv6.html","usejdbc4.html","scalarfn.html");
  else if (ParamSearchWord == "implemented")
    Results = new Array("jdbcsupp10.html","jdbcsupp14.html","usejdbc4.html","scalarfn.html");
  else if (ParamSearchWord == "cancelrowupdates")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "getconnection")
    Results = new Array("jdbcsupp16.html","jdbcsupp3.html","jdbcsupp6.html","jdbcsupp7.html","jdbcsupp8.html","jdbcsupp9.html");
  else if (ParamSearchWord == "getusername")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "owndeletesarevisible")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsaltertablewith")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportstransactionisolationlevel")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "shows")
    Results = new Array("jdbcsupp.html","usejdbc3.html","usejdbc8.html");
  else if (ParamSearchWord == "program")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "ds.getpooledconnection")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "separates")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "msutil.jar")
    Results = new Array("jquikstart2.html","usejdbc8.html");
  else if (ParamSearchWord == "necessary")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign6.html","usejdbc4.html","usejdbc6.html");
  else if (ParamSearchWord == "potentially")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "supply")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "support")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign6.html","jdbcdesign7.html","jdbcsqlsrv.html","jdbcsupp4.html","jdbcsupp8.html","jdbcsupp.html","jdbcsqlsrv8.html");
  else if (ParamSearchWord == "statement")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html","jdbcsupp11.html","jdbcsupp16.html","jdbcsupp4.html","jdbcsqlsrv3.html","Preface2.html");
  else if (ParamSearchWord == "setmaxfieldsize")
    Results = new Array("jdbcdesign4.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "physical")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "mode")
    Results = new Array("jdbcdesign6.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "modified")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "state")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "orderid")
    Results = new Array("scalarfn2.html");
  else if (ParamSearchWord == "year")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "html")
    Results = new Array("jdbcsupp10.html","jdbcsupp11.html","jdbcsupp12.html","jdbcsupp13.html","jdbcsupp14.html","jdbcsupp15.html","jdbcsupp16.html","jdbcsupp17.html","jdbcsupp18.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp5.html","jdbcsupp6.html","jdbcsupp7.html","jdbcsupp8.html","jdbcsupp9.html");
  else if (ParamSearchWord == "introduced")
    Results = new Array("jdbcsupp10.html","jdbcsupp11.html","jdbcsupp12.html","jdbcsupp13.html","jdbcsupp14.html","jdbcsupp15.html","jdbcsupp16.html","jdbcsupp17.html","jdbcsupp18.html","jdbcsupp2.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp5.html","jdbcsupp6.html","jdbcsupp7.html","jdbcsupp8.html","jdbcsupp9.html");
  else if (ParamSearchWord == "clearbatch")
    Results = new Array("jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "setref")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "getbestrowidentifier")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "getdefaulttransactionisolation")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "storesmixedcaseidentifiers")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsgroupbybeyondselect")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsintegrityenhancement")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "facility")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsstoredprocedures")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "driverpropertyinfo")
    Results = new Array("jdbcsupp8.html");
  else if (ParamSearchWord == "interface")
    Results = new Array("jdbcsqlsrv3.html","usejdbc2.html","usejdbc4.html");
  else if (ParamSearchWord == "sendstringparameters")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "workstation")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "administrator")
    Results = new Array("jdbcsqlsrv9.html","usejdbc4.html");
  else if (ParamSearchWord == "provided")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "displays")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "djava.security.manager")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "working")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "errors")
    Results = new Array("usejdbc7.html");
  else if (ParamSearchWord == "look")
    Results = new Array("usejdbc7.html");
  else if (ParamSearchWord == "extension")
    Results = new Array("scalarfn.html");
  else if (ParamSearchWord == "icon")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "press")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "monospace")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "com.microsoft.jdbc.sqlserver.sqlserverdriver")
    Results = new Array("jquikstart2.html","jdbcsqlsrv2.html","usejdbc3.html","usejdbc8.html");
  else if (ParamSearchWord == "sample")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "obtained")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "change")
    Results = new Array("jdbcdesign2.html","usejdbc4.html");
  else if (ParamSearchWord == "evaluates")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "best")
    Results = new Array("jdbcdesign4.html","jdbcdesign6.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "type")
    Results = new Array("jdbcdesign4.html","jdbcdesign5.html","jdbcsupp4.html","getinfoapp.html","usejdbc.html","jdbcsqlsrv5.html","jdbcsqlsrv8.html","scalarfn.html");
  else if (ParamSearchWord == "times")
    Results = new Array("jdbcdesign5.html","jdbcdesign6.html","usejdbc7.html","Preface2.html");
  else if (ParamSearchWord == "nonsequential")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "close")
    Results = new Array("jdbcdesign6.html","jdbcsupp11.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp8.html","jdbcsupp9.html","usejdbc4.html");
  else if (ParamSearchWord == "deletes")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "searchable")
    Results = new Array("jdbcdesign7.html","getinfoapp.html");
  else if (ParamSearchWord == "orders.orderid")
    Results = new Array("scalarfn4.html");
  else if (ParamSearchWord == "open")
    Results = new Array("scalarfn4.html","jdbcsupp8.html","usejdbc3.html","usejdbc4.html");
  else if (ParamSearchWord == "isautoincrement")
    Results = new Array("jdbcsupp12.html");
  else if (ParamSearchWord == "setautocommit")
    Results = new Array("jdbcsupp4.html");
  else if (ParamSearchWord == "getcatalogs")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsmultipleresultsets")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "listener")
    Results = new Array("jdbcsupp8.html","usejdbc4.html");
  else if (ParamSearchWord == "longvarbinary")
    Results = new Array("getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "shipping")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "basic")
    Results = new Array("jquikstart.html");
  else if (ParamSearchWord == "matt")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "non-null")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "time")
    Results = new Array("jdbcdesign4.html","jdbcdesign6.html","scalarfn2.html","jdbcsupp11.html","jdbcsupp3.html","jdbcsupp8.html","jdbcsupp9.html","usejdbc4.html","scalarfn.html");
  else if (ParamSearchWord == "timestamps")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "calls")
    Results = new Array("jdbcdesign5.html","jdbcsupp6.html","jdbcdesign.html","usejdbc4.html","scalarfn.html");
  else if (ParamSearchWord == "sequential")
    Results = new Array("jdbcdesign5.html","jdbcdesign6.html");
  else if (ParamSearchWord == "scrollable")
    Results = new Array("jdbcdesign5.html","jdbcsqlsrv8.html","usejdbc6.html");
  else if (ParamSearchWord == "getbestrowindentifier")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "fairly")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "explicitly")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "orders")
    Results = new Array("scalarfn2.html","scalarfn4.html");
  else if (ParamSearchWord == "left")
    Results = new Array("scalarfn3.html","scalarfn4.html");
  else if (ParamSearchWord == "dbname")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "sql92")
    Results = new Array("scalarfn4.html");
  else if (ParamSearchWord == "procedure-name")
    Results = new Array("scalarfn5.html");
  else if (ParamSearchWord == "updateboolean")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "getcatalog")
    Results = new Array("jdbcsupp4.html");

  return Results;
}
