function  Book_Search(ParamSearchWord)
{
  var  Results = null;


  if (ParamSearchWord == "part")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "degrees")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "direct")
    Results = new Array("jdbcsqlsrv.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "findcolumn")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "getconcurrency")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "getcursorname")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "neither")
    Results = new Array("jdbcsupp2.html");
  else if (ParamSearchWord == "getversioncolumns")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "storeslowercasequoted")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "transactionsonly")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "tests")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "end-user")
    Results = new Array("Preface.html");
  else if (ParamSearchWord == "brackets")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "parameters")
    Results = new Array("jquikstart2.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "methods")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign7.html","jdbcdesign8.html","jdbcsupp10.html","jdbcsupp11.html","jdbcsupp12.html","jdbcsupp13.html","jdbcsupp14.html","jdbcsupp15.html","jdbcsupp16.html","jdbcsupp17.html","jdbcsupp18.html","jdbcsupp2.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp5.html","jdbcsupp6.html","jdbcsupp7.html","jdbcsupp8.html","jdbcsupp9.html","jdbcdesign.html");
  else if (ParamSearchWord == "wsps.getmetadata")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "emulates")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "programmer")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "provides")
    Results = new Array("jdbcdesign5.html","jdbcdesign7.html","getinfoapp.html","usejdbc.html","usejdbc2.html","usejdbc4.html","usejdbc8.html");
  else if (ParamSearchWord == "further")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "slower")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "updating")
    Results = new Array("jdbcdesign7.html","jdbcdesign.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "exists")
    Results = new Array("jdbcdesign7.html","usejdbc4.html");
  else if (ParamSearchWord == "boolean")
    Results = new Array("jdbcsupp11.html","jdbcsupp12.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp6.html","jdbcsupp8.html","jdbcsupp9.html");
  else if (ParamSearchWord == "inputstream")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "window")
    Results = new Array("jdbcsupp2.html");
  else if (ParamSearchWord == "alltablesareselectable")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "getprocedures")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "getudts")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsansi92entrylevelsql")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "compatible")
    Results = new Array("jdbcsupp.html");
  else if (ParamSearchWord == "params")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "useful")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "rule")
    Results = new Array("jdbcsqlsrv3.html","Preface2.html");
  else if (ParamSearchWord == "65535")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "introduces")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "trying")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "determine")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcdesign7.html");
  else if (ParamSearchWord == "find")
    Results = new Array("jquikstart2.html","jdbcdesign7.html","jdbcsqlsrv3.html","usejdbc4.html");
  else if (ParamSearchWord == "wsps")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "let")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "setfetchsize")
    Results = new Array("jdbcdesign4.html","jdbcsupp11.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "optimized")
    Results = new Array("jdbcdesign5.html","usejdbc.html");
  else if (ParamSearchWord == "implementations")
    Results = new Array("jdbcdesign5.html","jdbcdesign.html");
  else if (ParamSearchWord == "developers")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "scalar-function")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "ucase")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "ascii")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "sign")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "getquerytimeout")
    Results = new Array("jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "getprocedureterm")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "othersupdatesarevisible")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "manipulation")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "increment")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "nvarchar")
    Results = new Array("getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "performance-oriented")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "sends")
    Results = new Array("jdbcsqlsrv3.html","usejdbc4.html");
  else if (ParamSearchWord == "cloned")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "identified")
    Results = new Array("jdbcsqlsrv4.html");
  else if (ParamSearchWord == "datadirect")
    Results = new Array("jdbcsqlsrv4.html");
  else if (ParamSearchWord == "indicate")
    Results = new Array("jdbcsqlsrv9.html");
  else if (ParamSearchWord == "directories")
    Results = new Array("Preface.html","usejdbc8.html");
  else if (ParamSearchWord == "applets")
    Results = new Array("usejdbc3.html","usejdbc6.html");
  else if (ParamSearchWord == "standard")
    Results = new Array("usejdbc6.html","scalarfn.html");
  else if (ParamSearchWord == "expired")
    Results = new Array("usejdbc7.html");
  else if (ParamSearchWord == "search")
    Results = new Array("jquikstart2.html","jdbcdesign2.html");
  else if (ParamSearchWord == "loading")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "address")
    Results = new Array("jquikstart2.html","jdbcdesign7.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","usejdbc3.html");
  else if (ParamSearchWord == "away")
    Results = new Array("jdbcdesign2.html","jdbcsupp8.html");
  else if (ParamSearchWord == "allows")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign7.html","usejdbc4.html");
  else if (ParamSearchWord == "dbms")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html");
  else if (ParamSearchWord == "exclude")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "strings")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "optimizing")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "encoded")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "gathers")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "web")
    Results = new Array("jdbcdesign6.html","usejdbc6.html");
  else if (ParamSearchWord == "month")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "search-condition")
    Results = new Array("scalarfn4.html");
  else if (ParamSearchWord == "map")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html","jdbcsupp4.html");
  else if (ParamSearchWord == "updatetime")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "getcolumnlabel")
    Results = new Array("jdbcsupp12.html");
  else if (ParamSearchWord == "getresultsetconcurrency")
    Results = new Array("jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "getdriverversion")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "discuss")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "cloning")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "consistent")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "narrowed")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "sqlexceptions")
    Results = new Array("usejdbc7.html");
  else if (ParamSearchWord == "uninstall.class")
    Results = new Array("usejdbc8.html");
  else if (ParamSearchWord == "vertical")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "string")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcdesign5.html","scalarfn3.html","jdbcsupp11.html","jdbcsupp12.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp5.html","jdbcsupp6.html","jdbcsupp7.html","jdbcsupp8.html","jdbcsupp9.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","usejdbc3.html","usejdbc5.html","usejdbc7.html","scalarfn.html");
  else if (ParamSearchWord == "lib")
    Results = new Array("jquikstart2.html","usejdbc6.html","usejdbc8.html");
  else if (ParamSearchWord == "sqlserver")
    Results = new Array("jquikstart2.html","jdbcsqlsrv4.html","usejdbc3.html","usejdbc8.html");
  else if (ParamSearchWord == "minimizing")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "sets")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html","jdbcsqlsrv8.html");
  else if (ParamSearchWord == "int")
    Results = new Array("jdbcdesign2.html","jdbcdesign7.html","jdbcsupp11.html","jdbcsupp12.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp5.html","jdbcsupp6.html","jdbcsupp7.html","jdbcsupp8.html","jdbcsupp9.html","getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "attempt")
    Results = new Array("jdbcdesign4.html","jdbcdesign7.html");
  else if (ParamSearchWord == "allow")
    Results = new Array("jdbcdesign4.html","jdbcdesign6.html");
  else if (ParamSearchWord == "wire")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "gather")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "thoughtfully")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "write")
    Results = new Array("jdbcdesign6.html","usejdbc6.html");
  else if (ParamSearchWord == "local")
    Results = new Array("jdbcdesign6.html","getinfoapp.html");
  else if (ParamSearchWord == "record")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "array")
    Results = new Array("jdbcsupp11.html","jdbcsupp2.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "getfetchdirection")
    Results = new Array("jdbcsupp11.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "getresultset")
    Results = new Array("jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "setblob")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "empty")
    Results = new Array("jdbcsupp4.html","jdbcsupp6.html");
  else if (ParamSearchWord == "getpooledconnection")
    Results = new Array("jdbcsupp5.html","usejdbc4.html");
  else if (ParamSearchWord == "getexportedkeys")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "orderby")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsschemasintable")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "getmajorversion")
    Results = new Array("jdbcsupp8.html");
  else if (ParamSearchWord == "sqlexception")
    Results = new Array("jdbcsupp8.html","usejdbc7.html");
  else if (ParamSearchWord == "ntext")
    Results = new Array("getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "optimization")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "adjust")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "prefixed")
    Results = new Array("usejdbc7.html");
  else if (ParamSearchWord == "addition")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign7.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "procedures")
    Results = new Array("jdbcdesign5.html","jdbcsqlsrv.html","jdbcsqlsrv9.html","usejdbc8.html");
  else if (ParamSearchWord == "three")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "second")
    Results = new Array("jdbcdesign6.html","scalarfn3.html","jdbcsupp8.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "moving")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "contain")
    Results = new Array("jdbcdesign7.html","usejdbc4.html","scalarfn.html");
  else if (ParamSearchWord == "literal-type")
    Results = new Array("scalarfn2.html");
  else if (ParamSearchWord == "round")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "week")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "outer-join")
    Results = new Array("scalarfn4.html");
  else if (ParamSearchWord == "getshort")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html");
  else if (ParamSearchWord == "relative")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "getcolumntype")
    Results = new Array("jdbcsupp12.html");
  else if (ParamSearchWord == "rowset")
    Results = new Array("jdbcsupp13.html");
  else if (ParamSearchWord == "java.io")
    Results = new Array("jdbcsupp14.html");
  else if (ParamSearchWord == "input")
    Results = new Array("jdbcsupp2.html","jdbcdesign.html");
  else if (ParamSearchWord == "setbyte")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "connectionpooldata")
    Results = new Array("jdbcsupp5.html");
  else if (ParamSearchWord == "getimportedkeys")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsschemasinprocedure")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "attribute")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "problems")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "characters")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "javax.sql")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "sharing")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "permissions")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "plug-in")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "jndi")
    Results = new Array("jquikstart2.html","usejdbc2.html","usejdbc4.html");
  else if (ParamSearchWord == "quick")
    Results = new Array("jquikstart2.html","jquikstart.html");
  else if (ParamSearchWord == "metadata")
    Results = new Array("jdbcdesign2.html","jdbcdesign.html");
  else if (ParamSearchWord == "selected")
    Results = new Array("jdbcdesign2.html");

  return Results;
}
