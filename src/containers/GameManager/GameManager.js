import React, {Component} from 'react';
import RowFactory from '../../containers/GameManager/RowFactory/RowFactory'
import RowBlock from '../../containers/GameManager/RowFactory/RowBlock/RowBlock'
import Aux from '../../hoc/_Aux'
import {pluck, LEFT, RIGHT, DOWN, STOP} from '../../hoc/utils'
import styles from './GameManager.module.css'


class GameManager extends Component {
    constructor(props) {
        super(props);
        
        this.rowBoard = new Array(18).fill(0).map(() => new Array(9).fill(0));
        this.scoreArray = [{"column" : 'null', "row" : 'null'}];

        this.state = {
            rowObjHorz: 0,
            rowObjVert: 0,
            rowObjDir: RIGHT,
            rowObjBlock1: 0,
            rowObjBlock2: 0,
            rowObjBlock3: 0,
            nextBlock1: Math.floor((Math.random() * 4)) + 1,
            nextBlock2: Math.floor((Math.random() * 4)) + 1,
            nextBlock3: Math.floor((Math.random() * 4)) + 1,
            score: 0,
            speed: 1000,
            level: 1,
            gameOver: false
        }
    };

    render() {

        return (
            <Aux>
                <main className = {styles.NextRowWindow}>
                    <div className = {styles.NextBlock1}>
                        <RowBlock type={this.state.nextBlock1}/>
                    </div>
                    <div className = {styles.NextBlock2}>
                        <RowBlock type={this.state.nextBlock2}/>
                    </div>
                    <div className = {styles.NextBlock3}>
                        <RowBlock type={this.state.nextBlock3}/>
                    </div>
                </main>
                <p className={styles.NextLabel}>Next Row</p>
                <main className={styles.Grid}>
                    <RowFactory 
                        leftPos={this.state.rowObjHorz}
                        topPos={this.state.rowObjVert}
                        objDir={this.state.rowObjDir}
                        block1={this.state.rowObjBlock1}
                        block2={this.state.rowObjBlock2}
                        block3={this.state.rowObjBlock3}
                     /> 
                    <div className = {styles.Column0}>
                        {this.rowBoard[0].map( (gridBlock, index) => { return <RowBlock key={index} style={{top: (index * 50) + 'px'}} className = {styles.Column0} type={gridBlock} />})}
                    </div>
                    <div className = {styles.Column1}>
                        {this.rowBoard[1].map( (gridBlock, index) => { return <RowBlock key={index} style={{top: (index * 50) + 'px'}} className = {styles.Column1} type={gridBlock} />})}
                    </div>  
                    <div className = {styles.Column2}>
                        {this.rowBoard[2].map( (gridBlock, index) => { return <RowBlock key={index} style={{top: (index * 50) + 'px'}} className = {styles.Column0} type={gridBlock} />})}
                    </div>
                    <div className = {styles.Column3}>
                        {this.rowBoard[3].map( (gridBlock, index) => { return <RowBlock key={index} style={{top: (index * 50) + 'px'}} className = {styles.Column1} type={gridBlock} />})}
                    </div> 
                    <div className = {styles.Column4}>
                        {this.rowBoard[4].map( (gridBlock, index) => { return <RowBlock key={index} style={{top: (index * 50) + 'px'}} className = {styles.Column1} type={gridBlock} />})}
                    </div> 
                    <div className = {styles.Column5}>
                        {this.rowBoard[5].map( (gridBlock, index) => { return <RowBlock key={index} style={{top: (index * 50) + 'px'}} className = {styles.Column1} type={gridBlock} />})}
                    </div> 
                    <div className = {styles.Column6}>
                        {this.rowBoard[6].map( (gridBlock, index) => { return <RowBlock key={index} style={{top: (index * 50) + 'px'}} className = {styles.Column1} type={gridBlock} />})}
                    </div> 
                    <div className = {styles.Column7}>
                        {this.rowBoard[7].map( (gridBlock, index) => { return <RowBlock key={index} style={{top: (index * 50) + 'px'}} className = {styles.Column1} type={gridBlock} />})}
                    </div> 
                    <div className = {styles.Column8}>
                        {this.rowBoard[8].map( (gridBlock, index) => { return <RowBlock key={index} style={{top: (index * 50) + 'px'}} className = {styles.Column1} type={gridBlock} />})}
                    </div> 
                    <div className = {styles.Column9}>
                        {this.rowBoard[9].map( (gridBlock, index) => { return <RowBlock key={index} style={{top: (index * 50) + 'px'}} className = {styles.Column1} type={gridBlock} />})}
                    </div> 
                    <div className = {styles.Column10}>
                        {this.rowBoard[10].map( (gridBlock, index) => { return <RowBlock key={index} style={{top: (index * 50) + 'px'}} className = {styles.Column1} type={gridBlock} />})}
                    </div> 
                    <div className = {styles.Column11}>
                        {this.rowBoard[11].map( (gridBlock, index) => { return <RowBlock key={index} style={{top: (index * 50) + 'px'}} className = {styles.Column1} type={gridBlock} />})}
                    </div> 
                    <div className = {styles.Column12}>
                        {this.rowBoard[12].map( (gridBlock, index) => { return <RowBlock key={index} style={{top: (index * 50) + 'px'}} className = {styles.Column1} type={gridBlock} />})}
                    </div> 
                    <div className = {styles.Column13}>
                        {this.rowBoard[13].map( (gridBlock, index) => { return <RowBlock key={index} style={{top: (index * 50) + 'px'}} className = {styles.Column1} type={gridBlock} />})}
                    </div> 
                    <div className = {styles.Column14}>
                        {this.rowBoard[14].map( (gridBlock, index) => { return <RowBlock key={index} style={{top: (index * 50) + 'px'}} className = {styles.Column1} type={gridBlock} />})}
                    </div> 
                    <div className = {styles.Column15}>
                        {this.rowBoard[15].map( (gridBlock, index) => { return <RowBlock key={index} style={{top: (index * 50) + 'px'}} className = {styles.Column1} type={gridBlock} />})}
                    </div> 
                    <div className = {styles.Column16}>
                        {this.rowBoard[16].map( (gridBlock, index) => { return <RowBlock key={index} style={{top: (index * 50) + 'px'}} className = {styles.Column1} type={gridBlock} />})}
                    </div> 
                    <div className = {styles.Column17}>
                        {this.rowBoard[17].map( (gridBlock, index) => { return <RowBlock key={index} style={{top: (index * 50) + 'px'}} className = {styles.Column1} type={gridBlock} />})}
                    </div>                  
                </main>
                <p className={styles.Score}>Score: {this.state.score}</p>
                <p className={styles.NextLabel}>Level: {this.state.level}</p>
                <p className={styles.Score}>{this.state.gameOver ? "Game Over" : ""}</p>
            </Aux>
        );
    }

    updateRowObj = () => {
        let horz = this.state.rowObjHorz;
        let vert = this.state.rowObjVert;
        let dir = this.state.rowObjDir;
        let update = false;

        if(this.state.rowObjDir === RIGHT) {
            if(this.state.rowObjHorz < 15)
            {
                if(this.state.rowObjHorz < 14 && (this.rowBoard[this.state.rowObjHorz + 3][0] !== 0))
                {
                    dir = DOWN;
                    update = true;
                }
                else 
                {
                    horz = this.state.rowObjHorz + 1;
                    update = true;
                }
            }
            else
            {
                dir = DOWN;
                update = true;
            }
        }

        else if(this.state.rowObjDir === LEFT) {
            if(this.state.rowObjHorz > 0)
            {
                if(this.state.rowObjHorz > 1 && (this.rowBoard[this.state.rowObjHorz -1][0] !== 0))
                {
                    dir = DOWN;
                    update = true;
                }
                else 
                {
                    horz = this.state.rowObjHorz - 1;
                    update = true;
                }
            }
            else
            {
                dir = DOWN;
                update = true;
            }
        }

        else if(this.state.rowObjDir === DOWN) {
            if(this.state.rowObjVert < 8)
            {
                if(((this.rowBoard[this.state.rowObjHorz][this.state.rowObjVert + 1] !== 0) ||
                    (this.rowBoard[this.state.rowObjHorz + 1][this.state.rowObjVert + 1] !== 0) ||
                    (this.rowBoard[this.state.rowObjHorz + 2][this.state.rowObjVert + 1] !== 0)))
                {
                    this.bindRowObjectToGrid();
                    this.updateScore();
                    this.resetActiveObject();
                }
                else 
                {
                    vert = this.state.rowObjVert + 1;
                    update = true;
                }
            }
            else
            {
                this.bindRowObjectToGrid();
                this.updateScore();
                this.resetActiveObject();
            }
        }
        
        if(update){
            this.setState({
                rowObjHorz: horz,
                rowObjVert: vert,
                rowObjDir: dir,
            }, function() {console.log(this.state)})  
        }
    }

    resetActiveObject = () => {
        let startDir;
        let originPos = 0;
        let gameContinue = true;

        if((this.rowBoard[0][0] !== 0 || this.rowBoard[1][0] !== 0 || this.rowBoard[2][0] !== 0)&&
           (this.rowBoard[15][0] !== 0 || this.rowBoard[16][0] !== 0 || this.rowBoard[17][0] !== 0)) {
            console.log("game over");
            gameContinue = false;
            startDir = STOP;
        }
        else if(this.rowBoard[0][0] !== 0 || this.rowBoard[1][0] !== 0 || this.rowBoard[2][0] !== 0) {
            startDir = LEFT;
        }
        else if(this.rowBoard[15][0] !== 0 || this.rowBoard[16][0] !== 0 || this.rowBoard[17][0] !== 0) {
            startDir = RIGHT;
        }
        else
        {
            startDir = pluck([LEFT,RIGHT]);
        }

        if(gameContinue)
        {
            const block1 = Math.floor((Math.random() * 4)) + 1;
            const block2 = Math.floor((Math.random() * 4)) + 1;
            const block3 = Math.floor((Math.random() * 4)) + 1;
    
    
            if(startDir === LEFT)
            {
                originPos = 15;
            } 
    
            this.setState({
                rowObjHorz: originPos,
                rowObjVert: 0,
                rowObjDir: startDir,
                rowObjBlock1: this.state.nextBlock1,
                rowObjBlock2: this.state.nextBlock2,
                rowObjBlock3: this.state.nextBlock3,
                nextBlock1: block1,
                nextBlock2: block2,
                nextBlock3: block3,
            }, function() {console.log(this.state)});  
        }
        else
        {
            this.setState({
                rowObjHorz: 0,
                rowObjVert: 0,
                rowObjDir: startDir,
                rowObjBlock1: 0,
                rowObjBlock2: 0,
                rowObjBlock3: 0,
                nextBlock1: 0,
                nextBlock2: 0,
                nextBlock3: 0,
                gameOver: true
            }, function() {console.log(this.state)});  
        }
    }

    bindRowObjectToGrid = () => {
        this.rowBoard[this.state.rowObjHorz][this.state.rowObjVert] = this.state.rowObjBlock1;
        this.rowBoard[this.state.rowObjHorz+1][this.state.rowObjVert] = this.state.rowObjBlock2;
        this.rowBoard[this.state.rowObjHorz+2][this.state.rowObjVert] = this.state.rowObjBlock3;
        console.log(this.rowBoard);
    }

    updateScore = () => {
        console.log("Begin Score Update")
        let doScore = false;
        let updateScore = false;
        for(var i = 0; i < 18; i++) {
            for(var j = 0; j < 9; j++) {
                if(this.rowBoard[i][j] !== 0) {
                    console.log(this.scoreArray);
                    doScore = this.checkForScore(i,j);
                    console.log("check for score: " + doScore);
                    console.log(this.scoreArray);
                    if(doScore === true) {
                        updateScore = doScore;
                    }
                }
            }
        }
        if(updateScore === true){
            this.incAndShift();            
            this.scoreArray.length = 1;
            this.updateScore();
            const speedMult = this.state.speed - 25;
            if((this.state.score > (1000 * this.state.level)) && speedMult >= 150)
            {
                clearInterval(this.gameInterval);
                this.gameInterval = setInterval(this.updateRowObj, speedMult);                            
                this.setState({
                    speed: speedMult,
                    level: this.state.level + 1
                }, function() {console.log(this.state)});
            }
        }
    }

    incAndShift = () => {
        // we will shift each column downward by one 
        // whenever we score
        let scoreMult = 0;      

        for(var i = 1; i < this.scoreArray.length; i++)
        {
            if(this.rowBoard[this.scoreArray[i].column][this.scoreArray[i].row] !== 0) {
                this.rowBoard[this.scoreArray[i].column][this.scoreArray[i].row] = 0;
                scoreMult += 100;  
            }     
        }

        this.setState({
            score: this.state.score + scoreMult
        }, function() {console.log(this.state)}); 

        for(var j = 0; j < 18; j++) {
            for(var rowIndex = 8; rowIndex >= 0; rowIndex--) {
                if(this.rowBoard[j][rowIndex] === 0) {
                    let shiftVal = rowIndex - 1;
                    while(shiftVal >= 0) {
                        if(this.rowBoard[j][shiftVal] !== 0){
                            this.rowBoard[j][rowIndex] = this.rowBoard[j][shiftVal];
                            this.rowBoard[j][shiftVal] = 0;
                            break;
                        }
                        shiftVal--;
                    }
                }
            }
        }
    }

    checkForScore = (column, row) => {
        const checkVal = this.rowBoard[column][row];
        let retVal = false;
        console.log("Begin Score Check");
        // check left of current position
        if(column > 0) {
            for(var left = column - 1; left >= 0; left--){
                if(this.rowBoard[left][row] === checkVal){
                    // we need to make sure we have at least 3 in a sequence
                    // all the complicated scenarios are attached to the adjacent block
                    if((left === column - 1) && (left - 1 >= 0) && this.rowBoard[left-1][row] === checkVal) {
                        this.scoreArray = [...this.scoreArray, {"column" : left, "row" : row}];
                        console.log(this.scoreArray);
                        retVal = true;
                    }
                    else if((left === column - 1) && (column + 1 <= 17) && (this.rowBoard[column+1][row] === checkVal)) {
                        this.scoreArray = [...this.scoreArray, {"column" : left, "row" : row}];
                        console.log(this.scoreArray);
                        retVal = true;
                    }
                    else if(left !== column - 1) {
                        this.scoreArray = [...this.scoreArray, {"column" : left, "row" : row}];
                        console.log(this.scoreArray);
                        retVal = true;
                    }
                    else {
                        break;
                    }

                }
                // as soon as we encounter something different, we change direction
                else {
                    break;
                }
            }
        }
        // check right of current position
        if(column < 17){
            for(var right = column + 1; right <= 17; right++){
                if(this.rowBoard[right][row] === checkVal){
                    // we need to make sure we have at least 3 in a sequence
                    // all the complicated scenarios are attached to the adjacent block
                    if((right === column + 1) && (right + 1 <= 17) && this.rowBoard[right+1][row] === checkVal) {
                        this.scoreArray = [...this.scoreArray, {"column" : right, "row" : row}];
                        console.log(this.scoreArray);
                        retVal = true;
                    }
                    else if((right === column + 1) && (column - 1 >= 0) && (this.rowBoard[column-1][row] === checkVal)) {
                        this.scoreArray = [...this.scoreArray, {"column" : right, "row" : row}];
                        console.log(this.scoreArray);
                        retVal = true;
                    }
                    else if(right !== column + 1) {
                        this.scoreArray = [...this.scoreArray, {"column" : right, "row" : row}];
                        console.log(this.scoreArray);
                        retVal = true;
                    }
                    else {
                        break;
                    }

                }
                // as soon as we encounter something different, we change direction
                else {
                    break;
                }
            }
        }
        // check above of current position
        if(row > 0) {
            for(var top = row - 1; top >= 0; top--){
                if(this.rowBoard[column][top] === checkVal){
                    // we need to make sure we have at least 3 in a sequence
                    // all the complicated scenarios are attached to the adjacent block
                    if((top === row - 1) && (top - 1 >= 0) && this.rowBoard[column][top-1] === checkVal) {
                        this.scoreArray = [...this.scoreArray, {"column" : column, "row" : top}];
                        console.log(this.scoreArray);
                        retVal = true;
                    }
                    else if((top === row - 1) && (row + 1 <= 17) && (this.rowBoard[column][row+1] === checkVal)) {
                        this.scoreArray = [...this.scoreArray, {"column" : column, "row" : top}];
                        console.log(this.scoreArray);
                        retVal = true;
                    }
                    else if(top !== row - 1) {
                        this.scoreArray = [...this.scoreArray, {"column" : column, "row" : top}];
                        console.log(this.scoreArray);
                        retVal = true;
                    }
                    else {
                        break;
                    }

                }
                // as soon as we encounter something different, we change direction
                else {
                    break;
                }
            }
        }
        // check below of current position
        if(row < 8){
            for(var bot = row + 1; bot <= 8; bot++){
                if(this.rowBoard[column][bot] === checkVal){
                    // we need to make sure we have at least 3 in a sequence
                    // all the complicated scenarios are attached to the adjacent block
                    if((bot === row + 1) && (bot + 1 <= 8) && this.rowBoard[column][bot+1] === checkVal) {
                        this.scoreArray = [...this.scoreArray, {"column" : column, "row" : bot}];
                        console.log(this.scoreArray);
                        retVal = true;
                    }
                    else if((bot === row + 1) && (row - 1 >= 0) && (this.rowBoard[column][row-1] === checkVal)) {
                        this.scoreArray = [...this.scoreArray, {"column" : column, "row" : bot}];
                        console.log(this.scoreArray);
                        retVal = true;
                    }
                    else if(bot !== row + 1) {
                        this.scoreArray = [...this.scoreArray, {"column" : column, "row" : bot}];
                        console.log(this.scoreArray);
                        retVal = true;
                    }
                    else {
                        break;
                    }

                }
                // as soon as we encounter something different, we change direction
                else {
                    break;
                }
            }
        }
        // check top left of current position
        if(column > 0 && row > 0){
            var top = row;
            for(var left = column - 1; left >= 0; left--){
                if(top - 1 >= 0) {
                    top--;
                    if(this.rowBoard[left][top] === checkVal){
                        // we need to make sure we have at least 3 in a sequence
                        // all the complicated scenarios are attached to the adjacent block
                        if((left === column - 1) && (left - 1 >= 0) && (top === row - 1) && (top - 1 >= 0) && (this.rowBoard[left-1][top-1] === checkVal)) {
                            this.scoreArray = [...this.scoreArray, {"column" : left, "row" : top}];
                            console.log(this.scoreArray);
                            retVal = true;
                        }
                        else if((left === column - 1) && (column + 1 <= 17) && (top === row - 1) && (row + 1 <= 8) && (this.rowBoard[column+1][row+1] === checkVal)) {
                            this.scoreArray = [...this.scoreArray, {"column" : left, "row" : top}];
                            console.log(this.scoreArray);
                            retVal = true;
                        }
                        else if((left !== column - 1) && (top !== row - 1)) {
                            this.scoreArray = [...this.scoreArray, {"column" : left, "row" : top}];
                            console.log(this.scoreArray);
                            retVal = true;
                        }
                        else {
                            break;
                        }

                    }
                    // as soon as we encounter something different, we change direction
                    else {
                        break;
                    }
                }
            }
        }
        // check bot left of current position
        if(column > 0 && row < 8){
            var bot = row;
            for(var left = column - 1; left >= 0; left--){
                if(bot + 1 <= 8) {
                    bot++;
                    if(this.rowBoard[left][bot] === checkVal){
                        // we need to make sure we have at least 3 in a sequence
                        // all the complicated scenarios are attached to the adjacent block
                        if((left === column - 1) && (left - 1 >= 0) && (bot === row + 1) && (bot + 1 <= 8) && (this.rowBoard[left-1][bot+1] === checkVal)) {
                            this.scoreArray = [...this.scoreArray, {"column" : left, "row" : bot}];
                            console.log(this.scoreArray);
                            retVal = true;
                        }
                        else if((left === column - 1) && (column + 1 <= 17) && (bot === row + 1) && (row - 1 >= 0) && (this.rowBoard[column+1][row-1] === checkVal)) {
                            this.scoreArray = [...this.scoreArray, {"column" : left, "row" : bot}];
                            console.log(this.scoreArray);
                            retVal = true;
                        }
                        else if((left !== column - 1) && (bot !== row + 1)) {
                            this.scoreArray = [...this.scoreArray, {"column" : left, "row" : bot}];
                            console.log(this.scoreArray);
                            retVal = true;
                        }
                        else {
                            break;
                        }

                    }
                    // as soon as we encounter something different, we change direction
                    else {
                        break;
                    }
                }
            }
        }
        // check top right of current position
        if(column < 17 && row > 0){
            var top = row;
            for(var right = column + 1; right <= 17; right++){
                if(top - 1 >= 0) {
                    top--;
                    if(this.rowBoard[right][top] === checkVal){
                        // we need to make sure we have at least 3 in a sequence
                        // all the complicated scenarios are attached to the adjacent block
                        if((right === column + 1) && (right + 1 <= 17) && (top === row - 1) && (top - 1 >= 0) && (this.rowBoard[right+1][top-1] === checkVal)) {
                            this.scoreArray = [...this.scoreArray, {"column" : right, "row" : top}];
                            console.log(this.scoreArray);
                            retVal = true;
                        }
                        else if((right === column + 1) && (column - 1 >= 0) && (top === row - 1) && (row + 1 <= 8) && (this.rowBoard[column-1][row+1] === checkVal)) {
                            this.scoreArray = [...this.scoreArray, {"column" : right, "row" : top}];
                            console.log(this.scoreArray);
                            retVal = true;
                        }
                        else if((right !== column + 1) && (top !== row - 1)) {
                            this.scoreArray = [...this.scoreArray, {"column" : right, "row" : top}];
                            console.log(this.scoreArray);
                            retVal = true;
                        }
                        else {
                            break;
                        }

                    }
                    // as soon as we encounter something different, we change direction
                    else {
                        break;
                    }
                }
            }
        }
        // check bot right of current position
        if(column < 17 && row < 8){
            var bot = row;
            for(var right = column + 1; left <= 17; left++){
                if(bot + 1 <= 8) {
                    bot++;
                    if(this.rowBoard[right][bot] === checkVal){
                        // we need to make sure we have at least 3 in a sequence
                        // all the complicated scenarios are attached to the adjacent block
                        if((right === column + 1) && (right + 1 <= 17) && (bot === row + 1) && (bot + 1 <= 8) && (this.rowBoard[right+1][bot+1] === checkVal)) {
                            this.scoreArray = [...this.scoreArray, {"column" : right, "row" : bot}];
                            console.log(this.scoreArray);
                            retVal = true;
                        }
                        else if((right === column + 1) && (column - 1 >= 0) && (bot === row + 1) && (row - 1 >= 0) && (this.rowBoard[column-1][row-1] === checkVal)) {
                            this.scoreArray = [...this.scoreArray, {"column" : right, "row" : bot}];
                            console.log(this.scoreArray);
                            retVal = true;
                        }
                        else if((right !== column + 1) && (bot !== row + 1)) {
                            this.scoreArray = [...this.scoreArray, {"column" : right, "row" : bot}];
                            console.log(this.scoreArray);
                            retVal = true;
                        }
                        else {
                            break;
                        }

                    }
                    // as soon as we encounter something different, we change direction
                    else {
                        break;
                    }
                }
            }
        }
        console.log("Finish Score Check");
        if(retVal === true) {            
            this.scoreArray = [...this.scoreArray,{"column" : column, "row" : row}];
        }
        return retVal;
    }
    
    handleKeyDown = (key) => {
        switch(key.keyCode) {
            case 87:
                const block1 = this.state.rowObjBlock2;
                const block2 = this.state.rowObjBlock3;
                const block3 = this.state.rowObjBlock1;
                this.setState({
                    rowObjBlock1: block1,
                    rowObjBlock2: block2,
                    rowObjBlock3: block3,
                }, function() {console.log(this.state)}); 
                break;
            case 83:
                if(((this.rowBoard[this.state.rowObjHorz][this.state.rowObjVert + 1] !== 0) ||
                    (this.rowBoard[this.state.rowObjHorz + 1][this.state.rowObjVert + 1] !== 0) ||
                    (this.rowBoard[this.state.rowObjHorz + 2][this.state.rowObjVert + 1] !== 0)))
                {
                    console.log("movement blocked");
                }
                else if(this.state.rowObjVert < 8){
                    const downMove = this.state.rowObjVert + 1;
                    this.setState({rowObjVert: downMove,
                                    rowObjDir: DOWN}
                    , function() {console.log(this.state)});
                }
                break;
            case 65:
                if(this.state.rowObjHorz > 1 && (this.rowBoard[this.state.rowObjHorz - 1][this.state.rowObjVert] !== 0))
                {
                    console.log("movement blocked");
                }
                else if(this.state.rowObjHorz > 0){
                    const leftMove = this.state.rowObjHorz - 1;
                    this.setState({rowObjHorz: leftMove,
                                rowObjDir: DOWN}
                    , function() {console.log(this.state)});                        
                }
                break;
            case 68:
                if(this.state.rowObjHorz < 14 && (this.rowBoard[this.state.rowObjHorz + 3][this.state.rowObjVert] !== 0))
                {
                    console.log("movement blocked");
                }
                else if(this.state.rowObjHorz < 15){
                    const rightMove = this.state.rowObjHorz + 1;
                    this.setState({rowObjHorz: rightMove,
                                    rowObjDir: DOWN}
                    , function() {console.log(this.state)});
                }
                break;
            default:
                break;
        }
        
        console.log ('pressed key ' + key.keyCode);
    }

    startGame = () => {
        this.initialize();
    }
    
    initialize = () => {
        this.gameInterval = setInterval(this.updateRowObj, 1000);
        this.setState({
            score: 0,
            speed: 1000
        }, function() {console.log(this.state)});
        this.resetActiveObject();
    }

    componentDidMount() {
        this.startGame();
        window.onkeydown = this.handleKeyDown;
    }

    componentWillUnmount() {
        clearInterval(this.gameInterval);
    }
}

export default GameManager;