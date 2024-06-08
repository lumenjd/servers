function  Book_Search(ParamSearchWord)
{
  var  Results = null;


  if (ParamSearchWord == "core")
    Results = new Array("jdbcsupp10.html","jdbcsupp11.html","jdbcsupp12.html","jdbcsupp16.html","jdbcsupp2.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp6.html","jdbcsupp9.html");
  else if (ParamSearchWord == "supportsfullouterjoins")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "running")
    Results = new Array("jdbcdesign.html","jdbcsqlsrv4.html","jdbcsqlsrv9.html","usejdbc6.html");
  else if (ParamSearchWord == "similar")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "uncommitted")
    Results = new Array("jdbcsqlsrv7.html");
  else if (ParamSearchWord == "usa")
    Results = new Array("jdbcsqlsrv9.html");
  else if (ParamSearchWord == "main")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "datasource.getconnection")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "additional")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "ellipsis")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "specific")
    Results = new Array("jquikstart2.html","jdbcdesign7.html","usejdbc5.html","Preface2.html");
  else if (ParamSearchWord == "selecting")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html","jdbcdesign8.html","jdbcdesign.html");
  else if (ParamSearchWord == "little")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "send")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "catalogs")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "wssmd")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "pay")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "already")
    Results = new Array("jdbcdesign5.html","jdbcdesign7.html");
  else if (ParamSearchWord == "depending")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "several")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "implementation")
    Results = new Array("jdbcdesign6.html","jdbcdesign8.html","jdbcsupp8.html","usejdbc4.html");
  else if (ParamSearchWord == "developer")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "rs.getint")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "iscatalogatstart")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "storesuppercaseidentifiers")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "jdbccompliant")
    Results = new Array("jdbcsupp8.html");
  else if (ParamSearchWord == "compatibility")
    Results = new Array("jdbcsupp.html");
  else if (ParamSearchWord == "applet")
    Results = new Array("usejdbc.html");
  else if (ParamSearchWord == "databasename")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "gives")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "free")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "throwing")
    Results = new Array("usejdbc7.html");
  else if (ParamSearchWord == "manager")
    Results = new Array("jquikstart2.html","jdbcsqlsrv3.html","usejdbc3.html","usejdbc4.html","usejdbc5.html","usejdbc6.html");
  else if (ParamSearchWord == "classpath")
    Results = new Array("jquikstart2.html","usejdbc8.html");
  else if (ParamSearchWord == "computer")
    Results = new Array("jquikstart2.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "generate")
    Results = new Array("jdbcdesign2.html","jdbcdesign8.html");
  else if (ParamSearchWord == "executions")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html");
  else if (ParamSearchWord == "generated")
    Results = new Array("jdbcdesign2.html","jdbcsqlsrv3.html","usejdbc7.html");
  else if (ParamSearchWord == "getblob")
    Results = new Array("jdbcdesign4.html","jdbcsupp11.html","jdbcsupp3.html");
  else if (ParamSearchWord == "lack")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "actually")
    Results = new Array("jdbcdesign5.html","jdbcdesign6.html");
  else if (ParamSearchWord == "native")
    Results = new Array("jdbcdesign5.html","usejdbc7.html");
  else if (ParamSearchWord == "perceived")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "temporary")
    Results = new Array("jdbcdesign5.html","usejdbc6.html");
  else if (ParamSearchWord == "connections")
    Results = new Array("jdbcdesign6.html","jdbcdesign8.html","jdbcsupp8.html","jdbcsqlsrv3.html","usejdbc4.html");
  else if (ParamSearchWord == "making")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "process")
    Results = new Array("jdbcdesign7.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "pseudo-column")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "condition")
    Results = new Array("scalarfn4.html");
  else if (ParamSearchWord == "customers.custid")
    Results = new Array("scalarfn4.html");
  else if (ParamSearchWord == "exception")
    Results = new Array("jdbcsupp11.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html","usejdbc6.html");
  else if (ParamSearchWord == "updatelong")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "addbatch")
    Results = new Array("jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "downgraded")
    Results = new Array("jdbcsupp4.html");
  else if (ParamSearchWord == "preparecall")
    Results = new Array("jdbcsupp4.html");
  else if (ParamSearchWord == "setlogwriter")
    Results = new Array("jdbcsupp5.html","jdbcsupp7.html");
  else if (ParamSearchWord == "dropcolumn")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "fetched")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "binn")
    Results = new Array("jdbcsqlsrv9.html");
  else if (ParamSearchWord == "originating")
    Results = new Array("usejdbc3.html");
  else if (ParamSearchWord == "ships")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "hen")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "convention")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "template")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "substitute")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "although")
    Results = new Array("jdbcdesign4.html","jdbcdesign6.html","jdbcdesign7.html","jdbcsqlsrv.html");
  else if (ParamSearchWord == "screen")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "established")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "systems")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "pointers")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "getbyte")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html");
  else if (ParamSearchWord == "clob")
    Results = new Array("jdbcsupp11.html","jdbcsupp2.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "updatebigdecimal")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "getcatalogname")
    Results = new Array("jdbcsupp12.html");
  else if (ParamSearchWord == "getcatalogseparator")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "updatesaredetected")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "connectioneventlistener")
    Results = new Array("jdbcsupp8.html","usejdbc4.html");
  else if (ParamSearchWord == "tier")
    Results = new Array("usejdbc.html");
  else if (ParamSearchWord == "evaluation")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "read")
    Results = new Array("jdbcsqlsrv7.html","jquikstart.html","usejdbc6.html");
  else if (ParamSearchWord == "takes")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "manages")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "third-party")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "page")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcdesign3.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html","jdbcdesign8.html","scalarfn2.html","scalarfn3.html","scalarfn4.html","scalarfn5.html","jdbcsqlsrv.html","jdbcsupp10.html","jdbcsupp11.html","jdbcsupp12.html","jdbcsupp13.html","jdbcsupp14.html","jdbcsupp15.html","jdbcsupp16.html","jdbcsupp17.html","jdbcsupp18.html","jdbcsupp2.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp5.html","jdbcsupp6.html","jdbcsupp7.html","jdbcsupp8.html","jdbcsupp9.html","jdbcsupp.html","getinfoapp.html","usejdbc.html","jdbcdesign.html","jdbcsqlsrv2.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","jdbcsqlsrv5.html","jdbcsqlsrv6.html","jdbcsqlsrv7.html","jdbcsqlsrv8.html","jdbcsqlsrv9.html","jquikstart.html","Preface.html","usejdbc2.html","usejdbc3.html","usejdbc4.html","usejdbc5.html","usejdbc6.html","usejdbc7.html","usejdbc8.html","scalarfn.html","Preface2.html");
  else if (ParamSearchWord == "help")
    Results = new Array("jdbcdesign2.html","jdbcdesign3.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html","Preface.html","usejdbc8.html","Preface2.html");
  else if (ParamSearchWord == "numcols")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "specifying")
    Results = new Array("jdbcdesign4.html","usejdbc5.html");
  else if (ParamSearchWord == "callablestatement")
    Results = new Array("jdbcdesign5.html","jdbcsupp3.html","jdbcsupp4.html");
  else if (ParamSearchWord == "cursors")
    Results = new Array("jdbcdesign5.html","jdbcsqlsrv3.html","jdbcsqlsrv8.html","usejdbc6.html");
  else if (ParamSearchWord == "dynamic")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "good")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "separate")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "tip")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "location")
    Results = new Array("jdbcdesign7.html","jdbcsqlsrv9.html");
  else if (ParamSearchWord == "sequence")
    Results = new Array("scalarfn2.html","scalarfn4.html","scalarfn5.html","scalarfn.html");
  else if (ParamSearchWord == "timestampdiff")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "getwarnings")
    Results = new Array("jdbcsupp11.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp9.html");
  else if (ParamSearchWord == "getcolumntypename")
    Results = new Array("jdbcsupp12.html");
  else if (ParamSearchWord == "setbigdecimal")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "getextranamecharacters")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportscatalogsinindex")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "output")
    Results = new Array("jdbcdesign.html","jdbcsqlsrv9.html");
  else if (ParamSearchWord == "show")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "experiment")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "script")
    Results = new Array("jdbcsqlsrv9.html");
  else if (ParamSearchWord == "javax.sql.datasource")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "context")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "platform")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "client-side")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "applicable")
    Results = new Array("usejdbc7.html");
  else if (ParamSearchWord == "online")
    Results = new Array("usejdbc8.html");
  else if (ParamSearchWord == "bold")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "emphasizes")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "monospaced")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "data")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcdesign3.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html","jdbcdesign8.html","scalarfn3.html","scalarfn4.html","scalarfn5.html","getinfoapp.html","jdbcdesign.html","jdbcsqlsrv2.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","jdbcsqlsrv5.html","usejdbc2.html","usejdbc4.html","usejdbc5.html","usejdbc6.html","usejdbc8.html","scalarfn.html");
  else if (ParamSearchWord == "information")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcdesign6.html","jdbcsqlsrv2.html","jdbcsqlsrv6.html","jdbcsqlsrv8.html","jquikstart.html","usejdbc4.html","usejdbc5.html","usejdbc6.html","usejdbc7.html","Preface2.html");
  else if (ParamSearchWord == "host")
    Results = new Array("jquikstart2.html","jdbcsqlsrv3.html","usejdbc3.html","usejdbc6.html");
  else if (ParamSearchWord == "correct")
    Results = new Array("jquikstart2.html","jdbcdesign5.html","Preface2.html");
  else if (ParamSearchWord == "query")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign7.html","usejdbc4.html");
  else if (ParamSearchWord == "wsrsmd.getcolumntype")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "overhead")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "cstmt.executequery")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "sensitive")
    Results = new Array("jdbcdesign5.html","jdbcsupp4.html","getinfoapp.html");
  else if (ParamSearchWord == "routine")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "preventing")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "rs.updaterow")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "positioned")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "rtrim")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "optional")
    Results = new Array("jdbcsupp13.html","jdbcsupp17.html","jdbcsupp18.html","jdbcsupp5.html","jdbcsupp7.html","jdbcsupp8.html","jdbcsqlsrv3.html","usejdbc2.html","usejdbc4.html","Preface2.html");
  else if (ParamSearchWord == "setescapeprocessing")
    Results = new Array("jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "nullsaresortedatstart")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "owninsertsarevisible")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportscatalogsinprocedure")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportscolumnaliasing")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "uniqueidentifier")
    Results = new Array("getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "internally")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "typical")
    Results = new Array("usejdbc3.html");
  else if (ParamSearchWord == "tool")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "temp")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "defined")
    Results = new Array("jquikstart2.html","jdbcdesign4.html","jdbcdesign6.html","jdbcdesign7.html","usejdbc4.html","scalarfn.html");
  else if (ParamSearchWord == "1433")
    Results = new Array("jquikstart2.html","jdbcsqlsrv3.html","usejdbc3.html");

  return Results;
}
