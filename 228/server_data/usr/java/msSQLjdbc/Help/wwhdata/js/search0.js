function  Book_Search(ParamSearchWord)
{
  var  Results = null;


  if (ParamSearchWord == "example")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html","scalarfn2.html","scalarfn3.html","scalarfn4.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","usejdbc3.html","usejdbc4.html","usejdbc6.html","usejdbc7.html","Preface2.html");
  else if (ParamSearchWord == "tells")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "complex")
    Results = new Array("jdbcdesign2.html","jdbcdesign7.html","jdbcdesign.html");
  else if (ParamSearchWord == "unknowntable")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "preparing")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "decrease")
    Results = new Array("jdbcdesign4.html","jdbcdesign.html");
  else if (ParamSearchWord == "shortest")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "passed")
    Results = new Array("jdbcdesign5.html","jdbcsupp4.html");
  else if (ParamSearchWord == "statements")
    Results = new Array("jdbcdesign5.html","jdbcdesign6.html","scalarfn3.html","scalarfn5.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "excellent")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "reattaches")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "active")
    Results = new Array("jdbcdesign6.html","jdbcsupp4.html");
  else if (ParamSearchWord == "spending")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "four")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "getprimarykeys")
    Results = new Array("jdbcdesign7.html","jdbcsupp6.html");
  else if (ParamSearchWord == "getindexinfo")
    Results = new Array("jdbcdesign7.html","jdbcsupp6.html");
  else if (ParamSearchWord == "hidden")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "yyyy-mm-dd")
    Results = new Array("scalarfn2.html");
  else if (ParamSearchWord == "supports")
    Results = new Array("scalarfn4.html","jdbcsqlsrv.html","jdbcsqlsrv4.html","jdbcsqlsrv7.html","jdbcsqlsrv8.html","usejdbc2.html");
  else if (ParamSearchWord == "isfirst")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "updateasciistream")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "getscale")
    Results = new Array("jdbcsupp12.html");
  else if (ParamSearchWord == "setboolean")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "precision")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "money")
    Results = new Array("getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "accomplished")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "root")
    Results = new Array("jdbcsqlsrv9.html");
  else if (ParamSearchWord == "interfaces")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "registers")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "method")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcdesign3.html","jdbcdesign4.html","jdbcdesign6.html","jdbcdesign7.html","jdbcsqlsrv.html","jdbcsupp11.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp8.html","jdbcsupp9.html","getinfoapp.html","jdbcsqlsrv3.html","usejdbc3.html","usejdbc4.html");
  else if (ParamSearchWord == "drivermanager.getconnection")
    Results = new Array("jquikstart2.html","usejdbc3.html");
  else if (ParamSearchWord == "notes")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "properties")
    Results = new Array("jquikstart2.html","jdbcsupp8.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","usejdbc3.html","usejdbc4.html","usejdbc5.html");
  else if (ParamSearchWord == "possible")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign6.html","jdbcdesign.html","usejdbc7.html");
  else if (ParamSearchWord == "columns")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign7.html");
  else if (ParamSearchWord == "integers")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "parameter")
    Results = new Array("jdbcdesign5.html","scalarfn5.html","getinfoapp.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "exist")
    Results = new Array("jdbcdesign5.html","jdbcdesign7.html");
  else if (ParamSearchWord == "transactions")
    Results = new Array("jdbcdesign6.html","jdbcsqlsrv.html","jdbcsqlsrv3.html","jdbcsqlsrv9.html");
  else if (ParamSearchWord == "age")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "available")
    Results = new Array("jdbcdesign7.html","jdbcsqlsrv.html","jdbcsqlsrv9.html","usejdbc4.html","usejdbc6.html");
  else if (ParamSearchWord == "provide")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "determined")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "getmoreresults")
    Results = new Array("jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "datadefinitioncausestransaction")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "getcrossreference")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportspositionedupdate")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportstransactions")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "else")
    Results = new Array("jdbcsupp8.html");
  else if (ParamSearchWord == "internet")
    Results = new Array("usejdbc.html");
  else if (ParamSearchWord == "suggests")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "direct-the")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "creation")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "transact-sql")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "connectionpooldatasource")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "impair")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "efficiently")
    Results = new Array("jdbcdesign2.html","jdbcdesign3.html","jdbcdesign4.html","jdbcdesign8.html");
  else if (ParamSearchWord == "wsc.gettables")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "improved")
    Results = new Array("jdbcdesign2.html","jdbcdesign7.html","jdbcdesign8.html");
  else if (ParamSearchWord == "fetch")
    Results = new Array("jdbcdesign4.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "five")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "right")
    Results = new Array("jdbcdesign4.html","jdbcdesign5.html","jdbcdesign6.html","scalarfn3.html","scalarfn4.html");
  else if (ParamSearchWord == "converted")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "managing")
    Results = new Array("jdbcdesign6.html","jdbcdesign8.html");
  else if (ParamSearchWord == "rather")
    Results = new Array("jdbcdesign6.html","usejdbc4.html");
  else if (ParamSearchWord == "autocommit")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "throughput")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "building")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "version")
    Results = new Array("jdbcsupp10.html","jdbcsupp11.html","jdbcsupp12.html","jdbcsupp13.html","jdbcsupp14.html","jdbcsupp15.html","jdbcsupp16.html","jdbcsupp17.html","jdbcsupp18.html","jdbcsupp2.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp5.html","jdbcsupp6.html","jdbcsupp7.html","jdbcsupp8.html","jdbcsupp9.html","jdbcsupp.html");
  else if (ParamSearchWord == "updatebytes")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "getmaxprocedurenamelength")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "gettableprivileges")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsouterjoins")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "useslocalfiles")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "rare")
    Results = new Array("jdbcsupp8.html");
  else if (ParamSearchWord == "easy")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "updatable")
    Results = new Array("jdbcsqlsrv8.html");
  else if (ParamSearchWord == "corrupts")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "connectionpooldatasource.getpooledconnection")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "xopen")
    Results = new Array("usejdbc7.html");
  else if (ParamSearchWord == "defines")
    Results = new Array("scalarfn.html");
  else if (ParamSearchWord == "combinations")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "needs")
    Results = new Array("jquikstart2.html","jdbcdesign4.html","usejdbc4.html");
  else if (ParamSearchWord == "within")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "retrieving")
    Results = new Array("jdbcdesign3.html","jdbcdesign4.html","jdbcdesign8.html","jdbcdesign.html");
  else if (ParamSearchWord == "implement")
    Results = new Array("jdbcdesign4.html","usejdbc4.html");
  else if (ParamSearchWord == "meet")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "cstmt")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "preferred")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "every")
    Results = new Array("jdbcdesign6.html","jdbcdesign7.html","usejdbc4.html");
  else if (ParamSearchWord == "full")
    Results = new Array("scalarfn4.html","jdbcsupp2.html","jdbcsqlsrv9.html","jquikstart.html");
  else if (ParamSearchWord == "lists")
    Results = new Array("scalarfn4.html","jdbcsqlsrv3.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "getdouble")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html");
  else if (ParamSearchWord == "clearparameters")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "setarray")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "setint")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "getcatalogterm")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "getdatabaseproductname")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "gettables")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "privilegedefinitions")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "varchar")
    Results = new Array("getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "resides")
    Results = new Array("jdbcsqlsrv3.html","jdbcsqlsrv9.html");
  else if (ParamSearchWord == "files")
    Results = new Array("usejdbc4.html","usejdbc6.html","usejdbc8.html");
  else if (ParamSearchWord == "shown")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "subdirectory")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "installed")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "table")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html","scalarfn3.html","scalarfn4.html","jdbcsupp.html","getinfoapp.html","jdbcdesign.html","jdbcsqlsrv3.html","jdbcsqlsrv5.html","usejdbc8.html");
  else if (ParamSearchWord == "situation")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "sending")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "create")
    Results = new Array("jdbcdesign6.html","getinfoapp.html","jdbcsqlsrv3.html","usejdbc4.html","usejdbc6.html");
  else if (ParamSearchWord == "commits")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "description")
    Results = new Array("scalarfn2.html","jdbcsqlsrv3.html","usejdbc7.html","usejdbc8.html");
  else if (ParamSearchWord == "atan")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "getboolean")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html");
  else if (ParamSearchWord == "gettimestamp")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html");
  else if (ParamSearchWord == "describes")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "refer")
    Results = new Array("usejdbc4.html","usejdbc6.html","usejdbc7.html");
  else if (ParamSearchWord == "static")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "uppercase")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "once")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcdesign6.html","usejdbc4.html");
  else if (ParamSearchWord == "source")
    Results = new Array("jquikstart2.html","jdbcdesign6.html","jdbcdesign7.html","jdbcsupp5.html","jdbcsqlsrv2.html","jdbcsqlsrv4.html","usejdbc4.html","usejdbc8.html");
  else if (ParamSearchWord == "home")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "instructions")
    Results = new Array("jquikstart2.html","jquikstart.html");
  else if (ParamSearchWord == "always")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html","jdbcdesign6.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp6.html","jdbcsupp9.html","usejdbc6.html");
  else if (ParamSearchWord == "complicate")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "doing")
    Results = new Array("jdbcdesign3.html");
  else if (ParamSearchWord == "having")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "markers")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "intensive")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "normal")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "required")
    Results = new Array("jdbcdesign6.html","jdbcdesign8.html","jdbcsqlsrv3.html","usejdbc4.html");
  else if (ParamSearchWord == "updatedate")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "executequery")
    Results = new Array("jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "setquerytimeout")
    Results = new Array("jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "getmaxconnections")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsansi92fullsql")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsopenstatementsacross")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportssubqueriesinins")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "binary")
    Results = new Array("getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "instance")
    Results = new Array("jdbcsqlsrv3.html","jdbcsqlsrv4.html");
  else if (ParamSearchWord == "italics")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "key")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "microsoft")
    Results = new Array("jquikstart2.html","scalarfn3.html","scalarfn4.html","jdbcsqlsrv.html","usejdbc.html","jdbcsqlsrv4.html","usejdbc3.html","usejdbc4.html","usejdbc7.html");

  return Results;
}
