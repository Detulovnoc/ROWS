# ROWS
ROWS is a 2d Puzzle game inspired by the Sega Genesis Classic "Columns."  
In ROWS, players will rotate and set rows made of 3 rowblocks on a 9x18 grid of squares. 
Each rowblock can be one of four types: Diamond, Ruby, Emerald, Sapphire
Whenever a sequence of 3 of the same rowblock type is found, the row will be "scored" and removed from the grid. When rowblocks are removed, the rowblocks around them will fall to the lowest point on the grid, and if new scoring sequences are formed the process will repeat.
As the player's score increases, the game "level" will also increase, along with the game speed.
The game is over when no new rows can be generated.  Since rows are generated randomly from the two top corners of the grid, this happens when both corners are obstructed.

#SETUP

ROWS is a Javascript game using ReactJS and React Native.
(install steps forthcoming)

#Hacktoberfest

I've submitted this repo for Hacktoberfest 2022, which I've never participated in before.
I don't expect much participation, nor am I sure what I want/expect people to work on, but I will provide a breakdown of what I'm currently working on and looking to improve:
- Expanded window support: This includes use of media queries to control the size of the grid and other graphical elements so they are visible on smaller screens.
- Touch controls: In order to make this workable on mobile devices, basic touch controls are needed and are currently WIP.
- HI Scores: Games of this sort traditionally have score tracking, which I currently do not have.  I don't have any particular design for this in mind, but eventually it will be addressed.
- Rework row graphics: The current rowblock types are based on open source images I found.  Eventually, these will be replaced by graphics that are made specifically for ROWS.

Thank you in advance to anyone who does decide to contribute!
