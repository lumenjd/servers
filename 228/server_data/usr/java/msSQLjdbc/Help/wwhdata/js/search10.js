function  Book_Search(ParamSearchWord)
{
  var  Results = null;


  if (ParamSearchWord == "special")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "dayofmonth")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "bottom")
    Results = new Array("jdbcsupp2.html");
  else if (ParamSearchWord == "getmaxtablenamelength")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsansi92intermediate")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "jre")
    Results = new Array("jdbcsupp.html","usejdbc6.html");
  else if (ParamSearchWord == "jdk")
    Results = new Array("jdbcsupp.html","usejdbc6.html");
  else if (ParamSearchWord == "say")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "hostprocess")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "service")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "relevant")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "separator")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "connect")
    Results = new Array("jquikstart2.html","jdbcdesign6.html","jdbcsupp8.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","jquikstart.html","usejdbc3.html","usejdbc4.html","usejdbc6.html");
  else if (ParamSearchWord == "using")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html","jdbcsupp.html","usejdbc.html","jdbcdesign.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","jdbcsqlsrv8.html","jquikstart.html","Preface.html","usejdbc3.html","usejdbc4.html","usejdbc5.html","usejdbc6.html");
  else if (ParamSearchWord == "2000")
    Results = new Array("jquikstart2.html","scalarfn3.html","scalarfn4.html","jdbcsqlsrv.html","jdbcsupp.html","getinfoapp.html","usejdbc.html","jdbcsqlsrv2.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","jdbcsqlsrv5.html","jdbcsqlsrv9.html","jquikstart.html","usejdbc2.html","usejdbc3.html","usejdbc4.html","usejdbc5.html","usejdbc6.html","usejdbc7.html","usejdbc8.html","scalarfn.html");
  else if (ParamSearchWord == "containing")
    Results = new Array("jquikstart2.html","usejdbc3.html","usejdbc7.html","usejdbc8.html");
  else if (ParamSearchWord == "setting")
    Results = new Array("jquikstart2.html","jdbcdesign6.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "class")
    Results = new Array("jquikstart2.html","jdbcsqlsrv2.html","usejdbc4.html","usejdbc6.html");
  else if (ParamSearchWord == "installation")
    Results = new Array("jquikstart2.html","jdbcsqlsrv9.html","jquikstart.html","usejdbc6.html","usejdbc8.html");
  else if (ParamSearchWord == "difficult")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "outperforms")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "additionally")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "general")
    Results = new Array("jdbcdesign7.html","jdbcsqlsrv9.html");
  else if (ParamSearchWord == "hour")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "updatenull")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "setfloat")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "doesmaxrowsizeincludeblobs")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "getsearchstringescape")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "acceptsurl")
    Results = new Array("jdbcsupp8.html");
  else if (ParamSearchWord == "java-enabled")
    Results = new Array("usejdbc.html");
  else if (ParamSearchWord == "sysprocesses")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "committed")
    Results = new Array("jdbcsqlsrv7.html");
  else if (ParamSearchWord == "recognized")
    Results = new Array("scalarfn.html");
  else if (ParamSearchWord == "pass")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcdesign6.html");
  else if (ParamSearchWord == "password")
    Results = new Array("jquikstart2.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","jdbcsqlsrv9.html","usejdbc3.html");
  else if (ParamSearchWord == "evaluated")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "minutely")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "across")
    Results = new Array("jdbcdesign4.html","usejdbc.html","usejdbc4.html");
  else if (ParamSearchWord == "subsequent")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "ideal")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "levels")
    Results = new Array("jdbcdesign5.html","jdbcsqlsrv7.html");
  else if (ParamSearchWord == "bad")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "off")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "distributed")
    Results = new Array("jdbcdesign6.html","jdbcsqlsrv.html","jdbcsqlsrv9.html");
  else if (ParamSearchWord == "reader")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "getobject")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html");
  else if (ParamSearchWord == "updateshort")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "isdefinitelywritable")
    Results = new Array("jdbcsupp12.html");
  else if (ParamSearchWord == "nor")
    Results = new Array("jdbcsupp2.html");
  else if (ParamSearchWord == "returns")
    Results = new Array("jdbcsupp3.html","jdbcsupp4.html","jdbcsupp6.html","jdbcsupp9.html","usejdbc4.html");
  else if (ParamSearchWord == "supportscatalogsindata")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportslikeescapeclause")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsnonnullablecolumns")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsschemasinindex")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsschemasin")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "decimal")
    Results = new Array("getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "128")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "per")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "asunicode")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "minimal")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "javax.sql.connectionpooldatasource")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "compare")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "terms")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "driver")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcdesign4.html","jdbcdesign6.html","scalarfn3.html","scalarfn4.html","jdbcsqlsrv.html","jdbcsupp8.html","jdbcsupp.html","getinfoapp.html","usejdbc.html","jdbcdesign.html","jdbcsqlsrv2.html","jdbcsqlsrv3.html","jdbcsqlsrv5.html","jdbcsqlsrv6.html","jdbcsqlsrv8.html","jdbcsqlsrv9.html","jquikstart.html","usejdbc2.html","usejdbc3.html","usejdbc4.html","usejdbc5.html","usejdbc6.html","usejdbc7.html","usejdbc8.html","scalarfn.html");
  else if (ParamSearchWord == "sql")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html","scalarfn3.html","scalarfn4.html","scalarfn5.html","jdbcsqlsrv.html","jdbcsupp6.html","jdbcsupp.html","getinfoapp.html","usejdbc.html","jdbcdesign.html","jdbcsqlsrv2.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","jdbcsqlsrv5.html","jdbcsqlsrv6.html","jdbcsqlsrv7.html","jdbcsqlsrv8.html","jdbcsqlsrv9.html","jquikstart.html","usejdbc2.html","usejdbc3.html","usejdbc4.html","usejdbc5.html","usejdbc6.html","usejdbc7.html","usejdbc8.html","scalarfn.html");
  else if (ParamSearchWord == "load")
    Results = new Array("jquikstart2.html","jdbcdesign5.html");
  else if (ParamSearchWord == "names")
    Results = new Array("jquikstart2.html","jdbcsupp6.html","jdbcsqlsrv3.html","Preface2.html");
  else if (ParamSearchWord == "without")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign7.html","usejdbc4.html");
  else if (ParamSearchWord == "invoke")
    Results = new Array("jdbcdesign2.html","jdbcsupp8.html");
  else if (ParamSearchWord == "wsrc.next")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "unnecessary")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "avoided")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "forward-only")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "forwards")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "associated")
    Results = new Array("jdbcdesign6.html","Preface2.html");
  else if (ParamSearchWord == "world")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "operations")
    Results = new Array("jdbcdesign7.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "therefore")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "dayofyear")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "getlong")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html");
  else if (ParamSearchWord == "gettransactionisolation")
    Results = new Array("jdbcsupp4.html");
  else if (ParamSearchWord == "deletesaredetected")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "getmaxindexlength")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "nullplusnonnullisnull")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "definitions")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "behavior")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "occur")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "obtains")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "act")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "passing")
    Results = new Array("jquikstart2.html","usejdbc3.html");
  else if (ParamSearchWord == "patterns")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "success")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "ctype")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "isolate")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "flexibility")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "commit")
    Results = new Array("jdbcdesign6.html","jdbcsupp4.html","jdbcsupp6.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "impairs")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "insert")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "orders.status")
    Results = new Array("scalarfn4.html");
  else if (ParamSearchWord == "getfetchsize")
    Results = new Array("jdbcsupp11.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "updatefloat")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "struct")
    Results = new Array("jdbcsupp15.html");
  else if (ParamSearchWord == "xaconnection")
    Results = new Array("jdbcsupp17.html");
  else if (ParamSearchWord == "getschematerm")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsschemasindata")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "versions")
    Results = new Array("jdbcsupp.html");
  else if (ParamSearchWord == "suffix")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "unsigned")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "point-to-point")
    Results = new Array("usejdbc.html");
  else if (ParamSearchWord == "compiled")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "com.microsoft.jdbcx.sqlserver.sqlserverdatasource")
    Results = new Array("jdbcsqlsrv2.html","usejdbc8.html");
  else if (ParamSearchWord == "dbms-specific")
    Results = new Array("scalarfn.html");
  else if (ParamSearchWord == "occasionally")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "entries")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "ping")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "produce")
    Results = new Array("jdbcdesign2.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "assumed")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "sent")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "generates")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html","jdbcsqlsrv8.html","jdbcsqlsrv9.html");
  else if (ParamSearchWord == "even")
    Results = new Array("jdbcdesign4.html","jdbcdesign5.html","scalarfn.html");
  else if (ParamSearchWord == "careful")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "fetches")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "afford")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "buffer")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "updateint")
    Results = new Array("jdbcdesign7.html","jdbcsupp11.html");
  else if (ParamSearchWord == "pseudo-columns")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "log")
    Results = new Array("scalarfn3.html","jdbcsqlsrv9.html");
  else if (ParamSearchWord == "sqrt")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "updatedouble")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "executeupdate")
    Results = new Array("jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "setdate")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "getautocommit")
    Results = new Array("jdbcsupp4.html");
  else if (ParamSearchWord == "getmaxcolumnsingroupby")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "gettimedatefunctions")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsresultsetconcurrency")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "1.1.8")
    Results = new Array("jdbcsupp.html");
  else if (ParamSearchWord == "delivers")
    Results = new Array("usejdbc.html");
  else if (ParamSearchWord == "exceptions")
    Results = new Array("jdbcdesign.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "portnumber")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "affected")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "completely")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "serious")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "downgrades")
    Results = new Array("jdbcsqlsrv8.html");
  else if (ParamSearchWord == "naming")
    Results = new Array("usejdbc2.html","usejdbc4.html");
  else if (ParamSearchWord == "pool")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "java.naming")
    Results = new Array("usejdbc6.html");

  return Results;
}
