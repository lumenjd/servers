----------------------------------------------------------
---
---
function ZLuaAvailableTransforms()
   local transforms
   transforms = {}
   transforms["TEST1"] = {template_id = 124,type = "物品",transform_type = 0}
   transforms["TEST2"] = {template_id = 127,type = "物品",transform_type = 0}
   transforms["TEST3"] = {template_id = 131,type = "物品",transform_type = 0}

   transforms["wupindaoxuan"] = {template_id = 150,type = "物品",transform_type = 0}   ---充值赠送永久熊猫  

   transforms["wupinguoqing01"] = {template_id = 151,type = "物品",transform_type = 0}   ---国庆中秋活动01  
   transforms["wupinguoqing02"] = {template_id = 152,type = "物品",transform_type = 0}   ---国庆中秋活动02  
   transforms["wupinguoqing03"] = {template_id = 153,type = "物品",transform_type = 0}   ---国庆中秋活动03  

   transforms["wupinchongyang"] = {template_id = 155,type = "物品",transform_type = 0}   ---重阳活动用菊花精  

   transforms["wupinpaisong1"] = {template_id = 145,type = "物品",transform_type = 0}   ---限时派送      
   transforms["wupinpaisong2"] = {template_id = 148,type = "物品",transform_type = 0}   ---限时派送  
   transforms["wupinpaisong3"] = {template_id = 149,type = "物品",transform_type = 0}   ---限时派送  

   transforms["wupinhuamei"] = {template_id = 133,type = "物品",transform_type = 0}     ---花魅
   transforms["wupinhanfei"] = {template_id = 134,type = "物品",transform_type = 0}     ---悍匪
   transforms["wupinlinghouv"] = {template_id = 135,type = "物品",transform_type = 0}   ---灵猴
   transforms["wupinyingchifeng"] = {template_id = 144,type = "物品",transform_type = 0}  ---硬翅蜂
   transforms["wupinhuayao"] = {template_id = 146,type = "物品",transform_type = 0}       ---花妖
   transforms["wupinguidaoshi"] = {template_id = 147,type = "物品",transform_type = 0}    ---鬼道士

   return transforms   
end


function ZLuaTransExistInCtmplIDs(template_id)
	if type(template_id) ~= "number" then return 0 end
	local availableTransforms = ZLuaAvailableTransforms()
	local tansforms
	for _,tansforms in pairs(availableTransforms) do
		if tansforms.template_id == template_id then return 1 end
	end
	return 0
end


function ZLuaSkillsConfig(template_id)

  if ZLuaTransExistInCtmplIDs(template_id) == 0 then return 0 end

  local transforms = ZLuaAvailableTransforms()

  local addskilllearnlevel
  local addskilllearnexplevel
  local addskillid
  local addskilllevel


  if template_id == transforms["TEST1"].template_id then 
   addskilllearnlevel                  = { 1,2,3,4,5,6,7,8,0,0,0,0 }
   addskilllearnexplevel               = { 1,1,1,1,1,1,1,1,0,0,0,0 } 
   addskillid                          = { 1513,993,1796,222,266,1093,404,1792,0,0,0,0 }
   addskilllevel                       = { 1,1,1,1,1,1,1,1,0,0,0,0 }
   
  elseif template_id == transforms["TEST2"].template_id then
   addskilllearnlevel                  = { 1,1,1,2,3,4,0,0,0,0,0,0 }
   addskilllearnexplevel               = { 1,3,5,1,2,5,0,0,0,0,0,0 } 
   addskillid                          = { 778,2034,1797,782,786,218,0,0,0,0,0,0 }
   addskilllevel                       = { 1,1,1,1,1,1,0,0,0,0,0,0 }

  elseif template_id == transforms["TEST3"].template_id then
   addskilllearnlevel                  = { 1,1,1,2,3,4,0,0,0,0,0,0 }
   addskilllearnexplevel               = { 1,1,5,1,2,5,0,0,0,0,0,0 } 
   addskillid                          = { 778,1515,1798,782,786,218,0,0,0,0,0,0 }
   addskilllevel                       = { 2,1,1,2,2,1,0,0,0,0,0,0 }

  ---充值奖励熊猫
  elseif template_id == transforms["wupindaoxuan"].template_id then
   addskilllearnlevel                  = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllearnexplevel               = { 0,0,0,0,0,0,0,0,0,0,0,0 } 
   addskillid                          = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllevel                       = { 0,0,0,0,0,0,0,0,0,0,0,0 }    

  ---国庆中秋活动奖励三种
  elseif template_id == transforms["wupinguoqing01"].template_id then
   addskilllearnlevel                  = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllearnexplevel               = { 0,0,0,0,0,0,0,0,0,0,0,0 } 
   addskillid                          = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllevel                       = { 0,0,0,0,0,0,0,0,0,0,0,0 }    

  elseif template_id == transforms["wupinguoqing02"].template_id then
   addskilllearnlevel                  = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllearnexplevel               = { 0,0,0,0,0,0,0,0,0,0,0,0 } 
   addskillid                          = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllevel                       = { 0,0,0,0,0,0,0,0,0,0,0,0 }    

  elseif template_id == transforms["wupinguoqing03"].template_id then
   addskilllearnlevel                  = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllearnexplevel               = { 0,0,0,0,0,0,0,0,0,0,0,0 } 
   addskillid                          = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllevel                       = { 0,0,0,0,0,0,0,0,0,0,0,0 }    

  ---重阳活动用限时
  elseif template_id == transforms["wupinchongyang"].template_id then
   addskilllearnlevel                  = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllearnexplevel               = { 0,0,0,0,0,0,0,0,0,0,0,0 } 
   addskillid                          = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllevel                       = { 0,0,0,0,0,0,0,0,0,0,0,0 }    


  ---派送用限时，只用了第一个
  elseif template_id == transforms["wupinpaisong1"].template_id then
   addskilllearnlevel                  = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllearnexplevel               = { 0,0,0,0,0,0,0,0,0,0,0,0 } 
   addskillid                          = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllevel                       = { 0,0,0,0,0,0,0,0,0,0,0,0 }    

  elseif template_id == transforms["wupinpaisong2"].template_id then
   addskilllearnlevel                  = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllearnexplevel               = { 0,0,0,0,0,0,0,0,0,0,0,0 } 
   addskillid                          = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllevel                       = { 0,0,0,0,0,0,0,0,0,0,0,0 }    

  elseif template_id == transforms["wupinpaisong3"].template_id then
   addskilllearnlevel                  = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllearnexplevel               = { 0,0,0,0,0,0,0,0,0,0,0,0 } 
   addskillid                          = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllevel                       = { 0,0,0,0,0,0,0,0,0,0,0,0 }    

  ---商店卖6种
  elseif template_id == transforms["wupinhuamei"].template_id then
   addskilllearnlevel                  = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllearnexplevel               = { 0,0,0,0,0,0,0,0,0,0,0,0 } 
   addskillid                          = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllevel                       = { 0,0,0,0,0,0,0,0,0,0,0,0 }    

  elseif template_id == transforms["wupinhanfei"].template_id then
   addskilllearnlevel                  = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllearnexplevel               = { 0,0,0,0,0,0,0,0,0,0,0,0 } 
   addskillid                          = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllevel                       = { 0,0,0,0,0,0,0,0,0,0,0,0 }    

  elseif template_id == transforms["wupinlinghou"].template_id then
   addskilllearnlevel                  = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllearnexplevel               = { 0,0,0,0,0,0,0,0,0,0,0,0 } 
   addskillid                          = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllevel                       = { 0,0,0,0,0,0,0,0,0,0,0,0 }    

  elseif template_id == transforms["wupinyingchifeng"].template_id then
   addskilllearnlevel                  = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllearnexplevel               = { 0,0,0,0,0,0,0,0,0,0,0,0 } 
   addskillid                          = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllevel                       = { 0,0,0,0,0,0,0,0,0,0,0,0 }    

  elseif template_id == transforms["wupinhuayao"].template_id then
   addskilllearnlevel                  = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllearnexplevel               = { 0,0,0,0,0,0,0,0,0,0,0,0 } 
   addskillid                          = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllevel                       = { 0,0,0,0,0,0,0,0,0,0,0,0 }    

  elseif template_id == transforms["wupinguidaoshi"].template_id then
   addskilllearnlevel                  = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllearnexplevel               = { 0,0,0,0,0,0,0,0,0,0,0,0 } 
   addskillid                          = { 0,0,0,0,0,0,0,0,0,0,0,0 }
   addskilllevel                       = { 0,0,0,0,0,0,0,0,0,0,0,0 } 

  else return 0 
  end
  
  return addskilllearnlevel,addskilllearnexplevel,addskillid,addskilllevel  
  
end


function InitTransformSkill(template_id, transform_type, level, exp_level, player)

  if ZLuaTransExistInCtmplIDs(template_id) == 0 then return 0 end
  if level == nil or level <= 0 or level > 20 or exp_level == nil or exp_level <= 0 or exp_level > 5 then return 0 end
  if transform_type ~= 0 and transform_type ~= 1 and transform_type ~= 2 then return 0 end
    
  local addskillLearnLevel = {}
	local addskillLearnExpLevel = {}
	local addskillID = {}
	local addskillLevel = {}

	local magicAddskillLearnLevel, magicAddskillLearnExpLevel,magicAddskillID,magicAddskillLevel = ZLuaSkillsConfig(template_id)  

	for l=1,12 do
	  addskillLearnLevel[l] = magicAddskillLearnLevel[l]
	  addskillLearnExpLevel[l] = magicAddskillLearnExpLevel[l]
	  addskillID[l] = magicAddskillID[l]
	  addskillLevel[l] = magicAddskillLevel[l]
	end

	
	for i=1,12 do
		if addskillLearnLevel[i] ~= nil and addskillLearnLevel[i] > 0  and addskillLearnExpLevel[i] ~=nil and addskillLearnExpLevel[i] >0 and addskillID[i] ~= nil and addskillLevel[i] ~= 0 and addskillLevel[i] > 0 then
			local unknown = true
			for j=1,level do
				if addskillLearnLevel[i] == j then
				  for k=1,exp_level do
	 			   if addskillLearnExpLevel[i] == k then
  				  player:AddTransformSkill( addskillID[i],addskillLevel[i] )
					  unknown = false
					 end
				  end
			  end
			end
		end
	end
  
  return 1  
end