f = {};
function f:GroundMove(x,y,z)
	repeat
	if(not AddMoveTask(f.self,x,y,z)) then
	f:Sleep(5);
	end
	coroutine.yield(nil);	--1 mean ??
	--检查坐标是否达到
	until CheckSelfDistance(f.self, x,y,z) < 3;
end

function f:Sleep(t)
	f.wait = t;
	coroutine.yield(1);	--1 mean sleep
end

function f:Shutdown(t)
	local count = t;
	repeat
	f:Sleep(1);
	Say(f.self,"Server shutdown:"..t.."sec");
	t = t - 1;
	until t < 0;
end


function Main()
	
	f:Shutdown(10);

	while(1) 
	do
	f:GroundMove(-120.0,28.103,-30.0);
	f:Sleep(2);

	local r1 = math.random(1,99);
	local r2 = math.random(1,20);
	local r3 = math.random(1,4);
	local t = "";
	local r4;
	t = t..r1;
	if(r3 == 1) then
	t = t.."+";
	r4 = r1 + r2;
	elseif(r3 == 2) then
	t = t.."-";
	r4 = r1 - r2;
	elseif(r3 == 3) then
	t = t.."*";
	r4 = r1 * r2;
	elseif(r3 == 4) then
	t = t.."/";
	r4 = r1 / r2;
	end;
	t = t..r2;
	Say(f.self,"Q: "..t.."=?");

--	f:GroundMove(-140.0,28.103,-30.0);
	f:GroundMove(-75.0,28.103,-30.0);
--	f:GroundMove(-75.0,28.103,10.0);
--	f:GroundMove(-75.0,28.103,-30.0);
	Say(f.self,"A: "..t.."="..r4);
	f:GroundMove(-100.0,28.103,-30.0);
	f:Sleep(2);
	end
end

function Init(x)
	f.t = coroutine.create(Main);
	f.self = x;
end

function Heartbeat()
	if(f.op) then
		local rst = f.op;
		if(rst == 1) then
			if(f.wait) then 
			f.wait = f.wait - 1; 
			return;
			end;
			if(not f.wait or not f.wait <= 0) then
				f.wait = 0;
				f.op = nil;
			end
		end
	end
	f.op = coroutine.resume(f.t);
end

