---��������������----------------------------------------------------------------------------------
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
		
  ---//�������ݵ��³���
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
	
  ---//������������	
  if CidMatrix[cid].type==1 then 
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeHolyReborn(pet_tid,pet_in,pet_out,cid,aid,origin)  
  elseif CidMatrix[cid].type==2 then 
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeIdentify(pet_tid,pet_in,pet_out,cid,aid,origin)
  ---//����ı�����
  elseif CidMatrix[cid].type==3 then
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeChangeAge(pet_tid,pet_in,pet_out,cid,aid,origin)
  ---//����ı�����
  elseif CidMatrix[cid].type==4 then
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeChangeLife(pet_tid,pet_in,pet_out,cid,aid,origin)
  ---//����ı��Ը�
  elseif CidMatrix[cid].type==5 and isidentify==1 then 
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeChangeEmement(pet_tid,pet_in,pet_out,cid,aid,origin)
  ---//����ı��츳
  elseif CidMatrix[cid].type==6 and isidentify==1 then
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeChangeTalent(pet_tid,pet_in,pet_out,cid,aid,origin)
  ---//����ѧϰ����
  elseif CidMatrix[cid].type==7 and isidentify==1 then 
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeLearnSkill(pet_tid,pet_in,pet_out,cid,aid,origin)
  ---//������������
  elseif CidMatrix[cid].type==8 and isidentify==1 then
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeForgetSkill(pet_tid,pet_in,pet_out,cid,aid,origin)
  ---//����ı䵱ǰ���ܶ�
  elseif CidMatrix[cid].type==9 and isidentify==1 then 
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeChangeCurHonor(pet_tid,pet_in,pet_out,cid,aid,origin)
  ---//����ı�������ܶ�
  elseif CidMatrix[cid].type==10 and isidentify==1 then  
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeChangeMaxHonor(pet_tid,pet_in,pet_out,cid,aid,origin)
 	---//����ı�ս���������
  elseif CidMatrix[cid].type>=11 and CidMatrix[cid].type<=25 and isidentify==1 then  
  	newpet_id,msg_channel,msg_id=ZLuaPetBedgeCombatPropDeal(pet_tid,pet_in,pet_out,cid,aid,origin,1)
  	---//usetype=1���������ɳ�(��cid���µ�һ�γɳ�)
  	---//usetype>1�������ɳ�(��aid���µĶ��γɳ�,��usetype����ɳ�����)
   	if newpet_id~=0 and ZLuaPetBedgeExistInTmplIDs(newpet_id)~=0 then 
  		---//���¼����ǵ�
  		local NewStar=ZLuaPetBedgeReCalcStar(newpet_id,pet_out,origin)
  		pet_out:UpdateData(DataIndex["star"],NewStar)
    	---����ս�����Ա����ɳ�(�Ƿ���ɳ�)
    	if AidMatrix[aid].effect3==1 and aid~=0 then 
    		ZLuaPetBedgePassiveAddCombatProp(pet_tid,pet_in,pet_out,cid,aid,origin)
    	end 
    	---�������ܶ�����
  		ZLuaPetBedgePassiveAddMaxHonor(pet_tid,pet_in,pet_out,cid,aid,origin)
  		---ͳ��ʹ�õ�aid
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