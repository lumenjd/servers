function  LinksEntry_Object(ParamEntry,
                            ParamHREFArray)
{
  this.mKey   = ParamEntry;
  this.mHREFs = ParamHREFArray;
}

function  LinksEntry_SortFunction(ParamLinkEntryAlpha,
                                  ParamLinkEntryBeta)
{
  var  Result = 0;


  if (ParamLinkEntryAlpha.mKey < ParamLinkEntryBeta.mKey)
  {
    Result = -1;
  }
  else if (ParamLinkEntryAlpha.mKey > ParamLinkEntryBeta.mKey)
  {
    Result = 1;
  }

  return Result;
}

function  Links_Object(ParamBookDir,
                       ParamBookTitle)
{
  this.mBookDir   = ParamBookDir;
  this.mBookTitle = ParamBookTitle;
  this.mLinks     = new Array();
  this.mLinksSize = 0;

  this.fLoadIndex       = Links_LoadIndex;
  this.fSetTotalEntries = Links_SetTotalEntries;
  this.fAddEntry        = Links_AddEntry;
}

function  Links_LoadIndex(ParamAddLinksFunc)
{
  this.mLinksSize = 0;

  ParamAddLinksFunc(this);

  if (this.mLinks.length > this.mLinksSize)
  {
    this.mLinks.length = mLinksSize;  // Resize to correct length
  }

  // Make certain the entries are sorted
  //
  this.mLinks.sort(LinksEntry_SortFunction);
}

function  Links_SetTotalEntries(ParamTotal)
{
  this.mLinks.length = ParamTotal;
}

function  Links_AddEntry(ParamEntry,
                         ParamHREFArray)
{
  var  NewLink;


  this.mLinksSize++;

  // Make sure we grow big enough
  //
  if (this.mLinksSize > this.mLinks.length)
  {
    this.mLinks.length++;
  }

  NewLink = new LinksEntry_Object(ParamEntry, ParamHREFArray);

  this.mLinks[this.mLinksSize - 1] = NewLink;
}
