-- 召唤脚本
-- 以下所有脚本只有在召唤怪物初始化的时候才能调用

---------------------------------------------------------------------------------------------------- 
-- 召唤主函数 
---------------------------------------------------------------------------------------------------- 
function InitSummonData(id, skill_level, player, monster, index)
	local summoned = 0
	local tempData={}

	tempData.level = player:GetLevel()															-- 级别
	tempData.hp = player:GetHP()																		-- 最大气血
	tempData.mp = player:GetMP()																		-- 最大真气
	tempData.maxDmg, tempData.minDmg = player:GetDamage()						-- 大攻，小攻
	tempData.defense = player:GetDefense()													-- 防御
	tempData.attack = player:GetAttack()														-- 普攻命中
	tempData.armor = player:GetArmor()															-- 普通躲闪
	tempData.crRate, tempData.crDmg = player:GetCrit()							-- 致命一击率（10代表1.0%概率）
																																	-- 致命一击伤害（1.50代表150%）
	tempData.skAtk, tempData.skAmr = player:GetSkillRate()					-- 技能命中（10代表101）
																																	-- 技能躲闪（10代表1）
	tempData.antiCrRate, tempData.antiCrDmg = player:GetAntiCrit()	-- 减免致命一击率（）
																																	-- 减免致命一击伤害（）
	tempData.res1,tempData.res2,tempData.res3,tempData.res4,tempData.res5,tempData.res6 = player:GetResistance()


	-- 动物召唤
	if id == 29999 or id == 30004 or id == 30005 or id == 30006 or id == 30007 
	or id == 32507 or id == 32508 then
		InitAnimal(tempData, skill_level, player, index)
		if		 id == 29999 then InitWolf(tempData, skill_level, player, index) summoned = id		-- 苍原狼
		elseif id == 30004 then	InitBull(tempData, skill_level, player, index) summoned = id		-- 雷泽牯
		elseif id == 30005 then InitBear(tempData, skill_level, player, index) summoned = id		-- 邙山熊
		elseif id == 30006 then InitTurt(tempData, skill_level, player, index) summoned = id		-- 砂河鼋
		elseif id == 30007 then InitTige(tempData, skill_level, player, index) summoned = id		-- 龙须虎
		elseif id == 32507 then InitSFox(tempData, skill_level, player, index) summoned = id		-- 雪狐
		elseif id == 32508 then InitSFox(tempData, skill_level, player, index) summoned = id		-- 雪狐
		end

		if		 id == 30004 then	MagiBull(tempData, skill_level, player, index) summoned = id		-- 造化技能强化雷泽牯
		elseif id == 30005 then MagiBear(tempData, skill_level, player, index) summoned = id		-- 造化技能强化邙山熊
		elseif id == 30006 then MagiTurt(tempData, skill_level, player, index) summoned = id		-- 造化技能强化砂河鼋
		end

	-- 植物召唤
	elseif id == 30008 or id == 30992 or id == 30993 or id == 30994 then
		InitPlant(tempData, skill_level, player, index)
		if		 id == 30008 then InitPltA(tempData, skill_level, player, index) summoned = id		-- 戮须子
		elseif id == 30992 then	InitPltB(tempData, skill_level, player, index) summoned = id		-- 留客住
		elseif id == 30993 then InitPltC(tempData, skill_level, player, index) summoned = id		-- 梦梧桐
		elseif id == 30994 then InitPltD(tempData, skill_level, player, index) summoned = id		-- 醉芙蓉
		end

		if		 id == 30008 then MagiPltA(tempData, skill_level, player, index) summoned = id		-- 戮须子
		elseif id == 30993 then MagiPltC(tempData, skill_level, player, index) summoned = id		-- 梦梧桐
		elseif id == 30994 then MagiPltD(tempData, skill_level, player, index) summoned = id		-- 醉芙蓉
		end
	end

	monster:SetLevel(tempData.level)
	monster:SetHP(tempData.hp)
	monster:SetMP(tempData.mp)
	monster:SetDamage(tempData.maxDmg, tempData.minDmg)
	monster:SetDefense(tempData.defense)
	monster:SetAttack(tempData.attack)
	monster:SetArmor(tempData.armor)
	monster:SetCrit(tempData.crRate, tempData.crDmg)
	monster:SetSkillRate(tempData.skAtk, tempData.skAmr)
	monster:SetAntiCrit(tempData.antiCrRate, tempData.antiCrDmg)
	monster:SetResistance(tempData.res1,tempData.res2,tempData.res3,tempData.res4,tempData.res5,tempData.res6)
	
	return summoned
end
---------------------------------------------------------------------------------------------------- 
-- 召唤动物函数 
---------------------------------------------------------------------------------------------------- 
function InitAnimal(tempData, skill_level, player, index)

	local _,skill_ShuoKongJin = player:PlayerQuerySkilllvl(1889)
	local _,skill_TongMingXin = player:PlayerQuerySkilllvl(1898)
	local _,skill_JinFengDi = player:PlayerQuerySkilllvl(1907)
	local _,skill_HuMuJing = player:PlayerQuerySkilllvl(1916)
	local allPasSkill = skill_ShuoKongJin + skill_TongMingXin + skill_JinFengDi + skill_HuMuJing

	local _,talent_QiXuan = player:PlayerQuerySkilllvl(2160)
	local _,talent_ShenMu = player:PlayerQuerySkilllvl(2161)
	local _,talent_GouChi = player:PlayerQuerySkilllvl(2162)
	local _,talent_JiaoXuan = player:PlayerQuerySkilllvl(2163)

	local _,talent_RuiJin = player:PlayerQuerySkilllvl(2159)
	local _,talent_HuiSa = player:PlayerQuerySkilllvl(2164)

	if(skill_ShuoKongJin < talent_QiXuan) then talent_QiXuan   = skill_ShuoKongJin end
	if(skill_TongMingXin < talent_ShenMu) then talent_ShenMu   = skill_TongMingXin end
	if(skill_JinFengDi < talent_GouChi)   then talent_GouChi   = skill_JinFengDi	 end
	if(skill_HuMuJing < talent_JiaoXuan)  then talent_JiaoXuan = skill_HuMuJing	   end

	tempData.mp = 1
	tempData.maxDmg = tempData.maxDmg + 0.5 * talent_QiXuan * tempData.level
	tempData.minDmg = tempData.minDmg + 0.5 * talent_QiXuan * tempData.level
	tempData.attack = tempData.attack + 15 * talent_ShenMu
	tempData.crRate = tempData.crRate + 10 * talent_GouChi
	tempData.crDmg  = tempData.crDmg + 0.1 * talent_JiaoXuan
	
	tempData.maxDmg = tempData.maxDmg - 5 * talent_RuiJin	* allPasSkill
	tempData.minDmg = tempData.minDmg - 5 * talent_RuiJin	* allPasSkill
	tempData.crDmg  = tempData.crDmg - 0.03 * talent_HuiSa	* allPasSkill
end
---------------------------------------------------------------------------------------------------- 
-- 召唤植物函数 
---------------------------------------------------------------------------------------------------- 
function InitPlant(tempData, skill_level, player, index)
	local _,talent_JianMu = player:PlayerQuerySkilllvl(2130)
	
	tempData.hp = 10 + skill_level + 3 * talent_JianMu
	tempData.mp = 1
	tempData.maxDmg = 1+skill_level
	tempData.minDmg = 1
	tempData.defense = 99999
end
---------------------------------------------------------------------------------------------------- 
-- 动物类 
---------------------------------------------------------------------------------------------------- 
function InitWolf(tempData, skill_level, player, index)		-- 苍原狼
	local _,skill_CangYuanLang = player:PlayerQuerySkilllvl(1890)
	local _,talent_XiongLang = player:PlayerQuerySkilllvl(2165)

	tempData.crRate = tempData.crRate + 10 * skill_CangYuanLang
	tempData.crDmg  = tempData.crDmg  + 0.05 * talent_XiongLang * skill_CangYuanLang
end

function InitBull(tempData, skill_level, player, index)		-- 雷泽牯
	local _,skill_LeiZeGu = player:PlayerQuerySkilllvl(1899)
	local _,talent_KuiGu = player:PlayerQuerySkilllvl(2166)

	tempData.maxDmg = tempData.maxDmg * (1 + 0.01 * skill_LeiZeGu)
	tempData.minDmg = tempData.minDmg * (1 + 0.01 * skill_LeiZeGu)
	tempData.crRate = tempData.crRate + 5 * talent_KuiGu * skill_LeiZeGu
end

function InitBear(tempData, skill_level, player, index)		-- 邙山熊
	local _,skill_MangShanXiong = player:PlayerQuerySkilllvl(1908)
	local _,talent_WeiXiong = player:PlayerQuerySkilllvl(2167)

	tempData.hp = tempData.hp * (1 + 0.1 * skill_MangShanXiong)
	tempData.maxDmg = tempData.maxDmg * (1 + 0.005 * talent_WeiXiong * skill_MangShanXiong)
	tempData.minDmg = tempData.minDmg * (1 + 0.005 * talent_WeiXiong * skill_MangShanXiong)
end

function InitTurt(tempData, skill_level, player, index)		-- 砂河鼋
	local _,skill_ShaHeYuan = player:PlayerQuerySkilllvl(1917)
	local _,talent_XuanGui = player:PlayerQuerySkilllvl(2168)

	tempData.defense = tempData.defense * (1+0.01*skill_ShaHeYuan)
	tempData.hp = tempData.hp * (1 + 0.05 * talent_XuanGui * skill_ShaHeYuan)
end

function InitTige(tempData, skill_level, player, index)		-- 龙须虎
	InitTurt(tempData, skill_level, player)
	InitBear(tempData, skill_level, player)
	InitBull(tempData, skill_level, player)
	InitWolf(tempData, skill_level, player)

	tempData.mp = 1 + skill_level
	tempData.hp = tempData.hp * skill_level
end

function InitSFox(tempData, skill_level, player, index)		-- 雪狐
	InitTurt(tempData, skill_level, player)
	InitBear(tempData, skill_level, player)
	InitBull(tempData, skill_level, player)
	InitWolf(tempData, skill_level, player)

	tempData.mp = 1 + index
end

function MagiBull(tempData, skill_level, player, index)		-- 造化技能强化雷泽牯
	local _,skill_BullII = player:PlayerQuerySkilllvl(2221)

	tempData.skAtk = tempData.skAtk + 20 * skill_BullII
	tempData.skAmr = tempData.skAmr + 50 * skill_BullII
	tempData.mp = 1 + skill_BullII
end

function MagiBear(tempData, skill_level, player, index)		-- 造化技能强化邙山熊
	local _,skill_BearII = player:PlayerQuerySkilllvl(2231)

	tempData.skAtk = tempData.skAtk + 20 * skill_BearII
	tempData.skAmr = tempData.skAmr + 50 * skill_BearII
	tempData.mp = 1 + skill_BearII

end

function MagiTurt(tempData, skill_level, player, index)		-- 造化技能强化砂河鼋
	local _,skill_TurtII = player:PlayerQuerySkilllvl(2241)

	tempData.skAtk = tempData.skAtk + 20 * skill_TurtII
	tempData.skAmr = tempData.skAmr + 50 * skill_TurtII
	tempData.mp = 1 + skill_TurtII
end
---------------------------------------------------------------------------------------------------- 
-- 植物类 
---------------------------------------------------------------------------------------------------- 
function InitPltA(tempData, skill_level, player, index)		-- 戮须子
	local _,talent_HuXu = player:PlayerQuerySkilllvl(2126)
	tempData.attack = player:GetDamage()
	tempData.mp = 1 + talent_HuXu
end

function InitPltB(tempData, skill_level, player, index)		-- 留客住
	local _,talent_JianChi = player:PlayerQuerySkilllvl(2127)
	tempData.mp = 1 + talent_JianChi
end

function InitPltC(tempData, skill_level, player, index)		-- 梦梧桐
	local _,talent_YuXin = player:PlayerQuerySkilllvl(2128)
	tempData.mp = 1 + talent_YuXin
end

function InitPltD(tempData, skill_level, player, index)		-- 醉芙蓉
	local _,talent_QiongJiang = player:PlayerQuerySkilllvl(2129)
	tempData.mp = 1 + talent_QiongJiang
end

function MagiPltA(tempData, skill_level, player, index)		-- 造化技能强化戮须子
	local _,skill_PltAII = player:PlayerQuerySkilllvl(2230)
	tempData.armor = 1 + skill_PltAII
end

function MagiPltC(tempData, skill_level, player, index)		-- 造化技能强化梦梧桐
	local _,skill_PltCII = player:PlayerQuerySkilllvl(2240)
	tempData.armor = 1 + skill_PltCII
end

function MagiPltD(tempData, skill_level, player, index)		-- 造化技能强化醉芙蓉
	local _,skill_PltDII = player:PlayerQuerySkilllvl(2220)
	tempData.armor = 1 + skill_PltDII
end