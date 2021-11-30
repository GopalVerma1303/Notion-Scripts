FOLLOWING IS THE CODE FOR CREATING A PROGRESS BAR :-
(prop("Read Pg") / prop("Total Pg") >= 1) ? "100%" : 
format(slice("■■■■■■■■■■", 0, floor(prop("Read Pg") / 
prop("Total Pg") * 10)) + format(slice("▢▢▢▢▢▢▢▢▢▢", 0,
ceil(10 - prop("Read Pg") / prop("Total Pg") * 10)) + " " +
format(round(prop("Read Pg") / prop("Total Pg") * 100)) + 
(empty(prop("Read Pg")) ? "0%" : "%")))
