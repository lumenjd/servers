function  Book_Search(ParamSearchWord)
{
  var  Results = null;


  if (ParamSearchWord == "conventions")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "server")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html","scalarfn3.html","scalarfn4.html","jdbcsqlsrv.html","jdbcsupp8.html","jdbcsupp.html","getinfoapp.html","usejdbc.html","jdbcdesign.html","jdbcsqlsrv2.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","jdbcsqlsrv5.html","jdbcsqlsrv6.html","jdbcsqlsrv7.html","jdbcsqlsrv8.html","jdbcsqlsrv9.html","jquikstart.html","usejdbc2.html","usejdbc3.html","usejdbc4.html","usejdbc5.html","usejdbc6.html","usejdbc7.html","usejdbc8.html","scalarfn.html");
  else if (ParamSearchWord == "specify")
    Results = new Array("jquikstart2.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","usejdbc5.html","Preface2.html");
  else if (ParamSearchWord == "verifying")
    Results = new Array("jquikstart2.html");
  else if (ParamSearchWord == "object")
    Results = new Array("jdbcdesign2.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html","scalarfn5.html","jdbcsupp10.html","jdbcsupp11.html","jdbcsupp12.html","jdbcsupp13.html","jdbcsupp14.html","jdbcsupp15.html","jdbcsupp16.html","jdbcsupp17.html","jdbcsupp18.html","jdbcsupp2.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp5.html","jdbcsupp6.html","jdbcsupp7.html","jdbcsupp8.html","jdbcsupp9.html","usejdbc4.html","usejdbc7.html");
  else if (ParamSearchWord == "wsc.preparestatement")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "formulate")
    Results = new Array("jdbcdesign4.html","jdbcdesign7.html");
  else if (ParamSearchWord == "contains")
    Results = new Array("jdbcdesign4.html","jdbcdesign6.html","jdbcdesign7.html","usejdbc7.html","usejdbc8.html");
  else if (ParamSearchWord == "12345")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "updated")
    Results = new Array("jdbcdesign6.html","jdbcdesign7.html");
  else if (ParamSearchWord == "update")
    Results = new Array("jdbcdesign7.html","scalarfn2.html");
  else if (ParamSearchWord == "generally")
    Results = new Array("jdbcdesign7.html","scalarfn5.html");
  else if (ParamSearchWord == "difference")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "extract")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "jta")
    Results = new Array("jdbcsqlsrv.html","jdbcsqlsrv3.html","jdbcsqlsrv9.html","usejdbc8.html");
  else if (ParamSearchWord == "beforefirst")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "typename")
    Results = new Array("jdbcsupp3.html");
  else if (ParamSearchWord == "setbytes")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "setunicodestream")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "pooledconnection")
    Results = new Array("jdbcsupp5.html","jdbcsupp8.html","usejdbc4.html");
  else if (ParamSearchWord == "geturl")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "encoding")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "master.dbo.sysprocesses")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "remains")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "establishes")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "microsoft.com")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "grammar")
    Results = new Array("scalarfn.html");
  else if (ParamSearchWord == "slash")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "item")
    Results = new Array("Preface2.html");

  return Results;
}
