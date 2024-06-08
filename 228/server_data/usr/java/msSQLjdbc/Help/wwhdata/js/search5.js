function  Book_Search(ParamSearchWord)
{
  var  Results = null;


  if (ParamSearchWord == "request")
    Results = new Array("jdbcdesign4.html","jdbcdesign5.html","jdbcsqlsrv3.html","usejdbc4.html");
  else if (ParamSearchWord == "designer")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "exposing")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "functions")
    Results = new Array("jdbcdesign5.html","jdbcdesign8.html","scalarfn3.html","scalarfn.html");
  else if (ParamSearchWord == "gathering")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "supplies")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "store")
    Results = new Array("scalarfn3.html","scalarfn4.html","scalarfn5.html","jdbcsqlsrv9.html");
  else if (ParamSearchWord == "orders.custid")
    Results = new Array("scalarfn4.html");
  else if (ParamSearchWord == "yes")
    Results = new Array("jdbcsupp10.html","jdbcsupp11.html","jdbcsupp12.html","jdbcsupp14.html","jdbcsupp16.html","jdbcsupp17.html","jdbcsupp18.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp5.html","jdbcsupp6.html","jdbcsupp7.html","jdbcsupp8.html","jdbcsupp9.html","jdbcsupp.html","Preface2.html");
  else if (ParamSearchWord == "movetocurrentrow")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "executebatch")
    Results = new Array("jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "getmaxfieldsize")
    Results = new Array("jdbcsupp16.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "successive")
    Results = new Array("jdbcsupp2.html");
  else if (ParamSearchWord == "createstatement")
    Results = new Array("jdbcsupp4.html");
  else if (ParamSearchWord == "allowing")
    Results = new Array("jdbcsupp8.html","usejdbc.html");
  else if (ParamSearchWord == "auto")
    Results = new Array("getinfoapp.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "developing")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "solution")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "simplify")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "application-to-driver")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "programname")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "small")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "preceding")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "error")
    Results = new Array("jquikstart2.html","jdbcsqlsrv3.html","jdbcsqlsrv9.html","usejdbc7.html");
  else if (ParamSearchWord == "queries")
    Results = new Array("jdbcdesign2.html","jdbcdesign7.html","jdbcdesign.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "fewest")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "sometimes")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign5.html");
  else if (ParamSearchWord == "choosing")
    Results = new Array("jdbcdesign4.html","jdbcdesign5.html","jdbcdesign6.html");
  else if (ParamSearchWord == "contrast")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "backwards")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "supported")
    Results = new Array("scalarfn3.html","scalarfn4.html","jdbcsupp10.html","jdbcsupp11.html","jdbcsupp12.html","jdbcsupp13.html","jdbcsupp14.html","jdbcsupp15.html","jdbcsupp16.html","jdbcsupp17.html","jdbcsupp18.html","jdbcsupp2.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp5.html","jdbcsupp6.html","jdbcsupp7.html","jdbcsupp8.html","jdbcsupp9.html","jdbcsqlsrv3.html","jdbcsqlsrv5.html","jdbcsqlsrv6.html");
  else if (ParamSearchWord == "javax.naming")
    Results = new Array("jdbcsupp10.html","usejdbc4.html");
  else if (ParamSearchWord == "getfloat")
    Results = new Array("jdbcsupp11.html","jdbcsupp3.html");
  else if (ParamSearchWord == "registeroutparameter")
    Results = new Array("jdbcsupp3.html");
  else if (ParamSearchWord == "setreadonly")
    Results = new Array("jdbcsupp4.html");
  else if (ParamSearchWord == "getmaxstatements")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportslimitedouterjoins")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "useslocalfilepertable")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "alphabetical")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "smalldatetime")
    Results = new Array("getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "blocks")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "prompt")
    Results = new Array("jdbcsqlsrv9.html");
  else if (ParamSearchWord == "commands")
    Results = new Array("Preface.html","Preface2.html");
  else if (ParamSearchWord == "registered")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "somehow")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "resultsets")
    Results = new Array("usejdbc6.html");
  else if (ParamSearchWord == "drivers")
    Results = new Array("jquikstart2.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign.html","usejdbc4.html");
  else if (ParamSearchWord == "install")
    Results = new Array("jquikstart2.html","jdbcsqlsrv.html","jdbcsqlsrv9.html");
  else if (ParamSearchWord == "next")
    Results = new Array("jquikstart2.html","jdbcdesign2.html","jdbcdesign3.html","jdbcdesign4.html","jdbcdesign5.html","jdbcdesign6.html","jdbcdesign7.html","jdbcdesign8.html","scalarfn2.html","scalarfn3.html","scalarfn4.html","scalarfn5.html","jdbcsqlsrv.html","jdbcsupp10.html","jdbcsupp11.html","jdbcsupp12.html","jdbcsupp13.html","jdbcsupp14.html","jdbcsupp15.html","jdbcsupp16.html","jdbcsupp17.html","jdbcsupp18.html","jdbcsupp2.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp5.html","jdbcsupp6.html","jdbcsupp7.html","jdbcsupp8.html","jdbcsupp9.html","jdbcsupp.html","getinfoapp.html","usejdbc.html","jdbcdesign.html","jdbcsqlsrv2.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","jdbcsqlsrv5.html","jdbcsqlsrv6.html","jdbcsqlsrv7.html","jdbcsqlsrv8.html","jdbcsqlsrv9.html","jquikstart.html","Preface.html","usejdbc2.html","usejdbc3.html","usejdbc4.html","usejdbc5.html","usejdbc6.html","usejdbc7.html","usejdbc8.html","scalarfn.html","Preface2.html");
  else if (ParamSearchWord == "know")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "especially")
    Results = new Array("jdbcdesign4.html","jdbcdesign5.html","jdbcdesign6.html");
  else if (ParamSearchWord == "expensive")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "committing")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "disk")
    Results = new Array("jdbcdesign6.html","jdbcdesign.html");
  else if (ParamSearchWord == "involve")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "involved")
    Results = new Array("jdbcdesign6.html","jdbcsqlsrv9.html");
  else if (ParamSearchWord == "syntax")
    Results = new Array("scalarfn3.html","scalarfn4.html","jdbcsqlsrv9.html","scalarfn.html","Preface2.html");
  else if (ParamSearchWord == "outer")
    Results = new Array("scalarfn4.html","scalarfn.html");
  else if (ParamSearchWord == "absolute")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "1.0")
    Results = new Array("jdbcsupp11.html","jdbcsupp12.html","jdbcsupp16.html","jdbcsupp3.html","jdbcsupp4.html","jdbcsupp6.html","jdbcsupp8.html","jdbcsupp9.html");
  else if (ParamSearchWord == "isbeforefirst")
    Results = new Array("jdbcsupp11.html");
  else if (ParamSearchWord == "getmaxcharliterallength")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "othersinsertsarevisible")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "give")
    Results = new Array("jdbcsupp8.html","usejdbc6.html");
  else if (ParamSearchWord == "1.0.2")
    Results = new Array("jdbcsupp.html");
  else if (ParamSearchWord == "excessive")
    Results = new Array("jdbcdesign.html");
  else if (ParamSearchWord == "mapped")
    Results = new Array("jdbcsqlsrv5.html");
  else if (ParamSearchWord == "logical")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "loads")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "initialcontext")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "finally")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "probable")
    Results = new Array("usejdbc7.html");
  else if (ParamSearchWord == "explanation")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "connecting")
    Results = new Array("jquikstart2.html","jdbcdesign6.html","jdbcsqlsrv2.html","jdbcsqlsrv3.html","jdbcsqlsrv4.html","usejdbc3.html","usejdbc4.html","usejdbc5.html");
  else if (ParamSearchWord == "select")
    Results = new Array("jdbcdesign2.html","jdbcdesign4.html","jdbcdesign7.html","scalarfn3.html","scalarfn4.html","jdbcsqlsrv3.html","Preface2.html");
  else if (ParamSearchWord == "clearly")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "somewhat")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "long")
    Results = new Array("jdbcdesign4.html","jdbcdesign5.html","jdbcdesign6.html","jdbcsupp11.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "realize")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "executing")
    Results = new Array("jdbcdesign5.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "issues")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "first")
    Results = new Array("jdbcdesign5.html","jdbcdesign7.html","jdbcsupp11.html","getinfoapp.html","jdbcsqlsrv4.html","usejdbc4.html");
  else if (ParamSearchWord == "collection")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "databases")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "opendate")
    Results = new Array("scalarfn2.html");
  else if (ParamSearchWord == "lcase")
    Results = new Array("scalarfn3.html");
  else if (ParamSearchWord == "space")
    Results = new Array("scalarfn3.html","jdbcsqlsrv9.html");
  else if (ParamSearchWord == "button")
    Results = new Array("jdbcsupp2.html","Preface2.html");
  else if (ParamSearchWord == "exposed")
    Results = new Array("jdbcsupp2.html");
  else if (ParamSearchWord == "settimestamp")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "rolled-back")
    Results = new Array("jdbcsupp4.html");
  else if (ParamSearchWord == "throw")
    Results = new Array("jdbcsupp8.html","jdbcdesign.html","usejdbc6.html");
  else if (ParamSearchWord == "1.1")
    Results = new Array("jdbcsupp.html","usejdbc6.html");
  else if (ParamSearchWord == "fixed")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "minimum")
    Results = new Array("getinfoapp.html");
  else if (ParamSearchWord == "appears")
    Results = new Array("jdbcsqlsrv3.html");
  else if (ParamSearchWord == "means")
    Results = new Array("jdbcsqlsrv3.html","Preface2.html");
  else if (ParamSearchWord == "messages")
    Results = new Array("jdbcsqlsrv9.html");
  else if (ParamSearchWord == "unused")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "environments")
    Results = new Array("usejdbc6.html","Preface2.html");
  else if (ParamSearchWord == "unit")
    Results = new Array("Preface2.html");
  else if (ParamSearchWord == "number")
    Results = new Array("jquikstart2.html","jdbcsqlsrv3.html","usejdbc3.html","usejdbc4.html","scalarfn.html","Preface2.html");
  else if (ParamSearchWord == "written")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "control")
    Results = new Array("jdbcdesign4.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "processing")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "literal")
    Results = new Array("jdbcdesign5.html","getinfoapp.html");
  else if (ParamSearchWord == "cstmt.setlong")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "communicate")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "selectmethod")
    Results = new Array("jdbcsqlsrv.html","jdbcsqlsrv3.html");
  else if (ParamSearchWord == "ref")
    Results = new Array("jdbcsupp10.html","jdbcsupp11.html","jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "setcharacterstream")
    Results = new Array("jdbcsupp3.html","jdbcsupp9.html");
  else if (ParamSearchWord == "allproceduresarecallable")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsdifferenttablecorrelation")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "supportsmixedcasequoted")
    Results = new Array("jdbcsupp6.html");
  else if (ParamSearchWord == "1.2")
    Results = new Array("jdbcsupp.html");
  else if (ParamSearchWord == "datetime")
    Results = new Array("getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "smallmoney")
    Results = new Array("getinfoapp.html","jdbcsqlsrv5.html");
  else if (ParamSearchWord == "sqljdbc.dll")
    Results = new Array("jdbcsqlsrv9.html","usejdbc8.html");
  else if (ParamSearchWord == "isql")
    Results = new Array("jdbcsqlsrv9.html");
  else if (ParamSearchWord == "underlying")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "managed")
    Results = new Array("usejdbc4.html");
  else if (ParamSearchWord == "cause")
    Results = new Array("usejdbc7.html");
  else if (ParamSearchWord == "msbase.jar")
    Results = new Array("jquikstart2.html","usejdbc8.html");
  else if (ParamSearchWord == "conn")
    Results = new Array("jquikstart2.html","usejdbc3.html");
  else if (ParamSearchWord == "function")
    Results = new Array("jdbcdesign2.html","scalarfn3.html","jdbcsqlsrv3.html","scalarfn.html");
  else if (ParamSearchWord == "wstable")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "reliability")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "retrieve")
    Results = new Array("jdbcdesign2.html","jdbcdesign3.html","jdbcdesign4.html","jdbcdesign7.html","usejdbc4.html");
  else if (ParamSearchWord == "better")
    Results = new Array("jdbcdesign2.html");
  else if (ParamSearchWord == "resource-intensive")
    Results = new Array("jdbcdesign4.html");
  else if (ParamSearchWord == "design")
    Results = new Array("jdbcdesign4.html","jdbcdesign6.html","jdbcdesign8.html");
  else if (ParamSearchWord == "maximum")
    Results = new Array("jdbcdesign5.html","jdbcdesign6.html","getinfoapp.html");
  else if (ParamSearchWord == "slowly")
    Results = new Array("jdbcdesign5.html");
  else if (ParamSearchWord == "wsconnection.setautocommit")
    Results = new Array("jdbcdesign6.html");
  else if (ParamSearchWord == "fastest")
    Results = new Array("jdbcdesign7.html");
  else if (ParamSearchWord == "scalar")
    Results = new Array("scalarfn3.html","scalarfn.html");
  else if (ParamSearchWord == "length")
    Results = new Array("scalarfn3.html","getinfoapp.html");

  return Results;
}
