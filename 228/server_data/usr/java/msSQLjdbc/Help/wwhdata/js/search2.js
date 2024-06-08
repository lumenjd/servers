function  Book_Search(ParamSearchWord)
{
  var  Results = null;


  if (ParamSearchWord == "nullable")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "net")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "instjdbc.sql")
    Results = new Array("jdbcsqlsrv9.html","usejdbc8.html");
  else if (ParamSearchWord == "external")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "delete")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "connection")
    Results = new Array("jquikstart2.html","jdbcdesign6.html","jdbcsqlsrv.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp6.html","jdbcsupp7.html","jdbcsupp8.html","jdbcsupp9.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","usejdbc2.html","usejdbc3.html","usejdbc4.html","usejdbc5.html");
  else if (ParamSearchWord == "explains")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "form")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "server1")
    Results = new Array("jquikstart2.html","jdbcsqlsrv4.html","usejdbc3.html");
  else if (ParamSearchWord == "multiple")
    Results = new Array("jdbcdesign2.html","jdbcdesign6.html","jdbcsqlsrv4.html");
  else if (ParamSearchWord == "resultsetmetadata")
    Results = new Array("jdbcdesign2.html","jdbcsupp11.html","jdbcsupp12.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "don't")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "getclob")
    Results = new Array("jdbcdesign4.html","jdbcsupp11.html","jdbcsupp3.html");
  else if (ParamSearchWord == "formats")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "followed")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "execution")
    Results = new Array("jdbcdesign5.html","jdbcsqlsrv9.html");
  else if (ParamSearchWord == "parsing")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "inside")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "however")
    Results = new Array("jdbcdesign5.html","jdbcsqlsrv3.html","jdbcsqlsrv9.html","jquikstart.html");
  else if (ParamSearchWord == "whenever")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "ltrim")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "updatecharacterstream")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "getprecision")
    Results = new Array("jdbcsupp12.html");
  else if (ParamSearchWord == "preparestatement")
    Results = new Array("jdbcsupp4.html");
  else if (ParamSearchWord == "getmaxcatalognamelength")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "getnumericfunctions")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "getschemas")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsgroupby")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "extend")
    Results = new Array("usejdbc.html");
  else if (ParamSearchWord == "cached")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "constrains")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "browser")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "store-specific")
    Results = new Array("scalarfn.html");
  else if (ParamSearchWord == "listed")
    Results = new Array("jquikstart2.html","scalarfn3.html");
  else if (ParamSearchWord == "needed")
    Results = new Array("jdbcdesign2.html","jdbcdesign6.html","jdbcdesign7.html","usejdbc4.html");
  else if (ParamSearchWord == "increases")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "penalty")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "text")
    Results = new Array("jdbcdesign4.html","getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "require")
    Results = new Array("jdbcdesign4.html","jdbcdesign5.html");
  else if (ParamSearchWord == "invoking")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "convert")
    Results = new Array("jdbcdesign5.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "entities")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "back")
    Results = new Array("jdbcdesign6.html","jdbcsqlsrv9.html");
  else if (ParamSearchWord == "default")
    Results = new Array("jdbcdesign6.html","jdbcsqlsrv3.html","jdbcsqlsrv7.html");
  else if (ParamSearchWord == "getref")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html");
  else if (ParamSearchWord == "insertrow")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "getdrivername")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "getmaxcolumnsinorderby")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsconvert")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsmultipletransactions")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportspositioneddelete")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "addconnectioneventlistener")
    Results = new Array("jdbcsupp8.html");
  else if (ParamSearchWord == "reclaim")
    Results = new Array("jdbcsupp8.html");
  else if (ParamSearchWord == "property")
    Results = new Array("jdbcsqlsrv3.html","jdbcsqlsrv4.html","usejdbc3.html");
  else if (ParamSearchWord == "mac")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "original")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "scroll-insensitive")
    Results = new Array("jdbcsqlsrv8.html");
  else if (ParamSearchWord == "automatically")
    Results = new Array("jdbcsqlsrv8.html");
  else if (ParamSearchWord == "assumes")
    Results = new Array("Preface.html");
  else if (ParamSearchWord == "reconfigure")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "ds.getconnection")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "checks")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "start")
    Results = new Array("jquikstart2.html","jdbcsqlsrv3.html","jquikstart.html");
  else if (ParamSearchWord == "details")
    Results = new Array("jquikstart2.html","jdbcsqlsrv.html","jquikstart.html","usejdbc7.html");
  else if (ParamSearchWord == "access")
    Results = new Array("jquikstart2.html","jdbcdesign7.html","usejdbc.html","usejdbc4.html","usejdbc6.html");
  else if (ParamSearchWord == "contents")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcdesign3.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html","jdbcdesign8.html","scalarfn2.html","scalarfn3.html","scalarfn4.html","scalarfn5.html","jdbcsqlsrv.html","jdbcsupp10.html","jdbcsupp11.html","jdbcsupp12.html","jdbcsupp13.html","jdbcsupp14.html","jdbcsupp15.html","jdbcsupp16.html","jdbcsupp17.html","jdbcsupp18.html","jdbcsupp2.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp5.html","jdbcsupp6.html","jdbcsupp7.html","jdbcsupp8.html","jdbcsupp9.html","jdbcsupp.html","getinfoapp.html","usejdbc.html","jdbcdesign.html","jdbcsqlsrv2.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","jdbcsqlsrv5.html","jdbcsqlsrv6.html","jdbcsqlsrv7.html","jdbcsqlsrv8.html","jdbcsqlsrv9.html","jquikstart.html","Preface.html","usejdbc2.html","usejdbc3.html","usejdbc4.html","usejdbc5.html","usejdbc6.html","usejdbc7.html","usejdbc8.html","scalarfn.html","Preface2.html");
  else if (ParamSearchWord == "objects")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html","jdbcdesign6.html","jdbcsupp2.html","jdbcdesign.html");
  else if (ParamSearchWord == "single")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html","jdbcdesign6.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "want")
    Results = new Array("jdbcdesign4.html","scalarfn4.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html");
  else if (ParamSearchWord == "items")
    Results = new Array("jdbcdesign4.html","Preface2.html");
  else if (ParamSearchWord == "retrieved")
    Results = new Array("jdbcdesign4.html","jdbcdesign5.html","jdbcdesign7.html");
  else if (ParamSearchWord == "certain")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "planned")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "disconnect")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "new")
    Results = new Array("jdbcdesign6.html","usejdbc4.html","Preface2.html");
  else if (ParamSearchWord == "updates")
    Results = new Array("jdbcdesign7.html","jdbcdesign8.html");
  else if (ParamSearchWord == "emp")
    Results = new Array("jdbcdesign7.html","scalarfn3.html");
  else if (ParamSearchWord == "consists")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "ifnull")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "issigned")
    Results = new Array("jdbcsupp12.html");
  else if (ParamSearchWord == "iswritable")
    Results = new Array("jdbcsupp12.html");
  else if (ParamSearchWord == "getmaxschemanamelength")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "getprocedurecolumns")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "insertsaredetected")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "prec")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "prefix")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "supplied")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "card")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "java.util.propertypermission")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "distinct")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "includes")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "command")
    Results = new Array("jquikstart2.html","jdbcsqlsrv9.html");
  else if (ParamSearchWord == "resultset")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html","jdbcdesign7.html","jdbcsupp11.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp6.html","jdbcsupp9.html");
  else if (ParamSearchWord == "size")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "usually")
    Results = new Array("jdbcdesign4.html","jdbcdesign6.html","jdbcdesign7.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "designed")
    Results = new Array("jdbcdesign6.html","jdbcdesign7.html");
  else if (ParamSearchWord == "dayofweek")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "monthname")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "rowdeleted")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "setdouble")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "nativesql")
    Results = new Array("jdbcsupp4.html");
  else if (ParamSearchWord == "addcolumn")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "tinyint")
    Results = new Array("getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "compliant")
    Results = new Array("usejdbc2.html");
  else if (ParamSearchWord == "java.io.filepermission")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "delineate")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "found")
    Results = new Array("jquikstart2.html","usejdbc6.html");
  else if (ParamSearchWord == "list")
    Results = new Array("jquikstart2.html","jdbcdesign4.html","jdbcsupp2.html","usejdbc3.html","usejdbc5.html");
  else if (ParamSearchWord == "need")
    Results = new Array("jdbcdesign3.html","jdbcdesign4.html","jdbcdesign7.html","jdbcsqlsrv3.html","usejdbc4.html","usejdbc7.html");
  else if (ParamSearchWord == "again")
    Results = new Array("jdbcdesign4.html","jdbcdesign7.html");
  else if (ParamSearchWord == "lets")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "1995")
    Results = new Array("scalarfn2.html");
  else if (ParamSearchWord == "getrow")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "short")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "setlogintimeout")
    Results = new Array("jdbcsupp5.html","jdbcsupp7.html");
  else if (ParamSearchWord == "getstringfunctions")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsbatchupdates")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportscatalogsinprivilege")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportscoresqlgrammar")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsdatadefinitionanddata")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "removeconnectionevent")
    Results = new Array("jdbcsupp8.html");
  else if (ParamSearchWord == "sysname")
    Results = new Array("getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "determines")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "backslash")
    Results = new Array("jdbcsqlsrv4.html");
  else if (ParamSearchWord == "file")
    Results = new Array("jdbcsqlsrv9.html","Preface.html","usejdbc6.html","usejdbc8.html","Preface2.html");
  else if (ParamSearchWord == "security")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "indicates")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "braces")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "machine")
    Results = new Array("jquikstart2.html","jdbcsupp.html","usejdbc3.html","usejdbc6.html");
  else if (ParamSearchWord == "complete")
    Results = new Array("jquikstart2.html","jdbcsqlsrv3.html","usejdbc3.html");
  else if (ParamSearchWord == "optimize")
    Results = new Array("jdbcdesign2.html","jdbcdesign3.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html","jdbcdesign8.html","jdbcdesign.html");
  else if (ParamSearchWord == "relatively")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "setmaxrows")
    Results = new Array("jdbcdesign4.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "improves")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "holding")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "conclusion")
    Results = new Array("jdbcdesign8.html");
  else if (ParamSearchWord == "escape")
    Results = new Array("scalarfn2.html","scalarfn4.html","scalarfn5.html","jdbcsqlsrv4.html","jdbcsqlsrv6.html","scalarfn.html");
  else if (ParamSearchWord == "timedate")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "substring")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "installing")
    Results = new Array("jdbcsqlsrv.html","jdbcsqlsrv9.html","usejdbc8.html");
  else if (ParamSearchWord == "unsupported")
    Results = new Array("jdbcsupp11.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "setbinarystream")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "supportscatalogsintable")
    Results = new Array("jdbcsupp6.html");

  return Results;
}
