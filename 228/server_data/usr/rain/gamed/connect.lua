---宠物修炼主函数----------------------------------------------------------------------------------
function PetBedgeCombine(pet_tid,pet_in,pet_out,cid,aid)
  if ZLuaPetBedgeExistInTmplIDs(pet_tid) == 0 then return 0,1,99 end
  if pet_in == nil then return 0,1,99 end
  local AvailablePets=ZLuaAvailablePets()
  local CidMatrix=ZLuaPetBedgeCidMatrix()
  local AidMatrix=ZLuaPetBedgeAidMatrix()
  local DataIndex=ZLuaPetBedgeDataIndex()
	local ServerOrigins=ZLuaPetBedgeOrigins()
	
	if pet_tid==AvailablePets["S_luxueqi"].pet_tid or pet_tid==AvailablePets["S_biyao"].pet_tid 
		or pet_tid==AvailablePets["S_luxueqi2"].pet_tid then 
		return 0,1,98
	end 
	if pet_tid==AvailablePets["Q_heyangqingwa"].pet_tid and (CidMatrix[cid].type<3 or CidMatrix[cid].type>4) then 
		return 0,1,98
	end 
	if pet_tid==AvailablePets["Q_heyangyelang"].pet_tid and (CidMatrix[cid].type<3 or CidMatrix[cid].type>4) then 
		return 0,1,98
	end 
		
  ---//拷贝数据到新宠物
  for i,v in pairs(DataIndex) do
		pet_out:UpdateData(v, pet_in:QueryData(v) )
	end
 	pet_out:SetLevel(pet_in:QueryLevel())
 	pet_out:SetExp(pet_in:QueryExp())
 	pet_out:SetCurHP(pet_in:QueryCurHP())
 	pet_out:SetCurVigor(pet_in:QueryCurVigor())
 	pet_out:SetAge(pet_in:QueryAge())
 	pet_out:SetLife(pet_in:QueryLife())
  pet_out:SetCurHonorPoint(pet_in:QueryCurHonorPoint())
 	pet_out:SetMaxHonorPoint(pet_in:QueryMaxHonorPoint())
  pet_out:SetCurHungerPoint(pet_in:QueryCurHungerPoint())
 	pet_out:SetMaxHungerPoint(pet_in:QueryMaxHungerPoint())
 	
 	local origin=pet_in:QueryData(DataIndex["nativeorigin"])
 	local isidentify=pet_in:QueryData(DataIndex["identify"])
 	local newpet_id,msg_channel,msg_id
	
  ---//宠物逆天重生	
  if CidMatrix[cid].type==1 then 
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeHolyReborn(pet_tid,pet_in,pet_out,cid,aid,origin)  
  elseif CidMatrix[cid].type==2 then 
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeIdentify(pet_tid,pet_in,pet_out,cid,aid,origin)
  ---//宠物改变年龄
  elseif CidMatrix[cid].type==3 then
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeChangeAge(pet_tid,pet_in,pet_out,cid,aid,origin)
  ---//宠物改变寿命
  elseif CidMatrix[cid].type==4 then
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeChangeLife(pet_tid,pet_in,pet_out,cid,aid,origin)
  ---//宠物改变性格
  elseif CidMatrix[cid].type==5 and isidentify==1 then 
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeChangeEmement(pet_tid,pet_in,pet_out,cid,aid,origin)
  ---//宠物改变天赋
  elseif CidMatrix[cid].type==6 and isidentify==1 then
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeChangeTalent(pet_tid,pet_in,pet_out,cid,aid,origin)
  ---//宠物学习技能
  elseif CidMatrix[cid].type==7 and isidentify==1 then 
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeLearnSkill(pet_tid,pet_in,pet_out,cid,aid,origin)
  ---//宠物遗忘技能
  elseif CidMatrix[cid].type==8 and isidentify==1 then
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeForgetSkill(pet_tid,pet_in,pet_out,cid,aid,origin)
  ---//宠物改变当前亲密度
  elseif CidMatrix[cid].type==9 and isidentify==1 then 
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeChangeCurHonor(pet_tid,pet_in,pet_out,cid,aid,origin)
  ---//宠物改变最大亲密度
  elseif CidMatrix[cid].type==10 and isidentify==1 then  
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeChangeMaxHonor(pet_tid,pet_in,pet_out,cid,aid,origin)
 	---//宠物改变战斗相关属性
  elseif CidMatrix[cid].type>=11 and CidMatrix[cid].type<=25 and isidentify==1 then  
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeCombatPropDeal(pet_tid,pet_in,pet_out,cid,aid,origin,1)
  	---//usetype=1代表主动成长(因cid导致的一次成长)
  	---//usetype>1代表被动成长(因aid导致的二次成长,且usetype代表成长类型)
   	if newpet_id~=0 and ZLuaPetBedgeExistInTmplIDs(newpet_id)~=0 then 
  		---//重新计算星等
  		local NewStar=ZLuaPetBedgeReCalcStar(newpet_id,pet_out,origin)
  		pet_out:UpdateData(DataIndex["star"],NewStar)
    	---所有战斗属性被动成长(是否溅射成长)
    	if AidMatrix[aid].effect3==1 and aid~=0 then 
    		ZLuaPetBedgePassiveAddCombatProp(pet_tid,pet_in,pet_out,cid,aid,origin)
    	end 
    	---增加亲密度上限
  		ZLuaPetBedgePassiveAddMaxHonor(pet_tid,pet_in,pet_out,cid,aid,origin)
  		---统计使用的aid
  		if aid~=0 and aid~=nil then 
  			pet_out:UpdateData(DataIndex["feedaids"],pet_in:QueryData(DataIndex["feedaids"])+1)
  		end 
  	end 		

xdofile("script/petbedge_skills.lua");
xdofile("script/petbedge_grades.lua");
xdofile("script/petbedge_free.lua");
xdofile("script/petbedge_combine.lua");
xdofile("script/petbedge_collect.lua");
xdofile("script/petbedge_interface.lua");