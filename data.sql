insert into locations values ('s1');
insert into characters values (null, 1, 0, 10, 10, 10, 10, 10);
insert into users values ('konra', 'a', 's1', 1);

insert into elements (location, x, y, w, h) values ('s1', 0, 0, 367, 188);
insert into elements (location, x, y, w, h) values ('s1', 362, 0, 310, 64);
insert into elements (location, x, y, w, h) values ('s1', 670, 0, 330, 180);
insert into elements values (0, 's1', 509, 180, 96, 58, 519, 208, 594, 231, 'assets/s1/c1.png');
insert into elements values (0, 's1', 691, 186, 192, 56, 704, 209, 876, 230, 'assets/s1/c2.png');
insert into elements values (0, 's1', 636, 338, 364, 162, 0, 0, 0, 0, 'assets/s1/roof.png');

insert into enemies values ('clone', 'Clone', 5, 3, 2, 5, 5, 1);

insert into location_enemies values ('s1', 'clone');
