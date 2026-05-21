insert into public.global_settings(id,default_payout_cap,vip_payout_cap,coin_spawn_rate,ticker_messages) values(1,50,100,65,'["Transparent reward caps are enabled","Play fairly and enjoy Eid"]'::jsonb) on conflict(id) do update set default_payout_cap=excluded.default_payout_cap;
insert into public.leaderboard(name,earnings,is_real,rank,badge) values
('Tuba',760,false,1,'👑 Crown'),('Arafat',340,false,2,'🔥 Hot'),('Sakib',270,false,3,'⭐ Star'),('Nadia',215,false,4,''),('Rafiq',190,false,5,''),('Lamiya',165,false,6,''),('Tanvir',140,false,7,''),('Sonia',120,false,8,'') on conflict do nothing;
