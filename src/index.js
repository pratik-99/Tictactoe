import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square (props) {
 
    
      return (
        <button  
        className="square" 
        onClick={props.onClick}>
          {props.value}
        </button>
      );
    
  }
  
  class Board extends React.Component {
    constructor(props){
      super(props);
      this.state={
        squares:Array(9).fill(null),
        Next:true}
    }
    handelClick(i){
      const squares=this.state.squares.slice();
      if(calculateWinner(squares) || squares[i]){
        return ;
      }
      squares[i]=this.state.Next?'X':'O';
      this.setState({
        squares:squares,
        Next:!this.state.Next});
    }

    renderSquare(i) {
      return (<Square value={this.state.squares[i]}
                     onClick={()=>this.handelClick(i)}/>);
    }
  
    render() {
      const winner=calculateWinner(this.state.squares); 
      let status ;
      if (winner){
        status = 'Winner is '+ winner;
      }
      else if(this.state.squares.some((v)=>{return v===null})){
        status= (this.state.Next ? 'X' : 'O' ) + " It's your turn" 
      }
      else{
        status='The Game is draw'
      }
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  function calculateWinner(squares)
  {
    const winSquare=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],

    ];
    for(let i=0;i<winSquare.length;i++){
      const [a,b,c]=winSquare[i];
      if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
        return squares[a];
      }
    }
    return null;
  }
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  