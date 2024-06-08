
RANK_TYPE_PERSON  = 1;   --用于个人排行
RANK_TYPE_FAMILY   = 2;   --用于家族排行
RANK_TYPE_FACTION   = 3;   --用于帮派排行


rank_list = {}

--这个表的初始化应根据需要重新设置
rank_list[1] = {id = 1, type = RANK_TYPE_PERSON}   --个人等级排行
rank_list[2] = {id = 2, type = RANK_TYPE_PERSON}   --个人财富排行
rank_list[3] = {id = 3, type = RANK_TYPE_PERSON}   --个人侠义排行
rank_list[11] ={id = 11, type = RANK_TYPE_PERSON}   --个人青云门友好度排行
rank_list[12] = {id = 12, type = RANK_TYPE_PERSON}   --个人天音寺友好度排行
rank_list[13] = {id = 13, type = RANK_TYPE_PERSON}   --个人鬼王宗友好度排行
rank_list[14] = {id = 14, type = RANK_TYPE_PERSON}   --个人合欢派友好度排行
rank_list[15] = {id = 15, type = RANK_TYPE_PERSON}   --个人忠义排行
rank_list[16] = {id =16, type = RANK_TYPE_PERSON}   --个人情缘排行
rank_list[17] = {id =17, type = RANK_TYPE_PERSON}   --个人文采排行
rank_list[18] = {id =18, type = RANK_TYPE_PERSON}   --师德值排行
rank_list[19] = {id =19, type = RANK_TYPE_PERSON}   --道心值排行
rank_list[20] = {id =20, type = RANK_TYPE_PERSON}   --佛缘值排行
rank_list[21] = {id =21, type = RANK_TYPE_PERSON}   --魔性值排行
rank_list[10] = {id =10, type = RANK_TYPE_PERSON}   --个人鬼道排行
rank_list[23] = {id =23, type = RANK_TYPE_PERSON}   --个人九黎排行 
rank_list[24] = {id =24, type = RANK_TYPE_PERSON}   --个人烈山排行
rank_list[27] = {id =27, type = RANK_TYPE_PERSON}   --个人天华排行 
rank_list[28] = {id =28, type = RANK_TYPE_PERSON}   --个人怀光排行
rank_list[60] = {id =60, type = RANK_TYPE_FAMILY}   --家族青云挑战排行
rank_list[61] = {id =61, type = RANK_TYPE_FAMILY}   --家族天音挑战排行
rank_list[62] = {id =62, type = RANK_TYPE_FAMILY}   --家族流波挑战排行
rank_list[63] = {id =63, type = RANK_TYPE_FAMILY}   --家族死亡沼泽排行
rank_list[64] = {id =64, type = RANK_TYPE_FAMILY}   --家族蛮荒神殿排行
rank_list[65] = {id =65, type = RANK_TYPE_FAMILY}   --家族焚香神殿排行
rank_list[66] = {id =66, type = RANK_TYPE_FAMILY}   --家族南疆神殿排行
rank_list[67] = {id =67, type = RANK_TYPE_FAMILY}   --家族昆仑神殿排行
rank_list[68] = {id =68, type = RANK_TYPE_FAMILY}   --家族修罗神殿排行
rank_list[31] = {id =31, type = RANK_TYPE_FACTION}   --帮派等级排行
rank_list[32] = {id =32, type = RANK_TYPE_FACTION}   --帮派财富排行
rank_list[33] = {id =33,  type = RANK_TYPE_FACTION} --帮派人数排行
rank_list[34] = {id =34,  type = RANK_TYPE_FACTION} --帮派建设度排行
rank_list[35] = {id =35,  type = RANK_TYPE_FACTION} --帮派灵气值排行
rank_list[41] = {id =41, type = RANK_TYPE_FACTION}   --帮派青云门友好度排行
rank_list[42] = {id =42, type = RANK_TYPE_FACTION}   --帮派天音寺友好度排行
rank_list[43] = {id =43, type = RANK_TYPE_FACTION}   --帮派鬼王宗友好度排行
rank_list[44] = {id =44, type = RANK_TYPE_FACTION}   --帮派合欢派友好度排行
rank_list[45] = {id =45, type = RANK_TYPE_FACTION}   --帮派忠义友好度排行
rank_list[46] = {id =46, type = RANK_TYPE_FACTION}   --帮派情缘排行
rank_list[47] = {id =47, type = RANK_TYPE_FACTION}   --帮派文采排行
rank_list[48] = {id =48, type = RANK_TYPE_FACTION}   --备用
rank_list[49] = {id =49, type = RANK_TYPE_FACTION}   --备用
rank_list[40] = {id =40, type = RANK_TYPE_FACTION}   --帮派鬼道排行
rank_list[53] = {id =53, type = RANK_TYPE_FACTION}   --帮派九黎排行 
rank_list[54] = {id =54, type = RANK_TYPE_FACTION}   --帮派烈山排行
rank_list[57] = {id =57, type = RANK_TYPE_FACTION}   --帮派天华排行 
rank_list[58] = {id =58, type = RANK_TYPE_FACTION}   --帮派怀光排行




local function get_rank_table(k)
   if (rank_list[k]) then
       return _G["tab"..rank_list[k].id]
   end
end


local function init_title(tab, type)
  local k, k1, v;
   for k, v in pairs(rank_list) do
   		 if v.type == type then
   		 		local onerank = get_rank_table(k)
					if onerank then
	    			for k1, _ in pairs(onerank) do
							if  tab[k1] == nil then
		    					tab[k1] = {}
							end
	    			end
					end
    		end
  	end
end

local function add_title(tab, id)
      local rt = tab or {};
                table.insert(rt, id);
                return rt
end

local function grant_title()
	local k, v , m, n
	local lev_rank = 1									--开启个人等级排名称谓的rank
	local lev_high = 40                 --开启个人等级排名称谓的级别
	local lev_low = 30									--获得等级排行称谓的限制
	local caifu_rank =1									--开启个人财富排名称谓的rank
	local caifu_high = 500								--开启个人财富排名称谓的金钱
	local caifu_low =300								--获得财富排行称谓的限制
	local xiayi_rank = 50								--开启个人侠义排名称谓的rank
	local xiayi_high = 1500								--开启个人侠义排名称谓的侠义
	local xiayi_low = 500								--获得个人侠义排名称谓的限制
	local shidezhi_rank = 50                                              --开启师德值排行称谓的rank
	local shidezhi_high = 10000                                              --开启师德值排名称谓的师德值
	local shidezhi_low = 2000                                               --获得师德值排名称谓的限制
	local daoxin_rank = 50                       --开启道心值排行称谓的rank
	local daoxin_high = 10000                       --开启道心值排行称谓的道心值
	local daoxin_low = 2000                        --获得道心值排行称谓的限制
	local moxing_rank = 50                              --开启魔性值排行称谓的rank
	local moxing_high = 10000                              --开启魔性值排行称谓的魔性值
	local moxing_low = 2000                               --获得魔性值排行称谓的限制
	local foyuan_rank = 50                              -- 开启佛缘值排行称谓的rank
	local foyuan_high = 10000                              --开启佛缘值排行称谓的佛缘值
	local foyuan_low = 2000                               --获得佛缘值排行称谓的限制
  local qingyuan_rank = 50								--开启个人情缘排名称谓的rank
	local qingyuan_high = 100								--开启个人情缘排名称谓的情缘
	local qingyuan_low = 20						--获得个人区域情缘排名称谓的限制
	local shengwang_rank = 50							--开启个人区域声望排名称谓的rank
	local shengwang_high = 10000						--开启个人区域声望排名称谓的声望
	local shengwang_low = 2000						--获得个人区域声望排名称谓的限制
	local wencai_rank = 20								--开启个人文采排名称谓的rank
	local wencai_high = 500								--开启个人文采排名称谓的侠义
	local wencai_low = 50						--获得个人区域文采排名称谓的限制

	local tiaozhan_rank = 50							--开启家族挑战排名称谓的rank
	local tiaozhan_high = 100						--开启家族挑战排名称谓的声望
		
	local bangpai_rank = 1								--给第一的帮派帮主称谓
	local bangpai_lev = 0                               --帮派等级
	local bangpai_sum = 10								--开启帮派称谓限制
	local bangpai_caifu = 200000						--开启帮派财富称谓限制
	local bangpai_jianshe = 10000						--开启帮派建设度称谓限制
	local lingqi_rank = 5								--开启帮派灵气排名称谓的rank
	local lingqi_high = 2000								--开启帮派灵气称谓的帮派灵气
	local lingqi_low = 500								--获得帮派灵气称谓的限制
	local bangpai_shengwang = 50000						--开启帮派区域声望称谓限制
	local bangpai_renshu = 50							--开启帮派人数排名称谓限制
	
	local val = {}										--放入个人排行开启条件
	local f_val = {}										--放入家族排行开启条件
	local b_val = {}									--放入帮派排名开启条件
	
	local exp = get_rank_table(1)						--个人等级排行
	local caifu = get_rank_table(2)						--个人财富排行
	local xiayi = get_rank_table(3)						--个人侠义排行
	local qingyunmenshengwang = get_rank_table(11)		--个人青云门声望排行
	local tianyinsishengwang = get_rank_table(12)		--个人天音寺声望排行
	local guiwangzongshengwang = get_rank_table(13)			--个人鬼王宗声望排行
	local hehuanpaishengwang = get_rank_table(14)			--个人合欢派声望排行
	local zhongyishengwang = get_rank_table(15)			--个人忠义声望排行
	local qingyuanshengwang = get_rank_table(16)			--个人情缘声望排行
	local wencaishengwang = get_rank_table(17)			--个人文采声望排行
	local guidaoshengwang = get_rank_table(10)			--个人鬼道声望排行
	local jiulishengwang = get_rank_table(23)       --个人九黎声望排行
	local lieshanshengwang = get_rank_table(24)     --个人烈山声望排行
	local huaiguangshengwang = get_rank_table(27)     --个人天华声望排行 
	local tianhuashengwang = get_rank_table(28)     --个人怀光声望排行
	
	local shidezhi = get_rank_table(18)           						 --师德值排行
	local daoxin = get_rank_table(19)                          --道心值排行
	local moxing = get_rank_table(20)                          --佛缘值排行
	local foyuan = get_rank_table(21)                          --魔性值排行
		
	local qingyunjiazu = get_rank_table(60)		--家族青云挑战排行
	local tianyinjiazu = get_rank_table(61)			--家族天音挑战排行
	local liubojiazu = get_rank_table(62)			--家族流波挑战排行
	local siwangjiazu = get_rank_table(63)				--家族死亡沼泽挑战排行
	local manhuangjiazu = get_rank_table(64)			--家族蛮荒神殿挑战排行
	local fenxiangjiazu = get_rank_table(65)			--家族焚香挑战排行
	local nanjiangjiazu = get_rank_table(66)			--家族南疆挑战排行
	local kunlunjiazu = get_rank_table(67)				--家族昆仑挑战排行
	local xiuluojiazu = get_rank_table(68)			--家族修罗挑战排行	
	local bangpaidengji = get_rank_table(31)			--帮派等级排行
	local bangpaicaifu = get_rank_table(32)				--帮派财富排行
	local bangpairenshu = get_rank_table(33)			--帮派人数排行
	local bangpaijianshe = get_rank_table(34)			--帮派建设度排行
	local bangpailingqi = get_rank_table(35)			--帮派灵气排行
	local qingyunmenbangpai = get_rank_table(41)		--帮派青云门声望排行
	local tianyinsibangpai = get_rank_table(42)			--帮派天音寺声望排行
	local guiwangzongbangpai = get_rank_table(43)			--帮派鬼王宗声望排行
	local hehuanpaibangpai = get_rank_table(44)				--帮派合欢派声望排行
	local zhongyibangpai = get_rank_table(45)			--帮派忠义声望排行
	local qingyuanbangpai = get_rank_table(46)			--帮派情缘声望排行
	local wencaibangpai = get_rank_table(47)			--帮派文采声望排行
	local guidaobangpai = get_rank_table(40)			--帮派鬼道声望排行
	local jiulibangpai = get_rank_table(53)			--帮派九黎声望排行
	local lieshanbangpai = get_rank_table(54)			--帮派烈山声望排行
	local huaiguangbangpai = get_rank_table(55)			--帮派怀光声望排行 
	local tianhuabangpai = get_rank_table(56)			--帮派天华声望排行
	
	for m, n in pairs(person_title) do					--得到个人排行称谓开启条件

		if exp and exp[m] then
			if exp[m].rank == lev_rank then
				val[1] = exp[m].val
			end
		end

		if caifu and caifu[m] then
			if caifu[m].rank == caifu_rank then
				val[2] = caifu[m].val
			end
		end

		if xiayi and xiayi[m] then
			if xiayi[m].rank == xiayi_rank then
				val[3] = xiayi[m].val
			end
		end

		if qingyunmenshengwang and qingyunmenshengwang[m] then
			if qingyunmenshengwang[m].rank == shengwang_rank then
				val[4] = qingyunmenshengwang[m].val
			end
		end

		if tianyinsishengwang and tianyinsishengwang[m] then
			if tianyinsishengwang[m].rank == shengwang_rank then
				val[5] = tianyinsishengwang[m].val
			end
		end

		if guiwangzongshengwang and guiwangzongshengwang[m] then
			if guiwangzongshengwang[m].rank == shengwang_rank then
				val[6] = guiwangzongshengwang[m].val
			end
		end

		if hehuanpaishengwang and hehuanpaishengwang[m] then
			if hehuanpaishengwang[m].rank == shengwang_rank then
				val[7] = hehuanpaishengwang[m].val
			end
		end

		if zhongyishengwang and zhongyishengwang[m] then
			if zhongyishengwang[m].rank == shengwang_rank then
				val[8] = zhongyishengwang[m].val
			end
		end
		
		if qingyuanshengwang and qingyuanshengwang[m] then
			if qingyuanshengwang[m].rank == qingyuan_rank then
				val[9] = qingyuanshengwang[m].val
			end
		end
		
		if wencaishengwang and wencaishengwang[m] then
			if wencaishengwang[m].rank == wencai_rank then
				val[10] = wencaishengwang[m].val
			end
		end

	
		if guidaoshengwang and guidaoshengwang[m] then
			if guidaoshengwang[m].rank == shengwang_rank then
				val[11] = guidaoshengwang[m].val
			end
		end
		
		
		if shidezhi and shidezhi[m] then
			if shidezhi[m].rank == shidezhi_rank then
				val[12] = shidezhi[m].val
			end
		end
		
		
		if daoxin and daoxin[m] then
			if daoxin[m].rank == daoxin_rank then
				val[13] = daoxin[m].val
			end
		end
		
		
		if foyuan and foyuan[m] then
			if foyuan[m].rank == foyuan_rank then
				val[14] = foyuan[m].val
			end
		end
		
		if moxing and moxing[m] then
			if moxing[m].rank == moxing_rank then
				val[15] = moxing[m].val
			end
		end
		
		if jiulishengwang and jiulishengwang[m] then
			if jiulishengwang[m].rank == shengwang_rank then
				val[16] = jiulishengwang[m].val
			end
		end 
		
		if lieshanshengwang and lieshanshengwang[m] then
			if lieshanshengwang[m].rank == shengwang_rank then
				val[17] = lieshanshengwang[m].val
			end
		end
	
	if tianhuashengwang and tianhuashengwang[m] then
			if tianhuashengwang[m].rank == shengwang_rank then
				val[19] = tianhuashengwang[m].val
			end
		end 
	
	if huaiguangshengwang and huaiguangshengwang[m] then
			if huaiguangshengwang[m].rank == shengwang_rank then
				val[18] = huaiguangshengwang[m].val
			end
		end
		
	end

	for k, v in pairs(person_title) do					--发放个人称谓及条件限制

		if exp and exp[k] then
			if val[1] ~= nil and val[1] >= lev_high then
				if exp[k].rank <= 1 then
					add_title(v, title_definition['等级排行1'].id)
				elseif exp[k].rank <= 5 and exp[k].val >=lev_low then
					add_title(v, title_definition['等级排行2-5'].id)
				elseif  exp[k].rank <= 10 and exp[k].val >=lev_low then
					add_title(v, title_definition['等级排行6-10'].id)
				elseif  exp[k].rank <= 100 and exp[k].val >=lev_low then
					add_title(v, title_definition['等级排行11-50'].id)
				elseif  exp[k].rank <= 500 and exp[k].val >=lev_low then
					add_title(v, title_definition['等级排行51-400'].id)
				end
			end
		end


		if caifu and caifu[k] then
			if val[2] ~= nil and val[2] >= caifu_high then
				if caifu[k].rank <= 1 then
					add_title(v, title_definition['财富排行1'].id)
				elseif caifu[k].rank <= 5 and caifu[k].val >= caifu_low then
					add_title(v, title_definition['财富排行2-5'].id)
				elseif caifu[k].rank <= 10 and caifu[k].val >= caifu_low then
					add_title(v, title_definition['财富排行6-10'].id)
				elseif caifu[k].rank <= 100 and caifu[k].val >= caifu_low then
					add_title(v, title_definition['财富排行11-50'].id)
				elseif caifu[k].rank <= 500 and caifu[k].val >= caifu_low then
					add_title(v, title_definition['财富排行51-400'].id)
				end
			end
		end


		if xiayi and xiayi[k] then
			if val[3] ~= nil and val[3] >= xiayi_high then
				if xiayi[k].rank <= 1 then
					add_title(v, title_definition['侠义排行1'].id)
				elseif xiayi[k].rank <= 5 and xiayi[k].val >=xiayi_low then
					add_title(v, title_definition['侠义排行2-5'].id)
				elseif xiayi[k].rank <= 10 and xiayi[k].val >=xiayi_low then
					add_title(v, title_definition['侠义排行6-10'].id)
				elseif xiayi[k].rank <= 100 and xiayi[k].val >=xiayi_low then
					add_title(v, title_definition['侠义排行11-50'].id)
				elseif xiayi[k].rank <= 500 and xiayi[k].val >=xiayi_low then
					add_title(v, title_definition['侠义排行51-400'].id)
				end
			end
		end


		if qingyunmenshengwang and qingyunmenshengwang[k] then
			if val[4] ~= nil and val[4] >= shengwang_high then
				if qingyunmenshengwang[k].rank <= 1 then
					add_title(v, title_definition['青云门声望排行1'].id)
				elseif qingyunmenshengwang[k].rank <= 5 and qingyunmenshengwang[k].val >= shengwang_low then
					add_title(v, title_definition['青云门声望排行2-5'].id)
				elseif qingyunmenshengwang[k].rank <= 10 and qingyunmenshengwang[k].val >= shengwang_low then
					add_title(v, title_definition['青云门声望排行6-10'].id)
				elseif qingyunmenshengwang[k].rank <= 100 and qingyunmenshengwang[k].val >= shengwang_low then
					add_title(v, title_definition['青云门声望排行11-50'].id)
				elseif qingyunmenshengwang[k].rank <= 500 and qingyunmenshengwang[k].val >= shengwang_low then
					add_title(v, title_definition['青云门声望排行51-400'].id)
				end
			end
		end


		if tianyinsishengwang and tianyinsishengwang[k] then
			if val[5] ~= nil and val[5] >=shengwang_high then
				if tianyinsishengwang[k].rank <= 1 then
					add_title(v, title_definition['天音寺声望排行1'].id)
				elseif tianyinsishengwang[k].rank <= 5 and tianyinsishengwang[k].val >=shengwang_low then
					add_title(v, title_definition['天音寺声望排行2-5'].id)
				elseif tianyinsishengwang[k].rank <= 10 and tianyinsishengwang[k].val >=shengwang_low then
					add_title(v, title_definition['天音寺声望排行6-10'].id)
				elseif tianyinsishengwang[k].rank <= 100 and tianyinsishengwang[k].val >=shengwang_low then
					add_title(v, title_definition['天音寺声望排行11-50'].id)
				elseif tianyinsishengwang[k].rank <= 500 and tianyinsishengwang[k].val >=shengwang_low then
					add_title(v, title_definition['天音寺声望排行51-400'].id)
				end
			end
		end


		if guiwangzongshengwang and guiwangzongshengwang[k] then
			if val[6] ~= nil and val[6] >= shengwang_high then
				if guiwangzongshengwang[k].rank <= 1 then
					add_title(v, title_definition['鬼王宗声望排行1'].id)
				elseif guiwangzongshengwang[k].rank <= 5 and guiwangzongshengwang[k].val >= shengwang_low then
					add_title(v, title_definition['鬼王宗声望排行2-5'].id)
				elseif guiwangzongshengwang[k].rank <= 10 and guiwangzongshengwang[k].val >= shengwang_low then
					add_title(v, title_definition['鬼王宗声望排行6-10'].id)
				elseif guiwangzongshengwang[k].rank <= 100 and guiwangzongshengwang[k].val >= shengwang_low then
					add_title(v, title_definition['鬼王宗声望排行11-50'].id)
				elseif guiwangzongshengwang[k].rank <= 500 and guiwangzongshengwang[k].val >= shengwang_low then
					add_title(v, title_definition['鬼王宗声望排行51-400'].id)
				end
			end
		end


		if hehuanpaishengwang and hehuanpaishengwang[k] then
			if val[7] ~= nil and val[7] >= shengwang_high then
				if hehuanpaishengwang[k].rank <= 1 then
					add_title(v, title_definition['合欢派声望排行1'].id)
				elseif hehuanpaishengwang[k].rank <= 5 and hehuanpaishengwang[k].val >= shengwang_low then
					add_title(v, title_definition['合欢派声望排行2-5'].id)
				elseif hehuanpaishengwang[k].rank <= 10 and hehuanpaishengwang[k].val >= shengwang_low then
					add_title(v, title_definition['合欢派声望排行6-10'].id)
				elseif hehuanpaishengwang[k].rank <= 100 and hehuanpaishengwang[k].val >= shengwang_low then
					add_title(v, title_definition['合欢派声望排行11-50'].id)
				elseif hehuanpaishengwang[k].rank <= 500 and hehuanpaishengwang[k].val >= shengwang_low then
					add_title(v, title_definition['合欢派声望排行51-400'].id)
				end
			end
		end


		if zhongyishengwang and zhongyishengwang[k] then
			if val[8] ~= nil and val[8] >= shengwang_high then
				if zhongyishengwang[k].rank <= 1 then
					add_title(v, title_definition['忠义声望排行1'].id)
				elseif zhongyishengwang[k].rank <= 5 and zhongyishengwang[k].val >= shengwang_low then
					add_title(v, title_definition['忠义声望排行2-5'].id)
				elseif zhongyishengwang[k].rank <= 10 and zhongyishengwang[k].val >= shengwang_low then
					add_title(v, title_definition['忠义声望排行6-10'].id)
				elseif zhongyishengwang[k].rank <= 100 and zhongyishengwang[k].val >= shengwang_low then
					add_title(v, title_definition['忠义声望排行11-50'].id)
				elseif zhongyishengwang[k].rank <= 500 and zhongyishengwang[k].val >= shengwang_low then
					add_title(v, title_definition['忠义声望排行51-400'].id)
				end
			end
		end
		
		if qingyuanshengwang and qingyuanshengwang[k] then
			if val[9] ~= nil and val[9] >= qingyuan_high then
				if qingyuanshengwang[k].rank <= 1 then
					add_title(v, title_definition['情缘声望排行1'].id)
				elseif qingyuanshengwang[k].rank <= 5 and qingyuanshengwang[k].val >= qingyuan_low then
					add_title(v, title_definition['情缘声望排行2-5'].id)
				elseif qingyuanshengwang[k].rank <= 10 and qingyuanshengwang[k].val >= qingyuan_low then
					add_title(v, title_definition['情缘声望排行6-10'].id)
				elseif qingyuanshengwang[k].rank <= 100 and qingyuanshengwang[k].val >= qingyuan_low then
					add_title(v, title_definition['情缘声望排行11-50'].id)
				elseif qingyuanshengwang[k].rank <= 500 and qingyuanshengwang[k].val >= qingyuan_low then
					add_title(v, title_definition['情缘声望排行51-400'].id)
				end
			end
		end		
		
		if wencaishengwang and wencaishengwang[k] then
			if val[10] ~= nil and val[10] >= wencai_high then
				if wencaishengwang[k].rank <= 1 then
					add_title(v, title_definition['文采声望排行1'].id)
				elseif wencaishengwang[k].rank <= 5 and wencaishengwang[k].val >= wencai_high then
					add_title(v, title_definition['文采声望排行2-5'].id)
				elseif wencaishengwang[k].rank <= 10 and wencaishengwang[k].val >= wencai_high then
					add_title(v, title_definition['文采声望排行6-10'].id)
				elseif wencaishengwang[k].rank <= 100 and wencaishengwang[k].val >= wencai_low then
					add_title(v, title_definition['文采声望排行11-50'].id)
				elseif wencaishengwang[k].rank <= 500 and wencaishengwang[k].val >= wencai_low then
					add_title(v, title_definition['文采声望排行51-400'].id)
				end
			end
		end		
		
		if guidaoshengwang and guidaoshengwang[k] then
			if val[11] ~= nil and val[11] >= shengwang_high then
				if guidaoshengwang[k].rank <= 1 then
					add_title(v, title_definition['鬼道声望排行1'].id)
				elseif guidaoshengwang[k].rank <= 5 and guidaoshengwang[k].val >= shengwang_low then
					add_title(v, title_definition['鬼道声望排行2-5'].id)
				elseif guidaoshengwang[k].rank <= 10 and guidaoshengwang[k].val >= shengwang_low then
					add_title(v, title_definition['鬼道声望排行6-10'].id)
				elseif guidaoshengwang[k].rank <= 100 and guidaoshengwang[k].val >= shengwang_low then
					add_title(v, title_definition['鬼道声望排行11-50'].id)
				elseif guidaoshengwang[k].rank <= 500 and guidaoshengwang[k].val >= shengwang_low then
					add_title(v, title_definition['鬼道声望排行51-400'].id)
				end
			end
		end	
		
		if shidezhi and shidezhi[k] then
			if val[12] ~= nil and val[12] >= shidezhi_high then
				if shidezhi[k].rank <= 1 then
					add_title(v, title_definition['师德排行1'].id)
				elseif shidezhi[k].rank <= 5 and shidezhi[k].val >= shidezhi_low then
					add_title(v, title_definition['师德排行2-5'].id)
				elseif shidezhi[k].rank <= 10 and shidezhi[k].val >= shidezhi_low then
					add_title(v, title_definition['师德排行6-10'].id)
				elseif shidezhi[k].rank <= 100 and shidezhi[k].val >= shidezhi_low then
					add_title(v, title_definition['师德排行11-50'].id)
				elseif shidezhi[k].rank <= 500 and shidezhi[k].val >= shidezhi_low then
					add_title(v, title_definition['师德排行51-400'].id)
				end
			end
		end
		
		if daoxin and daoxin[k] then
			if val[13] ~= nil and val[13] >= daoxin_high then
				if daoxin[k].rank <= 1 then
					add_title(v, title_definition['道心排行1'].id)
				elseif daoxin[k].rank <= 5 and daoxin[k].val >= daoxin_low then
					add_title(v, title_definition['道心排行2-5'].id)
				elseif daoxin[k].rank <= 10 and daoxin[k].val >= daoxin_low then
					add_title(v, title_definition['道心排行6-10'].id)
				elseif daoxin[k].rank <= 100 and daoxin[k].val >= daoxin_low then
					add_title(v, title_definition['道心排行11-50'].id)
				elseif daoxin[k].rank <= 500 and daoxin[k].val >= daoxin_low then
					add_title(v, title_definition['道心排行51-400'].id)
				end
			end
		end
		
		if foyuan and foyuan[k] then
			if val[14] ~= nil and val[14] >= foyuan_high then
				if foyuan[k].rank <= 1 then
					add_title(v, title_definition['佛缘排行1'].id)
				elseif foyuan[k].rank <= 5 and foyuan[k].val >= foyuan_low then
					add_title(v, title_definition['佛缘排行2-5'].id)
				elseif foyuan[k].rank <= 10 and foyuan[k].val >= foyuan_low then
					add_title(v, title_definition['佛缘排行6-10'].id)
				elseif foyuan[k].rank <= 100 and foyuan[k].val >= foyuan_low then
					add_title(v, title_definition['佛缘排行11-50'].id)
				elseif foyuan[k].rank <= 500 and foyuan[k].val >= foyuan_low then
					add_title(v, title_definition['佛缘排行51-400'].id)
				end
			end
		end
		
		if moxing and moxing[k] then
			if val[15] ~= nil and val[15] >= moxing_high then
				if moxing[k].rank <= 1 then
					add_title(v, title_definition['魔性排行1'].id)
				elseif moxing[k].rank <= 5 and moxing[k].val >= moxing_low then
					add_title(v, title_definition['魔性排行2-5'].id)
				elseif moxing[k].rank <= 10 and moxing[k].val >= moxing_low then
					add_title(v, title_definition['魔性排行6-10'].id)
				elseif moxing[k].rank <= 100 and moxing[k].val >= moxing_low then
					add_title(v, title_definition['魔性排行11-50'].id)
				elseif moxing[k].rank <= 500 and moxing[k].val >= moxing_low then
					add_title(v, title_definition['魔性排行51-400'].id)
				end
			end
		end
		
		if jiulishengwang and jiulishengwang[k] then
			if val[16] ~= nil and val[16] >= shengwang_high then
				if jiulishengwang[k].rank <= 1 then
					add_title(v, title_definition['九黎声望排行1'].id)
				elseif jiulishengwang[k].rank <= 5 and jiulishengwang[k].val >= shengwang_low then
					add_title(v, title_definition['九黎声望排行2-5'].id)
				elseif jiulishengwang[k].rank <= 10 and jiulishengwang[k].val >= shengwang_low then
					add_title(v, title_definition['九黎声望排行6-10'].id)
				elseif jiulishengwang[k].rank <= 100 and jiulishengwang[k].val >= shengwang_low then
					add_title(v, title_definition['九黎声望排行11-50'].id)
				elseif jiulishengwang[k].rank <= 500 and jiulishengwang[k].val >= shengwang_low then
					add_title(v, title_definition['九黎声望排行51-400'].id)
				end
			end
		end	
		
		if lieshanshengwang and lieshanshengwang[k] then
			if val[17] ~= nil and val[17] >= shengwang_high then
				if lieshanshengwang[k].rank <= 1 then
					add_title(v, title_definition['烈山声望排行1'].id)
				elseif lieshanshengwang[k].rank <= 5 and lieshanshengwang[k].val >= shengwang_low then
					add_title(v, title_definition['烈山声望排行2-5'].id)
				elseif lieshanshengwang[k].rank <= 10 and lieshanshengwang[k].val >= shengwang_low then
					add_title(v, title_definition['烈山声望排行6-10'].id)
				elseif lieshanshengwang[k].rank <= 100 and lieshanshengwang[k].val >= shengwang_low then
					add_title(v, title_definition['烈山声望排行11-50'].id)
				elseif lieshanshengwang[k].rank <= 500 and lieshanshengwang[k].val >= shengwang_low then
					add_title(v, title_definition['烈山声望排行51-400'].id)
				end
			end
		end	
		
		if tianhuashengwang and tianhuashengwang[k] then
			if val[19] ~= nil and val[19] >= shengwang_high then
				if tianhuashengwang[k].rank <= 1 then
					add_title(v, title_definition['天华声望排行1'].id)
				elseif tianhuashengwang[k].rank <= 5 and tianhuashengwang[k].val >= shengwang_low then
					add_title(v, title_definition['天华声望排行2-5'].id)
				elseif tianhuashengwang[k].rank <= 10 and tianhuashengwang[k].val >= shengwang_low then
					add_title(v, title_definition['天华声望排行6-10'].id)
				elseif tianhuashengwang[k].rank <= 100 and tianhuashengwang[k].val >= shengwang_low then
					add_title(v, title_definition['天华声望排行11-50'].id)
				elseif tianhuashengwang[k].rank <= 500 and tianhuashengwang[k].val >= shengwang_low then
					add_title(v, title_definition['天华声望排行51-400'].id)
				end
			end
		end	
		
		if huaiguangshengwang and huaiguangshengwang[k] then
			if val[18] ~= nil and val[18] >= shengwang_high then
				if huaiguangshengwang[k].rank <= 1 then
					add_title(v, title_definition['怀光声望排行1'].id)
				elseif huaiguangshengwang[k].rank <= 5 and huaiguangshengwang[k].val >= shengwang_low then
					add_title(v, title_definition['怀光声望排行2-5'].id)
				elseif huaiguangshengwang[k].rank <= 10 and huaiguangshengwang[k].val >= shengwang_low then
					add_title(v, title_definition['怀光声望排行6-10'].id)
				elseif huaiguangshengwang[k].rank <= 100 and huaiguangshengwang[k].val >= shengwang_low then
					add_title(v, title_definition['怀光声望排行11-50'].id)
				elseif huaiguangshengwang[k].rank <= 500 and huaiguangshengwang[k].val >= shengwang_low then
					add_title(v, title_definition['怀光声望排行51-400'].id)
				end
			end
		end	
 end

	for m, n in pairs(family_title) do					--得到家族排行称谓开启条件

		if qingyunjiazu and qingyunjiazu[m] then
			if qingyunjiazu[m].rank == tiaozhan_rank then
				f_val[1] = qingyunjiazu[m].val
			end
		end
		
		if tianyinjiazu and tianyinjiazu[m] then
			if tianyinjiazu[m].rank == tiaozhan_rank then
				f_val[2] = tianyinjiazu[m].val
			end
		end

		if liubojiazu and liubojiazu[m] then
			if liubojiazu[m].rank == tiaozhan_rank then
				f_val[3] = liubojiazu[m].val
			end
		end
		
		if siwangjiazu and siwangjiazu[m] then
			if siwangjiazu[m].rank == tiaozhan_rank then
				f_val[4] = siwangjiazu[m].val
			end
		end		

		if manhuangjiazu and manhuangjiazu[m] then
			if manhuangjiazu[m].rank == tiaozhan_rank then
				f_val[5] = manhuangjiazu[m].val
			end
		end		
		
		if fenxiangjiazu and fenxiangjiazu[m] then
			if fenxiangjiazu[m].rank == tiaozhan_rank then
				f_val[6] = fenxiangjiazu[m].val
			end
		end		

		if nanjiangjiazu and nanjiangjiazu[m] then
			if nanjiangjiazu[m].rank == tiaozhan_rank then
				f_val[7] = nanjiangjiazu[m].val
			end
		end		
		
		if kunlunjiazu and kunlunjiazu[m] then
			if kunlunjiazu[m].rank == tiaozhan_rank then
				f_val[8] = kunlunjiazu[m].val
			end
		end		
		
		if xiuluojiazu and xiuluojiazu[m] then
			if xiuluojiazu[m].rank == tiaozhan_rank then
				f_val[9] = xiuluojiazu[m].val
			end
		end		
		

		
	end
	
	  --下面的for语句逐个检查家族
	for k, v in pairs(family_title) do						--发放家族称谓及条件限制
      --根据家族的排行榜可设置玩家的称谓

		if qingyunjiazu and qingyunjiazu[k] then
			if f_val[1] ~= nil and f_val[1] >= tiaozhan_high then
				if qingyunjiazu[k].rank <= 1 then
					person_title[qingyunjiazu[k].prof_master] = add_title(person_title[qingyunjiazu[k].prof_master], title_definition['青云挑战排行1'].id)
				elseif qingyunjiazu[k].rank <= 5 then
					person_title[qingyunjiazu[k].prof_master] = add_title(person_title[qingyunjiazu[k].prof_master],title_definition['青云挑战排行2-5'].id)
				elseif qingyunjiazu[k].rank <= 10 then
					person_title[qingyunjiazu[k].prof_master] = add_title(person_title[qingyunjiazu[k].prof_master],title_definition['青云挑战排行6-10'].id)
				elseif qingyunjiazu[k].rank <= 50 then
					person_title[qingyunjiazu[k].prof_master] = add_title(person_title[qingyunjiazu[k].prof_master],title_definition['青云挑战排行11-50'].id)
				end
			end
		end

		if tianyinjiazu and tianyinjiazu[k] then
			if f_val[2] ~= nil and f_val[2] >= tiaozhan_high then
				if tianyinjiazu[k].rank <= 1 then
					person_title[tianyinjiazu[k].prof_master] = add_title(person_title[tianyinjiazu[k].prof_master], title_definition['天音挑战排行1'].id)
				elseif tianyinjiazu[k].rank <= 5 then
					person_title[tianyinjiazu[k].prof_master] = add_title(person_title[tianyinjiazu[k].prof_master],title_definition['天音挑战排行2-5'].id)
				elseif tianyinjiazu[k].rank <= 10 then
					person_title[tianyinjiazu[k].prof_master] = add_title(person_title[tianyinjiazu[k].prof_master],title_definition['天音挑战排行6-10'].id)
				elseif tianyinjiazu[k].rank <= 50 then
					person_title[tianyinjiazu[k].prof_master] = add_title(person_title[tianyinjiazu[k].prof_master],title_definition['天音挑战排行11-50'].id)
				end
			end
		end
		
		if liubojiazu and liubojiazu[k] then
			if f_val[3] ~= nil and f_val[3] >= tiaozhan_high then
				if liubojiazu[k].rank <= 1 then
					person_title[liubojiazu[k].prof_master] = add_title(person_title[liubojiazu[k].prof_master], title_definition['流波挑战排行1'].id)
				elseif liubojiazu[k].rank <= 5 then
					person_title[liubojiazu[k].prof_master] = add_title(person_title[liubojiazu[k].prof_master],title_definition['流波挑战排行2-5'].id)
				elseif liubojiazu[k].rank <= 10 then
					person_title[liubojiazu[k].prof_master] = add_title(person_title[liubojiazu[k].prof_master],title_definition['流波挑战排行6-10'].id) 
				elseif liubojiazu[k].rank <= 50 then
					person_title[liubojiazu[k].prof_master] = add_title(person_title[liubojiazu[k].prof_master],title_definition['流波挑战排行11-50'].id)
				end
			end
		end		
		
		if siwangjiazu and siwangjiazu[k] then
			if f_val[4] ~= nil and f_val[4] >= tiaozhan_high then
				if siwangjiazu[k].rank <= 1 then
					person_title[siwangjiazu[k].prof_master] = add_title(person_title[siwangjiazu[k].prof_master], title_definition['死亡沼泽挑战排行1'].id)
				elseif siwangjiazu[k].rank <= 5 then
					person_title[siwangjiazu[k].prof_master] = add_title(person_title[siwangjiazu[k].prof_master],title_definition['死亡挑战排行2-5'].id)
				elseif siwangjiazu[k].rank <= 10 then
					person_title[siwangjiazu[k].prof_master] = add_title(person_title[siwangjiazu[k].prof_master],title_definition['死亡挑战排行6-10'].id)
				elseif siwangjiazu[k].rank <= 50 then
					person_title[siwangjiazu[k].prof_master] = add_title(person_title[siwangjiazu[k].prof_master],title_definition['死亡挑战排行11-50'].id)
				end
			end
		end				
		
		if manhuangjiazu and manhuangjiazu[k] then
			if f_val[5] ~= nil and f_val[5] >= tiaozhan_high then
				if manhuangjiazu[k].rank <= 1 then
					person_title[manhuangjiazu[k].prof_master] = add_title(person_title[manhuangjiazu[k].prof_master], title_definition['蛮荒挑战排行1'].id)
				elseif manhuangjiazu[k].rank <= 5 then
					person_title[manhuangjiazu[k].prof_master] = add_title(person_title[manhuangjiazu[k].prof_master],title_definition['蛮荒挑战排行2-5'].id)
				elseif manhuangjiazu[k].rank <= 10 then
					person_title[manhuangjiazu[k].prof_master] = add_title(person_title[manhuangjiazu[k].prof_master],title_definition['蛮荒挑战排行6-10'].id) 
				elseif manhuangjiazu[k].rank <= 50 then
					person_title[manhuangjiazu[k].prof_master] = add_title(person_title[manhuangjiazu[k].prof_master],title_definition['蛮荒挑战排行11-50'].id)					
				end
			end
		end		

		if fenxiangjiazu and fenxiangjiazu[k] then
			if f_val[6] ~= nil and f_val[6] >= tiaozhan_high then
				if fenxiangjiazu[k].rank <= 1 then
					person_title[fenxiangjiazu[k].prof_master] = add_title(person_title[fenxiangjiazu[k].prof_master], title_definition['焚香挑战排行1'].id)
				elseif fenxiangjiazu[k].rank <= 5 then
					person_title[fenxiangjiazu[k].prof_master] = add_title(person_title[fenxiangjiazu[k].prof_master],title_definition['焚香挑战排行2-5'].id)
				elseif fenxiangjiazu[k].rank <= 10 then
					person_title[fenxiangjiazu[k].prof_master] = add_title(person_title[fenxiangjiazu[k].prof_master],title_definition['焚香挑战排行6-10'].id) 
				elseif fenxiangjiazu[k].rank <= 50 then
					person_title[fenxiangjiazu[k].prof_master] = add_title(person_title[fenxiangjiazu[k].prof_master],title_definition['焚香挑战排行11-50'].id)					
				end
			end
		end		
		
		if nanjiangjiazu and nanjiangjiazu[k] then
			if f_val[7] ~= nil and f_val[7] >= tiaozhan_high then
				if nanjiangjiazu[k].rank <= 1 then
					person_title[nanjiangjiazu[k].prof_master] = add_title(person_title[nanjiangjiazu[k].prof_master], title_definition['南疆挑战排行1'].id)
				elseif nanjiangjiazu[k].rank <= 5 then
					person_title[nanjiangjiazu[k].prof_master] = add_title(person_title[nanjiangjiazu[k].prof_master],title_definition['南疆挑战排行2-5'].id)
				elseif nanjiangjiazu[k].rank <= 10 then
					person_title[nanjiangjiazu[k].prof_master] = add_title(person_title[nanjiangjiazu[k].prof_master],title_definition['南疆挑战排行6-10'].id) 
				elseif nanjiangjiazu[k].rank <= 50 then
					person_title[nanjiangjiazu[k].prof_master] = add_title(person_title[nanjiangjiazu[k].prof_master],title_definition['南疆挑战排行11-50'].id)					
				end
			end
		end				

		if kunlunjiazu and kunlunjiazu[k] then
			if f_val[8] ~= nil and f_val[8] >= tiaozhan_high then
				if kunlunjiazu[k].rank <= 1 then
					person_title[kunlunjiazu[k].prof_master] = add_title(person_title[kunlunjiazu[k].prof_master], title_definition['昆仑挑战排行1'].id)
				elseif kunlunjiazu[k].rank <= 5 then
					person_title[kunlunjiazu[k].prof_master] = add_title(person_title[kunlunjiazu[k].prof_master],title_definition['昆仑挑战排行2-5'].id)
				elseif kunlunjiazu[k].rank <= 10 then
					person_title[kunlunjiazu[k].prof_master] = add_title(person_title[kunlunjiazu[k].prof_master],title_definition['昆仑挑战排行6-10'].id) 
				elseif kunlunjiazu[k].rank <= 50 then
					person_title[kunlunjiazu[k].prof_master] = add_title(person_title[kunlunjiazu[k].prof_master],title_definition['昆仑挑战排行11-50'].id)					
				end
			end
		end	
		
		if xiuluojiazu and xiuluojiazu[k] then
			if f_val[9] ~= nil and f_val[9] >= tiaozhan_high then
				if xiuluojiazu[k].rank <= 1 then
					person_title[xiuluojiazu[k].prof_master] = add_title(person_title[xiuluojiazu[k].prof_master], title_definition['修罗挑战排行1'].id)
				elseif xiuluojiazu[k].rank <= 5 then
					person_title[xiuluojiazu[k].prof_master] = add_title(person_title[xiuluojiazu[k].prof_master],title_definition['修罗挑战排行2-5'].id)
				elseif xiuluojiazu[k].rank <= 10 then
					person_title[xiuluojiazu[k].prof_master] = add_title(person_title[xiuluojiazu[k].prof_master],title_definition['修罗挑战排行6-10'].id) 
				elseif xiuluojiazu[k].rank <= 50 then
					person_title[xiuluojiazu[k].prof_master] = add_title(person_title[xiuluojiazu[k].prof_master],title_definition['修罗挑战排行11-50'].id)					
				end
			end
		end			
		
 end


	for m, n in pairs(faction_title) do						--获得帮派排行称谓开启条件

		if bangpaidengji and bangpaidengji[m] then
			if bangpaidengji[m].rank == bangpai_sum then
				b_val[1] = bangpai_sum
			end
		end
		
		if bangpailingqi and bangpailingqi[m] then
			if bangpailingqi[m].rank == lingqi_rank then
				b_val[2] = bangpailingqi[m].val
			end
		end		

	end


   --下面的for语句逐个检查帮派
	for k, v in pairs(faction_title) do						--发放帮派称谓及条件限制
      --根据帮派的排行榜可设置玩家的称谓

		if bangpaidengji and bangpaidengji[k] then
			if b_val[1] ~= nil and b_val[1] == bangpai_sum  then
				if bangpaidengji[k].rank <= bangpai_rank and bangpaidengji[k].val >= bangpai_lev then
					person_title[bangpaidengji[k].prof_master] = add_title(person_title[bangpaidengji[k].prof_master], title_definition['帮派等级排行1'].id)
				end
			end
		end

		if bangpaicaifu and bangpaicaifu[k] then
			if b_val[1] ~= nil and b_val[1] == bangpai_sum then
				if bangpaicaifu[k].rank <= bangpai_rank and bangpaicaifu[k].val >= bangpai_caifu then
					person_title[bangpaicaifu[k].prof_master] = add_title(person_title[bangpaicaifu[k].prof_master],title_definition['帮派财富排行1'].id)
				end
			end
		end

		if bangpaijianshe and bangpaijianshe[k] then
			if b_val[1] ~= nil and b_val[1] == bangpai_sum then
				if bangpaijianshe[k].rank <= bangpai_rank and bangpaijianshe[k].val >= bangpai_jianshe then
					person_title[bangpaijianshe[k].prof_master] = add_title(person_title[bangpaijianshe[k].prof_master],title_definition['帮派建设度排行1'].id)
				elseif bangpaijianshe[k].rank <= 10 and bangpaijianshe[k].val >= bangpai_jianshe then
					person_title[bangpaijianshe[k].prof_master] = add_title(person_title[bangpaijianshe[k].prof_master],title_definition['帮派建设度排行2-10'].id)
				end
			end
		end

		if bangpairenshu and bangpairenshu[k] then
			if b_val[1] ~= nil and b_val[1] == bangpai_sum then
				if bangpairenshu[k].rank <= bangpai_rank and bangpairenshu[k].val >= bangpai_renshu then
					person_title[bangpairenshu[k].prof_master] = add_title(person_title[bangpairenshu[k].prof_master],title_definition['帮派人数排行1'].id)
				end
			end
		end

		if qingyunmenbangpai and qingyunmenbangpai[k] then
			if b_val[1] ~= nil and b_val[1] == bangpai_sum then
				if qingyunmenbangpai[k].rank <= bangpai_rank and qingyunmenbangpai[k].val >= bangpai_shengwang then
					person_title[qingyunmenbangpai[k].prof_master] = add_title(person_title[qingyunmenbangpai[k].prof_master],title_definition['青云门第一帮'].id)
				end
			end
		end
		


		if tianyinsibangpai and tianyinsibangpai[k] then
			if b_val[1] ~= nil and b_val[1] == bangpai_sum then
				if tianyinsibangpai[k].rank <= bangpai_rank and tianyinsibangpai[k].val >= bangpai_shengwang then
					person_title[tianyinsibangpai[k].prof_master] = add_title(person_title[tianyinsibangpai[k].prof_master],title_definition['天音寺第一帮'].id)
				end
			end
		end

		if guiwangzongbangpai and guiwangzongbangpai[k] then
			if b_val[1] ~= nil and b_val[1] == bangpai_sum then
				if guiwangzongbangpai[k].rank <= bangpai_rank and guiwangzongbangpai[k].val >= bangpai_shengwang then
					person_title[guiwangzongbangpai[k].prof_master] = add_title(person_title[guiwangzongbangpai[k].prof_master],title_definition['鬼王宗第一帮'].id)
				end
			end
		end

		if hehuanpaibangpai and hehuanpaibangpai[k] then
			if b_val[1] ~= nil and b_val[1] == bangpai_sum then
				if hehuanpaibangpai[k].rank <= bangpai_rank and hehuanpaibangpai[k].val >= bangpai_shengwang then
					person_title[hehuanpaibangpai[k].prof_master] = add_title(person_title[hehuanpaibangpai[k].prof_master],title_definition['合欢派第一帮'].id)
				end
			end
		end

		if guidaobangpai and guidaobangpai[k] then
			if b_val[1] ~= nil and b_val[1] == bangpai_sum then
				if guidaobangpai[k].rank <= bangpai_rank and guidaobangpai[k].val >= bangpai_shengwang then
					person_title[guidaobangpai[k].prof_master] = add_title(person_title[guidaobangpai[k].prof_master],title_definition['鬼道第一帮'].id)
				end
			end
		end 		

		if jiulibangpai and jiulibangpai[k] then
			if b_val[1] ~= nil and b_val[1] == bangpai_sum then
				if jiulibangpai[k].rank <= bangpai_rank and jiulibangpai[k].val >= bangpai_shengwang then
					person_title[jiulibangpai[k].prof_master] = add_title(person_title[jiulibangpai[k].prof_master],title_definition['九黎氏第一帮'].id)
				end
			end
		end

		if lieshanbangpai and lieshanbangpai[k] then
			if b_val[1] ~= nil and b_val[1] == bangpai_sum then
				if lieshanbangpai[k].rank <= bangpai_rank and lieshanbangpai[k].val >= bangpai_shengwang then
					person_title[lieshanbangpai[k].prof_master] = add_title(person_title[lieshanbangpai[k].prof_master],title_definition['烈山氏第一帮'].id)
				end
			end
		end
		
		if tianhuabangpai and tianhuabangpai[k] then
			if b_val[1] ~= nil and b_val[1] == bangpai_sum then
				if tianhuabangpai[k].rank <= bangpai_rank and tianhuabangpai[k].val >= bangpai_shengwang then
					person_title[tianhuabangpai[k].prof_master] = add_title(person_title[lieshanbangpai[k].prof_master],title_definition['天华氏第一帮'].id)
				end
			end
		end 
		
		if huaiguangbangpai and huaiguangbangpai[k] then
			if b_val[1] ~= nil and b_val[1] == bangpai_sum then
				if huaiguangbangpai[k].rank <= bangpai_rank and huaiguangbangpai[k].val >= bangpai_shengwang then
					person_title[huaiguangbangpai[k].prof_master] = add_title(person_title[lieshanbangpai[k].prof_master],title_definition['怀光氏第一帮'].id)
				end
			end
		end
	
		if zhongyibangpai and zhongyibangpai[k] then
			if b_val[1] ~= nil and b_val[1] == bangpai_sum then
				if zhongyibangpai[k].rank <= bangpai_rank and zhongyibangpai[k].val >= bangpai_shengwang then
					person_title[zhongyibangpai[k].prof_master] = add_title(person_title[zhongyibangpai[k].prof_master],title_definition['忠义第一帮'].id)
				end
			end
		end
		
		if qingyuanbangpai and qingyuanbangpai[k] then
			if b_val[1] ~= nil and b_val[1] == bangpai_sum then
				if qingyuanbangpai[k].rank <= bangpai_rank and qingyuanbangpai[k].val >= bangpai_shengwang then
					person_title[qingyuanbangpai[k].prof_master] = add_title(person_title[qingyuanbangpai[k].prof_master],title_definition['情缘第一帮'].id)
				end
			end
		end		
		
		if wencaibangpai and wencaibangpai[k] then
			if b_val[1] ~= nil and b_val[1] == bangpai_sum then
				if wencaibangpai[k].rank <= bangpai_rank and wencaibangpai[k].val >= bangpai_shengwang then
					person_title[wencaibangpai[k].prof_master] = add_title(person_title[wencaibangpai[k].prof_master],title_definition['文采第一帮'].id)
				end
			end
		end				
		
		if bangpailingqi and bangpailingqi[k] then
			if b_val[2] ~= nil and b_val[2] >= lingqi_high then
				if bangpailingqi[k].rank <= 1 then
					person_title[bangpailingqi[k].prof_master] = add_title(person_title[bangpailingqi[k].prof_master],title_definition['灵气排行1'].id)
				elseif bangpailingqi[k].rank <= 5 and bangpailingqi[k].val >= lingqi_low then
					person_title[bangpailingqi[k].prof_master] = add_title(person_title[bangpailingqi[k].prof_master],title_definition['灵气排行2-5'].id)
				end
			end
		end
	end
	
end


function main()
	person_title = {};   --个人的称谓表
	init_title(person_title, RANK_TYPE_PERSON);
	family_title = {};  --家族的称谓表
	init_title(family_title, RANK_TYPE_FAMILY);
	faction_title = {};  --帮派的称谓表
	init_title(faction_title, RANK_TYPE_FACTION);

	grant_title()

end



