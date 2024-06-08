--[[
//����³�����Ҫ���õ�������

1.���ó���ĸ���λ�͵�λ����
ZLuaPetBedgeSetGrades(pet_tid,origin)

--]]
function ZLuaPetBedgeSetGrades(pet_tid,origin)
	if ZLuaPetBedgeExistInTmplIDs(pet_tid) == 0 then return end
	local AvailablePets=ZLuaAvailablePets()
	local defaultgrades={}		---//��ʼֵ��λ���
	local potentialgrades={}	---//�ɳ���λ��ʼֵ
	local gradelimits={}			---//�ɳ���λ���ֵ
	local MAXGRADES=60				---//��ǰ���ĳɳ�����
	local totalgradelimits=0
	for i=1,13 do
		defaultgrades[i]=1
		potentialgrades[i]=1
		gradelimits[i]=1
	end 
	local ServerOrigins=ZLuaPetBedgeOrigins()
	local serverorigin = origin or ServerOrigins["drop"]
	---//Ŀǰ������gradelimits����50�ĳ���(����Ϊ60 20080516)
	if pet_tid==AvailablePets["TestPet"].pet_tid or pet_tid==AvailablePets["TestPet2"].pet_tid  then 
		defaultgrades		={8,8,8,8,8,8,8,8,8,8,8,8,8}
		potentialgrades	={2,2,2,2,2,2,2,2,1,1,1,1,1}
		gradelimits		={20,20,20,20,20,20,20,50,50,50,50,50,10}
		---//��Ѫ/����/С��/��/����/����/����/ѣ��/����/����/�Ȼ�/��˯/����
	elseif pet_tid==AvailablePets["conglinshanzhu"].pet_tid  then
				---//����ɽ��
		defaultgrades		={8,8,8,8,8,8,8,8,8,8,8,8,8}
		potentialgrades	={1,1,1,1,1,1,1,1,1,1,1,1,1}
		gradelimits		={50,30,30,35,40,30,30,40,30,30,40,40,10}
	elseif pet_tid==AvailablePets["beimingshuyao"].pet_tid  then
				---//��ڤ����
		defaultgrades		={8,8,8,8,8,8,8,8,8,8,8,8,8}
		potentialgrades	={1,1,1,1,1,1,1,1,1,1,1,1,1}
		gradelimits		={35,40,25,30,50,25,30,30,40,40,40,40,10}	
	elseif pet_tid==AvailablePets["bingyuanxuexiong"].pet_tid  then
				---//��ԭѩ��
		defaultgrades		={8,8,8,8,8,8,8,8,8,8,8,8,8}
		potentialgrades	={1,1,1,1,1,1,1,1,1,1,1,1,1}
		gradelimits		={49,30,30,36,40,30,30,40,30,30,40,40,10}	
	elseif pet_tid==AvailablePets["meixindiejing"].pet_tid  then
				---//���ĵ���
		defaultgrades		={8,8,8,8,8,8,8,8,8,8,8,8,8}
		potentialgrades	={1,1,1,1,1,1,1,1,1,1,1,1,1}
		gradelimits		={30,45,40,50,25,35,20,30,35,35,40,40,10}	
	elseif pet_tid==AvailablePets["songcaijinshu"].pet_tid  then
				---//�Ͳƽ���
		defaultgrades		={8,8,8,8,8,8,8,8,8,8,8,8,8}
		potentialgrades	={1,1,1,1,1,1,1,1,1,1,1,1,1}
		gradelimits		={35,30,40,45,30,35,50,25,30,30,25,50,10}	
	elseif pet_tid==AvailablePets["shouhushiling"].pet_tid  then
				---//�ػ�ʯ��
		defaultgrades		={8,8,8,8,8,8,8,8,8,8,8,8,8}
		potentialgrades	={1,1,1,1,1,1,1,1,1,1,1,1,1}
		gradelimits		={45,35,35,35,30,25,20,50,50,30,20,50,10}	
	elseif pet_tid==AvailablePets["yiyujingling"].pet_tid  then
				---//������
		defaultgrades		={8,8,8,8,8,8,8,8,8,8,8,8,8}
		potentialgrades	={1,1,1,1,1,1,1,1,1,1,1,1,1}
		gradelimits		={45,35,35,35,30,25,20,50,50,30,20,50,10}	
	else
	
	end 
	for j=1,table.getn(gradelimits)-1 do
		totalgradelimits=totalgradelimits+gradelimits[j]
	end 
	return defaultgrades,potentialgrades,gradelimits,totalgradelimits,MAXGRADES
end 


----���ݳ��������Դ����ս�����Եĳ�ʼ��λ---------------------------------------------------------
function ZLuaPetBedgeInitGrades(pet_tid,origin)
	if ZLuaPetBedgeExistInTmplIDs(pet_tid) == 0 then return end
	
	local AvailablePets=ZLuaAvailablePets()
	local ServerOrigins=ZLuaPetBedgeOrigins()
	local serverorigin = origin or ServerOrigins["drop"]
	
	local default_add1,default_add2,potential_add1,potential_add2=0,0,0,0
	---//�̳ǹ����õĳ�ʼ��λ/�ɳ���λ��������
	if serverorigin==ServerOrigins["gshop"] then 
		default_add1=10
		default_add2=60 
		potential_add1=2
		potential_add2=10
	end 
	
	local GradeDirection=ZLuaPetBedgeGradeDirection()
	local Grades={}
	local star,maintype
	
	local defaultgrades,potentialgrades,_,_,MAXGRADES=ZLuaPetBedgeSetGrades(pet_tid,origin)

	Grades[GradeDirection["default_hp"]]					=ZLuaPetBedgeGradeChoose(1+default_add1,defaultgrades[1]+default_add2)
	Grades[GradeDirection["default_mp"]]					=ZLuaPetBedgeGradeChoose(1+default_add1,defaultgrades[2]+default_add2)
	Grades[GradeDirection["default_minatk"]]			=ZLuaPetBedgeGradeChoose(1+default_add1,defaultgrades[3]+default_add2)
	Grades[GradeDirection["default_maxatk"]]			=math.max(ZLuaPetBedgeGradeChoose(1+default_add1,defaultgrades[4]+default_add2),Grades[GradeDirection["default_minatk"]])
	Grades[GradeDirection["default_def"]]					=ZLuaPetBedgeGradeChoose(1+default_add1,defaultgrades[5]+default_add2)
	Grades[GradeDirection["default_attackrate"]]	=ZLuaPetBedgeGradeChoose(1+default_add1,defaultgrades[6]+default_add2)
	Grades[GradeDirection["default_dodge"]]				=ZLuaPetBedgeGradeChoose(1+default_add1,defaultgrades[7]+default_add2)
	Grades[GradeDirection["default_resist1"]]			=ZLuaPetBedgeGradeChoose(1+default_add1,defaultgrades[8]+default_add2)
	Grades[GradeDirection["default_resist2"]]			=ZLuaPetBedgeGradeChoose(1+default_add1,defaultgrades[9]+default_add2)
	Grades[GradeDirection["default_resist3"]]			=ZLuaPetBedgeGradeChoose(1+default_add1,defaultgrades[10]+default_add2)
	Grades[GradeDirection["default_resist4"]]			=ZLuaPetBedgeGradeChoose(1+default_add1,defaultgrades[11]+default_add2)
	Grades[GradeDirection["default_resist5"]]			=ZLuaPetBedgeGradeChoose(1+default_add1,defaultgrades[12]+default_add2)
	Grades[GradeDirection["default_resist6"]]			=ZLuaPetBedgeGradeChoose(1+default_add1,defaultgrades[13]+default_add2)
			
	Grades[GradeDirection["potential_hp"]]				=ZLuaPetBedgeGradeChoose(1+potential_add1,math.min(potentialgrades[1]+potential_add2,MAXGRADES))
	Grades[GradeDirection["potential_mp"]]				=ZLuaPetBedgeGradeChoose(1+potential_add1,math.min(potentialgrades[2]+potential_add2,MAXGRADES))
	Grades[GradeDirection["potential_minatk"]]		=ZLuaPetBedgeGradeChoose(1+potential_add1,math.min(potentialgrades[3]+potential_add2,MAXGRADES))
	Grades[GradeDirection["potential_maxatk"]]		=math.max(ZLuaPetBedgeGradeChoose(1+potential_add1,math.min(potentialgrades[4]+potential_add2,MAXGRADES)),Grades[GradeDirection["potential_minatk"]])
	Grades[GradeDirection["potential_def"]]				=ZLuaPetBedgeGradeChoose(1+potential_add1,math.min(potentialgrades[5]+potential_add2,MAXGRADES))
	Grades[GradeDirection["potential_attackrate"]]=ZLuaPetBedgeGradeChoose(1+potential_add1,math.min(potentialgrades[6]+potential_add2,MAXGRADES))
	Grades[GradeDirection["potential_dodge"]]			=ZLuaPetBedgeGradeChoose(1+potential_add1,math.min(potentialgrades[7]+potential_add2,MAXGRADES))
	Grades[GradeDirection["potential_resist1"]]		=ZLuaPetBedgeGradeChoose(1+potential_add1,math.min(potentialgrades[8]+potential_add2,MAXGRADES))
	Grades[GradeDirection["potential_resist2"]]		=ZLuaPetBedgeGradeChoose(1+potential_add1,math.min(potentialgrades[9]+potential_add2,MAXGRADES))
	Grades[GradeDirection["potential_resist3"]]		=ZLuaPetBedgeGradeChoose(1+potential_add1,math.min(potentialgrades[10]+potential_add2,MAXGRADES))
	Grades[GradeDirection["potential_resist4"]]		=ZLuaPetBedgeGradeChoose(1+potential_add1,math.min(potentialgrades[11]+potential_add2,MAXGRADES))
	Grades[GradeDirection["potential_resist5"]]		=ZLuaPetBedgeGradeChoose(1+potential_add1,math.min(potentialgrades[12]+potential_add2,MAXGRADES))
	Grades[GradeDirection["potential_resist6"]]		=ZLuaPetBedgeGradeChoose(1+potential_add1,math.min(potentialgrades[13]+potential_add2,MAXGRADES))

	star,maintype=ZLuaPetStarAndMaintypeFromGrades(pet_tid,origin,Grades,1)
	return Grades,star,maintype
end 
----���ݳ��������Դ����ս�����Ե����ɳ���λ-----------------------------------------------------
function ZLuaPetBedgeMaxGrowGrades(pet_tid,maintype,element,origin)
	if ZLuaPetBedgeExistInTmplIDs(pet_tid) == 0 then return end
	if maintype<0 or maintype>12 then return end 
	local ServerOrigins=ZLuaPetBedgeOrigins()
	local serverorigin = origin or ServerOrigins["drop"]
	local PseudoGrades=ZLuaPetBedgeSuperPseudoGrades()
	local AvailablePets=ZLuaAvailablePets()
	local GradeDirection=ZLuaPetBedgeGradeDirection()
	local Element=ZLuaPetBedgeElementDesc()
	local MaxGrowGrades={}				---�������ɳ��ȵ�λ
	local MainTypeAddGrades={}		---��Ҫ������ӵĳɳ��ȵ�λ
	
	---maintype�������λ��Ӱ��
	for i=0,12 do 
		if i==maintype then 
			MainTypeAddGrades[i]=2
		else 
			MainTypeAddGrades[i]=0	
		end 
	end 
	
	
	local gradelimits={}
	
	local _,_,gradelimits,_,MAXGRADES=ZLuaPetBedgeSetGrades(pet_tid,origin)
	MaxGrowGrades[GradeDirection["potential_hp"]]					=PseudoGrades[math.min(gradelimits[1]+MainTypeAddGrades[0],MAXGRADES)]
	MaxGrowGrades[GradeDirection["potential_mp"]]					=PseudoGrades[math.min(gradelimits[2]+MainTypeAddGrades[1],MAXGRADES)]
	MaxGrowGrades[GradeDirection["potential_minatk"]]			=PseudoGrades[math.min(gradelimits[3]+MainTypeAddGrades[2],MAXGRADES)]
	MaxGrowGrades[GradeDirection["potential_maxatk"]]			=math.max(PseudoGrades[math.min(gradelimits[4]+MainTypeAddGrades[3],MAXGRADES)],MaxGrowGrades[GradeDirection["potential_minatk"]])
	MaxGrowGrades[GradeDirection["potential_def"]]				=PseudoGrades[math.min(gradelimits[5]+MainTypeAddGrades[4],MAXGRADES)]
	MaxGrowGrades[GradeDirection["potential_attackrate"]]	=PseudoGrades[math.min(gradelimits[6]+MainTypeAddGrades[5],MAXGRADES)]
	MaxGrowGrades[GradeDirection["potential_dodge"]]			=PseudoGrades[math.min(gradelimits[7]+MainTypeAddGrades[6],MAXGRADES)]
	MaxGrowGrades[GradeDirection["potential_resist1"]]		=PseudoGrades[math.min(gradelimits[8]+MainTypeAddGrades[7],MAXGRADES)]
	MaxGrowGrades[GradeDirection["potential_resist2"]]		=PseudoGrades[math.min(gradelimits[9]+MainTypeAddGrades[8],MAXGRADES)]
	MaxGrowGrades[GradeDirection["potential_resist3"]]		=PseudoGrades[math.min(gradelimits[10]+MainTypeAddGrades[9],MAXGRADES)]
	MaxGrowGrades[GradeDirection["potential_resist4"]]		=PseudoGrades[math.min(gradelimits[11]+MainTypeAddGrades[10],MAXGRADES)]
	MaxGrowGrades[GradeDirection["potential_resist5"]]		=PseudoGrades[math.min(gradelimits[12]+MainTypeAddGrades[11],MAXGRADES)]
	MaxGrowGrades[GradeDirection["potential_resist6"]]		=PseudoGrades[math.min(gradelimits[13]+MainTypeAddGrades[12],MAXGRADES)]
	
		return MaxGrowGrades
end
---���ݳɳ�����ʾֵȷ��ʵ�ʵĳɳ�ֵ----------------------------------------------------------------
function ZLuaPetTrueGrowthFromGrades(growgrade,index)
	local SpecialIndex=ZLuaPetBedgeSpecialIndex()
	
	local PseudoGrades=ZLuaPetBedgeSuperPseudoGrades()
	
	local x0,x1			
	local y0,y1,y2
	local k=1			---����ռ���������İٷֱ�
	
	x0=PseudoGrades[1]
	x1=PseudoGrades[1]
	
	for i=1,table.getn(PseudoGrades)-1 do 
		if growgrade>PseudoGrades[i] and growgrade<PseudoGrades[i+1] then 
				x0=i
				x1=i+1	
		end 
	end 
	
	for i=1,table.getn(PseudoGrades) do 
		if growgrade==PseudoGrades[i] then 
				x0=i
				x1=i	
		end 
	end 	
	
	local TrueGrowth={}
	
	if index==SpecialIndex["hp"] then
		TrueGrowth={1.0000,1.0050,1.0105,1.0165,1.0230,1.0300,1.0375,1.0455,1.0540,1.0630,
								1.0725,1.0825,1.0930,1.1040,1.1155,1.1275,1.1400,1.1530,1.1665,1.1805,
								1.1950,1.2100,1.2255,1.2415,1.2580,1.2750,1.2925,1.3105,1.3290,1.3480,
								1.3675,1.3875,1.4080,1.4290,1.4505,1.4725,1.4950,1.5180,1.5415,1.5655,
								1.5900,1.6150,1.6405,1.6665,1.6930,1.7210,1.7475,1.7755,1.8050,1.8330,
								1.8625,1.8925,1.9230,1.9540,1.9855,2.0175,2.0500,2.0830,2.1165,2.1505}
								
	elseif index==SpecialIndex["mp"] then
		TrueGrowth={1.0000,1.0050,1.0105,1.0165,1.0230,1.0300,1.0375,1.0455,1.0540,1.0630,
								1.0725,1.0825,1.0930,1.1040,1.1155,1.1275,1.1400,1.1530,1.1665,1.1805,
								1.1950,1.2100,1.2255,1.2415,1.2580,1.2750,1.2925,1.3105,1.3290,1.3480,
								1.3675,1.3875,1.4080,1.4290,1.4505,1.4725,1.4950,1.5180,1.5415,1.5655,
								1.5900,1.6150,1.6405,1.6665,1.6930,1.7210,1.7475,1.7755,1.8050,1.8330,
								1.8625,1.8925,1.9230,1.9540,1.9855,2.0175,2.0500,2.0830,2.1165,2.1505}
								
	elseif index==SpecialIndex["minatk"] then
		TrueGrowth={1.0000,1.0100,1.0213,1.0339,1.0478,1.0630,1.0795,1.0973,1.1164,1.1368,
								1.1585,1.1815,1.2058,1.2314,1.2583,1.2865,1.3160,1.3468,1.3789,1.4123,
								1.4470,1.4830,1.5203,1.5589,1.5988,1.6400,1.6825,1.7263,1.7714,1.8178,
								1.8655,1.9145,1.9648,2.0164,2.0693,2.1235,2.1790,2.2358,2.2939,2.3533,
								2.4140,2.4760,2.5393,2.6039,2.6698,2.7370,2.8055,2.8753,2.9464,3.0188,
								3.0925,3.1675,3.2438,3.3214,3.4003,3.4805,3.5620,3.6448,3.7289,3.8143}
									
	elseif index==SpecialIndex["maxatk"] then
		TrueGrowth={1.0000,1.0100,1.0213,1.0339,1.0478,1.0630,1.0795,1.0973,1.1164,1.1368,
								1.1585,1.1815,1.2058,1.2314,1.2583,1.2865,1.3160,1.3468,1.3789,1.4123,
								1.4470,1.4830,1.5203,1.5589,1.5988,1.6400,1.6825,1.7263,1.7714,1.8178,
								1.8655,1.9145,1.9648,2.0164,2.0693,2.1235,2.1790,2.2358,2.2939,2.3533,
								2.4140,2.4760,2.5393,2.6039,2.6698,2.7370,2.8055,2.8753,2.9464,3.0188,
								3.0925,3.1675,3.2438,3.3214,3.4003,3.4805,3.5620,3.6448,3.7289,3.8143}
									
	elseif index==SpecialIndex["defence"] then
		TrueGrowth={1.0000,1.0050,1.0105,1.0165,1.0230,1.0300,1.0375,1.0455,1.0540,1.0630,
								1.0725,1.0825,1.0930,1.1040,1.1155,1.1275,1.1400,1.1530,1.1665,1.1805,
								1.1950,1.2100,1.2255,1.2415,1.2580,1.2750,1.2925,1.3105,1.3290,1.3480,
								1.3675,1.3875,1.4080,1.4290,1.4505,1.4725,1.4950,1.5180,1.5415,1.5655,
								1.5900,1.6150,1.6405,1.6665,1.6930,1.7210,1.7475,1.7755,1.8050,1.8330,
								1.8625,1.8925,1.9230,1.9540,1.9855,2.0175,2.0500,2.0830,2.1165,2.1505}
			
	elseif index==SpecialIndex["atkrate"] then
		TrueGrowth={2.000,2.020,2.043,2.069,2.098,2.130,2.165,2.203,2.244,2.288,
								2.335,2.385,2.438,2.494,2.553,2.615,2.680,2.748,2.819,2.893,
								2.970,3.050,3.133,3.219,3.308,3.400,3.495,3.593,3.694,3.798,
								3.905,4.015,4.128,4.244,4.363,4.485,4.610,4.738,4.869,5.003,
								5.140,5.280,5.423,5.569,5.718,5.870,6.025,6.183,6.344,6.508,
								6.675,6.845,7.018,7.194,7.373,7.555,7.740,7.928,8.119,8.313}
									
	elseif index==SpecialIndex["dodge"] then
		TrueGrowth={0.50,0.51,0.52,0.53,0.54,0.56,0.58,0.60,0.62,0.64,
								0.67,0.70,0.73,0.76,0.79,0.83,0.87,0.91,0.95,0.99,
								1.04,1.09,1.14,1.19,1.24,1.30,1.36,1.42,1.48,1.54,
								1.61,1.68,1.75,1.82,1.89,1.97,2.05,2.13,2.21,2.29,
								2.38,2.47,2.56,2.65,2.74,2.84,2.94,3.04,3.14,3.24,
								3.35,3.46,3.57,3.68,3.79,3.91,4.03,4.15,4.27,4.39}
								
	elseif index==SpecialIndex["res1"] then		
		TrueGrowth={0.1500,0.1515,0.1545,0.1590,0.1650,0.1725,0.1815,0.1920,0.2040,0.2175,
								0.2325,0.2490,0.2670,0.2865,0.3075,0.3300,0.3540,0.3795,0.4065,0.4350,
								0.4650,0.4965,0.5295,0.5640,0.6000,0.6375,0.6765,0.7170,0.7590,0.8025,
								0.8475,0.8940,0.9420,0.9915,1.0425,1.0950,1.1490,1.2045,1.2615,1.3200,
								1.3800,1.4415,1.5045,1.5690,1.6350,1.7025,1.7715,1.8420,1.9140,1.9875,
								2.0625,2.1390,2.2170,2.2965,2.3775,2.4600,2.5440,2.6295,2.7165,2.8050}
									
	elseif index==SpecialIndex["res2"] then
		TrueGrowth={0.1500,0.1515,0.1545,0.1590,0.1650,0.1725,0.1815,0.1920,0.2040,0.2175,
								0.2325,0.2490,0.2670,0.2865,0.3075,0.3300,0.3540,0.3795,0.4065,0.4350,
								0.4650,0.4965,0.5295,0.5640,0.6000,0.6375,0.6765,0.7170,0.7590,0.8025,
								0.8475,0.8940,0.9420,0.9915,1.0425,1.0950,1.1490,1.2045,1.2615,1.3200,
								1.3800,1.4415,1.5045,1.5690,1.6350,1.7025,1.7715,1.8420,1.9140,1.9875,
								2.0625,2.1390,2.2170,2.2965,2.3775,2.4600,2.5440,2.6295,2.7165,2.8050}
	elseif index==SpecialIndex["res3"] then
		TrueGrowth={0.1500,0.1515,0.1545,0.1590,0.1650,0.1725,0.1815,0.1920,0.2040,0.2175,
								0.2325,0.2490,0.2670,0.2865,0.3075,0.3300,0.3540,0.3795,0.4065,0.4350,
								0.4650,0.4965,0.5295,0.5640,0.6000,0.6375,0.6765,0.7170,0.7590,0.8025,
								0.8475,0.8940,0.9420,0.9915,1.0425,1.0950,1.1490,1.2045,1.2615,1.3200,
								1.3800,1.4415,1.5045,1.5690,1.6350,1.7025,1.7715,1.8420,1.9140,1.9875,
								2.0625,2.1390,2.2170,2.2965,2.3775,2.4600,2.5440,2.6295,2.7165,2.8050}
	elseif index==SpecialIndex["res4"] then
		TrueGrowth={0.1500,0.1515,0.1545,0.1590,0.1650,0.1725,0.1815,0.1920,0.2040,0.2175,
								0.2325,0.2490,0.2670,0.2865,0.3075,0.3300,0.3540,0.3795,0.4065,0.4350,
								0.4650,0.4965,0.5295,0.5640,0.6000,0.6375,0.6765,0.7170,0.7590,0.8025,
								0.8475,0.8940,0.9420,0.9915,1.0425,1.0950,1.1490,1.2045,1.2615,1.3200,
								1.3800,1.4415,1.5045,1.5690,1.6350,1.7025,1.7715,1.8420,1.9140,1.9875,
								2.0625,2.1390,2.2170,2.2965,2.3775,2.4600,2.5440,2.6295,2.7165,2.8050}
	elseif index==SpecialIndex["res5"] then
		TrueGrowth={0.1500,0.1515,0.1545,0.1590,0.1650,0.1725,0.1815,0.1920,0.2040,0.2175,
								0.2325,0.2490,0.2670,0.2865,0.3075,0.3300,0.3540,0.3795,0.4065,0.4350,
								0.4650,0.4965,0.5295,0.5640,0.6000,0.6375,0.6765,0.7170,0.7590,0.8025,
								0.8475,0.8940,0.9420,0.9915,1.0425,1.0950,1.1490,1.2045,1.2615,1.3200,
								1.3800,1.4415,1.5045,1.5690,1.6350,1.7025,1.7715,1.8420,1.9140,1.9875,
								2.0625,2.1390,2.2170,2.2965,2.3775,2.4600,2.5440,2.6295,2.7165,2.8050}
	elseif index==SpecialIndex["res6"] then
		TrueGrowth={0.1500,0.1515,0.1545,0.1590,0.1650,0.1725,0.1815,0.1920,0.2040,0.2175,
								0.2325,0.2490,0.2670,0.2865,0.3075,0.3300,0.3540,0.3795,0.4065,0.4350,
								0.4650,0.4965,0.5295,0.5640,0.6000,0.6375,0.6765,0.7170,0.7590,0.8025,
								0.8475,0.8940,0.9420,0.9915,1.0425,1.0950,1.1490,1.2045,1.2615,1.3200,
								1.3800,1.4415,1.5045,1.5690,1.6350,1.7025,1.7715,1.8420,1.9140,1.9875,
								2.0625,2.1390,2.2170,2.2965,2.3775,2.4600,2.5440,2.6295,2.7165,2.8050}
	else 
		TrueGrowth={0,0,0,0,0,0,0,0,0,0,
								0,0,0,0,0,0,0,0,0,0,
								0,0,0,0,0,0,0,0,0,0,
								0,0,0,0,0,0,0,0,0,0,
								0,0,0,0,0,0,0,0,0,0,
								0,0,0,0,0,0,0,0,0,0}
	end 	
	
	y0=TrueGrowth[x0]
	y1=TrueGrowth[x1]
	
	if x0==x1 then 
		y2=y0
	else 
		y2=y1-(y1-y0)*(PseudoGrades[x1]-growgrade)/(PseudoGrades[x1]-PseudoGrades[x0])
	end 	
		return y2*k,x0
end 
----����ս����صĸ���ȡ��ֵ���-------------------------------------------------------------------
function ZLuaPetBedgeGradeDirection()
	local GradeDirection={}
		GradeDirection["potential_hp"]				=0
		GradeDirection["potential_mp"]				=1
		GradeDirection["potential_minatk"]		=2
		GradeDirection["potential_maxatk"]		=3
		GradeDirection["potential_def"]				=4
		GradeDirection["potential_attackrate"]=5
		GradeDirection["potential_dodge"]			=6
		GradeDirection["potential_resist1"]		=7
		GradeDirection["potential_resist2"]		=8
		GradeDirection["potential_resist3"]		=9
		GradeDirection["potential_resist4"]		=10
		GradeDirection["potential_resist5"]		=11
		GradeDirection["potential_resist6"]		=12
		
		
		GradeDirection["default_hp"]					=13
		GradeDirection["default_mp"]					=14
		GradeDirection["default_minatk"]			=15
		GradeDirection["default_maxatk"]			=16
		GradeDirection["default_def"]					=17
		GradeDirection["default_attackrate"]	=18
		GradeDirection["default_dodge"]				=19
		GradeDirection["default_resist1"]			=20
		GradeDirection["default_resist2"]			=21
		GradeDirection["default_resist3"]			=22
		GradeDirection["default_resist4"]			=23
		GradeDirection["default_resist5"]			=24
		GradeDirection["default_resist6"]			=25

	return GradeDirection
end 
----------------------------------------------------------------------------------
---����ʾ�ĳɳ���
function ZLuaPetBedgeSuperPseudoGrades()
	local PseudoGrades={1000,1010,1020,1035,1055,1080,1110,1145,1185,1230,
											1280,1335,1395,1460,1530,1605,1685,1770,1860,1955,
											2055,2160,2270,2385,2505,2630,2760,2895,3035,3180,
											3330,3485,3645,3810,3980,4155,4335,4520,4710,4905,
											5105,5310,5520,5735,5955,6180,6410,6645,6885,7130,
											7380,7635,7895,8160,8430,8705,8985,9270,9560,9999}
	return PseudoGrades
end 

-----�����趨���ʻ�ȡ��λ---------------------------------------------------------
function ZLuaPetBedgeGradeChoose(mingrade,maxgrade)
	if type(mingrade)~= "number" or type(maxgrade)~= "number" then return 1 end
	mingrade=math.min(math.max(mingrade,1),60)
	maxgrade=math.max(math.min(maxgrade,60),mingrade)
		
	if mingrade>=maxgrade then return mingrade end 
	---//ԭʼ��������
	local Native_Randomgradechance={
			50000,40000,32000,25600,20480,16384,13107.2,10485.8,8388.61,6710.89,
			5368.71,4294.97,3435.97,2748.78,2199.02,1759.22,1407.37,1125.9,900.72,720.58,
			576.46,461.17,368.93,295.15,236.12,188.89,151.12,120.89,96.714,77.371,
			61.897,49.518,39.614,31.691,25.353,20.282,16.226,12.981,10.385,8.308,
			6.646,5.317,4.254,3.403,2.722,2.178,1.742,1.394,1.115,0.892,
			0.714,0.571,0.457,0.365,0.292,0.234,0.187,0.15,0.12,0.096}
	
	---//�¸�������
	local New_Randomgradechance={}
	---//�¸�������Ԫ������ԭʼ��С���к�
	local NewGradesNum=maxgrade-mingrade+1
	local Nativemingrade=mingrade
	---//����¸�������
	for i=1,NewGradesNum do
		New_Randomgradechance[i]=Native_Randomgradechance[mingrade]
		mingrade=mingrade+1	
	end 
	local NewGradeChoosed=ZPetGrade_Get_RanPoint(New_Randomgradechance)
	local NativeGradeChoosed=	NewGradeChoosed+Nativemingrade-1
	return NativeGradeChoosed
end 
-----���ݵ�λ��ö�Ӧ��ʾֵ:��ʼֵΪʵ��ֵ/�ɳ�ֵΪ�ͻ�����ʾֵ--------------------------------------
function ZLuaPetBedgeGradeData(grade,direction)
	local GradeDirection=ZLuaPetBedgeGradeDirection()
	local PseudoGrades=ZLuaPetBedgeSuperPseudoGrades()
	local gradedata={}
		---//��ʼֵΪʵ��ֵ
		gradedata[GradeDirection["default_hp"]]={10,11,12,13,14,15,16,17,18,19,
																						 20,21,22,23,24,25,26,27,28,29,
																						 30,31,32,33,34,35,36,37,38,39,
																						 40,41,42,43,44,45,46,47,48,49,
																						 50,51,52,53,54,55,56,57,58,59,
																						 60,61,62,63,64,65,66,67,68,69}		
												
		gradedata[GradeDirection["default_mp"]]={10,11,12,13,14,15,16,17,18,19,
																						 20,21,22,23,24,25,26,27,28,29,
																						 30,31,32,33,34,35,36,37,38,39,
																						 40,41,42,43,44,45,46,47,48,49,
																						 50,51,52,53,54,55,56,57,58,59,
																						 60,61,62,63,64,65,66,67,68,69}
		gradedata[GradeDirection["default_minatk"]]={10,11,12,13,14,15,16,17,18,19,
																								 20,21,22,23,24,25,26,27,28,29,
																								 30,31,32,33,34,35,36,37,38,39,
																								 40,41,42,43,44,45,46,47,48,49,
																								 50,51,52,53,54,55,56,57,58,59,
																								 60,61,62,63,64,65,66,67,68,69}
		gradedata[GradeDirection["default_maxatk"]]={15,16,17,18,19,20,21,22,23,24,
																								 25,26,27,28,29,30,31,32,33,34,
																								 35,36,37,38,39,40,41,42,43,44,
																								 45,46,47,48,49,50,51,52,53,54,
																								 55,56,57,58,59,60,61,62,63,64,
																								 65,66,67,68,69,70,71,72,73,74}
		gradedata[GradeDirection["default_def"]]={10,10,11,11,12,12,13,13,14,14,
																							15,15,16,16,17,17,18,18,19,19,
																							20,20,21,21,22,22,23,23,24,24,
																							25,25,26,26,27,27,28,28,29,29,
																							30,30,31,31,32,32,33,33,34,34,
																							35,35,36,36,37,37,38,38,39,39}
		gradedata[GradeDirection["default_attackrate"]]={110,111,112,113,114,115,116,117,118,119,
																										 120,121,122,123,124,125,126,127,128,129,
																										 130,131,132,133,134,135,136,137,138,139,
																										 140,141,142,143,144,145,146,147,148,149,
																										 150,151,152,153,154,155,156,157,158,159,
																										 160,161,162,163,164,165,166,167,168,169}
		gradedata[GradeDirection["default_dodge"]]={65,65,66,66,67,67,68,68,69,69,
																								70,70,71,71,72,72,73,73,74,74,
																								75,75,76,76,77,77,78,78,79,79,
																								80,80,81,81,82,82,83,83,84,84,
																								85,85,86,86,87,87,88,88,89,89,
																								90,90,91,91,92,92,93,93,94,94}
		gradedata[GradeDirection["default_resist1"]]={1,1,1,1,1,1,1,1,1,1,
																									2,2,2,2,2,2,2,2,2,2,
																									3,3,3,3,3,3,3,3,3,3,
																									4,4,4,4,4,4,4,4,4,4,
																									5,5,5,5,5,5,5,5,5,5,
																									6,6,6,6,6,6,6,6,6,6}
		gradedata[GradeDirection["default_resist2"]]={1,1,1,1,1,1,1,1,1,1,
																									2,2,2,2,2,2,2,2,2,2,
																									3,3,3,3,3,3,3,3,3,3,
																									4,4,4,4,4,4,4,4,4,4,
																									5,5,5,5,5,5,5,5,5,5,
																									6,6,6,6,6,6,6,6,6,6}
		gradedata[GradeDirection["default_resist3"]]={1,1,1,1,1,1,1,1,1,1,
																									2,2,2,2,2,2,2,2,2,2,
																									3,3,3,3,3,3,3,3,3,3,
																									4,4,4,4,4,4,4,4,4,4,
																									5,5,5,5,5,5,5,5,5,5,
																									6,6,6,6,6,6,6,6,6,6}
		gradedata[GradeDirection["default_resist4"]]={1,1,1,1,1,1,1,1,1,1,
																									2,2,2,2,2,2,2,2,2,2,
																									3,3,3,3,3,3,3,3,3,3,
																									4,4,4,4,4,4,4,4,4,4,
																									5,5,5,5,5,5,5,5,5,5,
																									6,6,6,6,6,6,6,6,6,6}
		gradedata[GradeDirection["default_resist5"]]={1,1,1,1,1,1,1,1,1,1,
																									2,2,2,2,2,2,2,2,2,2,
																									3,3,3,3,3,3,3,3,3,3,
																									4,4,4,4,4,4,4,4,4,4,
																									5,5,5,5,5,5,5,5,5,5,
																									6,6,6,6,6,6,6,6,6,6}
		gradedata[GradeDirection["default_resist6"]]={1,1,1,1,1,1,1,1,1,1,
																									2,2,2,2,2,2,2,2,2,2,
																									3,3,3,3,3,3,3,3,3,3,
																									4,4,4,4,4,4,4,4,4,4,
																									5,5,5,5,5,5,5,5,5,5,
																									6,6,6,6,6,6,6,6,6,6}
		---//�ɳ�ֵΪ��ôֵ
		gradedata[GradeDirection["potential_hp"]]=PseudoGrades
		gradedata[GradeDirection["potential_mp"]]=PseudoGrades
		gradedata[GradeDirection["potential_minatk"]]=PseudoGrades
		gradedata[GradeDirection["potential_maxatk"]]=PseudoGrades		
		gradedata[GradeDirection["potential_def"]]=PseudoGrades
		gradedata[GradeDirection["potential_attackrate"]]=PseudoGrades
		gradedata[GradeDirection["potential_dodge"]]=PseudoGrades
		gradedata[GradeDirection["potential_resist1"]]=PseudoGrades	
		gradedata[GradeDirection["potential_resist2"]]=PseudoGrades
		gradedata[GradeDirection["potential_resist3"]]=PseudoGrades	
		gradedata[GradeDirection["potential_resist4"]]=PseudoGrades	
		gradedata[GradeDirection["potential_resist5"]]=PseudoGrades
		gradedata[GradeDirection["potential_resist6"]]=PseudoGrades
				
		return gradedata[direction][grade]
end

-----���ݳ����ս��grade�����ǵȺ���Ҫ����--------------------------------------
function ZLuaPetStarAndMaintypeFromGrades(pet_tid,origin,Grades,usetype)
	---usetype=1 		���ڳ�ʼ������ �����Ϊ1-60��grade
	---usetype=other ���ںϳɺ���� �����Ϊʵ����ʾֵ
	local maintype,star
	local GradeDirection=ZLuaPetBedgeGradeDirection()
	local a,b,c,d,e,f,g,h,i,j,k,l,m
	---//mΪ�������� ���������
	if usetype==1 then 		
		---��ʼ����ֵ������Star����
		a=Grades[GradeDirection["potential_hp"]]
		b=Grades[GradeDirection["potential_mp"]]
		c=Grades[GradeDirection["potential_minatk"]]
		d=Grades[GradeDirection["potential_maxatk"]]
		e=Grades[GradeDirection["potential_def"]]
		f=Grades[GradeDirection["potential_attackrate"]]
		g=Grades[GradeDirection["potential_dodge"]]
		h=Grades[GradeDirection["potential_resist1"]]
		i=Grades[GradeDirection["potential_resist2"]]
		j=Grades[GradeDirection["potential_resist3"]]
		k=Grades[GradeDirection["potential_resist4"]]
		l=Grades[GradeDirection["potential_resist5"]]
		m=Grades[GradeDirection["potential_resist6"]]
	
	else 
		local SpecialIndex=ZLuaPetBedgeSpecialIndex()
		_,a=ZLuaPetTrueGrowthFromGrades(Grades[GradeDirection["potential_hp"]],SpecialIndex["hp"])
		_,b=ZLuaPetTrueGrowthFromGrades(Grades[GradeDirection["potential_mp"]],SpecialIndex["mp"])
		_,c=ZLuaPetTrueGrowthFromGrades(Grades[GradeDirection["potential_minatk"]],SpecialIndex["minatk"])
		_,d=ZLuaPetTrueGrowthFromGrades(Grades[GradeDirection["potential_maxatk"]],SpecialIndex["maxatk"])
		_,e=ZLuaPetTrueGrowthFromGrades(Grades[GradeDirection["potential_def"]],SpecialIndex["defence"])
		_,f=ZLuaPetTrueGrowthFromGrades(Grades[GradeDirection["potential_attackrate"]],SpecialIndex["atkrate"])
		_,g=ZLuaPetTrueGrowthFromGrades(Grades[GradeDirection["potential_dodge"]],SpecialIndex["dodge"])
		_,h=ZLuaPetTrueGrowthFromGrades(Grades[GradeDirection["potential_resist1"]],SpecialIndex["res1"])
		_,i=ZLuaPetTrueGrowthFromGrades(Grades[GradeDirection["potential_resist2"]],SpecialIndex["res2"])
		_,j=ZLuaPetTrueGrowthFromGrades(Grades[GradeDirection["potential_resist3"]],SpecialIndex["res3"])
		_,k=ZLuaPetTrueGrowthFromGrades(Grades[GradeDirection["potential_resist4"]],SpecialIndex["res4"])
		_,l=ZLuaPetTrueGrowthFromGrades(Grades[GradeDirection["potential_resist5"]],SpecialIndex["res5"])
		_,m=ZLuaPetTrueGrowthFromGrades(Grades[GradeDirection["potential_resist6"]],SpecialIndex["res6"])
	end		
		local starx=a+c+d+e
		local stary=b+f+g+h+i+j+k+l
		local _,_,_,totalgradelimits,_=ZLuaPetBedgeSetGrades(pet_tid,origin)
		star=math.floor(20*(starx*8+stary)/(totalgradelimits+starx*7))
		if star>20 then star=20 end 
		if star<1 then star=1 end 		
	---//�����޽����ͳ��ֵĸ���
	local MaintypeList={0,1,2,3,4,5,6,7,8,9,10,11,12}
	local MaintypeChance={100,200,100,100,100,400,200,600,600,600,600,600,0}
	maintype=MaintypeList[ZPetGrade_Get_RanPoint(MaintypeChance)]
	if maintype<0 then maintype=0 end 
	if maintype>12 then maintype=12 end 	
	return star,maintype

end 
---------------------------------------------------------------------------------------------------
----���ּ�����̬��---------------------------------------------------------------------------------
function ZPetGrade_Chance_Norm(n1)
  local n1_size=table.getn(n1)
	local Total_Chance=0
	local i,k,m
	---�����
	for i=1,n1_size do
   		Total_Chance=n1[i]+Total_Chance          
	end
 	---���ɸ���������
	local nx={}
	for k=1,n1_size do
			if k==1 then 
				nx[1]=n1[k]
			else
		    nx[k]=n1[k]+nx[k-1]              
		  end
	end
	---��������׼���ĸ���������
	local n2={}
  for m=1,n1_size do
   		if Total_Chance==0 then                 ---����ȫ0���еĴ�������{1,0,0...}
		 		n2[m]=0
				n2[1]=1
			else
				n2[m]=nx[m]/ Total_Chance
			end
	end
	---����һ���������� 
  ---ZLuaTal_Special_Print(n2)   				---$$$$������$$$$-----
	return n2
end
---------------------------------------------------------------------------------------------------
----���ճ��ָ������Ӧ��ѡȡ��λ��-----------------------------------------------------------------
function ZPetGrade_Get_RanPoint(s1)
	local js,ron1
	ron1= math.random()                
	---print("---------------------------")   ---$$$$������$$$$-----
	---print("Now the random Num is:",ron1) 	---$$$$������$$$$-----
  local p1=ZPetGrade_Chance_Norm(s1)
	for js=1,table.getn(p1) do
          if ron1<=p1[js] then 
		    	---print("So We Choose:",js) 			---$$$$������$$$$-----
    	  		return js
		  		end
	end
	return 1
end
----------------------------------------------------------------------------------------------------